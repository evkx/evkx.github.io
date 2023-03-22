function Xw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={},Jw={get exports(){return Ja},set exports(e){Ja=e}},$u={},T={},Yw={get exports(){return T},set exports(e){T=e}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),ek=Symbol.for("react.portal"),tk=Symbol.for("react.fragment"),nk=Symbol.for("react.strict_mode"),rk=Symbol.for("react.profiler"),ok=Symbol.for("react.provider"),ik=Symbol.for("react.context"),ak=Symbol.for("react.forward_ref"),sk=Symbol.for("react.suspense"),lk=Symbol.for("react.memo"),uk=Symbol.for("react.lazy"),h_=Symbol.iterator;function ck(e){return e===null||typeof e!="object"?null:(e=h_&&e[h_]||e["@@iterator"],typeof e=="function"?e:null)}var Wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zy=Object.assign,Hy={};function ea(e,t,n){this.props=e,this.context=t,this.refs=Hy,this.updater=n||Wy}ea.prototype.isReactComponent={};ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vy(){}Vy.prototype=ea.prototype;function Vp(e,t,n){this.props=e,this.context=t,this.refs=Hy,this.updater=n||Wy}var qp=Vp.prototype=new Vy;qp.constructor=Vp;Zy(qp,ea.prototype);qp.isPureReactComponent=!0;var m_=Array.isArray,qy=Object.prototype.hasOwnProperty,Kp={current:null},Ky={key:!0,ref:!0,__self:!0,__source:!0};function Qy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)qy.call(t,r)&&!Ky.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Cs,type:e,key:a,ref:l,props:i,_owner:Kp.current}}function dk(e,t){return{$$typeof:Cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cs}function fk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var __=/\/+/g;function cd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fk(""+e.key):t.toString(36)}function Pl(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Cs:case ek:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+cd(l,0):r,m_(i)?(n="",e!=null&&(n=e.replace(__,"$&/")+"/"),Pl(i,t,n,"",function(f){return f})):i!=null&&(Qp(i)&&(i=dk(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(__,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",m_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+cd(a,u);l+=Pl(a,t,n,d,i)}else if(d=ck(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+cd(a,u++),l+=Pl(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ol(e,t,n){if(e==null)return e;var r=[],i=0;return Pl(e,r,"","",function(a){return t.call(n,a,i++)}),r}function pk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jt={current:null},Cl={transition:null},hk={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Kp};Se.Children={map:ol,forEach:function(e,t,n){ol(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ol(e,function(){t++}),t},toArray:function(e){return ol(e,function(t){return t})||[]},only:function(e){if(!Qp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=ea;Se.Fragment=tk;Se.Profiler=rk;Se.PureComponent=Vp;Se.StrictMode=nk;Se.Suspense=sk;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hk;Se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zy({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Kp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)qy.call(t,d)&&!Ky.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Cs,type:e.type,key:i,ref:a,props:r,_owner:l}};Se.createContext=function(e){return e={$$typeof:ik,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ok,_context:e},e.Consumer=e};Se.createElement=Qy;Se.createFactory=function(e){var t=Qy.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:ak,render:e}};Se.isValidElement=Qp;Se.lazy=function(e){return{$$typeof:uk,_payload:{_status:-1,_result:e},_init:pk}};Se.memo=function(e,t){return{$$typeof:lk,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=Cl.transition;Cl.transition={};try{e()}finally{Cl.transition=t}};Se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Se.useCallback=function(e,t){return jt.current.useCallback(e,t)};Se.useContext=function(e){return jt.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return jt.current.useDeferredValue(e)};Se.useEffect=function(e,t){return jt.current.useEffect(e,t)};Se.useId=function(){return jt.current.useId()};Se.useImperativeHandle=function(e,t,n){return jt.current.useImperativeHandle(e,t,n)};Se.useInsertionEffect=function(e,t){return jt.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return jt.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return jt.current.useMemo(e,t)};Se.useReducer=function(e,t,n){return jt.current.useReducer(e,t,n)};Se.useRef=function(e){return jt.current.useRef(e)};Se.useState=function(e){return jt.current.useState(e)};Se.useSyncExternalStore=function(e,t,n){return jt.current.useSyncExternalStore(e,t,n)};Se.useTransition=function(){return jt.current.useTransition()};Se.version="18.2.0";(function(e){e.exports=Se})(Yw);const Z=$y(T),Ya=Xw({__proto__:null,default:Z},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mk=T,_k=Symbol.for("react.element"),gk=Symbol.for("react.fragment"),vk=Object.prototype.hasOwnProperty,yk=mk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bk={key:!0,ref:!0,__self:!0,__source:!0};function Gy(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)vk.call(t,r)&&!bk.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_k,type:e,key:a,ref:l,props:i,_owner:yk.current}}$u.Fragment=gk;$u.jsx=Gy;$u.jsxs=Gy;(function(e){e.exports=$u})(Jw);const xk=Ja.Fragment,ie=Ja.jsx,ut=Ja.jsxs;var Wi={},wk={get exports(){return Wi},set exports(e){Wi=e}},on={},cf={},kk={get exports(){return cf},set exports(e){cf=e}},Xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,J){var Q=D.length;D.push(J);e:for(;0<Q;){var E=Q-1>>>1,I=D[E];if(0<i(I,J))D[E]=J,D[Q]=I,Q=E;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var J=D[0],Q=D.pop();if(Q!==J){D[0]=Q;e:for(var E=0,I=D.length,R=I>>>1;E<R;){var V=2*(E+1)-1,re=D[V],$=V+1,ee=D[$];if(0>i(re,Q))$<I&&0>i(ee,re)?(D[E]=ee,D[$]=Q,E=$):(D[E]=re,D[V]=Q,E=V);else if($<I&&0>i(ee,Q))D[E]=ee,D[$]=Q,E=$;else break e}}return J}function i(D,J){var Q=D.sortIndex-J.sortIndex;return Q!==0?Q:D.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],f=[],m=1,h=null,g=3,x=!1,w=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(D){for(var J=n(f);J!==null;){if(J.callback===null)r(f);else if(J.startTime<=D)r(f),J.sortIndex=J.expirationTime,t(d,J);else break;J=n(f)}}function C(D){if(v=!1,S(D),!w)if(n(d)!==null)w=!0,B(z);else{var J=n(f);J!==null&&ae(C,J.startTime-D)}}function z(D,J){w=!1,v&&(v=!1,y(j),j=-1),x=!0;var Q=g;try{for(S(J),h=n(d);h!==null&&(!(h.expirationTime>J)||D&&!Y());){var E=h.callback;if(typeof E=="function"){h.callback=null,g=h.priorityLevel;var I=E(h.expirationTime<=J);J=e.unstable_now(),typeof I=="function"?h.callback=I:h===n(d)&&r(d),S(J)}else r(d);h=n(d)}if(h!==null)var R=!0;else{var V=n(f);V!==null&&ae(C,V.startTime-J),R=!1}return R}finally{h=null,g=Q,x=!1}}var N=!1,A=null,j=-1,K=5,W=-1;function Y(){return!(e.unstable_now()-W<K)}function oe(){if(A!==null){var D=e.unstable_now();W=D;var J=!0;try{J=A(!0,D)}finally{J?ue():(N=!1,A=null)}}else N=!1}var ue;if(typeof b=="function")ue=function(){b(oe)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,pe=ne.port2;ne.port1.onmessage=oe,ue=function(){pe.postMessage(null)}}else ue=function(){P(oe,0)};function B(D){A=D,N||(N=!0,ue())}function ae(D,J){j=P(function(){D(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,B(z))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(D){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var Q=g;g=J;try{return D()}finally{g=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,J){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=g;g=D;try{return J()}finally{g=Q}},e.unstable_scheduleCallback=function(D,J,Q){var E=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?E+Q:E):Q=E,D){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Q+I,D={id:m++,callback:J,priorityLevel:D,startTime:Q,expirationTime:I,sortIndex:-1},Q>E?(D.sortIndex=Q,t(f,D),n(d)===null&&D===n(f)&&(v?(y(j),j=-1):v=!0,ae(C,Q-E))):(D.sortIndex=I,t(d,D),w||x||(w=!0,B(z))),D},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(D){var J=g;return function(){var Q=g;g=J;try{return D.apply(this,arguments)}finally{g=Q}}}})(Xy);(function(e){e.exports=Xy})(kk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=T,nn=cf;function te(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yy=new Set,es={};function Xo(e,t){Zi(e,t),Zi(e+"Capture",t)}function Zi(e,t){for(es[e]=t,e=0;e<t.length;e++)Yy.add(t[e])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=Object.prototype.hasOwnProperty,Sk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g_={},v_={};function Pk(e){return df.call(v_,e)?!0:df.call(g_,e)?!1:Sk.test(e)?v_[e]=!0:(g_[e]=!0,!1)}function Ck(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ek(e,t,n,r){if(t===null||typeof t>"u"||Ck(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ut(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pt[e]=new Ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pt[t]=new Ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pt[e]=new Ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pt[e]=new Ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pt[e]=new Ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pt[e]=new Ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pt[e]=new Ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pt[e]=new Ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pt[e]=new Ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Xp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gp,Xp);Pt[t]=new Ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gp,Xp);Pt[t]=new Ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gp,Xp);Pt[t]=new Ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pt[e]=new Ut(e,1,!1,e.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pt[e]=new Ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jp(e,t,n,r){var i=Pt.hasOwnProperty(t)?Pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ek(t,n,i,r)&&(n=null),r||i===null?Pk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pr=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),gi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),eb=Symbol.for("react.provider"),tb=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),nb=Symbol.for("react.offscreen"),y_=Symbol.iterator;function wa(e){return e===null||typeof e!="object"?null:(e=y_&&e[y_]||e["@@iterator"],typeof e=="function"?e:null)}var et=Object.assign,dd;function Na(e){if(dd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dd=t&&t[1]||""}return`
`+dd+e}var fd=!1;function pd(e,t){if(!e||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,u=a.length-1;1<=l&&0<=u&&i[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==a[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Na(e):""}function Ok(e){switch(e.tag){case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return e=pd(e.type,!1),e;case 11:return e=pd(e.type.render,!1),e;case 1:return e=pd(e.type,!0),e;default:return""}}function mf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vi:return"Fragment";case gi:return"Portal";case ff:return"Profiler";case Yp:return"StrictMode";case pf:return"Suspense";case hf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tb:return(e.displayName||"Context")+".Consumer";case eb:return(e._context.displayName||"Context")+".Provider";case eh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case th:return t=e.displayName||null,t!==null?t:mf(e.type)||"Memo";case Nr:t=e._payload,e=e._init;try{return mf(e(t))}catch{}}return null}function Tk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(t);case 8:return t===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zk(e){var t=rb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function al(e){e._valueTracker||(e._valueTracker=zk(e))}function ob(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _f(e,t){var n=t.checked;return et({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function b_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=oo(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ib(e,t){t=t.checked,t!=null&&Jp(e,"checked",t,!1)}function gf(e,t){ib(e,t);var n=oo(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vf(e,t.type,n):t.hasOwnProperty("defaultValue")&&vf(e,t.type,oo(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function x_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vf(e,t,n){(t!=="number"||ql(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ia=Array.isArray;function Ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+oo(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(te(91));return et({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function w_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(te(92));if(Ia(n)){if(1<n.length)throw Error(te(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:oo(n)}}function ab(e,t){var n=oo(t.value),r=oo(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function k_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sl,lb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ts(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rk=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(e){Rk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ja[t]=ja[e]})});function ub(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ja.hasOwnProperty(e)&&ja[e]?(""+t).trim():t+"px"}function cb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ub(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lk=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(e,t){if(t){if(Lk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(te(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(te(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(te(61))}if(t.style!=null&&typeof t.style!="object")throw Error(te(62))}}function wf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function nh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sf=null,Li=null,Ai=null;function S_(e){if(e=Ts(e)){if(typeof Sf!="function")throw Error(te(280));var t=e.stateNode;t&&(t=qu(t),Sf(e.stateNode,e.type,t))}}function db(e){Li?Ai?Ai.push(e):Ai=[e]:Li=e}function fb(){if(Li){var e=Li,t=Ai;if(Ai=Li=null,S_(e),t)for(e=0;e<t.length;e++)S_(t[e])}}function pb(e,t){return e(t)}function hb(){}var hd=!1;function mb(e,t,n){if(hd)return e(t,n);hd=!0;try{return pb(e,t,n)}finally{hd=!1,(Li!==null||Ai!==null)&&(hb(),fb())}}function ns(e,t){var n=e.stateNode;if(n===null)return null;var r=qu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(te(231,t,typeof n));return n}var Pf=!1;if(br)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{Pf=!1}function Ak(e,t,n,r,i,a,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var Ua=!1,Kl=null,Ql=!1,Cf=null,Bk={onError:function(e){Ua=!0,Kl=e}};function Nk(e,t,n,r,i,a,l,u,d){Ua=!1,Kl=null,Ak.apply(Bk,arguments)}function Ik(e,t,n,r,i,a,l,u,d){if(Nk.apply(this,arguments),Ua){if(Ua){var f=Kl;Ua=!1,Kl=null}else throw Error(te(198));Ql||(Ql=!0,Cf=f)}}function Jo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function P_(e){if(Jo(e)!==e)throw Error(te(188))}function Mk(e){var t=e.alternate;if(!t){if(t=Jo(e),t===null)throw Error(te(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return P_(i),e;if(a===r)return P_(i),t;a=a.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?e:t}function gb(e){return e=Mk(e),e!==null?vb(e):null}function vb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vb(e);if(t!==null)return t;e=e.sibling}return null}var yb=nn.unstable_scheduleCallback,C_=nn.unstable_cancelCallback,Dk=nn.unstable_shouldYield,Fk=nn.unstable_requestPaint,at=nn.unstable_now,jk=nn.unstable_getCurrentPriorityLevel,rh=nn.unstable_ImmediatePriority,bb=nn.unstable_UserBlockingPriority,Gl=nn.unstable_NormalPriority,Uk=nn.unstable_LowPriority,xb=nn.unstable_IdlePriority,Wu=null,Xn=null;function $k(e){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Wu,e,void 0,(e.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:Hk,Wk=Math.log,Zk=Math.LN2;function Hk(e){return e>>>=0,e===0?32:31-(Wk(e)/Zk|0)|0}var ll=64,ul=4194304;function Ma(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Ma(u):(a&=l,a!==0&&(r=Ma(a)))}else l=n&~i,l!==0?r=Ma(l):a!==0&&(r=Ma(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ln(t),i=1<<n,r|=e[n],t&=~i;return r}function Vk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ln(a),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Vk(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function Ef(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wb(){var e=ll;return ll<<=1,!(ll&4194240)&&(ll=64),e}function md(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Es(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ln(t),e[t]=n}function Kk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ln(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function oh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ln(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ie=0;function kb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sb,ih,Pb,Cb,Eb,Of=!1,cl=[],Zr=null,Hr=null,Vr=null,rs=new Map,os=new Map,Dr=[],Qk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function E_(e,t){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(t.pointerId)}}function Sa(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ts(t),t!==null&&ih(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gk(e,t,n,r,i){switch(t){case"focusin":return Zr=Sa(Zr,e,t,n,r,i),!0;case"dragenter":return Hr=Sa(Hr,e,t,n,r,i),!0;case"mouseover":return Vr=Sa(Vr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return rs.set(a,Sa(rs.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,os.set(a,Sa(os.get(a)||null,e,t,n,r,i)),!0}return!1}function Ob(e){var t=Ro(e.target);if(t!==null){var n=Jo(t);if(n!==null){if(t=n.tag,t===13){if(t=_b(n),t!==null){e.blockedOn=t,Eb(e.priority,function(){Pb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function El(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return t=Ts(n),t!==null&&ih(t),e.blockedOn=n,!1;t.shift()}return!0}function O_(e,t,n){El(e)&&n.delete(t)}function Xk(){Of=!1,Zr!==null&&El(Zr)&&(Zr=null),Hr!==null&&El(Hr)&&(Hr=null),Vr!==null&&El(Vr)&&(Vr=null),rs.forEach(O_),os.forEach(O_)}function Pa(e,t){e.blockedOn===t&&(e.blockedOn=null,Of||(Of=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,Xk)))}function is(e){function t(i){return Pa(i,e)}if(0<cl.length){Pa(cl[0],e);for(var n=1;n<cl.length;n++){var r=cl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zr!==null&&Pa(Zr,e),Hr!==null&&Pa(Hr,e),Vr!==null&&Pa(Vr,e),rs.forEach(t),os.forEach(t),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)Ob(n),n.blockedOn===null&&Dr.shift()}var Bi=Pr.ReactCurrentBatchConfig,Jl=!0;function Jk(e,t,n,r){var i=Ie,a=Bi.transition;Bi.transition=null;try{Ie=1,ah(e,t,n,r)}finally{Ie=i,Bi.transition=a}}function Yk(e,t,n,r){var i=Ie,a=Bi.transition;Bi.transition=null;try{Ie=4,ah(e,t,n,r)}finally{Ie=i,Bi.transition=a}}function ah(e,t,n,r){if(Jl){var i=Tf(e,t,n,r);if(i===null)Pd(e,t,r,Yl,n),E_(e,r);else if(Gk(i,e,t,n,r))r.stopPropagation();else if(E_(e,r),t&4&&-1<Qk.indexOf(e)){for(;i!==null;){var a=Ts(i);if(a!==null&&Sb(a),a=Tf(e,t,n,r),a===null&&Pd(e,t,r,Yl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Pd(e,t,r,null,n)}}var Yl=null;function Tf(e,t,n,r){if(Yl=null,e=nh(r),e=Ro(e),e!==null)if(t=Jo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yl=e,null}function Tb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jk()){case rh:return 1;case bb:return 4;case Gl:case Uk:return 16;case xb:return 536870912;default:return 16}default:return 16}}var Ur=null,sh=null,Ol=null;function zb(){if(Ol)return Ol;var e,t=sh,n=t.length,r,i="value"in Ur?Ur.value:Ur.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return Ol=i.slice(e,1<r?1-r:void 0)}function Tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function T_(){return!1}function an(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?dl:T_,this.isPropagationStopped=T_,this}return et(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=an(ta),Os=et({},ta,{view:0,detail:0}),eS=an(Os),_d,gd,Ca,Zu=et({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ca&&(Ca&&e.type==="mousemove"?(_d=e.screenX-Ca.screenX,gd=e.screenY-Ca.screenY):gd=_d=0,Ca=e),_d)},movementY:function(e){return"movementY"in e?e.movementY:gd}}),z_=an(Zu),tS=et({},Zu,{dataTransfer:0}),nS=an(tS),rS=et({},Os,{relatedTarget:0}),vd=an(rS),oS=et({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=an(oS),aS=et({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sS=an(aS),lS=et({},ta,{data:0}),R_=an(lS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dS[e])?!!t[e]:!1}function uh(){return fS}var pS=et({},Os,{key:function(e){if(e.key){var t=uS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hS=an(pS),mS=et({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L_=an(mS),_S=et({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),gS=an(_S),vS=et({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=an(vS),bS=et({},Zu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=an(bS),wS=[9,13,27,32],ch=br&&"CompositionEvent"in window,$a=null;br&&"documentMode"in document&&($a=document.documentMode);var kS=br&&"TextEvent"in window&&!$a,Rb=br&&(!ch||$a&&8<$a&&11>=$a),A_=String.fromCharCode(32),B_=!1;function Lb(e,t){switch(e){case"keyup":return wS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ab(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yi=!1;function SS(e,t){switch(e){case"compositionend":return Ab(t);case"keypress":return t.which!==32?null:(B_=!0,A_);case"textInput":return e=t.data,e===A_&&B_?null:e;default:return null}}function PS(e,t){if(yi)return e==="compositionend"||!ch&&Lb(e,t)?(e=zb(),Ol=sh=Ur=null,yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rb&&t.locale!=="ko"?null:t.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function N_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!CS[e.type]:t==="textarea"}function Bb(e,t,n,r){db(r),t=eu(t,"onChange"),0<t.length&&(n=new lh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wa=null,as=null;function ES(e){Hb(e,0)}function Hu(e){var t=wi(e);if(ob(t))return e}function OS(e,t){if(e==="change")return t}var Nb=!1;if(br){var yd;if(br){var bd="oninput"in document;if(!bd){var I_=document.createElement("div");I_.setAttribute("oninput","return;"),bd=typeof I_.oninput=="function"}yd=bd}else yd=!1;Nb=yd&&(!document.documentMode||9<document.documentMode)}function M_(){Wa&&(Wa.detachEvent("onpropertychange",Ib),as=Wa=null)}function Ib(e){if(e.propertyName==="value"&&Hu(as)){var t=[];Bb(t,as,e,nh(e)),mb(ES,t)}}function TS(e,t,n){e==="focusin"?(M_(),Wa=t,as=n,Wa.attachEvent("onpropertychange",Ib)):e==="focusout"&&M_()}function zS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hu(as)}function RS(e,t){if(e==="click")return Hu(t)}function LS(e,t){if(e==="input"||e==="change")return Hu(t)}function AS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nn=typeof Object.is=="function"?Object.is:AS;function ss(e,t){if(Nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!df.call(t,i)||!Nn(e[i],t[i]))return!1}return!0}function D_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function F_(e,t){var n=D_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=D_(n)}}function Mb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Db(){for(var e=window,t=ql();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ql(e.document)}return t}function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function BS(e){var t=Db(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mb(n.ownerDocument.documentElement,n)){if(r!==null&&dh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=F_(n,a);var l=F_(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var NS=br&&"documentMode"in document&&11>=document.documentMode,bi=null,zf=null,Za=null,Rf=!1;function j_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rf||bi==null||bi!==ql(r)||(r=bi,"selectionStart"in r&&dh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Za&&ss(Za,r)||(Za=r,r=eu(zf,"onSelect"),0<r.length&&(t=new lh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bi)))}function fl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xi={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},xd={},Fb={};br&&(Fb=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Vu(e){if(xd[e])return xd[e];if(!xi[e])return e;var t=xi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fb)return xd[e]=t[n];return e}var jb=Vu("animationend"),Ub=Vu("animationiteration"),$b=Vu("animationstart"),Wb=Vu("transitionend"),Zb=new Map,U_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fo(e,t){Zb.set(e,t),Xo(t,[e])}for(var wd=0;wd<U_.length;wd++){var kd=U_[wd],IS=kd.toLowerCase(),MS=kd[0].toUpperCase()+kd.slice(1);fo(IS,"on"+MS)}fo(jb,"onAnimationEnd");fo(Ub,"onAnimationIteration");fo($b,"onAnimationStart");fo("dblclick","onDoubleClick");fo("focusin","onFocus");fo("focusout","onBlur");fo(Wb,"onTransitionEnd");Zi("onMouseEnter",["mouseout","mouseover"]);Zi("onMouseLeave",["mouseout","mouseover"]);Zi("onPointerEnter",["pointerout","pointerover"]);Zi("onPointerLeave",["pointerout","pointerover"]);Xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function $_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ik(r,t,void 0,e),e.currentTarget=null}function Hb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&i.isPropagationStopped())break e;$_(i,u,f),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&i.isPropagationStopped())break e;$_(i,u,f),a=d}}}if(Ql)throw e=Cf,Ql=!1,Cf=null,e}function Ve(e,t){var n=t[If];n===void 0&&(n=t[If]=new Set);var r=e+"__bubble";n.has(r)||(Vb(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Vb(n,e,r,t)}var pl="_reactListening"+Math.random().toString(36).slice(2);function ls(e){if(!e[pl]){e[pl]=!0,Yy.forEach(function(n){n!=="selectionchange"&&(DS.has(n)||Sd(n,!1,e),Sd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pl]||(t[pl]=!0,Sd("selectionchange",!1,t))}}function Vb(e,t,n,r){switch(Tb(t)){case 1:var i=Jk;break;case 4:i=Yk;break;default:i=ah}n=i.bind(null,t,n,e),i=void 0,!Pf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Pd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Ro(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}mb(function(){var f=a,m=nh(n),h=[];e:{var g=Zb.get(e);if(g!==void 0){var x=lh,w=e;switch(e){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":x=hS;break;case"focusin":w="focus",x=vd;break;case"focusout":w="blur",x=vd;break;case"beforeblur":case"afterblur":x=vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=gS;break;case jb:case Ub:case $b:x=iS;break;case Wb:x=yS;break;case"scroll":x=eS;break;case"wheel":x=xS;break;case"copy":case"cut":case"paste":x=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=L_}var v=(t&4)!==0,P=!v&&e==="scroll",y=v?g!==null?g+"Capture":null:g;v=[];for(var b=f,S;b!==null;){S=b;var C=S.stateNode;if(S.tag===5&&C!==null&&(S=C,y!==null&&(C=ns(b,y),C!=null&&v.push(us(b,C,S)))),P)break;b=b.return}0<v.length&&(g=new x(g,w,null,n,m),h.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==kf&&(w=n.relatedTarget||n.fromElement)&&(Ro(w)||w[xr]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=f,w=w?Ro(w):null,w!==null&&(P=Jo(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=f),x!==w)){if(v=z_,C="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(v=L_,C="onPointerLeave",y="onPointerEnter",b="pointer"),P=x==null?g:wi(x),S=w==null?g:wi(w),g=new v(C,b+"leave",x,n,m),g.target=P,g.relatedTarget=S,C=null,Ro(m)===f&&(v=new v(y,b+"enter",w,n,m),v.target=S,v.relatedTarget=P,C=v),P=C,x&&w)t:{for(v=x,y=w,b=0,S=v;S;S=fi(S))b++;for(S=0,C=y;C;C=fi(C))S++;for(;0<b-S;)v=fi(v),b--;for(;0<S-b;)y=fi(y),S--;for(;b--;){if(v===y||y!==null&&v===y.alternate)break t;v=fi(v),y=fi(y)}v=null}else v=null;x!==null&&W_(h,g,x,v,!1),w!==null&&P!==null&&W_(h,P,w,v,!0)}}e:{if(g=f?wi(f):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var z=OS;else if(N_(g))if(Nb)z=LS;else{z=zS;var N=TS}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=RS);if(z&&(z=z(e,f))){Bb(h,z,n,m);break e}N&&N(e,g,f),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&vf(g,"number",g.value)}switch(N=f?wi(f):window,e){case"focusin":(N_(N)||N.contentEditable==="true")&&(bi=N,zf=f,Za=null);break;case"focusout":Za=zf=bi=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,j_(h,n,m);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":j_(h,n,m)}var A;if(ch)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else yi?Lb(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Rb&&n.locale!=="ko"&&(yi||j!=="onCompositionStart"?j==="onCompositionEnd"&&yi&&(A=zb()):(Ur=m,sh="value"in Ur?Ur.value:Ur.textContent,yi=!0)),N=eu(f,j),0<N.length&&(j=new R_(j,e,null,n,m),h.push({event:j,listeners:N}),A?j.data=A:(A=Ab(n),A!==null&&(j.data=A)))),(A=kS?SS(e,n):PS(e,n))&&(f=eu(f,"onBeforeInput"),0<f.length&&(m=new R_("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:f}),m.data=A))}Hb(h,t)})}function us(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ns(e,n),a!=null&&r.unshift(us(e,a,i)),a=ns(e,t),a!=null&&r.push(us(e,a,i))),e=e.return}return r}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function W_(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,i?(d=ns(n,a),d!=null&&l.unshift(us(n,d,u))):i||(d=ns(n,a),d!=null&&l.push(us(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var FS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function Z_(e){return(typeof e=="string"?e:""+e).replace(FS,`
`).replace(jS,"")}function hl(e,t,n){if(t=Z_(t),Z_(e)!==t&&n)throw Error(te(425))}function tu(){}var Lf=null,Af=null;function Bf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nf=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,H_=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof H_<"u"?function(e){return H_.resolve(null).then(e).catch(WS)}:Nf;function WS(e){setTimeout(function(){throw e})}function Cd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),is(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);is(t)}function qr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function V_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var na=Math.random().toString(36).slice(2),Kn="__reactFiber$"+na,cs="__reactProps$"+na,xr="__reactContainer$"+na,If="__reactEvents$"+na,ZS="__reactListeners$"+na,HS="__reactHandles$"+na;function Ro(e){var t=e[Kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xr]||n[Kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=V_(e);e!==null;){if(n=e[Kn])return n;e=V_(e)}return t}e=n,n=e.parentNode}return null}function Ts(e){return e=e[Kn]||e[xr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(te(33))}function qu(e){return e[cs]||null}var Mf=[],ki=-1;function po(e){return{current:e}}function qe(e){0>ki||(e.current=Mf[ki],Mf[ki]=null,ki--)}function Ze(e,t){ki++,Mf[ki]=e.current,e.current=t}var io={},At=po(io),qt=po(!1),Uo=io;function Hi(e,t){var n=e.type.contextTypes;if(!n)return io;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(e){return e=e.childContextTypes,e!=null}function nu(){qe(qt),qe(At)}function q_(e,t,n){if(At.current!==io)throw Error(te(168));Ze(At,t),Ze(qt,n)}function qb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(te(108,Tk(e)||"Unknown",i));return et({},n,r)}function ru(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||io,Uo=At.current,Ze(At,e),Ze(qt,qt.current),!0}function K_(e,t,n){var r=e.stateNode;if(!r)throw Error(te(169));n?(e=qb(e,t,Uo),r.__reactInternalMemoizedMergedChildContext=e,qe(qt),qe(At),Ze(At,e)):qe(qt),Ze(qt,n)}var mr=null,Ku=!1,Ed=!1;function Kb(e){mr===null?mr=[e]:mr.push(e)}function VS(e){Ku=!0,Kb(e)}function ho(){if(!Ed&&mr!==null){Ed=!0;var e=0,t=Ie;try{var n=mr;for(Ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mr=null,Ku=!1}catch(i){throw mr!==null&&(mr=mr.slice(e+1)),yb(rh,ho),i}finally{Ie=t,Ed=!1}}return null}var Si=[],Pi=0,ou=null,iu=0,hn=[],mn=0,$o=null,_r=1,gr="";function Eo(e,t){Si[Pi++]=iu,Si[Pi++]=ou,ou=e,iu=t}function Qb(e,t,n){hn[mn++]=_r,hn[mn++]=gr,hn[mn++]=$o,$o=e;var r=_r;e=gr;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var a=32-Ln(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,_r=1<<32-Ln(t)+i|n<<i|r,gr=a+e}else _r=1<<a|n<<i|r,gr=e}function fh(e){e.return!==null&&(Eo(e,1),Qb(e,1,0))}function ph(e){for(;e===ou;)ou=Si[--Pi],Si[Pi]=null,iu=Si[--Pi],Si[Pi]=null;for(;e===$o;)$o=hn[--mn],hn[mn]=null,gr=hn[--mn],hn[mn]=null,_r=hn[--mn],hn[mn]=null}var tn=null,Yt=null,Ge=!1,zn=null;function Gb(e,t){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Q_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tn=e,Yt=qr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tn=e,Yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$o!==null?{id:_r,overflow:gr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tn=e,Yt=null,!0):!1;default:return!1}}function Df(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ff(e){if(Ge){var t=Yt;if(t){var n=t;if(!Q_(e,t)){if(Df(e))throw Error(te(418));t=qr(n.nextSibling);var r=tn;t&&Q_(e,t)?Gb(r,n):(e.flags=e.flags&-4097|2,Ge=!1,tn=e)}}else{if(Df(e))throw Error(te(418));e.flags=e.flags&-4097|2,Ge=!1,tn=e}}}function G_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tn=e}function ml(e){if(e!==tn)return!1;if(!Ge)return G_(e),Ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bf(e.type,e.memoizedProps)),t&&(t=Yt)){if(Df(e))throw Xb(),Error(te(418));for(;t;)Gb(e,t),t=qr(t.nextSibling)}if(G_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(te(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Yt=qr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Yt=null}}else Yt=tn?qr(e.stateNode.nextSibling):null;return!0}function Xb(){for(var e=Yt;e;)e=qr(e.nextSibling)}function Vi(){Yt=tn=null,Ge=!1}function hh(e){zn===null?zn=[e]:zn.push(e)}var qS=Pr.ReactCurrentBatchConfig;function On(e,t){if(e&&e.defaultProps){t=et({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var au=po(null),su=null,Ci=null,mh=null;function _h(){mh=Ci=su=null}function gh(e){var t=au.current;qe(au),e._currentValue=t}function jf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ni(e,t){su=e,mh=Ci=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Vt=!0),e.firstContext=null)}function yn(e){var t=e._currentValue;if(mh!==e)if(e={context:e,memoizedValue:t,next:null},Ci===null){if(su===null)throw Error(te(308));Ci=e,su.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Lo=null;function vh(e){Lo===null?Lo=[e]:Lo.push(e)}function Jb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vh(t)):(n.next=i.next,i.next=n),t.interleaved=n,wr(e,r)}function wr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ir=!1;function yh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wr(e,n)}return i=r.interleaved,i===null?(t.next=t,vh(r)):(t.next=i.next,i.next=t),r.interleaved=t,wr(e,n)}function zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oh(e,n)}}function X_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lu(e,t,n,r){var i=e.updateQueue;Ir=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?a=f:l.next=f,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=f:u.next=f,m.lastBaseUpdate=d))}if(a!==null){var h=i.baseState;l=0,m=f=d=null,u=a;do{var g=u.lane,x=u.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,v=u;switch(g=t,x=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(x,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(x,h,g):w,g==null)break e;h=et({},h,g);break e;case 2:Ir=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[u]:g.push(u))}else x={eventTime:x,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(f=m=x,d=h):m=m.next=x,l|=g;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;g=u,u=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(d=h),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zo|=l,e.lanes=l,e.memoizedState=h}}function J_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var e0=new Jy.Component().refs;function Uf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:et({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qu={isMounted:function(e){return(e=e._reactInternals)?Jo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ft(),i=Gr(e),a=vr(r,i);a.payload=t,n!=null&&(a.callback=n),t=Kr(e,a,i),t!==null&&(An(t,e,i,r),zl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ft(),i=Gr(e),a=vr(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Kr(e,a,i),t!==null&&(An(t,e,i,r),zl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ft(),r=Gr(e),i=vr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kr(e,i,r),t!==null&&(An(t,e,r,n),zl(t,e,r))}};function Y_(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!ss(n,r)||!ss(i,a):!0}function t0(e,t,n){var r=!1,i=io,a=t.contextType;return typeof a=="object"&&a!==null?a=yn(a):(i=Kt(t)?Uo:At.current,r=t.contextTypes,a=(r=r!=null)?Hi(e,i):io),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function eg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qu.enqueueReplaceState(t,t.state,null)}function $f(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=e0,yh(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=yn(a):(a=Kt(t)?Uo:At.current,i.context=Hi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Uf(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qu.enqueueReplaceState(i,i.state,null),lu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ea(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=i.refs;u===e0&&(u=i.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,e))}return e}function _l(e,t){throw e=Object.prototype.toString.call(t),Error(te(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tg(e){var t=e._init;return t(e._payload)}function n0(e){function t(y,b){if(e){var S=y.deletions;S===null?(y.deletions=[b],y.flags|=16):S.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function i(y,b){return y=Xr(y,b),y.index=0,y.sibling=null,y}function a(y,b,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<b?(y.flags|=2,b):S):(y.flags|=2,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,b,S,C){return b===null||b.tag!==6?(b=Bd(S,y.mode,C),b.return=y,b):(b=i(b,S),b.return=y,b)}function d(y,b,S,C){var z=S.type;return z===vi?m(y,b,S.props.children,C,S.key):b!==null&&(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Nr&&tg(z)===b.type)?(C=i(b,S.props),C.ref=Ea(y,b,S),C.return=y,C):(C=Il(S.type,S.key,S.props,null,y.mode,C),C.ref=Ea(y,b,S),C.return=y,C)}function f(y,b,S,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=Nd(S,y.mode,C),b.return=y,b):(b=i(b,S.children||[]),b.return=y,b)}function m(y,b,S,C,z){return b===null||b.tag!==7?(b=Do(S,y.mode,C,z),b.return=y,b):(b=i(b,S),b.return=y,b)}function h(y,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Bd(""+b,y.mode,S),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case il:return S=Il(b.type,b.key,b.props,null,y.mode,S),S.ref=Ea(y,null,b),S.return=y,S;case gi:return b=Nd(b,y.mode,S),b.return=y,b;case Nr:var C=b._init;return h(y,C(b._payload),S)}if(Ia(b)||wa(b))return b=Do(b,y.mode,S,null),b.return=y,b;_l(y,b)}return null}function g(y,b,S,C){var z=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:u(y,b,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case il:return S.key===z?d(y,b,S,C):null;case gi:return S.key===z?f(y,b,S,C):null;case Nr:return z=S._init,g(y,b,z(S._payload),C)}if(Ia(S)||wa(S))return z!==null?null:m(y,b,S,C,null);_l(y,S)}return null}function x(y,b,S,C,z){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(S)||null,u(b,y,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case il:return y=y.get(C.key===null?S:C.key)||null,d(b,y,C,z);case gi:return y=y.get(C.key===null?S:C.key)||null,f(b,y,C,z);case Nr:var N=C._init;return x(y,b,S,N(C._payload),z)}if(Ia(C)||wa(C))return y=y.get(S)||null,m(b,y,C,z,null);_l(b,C)}return null}function w(y,b,S,C){for(var z=null,N=null,A=b,j=b=0,K=null;A!==null&&j<S.length;j++){A.index>j?(K=A,A=null):K=A.sibling;var W=g(y,A,S[j],C);if(W===null){A===null&&(A=K);break}e&&A&&W.alternate===null&&t(y,A),b=a(W,b,j),N===null?z=W:N.sibling=W,N=W,A=K}if(j===S.length)return n(y,A),Ge&&Eo(y,j),z;if(A===null){for(;j<S.length;j++)A=h(y,S[j],C),A!==null&&(b=a(A,b,j),N===null?z=A:N.sibling=A,N=A);return Ge&&Eo(y,j),z}for(A=r(y,A);j<S.length;j++)K=x(A,y,j,S[j],C),K!==null&&(e&&K.alternate!==null&&A.delete(K.key===null?j:K.key),b=a(K,b,j),N===null?z=K:N.sibling=K,N=K);return e&&A.forEach(function(Y){return t(y,Y)}),Ge&&Eo(y,j),z}function v(y,b,S,C){var z=wa(S);if(typeof z!="function")throw Error(te(150));if(S=z.call(S),S==null)throw Error(te(151));for(var N=z=null,A=b,j=b=0,K=null,W=S.next();A!==null&&!W.done;j++,W=S.next()){A.index>j?(K=A,A=null):K=A.sibling;var Y=g(y,A,W.value,C);if(Y===null){A===null&&(A=K);break}e&&A&&Y.alternate===null&&t(y,A),b=a(Y,b,j),N===null?z=Y:N.sibling=Y,N=Y,A=K}if(W.done)return n(y,A),Ge&&Eo(y,j),z;if(A===null){for(;!W.done;j++,W=S.next())W=h(y,W.value,C),W!==null&&(b=a(W,b,j),N===null?z=W:N.sibling=W,N=W);return Ge&&Eo(y,j),z}for(A=r(y,A);!W.done;j++,W=S.next())W=x(A,y,j,W.value,C),W!==null&&(e&&W.alternate!==null&&A.delete(W.key===null?j:W.key),b=a(W,b,j),N===null?z=W:N.sibling=W,N=W);return e&&A.forEach(function(oe){return t(y,oe)}),Ge&&Eo(y,j),z}function P(y,b,S,C){if(typeof S=="object"&&S!==null&&S.type===vi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case il:e:{for(var z=S.key,N=b;N!==null;){if(N.key===z){if(z=S.type,z===vi){if(N.tag===7){n(y,N.sibling),b=i(N,S.props.children),b.return=y,y=b;break e}}else if(N.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Nr&&tg(z)===N.type){n(y,N.sibling),b=i(N,S.props),b.ref=Ea(y,N,S),b.return=y,y=b;break e}n(y,N);break}else t(y,N);N=N.sibling}S.type===vi?(b=Do(S.props.children,y.mode,C,S.key),b.return=y,y=b):(C=Il(S.type,S.key,S.props,null,y.mode,C),C.ref=Ea(y,b,S),C.return=y,y=C)}return l(y);case gi:e:{for(N=S.key;b!==null;){if(b.key===N)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(y,b.sibling),b=i(b,S.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=Nd(S,y.mode,C),b.return=y,y=b}return l(y);case Nr:return N=S._init,P(y,b,N(S._payload),C)}if(Ia(S))return w(y,b,S,C);if(wa(S))return v(y,b,S,C);_l(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,b!==null&&b.tag===6?(n(y,b.sibling),b=i(b,S),b.return=y,y=b):(n(y,b),b=Bd(S,y.mode,C),b.return=y,y=b),l(y)):n(y,b)}return P}var qi=n0(!0),r0=n0(!1),zs={},Jn=po(zs),ds=po(zs),fs=po(zs);function Ao(e){if(e===zs)throw Error(te(174));return e}function bh(e,t){switch(Ze(fs,t),Ze(ds,e),Ze(Jn,zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bf(t,e)}qe(Jn),Ze(Jn,t)}function Ki(){qe(Jn),qe(ds),qe(fs)}function o0(e){Ao(fs.current);var t=Ao(Jn.current),n=bf(t,e.type);t!==n&&(Ze(ds,e),Ze(Jn,n))}function xh(e){ds.current===e&&(qe(Jn),qe(ds))}var Je=po(0);function uu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Od=[];function wh(){for(var e=0;e<Od.length;e++)Od[e]._workInProgressVersionPrimary=null;Od.length=0}var Rl=Pr.ReactCurrentDispatcher,Td=Pr.ReactCurrentBatchConfig,Wo=0,Ye=null,pt=null,gt=null,cu=!1,Ha=!1,ps=0,KS=0;function Ot(){throw Error(te(321))}function kh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nn(e[n],t[n]))return!1;return!0}function Sh(e,t,n,r,i,a){if(Wo=a,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rl.current=e===null||e.memoizedState===null?JS:YS,e=n(r,i),Ha){a=0;do{if(Ha=!1,ps=0,25<=a)throw Error(te(301));a+=1,gt=pt=null,t.updateQueue=null,Rl.current=e2,e=n(r,i)}while(Ha)}if(Rl.current=du,t=pt!==null&&pt.next!==null,Wo=0,gt=pt=Ye=null,cu=!1,t)throw Error(te(300));return e}function Ph(){var e=ps!==0;return ps=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ye.memoizedState=gt=e:gt=gt.next=e,gt}function bn(){if(pt===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=gt===null?Ye.memoizedState:gt.next;if(t!==null)gt=t,pt=e;else{if(e===null)throw Error(te(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},gt===null?Ye.memoizedState=gt=e:gt=gt.next=e}return gt}function hs(e,t){return typeof t=="function"?t(e):t}function zd(e){var t=bn(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=pt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var u=l=null,d=null,f=a;do{var m=f.lane;if((Wo&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=h,l=r):d=d.next=h,Ye.lanes|=m,Zo|=m}f=f.next}while(f!==null&&f!==a);d===null?l=r:d.next=u,Nn(r,t.memoizedState)||(Vt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ye.lanes|=a,Zo|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rd(e){var t=bn(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Nn(a,t.memoizedState)||(Vt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function i0(){}function a0(e,t){var n=Ye,r=bn(),i=t(),a=!Nn(r.memoizedState,i);if(a&&(r.memoizedState=i,Vt=!0),r=r.queue,Ch(u0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,ms(9,l0.bind(null,n,r,i,t),void 0,null),vt===null)throw Error(te(349));Wo&30||s0(n,t,i)}return i}function s0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function l0(e,t,n,r){t.value=n,t.getSnapshot=r,c0(t)&&d0(e)}function u0(e,t,n){return n(function(){c0(t)&&d0(e)})}function c0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nn(e,n)}catch{return!0}}function d0(e){var t=wr(e,1);t!==null&&An(t,e,1,-1)}function ng(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t.queue=e,e=e.dispatch=XS.bind(null,Ye,e),[t.memoizedState,e]}function ms(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function f0(){return bn().memoizedState}function Ll(e,t,n,r){var i=Vn();Ye.flags|=e,i.memoizedState=ms(1|t,n,void 0,r===void 0?null:r)}function Gu(e,t,n,r){var i=bn();r=r===void 0?null:r;var a=void 0;if(pt!==null){var l=pt.memoizedState;if(a=l.destroy,r!==null&&kh(r,l.deps)){i.memoizedState=ms(t,n,a,r);return}}Ye.flags|=e,i.memoizedState=ms(1|t,n,a,r)}function rg(e,t){return Ll(8390656,8,e,t)}function Ch(e,t){return Gu(2048,8,e,t)}function p0(e,t){return Gu(4,2,e,t)}function h0(e,t){return Gu(4,4,e,t)}function m0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _0(e,t,n){return n=n!=null?n.concat([e]):null,Gu(4,4,m0.bind(null,t,e),n)}function Eh(){}function g0(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function v0(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y0(e,t,n){return Wo&21?(Nn(n,t)||(n=wb(),Ye.lanes|=n,Zo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Vt=!0),e.memoizedState=n)}function QS(e,t){var n=Ie;Ie=n!==0&&4>n?n:4,e(!0);var r=Td.transition;Td.transition={};try{e(!1),t()}finally{Ie=n,Td.transition=r}}function b0(){return bn().memoizedState}function GS(e,t,n){var r=Gr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x0(e))w0(t,n);else if(n=Jb(e,t,n,r),n!==null){var i=Ft();An(n,e,r,i),k0(n,t,r)}}function XS(e,t,n){var r=Gr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(e))w0(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(i.hasEagerState=!0,i.eagerState=u,Nn(u,l)){var d=t.interleaved;d===null?(i.next=i,vh(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Jb(e,t,i,r),n!==null&&(i=Ft(),An(n,e,r,i),k0(n,t,r))}}function x0(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function w0(e,t){Ha=cu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function k0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oh(e,n)}}var du={readContext:yn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},JS={readContext:yn,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:yn,useEffect:rg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4194308,4,m0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ll(4,2,e,t)},useMemo:function(e,t){var n=Vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=GS.bind(null,Ye,e),[r.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:ng,useDebugValue:Eh,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=ng(!1),t=e[0];return e=QS.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ye,i=Vn();if(Ge){if(n===void 0)throw Error(te(407));n=n()}else{if(n=t(),vt===null)throw Error(te(349));Wo&30||s0(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,rg(u0.bind(null,r,a,e),[e]),r.flags|=2048,ms(9,l0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Vn(),t=vt.identifierPrefix;if(Ge){var n=gr,r=_r;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ps++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=KS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},YS={readContext:yn,useCallback:g0,useContext:yn,useEffect:Ch,useImperativeHandle:_0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:v0,useReducer:zd,useRef:f0,useState:function(){return zd(hs)},useDebugValue:Eh,useDeferredValue:function(e){var t=bn();return y0(t,pt.memoizedState,e)},useTransition:function(){var e=zd(hs)[0],t=bn().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:a0,useId:b0,unstable_isNewReconciler:!1},e2={readContext:yn,useCallback:g0,useContext:yn,useEffect:Ch,useImperativeHandle:_0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:v0,useReducer:Rd,useRef:f0,useState:function(){return Rd(hs)},useDebugValue:Eh,useDeferredValue:function(e){var t=bn();return pt===null?t.memoizedState=e:y0(t,pt.memoizedState,e)},useTransition:function(){var e=Rd(hs)[0],t=bn().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:a0,useId:b0,unstable_isNewReconciler:!1};function Qi(e,t){try{var n="",r=t;do n+=Ok(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ld(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t2=typeof WeakMap=="function"?WeakMap:Map;function S0(e,t,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pu||(pu=!0,Yf=r),Wf(e,t)},n}function P0(e,t,n){n=vr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Wf(e,t),typeof r!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function og(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=m2.bind(null,e,t,n),t.then(e,e))}function ig(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ag(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vr(-1,1),t.tag=2,Kr(n,t,1))),n.lanes|=1),e)}var n2=Pr.ReactCurrentOwner,Vt=!1;function Dt(e,t,n,r){t.child=e===null?r0(t,null,n,r):qi(t,e.child,n,r)}function sg(e,t,n,r,i){n=n.render;var a=t.ref;return Ni(t,i),r=Sh(e,t,n,r,a,i),n=Ph(),e!==null&&!Vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kr(e,t,i)):(Ge&&n&&fh(t),t.flags|=1,Dt(e,t,r,i),t.child)}function lg(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Nh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,C0(e,t,a,r,i)):(e=Il(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(l,r)&&e.ref===t.ref)return kr(e,t,i)}return t.flags|=1,e=Xr(a,r),e.ref=t.ref,e.return=t,t.child=e}function C0(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ss(a,r)&&e.ref===t.ref)if(Vt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Vt=!0);else return t.lanes=e.lanes,kr(e,t,i)}return Zf(e,t,n,r,i)}function E0(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Oi,Jt),Jt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(Oi,Jt),Jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ze(Oi,Jt),Jt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ze(Oi,Jt),Jt|=r;return Dt(e,t,i,n),t.child}function O0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zf(e,t,n,r,i){var a=Kt(n)?Uo:At.current;return a=Hi(t,a),Ni(t,i),n=Sh(e,t,n,r,a,i),r=Ph(),e!==null&&!Vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kr(e,t,i)):(Ge&&r&&fh(t),t.flags|=1,Dt(e,t,n,i),t.child)}function ug(e,t,n,r,i){if(Kt(n)){var a=!0;ru(t)}else a=!1;if(Ni(t,i),t.stateNode===null)Al(e,t),t0(t,n,r),$f(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=yn(f):(f=Kt(n)?Uo:At.current,f=Hi(t,f));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&eg(t,l,r,f),Ir=!1;var g=t.memoizedState;l.state=g,lu(t,r,l,i),d=t.memoizedState,u!==r||g!==d||qt.current||Ir?(typeof m=="function"&&(Uf(t,n,m,r),d=t.memoizedState),(u=Ir||Y_(t,n,u,r,g,d,f))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Yb(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:On(t.type,u),l.props=f,h=t.pendingProps,g=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=yn(d):(d=Kt(n)?Uo:At.current,d=Hi(t,d));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==h||g!==d)&&eg(t,l,r,d),Ir=!1,g=t.memoizedState,l.state=g,lu(t,r,l,i);var w=t.memoizedState;u!==h||g!==w||qt.current||Ir?(typeof x=="function"&&(Uf(t,n,x,r),w=t.memoizedState),(f=Ir||Y_(t,n,f,r,g,w,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Hf(e,t,n,r,a,i)}function Hf(e,t,n,r,i,a){O0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&K_(t,n,!1),kr(e,t,a);r=t.stateNode,n2.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=qi(t,e.child,null,a),t.child=qi(t,null,u,a)):Dt(e,t,u,a),t.memoizedState=r.state,i&&K_(t,n,!0),t.child}function T0(e){var t=e.stateNode;t.pendingContext?q_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&q_(e,t.context,!1),bh(e,t.containerInfo)}function cg(e,t,n,r,i){return Vi(),hh(i),t.flags|=256,Dt(e,t,n,r),t.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function qf(e){return{baseLanes:e,cachePool:null,transitions:null}}function z0(e,t,n){var r=t.pendingProps,i=Je.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ze(Je,i&1),e===null)return Ff(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Yu(l,r,0,null),e=Do(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=qf(n),t.memoizedState=Vf,e):Oh(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return r2(e,t,l,r,u,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Xr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=Xr(u,a):(a=Do(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?qf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Vf,r}return a=e.child,e=a.sibling,r=Xr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oh(e,t){return t=Yu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gl(e,t,n,r){return r!==null&&hh(r),qi(t,e.child,null,n),e=Oh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r2(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Ld(Error(te(422))),gl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Yu({mode:"visible",children:r.children},i,0,null),a=Do(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&qi(t,e.child,null,l),t.child.memoizedState=qf(l),t.memoizedState=Vf,a);if(!(t.mode&1))return gl(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(te(419)),r=Ld(a,r,void 0),gl(e,t,l,r)}if(u=(l&e.childLanes)!==0,Vt||u){if(r=vt,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,wr(e,i),An(r,e,i,-1))}return Bh(),r=Ld(Error(te(421))),gl(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_2.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Yt=qr(i.nextSibling),tn=t,Ge=!0,zn=null,e!==null&&(hn[mn++]=_r,hn[mn++]=gr,hn[mn++]=$o,_r=e.id,gr=e.overflow,$o=t),t=Oh(t,r.children),t.flags|=4096,t)}function dg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jf(e.return,t,n)}function Ad(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function R0(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Dt(e,t,r.children,n),r=Je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,n,t);else if(e.tag===19)dg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ze(Je,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ad(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ad(t,!0,n,null,a);break;case"together":Ad(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Al(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(te(153));if(t.child!==null){for(e=t.child,n=Xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o2(e,t,n){switch(t.tag){case 3:T0(t),Vi();break;case 5:o0(t);break;case 1:Kt(t.type)&&ru(t);break;case 4:bh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ze(au,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ze(Je,Je.current&1),t.flags|=128,null):n&t.child.childLanes?z0(e,t,n):(Ze(Je,Je.current&1),e=kr(e,t,n),e!==null?e.sibling:null);Ze(Je,Je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return R0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ze(Je,Je.current),r)break;return null;case 22:case 23:return t.lanes=0,E0(e,t,n)}return kr(e,t,n)}var L0,Kf,A0,B0;L0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};A0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ao(Jn.current);var a=null;switch(n){case"input":i=_f(e,i),r=_f(e,r),a=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),a=[];break;case"textarea":i=yf(e,i),r=yf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tu)}xf(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(es.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=i?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(es.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Ve("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};B0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Oa(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i2(e,t,n){var r=t.pendingProps;switch(ph(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return Kt(t.type)&&nu(),Tt(t),null;case 3:return r=t.stateNode,Ki(),qe(qt),qe(At),wh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ml(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zn!==null&&(np(zn),zn=null))),Kf(e,t),Tt(t),null;case 5:xh(t);var i=Ao(fs.current);if(n=t.type,e!==null&&t.stateNode!=null)A0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(te(166));return Tt(t),null}if(e=Ao(Jn.current),ml(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Kn]=t,r[cs]=a,e=(t.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<Da.length;i++)Ve(Da[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":b_(r,a),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ve("invalid",r);break;case"textarea":w_(r,a),Ve("invalid",r)}xf(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&hl(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&hl(r.textContent,u,e),i=["children",""+u]):es.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Ve("scroll",r)}switch(n){case"input":al(r),x_(r,a,!0);break;case"textarea":al(r),k_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=tu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Kn]=t,e[cs]=r,L0(e,t,!1,!1),t.stateNode=e;e:{switch(l=wf(n,r),n){case"dialog":Ve("cancel",e),Ve("close",e),i=r;break;case"iframe":case"object":case"embed":Ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Da.length;i++)Ve(Da[i],e);i=r;break;case"source":Ve("error",e),i=r;break;case"img":case"image":case"link":Ve("error",e),Ve("load",e),i=r;break;case"details":Ve("toggle",e),i=r;break;case"input":b_(e,r),i=_f(e,r),Ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Ve("invalid",e);break;case"textarea":w_(e,r),i=yf(e,r),Ve("invalid",e);break;default:i=r}xf(n,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?cb(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&lb(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ts(e,d):typeof d=="number"&&ts(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(es.hasOwnProperty(a)?d!=null&&a==="onScroll"&&Ve("scroll",e):d!=null&&Jp(e,a,d,l))}switch(n){case"input":al(e),x_(e,r,!1);break;case"textarea":al(e),k_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+oo(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ri(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)B0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(te(166));if(n=Ao(fs.current),Ao(Jn.current),ml(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kn]=t,(a=r.nodeValue!==n)&&(e=tn,e!==null))switch(e.tag){case 3:hl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hl(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=t,t.stateNode=r}return Tt(t),null;case 13:if(qe(Je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&Yt!==null&&t.mode&1&&!(t.flags&128))Xb(),Vi(),t.flags|=98560,a=!1;else if(a=ml(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(te(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(te(317));a[Kn]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Tt(t),a=!1}else zn!==null&&(np(zn),zn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Je.current&1?ht===0&&(ht=3):Bh())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return Ki(),Kf(e,t),e===null&&ls(t.stateNode.containerInfo),Tt(t),null;case 10:return gh(t.type._context),Tt(t),null;case 17:return Kt(t.type)&&nu(),Tt(t),null;case 19:if(qe(Je),a=t.memoizedState,a===null)return Tt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Oa(a,!1);else{if(ht!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=uu(e),l!==null){for(t.flags|=128,Oa(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(Je,Je.current&1|2),t.child}e=e.sibling}a.tail!==null&&at()>Gi&&(t.flags|=128,r=!0,Oa(a,!1),t.lanes=4194304)}else{if(!r)if(e=uu(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Oa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ge)return Tt(t),null}else 2*at()-a.renderingStartTime>Gi&&n!==1073741824&&(t.flags|=128,r=!0,Oa(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=at(),t.sibling=null,n=Je.current,Ze(Je,r?n&1|2:n&1),t):(Tt(t),null);case 22:case 23:return Ah(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Jt&1073741824&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(te(156,t.tag))}function a2(e,t){switch(ph(t),t.tag){case 1:return Kt(t.type)&&nu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(),qe(qt),qe(At),wh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xh(t),null;case 13:if(qe(Je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(te(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(Je),null;case 4:return Ki(),null;case 10:return gh(t.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var vl=!1,Lt=!1,s2=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(e,t,r)}else n.current=null}function Qf(e,t,n){try{n()}catch(r){nt(e,t,r)}}var fg=!1;function l2(e,t){if(Lf=Jl,e=Db(),dh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,m=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(u=l+i),h!==a||r!==0&&h.nodeType!==3||(d=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++f===i&&(u=l),g===a&&++m===r&&(d=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Af={focusedElem:e,selectionRange:n},Jl=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,P=w.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:On(t.type,v),P);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(C){nt(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return w=fg,fg=!1,w}function Va(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Qf(t,n,a)}i=i.next}while(i!==r)}}function Xu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function N0(e){var t=e.alternate;t!==null&&(e.alternate=null,N0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kn],delete t[cs],delete t[If],delete t[ZS],delete t[HS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function I0(e){return e.tag===5||e.tag===3||e.tag===4}function pg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||I0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tu));else if(r!==4&&(e=e.child,e!==null))for(Xf(e,t,n),e=e.sibling;e!==null;)Xf(e,t,n),e=e.sibling}function Jf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jf(e,t,n),e=e.sibling;e!==null;)Jf(e,t,n),e=e.sibling}var wt=null,Tn=!1;function Lr(e,t,n){for(n=n.child;n!==null;)M0(e,t,n),n=n.sibling}function M0(e,t,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Wu,n)}catch{}switch(n.tag){case 5:Lt||Ei(n,t);case 6:var r=wt,i=Tn;wt=null,Lr(e,t,n),wt=r,Tn=i,wt!==null&&(Tn?(e=wt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Tn?(e=wt,n=n.stateNode,e.nodeType===8?Cd(e.parentNode,n):e.nodeType===1&&Cd(e,n),is(e)):Cd(wt,n.stateNode));break;case 4:r=wt,i=Tn,wt=n.stateNode.containerInfo,Tn=!0,Lr(e,t,n),wt=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Qf(n,t,l),i=i.next}while(i!==r)}Lr(e,t,n);break;case 1:if(!Lt&&(Ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){nt(n,t,u)}Lr(e,t,n);break;case 21:Lr(e,t,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Lr(e,t,n),Lt=r):Lr(e,t,n);break;default:Lr(e,t,n)}}function hg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s2),t.forEach(function(r){var i=g2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:wt=u.stateNode,Tn=!1;break e;case 3:wt=u.stateNode.containerInfo,Tn=!0;break e;case 4:wt=u.stateNode.containerInfo,Tn=!0;break e}u=u.return}if(wt===null)throw Error(te(160));M0(a,l,i),wt=null,Tn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){nt(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)D0(t,e),t=t.sibling}function D0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(t,e),Wn(e),r&4){try{Va(3,e,e.return),Xu(3,e)}catch(v){nt(e,e.return,v)}try{Va(5,e,e.return)}catch(v){nt(e,e.return,v)}}break;case 1:Sn(t,e),Wn(e),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(Sn(t,e),Wn(e),r&512&&n!==null&&Ei(n,n.return),e.flags&32){var i=e.stateNode;try{ts(i,"")}catch(v){nt(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&ib(i,a),wf(u,l);var f=wf(u,a);for(l=0;l<d.length;l+=2){var m=d[l],h=d[l+1];m==="style"?cb(i,h):m==="dangerouslySetInnerHTML"?lb(i,h):m==="children"?ts(i,h):Jp(i,m,h,f)}switch(u){case"input":gf(i,a);break;case"textarea":ab(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Ri(i,!!a.multiple,x,!1):g!==!!a.multiple&&(a.defaultValue!=null?Ri(i,!!a.multiple,a.defaultValue,!0):Ri(i,!!a.multiple,a.multiple?[]:"",!1))}i[cs]=a}catch(v){nt(e,e.return,v)}}break;case 6:if(Sn(t,e),Wn(e),r&4){if(e.stateNode===null)throw Error(te(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){nt(e,e.return,v)}}break;case 3:if(Sn(t,e),Wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{is(t.containerInfo)}catch(v){nt(e,e.return,v)}break;case 4:Sn(t,e),Wn(e);break;case 13:Sn(t,e),Wn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Rh=at())),r&4&&hg(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Lt=(f=Lt)||m,Sn(t,e),Lt=f):Sn(t,e),Wn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(fe=e,m=e.child;m!==null;){for(h=fe=m;fe!==null;){switch(g=fe,x=g.child,g.tag){case 0:case 11:case 14:case 15:Va(4,g,g.return);break;case 1:Ei(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){nt(r,n,v)}}break;case 5:Ei(g,g.return);break;case 22:if(g.memoizedState!==null){_g(h);continue}}x!==null?(x.return=g,fe=x):_g(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=h.stateNode,d=h.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=ub("display",l))}catch(v){nt(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(v){nt(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Sn(t,e),Wn(e),r&4&&hg(e);break;case 21:break;default:Sn(t,e),Wn(e)}}function Wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(I0(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ts(i,""),r.flags&=-33);var a=pg(e);Jf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=pg(e);Xf(e,u,l);break;default:throw Error(te(161))}}catch(d){nt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u2(e,t,n){fe=e,F0(e)}function F0(e,t,n){for(var r=(e.mode&1)!==0;fe!==null;){var i=fe,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||vl;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||Lt;u=vl;var f=Lt;if(vl=l,(Lt=d)&&!f)for(fe=i;fe!==null;)l=fe,d=l.child,l.tag===22&&l.memoizedState!==null?gg(i):d!==null?(d.return=l,fe=d):gg(i);for(;a!==null;)fe=a,F0(a),a=a.sibling;fe=i,vl=u,Lt=f}mg(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,fe=a):mg(e)}}function mg(e){for(;fe!==null;){var t=fe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Lt||Xu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:On(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&J_(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}J_(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&is(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Lt||t.flags&512&&Gf(t)}catch(g){nt(t,t.return,g)}}if(t===e){fe=null;break}if(n=t.sibling,n!==null){n.return=t.return,fe=n;break}fe=t.return}}function _g(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,fe=n;break}fe=t.return}}function gg(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xu(4,t)}catch(d){nt(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){nt(t,i,d)}}var a=t.return;try{Gf(t)}catch(d){nt(t,a,d)}break;case 5:var l=t.return;try{Gf(t)}catch(d){nt(t,l,d)}}}catch(d){nt(t,t.return,d)}if(t===e){fe=null;break}var u=t.sibling;if(u!==null){u.return=t.return,fe=u;break}fe=t.return}}var c2=Math.ceil,fu=Pr.ReactCurrentDispatcher,Th=Pr.ReactCurrentOwner,gn=Pr.ReactCurrentBatchConfig,Le=0,vt=null,ct=null,kt=0,Jt=0,Oi=po(0),ht=0,_s=null,Zo=0,Ju=0,zh=0,qa=null,Ht=null,Rh=0,Gi=1/0,pr=null,pu=!1,Yf=null,Qr=null,yl=!1,$r=null,hu=0,Ka=0,ep=null,Bl=-1,Nl=0;function Ft(){return Le&6?at():Bl!==-1?Bl:Bl=at()}function Gr(e){return e.mode&1?Le&2&&kt!==0?kt&-kt:qS.transition!==null?(Nl===0&&(Nl=wb()),Nl):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:Tb(e.type)),e):1}function An(e,t,n,r){if(50<Ka)throw Ka=0,ep=null,Error(te(185));Es(e,n,r),(!(Le&2)||e!==vt)&&(e===vt&&(!(Le&2)&&(Ju|=n),ht===4&&Fr(e,kt)),Qt(e,r),n===1&&Le===0&&!(t.mode&1)&&(Gi=at()+500,Ku&&ho()))}function Qt(e,t){var n=e.callbackNode;qk(e,t);var r=Xl(e,e===vt?kt:0);if(r===0)n!==null&&C_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&C_(n),t===1)e.tag===0?VS(vg.bind(null,e)):Kb(vg.bind(null,e)),$S(function(){!(Le&6)&&ho()}),n=null;else{switch(kb(r)){case 1:n=rh;break;case 4:n=bb;break;case 16:n=Gl;break;case 536870912:n=xb;break;default:n=Gl}n=q0(n,j0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function j0(e,t){if(Bl=-1,Nl=0,Le&6)throw Error(te(327));var n=e.callbackNode;if(Ii()&&e.callbackNode!==n)return null;var r=Xl(e,e===vt?kt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mu(e,r);else{t=r;var i=Le;Le|=2;var a=$0();(vt!==e||kt!==t)&&(pr=null,Gi=at()+500,Mo(e,t));do try{p2();break}catch(u){U0(e,u)}while(1);_h(),fu.current=a,Le=i,ct!==null?t=0:(vt=null,kt=0,t=ht)}if(t!==0){if(t===2&&(i=Ef(e),i!==0&&(r=i,t=tp(e,i))),t===1)throw n=_s,Mo(e,0),Fr(e,r),Qt(e,at()),n;if(t===6)Fr(e,r);else{if(i=e.current.alternate,!(r&30)&&!d2(i)&&(t=mu(e,r),t===2&&(a=Ef(e),a!==0&&(r=a,t=tp(e,a))),t===1))throw n=_s,Mo(e,0),Fr(e,r),Qt(e,at()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(te(345));case 2:Oo(e,Ht,pr);break;case 3:if(Fr(e,r),(r&130023424)===r&&(t=Rh+500-at(),10<t)){if(Xl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nf(Oo.bind(null,e,Ht,pr),t);break}Oo(e,Ht,pr);break;case 4:if(Fr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ln(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=at()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c2(r/1960))-r,10<r){e.timeoutHandle=Nf(Oo.bind(null,e,Ht,pr),r);break}Oo(e,Ht,pr);break;case 5:Oo(e,Ht,pr);break;default:throw Error(te(329))}}}return Qt(e,at()),e.callbackNode===n?j0.bind(null,e):null}function tp(e,t){var n=qa;return e.current.memoizedState.isDehydrated&&(Mo(e,t).flags|=256),e=mu(e,t),e!==2&&(t=Ht,Ht=n,t!==null&&np(t)),e}function np(e){Ht===null?Ht=e:Ht.push.apply(Ht,e)}function d2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fr(e,t){for(t&=~zh,t&=~Ju,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ln(t),r=1<<n;e[n]=-1,t&=~r}}function vg(e){if(Le&6)throw Error(te(327));Ii();var t=Xl(e,0);if(!(t&1))return Qt(e,at()),null;var n=mu(e,t);if(e.tag!==0&&n===2){var r=Ef(e);r!==0&&(t=r,n=tp(e,r))}if(n===1)throw n=_s,Mo(e,0),Fr(e,t),Qt(e,at()),n;if(n===6)throw Error(te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Oo(e,Ht,pr),Qt(e,at()),null}function Lh(e,t){var n=Le;Le|=1;try{return e(t)}finally{Le=n,Le===0&&(Gi=at()+500,Ku&&ho())}}function Ho(e){$r!==null&&$r.tag===0&&!(Le&6)&&Ii();var t=Le;Le|=1;var n=gn.transition,r=Ie;try{if(gn.transition=null,Ie=1,e)return e()}finally{Ie=r,gn.transition=n,Le=t,!(Le&6)&&ho()}}function Ah(){Jt=Oi.current,qe(Oi)}function Mo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,US(n)),ct!==null)for(n=ct.return;n!==null;){var r=n;switch(ph(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:Ki(),qe(qt),qe(At),wh();break;case 5:xh(r);break;case 4:Ki();break;case 13:qe(Je);break;case 19:qe(Je);break;case 10:gh(r.type._context);break;case 22:case 23:Ah()}n=n.return}if(vt=e,ct=e=Xr(e.current,null),kt=Jt=t,ht=0,_s=null,zh=Ju=Zo=0,Ht=qa=null,Lo!==null){for(t=0;t<Lo.length;t++)if(n=Lo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Lo=null}return e}function U0(e,t){do{var n=ct;try{if(_h(),Rl.current=du,cu){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cu=!1}if(Wo=0,gt=pt=Ye=null,Ha=!1,ps=0,Th.current=null,n===null||n.return===null){ht=1,_s=t,ct=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=kt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=ig(l);if(x!==null){x.flags&=-257,ag(x,l,u,a,t),x.mode&1&&og(a,f,t),t=x,d=f;var w=t.updateQueue;if(w===null){var v=new Set;v.add(d),t.updateQueue=v}else w.add(d);break e}else{if(!(t&1)){og(a,f,t),Bh();break e}d=Error(te(426))}}else if(Ge&&u.mode&1){var P=ig(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ag(P,l,u,a,t),hh(Qi(d,u));break e}}a=d=Qi(d,u),ht!==4&&(ht=2),qa===null?qa=[a]:qa.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=S0(a,d,t);X_(a,y);break e;case 1:u=d;var b=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Qr===null||!Qr.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=P0(a,u,t);X_(a,C);break e}}a=a.return}while(a!==null)}Z0(n)}catch(z){t=z,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(1)}function $0(){var e=fu.current;return fu.current=du,e===null?du:e}function Bh(){(ht===0||ht===3||ht===2)&&(ht=4),vt===null||!(Zo&268435455)&&!(Ju&268435455)||Fr(vt,kt)}function mu(e,t){var n=Le;Le|=2;var r=$0();(vt!==e||kt!==t)&&(pr=null,Mo(e,t));do try{f2();break}catch(i){U0(e,i)}while(1);if(_h(),Le=n,fu.current=r,ct!==null)throw Error(te(261));return vt=null,kt=0,ht}function f2(){for(;ct!==null;)W0(ct)}function p2(){for(;ct!==null&&!Dk();)W0(ct)}function W0(e){var t=V0(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Z0(e):ct=t,Th.current=null}function Z0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a2(n,t),n!==null){n.flags&=32767,ct=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ht=6,ct=null;return}}else if(n=i2(n,t,Jt),n!==null){ct=n;return}if(t=t.sibling,t!==null){ct=t;return}ct=t=e}while(t!==null);ht===0&&(ht=5)}function Oo(e,t,n){var r=Ie,i=gn.transition;try{gn.transition=null,Ie=1,h2(e,t,n,r)}finally{gn.transition=i,Ie=r}return null}function h2(e,t,n,r){do Ii();while($r!==null);if(Le&6)throw Error(te(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(te(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Kk(e,a),e===vt&&(ct=vt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,q0(Gl,function(){return Ii(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=gn.transition,gn.transition=null;var l=Ie;Ie=1;var u=Le;Le|=4,Th.current=null,l2(e,n),D0(n,e),BS(Af),Jl=!!Lf,Af=Lf=null,e.current=n,u2(n),Fk(),Le=u,Ie=l,gn.transition=a}else e.current=n;if(yl&&(yl=!1,$r=e,hu=i),a=e.pendingLanes,a===0&&(Qr=null),$k(n.stateNode),Qt(e,at()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pu)throw pu=!1,e=Yf,Yf=null,e;return hu&1&&e.tag!==0&&Ii(),a=e.pendingLanes,a&1?e===ep?Ka++:(Ka=0,ep=e):Ka=0,ho(),null}function Ii(){if($r!==null){var e=kb(hu),t=gn.transition,n=Ie;try{if(gn.transition=null,Ie=16>e?16:e,$r===null)var r=!1;else{if(e=$r,$r=null,hu=0,Le&6)throw Error(te(331));var i=Le;for(Le|=4,fe=e.current;fe!==null;){var a=fe,l=a.child;if(fe.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(fe=f;fe!==null;){var m=fe;switch(m.tag){case 0:case 11:case 15:Va(8,m,a)}var h=m.child;if(h!==null)h.return=m,fe=h;else for(;fe!==null;){m=fe;var g=m.sibling,x=m.return;if(N0(m),m===f){fe=null;break}if(g!==null){g.return=x,fe=g;break}fe=x}}}var w=a.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}fe=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,fe=l;else e:for(;fe!==null;){if(a=fe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Va(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}var b=e.current;for(fe=b;fe!==null;){l=fe;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,fe=S;else e:for(l=b;fe!==null;){if(u=fe,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Xu(9,u)}}catch(z){nt(u,u.return,z)}if(u===l){fe=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,fe=C;break e}fe=u.return}}if(Le=i,ho(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Wu,e)}catch{}r=!0}return r}finally{Ie=n,gn.transition=t}}return!1}function yg(e,t,n){t=Qi(n,t),t=S0(e,t,1),e=Kr(e,t,1),t=Ft(),e!==null&&(Es(e,1,t),Qt(e,t))}function nt(e,t,n){if(e.tag===3)yg(e,e,n);else for(;t!==null;){if(t.tag===3){yg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qr===null||!Qr.has(r))){e=Qi(n,e),e=P0(t,e,1),t=Kr(t,e,1),e=Ft(),t!==null&&(Es(t,1,e),Qt(t,e));break}}t=t.return}}function m2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ft(),e.pingedLanes|=e.suspendedLanes&n,vt===e&&(kt&n)===n&&(ht===4||ht===3&&(kt&130023424)===kt&&500>at()-Rh?Mo(e,0):zh|=n),Qt(e,t)}function H0(e,t){t===0&&(e.mode&1?(t=ul,ul<<=1,!(ul&130023424)&&(ul=4194304)):t=1);var n=Ft();e=wr(e,t),e!==null&&(Es(e,t,n),Qt(e,n))}function _2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),H0(e,n)}function g2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(t),H0(e,n)}var V0;V0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qt.current)Vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Vt=!1,o2(e,t,n);Vt=!!(e.flags&131072)}else Vt=!1,Ge&&t.flags&1048576&&Qb(t,iu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Al(e,t),e=t.pendingProps;var i=Hi(t,At.current);Ni(t,n),i=Sh(null,t,r,e,i,n);var a=Ph();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Kt(r)?(a=!0,ru(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yh(t),i.updater=Qu,t.stateNode=i,i._reactInternals=t,$f(t,r,e,n),t=Hf(null,t,r,!0,a,n)):(t.tag=0,Ge&&a&&fh(t),Dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Al(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y2(r),e=On(r,e),i){case 0:t=Zf(null,t,r,e,n);break e;case 1:t=ug(null,t,r,e,n);break e;case 11:t=sg(null,t,r,e,n);break e;case 14:t=lg(null,t,r,On(r.type,e),n);break e}throw Error(te(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),Zf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),ug(e,t,r,i,n);case 3:e:{if(T0(t),e===null)throw Error(te(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Yb(e,t),lu(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Qi(Error(te(423)),t),t=cg(e,t,r,n,i);break e}else if(r!==i){i=Qi(Error(te(424)),t),t=cg(e,t,r,n,i);break e}else for(Yt=qr(t.stateNode.containerInfo.firstChild),tn=t,Ge=!0,zn=null,n=r0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){t=kr(e,t,n);break e}Dt(e,t,r,n)}t=t.child}return t;case 5:return o0(t),e===null&&Ff(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Bf(r,i)?l=null:a!==null&&Bf(r,a)&&(t.flags|=32),O0(e,t),Dt(e,t,l,n),t.child;case 6:return e===null&&Ff(t),null;case 13:return z0(e,t,n);case 4:return bh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qi(t,null,r,n):Dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),sg(e,t,r,i,n);case 7:return Dt(e,t,t.pendingProps,n),t.child;case 8:return Dt(e,t,t.pendingProps.children,n),t.child;case 12:return Dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,Ze(au,r._currentValue),r._currentValue=l,a!==null)if(Nn(a.value,l)){if(a.children===i.children&&!qt.current){t=kr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=vr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),jf(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(te(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),jf(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ni(t,n),i=yn(i),r=r(i),t.flags|=1,Dt(e,t,r,n),t.child;case 14:return r=t.type,i=On(r,t.pendingProps),i=On(r.type,i),lg(e,t,r,i,n);case 15:return C0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),Al(e,t),t.tag=1,Kt(r)?(e=!0,ru(t)):e=!1,Ni(t,n),t0(t,r,i),$f(t,r,i,n),Hf(null,t,r,!0,e,n);case 19:return R0(e,t,n);case 22:return E0(e,t,n)}throw Error(te(156,t.tag))};function q0(e,t){return yb(e,t)}function v2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,t,n,r){return new v2(e,t,n,r)}function Nh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y2(e){if(typeof e=="function")return Nh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eh)return 11;if(e===th)return 14}return 2}function Xr(e,t){var n=e.alternate;return n===null?(n=_n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Il(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Nh(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case vi:return Do(n.children,i,a,t);case Yp:l=8,i|=8;break;case ff:return e=_n(12,n,t,i|2),e.elementType=ff,e.lanes=a,e;case pf:return e=_n(13,n,t,i),e.elementType=pf,e.lanes=a,e;case hf:return e=_n(19,n,t,i),e.elementType=hf,e.lanes=a,e;case nb:return Yu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eb:l=10;break e;case tb:l=9;break e;case eh:l=11;break e;case th:l=14;break e;case Nr:l=16,r=null;break e}throw Error(te(130,e==null?e:typeof e,""))}return t=_n(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Do(e,t,n,r){return e=_n(7,e,r,t),e.lanes=n,e}function Yu(e,t,n,r){return e=_n(22,e,r,t),e.elementType=nb,e.lanes=n,e.stateNode={isHidden:!1},e}function Bd(e,t,n){return e=_n(6,e,null,t),e.lanes=n,e}function Nd(e,t,n){return t=_n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=md(0),this.expirationTimes=md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ih(e,t,n,r,i,a,l,u,d){return e=new b2(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=_n(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(a),e}function x2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function K0(e){if(!e)return io;e=e._reactInternals;e:{if(Jo(e)!==e||e.tag!==1)throw Error(te(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(te(171))}if(e.tag===1){var n=e.type;if(Kt(n))return qb(e,n,t)}return t}function Q0(e,t,n,r,i,a,l,u,d){return e=Ih(n,r,!0,e,i,a,l,u,d),e.context=K0(null),n=e.current,r=Ft(),i=Gr(n),a=vr(r,i),a.callback=t??null,Kr(n,a,i),e.current.lanes=i,Es(e,i,r),Qt(e,r),e}function ec(e,t,n,r){var i=t.current,a=Ft(),l=Gr(i);return n=K0(n),t.context===null?t.context=n:t.pendingContext=n,t=vr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kr(i,t,l),e!==null&&(An(e,i,l,a),zl(e,i,l)),l}function _u(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mh(e,t){bg(e,t),(e=e.alternate)&&bg(e,t)}function w2(){return null}var G0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dh(e){this._internalRoot=e}tc.prototype.render=Dh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(te(409));ec(e,t,null,null)};tc.prototype.unmount=Dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ho(function(){ec(null,e,null,null)}),t[xr]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dr.length&&t!==0&&t<Dr[n].priority;n++);Dr.splice(n,0,e),n===0&&Ob(e)}};function Fh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xg(){}function k2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=_u(l);a.call(f)}}var l=Q0(t,r,e,0,null,!1,!1,"",xg);return e._reactRootContainer=l,e[xr]=l.current,ls(e.nodeType===8?e.parentNode:e),Ho(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=_u(d);u.call(f)}}var d=Ih(e,0,!1,null,null,!1,!1,"",xg);return e._reactRootContainer=d,e[xr]=d.current,ls(e.nodeType===8?e.parentNode:e),Ho(function(){ec(t,d,n,r)}),d}function rc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var u=i;i=function(){var d=_u(l);u.call(d)}}ec(t,l,e,i)}else l=k2(n,t,e,i,r);return _u(l)}Sb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ma(t.pendingLanes);n!==0&&(oh(t,n|1),Qt(t,at()),!(Le&6)&&(Gi=at()+500,ho()))}break;case 13:Ho(function(){var r=wr(e,1);if(r!==null){var i=Ft();An(r,e,1,i)}}),Mh(e,1)}};ih=function(e){if(e.tag===13){var t=wr(e,134217728);if(t!==null){var n=Ft();An(t,e,134217728,n)}Mh(e,134217728)}};Pb=function(e){if(e.tag===13){var t=Gr(e),n=wr(e,t);if(n!==null){var r=Ft();An(n,e,t,r)}Mh(e,t)}};Cb=function(){return Ie};Eb=function(e,t){var n=Ie;try{return Ie=e,t()}finally{Ie=n}};Sf=function(e,t,n){switch(t){case"input":if(gf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qu(r);if(!i)throw Error(te(90));ob(r),gf(r,i)}}}break;case"textarea":ab(e,n);break;case"select":t=n.value,t!=null&&Ri(e,!!n.multiple,t,!1)}};pb=Lh;hb=Ho;var S2={usingClientEntryPoint:!1,Events:[Ts,wi,qu,db,fb,Lh]},Ta={findFiberByHostInstance:Ro,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},P2={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gb(e),e===null?null:e.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||w2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Wu=bl.inject(P2),Xn=bl}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S2;on.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(t))throw Error(te(200));return x2(e,t,null,n)};on.createRoot=function(e,t){if(!Fh(e))throw Error(te(299));var n=!1,r="",i=G0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ih(e,1,!1,null,null,n,!1,r,i),e[xr]=t.current,ls(e.nodeType===8?e.parentNode:e),new Dh(t)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(te(188)):(e=Object.keys(e).join(","),Error(te(268,e)));return e=gb(t),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return Ho(e)};on.hydrate=function(e,t,n){if(!nc(t))throw Error(te(200));return rc(null,e,t,!0,n)};on.hydrateRoot=function(e,t,n){if(!Fh(e))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=G0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Q0(t,null,e,1,n??null,i,!1,a,l),e[xr]=t.current,ls(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new tc(t)};on.render=function(e,t,n){if(!nc(t))throw Error(te(200));return rc(null,e,t,!1,n)};on.unmountComponentAtNode=function(e){if(!nc(e))throw Error(te(40));return e._reactRootContainer?(Ho(function(){rc(null,null,e,!1,function(){e._reactRootContainer=null,e[xr]=null})}),!0):!1};on.unstable_batchedUpdates=Lh;on.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nc(n))throw Error(te(200));if(e==null||e._reactInternals===void 0)throw Error(te(38));return rc(e,t,n,!1,r)};on.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=on})(wk);const C2=$y(Wi);var X0,wg=Wi;X0=wg.createRoot,wg.hydrateRoot;var rp={},E2={get exports(){return rp},set exports(e){rp=e}},J0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=T;function O2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var T2=typeof Object.is=="function"?Object.is:O2,z2=Xi.useState,R2=Xi.useEffect,L2=Xi.useLayoutEffect,A2=Xi.useDebugValue;function B2(e,t){var n=t(),r=z2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return L2(function(){i.value=n,i.getSnapshot=t,Id(i)&&a({inst:i})},[e,n,t]),R2(function(){return Id(i)&&a({inst:i}),e(function(){Id(i)&&a({inst:i})})},[e]),A2(n),n}function Id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!T2(e,n)}catch{return!0}}function N2(e,t){return t()}var I2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?N2:B2;J0.useSyncExternalStore=Xi.useSyncExternalStore!==void 0?Xi.useSyncExternalStore:I2;(function(e){e.exports=J0})(E2);var op={},M2={get exports(){return op},set exports(e){op=e}},Y0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc=T,D2=rp;function F2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var j2=typeof Object.is=="function"?Object.is:F2,U2=D2.useSyncExternalStore,$2=oc.useRef,W2=oc.useEffect,Z2=oc.useMemo,H2=oc.useDebugValue;Y0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=$2(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=Z2(function(){function d(x){if(!f){if(f=!0,m=x,x=r(x),i!==void 0&&l.hasValue){var w=l.value;if(i(w,x))return h=w}return h=x}if(w=h,j2(m,x))return w;var v=r(x);return i!==void 0&&i(w,v)?w:(m=x,h=v)}var f=!1,m,h,g=n===void 0?null:n;return[function(){return d(t())},g===null?void 0:function(){return d(g())}]},[t,n,r,i]);var u=U2(e,a[0],a[1]);return W2(function(){l.hasValue=!0,l.value=u},[u]),H2(u),u};(function(e){e.exports=Y0})(M2);function V2(e){e()}let ex=V2;const q2=e=>ex=e,K2=()=>ex,ao=T.createContext(null);function tx(){return T.useContext(ao)}const Q2=()=>{throw new Error("uSES not initialized!")};let nx=Q2;const G2=e=>{nx=e},X2=(e,t)=>e===t;function J2(e=ao){const t=e===ao?tx:()=>T.useContext(e);return function(r,i=X2){const{store:a,subscription:l,getServerState:u}=t(),d=nx(l.addNestedSub,a.getState,u||a.getState,r,i);return T.useDebugValue(d),d}}const Y2=J2();function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne.apply(this,arguments)}var ip={},eP={get exports(){return ip},set exports(e){ip=e}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt=typeof Symbol=="function"&&Symbol.for,jh=yt?Symbol.for("react.element"):60103,Uh=yt?Symbol.for("react.portal"):60106,ic=yt?Symbol.for("react.fragment"):60107,ac=yt?Symbol.for("react.strict_mode"):60108,sc=yt?Symbol.for("react.profiler"):60114,lc=yt?Symbol.for("react.provider"):60109,uc=yt?Symbol.for("react.context"):60110,$h=yt?Symbol.for("react.async_mode"):60111,cc=yt?Symbol.for("react.concurrent_mode"):60111,dc=yt?Symbol.for("react.forward_ref"):60112,fc=yt?Symbol.for("react.suspense"):60113,tP=yt?Symbol.for("react.suspense_list"):60120,pc=yt?Symbol.for("react.memo"):60115,hc=yt?Symbol.for("react.lazy"):60116,nP=yt?Symbol.for("react.block"):60121,rP=yt?Symbol.for("react.fundamental"):60117,oP=yt?Symbol.for("react.responder"):60118,iP=yt?Symbol.for("react.scope"):60119;function sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jh:switch(e=e.type,e){case $h:case cc:case ic:case sc:case ac:case fc:return e;default:switch(e=e&&e.$$typeof,e){case uc:case dc:case hc:case pc:case lc:return e;default:return t}}case Uh:return t}}}function rx(e){return sn(e)===cc}Me.AsyncMode=$h;Me.ConcurrentMode=cc;Me.ContextConsumer=uc;Me.ContextProvider=lc;Me.Element=jh;Me.ForwardRef=dc;Me.Fragment=ic;Me.Lazy=hc;Me.Memo=pc;Me.Portal=Uh;Me.Profiler=sc;Me.StrictMode=ac;Me.Suspense=fc;Me.isAsyncMode=function(e){return rx(e)||sn(e)===$h};Me.isConcurrentMode=rx;Me.isContextConsumer=function(e){return sn(e)===uc};Me.isContextProvider=function(e){return sn(e)===lc};Me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jh};Me.isForwardRef=function(e){return sn(e)===dc};Me.isFragment=function(e){return sn(e)===ic};Me.isLazy=function(e){return sn(e)===hc};Me.isMemo=function(e){return sn(e)===pc};Me.isPortal=function(e){return sn(e)===Uh};Me.isProfiler=function(e){return sn(e)===sc};Me.isStrictMode=function(e){return sn(e)===ac};Me.isSuspense=function(e){return sn(e)===fc};Me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ic||e===cc||e===sc||e===ac||e===fc||e===tP||typeof e=="object"&&e!==null&&(e.$$typeof===hc||e.$$typeof===pc||e.$$typeof===lc||e.$$typeof===uc||e.$$typeof===dc||e.$$typeof===rP||e.$$typeof===oP||e.$$typeof===iP||e.$$typeof===nP)};Me.typeOf=sn;(function(e){e.exports=Me})(eP);var ox=ip,aP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ix={};ix[ox.ForwardRef]=aP;ix[ox.Memo]=sP;var kg={},lP={get exports(){return kg},set exports(e){kg=e}},De={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=Symbol.for("react.element"),Zh=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),uP=Symbol.for("react.server_context"),bc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),kc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),cP=Symbol.for("react.offscreen"),ax;ax=Symbol.for("react.module.reference");function xn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wh:switch(e=e.type,e){case mc:case gc:case _c:case xc:case wc:return e;default:switch(e=e&&e.$$typeof,e){case uP:case yc:case bc:case Sc:case kc:case vc:return e;default:return t}}case Zh:return t}}}De.ContextConsumer=yc;De.ContextProvider=vc;De.Element=Wh;De.ForwardRef=bc;De.Fragment=mc;De.Lazy=Sc;De.Memo=kc;De.Portal=Zh;De.Profiler=gc;De.StrictMode=_c;De.Suspense=xc;De.SuspenseList=wc;De.isAsyncMode=function(){return!1};De.isConcurrentMode=function(){return!1};De.isContextConsumer=function(e){return xn(e)===yc};De.isContextProvider=function(e){return xn(e)===vc};De.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wh};De.isForwardRef=function(e){return xn(e)===bc};De.isFragment=function(e){return xn(e)===mc};De.isLazy=function(e){return xn(e)===Sc};De.isMemo=function(e){return xn(e)===kc};De.isPortal=function(e){return xn(e)===Zh};De.isProfiler=function(e){return xn(e)===gc};De.isStrictMode=function(e){return xn(e)===_c};De.isSuspense=function(e){return xn(e)===xc};De.isSuspenseList=function(e){return xn(e)===wc};De.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===mc||e===gc||e===_c||e===xc||e===wc||e===cP||typeof e=="object"&&e!==null&&(e.$$typeof===Sc||e.$$typeof===kc||e.$$typeof===vc||e.$$typeof===yc||e.$$typeof===bc||e.$$typeof===ax||e.getModuleId!==void 0)};De.typeOf=xn;(function(e){e.exports=De})(lP);function dP(){const e=K2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const Sg={notify(){},get:()=>[]};function fP(e,t){let n,r=Sg;function i(h){return d(),r.subscribe(h)}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return!!n}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=dP())}function f(){n&&(n(),n=void 0,r.clear(),r=Sg)}const m={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return m}const pP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hP=pP?T.useLayoutEffect:T.useEffect;function mP({store:e,context:t,children:n,serverState:r}){const i=T.useMemo(()=>{const u=fP(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=T.useMemo(()=>e.getState(),[e]);hP(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,a]);const l=t||ao;return Z.createElement(l.Provider,{value:i},n)}function sx(e=ao){const t=e===ao?tx:()=>T.useContext(e);return function(){const{store:r}=t();return r}}const _P=sx();function gP(e=ao){const t=e===ao?_P:sx(e);return function(){return t().dispatch}}const vP=gP();G2(op.useSyncExternalStoreWithSelector);q2(Wi.unstable_batchedUpdates);/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}var it;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(it||(it={}));const Pg="popstate";function yP(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:u}=r.location;return gs("",{pathname:a,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vo(i)}return xP(t,n,null,e)}function we(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ji(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bP(){return Math.random().toString(36).substr(2,8)}function Cg(e,t){return{usr:e.state,key:e.key,idx:t}}function gs(e,t,n,r){return n===void 0&&(n=null),ze({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:n,key:t&&t.key||r||bP()})}function Vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function xP(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u=it.Pop,d=null,f=m();f==null&&(f=0,l.replaceState(ze({},l.state,{idx:f}),""));function m(){return(l.state||{idx:null}).idx}function h(){u=it.Pop;let P=m(),y=P==null?null:P-f;f=P,d&&d({action:u,location:v.location,delta:y})}function g(P,y){u=it.Push;let b=gs(v.location,P,y);n&&n(b,P),f=m()+1;let S=Cg(b,f),C=v.createHref(b);try{l.pushState(S,"",C)}catch{i.location.assign(C)}a&&d&&d({action:u,location:v.location,delta:1})}function x(P,y){u=it.Replace;let b=gs(v.location,P,y);n&&n(b,P),f=m();let S=Cg(b,f),C=v.createHref(b);l.replaceState(S,"",C),a&&d&&d({action:u,location:v.location,delta:0})}function w(P){let y=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof P=="string"?P:Vo(P);return we(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let v={get action(){return u},get location(){return e(i,l)},listen(P){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Pg,h),d=P,()=>{i.removeEventListener(Pg,h),d=null}},createHref(P){return t(i,P)},createURL:w,encodeLocation(P){let y=w(P);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:x,go(P){return l.go(P)}};return v}var ft;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ft||(ft={}));const wP=new Set(["lazy","caseSensitive","path","id","index","children"]);function kP(e){return e.index===!0}function lx(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let l=[...n,a],u=typeof i.id=="string"?i.id:l.join("-");if(we(i.index!==!0||!i.children,"Cannot specify children on an index route"),we(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),kP(i)){let d=ze({},i,{hasErrorBoundary:t(i),id:u});return r[u]=d,d}else{let d=ze({},i,{id:u,hasErrorBoundary:t(i),children:void 0});return r[u]=d,i.children&&(d.children=lx(i.children,t,l,r)),d}})}function Ti(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Cr(t):t,i=Pc(r.pathname||"/",n);if(i==null)return null;let a=ux(e);SP(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=AP(a[u],IP(i));return l}function ux(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(we(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Jr([r,d.relativePath]),m=n.concat(d);a.children&&a.children.length>0&&(we(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),ux(a.children,t,m,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:RP(f,a.index),routesMeta:m})};return e.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,l);else for(let d of cx(a.path))i(a,l,d)}),t}function cx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=cx(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function SP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:LP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PP=/^:\w+$/,CP=3,EP=2,OP=1,TP=10,zP=-2,Eg=e=>e==="*";function RP(e,t){let n=e.split("/"),r=n.length;return n.some(Eg)&&(r+=zP),t&&(r+=EP),n.filter(i=>!Eg(i)).reduce((i,a)=>i+(PP.test(a)?CP:a===""?OP:TP),r)}function LP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function AP(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=BP({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let h=u.route;a.push({params:r,pathname:Jr([i,m.pathname]),pathnameBase:jP(Jr([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=Jr([i,m.pathnameBase]))}return a}function BP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=NP(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,m,h)=>{if(m==="*"){let g=u[h]||"";l=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return f[m]=MP(u[h]||"",m),f},{}),pathname:a,pathnameBase:l,pattern:e}}function NP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ji(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function IP(e){try{return decodeURI(e)}catch(t){return Ji(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function MP(e,t){try{return decodeURIComponent(e)}catch(n){return Ji(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Pc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function DP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e;return{pathname:n?n.startsWith("/")?n:FP(n,t):t,search:UP(r),hash:$P(i)}}function FP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Md(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dx(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cr(e):(i=ze({},e),we(!i.pathname||!i.pathname.includes("?"),Md("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),Md("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),Md("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,u;if(r||l==null)u=n;else{let h=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}u=h>=0?t[h]:"/"}let d=DP(i,u),f=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const Jr=e=>e.join("/").replace(/\/\/+/g,"/"),jP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),UP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$P=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Og extends Error{}class WP{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],we(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,l)=>r=l),this.controller=new AbortController;let i=()=>r(new Og("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((a,l)=>{let[u,d]=l;return Object.assign(a,{[u]:this.trackPromise(u,d)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof Og?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return we(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:HP(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function ZP(e){return e instanceof Promise&&e._tracked===!0}function HP(e){if(!ZP(e))return e;if(e._error)throw e._error;return e._data}class Vh{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function fx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const px=["post","put","patch","delete"],VP=new Set(px),qP=["get",...px],KP=new Set(qP),QP=new Set([301,302,303,307,308]),GP=new Set([307,308]),Dd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},XP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Tg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},hx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JP=!mx,YP=e=>!!e.hasErrorBoundary;function eC(e){we(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||YP,n={},r=lx(e.routes,t,void 0,n),i,a=null,l=new Set,u=null,d=null,f=null,m=e.hydrationData!=null,h=Ti(r,e.history.location,e.basename),g=null;if(h==null){let U=qn(404,{pathname:e.history.location.pathname}),{matches:H,route:X}=Ng(r);h=H,g={[X.id]:U}}let x=!h.some(U=>U.route.lazy)&&(!h.some(U=>U.route.loader)||e.hydrationData!=null),w,v={historyAction:e.history.action,location:e.history.location,matches:h,initialized:x,navigation:Dd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},P=it.Pop,y=!1,b,S=!1,C=!1,z=[],N=[],A=new Map,j=0,K=-1,W=new Map,Y=new Set,oe=new Map,ue=new Map,ne=new Map,pe=!1;function B(){if(a=e.history.listen(X=>{let{action:ce,location:he,delta:ge}=X;if(pe){pe=!1;return}Ji(ne.size===0||ge!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let _e=Et({currentLocation:v.location,nextLocation:he,historyAction:ce});if(_e&&ge!=null){pe=!0,e.history.go(ge*-1),ln(_e,{state:"blocked",location:he,proceed(){ln(_e,{state:"proceeding",proceed:void 0,reset:void 0,location:he}),e.history.go(ge)},reset(){Ct(_e),J({blockers:new Map(w.state.blockers)})}});return}return R(ce,he)}),v.initialized)return w;let U=v.matches.filter(X=>X.route.lazy);if(U.length===0)return R(it.Pop,v.location),w;let H=U.map(X=>ap(X.route,t,n));return Promise.all(H).then(()=>{!v.matches.some(ce=>ce.route.loader)||e.hydrationData!=null?J({initialized:!0}):R(it.Pop,v.location)}),w}function ae(){a&&a(),l.clear(),b&&b.abort(),v.fetchers.forEach((U,H)=>Ce(H)),v.blockers.forEach((U,H)=>Ct(H))}function D(U){return l.add(U),()=>l.delete(U)}function J(U){v=ze({},v,U),l.forEach(H=>H(v))}function Q(U,H){var X,ce;let he=v.actionData!=null&&v.navigation.formMethod!=null&&hr(v.navigation.formMethod)&&v.navigation.state==="loading"&&((X=U.state)==null?void 0:X._isRedirect)!==!0,ge;H.actionData?Object.keys(H.actionData).length>0?ge=H.actionData:ge=null:he?ge=v.actionData:ge=null;let _e=H.loaderData?Bg(v.loaderData,H.loaderData,H.matches||[],H.errors):v.loaderData;for(let[me]of ne)Ct(me);let ye=y===!0||v.navigation.formMethod!=null&&hr(v.navigation.formMethod)&&((ce=U.state)==null?void 0:ce._isRedirect)!==!0;i&&(r=i,i=void 0),J(ze({},H,{actionData:ge,loaderData:_e,historyAction:P,location:U,initialized:!0,navigation:Dd,revalidation:"idle",restoreScrollPosition:un(U,H.matches||v.matches),preventScrollReset:ye,blockers:new Map(v.blockers)})),S||P===it.Pop||(P===it.Push?e.history.push(U,U.state):P===it.Replace&&e.history.replace(U,U.state)),P=it.Pop,y=!1,S=!1,C=!1,z=[],N=[]}async function E(U,H){if(typeof U=="number"){e.history.go(U);return}let{path:X,submission:ce,error:he}=zg(U,H),ge=v.location,_e=gs(v.location,X,H&&H.state);_e=ze({},_e,e.history.encodeLocation(_e));let ye=H&&H.replace!=null?H.replace:void 0,me=it.Push;ye===!0?me=it.Replace:ye===!1||ce!=null&&hr(ce.formMethod)&&ce.formAction===v.location.pathname+v.location.search&&(me=it.Replace);let tt=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,Te=Et({currentLocation:ge,nextLocation:_e,historyAction:me});if(Te){ln(Te,{state:"blocked",location:_e,proceed(){ln(Te,{state:"proceeding",proceed:void 0,reset:void 0,location:_e}),E(U,H)},reset(){Ct(Te),J({blockers:new Map(v.blockers)})}});return}return await R(me,_e,{submission:ce,pendingError:he,preventScrollReset:tt,replace:H&&H.replace})}function I(){if(Ee(),J({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){R(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}R(P||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function R(U,H,X){b&&b.abort(),b=null,P=U,S=(X&&X.startUninterruptedRevalidation)===!0,aa(v.location,v.matches),y=(X&&X.preventScrollReset)===!0;let ce=i||r,he=X&&X.overrideNavigation,ge=Ti(ce,H,e.basename);if(!ge){let Ke=qn(404,{pathname:H.pathname}),{matches:Gt,route:Wt}=Ng(ce);or(),Q(H,{matches:Gt,loaderData:{},errors:{[Wt.id]:Ke}});return}if(iC(v.location,H)&&!(X&&X.submission&&hr(X.submission.formMethod))){Q(H,{matches:ge});return}b=new AbortController;let _e=Ra(e.history,H,b.signal,X&&X.submission),ye,me;if(X&&X.pendingError)me={[zi(ge).route.id]:X.pendingError};else if(X&&X.submission&&hr(X.submission.formMethod)){let Ke=await V(_e,H,X.submission,ge,{replace:X.replace});if(Ke.shortCircuited)return;ye=Ke.pendingActionData,me=Ke.pendingActionError,he=ze({state:"loading",location:H},X.submission),_e=new Request(_e.url,{signal:_e.signal})}let{shortCircuited:tt,loaderData:Te,errors:bt}=await re(_e,H,ge,he,X&&X.submission,X&&X.replace,ye,me);tt||(b=null,Q(H,ze({matches:ge},ye?{actionData:ye}:{},{loaderData:Te,errors:bt})))}async function V(U,H,X,ce,he){Ee();let ge=ze({state:"submitting",location:H},X);J({navigation:ge});let _e,ye=sp(ce,H);if(!ye.route.action&&!ye.route.lazy)_e={type:ft.error,error:qn(405,{method:U.method,pathname:H.pathname,routeId:ye.route.id})};else if(_e=await za("action",U,ye,ce,n,t,w.basename),U.signal.aborted)return{shortCircuited:!0};if(Mi(_e)){let me;return he&&he.replace!=null?me=he.replace:me=_e.location===v.location.pathname+v.location.search,await Ue(v,_e,{submission:X,replace:me}),{shortCircuited:!0}}if(Qa(_e)){let me=zi(ce,ye.route.id);return(he&&he.replace)!==!0&&(P=it.Push),{pendingActionData:{},pendingActionError:{[me.route.id]:_e.error}}}if(Bo(_e))throw qn(400,{type:"defer-action"});return{pendingActionData:{[ye.route.id]:_e.data}}}async function re(U,H,X,ce,he,ge,_e,ye){let me=ce;me||(me=ze({state:"loading",location:H,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},he));let tt=he||(me.formMethod&&me.formAction&&me.formData&&me.formEncType?{formMethod:me.formMethod,formAction:me.formAction,formData:me.formData,formEncType:me.formEncType}:void 0),Te=i||r,[bt,Ke]=Rg(e.history,v,X,tt,H,C,z,N,oe,Te,e.basename,_e,ye);if(or(_t=>!(X&&X.some(Zt=>Zt.route.id===_t))||bt&&bt.some(Zt=>Zt.route.id===_t)),bt.length===0&&Ke.length===0)return Q(H,ze({matches:X,loaderData:{},errors:ye||null},_e?{actionData:_e}:{})),{shortCircuited:!0};if(!S){Ke.forEach(Zt=>{let ir=v.fetchers.get(Zt.key),ni={state:"loading",data:ir&&ir.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Zt.key,ni)});let _t=_e||v.actionData;J(ze({navigation:me},_t?Object.keys(_t).length===0?{actionData:null}:{actionData:_t}:{},Ke.length>0?{fetchers:new Map(v.fetchers)}:{}))}K=++j,Ke.forEach(_t=>A.set(_t.key,b));let{results:Gt,loaderResults:Wt,fetcherResults:mo}=await Be(v.matches,X,bt,Ke,U);if(U.signal.aborted)return{shortCircuited:!0};Ke.forEach(_t=>A.delete(_t.key));let ei=Ig(Gt);if(ei)return await Ue(v,ei,{replace:ge}),{shortCircuited:!0};let{loaderData:ti,errors:Or}=Ag(v,X,bt,Wt,ye,Ke,mo,ue);ue.forEach((_t,Zt)=>{_t.subscribe(ir=>{(ir||_t.done)&&ue.delete(Zt)})}),$e();let sa=$t(K);return ze({loaderData:ti,errors:Or},sa||Ke.length>0?{fetchers:new Map(v.fetchers)}:{})}function $(U){return v.fetchers.get(U)||XP}function ee(U,H,X,ce){if(JP)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");A.has(U)&&Nt(U);let ge=Ti(i||r,X,e.basename);if(!ge){He(U,H,qn(404,{pathname:X}));return}let{path:_e,submission:ye}=zg(X,ce,!0),me=sp(ge,_e);if(y=(ce&&ce.preventScrollReset)===!0,ye&&hr(ye.formMethod)){le(U,H,_e,me,ge,ye);return}oe.set(U,{routeId:H,path:_e}),je(U,H,_e,me,ge,ye)}async function le(U,H,X,ce,he,ge){if(Ee(),oe.delete(U),!ce.route.action&&!ce.route.lazy){let de=qn(405,{method:ge.formMethod,pathname:X,routeId:H});He(U,H,de);return}let _e=v.fetchers.get(U),ye=ze({state:"submitting"},ge,{data:_e&&_e.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(U,ye),J({fetchers:new Map(v.fetchers)});let me=new AbortController,tt=Ra(e.history,X,me.signal,ge);A.set(U,me);let Te=await za("action",tt,ce,he,n,t,w.basename);if(tt.signal.aborted){A.get(U)===me&&A.delete(U);return}if(Mi(Te)){A.delete(U),Y.add(U);let de=ze({state:"loading"},ge,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(U,de),J({fetchers:new Map(v.fetchers)}),Ue(v,Te,{isFetchActionRedirect:!0})}if(Qa(Te)){He(U,H,Te.error);return}if(Bo(Te))throw qn(400,{type:"defer-action"});let bt=v.navigation.location||v.location,Ke=Ra(e.history,bt,me.signal),Gt=i||r,Wt=v.navigation.state!=="idle"?Ti(Gt,v.navigation.location,e.basename):v.matches;we(Wt,"Didn't find any matches after fetcher action");let mo=++j;W.set(U,mo);let ei=ze({state:"loading",data:Te.data},ge,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(U,ei);let[ti,Or]=Rg(e.history,v,Wt,ge,bt,C,z,N,oe,Gt,e.basename,{[ce.route.id]:Te.data},void 0);Or.filter(de=>de.key!==U).forEach(de=>{let ri=de.key,ua=v.fetchers.get(ri),Ds={state:"loading",data:ua&&ua.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(ri,Ds),A.set(ri,me)}),J({fetchers:new Map(v.fetchers)});let{results:sa,loaderResults:_t,fetcherResults:Zt}=await Be(v.matches,Wt,ti,Or,Ke);if(me.signal.aborted)return;W.delete(U),A.delete(U),Or.forEach(de=>A.delete(de.key));let ir=Ig(sa);if(ir)return Ue(v,ir);let{loaderData:ni,errors:la}=Ag(v,v.matches,ti,_t,void 0,Or,Zt,ue),Mc={state:"idle",data:Te.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(U,Mc);let cn=$t(mo);v.navigation.state==="loading"&&mo>K?(we(P,"Expected pending action"),b&&b.abort(),Q(v.navigation.location,{matches:Wt,loaderData:ni,errors:la,fetchers:new Map(v.fetchers)})):(J(ze({errors:la,loaderData:Bg(v.loaderData,ni,Wt,la)},cn?{fetchers:new Map(v.fetchers)}:{})),C=!1)}async function je(U,H,X,ce,he,ge){let _e=v.fetchers.get(U),ye=ze({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ge,{data:_e&&_e.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(U,ye),J({fetchers:new Map(v.fetchers)});let me=new AbortController,tt=Ra(e.history,X,me.signal);A.set(U,me);let Te=await za("loader",tt,ce,he,n,t,w.basename);if(Bo(Te)&&(Te=await yx(Te,tt.signal,!0)||Te),A.get(U)===me&&A.delete(U),tt.signal.aborted)return;if(Mi(Te)){await Ue(v,Te);return}if(Qa(Te)){let Ke=zi(v.matches,H);v.fetchers.delete(U),J({fetchers:new Map(v.fetchers),errors:{[Ke.route.id]:Te.error}});return}we(!Bo(Te),"Unhandled fetcher deferred data");let bt={state:"idle",data:Te.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(U,bt),J({fetchers:new Map(v.fetchers)})}async function Ue(U,H,X){var ce;let{submission:he,replace:ge,isFetchActionRedirect:_e}=X===void 0?{}:X;H.revalidate&&(C=!0);let ye=gs(U.location,H.location,ze({_isRedirect:!0},_e?{_isFetchActionRedirect:!0}:{}));if(we(ye,"Expected a location on the redirect navigation"),hx.test(H.location)&&mx&&typeof((ce=window)==null?void 0:ce.location)<"u"){let Gt=e.history.createURL(H.location),Wt=Pc(Gt.pathname,e.basename||"/")==null;if(window.location.origin!==Gt.origin||Wt){ge?window.location.replace(H.location):window.location.assign(H.location);return}}b=null;let me=ge===!0?it.Replace:it.Push,{formMethod:tt,formAction:Te,formEncType:bt,formData:Ke}=U.navigation;!he&&tt&&Te&&Ke&&bt&&(he={formMethod:tt,formAction:Te,formEncType:bt,formData:Ke}),GP.has(H.status)&&he&&hr(he.formMethod)?await R(me,ye,{submission:ze({},he,{formAction:H.location}),preventScrollReset:y}):await R(me,ye,{overrideNavigation:{state:"loading",location:ye,formMethod:he?he.formMethod:void 0,formAction:he?he.formAction:void 0,formEncType:he?he.formEncType:void 0,formData:he?he.formData:void 0},preventScrollReset:y})}async function Be(U,H,X,ce,he){let ge=await Promise.all([...X.map(me=>za("loader",he,me,H,n,t,w.basename)),...ce.map(me=>me.matches&&me.match?za("loader",Ra(e.history,me.path,he.signal),me.match,me.matches,n,t,w.basename):{type:ft.error,error:qn(404,{pathname:me.path})})]),_e=ge.slice(0,X.length),ye=ge.slice(X.length);return await Promise.all([Mg(U,X,_e,he.signal,!1,v.loaderData),Mg(U,ce.map(me=>me.match),ye,he.signal,!0)]),{results:ge,loaderResults:_e,fetcherResults:ye}}function Ee(){C=!0,z.push(...or()),oe.forEach((U,H)=>{A.has(H)&&(N.push(H),Nt(H))})}function He(U,H,X){let ce=zi(v.matches,H);Ce(U),J({errors:{[ce.route.id]:X},fetchers:new Map(v.fetchers)})}function Ce(U){A.has(U)&&Nt(U),oe.delete(U),W.delete(U),Y.delete(U),v.fetchers.delete(U)}function Nt(U){let H=A.get(U);we(H,"Expected fetch controller: "+U),H.abort(),A.delete(U)}function It(U){for(let H of U){let ce={state:"idle",data:$(H).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(H,ce)}}function $e(){let U=[];for(let H of Y){let X=v.fetchers.get(H);we(X,"Expected fetcher: "+H),X.state==="loading"&&(Y.delete(H),U.push(H))}It(U)}function $t(U){let H=[];for(let[X,ce]of W)if(ce<U){let he=v.fetchers.get(X);we(he,"Expected fetcher: "+X),he.state==="loading"&&(Nt(X),W.delete(X),H.push(X))}return It(H),H.length>0}function rr(U,H){let X=v.blockers.get(U)||Tg;return ne.get(U)!==H&&ne.set(U,H),X}function Ct(U){v.blockers.delete(U),ne.delete(U)}function ln(U,H){let X=v.blockers.get(U)||Tg;we(X.state==="unblocked"&&H.state==="blocked"||X.state==="blocked"&&H.state==="blocked"||X.state==="blocked"&&H.state==="proceeding"||X.state==="blocked"&&H.state==="unblocked"||X.state==="proceeding"&&H.state==="unblocked","Invalid blocker state transition: "+X.state+" -> "+H.state),v.blockers.set(U,H),J({blockers:new Map(v.blockers)})}function Et(U){let{currentLocation:H,nextLocation:X,historyAction:ce}=U;if(ne.size===0)return;ne.size>1&&Ji(!1,"A router only supports one blocker at a time");let he=Array.from(ne.entries()),[ge,_e]=he[he.length-1],ye=v.blockers.get(ge);if(!(ye&&ye.state==="proceeding")&&_e({currentLocation:H,nextLocation:X,historyAction:ce}))return ge}function or(U){let H=[];return ue.forEach((X,ce)=>{(!U||U(ce))&&(X.cancel(),H.push(ce),ue.delete(ce))}),H}function ia(U,H,X){if(u=U,f=H,d=X||(ce=>ce.key),!m&&v.navigation===Dd){m=!0;let ce=un(v.location,v.matches);ce!=null&&J({restoreScrollPosition:ce})}return()=>{u=null,f=null,d=null}}function aa(U,H){if(u&&d&&f){let X=H.map(he=>Dg(he,v.loaderData)),ce=d(U,X)||U.key;u[ce]=f()}}function un(U,H){if(u&&d&&f){let X=H.map(ge=>Dg(ge,v.loaderData)),ce=d(U,X)||U.key,he=u[ce];if(typeof he=="number")return he}return null}function Fn(U){i=U}return w={get basename(){return e.basename},get state(){return v},get routes(){return r},initialize:B,subscribe:D,enableScrollRestoration:ia,navigate:E,fetch:ee,revalidate:I,createHref:U=>e.history.createHref(U),encodeLocation:U=>e.history.encodeLocation(U),getFetcher:$,deleteFetcher:Ce,dispose:ae,getBlocker:rr,deleteBlocker:Ct,_internalFetchControllers:A,_internalActiveDeferreds:ue,_internalSetRoutes:Fn},w}function tC(e){return e!=null&&"formData"in e}function zg(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:Vo(e);if(!t||!tC(t))return{path:r};if(t.formMethod&&!sC(t.formMethod))return{path:r,error:qn(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:vx(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},hr(i.formMethod)))return{path:r,submission:i};let a=Cr(r),l=gx(t.formData);return n&&a.search&&bx(a.search)&&l.append("index",""),a.search="?"+l,{path:Vo(a),submission:i}}function nC(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Rg(e,t,n,r,i,a,l,u,d,f,m,h,g){let x=g?Object.values(g)[0]:h?Object.values(h)[0]:void 0,w=e.createURL(t.location),v=e.createURL(i),P=a||w.toString()===v.toString()||w.search!==v.search,y=g?Object.keys(g)[0]:void 0,S=nC(n,y).filter((z,N)=>{if(z.route.lazy)return!0;if(z.route.loader==null)return!1;if(rC(t.loaderData,t.matches[N],z)||l.some(K=>K===z.route.id))return!0;let A=t.matches[N],j=z;return Lg(z,ze({currentUrl:w,currentParams:A.params,nextUrl:v,nextParams:j.params},r,{actionResult:x,defaultShouldRevalidate:P||_x(A,j)}))}),C=[];return d.forEach((z,N)=>{if(!n.some(W=>W.route.id===z.routeId))return;let A=Ti(f,z.path,m);if(!A){C.push(ze({key:N},z,{matches:null,match:null}));return}let j=sp(A,z.path);if(u.includes(N)){C.push(ze({key:N,matches:A,match:j},z));return}Lg(j,ze({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:x,defaultShouldRevalidate:P}))&&C.push(ze({key:N,matches:A,match:j},z))}),[S,C]}function rC(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function _x(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Lg(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ap(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];we(i,"No route found in manifest");let a={};for(let l in r){let d=i[l]!==void 0&&l!=="hasErrorBoundary";Ji(!d,'Route "'+i.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!d&&!wP.has(l)&&(a[l]=r[l])}Object.assign(i,a),Object.assign(i,{hasErrorBoundary:t(ze({},i)),lazy:void 0})}async function za(e,t,n,r,i,a,l,u,d,f){l===void 0&&(l="/"),u===void 0&&(u=!1),d===void 0&&(d=!1);let m,h,g,x=P=>{let y,b=new Promise((S,C)=>y=C);return g=()=>y(),t.signal.addEventListener("abort",g),Promise.race([P({request:t,params:n.params,context:f}),b])};try{let P=n.route[e];if(n.route.lazy)if(P)h=(await Promise.all([x(P),ap(n.route,a,i)]))[0];else if(await ap(n.route,a,i),P=n.route[e],P)h=await x(P);else{if(e==="action")throw qn(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:ft.data,data:void 0}}else we(P,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),h=await x(P);we(h!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(P){m=ft.error,h=P}finally{g&&t.signal.removeEventListener("abort",g)}if(aC(h)){let P=h.status;if(QP.has(P)){let S=h.headers.get("Location");if(we(S,"Redirects returned/thrown from loaders/actions must have a Location header"),hx.test(S)){if(!u){let C=new URL(t.url),z=S.startsWith("//")?new URL(C.protocol+S):new URL(S),N=Pc(z.pathname,l)!=null;z.origin===C.origin&&N&&(S=z.pathname+z.search+z.hash)}}else{let C=r.slice(0,r.indexOf(n)+1),z=Hh(C).map(A=>A.pathnameBase),N=dx(S,z,new URL(t.url).pathname);if(we(Vo(N),"Unable to resolve redirect location: "+S),l){let A=N.pathname;N.pathname=A==="/"?l:Jr([l,A])}S=Vo(N)}if(u)throw h.headers.set("Location",S),h;return{type:ft.redirect,status:P,location:S,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:m||ft.data,response:h};let y,b=h.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?y=await h.json():y=await h.text(),m===ft.error?{type:m,error:new Vh(P,h.statusText,y),headers:h.headers}:{type:ft.data,data:y,statusCode:h.status,headers:h.headers}}if(m===ft.error)return{type:m,error:h};if(h instanceof WP){var w,v;return{type:ft.deferred,deferredData:h,statusCode:(w=h.init)==null?void 0:w.status,headers:((v=h.init)==null?void 0:v.headers)&&new Headers(h.init.headers)}}return{type:ft.data,data:h}}function Ra(e,t,n,r){let i=e.createURL(vx(t)).toString(),a={signal:n};if(r&&hr(r.formMethod)){let{formMethod:l,formEncType:u,formData:d}=r;a.method=l.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?gx(d):d}return new Request(i,a)}function gx(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function oC(e,t,n,r,i){let a={},l=null,u,d=!1,f={};return n.forEach((m,h)=>{let g=t[h].route.id;if(we(!Mi(m),"Cannot handle redirect results in processLoaderData"),Qa(m)){let x=zi(e,g),w=m.error;r&&(w=Object.values(r)[0],r=void 0),l=l||{},l[x.route.id]==null&&(l[x.route.id]=w),a[g]=void 0,d||(d=!0,u=fx(m.error)?m.error.status:500),m.headers&&(f[g]=m.headers)}else Bo(m)?(i.set(g,m.deferredData),a[g]=m.deferredData.data):a[g]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(u=m.statusCode),m.headers&&(f[g]=m.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:f}}function Ag(e,t,n,r,i,a,l,u){let{loaderData:d,errors:f}=oC(t,n,r,i,u);for(let m=0;m<a.length;m++){let{key:h,match:g}=a[m];we(l!==void 0&&l[m]!==void 0,"Did not find corresponding fetcher result");let x=l[m];if(Qa(x)){let w=zi(e.matches,g?.route.id);f&&f[w.route.id]||(f=ze({},f,{[w.route.id]:x.error})),e.fetchers.delete(h)}else if(Mi(x))we(!1,"Unhandled fetcher revalidation redirect");else if(Bo(x))we(!1,"Unhandled fetcher deferred data");else{let w={state:"idle",data:x.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(h,w)}}return{loaderData:d,errors:f}}function Bg(e,t,n,r){let i=ze({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&a.route.loader&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function zi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Ng(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function qn(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",u='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Vh(e||500,l,new Error(u),!0)}function Ig(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Mi(n))return n}}function vx(e){let t=typeof e=="string"?Cr(e):e;return Vo(ze({},t,{hash:""}))}function iC(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Bo(e){return e.type===ft.deferred}function Qa(e){return e.type===ft.error}function Mi(e){return(e&&e.type)===ft.redirect}function aC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function sC(e){return KP.has(e)}function hr(e){return VP.has(e)}async function Mg(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l];if(!d)continue;let f=e.find(h=>h.route.id===d.route.id),m=f!=null&&!_x(f,d)&&(a&&a[d.route.id])!==void 0;Bo(u)&&(i||m)&&await yx(u,r,i).then(h=>{h&&(n[l]=h||n[l])})}}async function yx(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ft.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ft.error,error:i}}return{type:ft.data,data:e.deferredData.data}}}function bx(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Dg(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function sp(e,t){let n=typeof t=="string"?Cr(t).search:t.search;if(e[e.length-1].route.index&&bx(n||""))return e[e.length-1];let r=Hh(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const uC=typeof Object.is=="function"?Object.is:lC,{useState:cC,useEffect:dC,useLayoutEffect:fC,useDebugValue:pC}=Ya;function hC(e,t,n){const r=t(),[{inst:i},a]=cC({inst:{value:r,getSnapshot:t}});return fC(()=>{i.value=r,i.getSnapshot=t,Fd(i)&&a({inst:i})},[e,r,t]),dC(()=>(Fd(i)&&a({inst:i}),e(()=>{Fd(i)&&a({inst:i})})),[e]),pC(r),r}function Fd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!uC(n,r)}catch{return!0}}function mC(e,t,n){return t()}const _C=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gC=!_C,vC=gC?mC:hC,yC="useSyncExternalStore"in Ya?(e=>e.useSyncExternalStore)(Ya):vC,qh=T.createContext(null),Kh=T.createContext(null),Qh=T.createContext(null),Cc=T.createContext(null),Rs=T.createContext({outlet:null,matches:[]}),xx=T.createContext(null);function lp(){return lp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lp.apply(this,arguments)}function Ec(){return T.useContext(Cc)!=null}function wx(){return Ec()||we(!1),T.useContext(Cc).location}function bC(){Ec()||we(!1);let{basename:e,navigator:t}=T.useContext(Qh),{matches:n}=T.useContext(Rs),{pathname:r}=wx(),i=JSON.stringify(Hh(n).map(u=>u.pathnameBase)),a=T.useRef(!1);return T.useEffect(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){t.go(u);return}let f=dx(u,JSON.parse(i),r,d.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:Jr([e,f.pathname])),(d.replace?t.replace:t.push)(f,d.state,d)},[e,t,i,r])}function xC(e,t){Ec()||we(!1);let{navigator:n}=T.useContext(Qh),r=T.useContext(Kh),{matches:i}=T.useContext(Rs),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=wx(),f;if(t){var m;let v=typeof t=="string"?Cr(t):t;u==="/"||(m=v.pathname)!=null&&m.startsWith(u)||we(!1),f=v}else f=d;let h=f.pathname||"/",g=u==="/"?h:h.slice(u.length)||"/",x=Ti(e,{pathname:g}),w=PC(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Jr([u,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Jr([u,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&w?T.createElement(Cc.Provider,{value:{location:lp({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:it.Pop}},w):w}function wC(){let e=TC(),t=fx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}class kC extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Rs.Provider,{value:this.props.routeContext},T.createElement(xx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SC(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(qh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Rs.Provider,{value:t},r)}function PC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||we(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,u)=>{let d=l.route.id?i?.[l.route.id]:null,f=null;n&&(l.route.ErrorBoundary?f=T.createElement(l.route.ErrorBoundary,null):l.route.errorElement?f=l.route.errorElement:f=T.createElement(wC,null));let m=t.concat(r.slice(0,u+1)),h=()=>{let g=a;return d?g=f:l.route.Component?g=T.createElement(l.route.Component,null):l.route.element&&(g=l.route.element),T.createElement(SC,{match:l,routeContext:{outlet:a,matches:m},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(kC,{location:n.location,component:f,error:d,children:h(),routeContext:{outlet:null,matches:m}}):h()},null)}var Fg;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Fg||(Fg={}));var gu;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(gu||(gu={}));function CC(e){let t=T.useContext(Kh);return t||we(!1),t}function EC(e){let t=T.useContext(Rs);return t||we(!1),t}function OC(e){let t=EC(),n=t.matches[t.matches.length-1];return n.route.id||we(!1),n.route.id}function TC(){var e;let t=T.useContext(xx),n=CC(gu.UseRouteError),r=OC(gu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function zC(e){let{fallbackElement:t,router:n}=e,r=T.useCallback(()=>n.state,[n]),i=yC(n.subscribe,r,r),a=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,m)=>n.navigate(d,{state:f,preventScrollReset:m?.preventScrollReset}),replace:(d,f,m)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:m?.preventScrollReset})}),[n]),l=n.basename||"/",u=T.useMemo(()=>({router:n,navigator:a,static:!1,basename:l}),[n,a,l]);return T.createElement(T.Fragment,null,T.createElement(qh.Provider,{value:u},T.createElement(Kh.Provider,{value:i},T.createElement(LC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?T.createElement(AC,null):t))),null)}function RC(e){we(!1)}function LC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=it.Pop,navigator:a,static:l=!1}=e;Ec()&&we(!1);let u=t.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=Cr(r));let{pathname:f="/",search:m="",hash:h="",state:g=null,key:x="default"}=r,w=T.useMemo(()=>{let v=Pc(f,u);return v==null?null:{location:{pathname:v,search:m,hash:h,state:g,key:x},navigationType:i}},[u,f,m,h,g,x,i]);return w==null?null:T.createElement(Qh.Provider,{value:d},T.createElement(Cc.Provider,{children:n,value:w}))}function AC(e){let{children:t,location:n}=e,r=T.useContext(qh),i=r&&!t?r.router.routes:up(t);return xC(i,n)}var jg;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(jg||(jg={}));new Promise(()=>{});function up(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,up(r.props.children,t));return}r.type!==RC&&we(!1),!r.props.index||!r.props.children||we(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=up(r.props.children,a)),n.push(l)}),n}function BC(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cp(){return cp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cp.apply(this,arguments)}function NC(e,t){return eC({basename:t?.basename,history:yP({window:t?.window}),hydrationData:t?.hydrationData||IC(),routes:e,detectErrorBoundary:BC}).initialize()}function IC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=cp({},t,{errors:MC(t.errors)})),t}function MC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Vh(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}var Ug;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ug||(Ug={}));var $g;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($g||($g={}));function vn(e){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vn(e)}function DC(e,t){if(vn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kx(e){var t=DC(e,"string");return vn(t)==="symbol"?t:String(t)}function In(e,t,n){return t=kx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FC(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Wg={};function dp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Wg[t[0]]||(typeof t[0]=="string"&&(Wg[t[0]]=new Date),FC.apply(void 0,t))}function Zg(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function jC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,f){var m=t.services.backendConnector.state["".concat(d,"|").concat(f)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function UC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return dp("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):jC(e,t,n)}var $C=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,WC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ZC=function(t){return WC[t]},HC=function(t){return t.replace($C,ZC)};function Hg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hg(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var fp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:HC};function VC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};fp=Vg(Vg({},fp),e)}function qC(){return fp}var Sx;function KC(e){Sx=e}function QC(){return Sx}function Mn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kx(r.key),r)}}function Dn(e,t,n){return t&&qg(e.prototype,t),n&&qg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var GC={type:"3rdParty",init:function(t){VC(t.options.react),KC(t)}},XC=T.createContext(),JC=function(){function e(){Mn(this,e),this.usedNamespaces={}}return Dn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Px(e){if(Array.isArray(e))return e}function YC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(m){f=!0,i=m}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw i}}return u}}function Kg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cx(e,t){if(e){if(typeof e=="string")return Kg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kg(e,t)}}function Ex(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eE(e,t){return Px(e)||YC(e,t)||Cx(e,t)||Ex()}function Qg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qg(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var tE=function(t,n){var r=T.useRef();return T.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function Gh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=T.useContext(XC)||{},i=r.i18n,a=r.defaultNS,l=n||i||QC();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new JC),!l){dp("You will need to pass in an i18next instance by using initReactI18next");var u=function(K,W){return typeof W=="string"?W:W&&vn(W)==="object"&&typeof W.defaultValue=="string"?W.defaultValue:Array.isArray(K)?K[K.length-1]:K},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&dp("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=jd(jd(jd({},qC()),l.options.react),t),m=f.useSuspense,h=f.keyPrefix,g=e||a||l.options&&l.options.defaultNS;g=typeof g=="string"?[g]:g||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(g);var x=(l.isInitialized||l.initializedStoreOnce)&&g.every(function(j){return UC(j,l,f)});function w(){return l.getFixedT(null,f.nsMode==="fallback"?g:g[0],h)}var v=T.useState(w),P=eE(v,2),y=P[0],b=P[1],S=g.join(),C=tE(S),z=T.useRef(!0);T.useEffect(function(){var j=f.bindI18n,K=f.bindI18nStore;z.current=!0,!x&&!m&&Zg(l,g,function(){z.current&&b(w)}),x&&C&&C!==S&&z.current&&b(w);function W(){z.current&&b(w)}return j&&l&&l.on(j,W),K&&l&&l.store.on(K,W),function(){z.current=!1,j&&l&&j.split(" ").forEach(function(Y){return l.off(Y,W)}),K&&l&&K.split(" ").forEach(function(Y){return l.store.off(Y,W)})}},[l,S]);var N=T.useRef(!0);T.useEffect(function(){z.current&&!N.current&&b(w),N.current=!1},[l,h]);var A=[y,l,x];if(A.t=y,A.i18n=l,A.ready=x,x||!x&&!m)return A;throw new Promise(function(j){Zg(l,g,function(){j()})})}function vu(e,t){return vu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},vu(e,t)}function Ls(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,vu(e,t)}var As=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),yu=typeof window>"u";function Rt(){}function nE(e,t){return typeof e=="function"?e(t):e}function pp(e){return typeof e=="number"&&e>=0&&e!==1/0}function bu(e){return Array.isArray(e)?e:[e]}function Ox(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ml(e,t,n){return Oc(e)?typeof t=="function"?Ne({},n,{queryKey:e,queryFn:t}):Ne({},t,{queryKey:e}):e}function Mr(e,t,n){return Oc(e)?[Ne({},t,{queryKey:e}),n]:[e||{},t]}function rE(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Gg(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(Oc(u)){if(r){if(t.queryHash!==Xh(u,t.options))return!1}else if(!xu(t.queryKey,u))return!1}var f=rE(n,a);if(f==="none")return!1;if(f!=="all"){var m=t.isActive();if(f==="active"&&!m||f==="inactive"&&m)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function Xg(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(Oc(a)){if(!t.options.mutationKey)return!1;if(n){if(No(t.options.mutationKey)!==No(a))return!1}else if(!xu(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Xh(e,t){var n=t?.queryKeyHashFn||No;return n(e)}function No(e){var t=bu(e);return oE(t)}function oE(e){return JSON.stringify(e,function(t,n){return hp(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function xu(e,t){return Tx(bu(e),bu(t))}function Tx(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!Tx(e[n],t[n])}):!1}function wu(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||hp(e)&&hp(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:i[d];l[f]=wu(e[f],t[f]),l[f]===e[f]&&u++}return r===a&&u===r?e:l}return t}function iE(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function hp(e){if(!Jg(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Jg(n)||!n.hasOwnProperty("isPrototypeOf"))}function Jg(e){return Object.prototype.toString.call(e)==="[object Object]"}function Oc(e){return typeof e=="string"||Array.isArray(e)}function aE(e){return new Promise(function(t){setTimeout(t,e)})}function Yg(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function zx(){if(typeof AbortController=="function")return new AbortController}var sE=function(e){Ls(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!yu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(As),Ga=new sE,lE=function(e){Ls(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!yu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(As),Dl=new lE;function uE(e){return Math.min(1e3*Math.pow(2,e),3e4)}function ku(e){return typeof e?.cancel=="function"}var Rx=function(t){this.revert=t?.revert,this.silent=t?.silent};function Fl(e){return e instanceof Rx}var Lx=function(t){var n=this,r=!1,i,a,l,u;this.abort=t.abort,this.cancel=function(g){return i?.(g)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(g,x){l=g,u=x});var d=function(x){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(x),a?.(),l(x))},f=function(x){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(x),a?.(),u(x))},m=function(){return new Promise(function(x){a=x,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},h=function g(){if(!n.isResolved){var x;try{x=t.fn()}catch(w){x=Promise.reject(w)}i=function(v){if(!n.isResolved&&(f(new Rx(v)),n.abort==null||n.abort(),ku(x)))try{x.cancel()}catch{}},n.isTransportCancelable=ku(x),Promise.resolve(x).then(d).catch(function(w){var v,P;if(!n.isResolved){var y=(v=t.retry)!=null?v:3,b=(P=t.retryDelay)!=null?P:uE,S=typeof b=="function"?b(n.failureCount,w):b,C=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,w);if(r||!C){f(w);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,w),aE(S).then(function(){if(!Ga.isFocused()||!Dl.isOnline())return m()}).then(function(){r?f(w):g()})}})}};h()},cE=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Yg(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Yg(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),rt=new cE,Ax=console;function Su(){return Ax}function dE(e){Ax=e}var fE=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Ne({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),pp(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,u=this.state.data,d=nE(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=wu(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(Rt).catch(Rt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!Ox(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var m=this.observers.find(function(b){return b.options.queryFn});m&&this.setOptions(m.options)}var h=bu(this.queryKey),g=zx(),x={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(x,"signal",{enumerable:!0,get:function(){if(g)return a.abortSignalConsumed=!0,g.signal}});var w=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(x)):Promise.reject("Missing queryFn")},v={fetchOptions:i,options:this.options,queryKey:h,state:this.state,fetchFn:w,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var P;(P=this.options.behavior)==null||P.onFetch(v)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=v.fetchOptions)==null?void 0:u.meta)){var y;this.dispatch({type:"fetch",meta:(y=v.fetchOptions)==null?void 0:y.meta})}return this.retryer=new Lx({fn:v.fetchFn,abort:g==null||(d=g.abort)==null?void 0:d.bind(g),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Fl(S)&&S.silent||a.dispatch({type:"error",error:S}),Fl(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),Su().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),rt.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Ne({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ne({},r,{isPaused:!0});case"continue":return Ne({},r,{isPaused:!1});case"fetch":return Ne({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ne({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=i.error;return Fl(u)&&u.revert&&this.revertState?Ne({},this.revertState):Ne({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ne({},r,{isInvalidated:!0});case"setState":return Ne({},r,i.state);default:return r}},e}(),pE=function(e){Ls(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:Xh(d,a),m=this.get(f);return m||(m=new fE({cache:this,queryKey:d,queryHash:f,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(m)),m},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;rt.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Mr(i,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return Gg(u,d)})},n.findAll=function(i,a){var l=Mr(i,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return Gg(u,d)}):this.queries},n.notify=function(i){var a=this;rt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;rt.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;rt.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(As),hE=function(){function e(n){this.options=Ne({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||mE(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Rt).catch(Rt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){i=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),Su().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,i;return this.retryer=new Lx({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=_E(this.state,r),rt.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function mE(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function _E(e,t){switch(t.type){case"failed":return Ne({},e,{failureCount:e.failureCount+1});case"pause":return Ne({},e,{isPaused:!0});case"continue":return Ne({},e,{isPaused:!1});case"loading":return Ne({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ne({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ne({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ne({},e,t.state);default:return e}}var gE=function(e){Ls(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var u=new hE({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;rt.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return Xg(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return Xg(i,a)})},n.notify=function(i){var a=this;rt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return rt.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(Rt)})},Promise.resolve())})},t}(As);function vE(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,m=f?.pageParam,h=f?.direction==="forward",g=f?.direction==="backward",x=((l=t.state.data)==null?void 0:l.pages)||[],w=((u=t.state.data)==null?void 0:u.pageParams)||[],v=zx(),P=v?.signal,y=w,b=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},C=function(ne,pe,B,ae){return y=ae?[pe].concat(y):[].concat(y,[pe]),ae?[B].concat(ne):[].concat(ne,[B])},z=function(ne,pe,B,ae){if(b)return Promise.reject("Cancelled");if(typeof B>"u"&&!pe&&ne.length)return Promise.resolve(ne);var D={queryKey:t.queryKey,signal:P,pageParam:B,meta:t.meta},J=S(D),Q=Promise.resolve(J).then(function(I){return C(ne,B,I,ae)});if(ku(J)){var E=Q;E.cancel=J.cancel}return Q},N;if(!x.length)N=z([]);else if(h){var A=typeof m<"u",j=A?m:ev(t.options,x);N=z(x,A,j)}else if(g){var K=typeof m<"u",W=K?m:yE(t.options,x);N=z(x,K,W,!0)}else(function(){y=[];var ue=typeof t.options.getNextPageParam>"u",ne=d&&x[0]?d(x[0],0,x):!0;N=ne?z([],ue,w[0]):Promise.resolve(C([],w[0],x[0]));for(var pe=function(D){N=N.then(function(J){var Q=d&&x[D]?d(x[D],D,x):!0;if(Q){var E=ue?w[D]:ev(t.options,J);return z(J,ue,E)}return Promise.resolve(C(J,w[D],x[D]))})},B=1;B<x.length;B++)pe(B)})();var Y=N.then(function(ue){return{pages:ue,pageParams:y}}),oe=Y;return oe.cancel=function(){b=!0,v?.abort(),ku(N)&&N.cancel()},Y}}}}function ev(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function yE(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var bE=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new pE,this.mutationCache=n.mutationCache||new gE,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Ga.subscribe(function(){Ga.isFocused()&&Dl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Dl.subscribe(function(){Ga.isFocused()&&Dl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Mr(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Ne({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,u=l.data;return[a,u]})},t.setQueryData=function(r,i,a){var l=Ml(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return rt.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Mr(r,i),l=a[0],u=this.queryCache;rt.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,u=Mr(r,i,a),d=u[0],f=u[1],m=this.queryCache,h=Ne({},d,{active:!0});return rt.batch(function(){return m.findAll(d).forEach(function(g){g.reset()}),l.refetchQueries(h,f)})},t.cancelQueries=function(r,i,a){var l=this,u=Mr(r,i,a),d=u[0],f=u[1],m=f===void 0?{}:f;typeof m.revert>"u"&&(m.revert=!0);var h=rt.batch(function(){return l.queryCache.findAll(d).map(function(g){return g.cancel(m)})});return Promise.all(h).then(Rt).catch(Rt)},t.invalidateQueries=function(r,i,a){var l,u,d,f=this,m=Mr(r,i,a),h=m[0],g=m[1],x=Ne({},h,{active:(l=(u=h.refetchActive)!=null?u:h.active)!=null?l:!0,inactive:(d=h.refetchInactive)!=null?d:!1});return rt.batch(function(){return f.queryCache.findAll(h).forEach(function(w){w.invalidate()}),f.refetchQueries(x,g)})},t.refetchQueries=function(r,i,a){var l=this,u=Mr(r,i,a),d=u[0],f=u[1],m=rt.batch(function(){return l.queryCache.findAll(d).map(function(g){return g.fetch(void 0,Ne({},f,{meta:{refetchPage:d?.refetchPage}}))})}),h=Promise.all(m).then(Rt);return f?.throwOnError||(h=h.catch(Rt)),h},t.fetchQuery=function(r,i,a){var l=Ml(r,i,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(Rt).catch(Rt)},t.fetchInfiniteQuery=function(r,i,a){var l=Ml(r,i,a);return l.behavior=vE(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(Rt).catch(Rt)},t.cancelMutations=function(){var r=this,i=rt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(Rt).catch(Rt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return No(r)===No(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return xu(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return No(r)===No(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return xu(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Ne({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Xh(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ne({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),xE=function(e){Ls(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),tv(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return mp(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return mp(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&nv(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,u={},d=function(m){l.trackedProps.includes(m)||l.trackedProps.push(m)};return Object.keys(i).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),i[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(i){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&i?.throwOnError?u(f.error):l(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Ne({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(Rt)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(yu||this.currentResult.isStale||!pp(this.options.staleTime))){var a=Ox(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(yu||this.options.enabled===!1||!pp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||Ga.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,m=this.currentResultOptions,h=i!==l,g=h?i.state:this.currentQueryInitialState,x=h?this.currentResult:this.previousQueryResult,w=i.state,v=w.dataUpdatedAt,P=w.error,y=w.errorUpdatedAt,b=w.isFetching,S=w.status,C=!1,z=!1,N;if(a.optimisticResults){var A=this.hasListeners(),j=!A&&tv(i,a),K=A&&nv(i,l,a,u);(j||K)&&(b=!0,v||(S="loading"))}if(a.keepPreviousData&&!w.dataUpdateCount&&x?.isSuccess&&S!=="error")N=x.data,v=x.dataUpdatedAt,S=x.status,C=!0;else if(a.select&&typeof w.data<"u")if(d&&w.data===f?.data&&a.select===this.selectFn)N=this.selectResult;else try{this.selectFn=a.select,N=a.select(w.data),a.structuralSharing!==!1&&(N=wu(d?.data,N)),this.selectResult=N,this.selectError=null}catch(oe){Su().error(oe),this.selectError=oe}else N=w.data;if(typeof a.placeholderData<"u"&&typeof N>"u"&&(S==="loading"||S==="idle")){var W;if(d?.isPlaceholderData&&a.placeholderData===m?.placeholderData)W=d.data;else if(W=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof W<"u")try{W=a.select(W),a.structuralSharing!==!1&&(W=wu(d?.data,W)),this.selectError=null}catch(oe){Su().error(oe),this.selectError=oe}typeof W<"u"&&(S="success",N=W,z=!0)}this.selectError&&(P=this.selectError,N=this.selectResult,y=Date.now(),S="error");var Y={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:N,dataUpdatedAt:v,error:P,errorUpdatedAt:y,failureCount:w.fetchFailureCount,errorUpdateCount:w.errorUpdateCount,isFetched:w.dataUpdateCount>0||w.errorUpdateCount>0,isFetchedAfterMount:w.dataUpdateCount>g.dataUpdateCount||w.errorUpdateCount>g.errorUpdateCount,isFetching:b,isRefetching:b&&S!=="loading",isLoadingError:S==="error"&&w.dataUpdatedAt===0,isPlaceholderData:z,isPreviousData:C,isRefetchError:S==="error"&&w.dataUpdatedAt!==0,isStale:Jh(i,a),refetch:this.refetch,remove:this.remove};return Y},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(i).some(function(m){var h=m,g=i[h]!==a[h],x=f?.some(function(v){return v===m}),w=d?.some(function(v){return v===m});return g&&!w&&(!f||x)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!iE(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Ne({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!Fl(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;rt.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(As);function wE(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function tv(e,t){return wE(e,t)||e.state.dataUpdatedAt>0&&mp(e,t,t.refetchOnMount)}function mp(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Jh(e,t)}return!1}function nv(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Jh(e,n)}function Jh(e,t){return e.isStaleByTime(t.staleTime)}var kE=C2.unstable_batchedUpdates;rt.setBatchNotifyFunction(kE);var SE=console;dE(SE);var rv=Z.createContext(void 0),Bx=Z.createContext(!1);function Nx(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=rv),window.ReactQueryClientContext):rv}var PE=function(){var t=Z.useContext(Nx(Z.useContext(Bx)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},CE=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;Z.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=Nx(i);return Z.createElement(Bx.Provider,{value:i},Z.createElement(l.Provider,{value:n},a))};function EE(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var OE=Z.createContext(EE()),TE=function(){return Z.useContext(OE)};function zE(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function RE(e,t){var n=Z.useRef(!1),r=Z.useState(0),i=r[1],a=PE(),l=TE(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=rt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=rt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=rt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=Z.useState(function(){return new t(a,u)}),f=d[0],m=f.getOptimisticResult(u);if(Z.useEffect(function(){n.current=!0,l.clearReset();var h=f.subscribe(rt.batchCalls(function(){n.current&&i(function(g){return g+1})}));return f.updateResult(),function(){n.current=!1,h()}},[l,f]),Z.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&m.isLoading)throw f.fetchOptimistic(u).then(function(h){var g=h.data;u.onSuccess==null||u.onSuccess(g),u.onSettled==null||u.onSettled(g,null)}).catch(function(h){l.clearReset(),u.onError==null||u.onError(h),u.onSettled==null||u.onSettled(void 0,h)});if(m.isError&&!l.isReset()&&!m.isFetching&&zE(u.suspense,u.useErrorBoundary,[m.error,f.getCurrentQuery()]))throw m.error;return u.notifyOnChangeProps==="tracked"&&(m=f.trackResult(m,u)),m}function LE(e,t,n){var r=Ml(e,t,n);return RE(r,xE)}function Yr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Tc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vu(e,t)}function Bs(e,t){if(t&&(vn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Yr(e)}function nr(e){return nr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nr(e)}function AE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function BE(e){return Px(e)||AE(e)||Cx(e)||Ex()}function ov(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function iv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ov(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ov(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var NE={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},IE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Mn(this,e),this.init(t,n)}return Dn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||NE,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,iv(iv({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Qn=new IE,so=function(){function e(){Mn(this,e),this.observers={}}return Dn(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function La(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function av(e){return e==null?"":""+e}function ME(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Yh(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function sv(e,t,n){var r=Yh(e,t,Object),i=r.obj,a=r.k;i[a]=n}function DE(e,t,n,r){var i=Yh(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function Pu(e,t){var n=Yh(e,t),r=n.obj,i=n.k;if(r)return r[i]}function FE(e,t,n){var r=Pu(e,n);return r!==void 0?r:Pu(t,n)}function Ix(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Ix(e[r],t[r],n):e[r]=t[r]);return e}function pi(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var jE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function UE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return jE[t]}):e}var zc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,$E=[" ",",","?","!",";"];function WE(e,t,n){t=t||"",n=n||"";var r=$E.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function Cu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=i[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=i[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+l).join(n);return f?Cu(d,f,n):void 0}i=i[r[a]]}return i}}function lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZE(e){var t=HE();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Bs(this,i)}}function HE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var VE=function(e){Tc(n,e);var t=ZE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Mn(this,n),i=t.call(this),zc&&so.call(Yr(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Dn(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,m=[i,a];l&&typeof l!="string"&&(m=m.concat(l)),l&&typeof l=="string"&&(m=m.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(m=i.split("."));var h=Pu(this.data,m);return h||!f||typeof l!="string"?h:Cu(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var m=[i,a];l&&(m=m.concat(f?l.split(f):l)),i.indexOf(".")>-1&&(m=i.split("."),u=a,a=m[1]),this.addNamespaces(a),sv(this.data,m,u),d.silent||this.emit("added",i,a,l,u)}},{key:"addResources",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});u.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},m=[i,a];i.indexOf(".")>-1&&(m=i.split("."),u=l,l=a,a=m[1]),this.addNamespaces(a);var h=Pu(this.data,m)||{};u?Ix(h,l,d):h=xl(xl({},h),l),sv(this.data,m,h),f.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?xl(xl({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(so),Mx={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,i,a))}),n}};function uv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qE(e){var t=KE();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Bs(this,i)}}function KE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var cv={},dv=function(e){Tc(n,e);var t=qE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Mn(this,n),i=t.call(this),zc&&so.call(Yr(i)),ME(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Yr(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Qn.create("translator"),i}return Dn(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=l&&i.indexOf(l)>-1,m=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!WE(i,l,u);if(f&&!m){var h=i.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:i,namespaces:d};var g=i.split(l);(l!==u||l===u&&this.options.ns.indexOf(g[0])>-1)&&(d=g.shift()),i=g.join(u)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var u=this;if(vn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,m=this.extractFromKey(i[i.length-1],a),h=m.key,g=m.namespaces,x=g[g.length-1],w=a.lng||this.language,v=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(w&&w.toLowerCase()==="cimode"){if(v){var P=a.nsSeparator||this.options.nsSeparator;return d?{res:"".concat(x).concat(P).concat(h),usedKey:h,exactUsedKey:h,usedLng:w,usedNS:x}:"".concat(x).concat(P).concat(h)}return d?{res:h,usedKey:h,exactUsedKey:h,usedLng:w,usedNS:x}:h}var y=this.resolve(i,a),b=y&&y.res,S=y&&y.usedKey||h,C=y&&y.exactUsedKey||h,z=Object.prototype.toString.apply(b),N=["[object Number]","[object Function]","[object RegExp]"],A=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,K=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(j&&b&&K&&N.indexOf(z)<0&&!(typeof A=="string"&&z==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var W=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,Mt(Mt({},a),{},{ns:g})):"key '".concat(h," (").concat(this.language,")' returned an object instead of string.");return d?(y.res=W,y):W}if(f){var Y=z==="[object Array]",oe=Y?[]:{},ue=Y?C:S;for(var ne in b)if(Object.prototype.hasOwnProperty.call(b,ne)){var pe="".concat(ue).concat(f).concat(ne);oe[ne]=this.translate(pe,Mt(Mt({},a),{joinArrays:!1,ns:g})),oe[ne]===pe&&(oe[ne]=b[ne])}b=oe}}else if(j&&typeof A=="string"&&z==="[object Array]")b=b.join(A),b&&(b=this.extendTranslation(b,i,a,l));else{var B=!1,ae=!1,D=a.count!==void 0&&typeof a.count!="string",J=n.hasDefaultValue(a),Q=D?this.pluralResolver.getSuffix(w,a.count,a):"",E=a["defaultValue".concat(Q)]||a.defaultValue;!this.isValidLookup(b)&&J&&(B=!0,b=E),this.isValidLookup(b)||(ae=!0,b=h);var I=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,R=I&&ae?void 0:b,V=J&&E!==b&&this.options.updateMissing;if(ae||B||V){if(this.logger.log(V?"updateKey":"missingKey",w,x,h,V?E:b),f){var re=this.resolve(h,Mt(Mt({},a),{},{keySeparator:!1}));re&&re.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var $=[],ee=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ee&&ee[0])for(var le=0;le<ee.length;le++)$.push(ee[le]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(a.lng||this.language):$.push(a.lng||this.language);var je=function(Be,Ee,He){var Ce=J&&He!==b?He:R;u.options.missingKeyHandler?u.options.missingKeyHandler(Be,x,Ee,Ce,V,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Be,x,Ee,Ce,V,a),u.emit("missingKey",Be,x,Ee,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&D?$.forEach(function(Ue){u.pluralResolver.getSuffixes(Ue,a).forEach(function(Be){je([Ue],h+Be,a["defaultValue".concat(Be)]||E)})}):je($,h,E))}b=this.extendTranslation(b,i,a,y,l),ae&&b===h&&this.options.appendNamespaceToMissingKey&&(b="".concat(x,":").concat(h)),(ae||B)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(x,":").concat(h):h,B?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(y.res=b,y):b}},{key:"extendTranslation",value:function(i,a,l,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,Mt(Mt({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(Mt(Mt({},l),{interpolation:Mt(Mt({},this.options.interpolation),l.interpolation)}));var m=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),h;if(m){var g=i.match(this.interpolator.nestingRegexp);h=g&&g.length}var x=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(x=Mt(Mt({},this.options.interpolation.defaultVariables),x)),i=this.interpolator.interpolate(i,x,l.lng||this.language,l),m){var w=i.match(this.interpolator.nestingRegexp),v=w&&w.length;h<v&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var b=arguments.length,S=new Array(b),C=0;C<b;C++)S[C]=arguments[C];return d&&d[0]===S[0]&&!l.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var P=l.postProcess||this.options.postProcess,y=typeof P=="string"?[P]:P;return i!=null&&y&&y.length&&l.applyPostProcessor!==!1&&(i=Mx.handle(y,i,a,this.options&&this.options.postProcessPassResolved?Mt({i18nResolved:u},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,m,h;return typeof i=="string"&&(i=[i]),i.forEach(function(g){if(!a.isValidLookup(u)){var x=a.extractFromKey(g,l),w=x.key;d=w;var v=x.namespaces;a.options.fallbackNS&&(v=v.concat(a.options.fallbackNS));var P=l.count!==void 0&&typeof l.count!="string",y=P&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",S=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);v.forEach(function(C){a.isValidLookup(u)||(h=C,!cv["".concat(S[0],"-").concat(C)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(h)&&(cv["".concat(S[0],"-").concat(C)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(h,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(z){if(!a.isValidLookup(u)){m=z;var N=[w];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(N,w,z,C,l);else{var A;P&&(A=a.pluralResolver.getSuffix(z,l.count,l));var j="".concat(a.options.pluralSeparator,"zero");if(P&&(N.push(w+A),y&&N.push(w+j)),b){var K="".concat(w).concat(a.options.contextSeparator).concat(l.context);N.push(K),P&&(N.push(K+A),y&&N.push(K+j))}}for(var W;W=N.pop();)a.isValidLookup(u)||(f=W,u=a.getResource(z,C,W,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:m,usedNS:h}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,u):this.resourceStore.getResource(i,a,l,u)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(so);function Ud(e){return e.charAt(0).toUpperCase()+e.slice(1)}var fv=function(){function e(t){Mn(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Qn.create("languageUtils")}return Dn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ud(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ud(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ud(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(u){if(u===l)return u;if(!(u.indexOf("-")<0&&l.indexOf("-")<0)&&u.indexOf(l)===0)return u})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(f){f&&(i.isSupportedCode(f)?l.push(f):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(i.formatLanguageCode(d))}),l}}]),e}(),QE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],GE={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}},XE=["v1","v2","v3"],pv={zero:0,one:1,two:2,few:3,many:4,other:5};function JE(){var e={};return QE.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:GE[t.fc]}})}),e}var YE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Mn(this,e),this.languageUtils=t,this.options=n,this.logger=Qn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=JE()}return Dn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return pv[l]-pv[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!XE.includes(this.options.compatibilityJSON)}}]),e}();function hv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mv(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=FE(e,t,n);return!a&&i&&typeof n=="string"&&(a=Cu(e,n,r),a===void 0&&(a=Cu(t,n,r))),a}var eO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mn(this,e),this.logger=Qn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Dn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:UE,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?pi(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?pi(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?pi(r.nestingPrefix):r.nestingPrefixEscaped||pi("$t("),this.nestingSuffix=r.nestingSuffix?pi(r.nestingSuffix):r.nestingSuffixEscaped||pi(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,u,d,f,m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function h(P){return P.replace(/\$/g,"$$$$")}var g=function(y){if(y.indexOf(l.formatSeparator)<0){var b=mv(r,m,y,l.options.keySeparator,l.options.ignoreJSONStructure);return l.alwaysFormat?l.format(b,void 0,i,Pn(Pn(Pn({},a),r),{},{interpolationkey:y})):b}var S=y.split(l.formatSeparator),C=S.shift().trim(),z=S.join(l.formatSeparator).trim();return l.format(mv(r,m,C,l.options.keySeparator,l.options.ignoreJSONStructure),z,i,Pn(Pn(Pn({},a),r),{},{interpolationkey:C}))};this.resetRegExp();var x=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,w=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,v=[{regex:this.regexpUnescape,safeValue:function(y){return h(y)}},{regex:this.regexp,safeValue:function(y){return l.escapeValue?h(l.escape(y)):h(y)}}];return v.forEach(function(P){for(f=0;u=P.regex.exec(n);){var y=u[1].trim();if(d=g(y),d===void 0)if(typeof x=="function"){var b=x(n,u,a);d=typeof b=="string"?b:""}else if(a&&Object.prototype.hasOwnProperty.call(a,y))d="";else if(w){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(y," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=av(d));var S=P.safeValue(d);if(n=n.replace(u[0],S),w?(P.regex.lastIndex+=d.length,P.regex.lastIndex-=u[0].length):P.regex.lastIndex=0,f++,f>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function f(x,w){var v=this.nestingOptionsSeparator;if(x.indexOf(v)<0)return x;var P=x.split(new RegExp("".concat(v,"[ ]*{"))),y="{".concat(P[1]);x=P[0],y=this.interpolate(y,d);var b=y.match(/'/g),S=y.match(/"/g);(b&&b.length%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),w&&(d=Pn(Pn({},w),d))}catch(C){return this.logger.warn("failed parsing options string in nesting for key ".concat(x),C),"".concat(x).concat(v).concat(y)}return delete d.defaultValue,x}for(;l=this.nestingRegexp.exec(n);){var m=[];d=Pn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var h=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var g=l[1].split(this.formatSeparator).map(function(x){return x.trim()});l[1]=g.shift(),m=g,h=!0}if(u=r(f.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=av(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),h&&(u=m.reduce(function(x,w){return i.format(x,w,a.lng,Pn(Pn({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function _v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_v(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tO(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=BE(u),f=d[0],m=d.slice(1),h=m.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=h),h==="false"&&(n[f.trim()]=!1),h==="true"&&(n[f.trim()]=!0),isNaN(h)||(n[f.trim()]=parseInt(h,10))}})}}return{formatName:t,formatOptions:n}}function hi(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),u=t[l];return u||(u=e(i,a),t[l]=u),u(r)}}var nO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mn(this,e),this.logger=Qn.create("formatter"),this.options=t,this.formats={number:hi(function(n,r){var i=new Intl.NumberFormat(n,cr({},r));return function(a){return i.format(a)}}),currency:hi(function(n,r){var i=new Intl.NumberFormat(n,cr(cr({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:hi(function(n,r){var i=new Intl.DateTimeFormat(n,cr({},r));return function(a){return i.format(a)}}),relativetime:hi(function(n,r){var i=new Intl.RelativeTimeFormat(n,cr({},r));return function(a){return i.format(a,r.range||"day")}}),list:hi(function(n,r){var i=new Intl.ListFormat(n,cr({},r));return function(a){return i.format(a)}})},this.init(t)}return Dn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=hi(r)}},{key:"format",value:function(n,r,i){var a=this,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=r.split(this.formatSeparator),d=u.reduce(function(f,m){var h=tO(m),g=h.formatName,x=h.formatOptions;if(a.formats[g]){var w=f;try{var v=l&&l.formatParams&&l.formatParams[l.interpolationkey]||{},P=v.locale||v.lng||l.locale||l.lng||i;w=a.formats[g](f,P,cr(cr(cr({},x),l),v))}catch(y){a.logger.warn(y)}return w}else a.logger.warn("there was no format function for ".concat(g));return f},n);return d}}]),e}();function gv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rO(e){var t=oO();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Bs(this,i)}}function oO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function iO(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var aO=function(e){Tc(n,e);var t=rO(n);function n(r,i,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return Mn(this,n),l=t.call(this),zc&&so.call(Yr(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Qn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return Dn(n,[{key:"queueLoad",value:function(i,a,l,u){var d=this,f={},m={},h={},g={};return i.forEach(function(x){var w=!0;a.forEach(function(v){var P="".concat(x,"|").concat(v);!l.reload&&d.store.hasResourceBundle(x,v)?d.state[P]=2:d.state[P]<0||(d.state[P]===1?m[P]===void 0&&(m[P]=!0):(d.state[P]=1,w=!1,m[P]===void 0&&(m[P]=!0),f[P]===void 0&&(f[P]=!0),g[v]===void 0&&(g[v]=!0)))}),w||(h[x]=!0)}),(Object.keys(f).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(m),toLoadLanguages:Object.keys(h),toLoadNamespaces:Object.keys(g)}}},{key:"loaded",value:function(i,a,l){var u=i.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),l&&this.store.addResourceBundle(d,f,l),this.state[i]=a?-1:2;var m={};this.queue.forEach(function(h){DE(h.loaded,[d],f),iO(h,i),a&&h.errors.push(a),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(function(g){m[g]||(m[g]={});var x=h.loaded[g];x.length&&x.forEach(function(w){m[g][w]===void 0&&(m[g][w]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(function(h){return!h.done})}},{key:"read",value:function(i,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!i.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:f,callback:m});return}this.readingCalls++;var h=function(v,P){if(u.readingCalls--,u.waitingReads.length>0){var y=u.waitingReads.shift();u.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(v&&P&&d<u.maxRetries){setTimeout(function(){u.read.call(u,i,a,l,d+1,f*2,m)},f);return}m(v,P)},g=this.backend[l].bind(this.backend);if(g.length===2){try{var x=g(i,a);x&&typeof x.then=="function"?x.then(function(w){return h(null,w)}).catch(h):h(null,x)}catch(w){h(w)}return}return g(i,a,h)}},{key:"prepareLoading",value:function(i,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(i,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(m){l.loadOne(m)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=i.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(m,h){m&&a.logger.warn("".concat(l,"loading namespace ").concat(f," for language ").concat(d," failed"),m),!m&&h&&a.logger.log("".concat(l,"loaded namespace ").concat(f," for language ").concat(d),h),a.loaded(i,m,h)})}},{key:"saveMissing",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var h=vv(vv({},f),{},{isUpdate:d}),g=this.backend.create.bind(this.backend);if(g.length<6)try{var x;g.length===5?x=g(i,a,l,u,h):x=g(i,a,l,u),x&&typeof x.then=="function"?x.then(function(w){return m(null,w)}).catch(m):m(null,x)}catch(w){m(w)}else g(i,a,l,u,m,h)}!i||!i[0]||this.store.addResource(i[0],a,l,u)}}}]),n}(so);function yv(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(vn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),vn(t[2])==="object"||vn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function bv(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function xv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sO(e){var t=lO();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Bs(this,i)}}function lO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wl(){}function uO(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var Eu=function(e){Tc(n,e);var t=sO(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(Mn(this,n),r=t.call(this),zc&&so.call(Yr(r)),r.options=bv(i),r.services={},r.logger=Qn,r.modules={external:[]},uO(Yr(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),Bs(r,Yr(r));setTimeout(function(){r.init(i,a)},0)}return r}return Dn(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=yv();this.options=Zn(Zn(Zn({},u),this.options),bv(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Zn(Zn({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?Qn.init(d(this.modules.logger),this.options):Qn.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=nO);var m=new fv(this.options);this.store=new VE(this.options.resources,this.options);var h=this.services;h.logger=Qn,h.resourceStore=this.store,h.languageUtils=m,h.pluralResolver=new YE(m,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(h.formatter=d(f),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new eO(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new aO(d(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),C=1;C<b;C++)S[C-1]=arguments[C];i.emit.apply(i,[y].concat(S))}),this.modules.languageDetector&&(h.languageDetector=d(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=d(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new dv(this.services,this.options),this.translator.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),C=1;C<b;C++)S[C-1]=arguments[C];i.emit.apply(i,[y].concat(S))}),this.modules.external.forEach(function(y){y.init&&y.init(i)})}if(this.format=this.options.interpolation.format,l||(l=wl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var x=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];x.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments)}});var w=["addResource","addResources","addResourceBundle","removeResourceBundle"];w.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments),i}});var v=La(),P=function(){var b=function(C,z){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),v.resolve(z),l(C,z)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return b(null,i.t.bind(i));i.changeLanguage(i.options.lng,b)};return this.options.resources||!this.options.initImmediate?P():setTimeout(P,0),v}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wl,u=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(u=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],m=function(x){if(x){var w=a.services.languageUtils.toResolveHierarchy(x);w.forEach(function(v){f.indexOf(v)<0&&f.push(v)})}};if(d)m(d);else{var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.forEach(function(g){return m(g)})}this.options.preload&&this.options.preload.forEach(function(g){return m(g)}),this.services.backendConnector.load(f,this.options.ns,function(g){!g&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(g)})}else u(null)}},{key:"reloadResources",value:function(i,a,l){var u=La();return i||(i=this.languages),a||(a=this.options.ns),l||(l=wl),this.services.backendConnector.reload(i,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&Mx.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var u=La();this.emit("languageChanging",i);var d=function(g){l.language=g,l.languages=l.services.languageUtils.toResolveHierarchy(g),l.resolvedLanguage=void 0,l.setResolvedLanguage(g)},f=function(g,x){x?(d(x),l.translator.changeLanguage(x),l.isLanguageChangingTo=void 0,l.emit("languageChanged",x),l.logger.log("languageChanged",x)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(g,function(){return l.t.apply(l,arguments)})},m=function(g){!i&&!g&&l.services.languageDetector&&(g=[]);var x=typeof g=="string"?g:l.services.languageUtils.getBestMatchFromCodes(g);x&&(l.language||d(x),l.translator.language||l.translator.changeLanguage(x),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(x)),l.loadResources(x,function(w){f(w,x)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(i),u}},{key:"getFixedT",value:function(i,a,l){var u=this,d=function f(m,h){var g;if(vn(h)!=="object"){for(var x=arguments.length,w=new Array(x>2?x-2:0),v=2;v<x;v++)w[v-2]=arguments[v];g=u.options.overloadTranslationOptionHandler([m,h].concat(w))}else g=Zn({},h);g.lng=g.lng||f.lng,g.lngs=g.lngs||f.lngs,g.ns=g.ns||f.ns,g.keyPrefix=g.keyPrefix||l||f.keyPrefix;var P=u.options.keySeparator||".",y;return g.keyPrefix&&Array.isArray(m)?y=m.map(function(b){return"".concat(g.keyPrefix).concat(P).concat(b)}):y=g.keyPrefix?"".concat(g.keyPrefix).concat(P).concat(m):m,u.t(y,g)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var m=function(x,w){var v=a.services.backendConnector.state["".concat(x,"|").concat(w)];return v===-1||v===2};if(l.precheck){var h=l.precheck(this,m);if(h!==void 0)return h}return!!(this.hasResourceBundle(u,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(u,i)&&(!d||m(f,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,u=La();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=La();typeof i=="string"&&(i=[i]);var u=this.options.preload||[],d=i.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new fv(yv());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wl,u=Zn(Zn(Zn({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(m){d[m]=i[m]}),d.services=Zn({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new dv(d.services,d.options),d.translator.on("*",function(m){for(var h=arguments.length,g=new Array(h>1?h-1:0),x=1;x<h;x++)g[x-1]=arguments[x];d.emit.apply(d,[m].concat(g))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(so);In(Eu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Eu(e,t)});var Bt=Eu.createInstance();Bt.createInstance=Eu.createInstance;Bt.createInstance;Bt.dir;Bt.init;Bt.loadResources;Bt.reloadResources;var cO=Bt.use;Bt.changeLanguage;Bt.getFixedT;var wo=Bt.t;Bt.exists;Bt.setDefaultNamespace;Bt.hasLoadedNamespace;Bt.loadNamespaces;Bt.loadLanguages;const $d=()=>ut("div",{children:[ie("h1",{children:"Det skjedde en feil"}),ie("p",{children:ie("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),dO="2.25rem",fO="3.75rem",pO="540px",hO="#000000",mO="#0062ba",_O={0:{value:"Base",type:"other"},1:{value:"Components",type:"other"}},gO={id:"edeff752fe55f2581f6ceee82c66aac8b8a8622d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},vO={id:"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},yO={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}},arrow:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#d2d5d8",type:"color"}},border_bottom:{default:{value:"#d2d5d8",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#1e2b3c",type:"color"},error:{value:"#1e2b3c",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#1e2b3c",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#1e2b3c",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},pressed:{value:"#00315d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},pressed:{value:"#084826",type:"color"}}}},danger:{color:{background:{default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},pressed:{value:"#861c2c",type:"color"}}}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},background:{hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#b3253a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fff4b4",type:"color"}},background:{default:{value:"#fff4b4",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d1f4e1",type:"color"}},border:{default:{value:"#d1f4e1",type:"color"}}}},size:{min_height:{default:{value:"2.25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#b3253a",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},bO={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},xO={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},wO={border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},kO={default:{value:"2.25rem",type:"paragraphSpacing"}},SO={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},PO={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},CO={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},EO={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},OO={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},TO={disabled:{value:"30%",type:"opacity"}},zO={grey:{100:{value:"#f4f5f6",type:"color",description:`AAA 13.1 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#e9eaec",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},300:{value:"#d2d5d8",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},400:{value:"#bcbfc5",type:"color",description:`AAA 8.7 on grey 800
AA18 4.4 as bkdg for interaction blue`},500:{value:"#a5aab1",type:"color",description:`AA 6.1 on grey 800
AA18 3 as bkdg for interaction blue`},600:{value:"#68707c",type:"color",description:`AA18 3.5 on grey 800
AA18 4 on white`},700:{value:"#4b5563",type:"color",description:"AAA 7.5 on white"},800:{value:"#1e2b3c",type:"color",description:`Main Text Color
AAA 14.3 on white`},900:{value:"#141e29",type:"color",description:"AAA 16.8 on white"}},white:{value:"#ffffff",type:"color",description:`Standard bckd color.
AAA 13.1 on grey 800
AAA 7.2 as bkdg for interaction blue`},black:{value:"#000000",type:"color"},red:{100:{value:"#f9d5db",type:"color"},200:{value:"#f3abb6",type:"color"},300:{value:"#ec8292",type:"color"},400:{value:"#e6586d",type:"color"},500:{value:"#e02e49",type:"color"},600:{value:"#b3253a",type:"color"},700:{value:"#861c2c",type:"color"},800:{value:"#5a121d",type:"color"},900:{value:"#480e17",type:"color"}},orange:{100:{value:"#ffe8cd",type:"color"},200:{value:"#ffd19b",type:"color"},300:{value:"#ffba6a",type:"color"},400:{value:"#ffa338",type:"color"},500:{value:"#ff8c06",type:"color"},600:{value:"#cc7005",type:"color"},700:{value:"#995404",type:"color"},800:{value:"#663802",type:"color"},900:{value:"#522d02",type:"color"}},yellow:{100:{value:"#fffbe6",type:"color"},200:{value:"#fff4b4",type:"color"},300:{value:"#ffed83",type:"color"},400:{value:"#ffe551",type:"color"},500:{value:"#ffda06",type:"color"},600:{value:"#e6c405",type:"color"},700:{value:"#ccae05",type:"color"},800:{value:"#998304",type:"color"},900:{value:"#665702",type:"color"}},green:{100:{value:"#e8faf0",type:"color"},200:{value:"#d1f4e1",type:"color"},300:{value:"#8be4b5",type:"color"},400:{value:"#5dd997",type:"color"},500:{value:"#2ece7a",type:"color"},600:{value:"#15b560",type:"color"},700:{value:"#118849",type:"color"},800:{value:"#0c6536",type:"color"},900:{value:"#084826",type:"color"}},blue:{100:{value:"#e6eff8",type:"color"},200:{value:"#b3d0ea",type:"color"},300:{value:"#80b1dd",type:"color"},400:{value:"#66a1d6",type:"color"},500:{value:"#3381c8",type:"color"},600:{value:"#1a72c1",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004e95",type:"color"},900:{value:"#00315d",type:"color"}},purple:{100:{value:"#f5e8f2",type:"color"},200:{value:"#e0b9d8",type:"color"},300:{value:"#cc8bbf",type:"color"},400:{value:"#b75da5",type:"color"},500:{value:"#a22e8b",type:"color"},600:{value:"#98177e",type:"color"},700:{value:"#7a1265",type:"color"},800:{value:"#5b0e4c",type:"color"},900:{value:"#490b3d",type:"color"}}},RO={background:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"}},surface:{neutral:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"},"subtle-hover":{value:"#e9eaec",type:"color"},selected:{value:"#e6eff8",type:"color"},inverted:{value:"#1e2b3c",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color",description:"Standard farge for handlinger"}},success:{subtle:{value:"#d1f4e1",type:"color"},default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},active:{value:"#084826",type:"color"}},warning:{subtle:{value:"#fffbe6",type:"color"}},danger:{subtle:{value:"#f9d5db",type:"color"},default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},active:{value:"#861c2c",type:"color"}},info:{subtle:{value:"#e6eff8",type:"color"}}},border:{info:{default:{value:"#004e95",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color"}},neutral:{default:{value:"#68707c",type:"color"},subtle:{value:"#d2d5d8",type:"color"},strong:{value:"#1e2b3c",type:"color"},divider:{value:"#bcbfc5",type:"color"}},success:{default:{value:"#0c6536",type:"color"}},warning:{default:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"}}},tab_focus:{outline:{color:{value:"#98177e",type:"color"},offset:{value:"2px",type:"spacing"},width:{value:"2px",type:"borderWidth"}}},text:{success:{default:{value:"#0c6536",type:"color"},on_success:{value:"#ffffff",type:"color"}},neutral:{default:{value:"#1e2b3c",type:"color"},subtle:{value:"#68707c",type:"color"},on_inverted:{value:"#ffffff",type:"color"}},action:{default:{value:"#0062ba",type:"color"},on_action:{value:"#ffffff",type:"color"}},warning:{default:{value:"#995404",type:"color"},on_warning:{value:"#663802",type:"color"},icon_warning:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"},on_danger:{value:"#ffffff",type:"color"}},visited:{default:{value:"#7a1265",type:"color"}}}},LO={default:{first:{100:{value:"#feefef",type:"color",description:`AAA 12.8 on grey 800
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
AA18 3.7 as bkdg for interaction blue`},500:{value:"#4badf7",type:"color",description:"AA 5.8 on grey 800"},600:{value:"#1e98f5",type:"color",description:"AA 4.6 on grey 800"},700:{value:"#1b88dd",type:"color",description:"AA18 3.8 on grey 800"},800:{value:"#156aac",type:"color",description:"AA 5.6 on white"}}}},AO={tokenSetOrder:_O,Felles:gO,Altinn:vO,component:yO,border_width:bO,space:xO,interactive_components:wO,paragraph_space:kO,font_size:SO,font_family:PO,breakpoints:CO,typography:EO,size:OO,opacity:TO,colors:zO,semantic:RO,brand:LO};var _p={},BO={get exports(){return _p},set exports(e){_p=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(_i,function(n){var r="1.9.3";function i(o){var s,c,p,_;for(c=1,p=arguments.length;c<p;c++){_=arguments[c];for(s in _)o[s]=_[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var p=c.call(arguments,2);return function(){return o.apply(s,p.length?p.concat(c.call(arguments)):arguments)}}var u=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++u),o._leaflet_id}function f(o,s,c){var p,_,k,O;return O=function(){p=!1,_&&(k.apply(c,_),_=!1)},k=function(){p?_=arguments:(o.apply(c,arguments),setTimeout(O,s),p=!0)},k}function m(o,s,c){var p=s[1],_=s[0],k=p-_;return o===p&&c?o:((o-_)%k+k)%k+_}function h(){return!1}function g(o,s){if(s===!1)return o;var c=Math.pow(10,s===void 0?6:s);return Math.round(o*c)/c}function x(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function w(o){return x(o).split(/\s+/)}function v(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var c in s)o.options[c]=s[c];return o.options}function P(o,s,c){var p=[];for(var _ in o)p.push(encodeURIComponent(c?_.toUpperCase():_)+"="+encodeURIComponent(o[_]));return(!s||s.indexOf("?")===-1?"?":"&")+p.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function b(o,s){return o.replace(y,function(c,p){var _=s[p];if(_===void 0)throw new Error("No value provided for variable "+c);return typeof _=="function"&&(_=_(s)),_})}var S=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function C(o,s){for(var c=0;c<o.length;c++)if(o[c]===s)return c;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function N(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var A=0;function j(o){var s=+new Date,c=Math.max(0,16-(s-A));return A=s+c,window.setTimeout(o,c)}var K=window.requestAnimationFrame||N("RequestAnimationFrame")||j,W=window.cancelAnimationFrame||N("CancelAnimationFrame")||N("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function Y(o,s,c){if(c&&K===j)o.call(s);else return K.call(window,l(o,s))}function oe(o){o&&W.call(window,o)}var ue={__proto__:null,extend:i,create:a,bind:l,get lastId(){return u},stamp:d,throttle:f,wrapNum:m,falseFn:h,formatNum:g,trim:x,splitWords:w,setOptions:v,getParamString:P,template:b,isArray:S,indexOf:C,emptyImageUrl:z,requestFn:K,cancelFn:W,requestAnimFrame:Y,cancelAnimFrame:oe};function ne(){}ne.extend=function(o){var s=function(){v(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,p=a(c);p.constructor=s,s.prototype=p;for(var _ in this)Object.prototype.hasOwnProperty.call(this,_)&&_!=="prototype"&&_!=="__super__"&&(s[_]=this[_]);return o.statics&&i(s,o.statics),o.includes&&(pe(o.includes),i.apply(null,[p].concat(o.includes))),i(p,o),delete p.statics,delete p.includes,p.options&&(p.options=c.options?a(c.options):{},i(p.options,o.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var k=0,O=p._initHooks.length;k<O;k++)p._initHooks[k].call(this)}},s},ne.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},ne.mergeOptions=function(o){return i(this.prototype.options,o),this},ne.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function pe(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=S(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var B={on:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s);else{o=w(o);for(var _=0,k=o.length;_<k;_++)this._on(o[_],s,c)}return this},off:function(o,s,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var p in o)this._off(p,o[p],s);else{o=w(o);for(var _=arguments.length===1,k=0,O=o.length;k<O;k++)_?this._off(o[k]):this._off(o[k],s,c)}return this},_on:function(o,s,c,p){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,c)===!1){c===this&&(c=void 0);var _={fn:s,ctx:c};p&&(_.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(_)}},_off:function(o,s,c){var p,_,k;if(this._events&&(p=this._events[o],!!p)){if(arguments.length===1){if(this._firingCount)for(_=0,k=p.length;_<k;_++)p[_].fn=h;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var O=this._listens(o,s,c);if(O!==!1){var M=p[O];this._firingCount&&(M.fn=h,this._events[o]=p=p.slice()),p.splice(O,1)}}},fire:function(o,s,c){if(!this.listens(o,c))return this;var p=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var _=this._events[o];if(_){this._firingCount=this._firingCount+1||1;for(var k=0,O=_.length;k<O;k++){var M=_[k],F=M.fn;M.once&&this.off(o,F,M.ctx),F.call(M.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(o,s,c,p){typeof o!="string"&&console.warn('"string" type argument expected');var _=s;typeof s!="function"&&(p=!!s,_=void 0,c=void 0);var k=this._events&&this._events[o];if(k&&k.length&&this._listens(o,_,c)!==!1)return!0;if(p){for(var O in this._eventParents)if(this._eventParents[O].listens(o,s,c,p))return!0}return!1},_listens:function(o,s,c){if(!this._events)return!1;var p=this._events[o]||[];if(!s)return!!p.length;c===this&&(c=void 0);for(var _=0,k=p.length;_<k;_++)if(p[_].fn===s&&p[_].ctx===c)return _;return!1},once:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s,!0);else{o=w(o);for(var _=0,k=o.length;_<k;_++)this._on(o[_],s,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};B.addEventListener=B.on,B.removeEventListener=B.clearAllEventListeners=B.off,B.addOneTimeEventListener=B.once,B.fireEvent=B.fire,B.hasEventListeners=B.listens;var ae=ne.extend(B);function D(o,s,c){this.x=c?Math.round(o):o,this.y=c?Math.round(s):s}var J=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};D.prototype={clone:function(){return new D(this.x,this.y)},add:function(o){return this.clone()._add(Q(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(Q(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new D(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new D(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=J(this.x),this.y=J(this.y),this},distanceTo:function(o){o=Q(o);var s=o.x-this.x,c=o.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(o){return o=Q(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=Q(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function Q(o,s,c){return o instanceof D?o:S(o)?new D(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new D(o.x,o.y):new D(o,s,c)}function E(o,s){if(o)for(var c=s?[o,s]:o,p=0,_=c.length;p<_;p++)this.extend(c[p])}E.prototype={extend:function(o){var s,c;if(!o)return this;if(o instanceof D||typeof o[0]=="number"||"x"in o)s=c=Q(o);else if(o=I(o),s=o.min,c=o.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return Q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return Q(this.min.x,this.max.y)},getTopRight:function(){return Q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,c;return typeof o[0]=="number"||o instanceof D?o=Q(o):o=I(o),o instanceof E?(s=o.min,c=o.max):s=c=o,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=I(o);var s=this.min,c=this.max,p=o.min,_=o.max,k=_.x>=s.x&&p.x<=c.x,O=_.y>=s.y&&p.y<=c.y;return k&&O},overlaps:function(o){o=I(o);var s=this.min,c=this.max,p=o.min,_=o.max,k=_.x>s.x&&p.x<c.x,O=_.y>s.y&&p.y<c.y;return k&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,c=this.max,p=Math.abs(s.x-c.x)*o,_=Math.abs(s.y-c.y)*o;return I(Q(s.x-p,s.y-_),Q(c.x+p,c.y+_))},equals:function(o){return o?(o=I(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function I(o,s){return!o||o instanceof E?o:new E(o,s)}function R(o,s){if(o)for(var c=s?[o,s]:o,p=0,_=c.length;p<_;p++)this.extend(c[p])}R.prototype={extend:function(o){var s=this._southWest,c=this._northEast,p,_;if(o instanceof re)p=o,_=o;else if(o instanceof R){if(p=o._southWest,_=o._northEast,!p||!_)return this}else return o?this.extend($(o)||V(o)):this;return!s&&!c?(this._southWest=new re(p.lat,p.lng),this._northEast=new re(_.lat,_.lng)):(s.lat=Math.min(p.lat,s.lat),s.lng=Math.min(p.lng,s.lng),c.lat=Math.max(_.lat,c.lat),c.lng=Math.max(_.lng,c.lng)),this},pad:function(o){var s=this._southWest,c=this._northEast,p=Math.abs(s.lat-c.lat)*o,_=Math.abs(s.lng-c.lng)*o;return new R(new re(s.lat-p,s.lng-_),new re(c.lat+p,c.lng+_))},getCenter:function(){return new re((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new re(this.getNorth(),this.getWest())},getSouthEast:function(){return new re(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof re||"lat"in o?o=$(o):o=V(o);var s=this._southWest,c=this._northEast,p,_;return o instanceof R?(p=o.getSouthWest(),_=o.getNorthEast()):p=_=o,p.lat>=s.lat&&_.lat<=c.lat&&p.lng>=s.lng&&_.lng<=c.lng},intersects:function(o){o=V(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),_=o.getNorthEast(),k=_.lat>=s.lat&&p.lat<=c.lat,O=_.lng>=s.lng&&p.lng<=c.lng;return k&&O},overlaps:function(o){o=V(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),_=o.getNorthEast(),k=_.lat>s.lat&&p.lat<c.lat,O=_.lng>s.lng&&p.lng<c.lng;return k&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=V(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function V(o,s){return o instanceof R?o:new R(o,s)}function re(o,s,c){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,c!==void 0&&(this.alt=+c)}re.prototype={equals:function(o,s){if(!o)return!1;o=$(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+g(this.lat,o)+", "+g(this.lng,o)+")"},distanceTo:function(o){return le.distance(this,$(o))},wrap:function(){return le.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,c=s/Math.cos(Math.PI/180*this.lat);return V([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new re(this.lat,this.lng,this.alt)}};function $(o,s,c){return o instanceof re?o:S(o)&&typeof o[0]!="object"?o.length===3?new re(o[0],o[1],o[2]):o.length===2?new re(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new re(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new re(o,s,c)}var ee={latLngToPoint:function(o,s){var c=this.projection.project(o),p=this.scale(s);return this.transformation._transform(c,p)},pointToLatLng:function(o,s){var c=this.scale(s),p=this.transformation.untransform(o,c);return this.projection.unproject(p)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(o),p=this.transformation.transform(s.min,c),_=this.transformation.transform(s.max,c);return new E(p,_)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?m(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?m(o.lat,this.wrapLat,!0):o.lat,p=o.alt;return new re(c,s,p)},wrapLatLngBounds:function(o){var s=o.getCenter(),c=this.wrapLatLng(s),p=s.lat-c.lat,_=s.lng-c.lng;if(p===0&&_===0)return o;var k=o.getSouthWest(),O=o.getNorthEast(),M=new re(k.lat-p,k.lng-_),F=new re(O.lat-p,O.lng-_);return new R(M,F)}},le=i({},ee,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var c=Math.PI/180,p=o.lat*c,_=s.lat*c,k=Math.sin((s.lat-o.lat)*c/2),O=Math.sin((s.lng-o.lng)*c/2),M=k*k+Math.cos(p)*Math.cos(_)*O*O,F=2*Math.atan2(Math.sqrt(M),Math.sqrt(1-M));return this.R*F}}),je=6378137,Ue={R:je,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,o.lat),-c),_=Math.sin(p*s);return new D(this.R*o.lng*s,this.R*Math.log((1+_)/(1-_))/2)},unproject:function(o){var s=180/Math.PI;return new re((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=je*Math.PI;return new E([-o,-o],[o,o])}()};function Be(o,s,c,p){if(S(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=c,this._d=p}Be.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new D((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Ee(o,s,c,p){return new Be(o,s,c,p)}var He=i({},le,{code:"EPSG:3857",projection:Ue,transformation:function(){var o=.5/(Math.PI*Ue.R);return Ee(o,.5,-o,.5)}()}),Ce=i({},He,{code:"EPSG:900913"});function Nt(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function It(o,s){var c="",p,_,k,O,M,F;for(p=0,k=o.length;p<k;p++){for(M=o[p],_=0,O=M.length;_<O;_++)F=M[_],c+=(_?"L":"M")+F.x+" "+F.y;c+=s?de.svg?"z":"x":""}return c||"M0 0"}var $e=document.documentElement.style,$t="ActiveXObject"in window,rr=$t&&!document.addEventListener,Ct="msLaunchUri"in navigator&&!("documentMode"in document),ln=cn("webkit"),Et=cn("android"),or=cn("android 2")||cn("android 3"),ia=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),aa=Et&&cn("Google")&&ia<537&&!("AudioNode"in window),un=!!window.opera,Fn=!Ct&&cn("chrome"),U=cn("gecko")&&!ln&&!un&&!$t,H=!Fn&&cn("safari"),X=cn("phantom"),ce="OTransition"in $e,he=navigator.platform.indexOf("Win")===0,ge=$t&&"transition"in $e,_e="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!or,ye="MozPerspective"in $e,me=!window.L_DISABLE_3D&&(ge||_e||ye)&&!ce&&!X,tt=typeof orientation<"u"||cn("mobile"),Te=tt&&ln,bt=tt&&_e,Ke=!window.PointerEvent&&window.MSPointerEvent,Gt=!!(window.PointerEvent||Ke),Wt="ontouchstart"in window||!!window.TouchEvent,mo=!window.L_NO_TOUCH&&(Wt||Gt),ei=tt&&un,ti=tt&&U,Or=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,sa=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",h,s),window.removeEventListener("testPassiveEventSupport",h,s)}catch{}return o}(),_t=function(){return!!document.createElement("canvas").getContext}(),Zt=!!(document.createElementNS&&Nt("svg").createSVGRect),ir=!!Zt&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),ni=!Zt&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),la=navigator.platform.indexOf("Mac")===0,Mc=navigator.platform.indexOf("Linux")===0;function cn(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var de={ie:$t,ielt9:rr,edge:Ct,webkit:ln,android:Et,android23:or,androidStock:aa,opera:un,chrome:Fn,gecko:U,safari:H,phantom:X,opera12:ce,win:he,ie3d:ge,webkit3d:_e,gecko3d:ye,any3d:me,mobile:tt,mobileWebkit:Te,mobileWebkit3d:bt,msPointer:Ke,pointer:Gt,touch:mo,touchNative:Wt,mobileOpera:ei,mobileGecko:ti,retina:Or,passiveEvents:sa,canvas:_t,svg:Zt,vml:ni,inlineSvg:ir,mac:la,linux:Mc},ri=de.msPointer?"MSPointerDown":"pointerdown",ua=de.msPointer?"MSPointerMove":"pointermove",Ds=de.msPointer?"MSPointerUp":"pointerup",wm=de.msPointer?"MSPointerCancel":"pointercancel",Dc={touchstart:ri,touchmove:ua,touchend:Ds,touchcancel:wm},km={touchstart:X1,touchmove:Fs,touchend:Fs,touchcancel:Fs},oi={},Sm=!1;function V1(o,s,c){return s==="touchstart"&&G1(),km[s]?(c=km[s].bind(this,c),o.addEventListener(Dc[s],c,!1),c):(console.warn("wrong event specified:",s),h)}function q1(o,s,c){if(!Dc[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(Dc[s],c,!1)}function K1(o){oi[o.pointerId]=o}function Q1(o){oi[o.pointerId]&&(oi[o.pointerId]=o)}function Pm(o){delete oi[o.pointerId]}function G1(){Sm||(document.addEventListener(ri,K1,!0),document.addEventListener(ua,Q1,!0),document.addEventListener(Ds,Pm,!0),document.addEventListener(wm,Pm,!0),Sm=!0)}function Fs(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in oi)s.touches.push(oi[c]);s.changedTouches=[s],o(s)}}function X1(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&xt(s),Fs(o,s)}function J1(o){var s={},c,p;for(p in o)c=o[p],s[p]=c&&c.bind?c.bind(o):c;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Y1=200;function ew(o,s){o.addEventListener("dblclick",s);var c=0,p;function _(k){if(k.detail!==1){p=k.detail;return}if(!(k.pointerType==="mouse"||k.sourceCapabilities&&!k.sourceCapabilities.firesTouchEvents)){var O=zm(k);if(!(O.some(function(F){return F instanceof HTMLLabelElement&&F.attributes.for})&&!O.some(function(F){return F instanceof HTMLInputElement||F instanceof HTMLSelectElement}))){var M=Date.now();M-c<=Y1?(p++,p===2&&s(J1(k))):p=1,c=M}}}return o.addEventListener("click",_),{dblclick:s,simDblclick:_}}function tw(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var Fc=$s(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ca=$s(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Cm=ca==="webkitTransition"||ca==="OTransition"?ca+"End":"transitionend";function Em(o){return typeof o=="string"?document.getElementById(o):o}function da(o,s){var c=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(o,null);c=p?p[s]:null}return c==="auto"?null:c}function Ae(o,s,c){var p=document.createElement(o);return p.className=s||"",c&&c.appendChild(p),p}function Xe(o){var s=o.parentNode;s&&s.removeChild(o)}function js(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function ii(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function ai(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function jc(o,s){if(o.classList!==void 0)return o.classList.contains(s);var c=Us(o);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function xe(o,s){if(o.classList!==void 0)for(var c=w(s),p=0,_=c.length;p<_;p++)o.classList.add(c[p]);else if(!jc(o,s)){var k=Us(o);Uc(o,(k?k+" ":"")+s)}}function ot(o,s){o.classList!==void 0?o.classList.remove(s):Uc(o,x((" "+Us(o)+" ").replace(" "+s+" "," ")))}function Uc(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function Us(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function dn(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&nw(o,s)}function nw(o,s){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(p)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):o.style.filter+=" progid:"+p+"(opacity="+s+")"}function $s(o){for(var s=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in s)return o[c];return!1}function _o(o,s,c){var p=s||new D(0,0);o.style[Fc]=(de.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function st(o,s){o._leaflet_pos=s,de.any3d?_o(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function go(o){return o._leaflet_pos||new D(0,0)}var fa,pa,$c;if("onselectstart"in document)fa=function(){be(window,"selectstart",xt)},pa=function(){We(window,"selectstart",xt)};else{var ha=$s(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);fa=function(){if(ha){var o=document.documentElement.style;$c=o[ha],o[ha]="none"}},pa=function(){ha&&(document.documentElement.style[ha]=$c,$c=void 0)}}function Wc(){be(window,"dragstart",xt)}function Zc(){We(window,"dragstart",xt)}var Ws,Hc;function Vc(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Zs(),Ws=o,Hc=o.style.outline,o.style.outline="none",be(window,"keydown",Zs))}function Zs(){Ws&&(Ws.style.outline=Hc,Ws=void 0,Hc=void 0,We(window,"keydown",Zs))}function Om(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function qc(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var rw={__proto__:null,TRANSFORM:Fc,TRANSITION:ca,TRANSITION_END:Cm,get:Em,getStyle:da,create:Ae,remove:Xe,empty:js,toFront:ii,toBack:ai,hasClass:jc,addClass:xe,removeClass:ot,setClass:Uc,getClass:Us,setOpacity:dn,testProp:$s,setTransform:_o,setPosition:st,getPosition:go,get disableTextSelection(){return fa},get enableTextSelection(){return pa},disableImageDrag:Wc,enableImageDrag:Zc,preventOutline:Vc,restoreOutline:Zs,getSizedParentNode:Om,getScale:qc};function be(o,s,c,p){if(s&&typeof s=="object")for(var _ in s)Qc(o,_,s[_],c);else{s=w(s);for(var k=0,O=s.length;k<O;k++)Qc(o,s[k],c,p)}return this}var jn="_leaflet_events";function We(o,s,c,p){if(arguments.length===1)Tm(o),delete o[jn];else if(s&&typeof s=="object")for(var _ in s)Gc(o,_,s[_],c);else if(s=w(s),arguments.length===2)Tm(o,function(M){return C(s,M)!==-1});else for(var k=0,O=s.length;k<O;k++)Gc(o,s[k],c,p);return this}function Tm(o,s){for(var c in o[jn]){var p=c.split(/\d/)[0];(!s||s(p))&&Gc(o,p,null,null,c)}}var Kc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Qc(o,s,c,p){var _=s+d(c)+(p?"_"+d(p):"");if(o[jn]&&o[jn][_])return this;var k=function(M){return c.call(p||o,M||window.event)},O=k;!de.touchNative&&de.pointer&&s.indexOf("touch")===0?k=V1(o,s,k):de.touch&&s==="dblclick"?k=ew(o,k):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener(Kc[s]||s,k,de.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(k=function(M){M=M||window.event,Jc(o,M)&&O(M)},o.addEventListener(Kc[s],k,!1)):o.addEventListener(s,O,!1):o.attachEvent("on"+s,k),o[jn]=o[jn]||{},o[jn][_]=k}function Gc(o,s,c,p,_){_=_||s+d(c)+(p?"_"+d(p):"");var k=o[jn]&&o[jn][_];if(!k)return this;!de.touchNative&&de.pointer&&s.indexOf("touch")===0?q1(o,s,k):de.touch&&s==="dblclick"?tw(o,k):"removeEventListener"in o?o.removeEventListener(Kc[s]||s,k,!1):o.detachEvent("on"+s,k),o[jn][_]=null}function vo(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function Xc(o){return Qc(o,"wheel",vo),this}function ma(o){return be(o,"mousedown touchstart dblclick contextmenu",vo),o._leaflet_disable_click=!0,this}function xt(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function yo(o){return xt(o),vo(o),this}function zm(o){if(o.composedPath)return o.composedPath();for(var s=[],c=o.target;c;)s.push(c),c=c.parentNode;return s}function Rm(o,s){if(!s)return new D(o.clientX,o.clientY);var c=qc(s),p=c.boundingClientRect;return new D((o.clientX-p.left)/c.x-s.clientLeft,(o.clientY-p.top)/c.y-s.clientTop)}var ow=de.linux&&de.chrome?window.devicePixelRatio:de.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Lm(o){return de.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/ow:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Jc(o,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var iw={__proto__:null,on:be,off:We,stopPropagation:vo,disableScrollPropagation:Xc,disableClickPropagation:ma,preventDefault:xt,stop:yo,getPropagationPath:zm,getMousePosition:Rm,getWheelDelta:Lm,isExternalTarget:Jc,addListener:be,removeListener:We},Am=ae.extend({run:function(o,s,c,p){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=go(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Y(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var c=this._startPos.add(this._offset.multiplyBy(o));s&&c._round(),st(this._el,c),this.fire("step")},_complete:function(){oe(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),Oe=ae.extend({options:{crs:He,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=v(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView($(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ca&&de.any3d&&!de.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),be(this._proxy,Cm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter($(o),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=i({animate:c.animate},c.zoom),c.pan=i({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,c.zoom):this._tryAnimatedPan(o,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(de.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(de.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,c){var p=this.getZoomScale(s),_=this.getSize().divideBy(2),k=o instanceof D?o:this.latLngToContainerPoint(o),O=k.subtract(_).multiplyBy(1-1/p),M=this.containerPointToLatLng(_.add(O));return this.setView(M,s,{zoom:c})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():V(o);var c=Q(s.paddingTopLeft||s.padding||[0,0]),p=Q(s.paddingBottomRight||s.padding||[0,0]),_=this.getBoundsZoom(o,!1,c.add(p));if(_=typeof s.maxZoom=="number"?Math.min(s.maxZoom,_):_,_===1/0)return{center:o.getCenter(),zoom:_};var k=p.subtract(c).divideBy(2),O=this.project(o.getSouthWest(),_),M=this.project(o.getNorthEast(),_),F=this.unproject(O.add(M).divideBy(2).add(k),_);return{center:F,zoom:_}},fitBounds:function(o,s){if(o=V(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=Q(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Am,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){xe(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,c){if(c=c||{},c.animate===!1||!de.any3d)return this.setView(o,s,c);this._stop();var p=this.project(this.getCenter()),_=this.project(o),k=this.getSize(),O=this._zoom;o=$(o),s=s===void 0?O:s;var M=Math.max(k.x,k.y),F=M*this.getZoomScale(O,s),G=_.distanceTo(p)||1,se=1.42,ve=se*se;function ke(lt){var rl=lt?-1:1,qw=lt?F:M,Kw=F*F-M*M+rl*ve*ve*G*G,Qw=2*qw*ve*G,ud=Kw/Qw,p_=Math.sqrt(ud*ud+1)-ud,Gw=p_<1e-9?-18:Math.log(p_);return Gw}function pn(lt){return(Math.exp(lt)-Math.exp(-lt))/2}function xo(lt){return(Math.exp(lt)+Math.exp(-lt))/2}function nl(lt){return pn(lt)/xo(lt)}var Rr=ke(0);function ld(lt){return M*(xo(Rr)/xo(Rr+se*lt))}function Ww(lt){return M*(xo(Rr)*nl(Rr+se*lt)-pn(Rr))/ve}function Zw(lt){return 1-Math.pow(1-lt,1.5)}var Hw=Date.now(),d_=(ke(1)-Rr)/se,Vw=c.duration?1e3*c.duration:1e3*d_*.8;function f_(){var lt=(Date.now()-Hw)/Vw,rl=Zw(lt)*d_;lt<=1?(this._flyToFrame=Y(f_,this),this._move(this.unproject(p.add(_.subtract(p).multiplyBy(Ww(rl)/G)),O),this.getScaleZoom(M/ld(rl),O),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),f_.call(this),this},flyToBounds:function(o,s){var c=this._getBoundsCenterZoom(o,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(o){return o=V(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,V(o));return c.equals(p)||this.panTo(p,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var c=Q(s.paddingTopLeft||s.padding||[0,0]),p=Q(s.paddingBottomRight||s.padding||[0,0]),_=this.project(this.getCenter()),k=this.project(o),O=this.getPixelBounds(),M=I([O.min.add(c),O.max.subtract(p)]),F=M.getSize();if(!M.contains(k)){this._enforcingBounds=!0;var G=k.subtract(M.getCenter()),se=M.extend(k).getSize().subtract(F);_.x+=G.x<0?-se.x:se.x,_.y+=G.y<0?-se.y:se.y,this.panTo(this.unproject(_),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=s.divideBy(2).round(),_=c.divideBy(2).round(),k=p.subtract(_);return!k.x&&!k.y?this:(o.animate&&o.pan?this.panBy(k):(o.pan&&this._rawPanBy(k),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,o):navigator.geolocation.getCurrentPosition(s,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,c=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,c=o.coords.longitude,p=new re(s,c),_=p.toBounds(o.coords.accuracy*2),k=this._locateOptions;if(k.setView){var O=this.getBoundsZoom(_);this.setView(p,k.maxZoom?Math.min(O,k.maxZoom):O)}var M={latlng:p,bounds:_,timestamp:o.timestamp};for(var F in o.coords)typeof o.coords[F]=="number"&&(M[F]=o.coords[F]);this.fire("locationfound",M)}},addHandler:function(o,s){if(!s)return this;var c=this[o]=new s(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Xe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(oe(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)Xe(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),p=Ae("div",c,s||this._mapPane);return o&&(this._panes[o]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new R(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,c){o=V(o),c=Q(c||[0,0]);var p=this.getZoom()||0,_=this.getMinZoom(),k=this.getMaxZoom(),O=o.getNorthWest(),M=o.getSouthEast(),F=this.getSize().subtract(c),G=I(this.project(M,p),this.project(O,p)).getSize(),se=de.any3d?this.options.zoomSnap:1,ve=F.x/G.x,ke=F.y/G.y,pn=s?Math.max(ve,ke):Math.min(ve,ke);return p=this.getScaleZoom(pn,p),se&&(p=Math.round(p/(se/100))*(se/100),p=s?Math.ceil(p/se)*se:Math.floor(p/se)*se),Math.max(_,Math.min(k,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new D(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var c=this._getTopLeftPoint(o,s);return new E(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(o)/c.scale(s)},getScaleZoom:function(o,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var p=c.zoom(o*c.scale(s));return isNaN(p)?1/0:p},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint($(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(Q(o),s)},layerPointToLatLng:function(o){var s=Q(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project($(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng($(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(V(o))},distance:function(o,s){return this.options.crs.distance($(o),$(s))},containerPointToLayerPoint:function(o){return Q(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return Q(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(Q(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(o)))},mouseEventToContainerPoint:function(o){return Rm(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=Em(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");be(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&de.any3d,xe(o,"leaflet-container"+(de.touch?" leaflet-touch":"")+(de.retina?" leaflet-retina":"")+(de.ielt9?" leaflet-oldie":"")+(de.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=da(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),st(this._mapPane,new D(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(xe(o.markerPane,"leaflet-zoom-hide"),xe(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,c){st(this._mapPane,new D(0,0));var p=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var _=this._zoom!==s;this._moveStart(_,c)._move(o,s)._moveEnd(_),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,c,p){s===void 0&&(s=this._zoom);var _=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),p?c&&c.pinch&&this.fire("zoom",c):((_||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return oe(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){st(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?We:be;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),de.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){oe(this._resizeRequest),this._resizeRequest=Y(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var c=[],p,_=s==="mouseout"||s==="mouseover",k=o.target||o.srcElement,O=!1;k;){if(p=this._targets[d(k)],p&&(s==="click"||s==="preclick")&&this._draggableMoved(p)){O=!0;break}if(p&&p.listens(s,!0)&&(_&&!Jc(k,o)||(c.push(p),_))||k===this._container)break;k=k.parentNode}return!c.length&&!O&&!_&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var c=o.type;c==="mousedown"&&Vc(s),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,c){if(o.type==="click"){var p=i({},o);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var _=this._findEventTargets(o,s);if(c){for(var k=[],O=0;O<c.length;O++)c[O].listens(s,!0)&&k.push(c[O]);_=k.concat(_)}if(_.length){s==="contextmenu"&&xt(o);var M=_[0],F={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var G=M.getLatLng&&(!M._radius||M._radius<=10);F.containerPoint=G?this.latLngToContainerPoint(M.getLatLng()):this.mouseEventToContainerPoint(o),F.layerPoint=this.containerPointToLayerPoint(F.containerPoint),F.latlng=G?M.getLatLng():this.layerPointToLatLng(F.layerPoint)}for(O=0;O<_.length;O++)if(_[O].fire(s,F,!0),F.originalEvent._stopped||_[O].options.bubblingMouseEvents===!1&&C(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return go(this._mapPane)||new D(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var c=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var c=this.getSize()._divideBy(2);return this.project(o,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return this.project(o,s)._subtract(p)},_latLngBoundsToNewLayerBounds:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return I([this.project(o.getSouthWest(),s)._subtract(p),this.project(o.getNorthWest(),s)._subtract(p),this.project(o.getSouthEast(),s)._subtract(p),this.project(o.getNorthEast(),s)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,c){if(!c)return o;var p=this.project(o,s),_=this.getSize().divideBy(2),k=new E(p.subtract(_),p.add(_)),O=this._getBoundsOffset(k,c,s);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?o:this.unproject(p.add(O),s)},_limitOffset:function(o,s){if(!s)return o;var c=this.getPixelBounds(),p=new E(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(p,s))},_getBoundsOffset:function(o,s,c){var p=I(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),_=p.min.subtract(o.min),k=p.max.subtract(o.max),O=this._rebound(_.x,-k.x),M=this._rebound(_.y,-k.y);return new D(O,M)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),c=this.getMaxZoom(),p=de.any3d?this.options.zoomSnap:1;return p&&(o=Math.round(o/p)*p),Math.max(s,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ot(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var c=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var o=this._proxy=Ae("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var c=Fc,p=this._proxy.style[c];_o(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Xe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();_o(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(s),_=this._getCenterOffset(o)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(_)?!1:(Y(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,xe(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ot(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function aw(o,s){return new Oe(o,s)}var wn=ne.extend({options:{position:"topright"},initialize:function(o){v(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),c=this.getPosition(),p=o._controlCorners[c];return xe(s,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(s,p.firstChild):p.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Xe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),_a=function(o){return new wn(o)};Oe.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",c=this._controlContainer=Ae("div",s+"control-container",this._container);function p(_,k){var O=s+_+" "+s+k;o[_+k]=Ae("div",O,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)Xe(this._controlCorners[o]);Xe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Bm=wn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,c,p){return c<p?-1:p<c?1:0}},initialize:function(o,s,c){v(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var p in o)this._addLayer(o[p],p);for(p in s)this._addLayer(s[p],p,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return wn.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){xe(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(xe(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):ot(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ot(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Ae("div",o),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),ma(s),Xc(s);var p=this._section=Ae("section",o+"-list");c&&(this._map.on("click",this.collapse,this),be(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var _=this._layersLink=Ae("a",o+"-toggle",s);_.href="#",_.title="Layers",_.setAttribute("role","button"),be(_,{keydown:function(k){k.keyCode===13&&this._expandSafely()},click:function(k){xt(k),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Ae("div",o+"-base",p),this._separator=Ae("div",o+"-separator",p),this._overlaysList=Ae("div",o+"-overlays",p),s.appendChild(p)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(p,_){return this.options.sortFunction(p.layer,_.layer,p.name,_.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;js(this._baseLayersList),js(this._overlaysList),this._layerControlInputs=[];var o,s,c,p,_=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),s=s||p.overlay,o=o||!p.overlay,_+=p.overlay?0:1;return this.options.hideSingleBase&&(o=o&&_>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),c=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(o,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(o){var s=document.createElement("label"),c=this._map.hasLayer(o.layer),p;o.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(p),p.layerId=d(o.layer),be(p,"click",this._onInputClick,this);var _=document.createElement("span");_.innerHTML=" "+o.name;var k=document.createElement("span");s.appendChild(k),k.appendChild(p),k.appendChild(_);var O=o.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,c,p=[],_=[];this._handlingClick=!0;for(var k=o.length-1;k>=0;k--)s=o[k],c=this._getLayer(s.layerId).layer,s.checked?p.push(c):s.checked||_.push(c);for(k=0;k<_.length;k++)this._map.hasLayer(_[k])&&this._map.removeLayer(_[k]);for(k=0;k<p.length;k++)this._map.hasLayer(p[k])||this._map.addLayer(p[k]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,c,p=this._map.getZoom(),_=o.length-1;_>=0;_--)s=o[_],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;be(o,"click",xt),this.expand(),setTimeout(function(){We(o,"click",xt)})}}),sw=function(o,s,c){return new Bm(o,s,c)},Yc=wn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",c=Ae("div",s+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,c,p,_){var k=Ae("a",c,p);return k.innerHTML=o,k.href="#",k.title=s,k.setAttribute("role","button"),k.setAttribute("aria-label",s),ma(k),be(k,"click",yo),be(k,"click",_,this),be(k,"click",this._refocusOnMap,this),k},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";ot(this._zoomInButton,s),ot(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(xe(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(xe(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Oe.mergeOptions({zoomControl:!0}),Oe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Yc,this.addControl(this.zoomControl))});var lw=function(o){return new Yc(o)},Nm=wn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",c=Ae("div",s),p=this.options;return this._addScales(p,s+"-line",c),o.on(p.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,c){o.metric&&(this._mScale=Ae("div",s,c)),o.imperial&&(this._iScale=Ae("div",s,c))},_update:function(){var o=this._map,s=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/o)},_updateImperial:function(o){var s=o*3.2808399,c,p,_;s>5280?(c=s/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(_=this._getRoundNum(s),this._updateScale(this._iScale,_+" ft",_/s))},_updateScale:function(o,s,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),c=o/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),uw=function(o){return new Nm(o)},cw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ed=wn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(de.inlineSvg?cw+" ":"")+"Leaflet</a>"},initialize:function(o){v(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Ae("div","leaflet-control-attribution"),ma(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Oe.mergeOptions({attributionControl:!0}),Oe.addInitHook(function(){this.options.attributionControl&&new ed().addTo(this)});var dw=function(o){return new ed(o)};wn.Layers=Bm,wn.Zoom=Yc,wn.Scale=Nm,wn.Attribution=ed,_a.layers=sw,_a.zoom=lw,_a.scale=uw,_a.attribution=dw;var Un=ne.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Un.addTo=function(o,s){return o.addHandler(s,this),this};var fw={Events:B},Im=de.touch?"touchstart mousedown":"mousedown",Tr=ae.extend({options:{clickTolerance:3},initialize:function(o,s,c,p){v(this,p),this._element=o,this._dragStartTarget=s||o,this._preventOutline=c},enable:function(){this._enabled||(be(this._dragStartTarget,Im,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Tr._dragging===this&&this.finishDrag(!0),We(this._dragStartTarget,Im,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!jc(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){Tr._dragging===this&&this.finishDrag();return}if(!(Tr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(Tr._dragging=this,this._preventOutline&&Vc(this._element),Wc(),fa(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,c=Om(this._element);this._startPoint=new D(s.clientX,s.clientY),this._startPos=go(this._element),this._parentScale=qc(c);var p=o.type==="mousedown";be(document,p?"mousemove":"touchmove",this._onMove,this),be(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,c=new D(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,xt(o),this._moved||(this.fire("dragstart"),this._moved=!0,xe(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),xe(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),st(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){ot(document.body,"leaflet-dragging"),this._lastTarget&&(ot(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),We(document,"mousemove touchmove",this._onMove,this),We(document,"mouseup touchend touchcancel",this._onUp,this),Zc(),pa(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Tr._dragging=!1}});function Mm(o,s){if(!s||!o.length)return o.slice();var c=s*s;return o=mw(o,c),o=hw(o,c),o}function Dm(o,s,c){return Math.sqrt(ga(o,s,c,!0))}function pw(o,s,c){return ga(o,s,c)}function hw(o,s){var c=o.length,p=typeof Uint8Array!=void 0+""?Uint8Array:Array,_=new p(c);_[0]=_[c-1]=1,td(o,_,s,0,c-1);var k,O=[];for(k=0;k<c;k++)_[k]&&O.push(o[k]);return O}function td(o,s,c,p,_){var k=0,O,M,F;for(M=p+1;M<=_-1;M++)F=ga(o[M],o[p],o[_],!0),F>k&&(O=M,k=F);k>c&&(s[O]=1,td(o,s,c,p,O),td(o,s,c,O,_))}function mw(o,s){for(var c=[o[0]],p=1,_=0,k=o.length;p<k;p++)_w(o[p],o[_])>s&&(c.push(o[p]),_=p);return _<k-1&&c.push(o[k-1]),c}var Fm;function jm(o,s,c,p,_){var k=p?Fm:bo(o,c),O=bo(s,c),M,F,G;for(Fm=O;;){if(!(k|O))return[o,s];if(k&O)return!1;M=k||O,F=Hs(o,s,M,c,_),G=bo(F,c),M===k?(o=F,k=G):(s=F,O=G)}}function Hs(o,s,c,p,_){var k=s.x-o.x,O=s.y-o.y,M=p.min,F=p.max,G,se;return c&8?(G=o.x+k*(F.y-o.y)/O,se=F.y):c&4?(G=o.x+k*(M.y-o.y)/O,se=M.y):c&2?(G=F.x,se=o.y+O*(F.x-o.x)/k):c&1&&(G=M.x,se=o.y+O*(M.x-o.x)/k),new D(G,se,_)}function bo(o,s){var c=0;return o.x<s.min.x?c|=1:o.x>s.max.x&&(c|=2),o.y<s.min.y?c|=4:o.y>s.max.y&&(c|=8),c}function _w(o,s){var c=s.x-o.x,p=s.y-o.y;return c*c+p*p}function ga(o,s,c,p){var _=s.x,k=s.y,O=c.x-_,M=c.y-k,F=O*O+M*M,G;return F>0&&(G=((o.x-_)*O+(o.y-k)*M)/F,G>1?(_=c.x,k=c.y):G>0&&(_+=O*G,k+=M*G)),O=o.x-_,M=o.y-k,p?O*O+M*M:new D(_,k)}function fn(o){return!S(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Um(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),fn(o)}function $m(o,s){var c,p,_,k,O,M,F,G;if(!o||o.length===0)throw new Error("latlngs not passed");fn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var se=[];for(var ve in o)se.push(s.project($(o[ve])));var ke=se.length;for(c=0,p=0;c<ke-1;c++)p+=se[c].distanceTo(se[c+1])/2;if(p===0)G=se[0];else for(c=0,k=0;c<ke-1;c++)if(O=se[c],M=se[c+1],_=O.distanceTo(M),k+=_,k>p){F=(k-p)/_,G=[M.x-F*(M.x-O.x),M.y-F*(M.y-O.y)];break}return s.unproject(Q(G))}var gw={__proto__:null,simplify:Mm,pointToSegmentDistance:Dm,closestPointOnSegment:pw,clipSegment:jm,_getEdgeIntersection:Hs,_getBitCode:bo,_sqClosestPointOnSegment:ga,isFlat:fn,_flat:Um,polylineCenter:$m};function Wm(o,s,c){var p,_=[1,4,2,8],k,O,M,F,G,se,ve,ke;for(k=0,se=o.length;k<se;k++)o[k]._code=bo(o[k],s);for(M=0;M<4;M++){for(ve=_[M],p=[],k=0,se=o.length,O=se-1;k<se;O=k++)F=o[k],G=o[O],F._code&ve?G._code&ve||(ke=Hs(G,F,ve,s,c),ke._code=bo(ke,s),p.push(ke)):(G._code&ve&&(ke=Hs(G,F,ve,s,c),ke._code=bo(ke,s),p.push(ke)),p.push(F));o=p}return o}function Zm(o,s){var c,p,_,k,O,M,F,G,se;if(!o||o.length===0)throw new Error("latlngs not passed");fn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ve=[];for(var ke in o)ve.push(s.project($(o[ke])));var pn=ve.length;for(M=F=G=0,c=0,p=pn-1;c<pn;p=c++)_=ve[c],k=ve[p],O=_.y*k.x-k.y*_.x,F+=(_.x+k.x)*O,G+=(_.y+k.y)*O,M+=O*3;return M===0?se=ve[0]:se=[F/M,G/M],s.unproject(Q(se))}var vw={__proto__:null,clipPolygon:Wm,polygonCenter:Zm},nd={project:function(o){return new D(o.lng,o.lat)},unproject:function(o){return new re(o.y,o.x)},bounds:new E([-180,-90],[180,90])},rd={R:6378137,R_MINOR:6356752314245179e-9,bounds:new E([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,c=this.R,p=o.lat*s,_=this.R_MINOR/c,k=Math.sqrt(1-_*_),O=k*Math.sin(p),M=Math.tan(Math.PI/4-p/2)/Math.pow((1-O)/(1+O),k/2);return p=-c*Math.log(Math.max(M,1e-10)),new D(o.lng*s*c,p)},unproject:function(o){for(var s=180/Math.PI,c=this.R,p=this.R_MINOR/c,_=Math.sqrt(1-p*p),k=Math.exp(-o.y/c),O=Math.PI/2-2*Math.atan(k),M=0,F=.1,G;M<15&&Math.abs(F)>1e-7;M++)G=_*Math.sin(O),G=Math.pow((1-G)/(1+G),_/2),F=Math.PI/2-2*Math.atan(k*G)-O,O+=F;return new re(O*s,o.x*s/c)}},yw={__proto__:null,LonLat:nd,Mercator:rd,SphericalMercator:Ue},bw=i({},le,{code:"EPSG:3395",projection:rd,transformation:function(){var o=.5/(Math.PI*rd.R);return Ee(o,.5,-o,.5)}()}),Hm=i({},le,{code:"EPSG:4326",projection:nd,transformation:Ee(1/180,1,-1/180,.5)}),xw=i({},ee,{projection:nd,transformation:Ee(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var c=s.lng-o.lng,p=s.lat-o.lat;return Math.sqrt(c*c+p*p)},infinite:!0});ee.Earth=le,ee.EPSG3395=bw,ee.EPSG3857=He,ee.EPSG900913=Ce,ee.EPSG4326=Hm,ee.Simple=xw;var kn=ae.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Oe.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},_addLayers:function(o){o=o?S(o)?o:[o]:[];for(var s=0,c=o.length;s<c;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var _=this._zoomBoundLayers[p].options;o=_.minZoom===void 0?o:Math.min(o,_.minZoom),s=_.maxZoom===void 0?s:Math.max(s,_.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var si=kn.extend({initialize:function(o,s){v(this,s),this._layers={};var c,p;if(o)for(c=0,p=o.length;c<p;c++)this.addLayer(o[c])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[o]&&p[o].apply(p,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),ww=function(o,s){return new si(o,s)},ar=si.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),si.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),si.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new R;for(var s in this._layers){var c=this._layers[s];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),kw=function(o,s){return new ar(o,s)},li=ne.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){v(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(p,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(o,s){var c=this.options,p=c[s+"Size"];typeof p=="number"&&(p=[p,p]);var _=Q(p),k=Q(s==="shadow"&&c.shadowAnchor||c.iconAnchor||_&&_.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(c.className||""),k&&(o.style.marginLeft=-k.x+"px",o.style.marginTop=-k.y+"px"),_&&(o.style.width=_.x+"px",o.style.height=_.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return de.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function Sw(o){return new li(o)}var va=li.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof va.imagePath!="string"&&(va.imagePath=this._detectIconPath()),(this.options.imagePath||va.imagePath)+li.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(c,p,_){var k=p.exec(c);return k&&k[_]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Ae("div","leaflet-default-icon-path",document.body),s=da(o,"background-image")||da(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Vm=Un.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new Tr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),xe(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ot(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,c=s._map,p=this._marker.options.autoPanSpeed,_=this._marker.options.autoPanPadding,k=go(s._icon),O=c.getPixelBounds(),M=c.getPixelOrigin(),F=I(O.min._subtract(M).add(_),O.max._subtract(M).subtract(_));if(!F.contains(k)){var G=Q((Math.max(F.max.x,k.x)-F.max.x)/(O.max.x-F.max.x)-(Math.min(F.min.x,k.x)-F.min.x)/(O.min.x-F.min.x),(Math.max(F.max.y,k.y)-F.max.y)/(O.max.y-F.max.y)-(Math.min(F.min.y,k.y)-F.min.y)/(O.min.y-F.min.y)).multiplyBy(p);c.panBy(G,{animate:!1}),this._draggable._newPos._add(G),this._draggable._startPos._add(G),st(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=Y(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(oe(this._panRequest),this._panRequest=Y(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,c=s._shadow,p=go(s._icon),_=s._map.layerPointToLatLng(p);c&&st(c,p),s._latlng=_,o.latlng=_,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){oe(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),Vs=kn.extend({options:{icon:new va,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){v(this,s),this._latlng=$(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=$(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),xe(c,s),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&be(c,"focus",this._panOnFocus,this);var _=o.icon.createShadow(this._shadow),k=!1;_!==this._shadow&&(this._removeShadow(),k=!0),_&&(xe(_,s),_.alt=""),this._shadow=_,o.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),_&&k&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&We(this._icon,"focus",this._panOnFocus,this),Xe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Xe(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&st(this._icon,o),this._shadow&&st(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(xe(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Vm)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Vm(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&dn(this._icon,o),this._shadow&&dn(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,c=s.iconSize?Q(s.iconSize):Q(0,0),p=s.iconAnchor?Q(s.iconAnchor):Q(0,0);o.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Pw(o,s){return new Vs(o,s)}var zr=kn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return v(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),qs=zr.extend({options:{fill:!0,radius:10},initialize:function(o,s){v(this,s),this._latlng=$(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=$(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return zr.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,c=this._clickTolerance(),p=[o+c,s+c];this._pxBounds=new E(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Cw(o,s){return new qs(o,s)}var od=qs.extend({initialize:function(o,s,c){if(typeof s=="number"&&(s=i({},c,{radius:s})),v(this,s),this._latlng=$(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new R(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:zr.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===le.distance){var _=Math.PI/180,k=this._mRadius/le.R/_,O=c.project([s+k,o]),M=c.project([s-k,o]),F=O.add(M).divideBy(2),G=c.unproject(F).lat,se=Math.acos((Math.cos(k*_)-Math.sin(s*_)*Math.sin(G*_))/(Math.cos(s*_)*Math.cos(G*_)))/_;(isNaN(se)||se===0)&&(se=k/Math.cos(Math.PI/180*s)),this._point=F.subtract(c.getPixelOrigin()),this._radius=isNaN(se)?0:F.x-c.project([G,o-se]).x,this._radiusY=F.y-O.y}else{var ve=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ve).x}this._updateBounds()}});function Ew(o,s,c){return new od(o,s,c)}var sr=zr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){v(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,c=null,p=ga,_,k,O=0,M=this._parts.length;O<M;O++)for(var F=this._parts[O],G=1,se=F.length;G<se;G++){_=F[G-1],k=F[G];var ve=p(o,_,k,!0);ve<s&&(s=ve,c=p(o,_,k))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return $m(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=$(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new R,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return fn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],c=fn(o),p=0,_=o.length;p<_;p++)c?(s[p]=$(o[p]),this._bounds.extend(s[p])):s[p]=this._convertLatLngs(o[p]);return s},_project:function(){var o=new E;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new D(o,o);this._rawPxBounds&&(this._pxBounds=new E([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,c){var p=o[0]instanceof re,_=o.length,k,O;if(p){for(O=[],k=0;k<_;k++)O[k]=this._map.latLngToLayerPoint(o[k]),c.extend(O[k]);s.push(O)}else for(k=0;k<_;k++)this._projectLatlngs(o[k],s,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,p,_,k,O,M,F;for(c=0,_=0,k=this._rings.length;c<k;c++)for(F=this._rings[c],p=0,O=F.length;p<O-1;p++)M=jm(F[p],F[p+1],o,p,!0),M&&(s[_]=s[_]||[],s[_].push(M[0]),(M[1]!==F[p+1]||p===O-2)&&(s[_].push(M[1]),_++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,c=0,p=o.length;c<p;c++)o[c]=Mm(o[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var c,p,_,k,O,M,F=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,k=this._parts.length;c<k;c++)for(M=this._parts[c],p=0,O=M.length,_=O-1;p<O;_=p++)if(!(!s&&p===0)&&Dm(o,M[_],M[p])<=F)return!0;return!1}});function Ow(o,s){return new sr(o,s)}sr._flat=Um;var ui=sr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Zm(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=sr.prototype._convertLatLngs.call(this,o),c=s.length;return c>=2&&s[0]instanceof re&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(o){sr.prototype._setLatLngs.call(this,o),fn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return fn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,c=new D(s,s);if(o=new E(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,_=this._rings.length,k;p<_;p++)k=Wm(this._rings[p],o,!0),k.length&&this._parts.push(k)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,c,p,_,k,O,M,F,G;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(k=0,F=this._parts.length;k<F;k++)for(c=this._parts[k],O=0,G=c.length,M=G-1;O<G;M=O++)p=c[O],_=c[M],p.y>o.y!=_.y>o.y&&o.x<(_.x-p.x)*(o.y-p.y)/(_.y-p.y)+p.x&&(s=!s);return s||sr.prototype._containsPoint.call(this,o,!0)}});function Tw(o,s){return new ui(o,s)}var lr=ar.extend({initialize:function(o,s){v(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=S(o)?o:o.features,c,p,_;if(s){for(c=0,p=s.length;c<p;c++)_=s[c],(_.geometries||_.geometry||_.features||_.coordinates)&&this.addData(_);return this}var k=this.options;if(k.filter&&!k.filter(o))return this;var O=Ks(o,k);return O?(O.feature=Xs(o),O.defaultOptions=O.options,this.resetStyle(O),k.onEachFeature&&k.onEachFeature(o,O),this.addLayer(O)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function Ks(o,s){var c=o.type==="Feature"?o.geometry:o,p=c?c.coordinates:null,_=[],k=s&&s.pointToLayer,O=s&&s.coordsToLatLng||id,M,F,G,se;if(!p&&!c)return null;switch(c.type){case"Point":return M=O(p),qm(k,o,M,s);case"MultiPoint":for(G=0,se=p.length;G<se;G++)M=O(p[G]),_.push(qm(k,o,M,s));return new ar(_);case"LineString":case"MultiLineString":return F=Qs(p,c.type==="LineString"?0:1,O),new sr(F,s);case"Polygon":case"MultiPolygon":return F=Qs(p,c.type==="Polygon"?1:2,O),new ui(F,s);case"GeometryCollection":for(G=0,se=c.geometries.length;G<se;G++){var ve=Ks({geometry:c.geometries[G],type:"Feature",properties:o.properties},s);ve&&_.push(ve)}return new ar(_);case"FeatureCollection":for(G=0,se=c.features.length;G<se;G++){var ke=Ks(c.features[G],s);ke&&_.push(ke)}return new ar(_);default:throw new Error("Invalid GeoJSON object.")}}function qm(o,s,c,p){return o?o(s,c):new Vs(c,p&&p.markersInheritOptions&&p)}function id(o){return new re(o[1],o[0],o[2])}function Qs(o,s,c){for(var p=[],_=0,k=o.length,O;_<k;_++)O=s?Qs(o[_],s-1,c):(c||id)(o[_]),p.push(O);return p}function ad(o,s){return o=$(o),o.alt!==void 0?[g(o.lng,s),g(o.lat,s),g(o.alt,s)]:[g(o.lng,s),g(o.lat,s)]}function Gs(o,s,c,p){for(var _=[],k=0,O=o.length;k<O;k++)_.push(s?Gs(o[k],fn(o[k])?0:s-1,c,p):ad(o[k],p));return!s&&c&&_.push(_[0].slice()),_}function ci(o,s){return o.feature?i({},o.feature,{geometry:s}):Xs(s)}function Xs(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var sd={toGeoJSON:function(o){return ci(this,{type:"Point",coordinates:ad(this.getLatLng(),o)})}};Vs.include(sd),od.include(sd),qs.include(sd),sr.include({toGeoJSON:function(o){var s=!fn(this._latlngs),c=Gs(this._latlngs,s?1:0,!1,o);return ci(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),ui.include({toGeoJSON:function(o){var s=!fn(this._latlngs),c=s&&!fn(this._latlngs[0]),p=Gs(this._latlngs,c?2:s?1:0,!0,o);return s||(p=[p]),ci(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),si.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(o).geometry.coordinates)}),ci(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var c=s==="GeometryCollection",p=[];return this.eachLayer(function(_){if(_.toGeoJSON){var k=_.toGeoJSON(o);if(c)p.push(k.geometry);else{var O=Xs(k);O.type==="FeatureCollection"?p.push.apply(p,O.features):p.push(O)}}}),c?ci(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Km(o,s){return new lr(o,s)}var zw=Km,Js=kn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,c){this._url=o,this._bounds=V(s),v(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(xe(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Xe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&ii(this._image),this},bringToBack:function(){return this._map&&ai(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=V(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Ae("img");if(xe(s,"leaflet-image-layer"),this._zoomAnimated&&xe(s,"leaflet-zoom-animated"),this.options.className&&xe(s,this.options.className),s.onselectstart=h,s.onmousemove=h,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;_o(this._image,c,s)},_reset:function(){var o=this._image,s=new E(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();st(o,s.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){dn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),Rw=function(o,s,c){return new Js(o,s,c)},Qm=Js.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Ae("video");if(xe(s,"leaflet-image-layer"),this._zoomAnimated&&xe(s,"leaflet-zoom-animated"),this.options.className&&xe(s,this.options.className),s.onselectstart=h,s.onmousemove=h,s.onloadeddata=l(this.fire,this,"load"),o){for(var c=s.getElementsByTagName("source"),p=[],_=0;_<c.length;_++)p.push(c[_].src);this._url=c.length>0?p:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var k=0;k<this._url.length;k++){var O=Ae("source");O.src=this._url[k],s.appendChild(O)}}});function Lw(o,s,c){return new Qm(o,s,c)}var Gm=Js.extend({_initImage:function(){var o=this._image=this._url;xe(o,"leaflet-image-layer"),this._zoomAnimated&&xe(o,"leaflet-zoom-animated"),this.options.className&&xe(o,this.options.className),o.onselectstart=h,o.onmousemove=h}});function Aw(o,s,c){return new Gm(o,s,c)}var $n=kn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof re||S(o))?(this._latlng=$(o),v(this,s)):(v(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&dn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&dn(this._container,1),this.bringToFront(),this.options.interactive&&(xe(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(dn(this._container,0),this._removeTimeout=setTimeout(l(Xe,void 0,this._container),200)):Xe(this._container),this.options.interactive&&(ot(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=$(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ii(this._container),this},bringToBack:function(){return this._map&&ai(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof ar){s=null;var c=this._source._layers;for(var p in c)if(c[p]._map){s=c[p];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=Q(this.options.offset),c=this._getAnchor();this._zoomAnimated?st(this._container,o.add(c)):s=s.add(o).add(c);var p=this._containerBottom=-s.y,_=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=p+"px",this._container.style.left=_+"px"}},_getAnchor:function(){return[0,0]}});Oe.include({_initOverlay:function(o,s,c,p){var _=s;return _ instanceof o||(_=new o(p).setContent(s)),c&&_.setLatLng(c),_}}),kn.include({_initOverlay:function(o,s,c,p){var _=c;return _ instanceof o?(v(_,p),_._source=this):(_=s&&!p?s:new o(p,this),_.setContent(c)),_}});var Ys=$n.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,$n.prototype.openOn.call(this,o)},onAdd:function(o){$n.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof zr||this._source.on("preclick",vo))},onRemove:function(o){$n.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof zr||this._source.off("preclick",vo))},getEvents:function(){var o=$n.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Ae("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Ae("div",o+"-content-wrapper",s);if(this._contentNode=Ae("div",o+"-content",c),ma(s),Xc(this._contentNode),be(s,"contextmenu",vo),this._tipContainer=Ae("div",o+"-tip-container",s),this._tip=Ae("div",o+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Ae("a",o+"-close-button",s);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',be(p,"click",function(_){xt(_),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var p=o.offsetHeight,_=this.options.maxHeight,k="leaflet-popup-scrolled";_&&p>_?(s.height=_+"px",xe(o,k)):ot(o,k),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();st(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,s=parseInt(da(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,p=this._containerWidth,_=new D(this._containerLeft,-c-this._containerBottom);_._add(go(this._container));var k=o.layerPointToContainerPoint(_),O=Q(this.options.autoPanPadding),M=Q(this.options.autoPanPaddingTopLeft||O),F=Q(this.options.autoPanPaddingBottomRight||O),G=o.getSize(),se=0,ve=0;k.x+p+F.x>G.x&&(se=k.x+p-G.x+F.x),k.x-se-M.x<0&&(se=k.x-M.x),k.y+c+F.y>G.y&&(ve=k.y+c-G.y+F.y),k.y-ve-M.y<0&&(ve=k.y-M.y),(se||ve)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([se,ve]))}},_getAnchor:function(){return Q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Bw=function(o,s){return new Ys(o,s)};Oe.mergeOptions({closePopupOnClick:!0}),Oe.include({openPopup:function(o,s,c){return this._initOverlay(Ys,o,s,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),kn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(Ys,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof ar||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){yo(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof zr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var el=$n.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){$n.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){$n.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=$n.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ae("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,c,p=this._map,_=this._container,k=p.latLngToContainerPoint(p.getCenter()),O=p.layerPointToContainerPoint(o),M=this.options.direction,F=_.offsetWidth,G=_.offsetHeight,se=Q(this.options.offset),ve=this._getAnchor();M==="top"?(s=F/2,c=G):M==="bottom"?(s=F/2,c=0):M==="center"?(s=F/2,c=G/2):M==="right"?(s=0,c=G/2):M==="left"?(s=F,c=G/2):O.x<k.x?(M="right",s=0,c=G/2):(M="left",s=F+(se.x+ve.x)*2,c=G/2),o=o.subtract(Q(s,c,!0)).add(se).add(ve),ot(_,"leaflet-tooltip-right"),ot(_,"leaflet-tooltip-left"),ot(_,"leaflet-tooltip-top"),ot(_,"leaflet-tooltip-bottom"),xe(_,"leaflet-tooltip-"+M),st(_,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&dn(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return Q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Nw=function(o,s){return new el(o,s)};Oe.include({openTooltip:function(o,s,c){return this._initOverlay(el,o,s,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),kn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(el,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof ar||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(be(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),be(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,c,p;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),p=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(s)}});var Xm=li.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(js(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=Q(c.bgPos);s.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Iw(o){return new Xm(o)}li.Default=va;var ya=kn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:de.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){v(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),Xe(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ii(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ai(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof D?o:new D(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,c=-o(-1/0,1/0),p=0,_=s.length,k;p<_;p++)k=s[p].style.zIndex,s[p]!==this._container&&k&&(c=o(c,+k));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!de.ielt9){dn(this._container,this.options.opacity);var o=+new Date,s=!1,c=!1;for(var p in this._tiles){var _=this._tiles[p];if(!(!_.current||!_.loaded)){var k=Math.min(1,(o-_.loaded)/200);dn(_.el,k),k<1?s=!0:(_.active?c=!0:this._onOpaqueTile(_),_.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(oe(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this))}},_onOpaqueTile:h,_initContainer:function(){this._container||(this._container=Ae("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=s-Math.abs(o-c),this._onUpdateLevel(c)):(Xe(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[o],_=this._map;return p||(p=this._levels[o]={},p.el=Ae("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=s,p.origin=_.project(_.unproject(_.getPixelOrigin()),o).round(),p.zoom=o,this._setZoomTransform(p,_.getCenter(),_.getZoom()),h(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:h,_onRemoveLevel:h,_onCreateLevel:h,_pruneTiles:function(){if(this._map){var o,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var p=s.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)Xe(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,c,p){var _=Math.floor(o/2),k=Math.floor(s/2),O=c-1,M=new D(+_,+k);M.z=+O;var F=this._tileCoordsToKey(M),G=this._tiles[F];return G&&G.active?(G.retain=!0,!0):(G&&G.loaded&&(G.retain=!0),O>p?this._retainParent(_,k,O,p):!1)},_retainChildren:function(o,s,c,p){for(var _=2*o;_<2*o+2;_++)for(var k=2*s;k<2*s+2;k++){var O=new D(_,k);O.z=c+1;var M=this._tileCoordsToKey(O),F=this._tiles[M];if(F&&F.active){F.retain=!0;continue}else F&&F.loaded&&(F.retain=!0);c+1<p&&this._retainChildren(_,k,c+1,p)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,c,p){var _=Math.round(s);this.options.maxZoom!==void 0&&_>this.options.maxZoom||this.options.minZoom!==void 0&&_<this.options.minZoom?_=void 0:_=this._clampZoom(_);var k=this.options.updateWhenZooming&&_!==this._tileZoom;(!p||k)&&(this._tileZoom=_,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),_!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,s)},_setZoomTransform:function(o,s,c){var p=this._map.getZoomScale(c,o.zoom),_=o.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(s,c)).round();de.any3d?_o(o.el,_,p):st(o.el,_)},_resetGrid:function(){var o=this._map,s=o.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,_=this._map.getPixelWorldBounds(this._tileZoom);_&&(this._globalTileRange=this._pxBoundsToTileRange(_)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],p).x/c.x),Math.ceil(o.project([0,s.wrapLng[1]],p).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],p).y/c.x),Math.ceil(o.project([s.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),p=s.getZoomScale(c,this._tileZoom),_=s.project(o,this._tileZoom).floor(),k=s.getSize().divideBy(p*2);return new E(_.subtract(k),_.add(k))},_update:function(o){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(o),_=this._pxBoundsToTileRange(p),k=_.getCenter(),O=[],M=this.options.keepBuffer,F=new E(_.getBottomLeft().subtract([M,-M]),_.getTopRight().add([M,-M]));if(!(isFinite(_.min.x)&&isFinite(_.min.y)&&isFinite(_.max.x)&&isFinite(_.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var G in this._tiles){var se=this._tiles[G].coords;(se.z!==this._tileZoom||!F.contains(new D(se.x,se.y)))&&(this._tiles[G].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var ve=_.min.y;ve<=_.max.y;ve++)for(var ke=_.min.x;ke<=_.max.x;ke++){var pn=new D(ke,ve);if(pn.z=this._tileZoom,!!this._isValidTile(pn)){var xo=this._tiles[this._tileCoordsToKey(pn)];xo?xo.current=!0:O.push(pn)}}if(O.sort(function(Rr,ld){return Rr.distanceTo(k)-ld.distanceTo(k)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var nl=document.createDocumentFragment();for(ke=0;ke<O.length;ke++)this._addTile(O[ke],nl);this._level.el.appendChild(nl)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!s.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(o);return V(this.options.bounds).overlaps(p)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,c=this.getTileSize(),p=o.scaleBy(c),_=p.add(c),k=s.unproject(p,o.z),O=s.unproject(_,o.z);return[k,O]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),c=new R(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),c=new D(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(o){var s=this._tiles[o];s&&(Xe(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){xe(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=h,o.onmousemove=h,de.ielt9&&this.options.opacity<1&&dn(o,this.options.opacity)},_addTile:function(o,s){var c=this._getTilePos(o),p=this._tileCoordsToKey(o),_=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(_),this.createTile.length<2&&Y(l(this._tileReady,this,o,null,_)),st(_,c),this._tiles[p]={el:_,coords:o,current:!0},s.appendChild(_),this.fire("tileloadstart",{tile:_,coords:o})},_tileReady:function(o,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:o});var p=this._tileCoordsToKey(o);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(dn(c.el,0),oe(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(xe(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),de.ielt9||!this._map._fadeAnimated?Y(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new D(this._wrapX?m(o.x,this._wrapX):o.x,this._wrapY?m(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new E(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function Mw(o){return new ya(o)}var di=ya.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=v(this,s),s.detectRetina&&de.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var c=document.createElement("img");return be(c,"load",l(this._tileOnLoad,this,s,c)),be(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var s={r:de.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,i(s,this.options))},_tileOnLoad:function(o,s){de.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,c){var p=this.options.errorTileUrl;p&&s.getAttribute("src")!==p&&(s.src=p),o(c,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(o=s-o),o+p},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=h,s.onerror=h,!s.complete)){s.src=z;var c=this._tiles[o].coords;Xe(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",z),ya.prototype._removeTile.call(this,o)},_tileReady:function(o,s,c){if(!(!this._map||c&&c.getAttribute("src")===z))return ya.prototype._tileReady.call(this,o,s,c)}});function Jm(o,s){return new di(o,s)}var Ym=di.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var c=i({},this.defaultWmsParams);for(var p in s)p in this.options||(c[p]=s[p]);s=v(this,s);var _=s.detectRetina&&de.retina?2:1,k=this.getTileSize();c.width=k.x*_,c.height=k.y*_,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,di.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),c=this._crs,p=I(c.project(s[0]),c.project(s[1])),_=p.min,k=p.max,O=(this._wmsVersion>=1.3&&this._crs===Hm?[_.y,_.x,k.y,k.x]:[_.x,_.y,k.x,k.y]).join(","),M=di.prototype.getTileUrl.call(this,o);return M+P(this.wmsParams,M,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function Dw(o,s){return new Ym(o,s)}di.WMS=Ym,Jm.wms=Dw;var ur=kn.extend({options:{padding:.1},initialize:function(o){v(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&xe(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var c=this._map.getZoomScale(s,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),_=this._map.project(this._center,s),k=p.multiplyBy(-c).add(_).subtract(this._map._getNewPixelOrigin(o,s));de.any3d?_o(this._container,k,c):st(this._container,k)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new E(c,c.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),e_=ur.extend({options:{tolerance:0},getEvents:function(){var o=ur.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ur.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");be(o,"mousemove",this._onMouseMove,this),be(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),be(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){oe(this._redrawRequest),delete this._ctx,Xe(this._container),We(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ur.prototype._update.call(this);var o=this._bounds,s=this._container,c=o.getSize(),p=de.retina?2:1;st(s,o.min),s.width=p*c.x,s.height=p*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",de.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){ur.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,c=s.next,p=s.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),c=[],p,_;for(_=0;_<s.length;_++){if(p=Number(s[_]),isNaN(p))return;c.push(p)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||Y(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new E,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)o=p.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var c,p,_,k,O=o._parts,M=O.length,F=this._ctx;if(M){for(F.beginPath(),c=0;c<M;c++){for(p=0,_=O[c].length;p<_;p++)k=O[c][p],F[p?"lineTo":"moveTo"](k.x,k.y);s&&F.closePath()}this._fillStroke(F,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,c=this._ctx,p=Math.max(Math.round(o._radius),1),_=(Math.max(Math.round(o._radiusY),1)||p)/p;_!==1&&(c.save(),c.scale(1,_)),c.beginPath(),c.arc(s.x,s.y/_,p,0,Math.PI*2,!1),_!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,s){var c=s.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),c,p,_=this._drawFirst;_;_=_.next)c=_.layer,c.options.interactive&&c._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(ot(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var c,p,_=this._drawFirst;_;_=_.next)c=_.layer,c.options.interactive&&c._containsPoint(s)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(o),p&&(xe(this._container,"leaflet-interactive"),this._fireEvent([p],o,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,c){this._map._fireDOMEvent(s,c||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function t_(o){return de.canvas?new e_(o):null}var ba=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Fw={_initContainer:function(){this._container=Ae("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ur.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=ba("shape");xe(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=ba("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;Xe(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,c=o._fill,p=o.options,_=o._container;_.stroked=!!p.stroke,_.filled=!!p.fill,p.stroke?(s||(s=o._stroke=ba("stroke")),_.appendChild(s),s.weight=p.weight+"px",s.color=p.color,s.opacity=p.opacity,p.dashArray?s.dashStyle=S(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=p.lineCap.replace("butt","flat"),s.joinstyle=p.lineJoin):s&&(_.removeChild(s),o._stroke=null),p.fill?(c||(c=o._fill=ba("fill")),_.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(_.removeChild(c),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),c=Math.round(o._radius),p=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){ii(o._container)},_bringToBack:function(o){ai(o._container)}},tl=de.vml?ba:Nt,xa=ur.extend({_initContainer:function(){this._container=tl("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=tl("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Xe(this._container),We(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ur.prototype._update.call(this);var o=this._bounds,s=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),st(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=tl("path");o.options.className&&xe(s,o.options.className),o.options.interactive&&xe(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){Xe(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,c=o.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,It(o._parts,s))},_updateCircle:function(o){var s=o._point,c=Math.max(Math.round(o._radius),1),p=Math.max(Math.round(o._radiusY),1)||c,_="a"+c+","+p+" 0 1,0 ",k=o._empty()?"M0 0":"M"+(s.x-c)+","+s.y+_+c*2+",0 "+_+-c*2+",0 ";this._setPath(o,k)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){ii(o._path)},_bringToBack:function(o){ai(o._path)}});de.vml&&xa.include(Fw);function n_(o){return de.svg||de.vml?new xa(o):null}Oe.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&t_(o)||n_(o)}});var r_=ui.extend({initialize:function(o,s){ui.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=V(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function jw(o,s){return new r_(o,s)}xa.create=tl,xa.pointsToPath=It,lr.geometryToLayer=Ks,lr.coordsToLatLng=id,lr.coordsToLatLngs=Qs,lr.latLngToCoords=ad,lr.latLngsToCoords=Gs,lr.getFeature=ci,lr.asFeature=Xs,Oe.mergeOptions({boxZoom:!0});var o_=Un.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){be(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){We(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Xe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),fa(),Wc(),this._startPoint=this._map.mouseEventToContainerPoint(o),be(document,{contextmenu:yo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Ae("div","leaflet-zoom-box",this._container),xe(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new E(this._point,this._startPoint),c=s.getSize();st(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Xe(this._box),ot(this._container,"leaflet-crosshair")),pa(),Zc(),We(document,{contextmenu:yo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new R(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Oe.addInitHook("addHandler","boxZoom",o_),Oe.mergeOptions({doubleClickZoom:!0});var i_=Un.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,c=s.getZoom(),p=s.options.zoomDelta,_=o.originalEvent.shiftKey?c-p:c+p;s.options.doubleClickZoom==="center"?s.setZoom(_):s.setZoomAround(o.containerPoint,_)}});Oe.addInitHook("addHandler","doubleClickZoom",i_),Oe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var a_=Un.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new Tr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}xe(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ot(this._map._container,"leaflet-grab"),ot(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=V(this._map.options.maxBounds);this._offsetLimit=I(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,_=(p-s+c)%o+s-c,k=(p+s+c)%o-s-c,O=Math.abs(_+c)<Math.abs(k+c)?_:k;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(o){var s=this._map,c=s.options,p=!c.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),p)s.fire("moveend");else{this._prunePositions(+new Date);var _=this._lastPos.subtract(this._positions[0]),k=(this._lastTime-this._times[0])/1e3,O=c.easeLinearity,M=_.multiplyBy(O/k),F=M.distanceTo([0,0]),G=Math.min(c.inertiaMaxSpeed,F),se=M.multiplyBy(G/F),ve=G/(c.inertiaDeceleration*O),ke=se.multiplyBy(-ve/2).round();!ke.x&&!ke.y?s.fire("moveend"):(ke=s._limitOffset(ke,s.options.maxBounds),Y(function(){s.panBy(ke,{duration:ve,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});Oe.addInitHook("addHandler","dragging",a_),Oe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var s_=Un.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),be(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),We(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,c=o.scrollTop||s.scrollTop,p=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},c=this.keyCodes,p,_;for(p=0,_=c.left.length;p<_;p++)s[c.left[p]]=[-1*o,0];for(p=0,_=c.right.length;p<_;p++)s[c.right[p]]=[o,0];for(p=0,_=c.down.length;p<_;p++)s[c.down[p]]=[0,o];for(p=0,_=c.up.length;p<_;p++)s[c.up[p]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},c=this.keyCodes,p,_;for(p=0,_=c.zoomIn.length;p<_;p++)s[c.zoomIn[p]]=o;for(p=0,_=c.zoomOut.length;p<_;p++)s[c.zoomOut[p]]=-o},_addHooks:function(){be(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){We(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,c=this._map,p;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[s],o.shiftKey&&(p=Q(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(Q(p),c.options.maxBounds)),c.options.worldCopyJump){var _=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(_)}else c.panBy(p)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;yo(o)}}});Oe.addInitHook("addHandler","keyboard",s_),Oe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var l_=Un.extend({addHooks:function(){be(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){We(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=Lm(o),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),p),yo(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),_=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,k=c?Math.ceil(_/c)*c:_,O=o._limitZoom(s+(this._delta>0?k:-k))-s;this._delta=0,this._startTime=null,O&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+O):o.setZoomAround(this._lastMousePos,s+O))}});Oe.addInitHook("addHandler","scrollWheelZoom",l_);var Uw=600;Oe.mergeOptions({tapHold:de.touchNative&&de.safari&&de.mobile,tapTolerance:15});var u_=Un.extend({addHooks:function(){be(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){We(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new D(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(be(document,"touchend",xt),be(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Uw),be(document,"touchend touchcancel contextmenu",this._cancel,this),be(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){We(document,"touchend",xt),We(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),We(document,"touchend touchcancel contextmenu",this._cancel,this),We(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new D(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Oe.addInitHook("addHandler","tapHold",u_),Oe.mergeOptions({touchZoom:de.touch,bounceAtZoomLimits:!0});var c_=Un.extend({addHooks:function(){xe(this._map._container,"leaflet-touch-zoom"),be(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ot(this._map._container,"leaflet-touch-zoom"),We(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),be(document,"touchmove",this._onTouchMove,this),be(document,"touchend touchcancel",this._onTouchEnd,this),xt(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]),_=c.distanceTo(p)/this._startDist;if(this._zoom=s.getScaleZoom(_,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&_<1||this._zoom>s.getMaxZoom()&&_>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,_===1)return}else{var k=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(_===1&&k.x===0&&k.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(k),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),oe(this._animRequest);var O=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Y(O,this,!0),xt(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,oe(this._animRequest),We(document,"touchmove",this._onTouchMove,this),We(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Oe.addInitHook("addHandler","touchZoom",c_),Oe.BoxZoom=o_,Oe.DoubleClickZoom=i_,Oe.Drag=a_,Oe.Keyboard=s_,Oe.ScrollWheelZoom=l_,Oe.TapHold=u_,Oe.TouchZoom=c_,n.Bounds=E,n.Browser=de,n.CRS=ee,n.Canvas=e_,n.Circle=od,n.CircleMarker=qs,n.Class=ne,n.Control=wn,n.DivIcon=Xm,n.DivOverlay=$n,n.DomEvent=iw,n.DomUtil=rw,n.Draggable=Tr,n.Evented=ae,n.FeatureGroup=ar,n.GeoJSON=lr,n.GridLayer=ya,n.Handler=Un,n.Icon=li,n.ImageOverlay=Js,n.LatLng=re,n.LatLngBounds=R,n.Layer=kn,n.LayerGroup=si,n.LineUtil=gw,n.Map=Oe,n.Marker=Vs,n.Mixin=fw,n.Path=zr,n.Point=D,n.PolyUtil=vw,n.Polygon=ui,n.Polyline=sr,n.Popup=Ys,n.PosAnimation=Am,n.Projection=yw,n.Rectangle=r_,n.Renderer=ur,n.SVG=xa,n.SVGOverlay=Gm,n.TileLayer=di,n.Tooltip=el,n.Transformation=Be,n.Util=ue,n.VideoOverlay=Qm,n.bind=l,n.bounds=I,n.canvas=t_,n.circle=Ew,n.circleMarker=Cw,n.control=_a,n.divIcon=Iw,n.extend=i,n.featureGroup=kw,n.geoJSON=Km,n.geoJson=zw,n.gridLayer=Mw,n.icon=Sw,n.imageOverlay=Rw,n.latLng=$,n.latLngBounds=V,n.layerGroup=ww,n.map=aw,n.marker=Pw,n.point=Q,n.polygon=Tw,n.polyline=Ow,n.popup=Bw,n.rectangle=jw,n.setOptions=v,n.stamp=d,n.svg=n_,n.svgOverlay=Aw,n.tileLayer=Jm,n.tooltip=Nw,n.transformation=Ee,n.version=r,n.videoOverlay=Lw;var $w=window.L;n.noConflict=function(){return window.L=$w,this},window.L=n})})(BO,_p);var Wd,gp={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Wd={get exports(){return gp},set exports(e){gp=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Wd.exports?(t.default=t,Wd.exports=t):window.classNames=t}();var wv,kv,Sv,Di=gp;function NO(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=T.useState(t(e)),i=()=>{r(t(e))};return T.useEffect(()=>{const a=window.matchMedia(e);return i(),a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[e]),n}function vp(){return vp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vp.apply(this,arguments)}var Pv,Cv,Ev,IO=function(e){return T.createElement("svg",vp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),wv||(wv=T.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),kv||(kv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),Sv||(Sv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function yp(){return yp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yp.apply(this,arguments)}var MO=function(e){return T.createElement("svg",yp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),Pv||(Pv=T.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),Cv||(Cv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),Ev||(Ev=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function Pe(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Wr,Cn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Pe(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Wr||(Wr={}));const DO=({size:e,variant:t})=>{switch(t){case Wr.Info:case Wr.Error:case Wr.Warning:return Z.createElement(IO,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Wr.Success:return Z.createElement(MO,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},FO=({children:e})=>Z.createElement("div",{className:Di(Cn["panel__pointer-position"])},e),jO=({renderIcon:e=DO,title:t,children:n,variant:r=Wr.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=FO})=>{const d=(({forceMobileLayout:m})=>{const h=NO(`(max-width: ${pO})`);return!!m||h})({forceMobileLayout:l}),f=d?dO:fO;return Z.createElement("div",{className:Di(Cn.panel,{[Cn["panel--mobile-layout"]]:d})},i&&u({children:Z.createElement("div",{"data-testid":"panel-pointer",className:Di(Cn.panel__pointer,Cn[`panel__pointer--${r}`])})}),Z.createElement("div",{"data-testid":"panel-content-wrapper",className:Di(Cn["panel__content-wrapper"],Cn[`panel__content-wrapper--${r}`])},a&&Z.createElement("div",{"data-testid":"panel-icon-wrapper",className:Cn["panel__icon-wrapper"]},e({size:f,variant:r})),Z.createElement("div",{className:Cn.panel__content},t&&Z.createElement("h2",{className:Cn.panel__header},t),Z.createElement("div",{className:Cn.panel__body},n))))};Pe(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);Pe(`.CircularProgress-module_svg__TUYPH {
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
`);Pe(`/**
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
`);Pe(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}
`);T.createContext(void 0);Pe(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
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
`);Pe(`.ToggleButton-module_toggle-button__g4lb- {
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
`);var Ov;(function(e){e.Primary="primary",e.Secondary="secondary"})(Ov||(Ov={}));T.createContext(void 0);Pe(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);Pe(`.AccordionHeader-module_accordion-header__QlYjQ {
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
`);Pe(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);function Dx(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const Tv=e=>{var{svgIconComponent:t}=e,n=Dx(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};var bp,xp,wp,Hn={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Pe(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(bp||(bp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(xp||(xp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(wp||(wp={}));var Ou,Tu;T.forwardRef((e,t)=>{var{children:n,color:r=xp.Primary,variant:i=wp.Filled,size:a=bp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:h}=e,g=Dx(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},g,{ref:t,className:Di(Hn["altinn-button"],Hn[`altinn-button--${a}`],Hn[`altinn-button--${i}`],Hn[`altinn-button--${r}`],Hn[`altinn-button--${i}--${r}`],{[Hn["altinn-button--full-width"]]:l},{[Hn["altinn-button--dashed-border"]]:u},{[Hn["altinn-button--only-icon"]]:!n&&f},h),type:m}),f&&d==="left"&&Z.createElement(Tv,{svgIconComponent:f,className:Hn.icon}),n,f&&d==="right"&&Z.createElement(Tv,{svgIconComponent:f,className:Hn.icon}))});(function(e){e.Primary="primary",e.Success="success"})(Ou||(Ou={})),function(e){e.Small="small",e.Medium="medium"}(Tu||(Tu={}));const UO=T.createContext({color:Ou.Primary,size:Tu.Medium});var $O="Page-module_page__THNNc";Pe(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const WO=({children:e,color:t=Ou.Primary,size:n=Tu.Medium})=>Z.createElement("div",{className:$O},Z.createElement(UO.Provider,{value:{color:t,size:n}},e));Pe(`.PageHeader-module_page-header__94GS1 {
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
`);var ZO={"page-content":"PageContent-module_page-content__-sHWi"};Pe(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const zv=({children:e})=>Z.createElement("div",{className:Di(ZO["page-content"])},e);var kp;Pe(`.List-module_list__9aWGq {
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
`),function(e){e.Solid="solid",e.Dashed="dashed"}(kp||(kp={}));T.createContext({borderStyle:kp.Solid});Pe(`.ListItem-module_list-item__OIENi {
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
`);var Rv,Lv,Av;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(Rv||(Rv={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Lv||(Lv={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Av||(Av={}));Pe(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);Pe(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Pe(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var Sp,Bv;Pe(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(Sp||(Sp={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(Bv||(Bv={}));T.createContext(void 0);T.createContext({variantStandard:Sp.Body});Pe(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);Pe(`.TableRow-module_TableRow__3GK6I {
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
`);Pe(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);Pe(`.TableCell-module_header-table-cell__NOs4b {
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
`);Pe(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var Nv;Pe(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Nv||(Nv={}));var Iv;Pe(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Iv||(Iv={}));Pe(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);Pe(`.TextArea-module_altinn-TextArea__lzLj9 {
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
`);var Mv;Pe(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Mv||(Mv={}));var Dv;Pe(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Dv||(Dv={}));Pe(`.Pagination-module_pagination-icon__zVOLT {
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
`);Pe(`.MultiSelectItem-module_altinn-multi-select-item__fb2Ov {
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
`);Pe(`.Select-module_altinn-select__678hU {
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
`);Pe(`.Tabs-module_altinn-tabs__YJ7fE {
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
`);var Fv,jv;Pe(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Fv||(Fv={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(jv||(jv={}));let Uv=0;function HO(e){const[t,n]=T.useState(e),r=e||t;return T.useEffect(()=>{t==null&&(Uv+=1,n(`aksel-icon-${Uv}`))},[t]),r}const $v=Z["useId"];function Fx(e){var t;if($v!==void 0){const n=$v();return e??n.replace(/(:)/g,"")}return(t=HO(e))!==null&&t!==void 0?t:""}var VO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const qO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=VO(e,["title","titleId"]);let a=Fx();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),KO=qO;var QO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const GO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=QO(e,["title","titleId"]);let a=Fx();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),XO=GO;function Yo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Zd,jx={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Zd=jx,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Zd.exports?(t.default=t,Zd.exports=t):window.classNames=t}();var St=jx.exports;const Pp=e=>{var{svgIconComponent:t}=e,n=Yo(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};function Fe(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Pp.displayName="SvgIcon";var Cp,Ep,Op,dr={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};Fe(`.Button-module_button__2ZuB7 {
    --border-radius: 3px;
    --button-size: var(--component-button-size-height-small);
    --button-vertical-padding: var(--component-button-space-padding-x-small);
    --font-and-icon-color: var(--component-button-filled-color-text-all);
    --icon-size: var(--component-button-size-icon-small);

    all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
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

.Button-module_button__2ZuB7:focus-visible {
    outline: var(--semantic-tab_focus-outline-color) solid
    var(--semantic-tab_focus-outline-width);
    outline-offset: var(--semantic-tab_focus-outline-offset);
}

.Button-module_button__2ZuB7:focus:not(:focus-visible) {
    outline: none;
}

.Button-module_button__2ZuB7:disabled, .Button-module_button__2ZuB7[aria-disabled="true"] {
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
    padding: 0.5rem;
}

/* Filled button colors */
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {
    background: var(--component-button-filled-primary-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled="true"]):not(:disabled):hover {
    background: var(--component-button-filled-primary-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled="true"]):not(:disabled):active {
    background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {
    background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled="true"]):not(:disabled):hover {
    background: var(--colors-blue-800);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled="true"]):not(:disabled):active {
    background: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {
    background: var(--component-button-filled-success-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled="true"]):not(:disabled):hover {
    background: var(--component-button-filled-success-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled="true"]):not(:disabled):active {
    background: var(--component-button-filled-success-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {
    background: var(--component-button-filled-danger-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled="true"]):not(:disabled):hover {
    background: var(--component-button-filled-danger-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled="true"]):not(:disabled):active {
    background: var(--colors-red-800);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {
    --font-and-icon-color: var(--colors-blue-900);
    background: var(--colors-white);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-blue-900);
    background: rgba(255, 255, 255, 0.9);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--colors-white);
    background: rgba(255, 255, 255, 0.1);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:focus-visible {
    outline-color: var(--colors-white);
}

/* Outline button colors */
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {
    --font-and-icon-color: var(--component-button-outline-primary-color-text-default);
    border-color: var(--component-button-outline-primary-color-border-default);
    background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-blue-800);
    background: var(--component-button-outline-primary-color-background-hover);
    border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--component-button-outline-primary-color-text-pressed);
    background: var(--component-button-outline-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {
    --font-and-icon-color: var(--colors-blue-900);
    background: var(--colors-white);
    border-color: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled="true"]):not(:disabled):hover {
    background: var(--colors-blue-100);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--colors-white);
    background: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {
    --font-and-icon-color: var(--colors-green-700);
    background: var(--colors-white);
    border-color: var(--colors-green-700);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-green-800);
    background: var(--colors-green-200);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--colors-white);
    background: var(--colors-green-700);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {
    --font-and-icon-color: var(--colors-red-500);
    background: var(--colors-white);
    border-color: var(--colors-red-500);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-red-700);
    background: var(--colors-red-100);
    border-color: var(--colors-red-700);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--colors-white);
    background: var(--colors-red-500);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {
    --font-and-icon-color: var(--colors-white);
    border-color: var(--colors-white);
    background: transparent;
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled="true"]):not(:disabled):hover {
    background: rgba(255, 255, 255, 0.1);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--colors-blue-900);
    background: var(--colors-white);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:focus-visible {
    outline-color: var(--colors-white);
}

/* Quiet button colors */
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {
    --font-and-icon-color: var(--component-button-quiet-primary-color-text-default);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-blue-800);
    background: var(--component-button-quiet-primary-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--component-button-filled-color-text-all);
    background: var(--component-button-quiet-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {
    --font-and-icon-color: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled="true"]):not(:disabled):hover {
    background: var(--colors-grey-300);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--component-button-filled-color-text-all);
    background: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {
    --font-and-icon-color: var(--colors-green-700);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-green-800);
    background: var(--colors-green-200);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--component-button-filled-color-text-all);
    background: var(--colors-green-900);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {
    --font-and-icon-color: var(--colors-red-600);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-red-800);
    background: var(--colors-red-100);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--component-button-filled-color-text-all);
    background: var(--colors-red-800);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {
    --font-and-icon-color: var(--colors-white);
    background: transparent;
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled="true"]):not(:disabled):hover {
    --font-and-icon-color: var(--colors-blue-900);
    background: rgba(255, 255, 255, 0.9);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled="true"]):not(:disabled):active {
    --font-and-icon-color: var(--colors-blue-900);
    background: var(--colors-white);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:focus-visible {
    outline-color: var(--colors-white);
}`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Cp||(Cp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Ep||(Ep={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Op||(Op={}));const Ux=(e,t)=>{var{children:n,color:r=Ep.Primary,variant:i=Op.Filled,size:a=Cp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:h}=e,g=Yo(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},g,{ref:t,className:St(dr.button,dr[a],dr[i],dr[r],{[dr.fullWidth]:l},{[dr.dashedBorder]:u},{[dr.onlyIcon]:!n&&f},h),type:m}),f&&d==="left"&&Z.createElement(Pp,{svgIconComponent:f,className:dr.icon}),n,f&&d==="right"&&Z.createElement(Pp,{svgIconComponent:f,className:dr.icon}))};Ux.displayName="Button";T.forwardRef(Ux);var JO="ErrorMessage-module_errorMessageWrapper__rSdCu";Fe(`.ErrorMessage-module_errorMessageWrapper__rSdCu {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);const $x=({id:e,children:t,ariaLabel:n})=>Z.createElement("div",{"aria-label":n,className:JO,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Wv(e,t){T.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function Hd(e,t){T.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function Zv(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}$x.displayName="ErrorMessage";const vs=(e,t)=>{const n=T.useRef(!0);T.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function Wx(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Zx(e){return e.length===new Set(e).size}var YO="Tabs-module_tabs__QzIkz",eT="Tabs-module_tablist__WR6ag",tT="Tabs-module_tab__IdDYc",nT="Tabs-module_selected__TxfYv",rT="Tabs-module_divider__-r5Cd",oT="Tabs-module_tabpanel__0vR1c";Fe(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

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
`);const Hv=e=>e.replace(/\s/,"_"),Hx=({activeTab:e,items:t,onChange:n})=>{const r=T.useId(),i=t.map(({name:v,content:P,value:y,tabId:b,panelId:S})=>{const C=y??v;return{name:v,content:P,value:C,tabId:b??r+Hv(C)+"-tab",panelId:S??r+Hv(C)+"-panel"}});if(!Zx(i.map(({value:v})=>v)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(v=>v.value===e))throw Error("The given active tab value must exist in the list of items.");const a=v=>i.findIndex(P=>P.value===v),l=e??i[0].value,[u,d]=T.useState(l),[f,m]=T.useState(a(l));T.useEffect(()=>d(l),[l]);const h=T.useRef(null),g=i.length-1;vs(()=>{var v;(v=h.current)===null||v===void 0||v.querySelectorAll('[role="tab"]')[f].focus()},[f]);const x=v=>{u!==v&&n&&n(v),d(v),m(a(v))},w=v=>P=>{switch(P.key){case"ArrowRight":f!==void 0&&m(f===g?0:f+1);break;case"ArrowLeft":f!==void 0&&m(f===0?g:f-1);break;case"Space":x(v)}};return Z.createElement("div",{className:YO},Z.createElement("div",{className:eT,ref:h,role:"tablist"},i.map((v,P)=>{const y=v.value===u;return Z.createElement("button",{"aria-controls":v.panelId,"aria-selected":y,className:St(tT,y&&nT),id:v.tabId,key:v.value,onClick:()=>x(v.value),onKeyDown:w(v.value),role:"tab",tabIndex:f===P?0:-1},v.name)})),Z.createElement("hr",{className:rT}),i.map(v=>Z.createElement("div",{className:oT,"aria-labelledby":v.tabId,hidden:v.value!==u,id:v.panelId,key:v.panelId,role:"tabpanel"},v.content)))};function ys(e){return e.split("-")[1]}function em(e){return e==="y"?"height":"width"}function Fo(e){return e.split("-")[0]}function Ns(e){return["top","bottom"].includes(Fo(e))?"x":"y"}function Vv(e,t,n){let{reference:r,floating:i}=e;const a=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,u=Ns(t),d=em(u),f=r[d]/2-i[d]/2,m=u==="x";let h;switch(Fo(t)){case"top":h={x:a,y:r.y-i.height};break;case"bottom":h={x:a,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:l};break;case"left":h={x:r.x-i.width,y:l};break;default:h={x:r.x,y:r.y}}switch(ys(t)){case"start":h[u]-=f*(n&&m?-1:1);break;case"end":h[u]+=f*(n&&m?-1:1)}return h}Hx.displayName="Tabs";function Vx(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Tp(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function qx(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:g=!1,padding:x=0}=t,w=Vx(x),v=u[g?h==="floating"?"reference":"floating":h],P=Tp(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(v)))==null||n?v:v.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:m,strategy:d})),y=h==="floating"?{...l.floating,x:r,y:i}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},C=Tp(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:d}):y);return{top:(P.top-C.top+w.top)/S.y,bottom:(C.bottom-P.bottom+w.bottom)/S.y,left:(P.left-C.left+w.left)/S.x,right:(C.right-P.right+w.right)/S.x}}const iT=Math.min,aT=Math.max;function zp(e,t,n){return aT(e,iT(t,n))}const qv=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:i,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const f=Vx(r),m={x:i,y:a},h=Ns(l),g=em(h),x=await d.getDimensions(n),w=h==="y"?"top":"left",v=h==="y"?"bottom":"right",P=u.reference[g]+u.reference[h]-m[h]-u.floating[g],y=m[h]-u.reference[h],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let S=b?h==="y"?b.clientHeight||0:b.clientWidth||0:0;S===0&&(S=u.floating[g]);const C=P/2-y/2,z=f[w],N=S-x[g]-f[v],A=S/2-x[g]/2+C,j=zp(z,A,N),K=ys(l)!=null&&A!=j&&u.reference[g]/2-(A<z?f[w]:f[v])-x[g]/2<0;return{[h]:m[h]-(K?A<z?z-A:N-A:0),data:{[h]:j,centerOffset:A-j}}}}),sT={left:"right",right:"left",bottom:"top",top:"bottom"};function kl(e){return e.replace(/left|right|bottom|top/g,t=>sT[t])}const lT={start:"end",end:"start"};function Vd(e){return e.replace(/start|end/g,t=>lT[t])}const uT=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:w=!0,...v}=e,P=Fo(r),y=Fo(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=h||(y||!w?[kl(l)]:function(Y){const oe=kl(Y);return[Vd(Y),oe,Vd(oe)]}(l));h||x==="none"||S.push(...function(Y,oe,ue,ne){const pe=ys(Y);let B=function(ae,D,J){const Q=["left","right"],E=["right","left"],I=["top","bottom"],R=["bottom","top"];switch(ae){case"top":case"bottom":return J?D?E:Q:D?Q:E;case"left":case"right":return D?I:R;default:return[]}}(Fo(Y),ue==="start",ne);return pe&&(B=B.map(ae=>ae+"-"+pe),oe&&(B=B.concat(B.map(Vd)))),B}(l,w,x,b));const C=[l,...S],z=await qx(t,v),N=[];let A=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&N.push(z[P]),m){const{main:Y,cross:oe}=function(ue,ne,pe){pe===void 0&&(pe=!1);const B=ys(ue),ae=Ns(ue),D=em(ae);let J=ae==="x"?B===(pe?"end":"start")?"right":"left":B==="start"?"bottom":"top";return ne.reference[D]>ne.floating[D]&&(J=kl(J)),{main:J,cross:kl(J)}}(r,a,b);N.push(z[Y],z[oe])}if(A=[...A,{placement:r,overflows:N}],!N.every(Y=>Y<=0)){var j,K;const Y=(((j=i.flip)==null?void 0:j.index)||0)+1,oe=C[Y];if(oe)return{data:{index:Y,overflows:A},reset:{placement:oe}};let ue=(K=A.filter(ne=>ne.overflows[0]<=0).sort((ne,pe)=>ne.overflows[1]-pe.overflows[1])[0])==null?void 0:K.placement;if(!ue)switch(g){case"bestFit":{var W;const ne=(W=A.map(pe=>[pe.placement,pe.overflows.filter(B=>B>0).reduce((B,ae)=>B+ae,0)]).sort((pe,B)=>pe[1]-B[1])[0])==null?void 0:W[0];ne&&(ue=ne);break}case"initialPlacement":ue=l}if(r!==ue)return{reset:{placement:ue}}}return{}}}},cT=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await async function(a,l){const{placement:u,platform:d,elements:f}=a,m=await(d.isRTL==null?void 0:d.isRTL(f.floating)),h=Fo(u),g=ys(u),x=Ns(u)==="x",w=["left","top"].includes(h)?-1:1,v=m&&x?-1:1,P=typeof l=="function"?l(a):l;let{mainAxis:y,crossAxis:b,alignmentAxis:S}=typeof P=="number"?{mainAxis:P,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...P};return g&&typeof S=="number"&&(b=g==="end"?-1*S:S),x?{x:b*v,y:y*w}:{x:y*w,y:b*v}}(t,e);return{x:n+i.x,y:r+i.y,data:i}}}};function en(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Yn(e){return en(e).getComputedStyle(e)}const Kv=Math.min,Xa=Math.max,zu=Math.round;function Kx(e){const t=Yn(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,a=e.offsetHeight,l=zu(n)!==i||zu(r)!==a;return l&&(n=i,r=a),{width:n,height:r,fallback:l}}function lo(e){return Gx(e)?(e.nodeName||"").toLowerCase():""}let Sl;function Qx(){if(Sl)return Sl;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(Sl=e.brands.map(t=>t.brand+"/"+t.version).join(" "),Sl):navigator.userAgent}function er(e){return e instanceof en(e).HTMLElement}function Bn(e){return e instanceof en(e).Element}function Gx(e){return e instanceof en(e).Node}function Qv(e){return typeof ShadowRoot>"u"?!1:e instanceof en(e).ShadowRoot||e instanceof ShadowRoot}function Rc(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Yn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function dT(e){return["table","td","th"].includes(lo(e))}function Rp(e){const t=/firefox/i.test(Qx()),n=Yn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const a=n.contain;return a!=null&&a.includes(i)})}function Lp(){return/^((?!chrome|android).)*safari/i.test(Qx())}function tm(e){return["html","body","#document"].includes(lo(e))}function Xx(e){return Bn(e)?e:e.contextElement}const Jx={x:1,y:1};function Fi(e){const t=Xx(e);if(!er(t))return Jx;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=Kx(t);let l=(a?zu(n.width):n.width)/r,u=(a?zu(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function qo(e,t,n,r){var i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=Xx(e);let d=Jx;t&&(r?Bn(r)&&(d=Fi(r)):d=Fi(e));const f=u?en(u):window,m=Lp()&&n;let h=(l.left+(m&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/d.x,g=(l.top+(m&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,x=l.width/d.x,w=l.height/d.y;if(u){const v=en(u),P=r&&Bn(r)?en(r):r;let y=v.frameElement;for(;y&&r&&P!==v;){const b=Fi(y),S=y.getBoundingClientRect(),C=getComputedStyle(y);S.x+=(y.clientLeft+parseFloat(C.paddingLeft))*b.x,S.y+=(y.clientTop+parseFloat(C.paddingTop))*b.y,h*=b.x,g*=b.y,x*=b.x,w*=b.y,h+=S.x,g+=S.y,y=en(y).frameElement}}return{width:x,height:w,top:g,right:h+x,bottom:g+w,left:h,x:h,y:g}}function eo(e){return((Gx(e)?e.ownerDocument:e.document)||window.document).documentElement}function Lc(e){return Bn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Yx(e){return qo(eo(e)).left+Lc(e).scrollLeft}function bs(e){if(lo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Qv(e)&&e.host||eo(e);return Qv(t)?t.host:t}function e1(e){const t=bs(e);return tm(t)?t.ownerDocument.body:er(t)&&Rc(t)?t:e1(t)}function to(e,t){var n;t===void 0&&(t=[]);const r=e1(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=en(r);return i?t.concat(a,a.visualViewport||[],Rc(r)?r:[]):t.concat(r,to(r))}function Gv(e,t,n){let r;if(t==="viewport")r=function(l,u){const d=en(l),f=eo(l),m=d.visualViewport;let h=f.clientWidth,g=f.clientHeight,x=0,w=0;if(m){h=m.width,g=m.height;const v=Lp();(!v||v&&u==="fixed")&&(x=m.offsetLeft,w=m.offsetTop)}return{width:h,height:g,x,y:w}}(e,n);else if(t==="document")r=function(l){const u=eo(l),d=Lc(l),f=l.ownerDocument.body,m=Xa(u.scrollWidth,u.clientWidth,f.scrollWidth,f.clientWidth),h=Xa(u.scrollHeight,u.clientHeight,f.scrollHeight,f.clientHeight);let g=-d.scrollLeft+Yx(l);const x=-d.scrollTop;return Yn(f).direction==="rtl"&&(g+=Xa(u.clientWidth,f.clientWidth)-m),{width:m,height:h,x:g,y:x}}(eo(e));else if(Bn(t))r=function(l,u){const d=qo(l,!0,u==="fixed"),f=d.top+l.clientTop,m=d.left+l.clientLeft,h=er(l)?Fi(l):{x:1,y:1};return{width:l.clientWidth*h.x,height:l.clientHeight*h.y,x:m*h.x,y:f*h.y}}(t,n);else{const l={...t};if(Lp()){var i,a;const u=en(e);l.x-=((i=u.visualViewport)==null?void 0:i.offsetLeft)||0,l.y-=((a=u.visualViewport)==null?void 0:a.offsetTop)||0}r=l}return Tp(r)}function Xv(e,t){return er(e)&&Yn(e).position!=="fixed"?t?t(e):e.offsetParent:null}function Jv(e,t){const n=en(e);let r=Xv(e,t);for(;r&&dT(r)&&Yn(r).position==="static";)r=Xv(r,t);return r&&(lo(r)==="html"||lo(r)==="body"&&Yn(r).position==="static"&&!Rp(r))?n:r||function(i){let a=bs(i);for(;er(a)&&!tm(a);){if(Rp(a))return a;a=bs(a)}return null}(e)||n}function fT(e,t,n){const r=er(t),i=eo(t),a=qo(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((lo(t)!=="body"||Rc(i))&&(l=Lc(t)),er(t)){const d=qo(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else i&&(u.x=Yx(i));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}const pT={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?function(d,f){const m=f.get(d);if(m)return m;let h=to(d).filter(v=>Bn(v)&&lo(v)!=="body"),g=null;const x=Yn(d).position==="fixed";let w=x?bs(d):d;for(;Bn(w)&&!tm(w);){const v=Yn(w),P=Rp(w);v.position==="fixed"?g=null:(x?P||g:P||v.position!=="static"||!g||!["absolute","fixed"].includes(g.position))?g=v:h=h.filter(y=>y!==w),w=bs(w)}return f.set(d,h),h}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,f)=>{const m=Gv(t,f,i);return d.top=Xa(m.top,d.top),d.right=Kv(m.right,d.right),d.bottom=Kv(m.bottom,d.bottom),d.left=Xa(m.left,d.left),d},Gv(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=er(n),a=eo(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((i||!i&&r!=="fixed")&&((lo(n)!=="body"||Rc(a))&&(l=Lc(n)),er(n))){const f=qo(n);u=Fi(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:Bn,getDimensions:function(e){return er(e)?Kx(e):e.getBoundingClientRect()},getOffsetParent:Jv,getDocumentElement:eo,getScale:Fi,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||Jv,a=this.getDimensions;return{reference:fT(t,await i(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Yn(e).direction==="rtl"};function hT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=i&&!u,f=d||a?[...Bn(e)?to(e):e.contextElement?to(e.contextElement):[],...to(t)]:[];f.forEach(x=>{d&&x.addEventListener("scroll",n,{passive:!0}),a&&x.addEventListener("resize",n)});let m,h=null;if(l){let x=!0;h=new ResizeObserver(()=>{x||n(),x=!1}),Bn(e)&&!u&&h.observe(e),Bn(e)||!e.contextElement||u||h.observe(e.contextElement),h.observe(t)}let g=u?qo(e):null;return u&&function x(){const w=qo(e);!g||w.x===g.x&&w.y===g.y&&w.width===g.width&&w.height===g.height||n(),g=w,m=requestAnimationFrame(x)}(),n(),()=>{var x;f.forEach(w=>{d&&w.removeEventListener("scroll",n),a&&w.removeEventListener("resize",n)}),(x=h)==null||x.disconnect(),h=null,u&&cancelAnimationFrame(m)}}const mT=(e,t,n)=>{const r=new Map,i={platform:pT,...n},a={...i.platform,_c:r};return(async(l,u,d)=>{const{placement:f="bottom",strategy:m="absolute",middleware:h=[],platform:g}=d,x=h.filter(Boolean),w=await(g.isRTL==null?void 0:g.isRTL(u));let v=await g.getElementRects({reference:l,floating:u,strategy:m}),{x:P,y}=Vv(v,f,w),b=f,S={},C=0;for(let z=0;z<x.length;z++){const{name:N,fn:A}=x[z],{x:j,y:K,data:W,reset:Y}=await A({x:P,y,initialPlacement:f,placement:b,strategy:m,middlewareData:S,rects:v,platform:g,elements:{reference:l,floating:u}});P=j??P,y=K??y,S={...S,[N]:{...S[N],...W}},Y&&C<=50&&(C++,typeof Y=="object"&&(Y.placement&&(b=Y.placement),Y.rects&&(v=Y.rects===!0?await g.getElementRects({reference:l,floating:u,strategy:m}):Y.rects),{x:P,y}=Vv(v,b,w)),z=-1)}return{x:P,y,placement:b,strategy:m,middlewareData:S}})(e,t,{...i,platform:a})},_T=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return i=t,Object.prototype.hasOwnProperty.call(i,"current")?t.current!=null?qv({element:t.current,padding:n}).fn(r):{}:t?qv({element:t,padding:n}).fn(r):{};var i}}};var jl=typeof document<"u"?T.useLayoutEffect:T.useEffect;function Ru(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Ru(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!=0;){const a=i[r];if((a!=="_owner"||!e.$$typeof)&&!Ru(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function Yv(e){const t=T.useRef(e);return jl(()=>{t.current=e}),t}var t1=typeof document<"u"?T.useLayoutEffect:T.useEffect;let qd=!1,gT=0;const ey=()=>"floating-ui-"+gT++,ty=Ya["useId".toString()]||function(){const[e,t]=T.useState(()=>qd?ey():void 0);return t1(()=>{e==null&&t(ey())},[]),T.useEffect(()=>{qd||(qd=!0)},[]),e},vT=T.createContext(null),yT=T.createContext(null),n1=()=>T.useContext(yT);function r1(e){return e?.ownerDocument||document}function o1(e){return r1(e).defaultView||window}function Io(e){return!!e&&e instanceof o1(e).Element}function nm(e){return!!e&&e instanceof o1(e).HTMLElement}function bT(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:i,version:a}=r;return i+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function xT(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function ny(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Kd(e,t){let n=e.filter(i=>{var a;return i.parentId===t&&((a=i.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return i.parentId===l.id&&((u=i.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const wT=Ya["useInsertionEffect".toString()]||(e=>e());function i1(e){const t=T.useRef(()=>{});return wT(()=>{t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function ry(e){return nm(e.target)&&e.target.tagName==="BUTTON"}function oy(e){return function(t){return nm(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function Qd(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const kT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},ST={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},PT=function(e,t){let{open:n,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:f=!0,escapeKey:m=!0,outsidePress:h=!0,outsidePressEvent:g="pointerdown",referencePress:x=!1,referencePressEvent:w="pointerdown",ancestorScroll:v=!1,bubbles:P=!0}=t===void 0?{}:t;const y=n1(),b=(((S=T.useContext(vT))==null?void 0:S.id)||null)!=null;var S;const C=i1(typeof h=="function"?h:()=>!1),z=typeof h=="function"?C:h,N=T.useRef(!1),{escapeKeyBubbles:A,outsidePressBubbles:j}=function(K){var W,Y;return K===void 0&&(K=!0),{escapeKeyBubbles:typeof K=="boolean"?K:(W=K.escapeKey)==null||W,outsidePressBubbles:typeof K=="boolean"?K:(Y=K.outsidePress)==null||Y}}(P);return T.useEffect(()=>{if(!n||!f)return;function K(ne){if(ne.key==="Escape"){if(!A&&y&&Kd(y.nodesRef.current,a).length>0)return;i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function W(ne){const pe=N.current;if(N.current=!1,pe||typeof z=="function"&&!z(ne))return;const B=function(D){return"composedPath"in D?D.composedPath()[0]:D.target}(ne);if(nm(B)&&d){const D=d.ownerDocument.defaultView||window,J=B.scrollWidth>B.clientWidth,Q=B.scrollHeight>B.clientHeight;let E=Q&&ne.offsetX>B.clientWidth;if(Q&&D.getComputedStyle(B).direction==="rtl"&&(E=ne.offsetX<=B.offsetWidth-B.clientWidth),E||J&&ne.offsetY>B.clientHeight)return}const ae=y&&Kd(y.nodesRef.current,a).some(D=>{var J;return Qd(ne,(J=D.context)==null?void 0:J.elements.floating)});Qd(ne,d)||Qd(ne,u)||ae||!j&&y&&Kd(y.nodesRef.current,a).length>0||(i.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:bT(ne)||xT(ne)}}),r(!1))}function Y(){r(!1)}const oe=r1(d);m&&oe.addEventListener("keydown",K),z&&oe.addEventListener(g,W);let ue=[];return v&&(Io(u)&&(ue=to(u)),Io(d)&&(ue=ue.concat(to(d))),!Io(l)&&l&&l.contextElement&&(ue=ue.concat(to(l.contextElement)))),ue=ue.filter(ne=>{var pe;return ne!==((pe=oe.defaultView)==null?void 0:pe.visualViewport)}),ue.forEach(ne=>{ne.addEventListener("scroll",Y,{passive:!0})}),()=>{m&&oe.removeEventListener("keydown",K),z&&oe.removeEventListener(g,W),ue.forEach(ne=>{ne.removeEventListener("scroll",Y)})}},[d,u,l,m,z,g,i,y,a,n,r,v,f,A,j,b]),T.useEffect(()=>{N.current=!1},[z,g]),T.useMemo(()=>f?{reference:{[kT[w]]:()=>{x&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[ST[g]]:()=>{N.current=!0}}}:{},[f,i,x,g,w,r])};function rm(e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function CT(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,i=function(y){y===void 0&&(y={});const{placement:b="bottom",strategy:S="absolute",middleware:C=[],platform:z,whileElementsMounted:N,open:A}=y,[j,K]=T.useState({x:null,y:null,strategy:S,placement:b,middlewareData:{},isPositioned:!1}),[W,Y]=T.useState(C);Ru(W,C)||Y(C);const oe=T.useRef(null),ue=T.useRef(null),ne=T.useRef(j),pe=Yv(N),B=Yv(z),[ae,D]=T.useState(null),[J,Q]=T.useState(null),E=T.useCallback(ee=>{oe.current!==ee&&(oe.current=ee,D(ee))},[]),I=T.useCallback(ee=>{ue.current!==ee&&(ue.current=ee,Q(ee))},[]),R=T.useCallback(()=>{if(!oe.current||!ue.current)return;const ee={placement:b,strategy:S,middleware:W};B.current&&(ee.platform=B.current),mT(oe.current,ue.current,ee).then(le=>{const je={...le,isPositioned:!0};V.current&&!Ru(ne.current,je)&&(ne.current=je,Wi.flushSync(()=>{K(je)}))})},[W,b,S,B]);jl(()=>{A===!1&&ne.current.isPositioned&&(ne.current.isPositioned=!1,K(ee=>({...ee,isPositioned:!1})))},[A]);const V=T.useRef(!1);jl(()=>(V.current=!0,()=>{V.current=!1}),[]),jl(()=>{if(ae&&J){if(pe.current)return pe.current(ae,J,R);R()}},[ae,J,R,pe]);const re=T.useMemo(()=>({reference:oe,floating:ue,setReference:E,setFloating:I}),[E,I]),$=T.useMemo(()=>({reference:ae,floating:J}),[ae,J]);return T.useMemo(()=>({...j,update:R,refs:re,elements:$,reference:E,floating:I}),[j,R,re,$,E,I])}(e),a=n1(),l=T.useRef(null),u=T.useRef({}),d=T.useState(()=>function(){const y=new Map;return{emit(b,S){var C;(C=y.get(b))==null||C.forEach(z=>z(S))},on(b,S){y.set(b,[...y.get(b)||[],S])},off(b,S){y.set(b,(y.get(b)||[]).filter(C=>C!==S))}}}())[0],[f,m]=T.useState(null),h=T.useCallback(y=>{const b=Io(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(b)},[i.refs]),g=T.useCallback(y=>{(Io(y)||y===null)&&(l.current=y,m(y)),(Io(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!Io(y))&&i.refs.setReference(y)},[i.refs]),x=T.useMemo(()=>({...i.refs,setReference:g,setPositionReference:h,domReference:l}),[i.refs,g,h]),w=T.useMemo(()=>({...i.elements,domReference:f}),[i.elements,f]),v=i1(n),P=T.useMemo(()=>({...i,refs:x,elements:w,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:v}),[i,r,d,t,v,x,w]);return t1(()=>{const y=a?.nodesRef.current.find(b=>b.id===r);y&&(y.context=P)}),T.useMemo(()=>({...i,context:P,refs:x,reference:g,positionReference:h}),[i,x,P,g,h])}function Gd(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(i=>i?i[n]:null).concat(e).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),i[u]=function(){for(var m,h=arguments.length,g=new Array(h),x=0;x<h;x++)g[x]=arguments[x];(m=r.get(u))==null||m.forEach(w=>w(...g))})):i[u]=d}),i),{})}}var Lu,Ap={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function ET(e){var{variant:t=Lu.Default,arrow:n,initialOpen:r,placement:i,offset:a,open:l,onOpenChange:u}=e,d=Yo(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,m]=T.useState(r),h=l??f,g=u??m,x=T.useRef(null),w=CT({placement:i,open:h,onOpenChange:g,whileElementsMounted:hT,middleware:[cT(a??(n?12:4)),uT({padding:5,fallbackPlacements:["bottom","top"]}),(v={padding:5},v===void 0&&(v={}),{name:"shift",options:v,async fn(z){const{x:N,y:A,placement:j}=z,{mainAxis:K=!0,crossAxis:W=!1,limiter:Y={fn:Q=>{let{x:E,y:I}=Q;return{x:E,y:I}}},...oe}=v,ue={x:N,y:A},ne=await qx(z,oe),pe=Ns(Fo(j)),B=pe==="x"?"y":"x";let ae=ue[pe],D=ue[B];if(K){const Q=pe==="y"?"bottom":"right";ae=zp(ae+ne[pe==="y"?"top":"left"],ae,ae-ne[Q])}if(W){const Q=B==="y"?"bottom":"right";D=zp(D+ne[B==="y"?"top":"left"],D,D-ne[Q])}const J=Y.fn({...z,[pe]:ae,[B]:D});return{...J,data:{x:J.x-N,y:J.y-A}}}}),_T({element:x,padding:8})]});var v;const P=w.context,y=function(z,N){let{open:A,onOpenChange:j,dataRef:K,refs:W}=z,{enabled:Y=!0,event:oe="click",toggle:ue=!0,ignoreMouse:ne=!1,keyboardHandlers:pe=!0}=N===void 0?{}:N;const B=T.useRef();return T.useMemo(()=>Y?{reference:{onPointerDown(ae){B.current=ae.pointerType},onMouseDown(ae){ae.button===0&&(ny(B.current,!0)&&ne||oe!=="click"&&(A?!ue||K.current.openEvent&&K.current.openEvent.type!=="mousedown"||j(!1):(ae.preventDefault(),j(!0)),K.current.openEvent=ae.nativeEvent))},onClick(ae){K.current.__syncReturnFocus||(oe==="mousedown"&&B.current?B.current=void 0:ny(B.current,!0)&&ne||(A?!ue||K.current.openEvent&&K.current.openEvent.type!=="click"||j(!1):j(!0),K.current.openEvent=ae.nativeEvent))},onKeyDown(ae){B.current=void 0,pe&&(ry(ae)||(ae.key!==" "||oy(W.domReference.current)||ae.preventDefault(),ae.key==="Enter"&&(A?ue&&j(!1):j(!0))))},onKeyUp(ae){pe&&(ry(ae)||oy(W.domReference.current)||ae.key===" "&&(A?ue&&j(!1):j(!0)))}}}:{},[Y,K,oe,ne,pe,W,ue,A,j])}(P,{enabled:l==null}),b=PT(P,{referencePress:!1}),S=function(z,N){let{open:A}=z,{enabled:j=!0,role:K="dialog"}=N===void 0?{}:N;const W=ty(),Y=ty();return T.useMemo(()=>{const oe={id:W,role:K};return j?K==="tooltip"?{reference:{"aria-describedby":A?W:void 0},floating:oe}:{reference:{"aria-expanded":A?"true":"false","aria-haspopup":K==="alertdialog"?"dialog":K,"aria-controls":A?W:void 0,...K==="listbox"&&{role:"combobox"},...K==="menu"&&{id:Y}},floating:{...oe,...K==="menu"&&{"aria-labelledby":Y}}}:{}},[j,K,A,W,Y])}(P),C=function(z){z===void 0&&(z=[]);const N=z,A=T.useCallback(W=>Gd(W,z,"reference"),N),j=T.useCallback(W=>Gd(W,z,"floating"),N),K=T.useCallback(W=>Gd(W,z,"item"),N);return T.useMemo(()=>({getReferenceProps:A,getFloatingProps:j,getItemProps:K}),[A,j,K])}([y,b,S]);return T.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:h,setOpen:g},C),w),d),{arrow:n,arrowRef:x,variant:t}),[h,g,C,w,d,n,x,t])}Fe(`.Popover-module_popover__E9K9X {
  width: max-content;
  z-index: 2;
  padding: 12px;
  max-width: calc(100vw - 20px);
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 0 3px 6px 0 #00000033;
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
  background-color: #FFFFFF;
  border-color: #68707C;
}

.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {
  background-color: #E6EFF8;
  border-color: #004C8F;
}

.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {
  background-color: #FFFBE6;
  border-color: #CC7005;
}

.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {
  background-color: #F9D5DB;
  border-color: #B3253A;
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

.Popover-module_popover__E9K9X[data-placement^="top"] > .Popover-module_arrow__5A-0e {
  box-shadow: 3px 3px 6px 0 #00000033;
  clip-path: inset(0px -10px -10px 0px);
  border-left-color: transparent;
  border-top-color: transparent;
}

.Popover-module_popover__E9K9X[data-placement^="bottom"] > .Popover-module_arrow__5A-0e {
  clip-path: inset(-10px 0 0 -10px);
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.Popover-module_popover__E9K9X[data-placement^="left"] > .Popover-module_arrow__5A-0e {
  box-shadow: 1px 3px 6px 0 #00000033;
  clip-path: inset(-10px -10px 0 0);
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.Popover-module_popover__E9K9X[data-placement^="right"] > .Popover-module_arrow__5A-0e {
  box-shadow: -1px 3px 6px 0 #00000033;
  clip-path: inset(0 0 -10px -10px);
  border-right-color: transparent;
  border-top-color: transparent;
}
`),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(Lu||(Lu={}));const a1=T.createContext(null),om=()=>{const e=T.useContext(a1);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function s1(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:i=!1}=e,a=Yo(e,["children","trigger","arrow","initialOpen"]);const l=ET(Object.assign({arrow:r,initialOpen:i},a));return Z.createElement(a1.Provider,{value:l},Z.createElement(OT,null,n),Z.createElement(TT,null,t,l.arrow&&Z.createElement(zT,null)))}s1.displayName="Popover";const OT=T.forwardRef(function(e,t){var{children:n}=e,r=Yo(e,["children"]);const i=om(),a=n.ref,l=rm([i.reference,t,a]);return T.isValidElement(n)?T.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null}),TT=T.forwardRef(function(e,t){var n,r;const i=om(),a=rm([i.floating,t]);return i.open?Z.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0},"data-placement":i.placement,className:St(Ap.popover,Ap[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:i.role||"dialog"}),e.children):null}),zT=T.forwardRef(function(e,t){var n,r;const i=om(),a=rm([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return Z.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:Ap.arrow},e))});var RT="utility-module_visuallyHidden__R-C67";Fe(`/**
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
`);var Ko,ko={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};Fe(`.HelpText-module_helpTextButton__Ir4Uk {
  all: initial;
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

.HelpText-module_helpTextButton__Ir4Uk:focus-visible {
  outline: var(--semantic-tab_focus-outline-color) solid
    var(--semantic-tab_focus-outline-width);
  outline-offset: var(--semantic-tab_focus-outline-offset);
  color: var(--colors-blue-700);
}

.HelpText-module_helpTextButton__Ir4Uk:focus:not(:focus-visible) {
  outline: none;
}

.HelpText-module_helpTextIconFilled__SjZ8e {
  display: none;
}

.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIcon__ex2WU {
  display: none;
}

.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIconFilled__SjZ8e {
  display: inline-block;
}

.HelpText-module_helpTextIcon__ex2WU {
  color: var(--colors-blue-700);
  width: var(--help_text-icon-width);
  height: var(--help_text-icon-height);
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ko||(Ko={}));const im=e=>{var{className:t,children:n,title:r,placement:i="right",onClick:a,size:l=Ko.Small}=e,u=Yo(e,["className","children","title","placement","onClick","size"]);const[d,f]=T.useState(!1);return Z.createElement(s1,{variant:Lu.Info,placement:i,open:d,onOpenChange:f,className:ko.helpTextContent,role:"tooltip",trigger:Z.createElement("button",Object.assign({},u,{className:St(ko.helpTextButton,t),onClick:m=>{f(h=>!h),a?.(m)}}),Z.createElement(XO,{className:St(ko.helpTextIcon,ko.helpTextIconFilled,ko[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement(KO,{className:St(ko.helpTextIcon,ko[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement("span",{className:RT},r))},n)};im.displayName="HelpText";var Qo,Ar={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};Fe(`.FieldSet-module_fieldSet__GgktD {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Qo||(Qo={}));const am=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,helpText:l,legend:u,size:d=Qo.Small})=>{const f=d===Qo.Xsmall?Ko.Xsmall:Ko.Small;return Z.createElement("fieldset",{className:St(Ar.fieldSet,Ar[d],t),disabled:i},u&&Z.createElement("legend",{className:Ar.legend},Z.createElement("span",{className:Ar.legendAndHelpText},Z.createElement("span",{className:Ar.legendContent},u),l&&Z.createElement(im,{size:f,title:`Help text for ${u}`},l))),r&&Z.createElement("p",{className:Ar.description},r),Z.createElement("div",{className:St(Ar.content,n)},e),a&&Z.createElement("div",{className:Ar.errorMessage},Z.createElement($x,null,a)))};am.displayName="FieldSet";var xs,En={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};Fe(`.CheckboxRadioTemplate-module_template__CbnTf {
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
  opacity: var(--opacity);
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

.CheckboxRadioTemplate-module_clickable__iw4S2  {
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

@supports not selector(:has(:focus-visible)) {
  .CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):focus-within {
    outline: 2px solid var(--semantic-tab_focus-outline-color);
    outline-offset: 2px;
  }
}

.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):not(:has(button:focus-visible)):has(:focus-visible) {
  outline: 2px solid var(--semantic-tab_focus-outline-color);
  outline-offset: 2px;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(xs||(xs={}));const LT=({checked:e,children:t,className:n,description:r,disabled:i,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:f,name:m,onChange:h,presentation:g,size:x,type:w,value:v})=>{const P=T.useId(),y=d??"input-"+P,b=f?`${y}-label`:void 0,S=r?`${y}-description`:void 0,C=f&&!u,z=!g||typeof f!="object"&&typeof r!="object",N=x===xs.Xsmall?Ko.Xsmall:Ko.Small;return Z.createElement(iy,{className:St(En.template,En[x],i&&En.disabled,n),htmlFor:y,isLabel:z},!l&&Z.createElement(iy,{className:En.inputWrapper,htmlFor:y,isLabel:!z},Z.createElement("input",{"aria-describedby":S,"aria-label":C||typeof f!="string"?void 0:f,"aria-labelledby":C?b:void 0,checked:e!=null&&e,className:En.input,disabled:i,id:y,name:m,onChange:i?void 0:h,role:g?"presentation":void 0,type:w,value:v}),Z.createElement("span",{className:En.visibleBox},t)),(C||r)&&Z.createElement("span",{className:En.labelAndDescription},C&&Z.createElement("span",{className:En.labelAndHelpText},Z.createElement("span",{className:En.label,id:b},f),a&&Z.createElement(im,{size:N,title:`Help text for ${f}`},a)),r&&Z.createElement("span",{className:En.description,id:S},r)))},iy=({children:e,className:t,htmlFor:n,isLabel:r})=>r?Z.createElement("label",{className:t+" "+En.clickable,htmlFor:n},e):Z.createElement("span",{className:t},e);var AT="Checkbox-module_checkbox__lSeQj",BT="Checkbox-module_compact__Cl41-",NT="Checkbox-module_error__E-bmD",IT="Checkbox-module_checked__3yAq6",MT="Checkbox-module_disabled__x7-eg",DT="Checkbox-module_readOnly__FamUn",FT="Checkbox-module_visibleBox__G7q8H",jT="Checkbox-module_checkmark__ES9N8";Fe(`.Checkbox-module_checkbox__lSeQj {
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
`);const Xt=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,helpText:l,hideLabel:u,label:d,name:f,onChange:m,presentation:h,readOnly:g})=>Z.createElement(LT,{checked:t,className:St(AT,t&&IT,a&&NT,i&&MT,n&&BT,g&&DT),description:r,disabled:i,helpText:l,hideInput:g,hideLabel:u,inputId:e,label:d,name:f,onChange:m,presentation:h,size:n?xs.Xsmall:xs.Small,type:"checkbox"},Z.createElement("span",{className:FT},Z.createElement("span",{className:jT})));Xt.displayName="Checkbox";const UT=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},ay=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),i=new Set;for(let a=0;a<e.length;a++){const l=n[a];for(const u of UT(l,r))if(!i.has(u)){i.add(u);break}}return i.size},sy=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let i=0;for(let a=0;a<r.length;a++)if(r[a]===n[i]&&(i++,i===n.length))return!0;return!1},$T=e=>(t,n)=>{const r=(i=>(a,l)=>{const u=sy(i,a),d=sy(i,l);if(!u&&!d)return 0;if(u&&!d)return-1;if(!u&&d)return 1;let f=0;for(let m=0;m<i.length;m++){const h=a.substring(f).indexOf(i[m]),g=l.substring(f).indexOf(i[m]);if(h<g)return-1;if(h>g)return 1;f+=h+1}return 0})(e)(t,n);return r!==0?r:(i=>(a,l)=>{const u=ay(i,a);return ay(i,l)-u})(e)(t,n)};var ji,Xd={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};Fe(`.CheckboxGroup-module_checkboxGroup__LIGFC {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ji||(ji={}));const WT=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},ly=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Ul=({compact:e,description:t,disabled:n,error:r,helpText:i,items:a,legend:l,onChange:u,presentation:d,variant:f=ji.Vertical})=>{if(!Zx(a.map(w=>w.name)))throw Error("Each name in the checkbox group must be unique.");const[m,h]=T.useReducer(WT,ly(a)),g=Zv([...a]);vs(()=>{(a.length!==g?.length||a.some((w,v)=>!((P,y)=>{const b=Object.keys(P),S=Object.keys(y);if(b.length!==S.length)return!1;for(const C of b)if(P[C]!==y[C])return!1;return!0})(w,g[v])))&&h({type:"reset",state:ly(a)})});const x=Zv(m);return vs(()=>{u&&!n&&!Wx(x,m)&&u(m)},[m,u,n]),Z.createElement(am,{contentClassName:St(Xd.checkboxGroup,Xd[f],e&&Xd.compact),description:t,disabled:n,error:r,helpText:i,legend:l,size:e?Qo.Xsmall:Qo.Small},a.map(w=>Z.createElement(Xt,{checkboxId:w.checkboxId,checked:m.includes(w.name),compact:e,description:w.description,disabled:n||w.disabled,error:!!r,helpText:w.helpText,key:w.name,label:w.label,name:w.name,onChange:v=>{h({type:v.target.checked?"check":"uncheck",name:w.name})},presentation:d})))};Ul.displayName="CheckboxGroup";var uy;Fe(`.RadioButton-module_radio__-lcP- {
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
  border-color: var(--radio-border_color);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.RadioButton-module_checkmark__fHNs0 {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(uy||(uy={}));var cy,dy;Fe(`.RadioGroup-module_radioGroup__pO2pz {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(cy||(cy={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(dy||(dy={}));var zo,Au,jo;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"})(zo||(zo={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Au||(Au={})),function(e){e.None="none",e.Error="error",e.Search="search"}(jo||(jo={}));const ZT=()=>Z.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),HT=()=>Z.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var fy="Icon-module_icon__3YqoF",VT="Icon-module_disabled__e4-Yg";Fe(`.Icon-module_icon__3YqoF {
    background: var(--icon-background);
    padding-right: var(--component-input-border_width-focus);
    padding-left: var(--component-input-border_width-default);
    display: flex;
    align-items: center;
    flex: none;
}

.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {
    opacity: 60%;
}`);const qT=({variant:e,disabled:t=!1})=>{switch(e){case jo.Error:return Z.createElement("div",{className:fy,"data-testid":"input-icon-error"},Z.createElement(ZT,null));case jo.Search:return Z.createElement("div",{className:St(fy,t&&VT),"data-testid":"input-icon-search"},Z.createElement(HT,null));default:return null}};var So={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};Fe(`.InputWrapper-module_inputWrapper__I-Tcb {
  --background: var(--component-input-color-background-default);
  --border-color: var(--component-input-color-border-default);
  --icon-background: transparent;
  --outline-color: var(--semantic-tab_focus-outline-color);
  --paddingX: 0;
  --paddingY: 0;
  align-items: stretch;
  background: var(--background);
  border-color: var(--border-color);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  border-width: var(--component-input-border_width-default);
  box-sizing: border-box;
  display: flex;
  min-height: var(--component-input-size-min_height-default);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withFocusEffect__9DobY:focus-within {
  outline: var(--outline-color) solid var(--semantic-tab_focus-outline-width);
  outline-offset: var(--semantic-tab_focus-outline-offset);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_default__SS3Cg:hover {
  --border-color: var(--component-input-color-border-hover);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
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
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
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
  border: none;
  box-sizing: border-box;
  font-family: var(--font_family-default);
  font-size: var(--component-input-font_size-sm);
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
}

.InputWrapper-module_label__x0-XH {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`);const KT=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:u,readOnly:d=!1})=>{const f=T.useId(),m=t??f,{variant:h,iconVariant:g}=(({readOnly:x=!1,disabled:w=!1,isValid:v=!0,isSearch:P=!1}={})=>{let y=jo.None;return P&&(y=jo.Search),w?{variant:zo.Disabled,iconVariant:y}:x===!0||x===Au.ReadOnlyInfo?{variant:zo.ReadOnlyInfo,iconVariant:y}:x===Au.ReadOnlyConfirm?{variant:zo.ReadOnlyConfirm,iconVariant:y}:v===!1?{variant:zo.Error,iconVariant:jo.Error}:{variant:zo.Default,iconVariant:y}})({disabled:e,isSearch:r,isValid:i,readOnly:d});return Z.createElement(Z.Fragment,null,a&&Z.createElement("label",{className:So.label,htmlFor:m},a),Z.createElement("div",{"data-testid":"InputWrapper",className:St(So.inputWrapper,So[h],{[So.search]:r,[So.withFocusEffect]:!l,[So.withPadding]:!u})},Z.createElement(qT,{variant:g,disabled:e}),n({className:So.field,inputId:m,variant:h})))};var QT="MultiSelectItem-module_multiSelectItem__tjklN",GT="MultiSelectItem-module_deleteButton__xRVRz",XT="MultiSelectItem-module_deleteButtonCross__yqZOX";Fe(`.MultiSelectItem-module_multiSelectItem__tjklN {
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

.MultiSelectItem-module_deleteButton__xRVRz:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_deleteButton__xRVRz:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.MultiSelectItem-module_deleteButtonCross__yqZOX {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);const l1=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>Z.createElement("span",{className:QT},Z.createElement("span",null,r),Z.createElement("button",{"aria-label":e,className:GT,disabled:t,onClick:n},Z.createElement("span",{className:XT})));l1.displayName="MultiSelectItem";var dt={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",expanded:"Select-module_expanded__QPHZ6",optionListWrapper:"Select-module_optionListWrapper__Ech-7",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",textInput:"Select-module_textInput__QOpiN",single:"Select-module_single__i2zPs",fieldValue:"Select-module_fieldValue__XgrGc",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",optionList:"Select-module_optionList__Lhg-F",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};Fe(`.Select-module_select__cjdcr {
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
  --multiselect_items-padding: calc(
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2
  );
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-100);
  --option-background_color-selected: var(--colors-blue-200);
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
  --option_list-z_index: 2;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: var(--semantic-tab_focus-outline-width) auto
    var(--semantic-tab_focus-outline-color);

  font-size: var(--font_size);
  line-height: var(--line-height);
  position: relative;
}

.Select-module_select__cjdcr.Select-module_disabled__8YgjS {
  --interactive_element-cursor: auto;
  opacity: var(--opacity-disabled);
}

.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {
  --delete_cross-color: var(--delete_cross-color-active);
}

.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionListWrapper__Ech-7 {
  display: none;
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
  padding: 0;
  align-items: center;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
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

.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldValue__XgrGc {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
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
  cursor: auto;
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
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
  max-height: calc(
    var(--option-height) * var(--option_list-number_of_visible_options)
  );
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
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
`);const JT=(e,t)=>((n,r)=>[...n.entries()].map(([i,a])=>({key:i,keywords:(a?.length?a:[i]).sort(r)})).sort((i,a)=>{const l=Math.min(i.keywords.length,a.keywords.length);for(let u=0;u<l;u++){const d=r(i.keywords[u],a.keywords[u]);if(d!==0)return d}return 0}).map(({key:i})=>i))(new Map(e.map(({label:n,value:r,keywords:i})=>[r,i?[n,...i]:[n]])),$T(t)).map(n=>e.find(r=>r.value===n)),Aa={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Bp=e=>{var t;const{disabled:n,error:r,hideLabel:i,inputId:a,label:l,multiple:u,onChange:d,options:f,searchLabel:m,value:h}=e,g=f.map($=>$.value);if(g.length!==new Set(g).size)throw Error("Each value in the option list must be unique.");const[x,w]=T.useState(u&&h!=null?h:[]),[v,P]=T.useState(""),y=()=>v&&P(""),[b,S]=T.useState(f),C=f.length,z=(t=b[0])===null||t===void 0?void 0:t.value;vs(()=>{z!==void 0&&A(z)},[z]);const[N,A]=T.useState(u?void 0:h),j=b.findIndex($=>$.value===N),[K,W]=T.useState(!1);Wv("click",()=>W(!1)),Wv("keydown",()=>W(!0));const[Y,oe]=T.useState(!1),ue=T.useRef(null),ne=T.useRef(null);vs(()=>{u?Wx(h,x)||w(h??[]):A(h)},[h]),T.useEffect(()=>{const $=ue.current;if($){const ee=$.offsetHeight,le=$.querySelectorAll("button");if(!le.length)return;const je=$.scrollTop,Ue=je+ee,Be=le[j];if(Be){const Ee=Be.offsetTop,He=Ee+Be.offsetHeight;Ee>=je&&He<=Ue||($.scrollTop=Ee<je?Ee:He-ee)}}},[j]);const pe=$=>{var ee;return(ee=f.find(le=>le.value===$))!==null&&ee!==void 0?ee:{label:"",value:""}},B=($,ee)=>{x?.length||A(ee),w($),d&&d($)},ae=$=>{var ee;u?x.includes($)?D($):B([...x,$],$):(A(ee=$),oe(!1),y(),d&&d(ee))},D=$=>{B(x.filter(ee=>ee!==$),$)},J=T.useCallback(()=>{if(N===void 0)A(b[0].value);else{const $=j+1;$>=0&&$<C&&A(b[$].value)}oe(!0)},[N,j,A,b,C]),Q=T.useCallback(()=>{if(N===void 0)A(b[C-1].value);else{const $=j-1;$>=0&&$<C&&A(b[$].value)}oe(!0)},[N,j,A,b,C]);Hd(Aa.ArrowDown,()=>{Y&&(J(),y())}),Hd(Aa.ArrowUp,()=>{Y&&(Q(),y())}),Hd(Aa.Enter,()=>{Y&&u&&N?ae(N):Y&&oe(!1),y()});const E=$=>{const ee=$.target.value;ee&&(S(JT(f,ee)),!Y&&oe(!0)),P(ee)},I=$=>N===$,R=$=>u?x.includes($):I($),V=T.useId(),re=ne.current?`calc(${ne.current.offsetWidth}px + 2 * ${AO.component.input.border_width.default.value})`:void 0;return Z.createElement("span",{className:St(dt.select,dt[u?"multiple":"single"],Y&&dt.expanded,n&&dt.disabled,K&&dt.usingKeyboard),"data-testid":"select-root"},Z.createElement(KT,{disabled:n,inputId:a,inputRenderer:({className:$,inputId:ee})=>Z.createElement("span",{className:$+" "+dt.field,ref:ne},Z.createElement("span",{className:dt.inputArea},u&&Z.createElement(Z.Fragment,null,x.map(pe).map(le=>Z.createElement(l1,{deleteButtonLabel:le.deleteButtonLabel,disabled:n!=null&&n,key:le.value,label:le.label,onDeleteButtonClick:()=>D(le.value)}))),Z.createElement("input",{"aria-label":m,autoComplete:"off",className:dt.textInput,disabled:n,onBlur:()=>oe(!1),onChange:E,onFocus:()=>oe(!0),onKeyDown:le=>{Object.values(Aa).includes(le.key)&&le.preventDefault()},type:"text",value:v}),!u&&!v.length&&Z.createElement("span",{className:dt.fieldValue},pe(N).label)),u&&Z.createElement("button",{"aria-label":e.deleteButtonLabel,className:dt.deleteButton,disabled:!x.length||n,onClick:()=>{B([])}},Z.createElement("span",{className:dt.deleteButtonCross})),Z.createElement("button",{"aria-controls":V,"aria-expanded":Y,"aria-haspopup":"listbox","aria-label":l,className:dt.fieldButton,disabled:n,id:ee,onBlur:()=>oe(!1),onClick:()=>oe(!0),onKeyDown:le=>{Object.values(Aa).includes(le.key)&&(le.preventDefault(),oe(!0))},role:"combobox",tabIndex:-1,value:u?x:N},Z.createElement("span",{className:dt.arrowWrapper},Z.createElement("span",{className:dt.arrow})))),isSearch:!1,isValid:!r,label:i?void 0:l,noFocusEffect:u,noPadding:!0,readOnly:!1}),Z.createElement("span",{className:dt.optionListWrapper,ref:ue,style:{width:re}},Z.createElement("span",{className:dt.optionList,id:V,role:"listbox"},b.map($=>{var ee;return Z.createElement("button",{"aria-label":$.label,"aria-selected":R($.value),className:St(dt.option,R($.value)&&dt.selected,u&&I($.value)&&dt.focused),key:$.value,onClick:()=>ae($.value),onMouseDown:le=>le.preventDefault(),onKeyDown:le=>le.preventDefault(),role:"option",value:$.value},(ee=$.formattedLabel)!==null&&ee!==void 0?ee:$.label)}))))};Bp.displayName="Select";var YT="Spinner-module_spinner__GpFZS",ez="Spinner-module_spinnerCircle__DRFwJ",tz="Spinner-module_defaultForeground__Ay0Sq",nz="Spinner-module_interactionForeground__8aY93",rz="Spinner-module_invertedForeground__DF2fs",oz="Spinner-module_defaultBackground__7A7zq",iz="Spinner-module_interactionBackground__jBIwt",az="Spinner-module_invertedBackground__nQ8Oa";Fe(`.Spinner-module_spinner__GpFZS {
  animation: Spinner-module_rotateAnimation__ZCB0X 2s linear infinite;
}

.Spinner-module_spinnerCircle__DRFwJ {
  animation: Spinner-module_strokeAnimation__7hbeq 1.5s ease-in-out infinite;
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

@keyframes Spinner-module_rotateAnimation__ZCB0X {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes Spinner-module_strokeAnimation__7hbeq {
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
`);const py={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},hy={default:{foreground:tz,background:oz},interaction:{foreground:nz,background:iz},inverted:{foreground:rz,background:az}},sz=e=>{var{title:t,size:n="medium",variant:r="default",className:i=""}=e,a=Yo(e,["title","size","variant","className"]);return Z.createElement("svg",Object.assign({className:`${YT} ${i}`,style:{width:py[n],height:py[n]},viewBox:"0 0 50 50"},a),Z.createElement("title",null,t),Z.createElement("circle",{className:hy[r].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),Z.createElement("circle",{className:`${ez} ${hy[r].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))};Fe(`.TextArea-module_textArea__Fp7-I {
  border: none;
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
`);var ws;(function(e){e.Primary="primary",e.Secondary="secondary"})(ws||(ws={}));const u1=T.createContext(void 0),sm=()=>{const e=T.useContext(u1);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var lz="Accordion-module_accordion__LVhhv";Fe(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);const c1=({children:e,open:t,onClick:n,iconVariant:r=ws.Primary})=>{const i=T.useId(),a=T.useId();return Z.createElement("div",{className:lz},Z.createElement(u1.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};c1.displayName="Accordion";const d1=({children:e})=>{const{open:t,contentId:n,headerId:r}=sm();return Z.createElement("div",null,t&&Z.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};d1.displayName="AccordionContent";var uz="AccordionHeader-module_accordionHeader__nap0Y",cz="AccordionHeader-module_subtitle__CpDh7",dz="AccordionHeader-module_withSubtitle__zCXnG",fz="AccordionHeader-module_title__3VVAA",pz="AccordionHeader-module_actions__WCBkS";Fe(`.AccordionHeader-module_accordionHeader__nap0Y {
  --component-accordion_header-border_top_color: var(--colors-grey-200);
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_width: var(--border_width-thin);
  --component-accordion_header-color-background: var(--colors-white);
  align-items: center;
  background-color: var(--component-accordion_header-color-background);
  border-top-color: var(--component-accordion_header-border_top_color);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-width: var(--component-accordion_header-border_top_width);
  display: flex;
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .AccordionHeader-module_subtitle__CpDh7 {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .AccordionHeader-module_accordionHeader__nap0Y.AccordionHeader-module_withSubtitle__zCXnG {
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
    padding-top: 0.2rem;
  }

  .AccordionHeader-module_subtitle__CpDh7 {
    display: inline-block;
    font-size: 0.9rem;
    opacity: 60%;
  }
}

.AccordionHeader-module_title__3VVAA {
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-color-background: none;
  --component-accordion_header_title-font_size: var(--font_size-300);
  --component-accordion_header_title-font_weight: var(--component-panel-font_weight-heading);
  --component-accordion_header_title-spacing-margin_left: 1.6rem;
  background-color: var(--component-accordion_header_title-color-background);
  border-bottom-style: var(--component-accordion_header_title-border_bottom_style);
  border-left-style: var(--component-accordion_header_title-border_left_style);
  border-right-style: var(--component-accordion_header_title-border_right_style);
  border-top-style: var(--component-accordion_header_title-border_top_style);
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  line-height: 16px;
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
  text-align: left;
}

.AccordionHeader-module_actions__WCBkS {
  align-items: center;
  column-gap: 0.3rem;
  display: grid;
  grid-auto-flow: column;
  padding: 0 0.2rem;
}
`);var hz="AccordionIcon-module_accordionIcon__C4yU3",mz="AccordionIcon-module_opened__jWTPV";Fe(`.AccordionIcon-module_accordionIcon__C4yU3 {
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

.AccordionIcon-module_accordionIcon__C4yU3.AccordionIcon-module_opened__jWTPV {
  transform: rotate(90deg);
}
`);const _z=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`
        M 12.8834 34
        L 10      31.0909
        L 22.9754 18
        L 10       4.90909
        L 12.8834  2
        L 28.7423 18
        L 12.8834 34
        Z
      `,fill:hO})),gz=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`
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
      `,fill:mO})),f1=()=>{const{onClick:e,open:t,iconVariant:n}=sm(),r={className:St(hz,t&&mz),onClick:e};switch(n){case ws.Primary:return Z.createElement(_z,Object.assign({},r));case ws.Secondary:return Z.createElement(gz,Object.assign({},r))}};f1.displayName="AccordionIcon";const p1=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=sm();return Z.createElement("div",{className:St(uz,{[dz]:n})},Z.createElement(f1,null),Z.createElement("button",{className:fz,"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&Z.createElement("span",{"data-testid":"accordion-header-subtitle",className:cz},n)),Z.createElement("div",{className:pz},t))};p1.displayName="AccordionHeader";var my={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};Fe(`.List-module_list__9aWGq {
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
`);const vz=({children:e,borderStyle:t="solid"})=>Z.createElement("ul",{className:my.list+" "+my[t]},e);var yz="ListItem-module_listItem__AJQMK";Fe(`.ListItem-module_listItem__AJQMK {
  border-bottom-color: var(--component-list-border_color);
  border-bottom-style: var(--component-list-border_style);
  border-bottom-width: var(--component-list-border_width);
  display: block;
}
`);const Po=({children:e})=>Z.createElement("li",{className:yz},e);Fe(`.Table-module_table__Dkosn {
  align-self: stretch;
  background-color: #ffffff;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
  flex-grow: 0;
  flex: none;
  order: 3;
  width: 100%;
}
`);T.createContext(void 0);T.createContext({variantStandard:"body"});Fe(`.TableHeader-module_table-header__mrqgB {
  align-self: stretch;
  background: #f5f5f5;
  flex-grow: 0;
  flex: none;
  order: 1;
}
`);Fe(`.TableRow-module_tableRow__lREy- {
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
`);Fe(`.TableCell-module_headerTableCell__1Riow {
  background: #f5f5f5;
  margin: 20px 0 20px 0;
  padding: 8px;
  text-align: left;
  user-select: none;
}

.TableCell-module_headerTableCellRadiobutton__aHo20 {
  background: #f5f5f5;
  margin: 10px 0 10px 0;
  padding: 8px;
  text-align: left;
  user-select: none;
}

.TableCell-module_bodyTableCell__MTK68 {
  border-bottom: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  margin: 20px 0 20px 0;
  max-width: 300px;
  text-align: left;
}

.TableCell-module_bodyTableCellRadiobutton__zztqA {
  border-bottom: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  text-align: left;
}

.TableCell-module_image__vWvwd {
  max-height: 45px;
  max-width: 45px;
}

.TableCell-module_input__cyAaE {
  margin: 0 15px 0 15px;
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
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

.TableCell-module_iconDesc__bD3-5 {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.TableCell-module_iconAsc__bGb1O {
  fill: rgb(0, 0, 0);
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
`);Fe(`.TableBody-module_tableBody__fKFbY {
  align-self: stretch;
  background-color: #ffff;
  flex-grow: 0;
  flex: none;
  order: 2;
}
`);Fe(`.TableFooter-module_tableFooter__MJ37D {
  align-self: stretch;
  background: #f5f5f5;
  flex-grow: 0;
  flex: none;
  order: 1;
}
`);function h1(e,t){return function(){return e.apply(t,arguments)}}const{toString:m1}=Object.prototype,{getPrototypeOf:lm}=Object,um=(e=>t=>{const n=m1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Er=e=>(e=e.toLowerCase(),t=>um(t)===e),Ac=e=>t=>typeof t===e,{isArray:ra}=Array,ks=Ac("undefined");function bz(e){return e!==null&&!ks(e)&&e.constructor!==null&&!ks(e.constructor)&&uo(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _1=Er("ArrayBuffer");function xz(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_1(e.buffer),t}const wz=Ac("string"),uo=Ac("function"),g1=Ac("number"),cm=e=>e!==null&&typeof e=="object",kz=e=>e===!0||e===!1,$l=e=>{if(um(e)!=="object")return!1;const t=lm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Sz=Er("Date"),Pz=Er("File"),Cz=Er("Blob"),Ez=Er("FileList"),Oz=e=>cm(e)&&uo(e.pipe),Tz=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||m1.call(e)===t||uo(e.toString)&&e.toString()===t)},zz=Er("URLSearchParams"),Rz=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Is(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ra(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function v1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const y1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),b1=e=>!ks(e)&&e!==y1;function Np(){const{caseless:e}=b1(this)&&this||{},t={},n=(r,i)=>{const a=e&&v1(t,i)||i;$l(t[a])&&$l(r)?t[a]=Np(t[a],r):$l(r)?t[a]=Np({},r):ra(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Is(arguments[r],n);return t}const Lz=(e,t,n,{allOwnKeys:r}={})=>(Is(t,(i,a)=>{n&&uo(i)?e[a]=h1(i,n):e[a]=i},{allOwnKeys:r}),e),Az=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bz=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Nz=(e,t,n,r)=>{let i,a,l;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&lm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Iz=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Mz=e=>{if(!e)return null;if(ra(e))return e;let t=e.length;if(!g1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Dz=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&lm(Uint8Array)),Fz=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},jz=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Uz=Er("HTMLFormElement"),$z=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),_y=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Wz=Er("RegExp"),x1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Is(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},Zz=e=>{x1(e,(t,n)=>{if(uo(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(uo(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Hz=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return ra(e)?r(e):r(String(e).split(t)),n},Vz=()=>{},qz=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Jd="abcdefghijklmnopqrstuvwxyz",gy="0123456789",w1={DIGIT:gy,ALPHA:Jd,ALPHA_DIGIT:Jd+Jd.toUpperCase()+gy},Kz=(e=16,t=w1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Qz(e){return!!(e&&uo(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Gz=e=>{const t=new Array(10),n=(r,i)=>{if(cm(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=ra(r)?[]:{};return Is(r,(l,u)=>{const d=n(l,i+1);!ks(d)&&(a[u]=d)}),t[i]=void 0,a}}return r};return n(e,0)},q={isArray:ra,isArrayBuffer:_1,isBuffer:bz,isFormData:Tz,isArrayBufferView:xz,isString:wz,isNumber:g1,isBoolean:kz,isObject:cm,isPlainObject:$l,isUndefined:ks,isDate:Sz,isFile:Pz,isBlob:Cz,isRegExp:Wz,isFunction:uo,isStream:Oz,isURLSearchParams:zz,isTypedArray:Dz,isFileList:Ez,forEach:Is,merge:Np,extend:Lz,trim:Rz,stripBOM:Az,inherits:Bz,toFlatObject:Nz,kindOf:um,kindOfTest:Er,endsWith:Iz,toArray:Mz,forEachEntry:Fz,matchAll:jz,isHTMLForm:Uz,hasOwnProperty:_y,hasOwnProp:_y,reduceDescriptors:x1,freezeMethods:Zz,toObjectSet:Hz,toCamelCase:$z,noop:Vz,toFiniteNumber:qz,findKey:v1,global:y1,isContextDefined:b1,ALPHABET:w1,generateString:Kz,isSpecCompliantForm:Qz,toJSONObject:Gz};function Re(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}q.inherits(Re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const k1=Re.prototype,S1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{S1[e]={value:e}});Object.defineProperties(Re,S1);Object.defineProperty(k1,"isAxiosError",{value:!0});Re.from=(e,t,n,r,i,a)=>{const l=Object.create(k1);return q.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),Re.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const Xz=null;function Ip(e){return q.isPlainObject(e)||q.isArray(e)}function P1(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function vy(e,t,n){return e?e.concat(t).map(function(i,a){return i=P1(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function Jz(e){return q.isArray(e)&&!e.some(Ip)}const Yz=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function Bc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,P){return!q.isUndefined(P[v])});const r=n.metaTokens,i=n.visitor||m,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw new TypeError("visitor must be a function");function f(w){if(w===null)return"";if(q.isDate(w))return w.toISOString();if(!d&&q.isBlob(w))throw new Re("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(w)||q.isTypedArray(w)?d&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function m(w,v,P){let y=w;if(w&&!P&&typeof w=="object"){if(q.endsWith(v,"{}"))v=r?v:v.slice(0,-2),w=JSON.stringify(w);else if(q.isArray(w)&&Jz(w)||(q.isFileList(w)||q.endsWith(v,"[]"))&&(y=q.toArray(w)))return v=P1(v),y.forEach(function(S,C){!(q.isUndefined(S)||S===null)&&t.append(l===!0?vy([v],C,a):l===null?v:v+"[]",f(S))}),!1}return Ip(w)?!0:(t.append(vy(P,v,a),f(w)),!1)}const h=[],g=Object.assign(Yz,{defaultVisitor:m,convertValue:f,isVisitable:Ip});function x(w,v){if(!q.isUndefined(w)){if(h.indexOf(w)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(w),q.forEach(w,function(y,b){(!(q.isUndefined(y)||y===null)&&i.call(t,y,q.isString(b)?b.trim():b,v,g))===!0&&x(y,v?v.concat(b):[b])}),h.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return x(e),t}function yy(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function dm(e,t){this._pairs=[],e&&Bc(e,this,t)}const C1=dm.prototype;C1.append=function(t,n){this._pairs.push([t,n])};C1.toString=function(t){const n=t?function(r){return t.call(this,r,yy)}:yy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function eR(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function E1(e,t,n){if(!t)return e;const r=n&&n.encode||eR,i=n&&n.serialize;let a;if(i?a=i(t,n):a=q.isURLSearchParams(t)?t.toString():new dm(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class tR{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(r){r!==null&&t(r)})}}const by=tR,O1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nR=typeof URLSearchParams<"u"?URLSearchParams:dm,rR=typeof FormData<"u"?FormData:null,oR=typeof Blob<"u"?Blob:null,iR=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),aR=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Gn={isBrowser:!0,classes:{URLSearchParams:nR,FormData:rR,Blob:oR},isStandardBrowserEnv:iR,isStandardBrowserWebWorkerEnv:aR,protocols:["http","https","file","blob","url","data"]};function sR(e,t){return Bc(e,new Gn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Gn.isNode&&q.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function lR(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function uR(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function T1(e){function t(n,r,i,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&q.isArray(i)?i.length:l,d?(q.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!u):((!i[l]||!q.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&q.isArray(i[l])&&(i[l]=uR(i[l])),!u)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(r,i)=>{t(lR(r),i,n,0)}),n}return null}const cR={"Content-Type":void 0};function dR(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Nc={transitional:O1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=q.isObject(t);if(a&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return i&&i?JSON.stringify(T1(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return sR(t,this.formSerializer).toString();if((u=q.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Bc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),dR(t)):t}],transformResponse:[function(t){const n=this.transitional||Nc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&q.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?Re.from(u,Re.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gn.classes.FormData,Blob:Gn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],function(t){Nc.headers[t]={}});q.forEach(["post","put","patch"],function(t){Nc.headers[t]=q.merge(cR)});const fm=Nc,fR=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pR=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&fR[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xy=Symbol("internals");function Ba(e){return e&&String(e).trim().toLowerCase()}function Wl(e){return e===!1||e==null?e:q.isArray(e)?e.map(Wl):String(e)}function hR(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function mR(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Yd(e,t,n,r,i){if(q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function _R(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function gR(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}class Ic{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(u,d,f){const m=Ba(d);if(!m)throw new Error("header name must be a non-empty string");const h=q.findKey(i,m);(!h||i[h]===void 0||f===!0||f===void 0&&i[h]!==!1)&&(i[h||d]=Wl(u))}const l=(u,d)=>q.forEach(u,(f,m)=>a(f,m,d));return q.isPlainObject(t)||t instanceof this.constructor?l(t,n):q.isString(t)&&(t=t.trim())&&!mR(t)?l(pR(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=Ba(t),t){const r=q.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return hR(i);if(q.isFunction(n))return n.call(this,i,r);if(q.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ba(t),t){const r=q.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Yd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(l){if(l=Ba(l),l){const u=q.findKey(r,l);u&&(!n||Yd(r,r[u],u,n))&&(delete r[u],i=!0)}}return q.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Yd(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return q.forEach(this,(i,a)=>{const l=q.findKey(r,a);if(l){n[l]=Wl(i),delete n[a];return}const u=t?_R(a):String(a).trim();u!==a&&delete n[a],n[u]=Wl(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&q.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[xy]=this[xy]={accessors:{}}).accessors,i=this.prototype;function a(l){const u=Ba(l);r[u]||(gR(i,l),r[u]=!0)}return q.isArray(t)?t.forEach(a):a(t),this}}Ic.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.freezeMethods(Ic.prototype);q.freezeMethods(Ic);const yr=Ic;function ef(e,t){const n=this||fm,r=t||n,i=yr.from(r.headers);let a=r.data;return q.forEach(e,function(u){a=u.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function z1(e){return!!(e&&e.__CANCEL__)}function Ms(e,t,n){Re.call(this,e??"canceled",Re.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(Ms,Re,{__CANCEL__:!0});function vR(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Re("Request failed with status code "+n.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const yR=Gn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),q.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),q.isString(a)&&d.push("path="+a),q.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function bR(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xR(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function R1(e,t){return e&&!bR(t)?xR(e,t):t}const wR=Gn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const u=q.isString(l)?i(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function kR(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function SR(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),m=r[a];l||(l=f),n[i]=d,r[i]=f;let h=a,g=0;for(;h!==i;)g+=n[h++],h=h%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),f-l<t)return;const x=m&&f-m;return x?Math.round(g*1e3/x):void 0}}function wy(e,t){let n=0;const r=SR(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-n,d=r(u),f=a<=l;n=a;const m={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&f?(l-a)/d:void 0,event:i};m[t?"download":"upload"]=!0,e(m)}}const PR=typeof XMLHttpRequest<"u",CR=PR&&function(e){return new Promise(function(n,r){let i=e.data;const a=yr.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}q.isFormData(i)&&(Gn.isStandardBrowserEnv||Gn.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let f=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(x+":"+w))}const m=R1(e.baseURL,e.url);f.open(e.method.toUpperCase(),E1(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function h(){if(!f)return;const x=yr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),v={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:x,config:e,request:f};vR(function(y){n(y),d()},function(y){r(y),d()},v),f=null}if("onloadend"in f?f.onloadend=h:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(h)},f.onabort=function(){f&&(r(new Re("Request aborted",Re.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new Re("Network Error",Re.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||O1;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new Re(w,v.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,e,f)),f=null},Gn.isStandardBrowserEnv){const x=(e.withCredentials||wR(m))&&e.xsrfCookieName&&yR.read(e.xsrfCookieName);x&&a.set(e.xsrfHeaderName,x)}i===void 0&&a.setContentType(null),"setRequestHeader"in f&&q.forEach(a.toJSON(),function(w,v){f.setRequestHeader(v,w)}),q.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),l&&l!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",wy(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",wy(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=x=>{f&&(r(!x||x.type?new Ms(null,e,f):x),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const g=kR(m);if(g&&Gn.protocols.indexOf(g)===-1){r(new Re("Unsupported protocol "+g+":",Re.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Zl={http:Xz,xhr:CR};q.forEach(Zl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ER={getAdapter:e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=q.isString(n)?Zl[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Re(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(q.hasOwnProp(Zl,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!q.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Zl};function tf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ms(null,e)}function ky(e){return tf(e),e.headers=yr.from(e.headers),e.data=ef.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ER.getAdapter(e.adapter||fm.adapter)(e).then(function(r){return tf(e),r.data=ef.call(e,e.transformResponse,r),r.headers=yr.from(r.headers),r},function(r){return z1(r)||(tf(e),r&&r.response&&(r.response.data=ef.call(e,e.transformResponse,r.response),r.response.headers=yr.from(r.response.headers))),Promise.reject(r)})}const Sy=e=>e instanceof yr?e.toJSON():e;function Yi(e,t){t=t||{};const n={};function r(f,m,h){return q.isPlainObject(f)&&q.isPlainObject(m)?q.merge.call({caseless:h},f,m):q.isPlainObject(m)?q.merge({},m):q.isArray(m)?m.slice():m}function i(f,m,h){if(q.isUndefined(m)){if(!q.isUndefined(f))return r(void 0,f,h)}else return r(f,m,h)}function a(f,m){if(!q.isUndefined(m))return r(void 0,m)}function l(f,m){if(q.isUndefined(m)){if(!q.isUndefined(f))return r(void 0,f)}else return r(void 0,m)}function u(f,m,h){if(h in t)return r(f,m);if(h in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(f,m)=>i(Sy(f),Sy(m),!0)};return q.forEach(Object.keys(e).concat(Object.keys(t)),function(m){const h=d[m]||i,g=h(e[m],t[m],m);q.isUndefined(g)&&h!==u||(n[m]=g)}),n}const L1="1.3.4",pm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Py={};pm.transitional=function(t,n,r){function i(a,l){return"[Axios v"+L1+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new Re(i(l," has been removed"+(n?" in "+n:"")),Re.ERR_DEPRECATED);return n&&!Py[l]&&(Py[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function OR(e,t,n){if(typeof e!="object")throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new Re("option "+a+" must be "+d,Re.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Re("Unknown option "+a,Re.ERR_BAD_OPTION)}}const Mp={assertOptions:OR,validators:pm},Br=Mp.validators;class Bu{constructor(t){this.defaults=t,this.interceptors={request:new by,response:new by}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Yi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Mp.assertOptions(r,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1),i!==void 0&&Mp.assertOptions(i,{encode:Br.function,serialize:Br.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&q.merge(a.common,a[n.method]),l&&q.forEach(["delete","get","head","post","put","patch","common"],w=>{delete a[w]}),n.headers=yr.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(d=d&&v.synchronous,u.unshift(v.fulfilled,v.rejected))});const f=[];this.interceptors.response.forEach(function(v){f.push(v.fulfilled,v.rejected)});let m,h=0,g;if(!d){const w=[ky.bind(this),void 0];for(w.unshift.apply(w,u),w.push.apply(w,f),g=w.length,m=Promise.resolve(n);h<g;)m=m.then(w[h++],w[h++]);return m}g=u.length;let x=n;for(h=0;h<g;){const w=u[h++],v=u[h++];try{x=w(x)}catch(P){v.call(this,P);break}}try{m=ky.call(this,x)}catch(w){return Promise.reject(w)}for(h=0,g=f.length;h<g;)m=m.then(f[h++],f[h++]);return m}getUri(t){t=Yi(this.defaults,t);const n=R1(t.baseURL,t.url);return E1(n,t.params,t.paramsSerializer)}}q.forEach(["delete","get","head","options"],function(t){Bu.prototype[t]=function(n,r){return this.request(Yi(r||{},{method:t,url:n,data:(r||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(Yi(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}Bu.prototype[t]=n(),Bu.prototype[t+"Form"]=n(!0)});const Hl=Bu;class hm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new Ms(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new hm(function(i){t=i}),cancel:t}}}const TR=hm;function zR(e){return function(n){return e.apply(null,n)}}function RR(e){return q.isObject(e)&&e.isAxiosError===!0}const Dp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dp).forEach(([e,t])=>{Dp[t]=e});const LR=Dp;function A1(e){const t=new Hl(e),n=h1(Hl.prototype.request,t);return q.extend(n,Hl.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return A1(Yi(e,i))},n}const mt=A1(fm);mt.Axios=Hl;mt.CanceledError=Ms;mt.CancelToken=TR;mt.isCancel=z1;mt.VERSION=L1;mt.toFormData=Bc;mt.AxiosError=Re;mt.Cancel=mt.CanceledError;mt.all=function(t){return Promise.all(t)};mt.spread=zR;mt.isAxiosError=RR;mt.mergeConfig=Yi;mt.AxiosHeaders=yr;mt.formToJSON=e=>T1(q.isHTMLForm(e)?new FormData(e):e);mt.HttpStatusCode=LR;mt.default=mt;const B1=mt;function Rn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function co(e){return!!e&&!!e[Qe]}function Sr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===UR}(e)||Array.isArray(e)||!!e[Ly]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ly])||mm(e)||_m(e))}function Go(e,t,n){n===void 0&&(n=!1),oa(e)===0?(n?Object.keys:$i)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function oa(e){var t=e[Qe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:mm(e)?2:_m(e)?3:0}function Ui(e,t){return oa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function AR(e,t){return oa(e)===2?e.get(t):e[t]}function N1(e,t,n){var r=oa(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function I1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function mm(e){return FR&&e instanceof Map}function _m(e){return jR&&e instanceof Set}function To(e){return e.o||e.t}function gm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=D1(e);delete t[Qe];for(var n=$i(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function vm(e,t){return t===void 0&&(t=!1),ym(e)||co(e)||!Sr(e)||(oa(e)>1&&(e.set=e.add=e.clear=e.delete=BR),Object.freeze(e),t&&Go(e,function(n,r){return vm(r,!0)},!0)),e}function BR(){Rn(2)}function ym(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function tr(e){var t=$p[e];return t||Rn(18,e),t}function NR(e,t){$p[e]||($p[e]=t)}function Fp(){return Ss}function nf(e,t){t&&(tr("Patches"),e.u=[],e.s=[],e.v=t)}function Nu(e){jp(e),e.p.forEach(IR),e.p=null}function jp(e){e===Ss&&(Ss=e.l)}function Cy(e){return Ss={p:[],l:Ss,h:e,m:!0,_:0}}function IR(e){var t=e[Qe];t.i===0||t.i===1?t.j():t.O=!0}function rf(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||tr("ES5").S(t,e,r),r?(n[Qe].P&&(Nu(t),Rn(4)),Sr(e)&&(e=Iu(t,e),t.l||Mu(t,e)),t.u&&tr("Patches").M(n[Qe].t,e,t.u,t.s)):e=Iu(t,n,[]),Nu(t),t.u&&t.v(t.u,t.s),e!==M1?e:void 0}function Iu(e,t,n){if(ym(t))return t;var r=t[Qe];if(!r)return Go(t,function(u,d){return Ey(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Mu(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=gm(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Go(a,function(u,d){return Ey(e,r,i,u,d,n,l)}),Mu(e,i,!1),n&&e.u&&tr("Patches").N(r,n,e.u,e.s)}return r.o}function Ey(e,t,n,r,i,a,l){if(co(i)){var u=Iu(e,i,a&&t&&t.i!==3&&!Ui(t.R,r)?a.concat(r):void 0);if(N1(n,r,u),!co(u))return;e.m=!1}else l&&n.add(i);if(Sr(i)&&!ym(i)){if(!e.h.D&&e._<1)return;Iu(e,i),t&&t.A.l||Mu(e,i)}}function Mu(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&vm(t,n)}function of(e,t){var n=e[Qe];return(n?To(n):e)[t]}function Oy(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function jr(e){e.P||(e.P=!0,e.l&&jr(e.l))}function af(e){e.o||(e.o=gm(e.t))}function Up(e,t,n){var r=mm(t)?tr("MapSet").F(t,n):_m(t)?tr("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),u={i:l?1:0,A:a?a.A:Fp(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=u,f=Ps;l&&(d=[u],f=Fa);var m=Proxy.revocable(d,f),h=m.revoke,g=m.proxy;return u.k=g,u.j=h,g}(t,n):tr("ES5").J(t,n);return(n?n.A:Fp()).p.push(r),r}function MR(e){return co(e)||Rn(22,e),function t(n){if(!Sr(n))return n;var r,i=n[Qe],a=oa(n);if(i){if(!i.P&&(i.i<4||!tr("ES5").K(i)))return i.t;i.I=!0,r=Ty(n,a),i.I=!1}else r=Ty(n,a);return Go(r,function(l,u){i&&AR(i.t,l)===u||N1(r,l,t(u))}),a===3?new Set(r):r}(e)}function Ty(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return gm(e)}function DR(){function e(a,l){var u=i[a];return u?u.enumerable=l:i[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[Qe];return Ps.get(d,a)},set:function(d){var f=this[Qe];Ps.set(f,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][Qe];if(!u.P)switch(u.i){case 5:r(u)&&jr(u);break;case 4:n(u)&&jr(u)}}}function n(a){for(var l=a.t,u=a.k,d=$i(u),f=d.length-1;f>=0;f--){var m=d[f];if(m!==Qe){var h=l[m];if(h===void 0&&!Ui(l,m))return!0;var g=u[m],x=g&&g[Qe];if(x?x.t!==h:!I1(g,h))return!0}}var w=!!l[Qe];return d.length!==$i(l).length+(w?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};NR("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(m,h){if(m){for(var g=Array(h.length),x=0;x<h.length;x++)Object.defineProperty(g,""+x,e(x,!0));return g}var w=D1(h);delete w[Qe];for(var v=$i(w),P=0;P<v.length;P++){var y=v[P];w[y]=e(y,m||!!w[y].enumerable)}return Object.create(Object.getPrototypeOf(h),w)}(u,a),f={i:u?5:4,A:l?l.A:Fp(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,Qe,{value:f,writable:!0}),d},S:function(a,l,u){u?co(l)&&l[Qe].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var m=f[Qe];if(m){var h=m.t,g=m.k,x=m.R,w=m.i;if(w===4)Go(g,function(S){S!==Qe&&(h[S]!==void 0||Ui(h,S)?x[S]||d(g[S]):(x[S]=!0,jr(m)))}),Go(h,function(S){g[S]!==void 0||Ui(g,S)||(x[S]=!1,jr(m))});else if(w===5){if(r(m)&&(jr(m),x.length=!0),g.length<h.length)for(var v=g.length;v<h.length;v++)x[v]=!1;else for(var P=h.length;P<g.length;P++)x[P]=!0;for(var y=Math.min(g.length,h.length),b=0;b<y;b++)g.hasOwnProperty(b)||(x[b]=!0),x[b]===void 0&&d(g[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var zy,Ss,bm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",FR=typeof Map<"u",jR=typeof Set<"u",Ry=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",M1=bm?Symbol.for("immer-nothing"):((zy={})["immer-nothing"]=!0,zy),Ly=bm?Symbol.for("immer-draftable"):"__$immer_draftable",Qe=bm?Symbol.for("immer-state"):"__$immer_state",UR=""+Object.prototype.constructor,$i=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,D1=Object.getOwnPropertyDescriptors||function(e){var t={};return $i(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},$p={},Ps={get:function(e,t){if(t===Qe)return e;var n=To(e);if(!Ui(n,t))return function(i,a,l){var u,d=Oy(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Sr(r)?r:r===of(e.t,t)?(af(e),e.o[t]=Up(e.A.h,r,e)):r},has:function(e,t){return t in To(e)},ownKeys:function(e){return Reflect.ownKeys(To(e))},set:function(e,t,n){var r=Oy(To(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=of(To(e),t),a=i?.[Qe];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(I1(n,i)&&(n!==void 0||Ui(e.t,t)))return!0;af(e),jr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return of(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,af(e),jr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=To(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Rn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Rn(12)}},Fa={};Go(Ps,function(e,t){Fa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Fa.deleteProperty=function(e,t){return Fa.set.call(this,e,t,void 0)},Fa.set=function(e,t,n){return Ps.set.call(this,e[0],t,n,e[0])};var $R=function(){function e(n){var r=this;this.g=Ry,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var d=r;return function(v){var P=this;v===void 0&&(v=u);for(var y=arguments.length,b=Array(y>1?y-1:0),S=1;S<y;S++)b[S-1]=arguments[S];return d.produce(v,function(C){var z;return(z=a).call.apply(z,[P,C].concat(b))})}}var f;if(typeof a!="function"&&Rn(6),l!==void 0&&typeof l!="function"&&Rn(7),Sr(i)){var m=Cy(r),h=Up(r,i,void 0),g=!0;try{f=a(h),g=!1}finally{g?Nu(m):jp(m)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(v){return nf(m,l),rf(v,m)},function(v){throw Nu(m),v}):(nf(m,l),rf(f,m))}if(!i||typeof i!="object"){if((f=a(i))===void 0&&(f=i),f===M1&&(f=void 0),r.D&&vm(f,!0),l){var x=[],w=[];tr("Patches").M(i,f,x,w),l(x,w)}return f}Rn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(f){for(var m=arguments.length,h=Array(m>1?m-1:0),g=1;g<m;g++)h[g-1]=arguments[g];return r.produceWithPatches(f,function(x){return i.apply(void 0,[x].concat(h))})};var l,u,d=r.produce(i,a,function(f,m){l=f,u=m});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Sr(n)||Rn(8),co(n)&&(n=MR(n));var r=Cy(this),i=Up(this,n,void 0);return i[Qe].C=!0,jp(r),i},t.finishDraft=function(n,r){var i=n&&n[Qe],a=i.A;return nf(a,r),rf(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Ry&&Rn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=tr("Patches").$;return co(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),rn=new $R,F1=rn.produce;rn.produceWithPatches.bind(rn);rn.setAutoFreeze.bind(rn);rn.setUseProxies.bind(rn);rn.applyPatches.bind(rn);rn.createDraft.bind(rn);rn.finishDraft.bind(rn);function Ay(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function By(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ay(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ay(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ny=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),sf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Du={INIT:"@@redux/INIT"+sf(),REPLACE:"@@redux/REPLACE"+sf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+sf()}};function WR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function j1(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(zt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(zt(1));return n(j1)(e,t)}if(typeof e!="function")throw new Error(zt(2));var i=e,a=t,l=[],u=l,d=!1;function f(){u===l&&(u=l.slice())}function m(){if(d)throw new Error(zt(3));return a}function h(v){if(typeof v!="function")throw new Error(zt(4));if(d)throw new Error(zt(5));var P=!0;return f(),u.push(v),function(){if(P){if(d)throw new Error(zt(6));P=!1,f();var b=u.indexOf(v);u.splice(b,1),l=null}}}function g(v){if(!WR(v))throw new Error(zt(7));if(typeof v.type>"u")throw new Error(zt(8));if(d)throw new Error(zt(9));try{d=!0,a=i(a,v)}finally{d=!1}for(var P=l=u,y=0;y<P.length;y++){var b=P[y];b()}return v}function x(v){if(typeof v!="function")throw new Error(zt(10));i=v,g({type:Du.REPLACE})}function w(){var v,P=h;return v={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(zt(11));function S(){b.next&&b.next(m())}S();var C=P(S);return{unsubscribe:C}}},v[Ny]=function(){return this},v}return g({type:Du.INIT}),r={dispatch:g,subscribe:h,getState:m,replaceReducer:x},r[Ny]=w,r}function ZR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Du.INIT});if(typeof r>"u")throw new Error(zt(12));if(typeof n(void 0,{type:Du.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(zt(13))})}function HR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{ZR(n)}catch(u){l=u}return function(d,f){if(d===void 0&&(d={}),l)throw l;for(var m=!1,h={},g=0;g<a.length;g++){var x=a[g],w=n[x],v=d[x],P=w(v,f);if(typeof P>"u")throw f&&f.type,new Error(zt(14));h[x]=P,m=m||P!==v}return m=m||a.length!==Object.keys(d).length,m?h:d}}function Fu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function VR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(zt(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=Fu.apply(void 0,u)(i.dispatch),By(By({},i),{},{dispatch:a})}}}function U1(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(i,a,e):l(u)}}};return t}var $1=U1();$1.withExtraArgument=U1;const Iy=$1;var qR=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),KR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(f){return function(m){return d([f,m])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=f[0]&2?i.return:f[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,f[1])).done)return a;switch(i=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(m){f=[6,m],i=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},ju=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},QR=Object.defineProperty,GR=Object.defineProperties,XR=Object.getOwnPropertyDescriptors,My=Object.getOwnPropertySymbols,JR=Object.prototype.hasOwnProperty,YR=Object.prototype.propertyIsEnumerable,Dy=function(e,t,n){return t in e?QR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},no=function(e,t){for(var n in t||(t={}))JR.call(t,n)&&Dy(e,n,t[n]);if(My)for(var r=0,i=My(t);r<i.length;r++){var n=i[r];YR.call(t,n)&&Dy(e,n,t[n])}return e},lf=function(e,t){return GR(e,XR(t))},eL=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{u(n.next(d))}catch(f){i(f)}},l=function(d){try{u(n.throw(d))}catch(f){i(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},tL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Fu:Fu.apply(null,arguments)};function nL(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var rL=function(e){qR(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ju([void 0],n[0].concat(this)))):new(t.bind.apply(t,ju([void 0],n.concat(this))))},t}(Array);function Wp(e){return Sr(e)?F1(e,function(){}):e}function oL(e){return typeof e=="boolean"}function iL(){return function(t){return aL(t)}}function aL(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new rL;return n&&(oL(n)?r.push(Iy):r.push(Iy.withExtraArgument(n.extraArgument))),r}var sL=!0;function lL(e){var t=iL(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,m=f===void 0?void 0:f,h=n.enhancers,g=h===void 0?void 0:h,x;if(typeof i=="function")x=i;else if(nL(i))x=HR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var w=l;typeof w=="function"&&(w=w(t));var v=VR.apply(void 0,w),P=Fu;d&&(P=tL(no({trace:!sL},typeof d=="object"&&d)));var y=[v];Array.isArray(g)?y=ju([v],g):typeof g=="function"&&(y=g(y));var b=P.apply(void 0,y);return j1(x,m,b)}function ro(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return no(no({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function W1(e){var t={},n=[],r,i={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function uL(e){return typeof e=="function"}function cL(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?W1(t):[t,n,r],a=i[0],l=i[1],u=i[2],d;if(uL(e))d=function(){return Wp(e())};else{var f=Wp(e);d=function(){return f}}function m(h,g){h===void 0&&(h=d());var x=ju([a[g.type]],l.filter(function(w){var v=w.matcher;return v(g)}).map(function(w){var v=w.reducer;return v}));return x.filter(function(w){return!!w}).length===0&&(x=[u]),x.reduce(function(w,v){if(v)if(co(w)){var P=w,y=v(P,g);return y===void 0?w:y}else{if(Sr(w))return F1(w,function(b){return v(b,g)});var y=v(w,g);if(y===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return w},h)}return m.getInitialState=d,m}function dL(e,t){return e+"/"+t}function fL(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Wp(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},u={};i.forEach(function(m){var h=r[m],g=dL(t,m),x,w;"reducer"in h?(x=h.reducer,w=h.prepare):x=h,a[m]=x,l[g]=x,u[m]=w?ro(g,w):ro(g)});function d(){var m=typeof e.extraReducers=="function"?W1(e.extraReducers):[e.extraReducers],h=m[0],g=h===void 0?{}:h,x=m[1],w=x===void 0?[]:x,v=m[2],P=v===void 0?void 0:v,y=no(no({},g),l);return cL(n,function(b){for(var S in y)b.addCase(S,y[S]);for(var C=0,z=w;C<z.length;C++){var N=z[C];b.addMatcher(N.matcher,N.reducer)}P&&b.addDefaultCase(P)})}var f;return{name:t,reducer:function(m,h){return f||(f=d()),f(m,h)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var pL="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hL=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=pL[Math.random()*64|0];return t},mL=["name","message","stack","code"],uf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Fy=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),_L=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=mL;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Z1=function(){function e(t,n,r){var i=ro(t+"/fulfilled",function(f,m,h,g){return{payload:f,meta:lf(no({},g||{}),{arg:h,requestId:m,requestStatus:"fulfilled"})}}),a=ro(t+"/pending",function(f,m,h){return{payload:void 0,meta:lf(no({},h||{}),{arg:m,requestId:f,requestStatus:"pending"})}}),l=ro(t+"/rejected",function(f,m,h,g,x){return{payload:g,error:(r&&r.serializeError||_L)(f||"Rejected"),meta:lf(no({},x||{}),{arg:h,requestId:m,rejectedWithValue:!!g,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(m,h,g){var x=r?.idGenerator?r.idGenerator(f):hL(),w=new u,v;function P(b){v=b,w.abort()}var y=function(){return eL(this,null,function(){var b,S,C,z,N,A,j;return KR(this,function(K){switch(K.label){case 0:return K.trys.push([0,4,,5]),z=(b=r?.condition)==null?void 0:b.call(r,f,{getState:h,extra:g}),vL(z)?[4,z]:[3,2];case 1:z=K.sent(),K.label=2;case 2:if(z===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return N=new Promise(function(W,Y){return w.signal.addEventListener("abort",function(){return Y({name:"AbortError",message:v||"Aborted"})})}),m(a(x,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:x,arg:f},{getState:h,extra:g}))),[4,Promise.race([N,Promise.resolve(n(f,{dispatch:m,getState:h,extra:g,requestId:x,signal:w.signal,abort:P,rejectWithValue:function(W,Y){return new uf(W,Y)},fulfillWithValue:function(W,Y){return new Fy(W,Y)}})).then(function(W){if(W instanceof uf)throw W;return W instanceof Fy?i(W.payload,x,f,W.meta):i(W,x,f)})])];case 3:return C=K.sent(),[3,5];case 4:return A=K.sent(),C=A instanceof uf?l(null,x,f,A.payload,A.meta):l(A,x,f),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&l.match(C)&&C.meta.condition,j||m(C),[2,C]}})})}();return Object.assign(y,{abort:P,requestId:x,arg:f,unwrap:function(){return y.then(gL)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function gL(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function vL(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var xm="listenerMiddleware";ro(xm+"/add");ro(xm+"/removeAll");ro(xm+"/remove");var jy;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);DR();const yL={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:"Name",evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[],fWD:!1,rWD:!1,rearAxleSteering:!1},searchOptions:{brands:["Audi","BMW","BYD","CUPRA","Hongqi","Hyundai","Kia","Lucid","Mercedes","Nio","Nissan","Porsche","SKODA","Tesla","Toyota","Volkswagen"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},Zp=Z1("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await B1.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),Hp=Z1("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await B1.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),H1=fL({name:"evsearch",initialState:yL,reducers:{updateSortOrder:(e,t)=>{e.search.sortOrder=t.payload},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateRWD:(e,t)=>{e.search.rWD=t.payload},updateFWD:(e,t)=>{e.search.fWD=t.payload},updateRearAxleSteering:(e,t)=>{e.search.rearAxleSteering=t.payload},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{e.search.airSuspension=t.payload},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n},updateSortOrderFromParam:(e,t)=>{e.search.sortOrder=t.payload}},extraReducers:e=>{e.addCase(Zp.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Zp.rejected,(t,n)=>{t.error=n.error.message}).addCase(Hp.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Hp.rejected,(t,n)=>{t.error=n.error.message})}}),bL=H1.reducer,{updateSortOrder:xL,updateEvType:wL,updateBrands:kL,updateSeatConfig:SL,updateAllWheelDrive:PL,updateNightVision:CL,updateAdaptiveDamping:EL,updateAdaptiveAirSuspension:OL,updateInstrumentCluster:TL,updateHeadUpDisplay:zL,updateAndroidAuto:RL,updateAppleCarPlay:LL,updateColors:AL,updateFWD:BL,updateRWD:NL,updateRearAxleSteering:IL,updateSortOrderFromParam:p5}=H1.actions,fr=Y2,ML=()=>vP(),DL="_pageContainer_kmlfw_3",FL="_exitButton_kmlfw_71",jL={pageContainer:DL,exitButton:FL},UL=({children:e})=>(bC(),Gh("common"),ie("div",{className:jL.pageContainer,children:ie("div",{children:e})})),$L="_evsearchAccordionContent_1w6bc_1",WL="_evText_1w6bc_11",ZL="_scopeItems_1w6bc_19",HL="_line_1w6bc_27",VL="_contentTexts_1w6bc_37",qL="_bottomContentTexts_1w6bc_47",KL="_thumb_1w6bc_55",QL="_card_1w6bc_73",GL="_cards_1w6bc_81",XL="_thumbcontainer_1w6bc_105",mi={evsearchAccordionContent:$L,evText:WL,scopeItems:ZL,line:HL,contentTexts:VL,bottomContentTexts:qL,thumb:KL,card:QL,cards:GL,thumbcontainer:XL},JL=({title:e="No info",subtitle:t="No info",maxPower:n=0,topSpeedKph:r=0,infoUri:i="",netBattery:a=0,wltpConsumption:l=0,wltpRange:u=0,zeroTo100:d=0,thumbUri:f="",maxDcChargingSpeed:m=0,averageDcChargingSpeed:h=0})=>{const[g,x]=T.useState(!1);return ie("div",{children:ut(c1,{open:g,onClick:()=>{x(!g)},children:[ie(p1,{subtitle:t,children:e}),ie(d1,{children:ie("div",{className:mi.evsearchAccordionContent,children:ut("div",{className:mi.cards,children:[ie("div",{className:mi.card,children:ie("div",{className:mi.thumbcontainer,children:ie("img",{src:f,alt:e,className:mi.thumb})})}),ut("div",{className:mi.card,children:["Read our ",ie("a",{href:i,children:"full article"}),", see all"," ",ie("a",{href:i+"specifications/",children:"specifications"}),", or see our"," ",ie("a",{href:i+"gallery/",children:"image gallery"}),".",ie("br",{}),ie("br",{}),ut(vz,{borderStyle:"dashed",children:[ut(Po,{children:[ie("b",{children:wo("evsearch.specwltprange")})," - ",u," km"]}),ut(Po,{children:[ie("b",{children:wo("evsearch.specwltpconsumption")})," - ",l," kWh/100km"]}),ut(Po,{children:[ie("b",{children:wo("evsearch.specnetbattery")})," - ",a," kWh"]}),ut(Po,{children:[ie("b",{children:wo("evsearch.zeroto100")})," - ",d," seconds"]}),ut(Po,{children:[ie("b",{children:wo("evsearch.topspeed")}),"- ",r," km/h"]}),ut(Po,{children:[ie("b",{children:wo("evsearch.maxpower")})," - ",n," kW"]}),ut(Po,{children:[ie("b",{children:wo("evsearch.chargingspeed")})," - ",m,"/",h," kW"]})]})]})]})})})]})})},YL="_pageContent_1gqfc_1",e5="_pageContentContainer_1gqfc_19",t5="_resultInfo_1gqfc_33",n5="_searchinput_1gqfc_45",r5="_searchinfo_1gqfc_53",o5="_searchinfoContent_1gqfc_63",Co={pageContent:YL,pageContentContainer:e5,resultInfo:t5,searchinput:n5,searchinfo:r5,searchinfoContent:o5},Uy=()=>{const{t:e}=Gh("common"),t=fr(B=>B.evsearchResult.loading),n=ML();new URLSearchParams(window.location.search).get("sortorder");const i=async()=>await n(Hp()),a=fr(B=>B.evsearchResult.evList.evs),l=fr(B=>B.evsearchResult.evList.count),u=fr(B=>B.evsearchResult.searchOptions.bodyTypes),d=fr(B=>B.evsearchResult.searchOptions.colors),f=fr(B=>B.evsearchResult.searchOptions.seatConfiguration),m=fr(B=>B.evsearchResult.searchOptions.brands),h=fr(B=>B.evsearchResult.search),g=async B=>await n(Zp(B)),x=fr(B=>B.evsearchResult.error);T.useEffect(()=>{t&&(i(),g(h))},[]),T.useEffect(()=>{t||g(h)},[h]);const w=B=>{n(xL(B))},v=B=>{n(kL(B))},P=m.map(B=>({label:B,value:B})),y=B=>{n(wL(B))},b=B=>{n(SL(B))},S=B=>{n(PL(B.target.checked))},C=B=>{n(NL(B.target.checked))},z=B=>{n(BL(B.target.checked))},N=B=>{n(IL(B.target.checked))},A=B=>{n(CL(B.target.checked))},j=B=>{n(EL(B.target.checked))},K=B=>{n(OL(B.target.checked))},W=B=>{n(TL(B.target.checked))},Y=B=>{n(zL(B.target.checked))},oe=B=>{n(LL(B.target.checked))},ue=B=>{n(RL(B.target.checked))},ne=B=>{n(AL(B))},pe=()=>x?ie(jO,{title:e("api_delegation.data_retrieval_failed"),variant:Wr.Error,forceMobileLayout:!0,children:ut("div",{children:[e("api_delegation.error_message"),": ",x]})}):t?ie("center",{children:ie(sz,{title:"Spinner",size:"3xLarge",variant:"interaction"})}):a.map((B,ae)=>ie(JL,{title:B.name,subtitle:B.sortValue+" "+B.sortParameter,maxPower:B.maxPowerKw,topSpeedKph:B.topSpeedKph,infoUri:B.infoUri,wltpConsumption:B.wltpConsumption,wltpRange:B.wltpRange,netBattery:B.netBattery,zeroTo100:B.zeroTo100,thumbUri:B.thumbUri,averageDcChargingSpeed:B.averageDcChargingSpeed,maxDcChargingSpeed:B.maxDcChargingSpeed},ae));return ie(UL,{children:ie(WO,{children:ut(zv,{children:[ut("div",{className:Co.pageContent,children:[ie(am,{legend:"Welcome to EVKX EV Search",size:Qo.Small,className:Co.searchinfo,contentClassName:Co.searchinfoContent,children:ut("p",{children:["EVKX offers the most comprehensive search for EVs.",ie("br",{}),"You can search and sort on a whole lot of parameters. Please read our"," ",ie("a",{href:"/guides/evsearch/",children:"search guide"})]})}),ie("br",{}),ie(Bp,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:w,options:[{label:String(e("evsearch.sortorderbrand")),value:"Name"},{label:String(e("evsearch.specwltprange")),value:"RangeMinimumWltp"},{label:String(e("evsearch.specwltpconsumption")),value:"WltpBasicConsumption"},{label:String(e("evsearch.sortordernetsize")),value:"NetBattery"},{label:String(e("evsearch.sortordernetsizedesc")),value:"NetBatteryDesc"},{label:String(e("evsearch.maxpowersort")),value:"PowerDesc"},{label:String(e("evsearch.topspeedsort")),value:"TopSpeedDesc"},{label:String(e("evsearch.maxdcchargingsort")),value:"MaxDCCharging"},{label:String(e("evsearch.averagechargingspeed0100")),value:"AverageChargingSpeedDesc"},{label:String(e("evsearch.averagechargingspeed10100")),value:"AverageChargingSpeed10100Desc"},{label:String(e("evsearch.averagechargingspeed1080")),value:"AverageChargingSpeed1080Desc"},{label:String(e("evsearch.sort0100kmh")),value:"ZeroTo100"},{label:String(e("evsearch.sort1000kmdrivingtime")),value:"DrivingTime1000kmChallenge"},{label:String(e("evsearch.sort1000kmaveragespeed")),value:"AverageSpeed1000kmChallengeDesc"},{label:String(e("evsearch.travelspeedwltpcyclus")),value:"TravelSpeedWltpDesc"},{label:String(e("evsearch.travelspeed120kmh")),value:"TravelSpeed120kmhDesc"},{label:String(e("evsearch.nominalvoltagesort")),value:"NominalVoltage"},{label:String(e("evsearch.trunksize")),value:"TrunkSizeDesc"},{label:String(e("evsearch.maxtrunksize")),value:"MaxTrunkSizeDesc"},{label:String(e("evsearch.maxload")),value:"MaxLoadDesc"},{label:String(e("evsearch.maxtrailer")),value:"MaxTrailerSizeDesc"},{label:String(e("evsearch.maxgroundclearance")),value:"MaxGroundClearanceDesc"},{label:String(e("evsearch.mingroundclearance")),value:"MinGroundClearance"},{label:String(e("evsearch.suspensionheightadjustment")),value:"SuspensionHeightAdjustment"}]}),ie(Bp,{label:String(e("evsearch.brandfilter")),multiple:!0,onChange:v,options:P}),ie("br",{}),ie(Ul,{"data-testid":"evsearch-evtype",variant:ji.Horizontal,onChange:B=>{y(B)},compact:!0,legend:"Select body type",items:u.map(B=>({label:B,name:B,checked:h.evType===void 0||h.evType.includes(B)}))}),ie("br",{}),ie(Hx,{items:[{content:ie(Ul,{"data-testid":"evsearch-seatconfig",variant:ji.Horizontal,onChange:B=>{b(B)},compact:!0,legend:"Number of seats",items:f.map(B=>({label:B,name:B,checked:h.seatConfiguration===void 0||h.seatConfiguration.includes(B)}))}),name:"Seats"},{content:ut(zv,{children:[ie(Xt,{checked:h.allWheelDrive,label:"All wheel drive",onChange:S,compact:!0}),ie("br",{}),ie(Xt,{checked:h.rWD,label:"RWD",onChange:C,compact:!0}),ie("br",{}),ie(Xt,{checked:h.fWD,label:"FWD",onChange:z,compact:!0}),ie("br",{}),ie(Xt,{checked:h.adaptiveSuspension,label:"Adaptive Suspension",onChange:j,compact:!0}),ie("br",{}),ie(Xt,{checked:h.airSuspension,label:"Air Suspension",onChange:K,compact:!0}),ie("br",{}),ie(Xt,{checked:h.rearAxleSteering,label:"Rear Axle Steering",onChange:N,compact:!0})]}),name:"Drivetrain"},{content:ie(Xt,{checked:h.nightVision,label:"Nightvision",onChange:A,compact:!0}),name:"Driver Assistance"},{content:ie(Ul,{"data-testid":"evsearch-evtype",variant:ji.Horizontal,onChange:B=>{ne(B)},compact:!0,legend:"Select paint color",items:d.map(B=>({label:B,name:B,checked:h.colors===void 0||h.colors.includes(B)}))}),name:"Exterior"},{content:ut("div",{children:[ie(Xt,{checked:h.headUpDisplay,label:"Head Up Display",onChange:Y,compact:!0}),ie("br",{}),ie(Xt,{checked:h.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:W,compact:!0}),ie("br",{}),ie(Xt,{checked:h.androidAuto,label:"Android Auto Support",onChange:ue,compact:!0}),ie("br",{}),ie(Xt,{checked:h.appleCarPlay,label:"Apple Car Play Support",onChange:oe,compact:!0})]}),name:"UI & Interface"}]}),ie("br",{})]}),ie("div",{className:Co.pageContentAccordionsContainer,children:ut("div",{className:Co.apiAccordions,children:[ut("h4",{className:Co.resultInfo,children:[l," ",e("evsearch.searchresult"),":"]}),ie("div",{className:Co.accordionScrollContainer,children:pe()})]})})]})})})},i5=NC([{path:"/",errorElement:ie($d,{})},{path:"evsearch",element:ie(Uy,{}),errorElement:ie($d,{})},{path:"nb/evsearch",element:ie(Uy,{}),errorElement:ie($d,{})}],{basename:"/"}),a5={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Vl={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Vl)Vl[e]===void 0&&delete Vl[e];const s5={...a5,...Vl};function l5(e){return s5[e]}const u5=({children:e})=>{const{i18n:t}=Gh("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,l=new URL(a,import.meta.url).href;return LE("Localizations",async()=>{const d=await(await fetch(l)).json();Bt.addResourceBundle(t.language,"common",d)},{staleTime:1/0,suspense:!0}),ie(xk,{children:e})};var Uu={},c5={get exports(){return Uu},set exports(e){Uu=e}};(function(e,t){(function(n,r){r(t)})(_i,function(n){function r(E,I){E.super_=I,E.prototype=Object.create(I.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}})}function i(E,I){Object.defineProperty(this,"kind",{value:E,enumerable:!0}),I&&I.length&&Object.defineProperty(this,"path",{value:I,enumerable:!0})}function a(E,I,R){a.super_.call(this,"E",E),Object.defineProperty(this,"lhs",{value:I,enumerable:!0}),Object.defineProperty(this,"rhs",{value:R,enumerable:!0})}function l(E,I){l.super_.call(this,"N",E),Object.defineProperty(this,"rhs",{value:I,enumerable:!0})}function u(E,I){u.super_.call(this,"D",E),Object.defineProperty(this,"lhs",{value:I,enumerable:!0})}function d(E,I,R){d.super_.call(this,"A",E),Object.defineProperty(this,"index",{value:I,enumerable:!0}),Object.defineProperty(this,"item",{value:R,enumerable:!0})}function f(E,I,R){var V=E.slice((R||I)+1||E.length);return E.length=I<0?E.length+I:I,E.push.apply(E,V),E}function m(E){var I=typeof E>"u"?"undefined":pe(E);return I!=="object"?I:E===Math?"math":E===null?"null":Array.isArray(E)?"array":Object.prototype.toString.call(E)==="[object Date]"?"date":typeof E.toString=="function"&&/^\/.*\//.test(E.toString())?"regexp":"object"}function h(E,I,R,V,re,$,ee){re=re||[],ee=ee||[];var le=re.slice(0);if(typeof $<"u"){if(V){if(typeof V=="function"&&V(le,$))return;if((typeof V>"u"?"undefined":pe(V))==="object"){if(V.prefilter&&V.prefilter(le,$))return;if(V.normalize){var je=V.normalize(le,$,E,I);je&&(E=je[0],I=je[1])}}}le.push($)}m(E)==="regexp"&&m(I)==="regexp"&&(E=E.toString(),I=I.toString());var Ue=typeof E>"u"?"undefined":pe(E),Be=typeof I>"u"?"undefined":pe(I),Ee=Ue!=="undefined"||ee&&ee[ee.length-1].lhs&&ee[ee.length-1].lhs.hasOwnProperty($),He=Be!=="undefined"||ee&&ee[ee.length-1].rhs&&ee[ee.length-1].rhs.hasOwnProperty($);if(!Ee&&He)R(new l(le,I));else if(!He&&Ee)R(new u(le,E));else if(m(E)!==m(I))R(new a(le,E,I));else if(m(E)==="date"&&E-I!==0)R(new a(le,E,I));else if(Ue==="object"&&E!==null&&I!==null)if(ee.filter(function($e){return $e.lhs===E}).length)E!==I&&R(new a(le,E,I));else{if(ee.push({lhs:E,rhs:I}),Array.isArray(E)){var Ce;for(E.length,Ce=0;Ce<E.length;Ce++)Ce>=I.length?R(new d(le,Ce,new u(void 0,E[Ce]))):h(E[Ce],I[Ce],R,V,le,Ce,ee);for(;Ce<I.length;)R(new d(le,Ce,new l(void 0,I[Ce++])))}else{var Nt=Object.keys(E),It=Object.keys(I);Nt.forEach(function($e,$t){var rr=It.indexOf($e);rr>=0?(h(E[$e],I[$e],R,V,le,$e,ee),It=f(It,rr)):h(E[$e],void 0,R,V,le,$e,ee)}),It.forEach(function($e){h(void 0,I[$e],R,V,le,$e,ee)})}ee.length=ee.length-1}else E!==I&&(Ue==="number"&&isNaN(E)&&isNaN(I)||R(new a(le,E,I)))}function g(E,I,R,V){return V=V||[],h(E,I,function(re){re&&V.push(re)},R),V.length?V:void 0}function x(E,I,R){if(R.path&&R.path.length){var V,re=E[I],$=R.path.length-1;for(V=0;V<$;V++)re=re[R.path[V]];switch(R.kind){case"A":x(re[R.path[V]],R.index,R.item);break;case"D":delete re[R.path[V]];break;case"E":case"N":re[R.path[V]]=R.rhs}}else switch(R.kind){case"A":x(E[I],R.index,R.item);break;case"D":E=f(E,I);break;case"E":case"N":E[I]=R.rhs}return E}function w(E,I,R){if(E&&I&&R&&R.kind){for(var V=E,re=-1,$=R.path?R.path.length-1:0;++re<$;)typeof V[R.path[re]]>"u"&&(V[R.path[re]]=typeof R.path[re]=="number"?[]:{}),V=V[R.path[re]];switch(R.kind){case"A":x(R.path?V[R.path[re]]:V,R.index,R.item);break;case"D":delete V[R.path[re]];break;case"E":case"N":V[R.path[re]]=R.rhs}}}function v(E,I,R){if(R.path&&R.path.length){var V,re=E[I],$=R.path.length-1;for(V=0;V<$;V++)re=re[R.path[V]];switch(R.kind){case"A":v(re[R.path[V]],R.index,R.item);break;case"D":re[R.path[V]]=R.lhs;break;case"E":re[R.path[V]]=R.lhs;break;case"N":delete re[R.path[V]]}}else switch(R.kind){case"A":v(E[I],R.index,R.item);break;case"D":E[I]=R.lhs;break;case"E":E[I]=R.lhs;break;case"N":E=f(E,I)}return E}function P(E,I,R){if(E&&I&&R&&R.kind){var V,re,$=E;for(re=R.path.length-1,V=0;V<re;V++)typeof $[R.path[V]]>"u"&&($[R.path[V]]={}),$=$[R.path[V]];switch(R.kind){case"A":v($[R.path[V]],R.index,R.item);break;case"D":$[R.path[V]]=R.lhs;break;case"E":$[R.path[V]]=R.lhs;break;case"N":delete $[R.path[V]]}}}function y(E,I,R){if(E&&I){var V=function(re){R&&!R(E,I,re)||w(E,I,re)};h(E,I,V)}}function b(E){return"color: "+D[E].color+"; font-weight: bold"}function S(E){var I=E.kind,R=E.path,V=E.lhs,re=E.rhs,$=E.index,ee=E.item;switch(I){case"E":return[R.join("."),V,"→",re];case"N":return[R.join("."),re];case"D":return[R.join(".")];case"A":return[R.join(".")+"["+$+"]",ee];default:return[]}}function C(E,I,R,V){var re=g(E,I);try{V?R.groupCollapsed("diff"):R.group("diff")}catch{R.log("diff")}re?re.forEach(function($){var ee=$.kind,le=S($);R.log.apply(R,["%c "+D[ee].text,b(ee)].concat(B(le)))}):R.log("—— no diff ——");try{R.groupEnd()}catch{R.log("—— diff end —— ")}}function z(E,I,R,V){switch(typeof E>"u"?"undefined":pe(E)){case"object":return typeof E[V]=="function"?E[V].apply(E,B(R)):E[V];case"function":return E(I);default:return E}}function N(E){var I=E.timestamp,R=E.duration;return function(V,re,$){var ee=["action"];return ee.push("%c"+String(V.type)),I&&ee.push("%c@ "+re),R&&ee.push("%c(in "+$.toFixed(2)+" ms)"),ee.join(" ")}}function A(E,I){var R=I.logger,V=I.actionTransformer,re=I.titleFormatter,$=re===void 0?N(I):re,ee=I.collapsed,le=I.colors,je=I.level,Ue=I.diff,Be=typeof I.titleFormatter>"u";E.forEach(function(Ee,He){var Ce=Ee.started,Nt=Ee.startedTime,It=Ee.action,$e=Ee.prevState,$t=Ee.error,rr=Ee.took,Ct=Ee.nextState,ln=E[He+1];ln&&(Ct=ln.prevState,rr=ln.started-Ce);var Et=V(It),or=typeof ee=="function"?ee(function(){return Ct},It,Ee):ee,ia=ue(Nt),aa=le.title?"color: "+le.title(Et)+";":"",un=["color: gray; font-weight: lighter;"];un.push(aa),I.timestamp&&un.push("color: gray; font-weight: lighter;"),I.duration&&un.push("color: gray; font-weight: lighter;");var Fn=$(Et,ia,rr);try{or?le.title&&Be?R.groupCollapsed.apply(R,["%c "+Fn].concat(un)):R.groupCollapsed(Fn):le.title&&Be?R.group.apply(R,["%c "+Fn].concat(un)):R.group(Fn)}catch{R.log(Fn)}var U=z(je,Et,[$e],"prevState"),H=z(je,Et,[Et],"action"),X=z(je,Et,[$t,$e],"error"),ce=z(je,Et,[Ct],"nextState");if(U)if(le.prevState){var he="color: "+le.prevState($e)+"; font-weight: bold";R[U]("%c prev state",he,$e)}else R[U]("prev state",$e);if(H)if(le.action){var ge="color: "+le.action(Et)+"; font-weight: bold";R[H]("%c action    ",ge,Et)}else R[H]("action    ",Et);if($t&&X)if(le.error){var _e="color: "+le.error($t,$e)+"; font-weight: bold;";R[X]("%c error     ",_e,$t)}else R[X]("error     ",$t);if(ce)if(le.nextState){var ye="color: "+le.nextState(Ct)+"; font-weight: bold";R[ce]("%c next state",ye,Ct)}else R[ce]("next state",Ct);Ue&&C($e,Ct,R,or);try{R.groupEnd()}catch{R.log("—— log end ——")}})}function j(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=Object.assign({},J,E),R=I.logger,V=I.stateTransformer,re=I.errorTransformer,$=I.predicate,ee=I.logErrors,le=I.diffPredicate;if(typeof R>"u")return function(){return function(Ue){return function(Be){return Ue(Be)}}};if(E.getState&&E.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(Ue){return function(Be){return Ue(Be)}}};var je=[];return function(Ue){var Be=Ue.getState;return function(Ee){return function(He){if(typeof $=="function"&&!$(Be,He))return Ee(He);var Ce={};je.push(Ce),Ce.started=ne.now(),Ce.startedTime=new Date,Ce.prevState=V(Be()),Ce.action=He;var Nt=void 0;if(ee)try{Nt=Ee(He)}catch($e){Ce.error=re($e)}else Nt=Ee(He);Ce.took=ne.now()-Ce.started,Ce.nextState=V(Be());var It=I.diff&&typeof le=="function"?le(Be,He):I.diff;if(A(je,Object.assign({},I,{diff:It})),je.length=0,Ce.error)throw Ce.error;return Nt}}}}var K,W,Y=function(E,I){return new Array(I+1).join(E)},oe=function(E,I){return Y("0",I-E.toString().length)+E},ue=function(E){return oe(E.getHours(),2)+":"+oe(E.getMinutes(),2)+":"+oe(E.getSeconds(),2)+"."+oe(E.getMilliseconds(),3)},ne=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},B=function(E){if(Array.isArray(E)){for(var I=0,R=Array(E.length);I<E.length;I++)R[I]=E[I];return R}return Array.from(E)},ae=[];K=(typeof _i>"u"?"undefined":pe(_i))==="object"&&_i?_i:typeof window<"u"?window:{},W=K.DeepDiff,W&&ae.push(function(){typeof W<"u"&&K.DeepDiff===g&&(K.DeepDiff=W,W=void 0)}),r(a,i),r(l,i),r(u,i),r(d,i),Object.defineProperties(g,{diff:{value:g,enumerable:!0},observableDiff:{value:h,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:w,enumerable:!0},revertChange:{value:P,enumerable:!0},isConflict:{value:function(){return typeof W<"u"},enumerable:!0},noConflict:{value:function(){return ae&&(ae.forEach(function(E){E()}),ae=null),g},enumerable:!0}});var D={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},J={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(E){return E},actionTransformer:function(E){return E},errorTransformer:function(E){return E},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},Q=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=E.dispatch,R=E.getState;return typeof I=="function"||typeof R=="function"?j()({dispatch:I,getState:R}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=J,n.createLogger=j,n.logger=Q,n.default=Q,Object.defineProperty(n,"__esModule",{value:!0})})})(c5,Uu);Uu.createLogger();const d5=lL({reducer:{evsearchResult:bL}}),f5=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};cO(GC).init({lng:f5("no_nb"),fallbackLng:l5("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new bE({defaultOptions:void 0});X0(document.getElementById("root")).render(ie(T.StrictMode,{children:ie(mP,{store:d5,children:ie(CE,{client:e,children:ie(u5,{children:ie(zC,{router:i5})})})})}))});
