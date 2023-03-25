function Yw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qa={},ek={get exports(){return Qa},set exports(e){Qa=e}},Bu={},T={},tk={get exports(){return T},set exports(e){T=e}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=Symbol.for("react.element"),nk=Symbol.for("react.portal"),rk=Symbol.for("react.fragment"),ok=Symbol.for("react.strict_mode"),ik=Symbol.for("react.profiler"),ak=Symbol.for("react.provider"),sk=Symbol.for("react.context"),lk=Symbol.for("react.forward_ref"),uk=Symbol.for("react.suspense"),ck=Symbol.for("react.memo"),dk=Symbol.for("react.lazy"),a_=Symbol.iterator;function fk(e){return e===null||typeof e!="object"?null:(e=a_&&e[a_]||e["@@iterator"],typeof e=="function"?e:null)}var Zy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vy=Object.assign,qy={};function Gi(e,t,n){this.props=e,this.context=t,this.refs=qy,this.updater=n||Zy}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ky(){}Ky.prototype=Gi.prototype;function Dp(e,t,n){this.props=e,this.context=t,this.refs=qy,this.updater=n||Zy}var Fp=Dp.prototype=new Ky;Fp.constructor=Dp;Vy(Fp,Gi.prototype);Fp.isPureReactComponent=!0;var s_=Array.isArray,Qy=Object.prototype.hasOwnProperty,jp={current:null},Gy={key:!0,ref:!0,__self:!0,__source:!0};function Jy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Qy.call(t,r)&&!Gy.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:bs,type:e,key:a,ref:l,props:i,_owner:jp.current}}function pk(e,t){return{$$typeof:bs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Up(e){return typeof e=="object"&&e!==null&&e.$$typeof===bs}function hk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var l_=/\/+/g;function nd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hk(""+e.key):t.toString(36)}function yl(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case bs:case nk:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+nd(l,0):r,s_(i)?(n="",e!=null&&(n=e.replace(l_,"$&/")+"/"),yl(i,t,n,"",function(f){return f})):i!=null&&(Up(i)&&(i=pk(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(l_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",s_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+nd(a,u);l+=yl(a,t,n,d,i)}else if(d=fk(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+nd(a,u++),l+=yl(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xs(e,t,n){if(e==null)return e;var r=[],i=0;return yl(e,r,"","",function(a){return t.call(n,a,i++)}),r}function mk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ut={current:null},bl={transition:null},_k={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:bl,ReactCurrentOwner:jp};Oe.Children={map:Xs,forEach:function(e,t,n){Xs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xs(e,function(){t++}),t},toArray:function(e){return Xs(e,function(t){return t})||[]},only:function(e){if(!Up(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Oe.Component=Gi;Oe.Fragment=rk;Oe.Profiler=ik;Oe.PureComponent=Dp;Oe.StrictMode=ok;Oe.Suspense=uk;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_k;Oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vy({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=jp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Qy.call(t,d)&&!Gy.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:bs,type:e.type,key:i,ref:a,props:r,_owner:l}};Oe.createContext=function(e){return e={$$typeof:sk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ak,_context:e},e.Consumer=e};Oe.createElement=Jy;Oe.createFactory=function(e){var t=Jy.bind(null,e);return t.type=e,t};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(e){return{$$typeof:lk,render:e}};Oe.isValidElement=Up;Oe.lazy=function(e){return{$$typeof:dk,_payload:{_status:-1,_result:e},_init:mk}};Oe.memo=function(e,t){return{$$typeof:ck,type:e,compare:t===void 0?null:t}};Oe.startTransition=function(e){var t=bl.transition;bl.transition={};try{e()}finally{bl.transition=t}};Oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Oe.useCallback=function(e,t){return Ut.current.useCallback(e,t)};Oe.useContext=function(e){return Ut.current.useContext(e)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(e){return Ut.current.useDeferredValue(e)};Oe.useEffect=function(e,t){return Ut.current.useEffect(e,t)};Oe.useId=function(){return Ut.current.useId()};Oe.useImperativeHandle=function(e,t,n){return Ut.current.useImperativeHandle(e,t,n)};Oe.useInsertionEffect=function(e,t){return Ut.current.useInsertionEffect(e,t)};Oe.useLayoutEffect=function(e,t){return Ut.current.useLayoutEffect(e,t)};Oe.useMemo=function(e,t){return Ut.current.useMemo(e,t)};Oe.useReducer=function(e,t,n){return Ut.current.useReducer(e,t,n)};Oe.useRef=function(e){return Ut.current.useRef(e)};Oe.useState=function(e){return Ut.current.useState(e)};Oe.useSyncExternalStore=function(e,t,n){return Ut.current.useSyncExternalStore(e,t,n)};Oe.useTransition=function(){return Ut.current.useTransition()};Oe.version="18.2.0";(function(e){e.exports=Oe})(tk);const W=Hy(T),Ga=Yw({__proto__:null,default:W},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gk=T,vk=Symbol.for("react.element"),yk=Symbol.for("react.fragment"),bk=Object.prototype.hasOwnProperty,xk=gk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wk={key:!0,ref:!0,__self:!0,__source:!0};function Xy(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)bk.call(t,r)&&!wk.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vk,type:e,key:a,ref:l,props:i,_owner:xk.current}}Bu.Fragment=yk;Bu.jsx=Xy;Bu.jsxs=Xy;(function(e){e.exports=Bu})(ek);const kk=Qa.Fragment,ae=Qa.jsx,at=Qa.jsxs;var Fi={},Sk={get exports(){return Fi},set exports(e){Fi=e}},on={},nf={},Pk={get exports(){return nf},set exports(e){nf=e}},Yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,J){var K=D.length;D.push(J);e:for(;0<K;){var E=K-1>>>1,N=D[E];if(0<i(N,J))D[E]=J,D[K]=N,K=E;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var J=D[0],K=D.pop();if(K!==J){D[0]=K;e:for(var E=0,N=D.length,R=N>>>1;E<R;){var V=2*(E+1)-1,te=D[V],oe=V+1,le=D[oe];if(0>i(te,K))oe<N&&0>i(le,te)?(D[E]=le,D[oe]=K,E=oe):(D[E]=te,D[V]=K,E=V);else if(oe<N&&0>i(le,K))D[E]=le,D[oe]=K,E=oe;else break e}}return J}function i(D,J){var K=D.sortIndex-J.sortIndex;return K!==0?K:D.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],f=[],h=1,m=null,g=3,x=!1,w=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(D){for(var J=n(f);J!==null;){if(J.callback===null)r(f);else if(J.startTime<=D)r(f),J.sortIndex=J.expirationTime,t(d,J);else break;J=n(f)}}function C(D){if(v=!1,S(D),!w)if(n(d)!==null)w=!0,re(z);else{var J=n(f);J!==null&&M(C,J.startTime-D)}}function z(D,J){w=!1,v&&(v=!1,y(j),j=-1),x=!0;var K=g;try{for(S(J),m=n(d);m!==null&&(!(m.expirationTime>J)||D&&!X());){var E=m.callback;if(typeof E=="function"){m.callback=null,g=m.priorityLevel;var N=E(m.expirationTime<=J);J=e.unstable_now(),typeof N=="function"?m.callback=N:m===n(d)&&r(d),S(J)}else r(d);m=n(d)}if(m!==null)var R=!0;else{var V=n(f);V!==null&&M(C,V.startTime-J),R=!1}return R}finally{m=null,g=K,x=!1}}var B=!1,A=null,j=-1,Z=5,$=-1;function X(){return!(e.unstable_now()-$<Z)}function ne(){if(A!==null){var D=e.unstable_now();$=D;var J=!0;try{J=A(!0,D)}finally{J?se():(B=!1,A=null)}}else B=!1}var se;if(typeof b=="function")se=function(){b(ne)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,pe=ee.port2;ee.port1.onmessage=ne,se=function(){pe.postMessage(null)}}else se=function(){P(ne,0)};function re(D){A=D,B||(B=!0,se())}function M(D,J){j=P(function(){D(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,re(z))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(D){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var K=g;g=J;try{return D()}finally{g=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,J){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=g;g=D;try{return J()}finally{g=K}},e.unstable_scheduleCallback=function(D,J,K){var E=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?E+K:E):K=E,D){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=K+N,D={id:h++,callback:J,priorityLevel:D,startTime:K,expirationTime:N,sortIndex:-1},K>E?(D.sortIndex=K,t(f,D),n(d)===null&&D===n(f)&&(v?(y(j),j=-1):v=!0,M(C,K-E))):(D.sortIndex=N,t(d,D),w||x||(w=!0,re(z))),D},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(D){var J=g;return function(){var K=g;g=J;try{return D.apply(this,arguments)}finally{g=K}}}})(Yy);(function(e){e.exports=Yy})(Pk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eb=T,nn=nf;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tb=new Set,Ja={};function qo(e,t){ji(e,t),ji(e+"Capture",t)}function ji(e,t){for(Ja[e]=t,e=0;e<t.length;e++)tb.add(t[e])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,Ck=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,u_={},c_={};function Ek(e){return rf.call(c_,e)?!0:rf.call(u_,e)?!1:Ck.test(e)?c_[e]=!0:(u_[e]=!0,!1)}function Ok(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tk(e,t,n,r){if(t===null||typeof t>"u"||Ok(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $t(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Et[e]=new $t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Et[t]=new $t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Et[e]=new $t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Et[e]=new $t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Et[e]=new $t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Et[e]=new $t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Et[e]=new $t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Et[e]=new $t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Et[e]=new $t(e,5,!1,e.toLowerCase(),null,!1,!1)});var $p=/[\-:]([a-z])/g;function Wp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($p,Wp);Et[t]=new $t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($p,Wp);Et[t]=new $t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($p,Wp);Et[t]=new $t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Et[e]=new $t(e,1,!1,e.toLowerCase(),null,!1,!1)});Et.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Et[e]=new $t(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hp(e,t,n,r){var i=Et.hasOwnProperty(t)?Et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tk(t,n,i,r)&&(n=null),r||i===null?Ek(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pr=eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),of=Symbol.for("react.profiler"),nb=Symbol.for("react.provider"),rb=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),ob=Symbol.for("react.offscreen"),d_=Symbol.iterator;function va(e){return e===null||typeof e!="object"?null:(e=d_&&e[d_]||e["@@iterator"],typeof e=="function"?e:null)}var et=Object.assign,rd;function La(e){if(rd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rd=t&&t[1]||""}return`
`+rd+e}var od=!1;function id(e,t){if(!e||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,u=a.length-1;1<=l&&0<=u&&i[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==a[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{od=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?La(e):""}function zk(e){switch(e.tag){case 5:return La(e.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return e=id(e.type,!1),e;case 11:return e=id(e.type.render,!1),e;case 1:return e=id(e.type,!0),e;default:return""}}function lf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case of:return"Profiler";case Zp:return"StrictMode";case af:return"Suspense";case sf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rb:return(e.displayName||"Context")+".Consumer";case nb:return(e._context.displayName||"Context")+".Provider";case Vp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qp:return t=e.displayName||null,t!==null?t:lf(e.type)||"Memo";case Nr:t=e._payload,e=e._init;try{return lf(e(t))}catch{}}return null}function Lk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(t);case 8:return t===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ib(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rk(e){var t=ib(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function el(e){e._valueTracker||(e._valueTracker=Rk(e))}function ab(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ib(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uf(e,t){var n=t.checked;return et({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function f_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=oo(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sb(e,t){t=t.checked,t!=null&&Hp(e,"checked",t,!1)}function cf(e,t){sb(e,t);var n=oo(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?df(e,t.type,n):t.hasOwnProperty("defaultValue")&&df(e,t.type,oo(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function p_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function df(e,t,n){(t!=="number"||Ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ra=Array.isArray;function Ei(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+oo(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ff(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return et({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function h_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(Ra(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:oo(n)}}function lb(e,t){var n=oo(t.value),r=oo(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function m_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ub(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ub(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tl,cb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ak=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(e){Ak.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ia[t]=Ia[e]})});function db(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ia.hasOwnProperty(e)&&Ia[e]?(""+t).trim():t+"px"}function fb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=db(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bk=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(e,t){if(t){if(Bk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function mf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function Kp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gf=null,Oi=null,Ti=null;function __(e){if(e=ks(e)){if(typeof gf!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=Fu(t),gf(e.stateNode,e.type,t))}}function pb(e){Oi?Ti?Ti.push(e):Ti=[e]:Oi=e}function hb(){if(Oi){var e=Oi,t=Ti;if(Ti=Oi=null,__(e),t)for(e=0;e<t.length;e++)__(t[e])}}function mb(e,t){return e(t)}function _b(){}var ad=!1;function gb(e,t,n){if(ad)return e(t,n);ad=!0;try{return mb(e,t,n)}finally{ad=!1,(Oi!==null||Ti!==null)&&(_b(),hb())}}function Ya(e,t){var n=e.stateNode;if(n===null)return null;var r=Fu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var vf=!1;if(br)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){vf=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{vf=!1}function Nk(e,t,n,r,i,a,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(h){this.onError(h)}}var Ma=!1,$l=null,Wl=!1,yf=null,Ik={onError:function(e){Ma=!0,$l=e}};function Mk(e,t,n,r,i,a,l,u,d){Ma=!1,$l=null,Nk.apply(Ik,arguments)}function Dk(e,t,n,r,i,a,l,u,d){if(Mk.apply(this,arguments),Ma){if(Ma){var f=$l;Ma=!1,$l=null}else throw Error(Y(198));Wl||(Wl=!0,yf=f)}}function Ko(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g_(e){if(Ko(e)!==e)throw Error(Y(188))}function Fk(e){var t=e.alternate;if(!t){if(t=Ko(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return g_(i),e;if(a===r)return g_(i),t;a=a.sibling}throw Error(Y(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function yb(e){return e=Fk(e),e!==null?bb(e):null}function bb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bb(e);if(t!==null)return t;e=e.sibling}return null}var xb=nn.unstable_scheduleCallback,v_=nn.unstable_cancelCallback,jk=nn.unstable_shouldYield,Uk=nn.unstable_requestPaint,st=nn.unstable_now,$k=nn.unstable_getCurrentPriorityLevel,Qp=nn.unstable_ImmediatePriority,wb=nn.unstable_UserBlockingPriority,Hl=nn.unstable_NormalPriority,Wk=nn.unstable_LowPriority,kb=nn.unstable_IdlePriority,Nu=null,Jn=null;function Hk(e){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Nu,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:qk,Zk=Math.log,Vk=Math.LN2;function qk(e){return e>>>=0,e===0?32:31-(Zk(e)/Vk|0)|0}var nl=64,rl=4194304;function Aa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Aa(u):(a&=l,a!==0&&(r=Aa(a)))}else l=n&~i,l!==0?r=Aa(l):a!==0&&(r=Aa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rn(t),i=1<<n,r|=e[n],t&=~i;return r}function Kk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Rn(a),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Kk(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function bf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sb(){var e=nl;return nl<<=1,!(nl&4194240)&&(nl=64),e}function sd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rn(t),e[t]=n}function Gk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rn(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Gp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Fe=0;function Pb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cb,Jp,Eb,Ob,Tb,xf=!1,ol=[],Hr=null,Zr=null,Vr=null,es=new Map,ts=new Map,Dr=[],Jk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function y_(e,t){switch(e){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function ba(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ks(t),t!==null&&Jp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xk(e,t,n,r,i){switch(t){case"focusin":return Hr=ba(Hr,e,t,n,r,i),!0;case"dragenter":return Zr=ba(Zr,e,t,n,r,i),!0;case"mouseover":return Vr=ba(Vr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return es.set(a,ba(es.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ts.set(a,ba(ts.get(a)||null,e,t,n,r,i)),!0}return!1}function zb(e){var t=zo(e.target);if(t!==null){var n=Ko(t);if(n!==null){if(t=n.tag,t===13){if(t=vb(n),t!==null){e.blockedOn=t,Tb(e.priority,function(){Eb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_f=r,n.target.dispatchEvent(r),_f=null}else return t=ks(n),t!==null&&Jp(t),e.blockedOn=n,!1;t.shift()}return!0}function b_(e,t,n){xl(e)&&n.delete(t)}function Yk(){xf=!1,Hr!==null&&xl(Hr)&&(Hr=null),Zr!==null&&xl(Zr)&&(Zr=null),Vr!==null&&xl(Vr)&&(Vr=null),es.forEach(b_),ts.forEach(b_)}function xa(e,t){e.blockedOn===t&&(e.blockedOn=null,xf||(xf=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,Yk)))}function ns(e){function t(i){return xa(i,e)}if(0<ol.length){xa(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Hr!==null&&xa(Hr,e),Zr!==null&&xa(Zr,e),Vr!==null&&xa(Vr,e),es.forEach(t),ts.forEach(t),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)zb(n),n.blockedOn===null&&Dr.shift()}var zi=Pr.ReactCurrentBatchConfig,Vl=!0;function eS(e,t,n,r){var i=Fe,a=zi.transition;zi.transition=null;try{Fe=1,Xp(e,t,n,r)}finally{Fe=i,zi.transition=a}}function tS(e,t,n,r){var i=Fe,a=zi.transition;zi.transition=null;try{Fe=4,Xp(e,t,n,r)}finally{Fe=i,zi.transition=a}}function Xp(e,t,n,r){if(Vl){var i=wf(e,t,n,r);if(i===null)gd(e,t,r,ql,n),y_(e,r);else if(Xk(i,e,t,n,r))r.stopPropagation();else if(y_(e,r),t&4&&-1<Jk.indexOf(e)){for(;i!==null;){var a=ks(i);if(a!==null&&Cb(a),a=wf(e,t,n,r),a===null&&gd(e,t,r,ql,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else gd(e,t,r,null,n)}}var ql=null;function wf(e,t,n,r){if(ql=null,e=Kp(r),e=zo(e),e!==null)if(t=Ko(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ql=e,null}function Lb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($k()){case Qp:return 1;case wb:return 4;case Hl:case Wk:return 16;case kb:return 536870912;default:return 16}default:return 16}}var Ur=null,Yp=null,wl=null;function Rb(){if(wl)return wl;var e,t=Yp,n=t.length,r,i="value"in Ur?Ur.value:Ur.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return wl=i.slice(e,1<r?1-r:void 0)}function kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function x_(){return!1}function an(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?il:x_,this.isPropagationStopped=x_,this}return et(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),t}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=an(Ji),ws=et({},Ji,{view:0,detail:0}),nS=an(ws),ld,ud,wa,Iu=et({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(ld=e.screenX-wa.screenX,ud=e.screenY-wa.screenY):ud=ld=0,wa=e),ld)},movementY:function(e){return"movementY"in e?e.movementY:ud}}),w_=an(Iu),rS=et({},Iu,{dataTransfer:0}),oS=an(rS),iS=et({},ws,{relatedTarget:0}),cd=an(iS),aS=et({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=an(aS),lS=et({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uS=an(lS),cS=et({},Ji,{data:0}),k_=an(cS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pS[e])?!!t[e]:!1}function th(){return hS}var mS=et({},ws,{key:function(e){if(e.key){var t=dS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(e){return e.type==="keypress"?kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_S=an(mS),gS=et({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S_=an(gS),vS=et({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),yS=an(vS),bS=et({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),xS=an(bS),wS=et({},Iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kS=an(wS),SS=[9,13,27,32],nh=br&&"CompositionEvent"in window,Da=null;br&&"documentMode"in document&&(Da=document.documentMode);var PS=br&&"TextEvent"in window&&!Da,Ab=br&&(!nh||Da&&8<Da&&11>=Da),P_=String.fromCharCode(32),C_=!1;function Bb(e,t){switch(e){case"keyup":return SS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function CS(e,t){switch(e){case"compositionend":return Nb(t);case"keypress":return t.which!==32?null:(C_=!0,P_);case"textInput":return e=t.data,e===P_&&C_?null:e;default:return null}}function ES(e,t){if(mi)return e==="compositionend"||!nh&&Bb(e,t)?(e=Rb(),wl=Yp=Ur=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ab&&t.locale!=="ko"?null:t.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!OS[e.type]:t==="textarea"}function Ib(e,t,n,r){pb(r),t=Kl(t,"onChange"),0<t.length&&(n=new eh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fa=null,rs=null;function TS(e){qb(e,0)}function Mu(e){var t=vi(e);if(ab(t))return e}function zS(e,t){if(e==="change")return t}var Mb=!1;if(br){var dd;if(br){var fd="oninput"in document;if(!fd){var O_=document.createElement("div");O_.setAttribute("oninput","return;"),fd=typeof O_.oninput=="function"}dd=fd}else dd=!1;Mb=dd&&(!document.documentMode||9<document.documentMode)}function T_(){Fa&&(Fa.detachEvent("onpropertychange",Db),rs=Fa=null)}function Db(e){if(e.propertyName==="value"&&Mu(rs)){var t=[];Ib(t,rs,e,Kp(e)),gb(TS,t)}}function LS(e,t,n){e==="focusin"?(T_(),Fa=t,rs=n,Fa.attachEvent("onpropertychange",Db)):e==="focusout"&&T_()}function RS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mu(rs)}function AS(e,t){if(e==="click")return Mu(t)}function BS(e,t){if(e==="input"||e==="change")return Mu(t)}function NS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nn=typeof Object.is=="function"?Object.is:NS;function os(e,t){if(Nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rf.call(t,i)||!Nn(e[i],t[i]))return!1}return!0}function z_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L_(e,t){var n=z_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=z_(n)}}function Fb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jb(){for(var e=window,t=Ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ul(e.document)}return t}function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function IS(e){var t=jb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fb(n.ownerDocument.documentElement,n)){if(r!==null&&rh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=L_(n,a);var l=L_(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var MS=br&&"documentMode"in document&&11>=document.documentMode,_i=null,kf=null,ja=null,Sf=!1;function R_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sf||_i==null||_i!==Ul(r)||(r=_i,"selectionStart"in r&&rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ja&&os(ja,r)||(ja=r,r=Kl(kf,"onSelect"),0<r.length&&(t=new eh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_i)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gi={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},pd={},Ub={};br&&(Ub=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Du(e){if(pd[e])return pd[e];if(!gi[e])return e;var t=gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ub)return pd[e]=t[n];return e}var $b=Du("animationend"),Wb=Du("animationiteration"),Hb=Du("animationstart"),Zb=Du("transitionend"),Vb=new Map,A_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fo(e,t){Vb.set(e,t),qo(t,[e])}for(var hd=0;hd<A_.length;hd++){var md=A_[hd],DS=md.toLowerCase(),FS=md[0].toUpperCase()+md.slice(1);fo(DS,"on"+FS)}fo($b,"onAnimationEnd");fo(Wb,"onAnimationIteration");fo(Hb,"onAnimationStart");fo("dblclick","onDoubleClick");fo("focusin","onFocus");fo("focusout","onBlur");fo(Zb,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);qo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qo("onBeforeInput",["compositionend","keypress","textInput","paste"]);qo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function B_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dk(r,t,void 0,e),e.currentTarget=null}function qb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&i.isPropagationStopped())break e;B_(i,u,f),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&i.isPropagationStopped())break e;B_(i,u,f),a=d}}}if(Wl)throw e=yf,Wl=!1,yf=null,e}function Ze(e,t){var n=t[Tf];n===void 0&&(n=t[Tf]=new Set);var r=e+"__bubble";n.has(r)||(Kb(t,e,2,!1),n.add(r))}function _d(e,t,n){var r=0;t&&(r|=4),Kb(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[sl]){e[sl]=!0,tb.forEach(function(n){n!=="selectionchange"&&(jS.has(n)||_d(n,!1,e),_d(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,_d("selectionchange",!1,t))}}function Kb(e,t,n,r){switch(Lb(t)){case 1:var i=eS;break;case 4:i=tS;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!vf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=zo(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}gb(function(){var f=a,h=Kp(n),m=[];e:{var g=Vb.get(e);if(g!==void 0){var x=eh,w=e;switch(e){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":x=_S;break;case"focusin":w="focus",x=cd;break;case"focusout":w="blur",x=cd;break;case"beforeblur":case"afterblur":x=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=w_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=yS;break;case $b:case Wb:case Hb:x=sS;break;case Zb:x=xS;break;case"scroll":x=nS;break;case"wheel":x=kS;break;case"copy":case"cut":case"paste":x=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=S_}var v=(t&4)!==0,P=!v&&e==="scroll",y=v?g!==null?g+"Capture":null:g;v=[];for(var b=f,S;b!==null;){S=b;var C=S.stateNode;if(S.tag===5&&C!==null&&(S=C,y!==null&&(C=Ya(b,y),C!=null&&v.push(as(b,C,S)))),P)break;b=b.return}0<v.length&&(g=new x(g,w,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==_f&&(w=n.relatedTarget||n.fromElement)&&(zo(w)||w[xr]))break e;if((x||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=f,w=w?zo(w):null,w!==null&&(P=Ko(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=f),x!==w)){if(v=w_,C="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(v=S_,C="onPointerLeave",y="onPointerEnter",b="pointer"),P=x==null?g:vi(x),S=w==null?g:vi(w),g=new v(C,b+"leave",x,n,h),g.target=P,g.relatedTarget=S,C=null,zo(h)===f&&(v=new v(y,b+"enter",w,n,h),v.target=S,v.relatedTarget=P,C=v),P=C,x&&w)t:{for(v=x,y=w,b=0,S=v;S;S=li(S))b++;for(S=0,C=y;C;C=li(C))S++;for(;0<b-S;)v=li(v),b--;for(;0<S-b;)y=li(y),S--;for(;b--;){if(v===y||y!==null&&v===y.alternate)break t;v=li(v),y=li(y)}v=null}else v=null;x!==null&&N_(m,g,x,v,!1),w!==null&&P!==null&&N_(m,P,w,v,!0)}}e:{if(g=f?vi(f):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var z=zS;else if(E_(g))if(Mb)z=BS;else{z=RS;var B=LS}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=AS);if(z&&(z=z(e,f))){Ib(m,z,n,h);break e}B&&B(e,g,f),e==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&df(g,"number",g.value)}switch(B=f?vi(f):window,e){case"focusin":(E_(B)||B.contentEditable==="true")&&(_i=B,kf=f,ja=null);break;case"focusout":ja=kf=_i=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,R_(m,n,h);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":R_(m,n,h)}var A;if(nh)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else mi?Bb(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Ab&&n.locale!=="ko"&&(mi||j!=="onCompositionStart"?j==="onCompositionEnd"&&mi&&(A=Rb()):(Ur=h,Yp="value"in Ur?Ur.value:Ur.textContent,mi=!0)),B=Kl(f,j),0<B.length&&(j=new k_(j,e,null,n,h),m.push({event:j,listeners:B}),A?j.data=A:(A=Nb(n),A!==null&&(j.data=A)))),(A=PS?CS(e,n):ES(e,n))&&(f=Kl(f,"onBeforeInput"),0<f.length&&(h=new k_("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:f}),h.data=A))}qb(m,t)})}function as(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ya(e,n),a!=null&&r.unshift(as(e,a,i)),a=Ya(e,t),a!=null&&r.push(as(e,a,i))),e=e.return}return r}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function N_(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,i?(d=Ya(n,a),d!=null&&l.unshift(as(n,d,u))):i||(d=Ya(n,a),d!=null&&l.push(as(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var US=/\r\n?/g,$S=/\u0000|\uFFFD/g;function I_(e){return(typeof e=="string"?e:""+e).replace(US,`
`).replace($S,"")}function ll(e,t,n){if(t=I_(t),I_(e)!==t&&n)throw Error(Y(425))}function Ql(){}var Pf=null,Cf=null;function Ef(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,WS=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(e){return M_.resolve(null).then(e).catch(ZS)}:Of;function ZS(e){setTimeout(function(){throw e})}function vd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ns(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ns(t)}function qr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function D_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xi=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Xi,ss="__reactProps$"+Xi,xr="__reactContainer$"+Xi,Tf="__reactEvents$"+Xi,VS="__reactListeners$"+Xi,qS="__reactHandles$"+Xi;function zo(e){var t=e[Kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xr]||n[Kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=D_(e);e!==null;){if(n=e[Kn])return n;e=D_(e)}return t}e=n,n=e.parentNode}return null}function ks(e){return e=e[Kn]||e[xr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function Fu(e){return e[ss]||null}var zf=[],yi=-1;function po(e){return{current:e}}function Ve(e){0>yi||(e.current=zf[yi],zf[yi]=null,yi--)}function He(e,t){yi++,zf[yi]=e.current,e.current=t}var io={},Nt=po(io),Kt=po(!1),Fo=io;function Ui(e,t){var n=e.type.contextTypes;if(!n)return io;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(e){return e=e.childContextTypes,e!=null}function Gl(){Ve(Kt),Ve(Nt)}function F_(e,t,n){if(Nt.current!==io)throw Error(Y(168));He(Nt,t),He(Kt,n)}function Qb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Y(108,Lk(e)||"Unknown",i));return et({},n,r)}function Jl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||io,Fo=Nt.current,He(Nt,e),He(Kt,Kt.current),!0}function j_(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=Qb(e,t,Fo),r.__reactInternalMemoizedMergedChildContext=e,Ve(Kt),Ve(Nt),He(Nt,e)):Ve(Kt),He(Kt,n)}var mr=null,ju=!1,yd=!1;function Gb(e){mr===null?mr=[e]:mr.push(e)}function KS(e){ju=!0,Gb(e)}function ho(){if(!yd&&mr!==null){yd=!0;var e=0,t=Fe;try{var n=mr;for(Fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mr=null,ju=!1}catch(i){throw mr!==null&&(mr=mr.slice(e+1)),xb(Qp,ho),i}finally{Fe=t,yd=!1}}return null}var bi=[],xi=0,Xl=null,Yl=0,hn=[],mn=0,jo=null,_r=1,gr="";function Eo(e,t){bi[xi++]=Yl,bi[xi++]=Xl,Xl=e,Yl=t}function Jb(e,t,n){hn[mn++]=_r,hn[mn++]=gr,hn[mn++]=jo,jo=e;var r=_r;e=gr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var a=32-Rn(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,_r=1<<32-Rn(t)+i|n<<i|r,gr=a+e}else _r=1<<a|n<<i|r,gr=e}function oh(e){e.return!==null&&(Eo(e,1),Jb(e,1,0))}function ih(e){for(;e===Xl;)Xl=bi[--xi],bi[xi]=null,Yl=bi[--xi],bi[xi]=null;for(;e===jo;)jo=hn[--mn],hn[mn]=null,gr=hn[--mn],hn[mn]=null,_r=hn[--mn],hn[mn]=null}var tn=null,Yt=null,Ge=!1,zn=null;function Xb(e,t){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function U_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tn=e,Yt=qr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tn=e,Yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jo!==null?{id:_r,overflow:gr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tn=e,Yt=null,!0):!1;default:return!1}}function Lf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rf(e){if(Ge){var t=Yt;if(t){var n=t;if(!U_(e,t)){if(Lf(e))throw Error(Y(418));t=qr(n.nextSibling);var r=tn;t&&U_(e,t)?Xb(r,n):(e.flags=e.flags&-4097|2,Ge=!1,tn=e)}}else{if(Lf(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Ge=!1,tn=e}}}function $_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tn=e}function ul(e){if(e!==tn)return!1;if(!Ge)return $_(e),Ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ef(e.type,e.memoizedProps)),t&&(t=Yt)){if(Lf(e))throw Yb(),Error(Y(418));for(;t;)Xb(e,t),t=qr(t.nextSibling)}if($_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Yt=qr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Yt=null}}else Yt=tn?qr(e.stateNode.nextSibling):null;return!0}function Yb(){for(var e=Yt;e;)e=qr(e.nextSibling)}function $i(){Yt=tn=null,Ge=!1}function ah(e){zn===null?zn=[e]:zn.push(e)}var QS=Pr.ReactCurrentBatchConfig;function On(e,t){if(e&&e.defaultProps){t=et({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var eu=po(null),tu=null,wi=null,sh=null;function lh(){sh=wi=tu=null}function uh(e){var t=eu.current;Ve(eu),e._currentValue=t}function Af(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Li(e,t){tu=e,sh=wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qt=!0),e.firstContext=null)}function yn(e){var t=e._currentValue;if(sh!==e)if(e={context:e,memoizedValue:t,next:null},wi===null){if(tu===null)throw Error(Y(308));wi=e,tu.dependencies={lanes:0,firstContext:e}}else wi=wi.next=e;return t}var Lo=null;function ch(e){Lo===null?Lo=[e]:Lo.push(e)}function e0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ch(t)):(n.next=i.next,i.next=n),t.interleaved=n,wr(e,r)}function wr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ir=!1;function dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wr(e,n)}return i=r.interleaved,i===null?(t.next=t,ch(r)):(t.next=i.next,i.next=t),r.interleaved=t,wr(e,n)}function Sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gp(e,n)}}function W_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nu(e,t,n,r){var i=e.updateQueue;Ir=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?a=f:l.next=f,l=d;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==l&&(u===null?h.firstBaseUpdate=f:u.next=f,h.lastBaseUpdate=d))}if(a!==null){var m=i.baseState;l=0,h=f=d=null,u=a;do{var g=u.lane,x=u.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,v=u;switch(g=t,x=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){m=w.call(x,m,g);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(x,m,g):w,g==null)break e;m=et({},m,g);break e;case 2:Ir=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[u]:g.push(u))}else x={eventTime:x,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(f=h=x,d=m):h=h.next=x,l|=g;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;g=u,u=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(h===null&&(d=m),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);$o|=l,e.lanes=l,e.memoizedState=m}}function H_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Y(191,i));i.call(r)}}}var n0=new eb.Component().refs;function Bf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:et({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uu={isMounted:function(e){return(e=e._reactInternals)?Ko(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jt(),i=Gr(e),a=vr(r,i);a.payload=t,n!=null&&(a.callback=n),t=Kr(e,a,i),t!==null&&(An(t,e,i,r),Sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jt(),i=Gr(e),a=vr(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Kr(e,a,i),t!==null&&(An(t,e,i,r),Sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),r=Gr(e),i=vr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kr(e,i,r),t!==null&&(An(t,e,r,n),Sl(t,e,r))}};function Z_(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!os(n,r)||!os(i,a):!0}function r0(e,t,n){var r=!1,i=io,a=t.contextType;return typeof a=="object"&&a!==null?a=yn(a):(i=Qt(t)?Fo:Nt.current,r=t.contextTypes,a=(r=r!=null)?Ui(e,i):io),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function V_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uu.enqueueReplaceState(t,t.state,null)}function Nf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=n0,dh(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=yn(a):(a=Qt(t)?Fo:Nt.current,i.context=Ui(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Bf(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Uu.enqueueReplaceState(i,i.state,null),nu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ka(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=i.refs;u===n0&&(u=i.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function cl(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function q_(e){var t=e._init;return t(e._payload)}function o0(e){function t(y,b){if(e){var S=y.deletions;S===null?(y.deletions=[b],y.flags|=16):S.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function i(y,b){return y=Jr(y,b),y.index=0,y.sibling=null,y}function a(y,b,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<b?(y.flags|=2,b):S):(y.flags|=2,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,b,S,C){return b===null||b.tag!==6?(b=Cd(S,y.mode,C),b.return=y,b):(b=i(b,S),b.return=y,b)}function d(y,b,S,C){var z=S.type;return z===hi?h(y,b,S.props.children,C,S.key):b!==null&&(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Nr&&q_(z)===b.type)?(C=i(b,S.props),C.ref=ka(y,b,S),C.return=y,C):(C=zl(S.type,S.key,S.props,null,y.mode,C),C.ref=ka(y,b,S),C.return=y,C)}function f(y,b,S,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=Ed(S,y.mode,C),b.return=y,b):(b=i(b,S.children||[]),b.return=y,b)}function h(y,b,S,C,z){return b===null||b.tag!==7?(b=Mo(S,y.mode,C,z),b.return=y,b):(b=i(b,S),b.return=y,b)}function m(y,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Cd(""+b,y.mode,S),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ys:return S=zl(b.type,b.key,b.props,null,y.mode,S),S.ref=ka(y,null,b),S.return=y,S;case pi:return b=Ed(b,y.mode,S),b.return=y,b;case Nr:var C=b._init;return m(y,C(b._payload),S)}if(Ra(b)||va(b))return b=Mo(b,y.mode,S,null),b.return=y,b;cl(y,b)}return null}function g(y,b,S,C){var z=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:u(y,b,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ys:return S.key===z?d(y,b,S,C):null;case pi:return S.key===z?f(y,b,S,C):null;case Nr:return z=S._init,g(y,b,z(S._payload),C)}if(Ra(S)||va(S))return z!==null?null:h(y,b,S,C,null);cl(y,S)}return null}function x(y,b,S,C,z){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(S)||null,u(b,y,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ys:return y=y.get(C.key===null?S:C.key)||null,d(b,y,C,z);case pi:return y=y.get(C.key===null?S:C.key)||null,f(b,y,C,z);case Nr:var B=C._init;return x(y,b,S,B(C._payload),z)}if(Ra(C)||va(C))return y=y.get(S)||null,h(b,y,C,z,null);cl(b,C)}return null}function w(y,b,S,C){for(var z=null,B=null,A=b,j=b=0,Z=null;A!==null&&j<S.length;j++){A.index>j?(Z=A,A=null):Z=A.sibling;var $=g(y,A,S[j],C);if($===null){A===null&&(A=Z);break}e&&A&&$.alternate===null&&t(y,A),b=a($,b,j),B===null?z=$:B.sibling=$,B=$,A=Z}if(j===S.length)return n(y,A),Ge&&Eo(y,j),z;if(A===null){for(;j<S.length;j++)A=m(y,S[j],C),A!==null&&(b=a(A,b,j),B===null?z=A:B.sibling=A,B=A);return Ge&&Eo(y,j),z}for(A=r(y,A);j<S.length;j++)Z=x(A,y,j,S[j],C),Z!==null&&(e&&Z.alternate!==null&&A.delete(Z.key===null?j:Z.key),b=a(Z,b,j),B===null?z=Z:B.sibling=Z,B=Z);return e&&A.forEach(function(X){return t(y,X)}),Ge&&Eo(y,j),z}function v(y,b,S,C){var z=va(S);if(typeof z!="function")throw Error(Y(150));if(S=z.call(S),S==null)throw Error(Y(151));for(var B=z=null,A=b,j=b=0,Z=null,$=S.next();A!==null&&!$.done;j++,$=S.next()){A.index>j?(Z=A,A=null):Z=A.sibling;var X=g(y,A,$.value,C);if(X===null){A===null&&(A=Z);break}e&&A&&X.alternate===null&&t(y,A),b=a(X,b,j),B===null?z=X:B.sibling=X,B=X,A=Z}if($.done)return n(y,A),Ge&&Eo(y,j),z;if(A===null){for(;!$.done;j++,$=S.next())$=m(y,$.value,C),$!==null&&(b=a($,b,j),B===null?z=$:B.sibling=$,B=$);return Ge&&Eo(y,j),z}for(A=r(y,A);!$.done;j++,$=S.next())$=x(A,y,j,$.value,C),$!==null&&(e&&$.alternate!==null&&A.delete($.key===null?j:$.key),b=a($,b,j),B===null?z=$:B.sibling=$,B=$);return e&&A.forEach(function(ne){return t(y,ne)}),Ge&&Eo(y,j),z}function P(y,b,S,C){if(typeof S=="object"&&S!==null&&S.type===hi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ys:e:{for(var z=S.key,B=b;B!==null;){if(B.key===z){if(z=S.type,z===hi){if(B.tag===7){n(y,B.sibling),b=i(B,S.props.children),b.return=y,y=b;break e}}else if(B.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Nr&&q_(z)===B.type){n(y,B.sibling),b=i(B,S.props),b.ref=ka(y,B,S),b.return=y,y=b;break e}n(y,B);break}else t(y,B);B=B.sibling}S.type===hi?(b=Mo(S.props.children,y.mode,C,S.key),b.return=y,y=b):(C=zl(S.type,S.key,S.props,null,y.mode,C),C.ref=ka(y,b,S),C.return=y,y=C)}return l(y);case pi:e:{for(B=S.key;b!==null;){if(b.key===B)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(y,b.sibling),b=i(b,S.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=Ed(S,y.mode,C),b.return=y,y=b}return l(y);case Nr:return B=S._init,P(y,b,B(S._payload),C)}if(Ra(S))return w(y,b,S,C);if(va(S))return v(y,b,S,C);cl(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,b!==null&&b.tag===6?(n(y,b.sibling),b=i(b,S),b.return=y,y=b):(n(y,b),b=Cd(S,y.mode,C),b.return=y,y=b),l(y)):n(y,b)}return P}var Wi=o0(!0),i0=o0(!1),Ss={},Xn=po(Ss),ls=po(Ss),us=po(Ss);function Ro(e){if(e===Ss)throw Error(Y(174));return e}function fh(e,t){switch(He(us,t),He(ls,e),He(Xn,Ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pf(t,e)}Ve(Xn),He(Xn,t)}function Hi(){Ve(Xn),Ve(ls),Ve(us)}function a0(e){Ro(us.current);var t=Ro(Xn.current),n=pf(t,e.type);t!==n&&(He(ls,e),He(Xn,n))}function ph(e){ls.current===e&&(Ve(Xn),Ve(ls))}var Xe=po(0);function ru(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bd=[];function hh(){for(var e=0;e<bd.length;e++)bd[e]._workInProgressVersionPrimary=null;bd.length=0}var Pl=Pr.ReactCurrentDispatcher,xd=Pr.ReactCurrentBatchConfig,Uo=0,Ye=null,pt=null,yt=null,ou=!1,Ua=!1,cs=0,GS=0;function zt(){throw Error(Y(321))}function mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nn(e[n],t[n]))return!1;return!0}function _h(e,t,n,r,i,a){if(Uo=a,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?e2:t2,e=n(r,i),Ua){a=0;do{if(Ua=!1,cs=0,25<=a)throw Error(Y(301));a+=1,yt=pt=null,t.updateQueue=null,Pl.current=n2,e=n(r,i)}while(Ua)}if(Pl.current=iu,t=pt!==null&&pt.next!==null,Uo=0,yt=pt=Ye=null,ou=!1,t)throw Error(Y(300));return e}function gh(){var e=cs!==0;return cs=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ye.memoizedState=yt=e:yt=yt.next=e,yt}function bn(){if(pt===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=yt===null?Ye.memoizedState:yt.next;if(t!==null)yt=t,pt=e;else{if(e===null)throw Error(Y(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},yt===null?Ye.memoizedState=yt=e:yt=yt.next=e}return yt}function ds(e,t){return typeof t=="function"?t(e):t}function wd(e){var t=bn(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=pt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var u=l=null,d=null,f=a;do{var h=f.lane;if((Uo&h)===h)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=m,l=r):d=d.next=m,Ye.lanes|=h,$o|=h}f=f.next}while(f!==null&&f!==a);d===null?l=r:d.next=u,Nn(r,t.memoizedState)||(qt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ye.lanes|=a,$o|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kd(e){var t=bn(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Nn(a,t.memoizedState)||(qt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function s0(){}function l0(e,t){var n=Ye,r=bn(),i=t(),a=!Nn(r.memoizedState,i);if(a&&(r.memoizedState=i,qt=!0),r=r.queue,vh(d0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,fs(9,c0.bind(null,n,r,i,t),void 0,null),bt===null)throw Error(Y(349));Uo&30||u0(n,t,i)}return i}function u0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function c0(e,t,n,r){t.value=n,t.getSnapshot=r,f0(t)&&p0(e)}function d0(e,t,n){return n(function(){f0(t)&&p0(e)})}function f0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nn(e,n)}catch{return!0}}function p0(e){var t=wr(e,1);t!==null&&An(t,e,1,-1)}function K_(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t.queue=e,e=e.dispatch=YS.bind(null,Ye,e),[t.memoizedState,e]}function fs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function h0(){return bn().memoizedState}function Cl(e,t,n,r){var i=Vn();Ye.flags|=e,i.memoizedState=fs(1|t,n,void 0,r===void 0?null:r)}function $u(e,t,n,r){var i=bn();r=r===void 0?null:r;var a=void 0;if(pt!==null){var l=pt.memoizedState;if(a=l.destroy,r!==null&&mh(r,l.deps)){i.memoizedState=fs(t,n,a,r);return}}Ye.flags|=e,i.memoizedState=fs(1|t,n,a,r)}function Q_(e,t){return Cl(8390656,8,e,t)}function vh(e,t){return $u(2048,8,e,t)}function m0(e,t){return $u(4,2,e,t)}function _0(e,t){return $u(4,4,e,t)}function g0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function v0(e,t,n){return n=n!=null?n.concat([e]):null,$u(4,4,g0.bind(null,t,e),n)}function yh(){}function y0(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function b0(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function x0(e,t,n){return Uo&21?(Nn(n,t)||(n=Sb(),Ye.lanes|=n,$o|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qt=!0),e.memoizedState=n)}function JS(e,t){var n=Fe;Fe=n!==0&&4>n?n:4,e(!0);var r=xd.transition;xd.transition={};try{e(!1),t()}finally{Fe=n,xd.transition=r}}function w0(){return bn().memoizedState}function XS(e,t,n){var r=Gr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k0(e))S0(t,n);else if(n=e0(e,t,n,r),n!==null){var i=jt();An(n,e,r,i),P0(n,t,r)}}function YS(e,t,n){var r=Gr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(e))S0(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(i.hasEagerState=!0,i.eagerState=u,Nn(u,l)){var d=t.interleaved;d===null?(i.next=i,ch(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=e0(e,t,i,r),n!==null&&(i=jt(),An(n,e,r,i),P0(n,t,r))}}function k0(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function S0(e,t){Ua=ou=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function P0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gp(e,n)}}var iu={readContext:yn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},e2={readContext:yn,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:yn,useEffect:Q_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4194308,4,g0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cl(4,2,e,t)},useMemo:function(e,t){var n=Vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=XS.bind(null,Ye,e),[r.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:K_,useDebugValue:yh,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=K_(!1),t=e[0];return e=JS.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ye,i=Vn();if(Ge){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),bt===null)throw Error(Y(349));Uo&30||u0(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Q_(d0.bind(null,r,a,e),[e]),r.flags|=2048,fs(9,c0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Vn(),t=bt.identifierPrefix;if(Ge){var n=gr,r=_r;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=GS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t2={readContext:yn,useCallback:y0,useContext:yn,useEffect:vh,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:_0,useMemo:b0,useReducer:wd,useRef:h0,useState:function(){return wd(ds)},useDebugValue:yh,useDeferredValue:function(e){var t=bn();return x0(t,pt.memoizedState,e)},useTransition:function(){var e=wd(ds)[0],t=bn().memoizedState;return[e,t]},useMutableSource:s0,useSyncExternalStore:l0,useId:w0,unstable_isNewReconciler:!1},n2={readContext:yn,useCallback:y0,useContext:yn,useEffect:vh,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:_0,useMemo:b0,useReducer:kd,useRef:h0,useState:function(){return kd(ds)},useDebugValue:yh,useDeferredValue:function(e){var t=bn();return pt===null?t.memoizedState=e:x0(t,pt.memoizedState,e)},useTransition:function(){var e=kd(ds)[0],t=bn().memoizedState;return[e,t]},useMutableSource:s0,useSyncExternalStore:l0,useId:w0,unstable_isNewReconciler:!1};function Zi(e,t){try{var n="",r=t;do n+=zk(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Sd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function If(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r2=typeof WeakMap=="function"?WeakMap:Map;function C0(e,t,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){su||(su=!0,Vf=r),If(e,t)},n}function E0(e,t,n){n=vr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){If(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){If(e,t),typeof r!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function G_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=g2.bind(null,e,t,n),t.then(e,e))}function J_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function X_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vr(-1,1),t.tag=2,Kr(n,t,1))),n.lanes|=1),e)}var o2=Pr.ReactCurrentOwner,qt=!1;function Ft(e,t,n,r){t.child=e===null?i0(t,null,n,r):Wi(t,e.child,n,r)}function Y_(e,t,n,r,i){n=n.render;var a=t.ref;return Li(t,i),r=_h(e,t,n,r,a,i),n=gh(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kr(e,t,i)):(Ge&&n&&oh(t),t.flags|=1,Ft(e,t,r,i),t.child)}function eg(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Eh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,O0(e,t,a,r,i)):(e=zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:os,n(l,r)&&e.ref===t.ref)return kr(e,t,i)}return t.flags|=1,e=Jr(a,r),e.ref=t.ref,e.return=t,t.child=e}function O0(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(os(a,r)&&e.ref===t.ref)if(qt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(qt=!0);else return t.lanes=e.lanes,kr(e,t,i)}return Mf(e,t,n,r,i)}function T0(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Si,Xt),Xt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,He(Si,Xt),Xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,He(Si,Xt),Xt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,He(Si,Xt),Xt|=r;return Ft(e,t,i,n),t.child}function z0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mf(e,t,n,r,i){var a=Qt(n)?Fo:Nt.current;return a=Ui(t,a),Li(t,i),n=_h(e,t,n,r,a,i),r=gh(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kr(e,t,i)):(Ge&&r&&oh(t),t.flags|=1,Ft(e,t,n,i),t.child)}function tg(e,t,n,r,i){if(Qt(n)){var a=!0;Jl(t)}else a=!1;if(Li(t,i),t.stateNode===null)El(e,t),r0(t,n,r),Nf(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=yn(f):(f=Qt(n)?Fo:Nt.current,f=Ui(t,f));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&V_(t,l,r,f),Ir=!1;var g=t.memoizedState;l.state=g,nu(t,r,l,i),d=t.memoizedState,u!==r||g!==d||Kt.current||Ir?(typeof h=="function"&&(Bf(t,n,h,r),d=t.memoizedState),(u=Ir||Z_(t,n,u,r,g,d,f))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,t0(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:On(t.type,u),l.props=f,m=t.pendingProps,g=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=yn(d):(d=Qt(n)?Fo:Nt.current,d=Ui(t,d));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||g!==d)&&V_(t,l,r,d),Ir=!1,g=t.memoizedState,l.state=g,nu(t,r,l,i);var w=t.memoizedState;u!==m||g!==w||Kt.current||Ir?(typeof x=="function"&&(Bf(t,n,x,r),w=t.memoizedState),(f=Ir||Z_(t,n,f,r,g,w,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Df(e,t,n,r,a,i)}function Df(e,t,n,r,i,a){z0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&j_(t,n,!1),kr(e,t,a);r=t.stateNode,o2.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wi(t,e.child,null,a),t.child=Wi(t,null,u,a)):Ft(e,t,u,a),t.memoizedState=r.state,i&&j_(t,n,!0),t.child}function L0(e){var t=e.stateNode;t.pendingContext?F_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&F_(e,t.context,!1),fh(e,t.containerInfo)}function ng(e,t,n,r,i){return $i(),ah(i),t.flags|=256,Ft(e,t,n,r),t.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function jf(e){return{baseLanes:e,cachePool:null,transitions:null}}function R0(e,t,n){var r=t.pendingProps,i=Xe.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),He(Xe,i&1),e===null)return Rf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Zu(l,r,0,null),e=Mo(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=jf(n),t.memoizedState=Ff,e):bh(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return i2(e,t,l,r,u,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Jr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=Jr(u,a):(a=Mo(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?jf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Ff,r}return a=e.child,e=a.sibling,r=Jr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bh(e,t){return t=Zu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&ah(r),Wi(t,e.child,null,n),e=bh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i2(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Sd(Error(Y(422))),dl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Zu({mode:"visible",children:r.children},i,0,null),a=Mo(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Wi(t,e.child,null,l),t.child.memoizedState=jf(l),t.memoizedState=Ff,a);if(!(t.mode&1))return dl(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(Y(419)),r=Sd(a,r,void 0),dl(e,t,l,r)}if(u=(l&e.childLanes)!==0,qt||u){if(r=bt,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,wr(e,i),An(r,e,i,-1))}return Ch(),r=Sd(Error(Y(421))),dl(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=v2.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Yt=qr(i.nextSibling),tn=t,Ge=!0,zn=null,e!==null&&(hn[mn++]=_r,hn[mn++]=gr,hn[mn++]=jo,_r=e.id,gr=e.overflow,jo=t),t=bh(t,r.children),t.flags|=4096,t)}function rg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Af(e.return,t,n)}function Pd(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function A0(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ft(e,t,r.children,n),r=Xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rg(e,n,t);else if(e.tag===19)rg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(He(Xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ru(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pd(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ru(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pd(t,!0,n,null,a);break;case"together":Pd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function El(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$o|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Jr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a2(e,t,n){switch(t.tag){case 3:L0(t),$i();break;case 5:a0(t);break;case 1:Qt(t.type)&&Jl(t);break;case 4:fh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;He(eu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(He(Xe,Xe.current&1),t.flags|=128,null):n&t.child.childLanes?R0(e,t,n):(He(Xe,Xe.current&1),e=kr(e,t,n),e!==null?e.sibling:null);He(Xe,Xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return A0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),He(Xe,Xe.current),r)break;return null;case 22:case 23:return t.lanes=0,T0(e,t,n)}return kr(e,t,n)}var B0,Uf,N0,I0;B0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};N0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ro(Xn.current);var a=null;switch(n){case"input":i=uf(e,i),r=uf(e,r),a=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),a=[];break;case"textarea":i=ff(e,i),r=ff(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ql)}hf(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ja.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=i?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Ze("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};I0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sa(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function s2(e,t,n){var r=t.pendingProps;switch(ih(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Qt(t.type)&&Gl(),Lt(t),null;case 3:return r=t.stateNode,Hi(),Ve(Kt),Ve(Nt),hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ul(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zn!==null&&(Qf(zn),zn=null))),Uf(e,t),Lt(t),null;case 5:ph(t);var i=Ro(us.current);if(n=t.type,e!==null&&t.stateNode!=null)N0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return Lt(t),null}if(e=Ro(Xn.current),ul(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Kn]=t,r[ss]=a,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(i=0;i<Ba.length;i++)Ze(Ba[i],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":f_(r,a),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ze("invalid",r);break;case"textarea":h_(r,a),Ze("invalid",r)}hf(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),i=["children",""+u]):Ja.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Ze("scroll",r)}switch(n){case"input":el(r),p_(r,a,!0);break;case"textarea":el(r),m_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ql)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ub(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Kn]=t,e[ss]=r,B0(e,t,!1,!1),t.stateNode=e;e:{switch(l=mf(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),i=r;break;case"iframe":case"object":case"embed":Ze("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ba.length;i++)Ze(Ba[i],e);i=r;break;case"source":Ze("error",e),i=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),i=r;break;case"details":Ze("toggle",e),i=r;break;case"input":f_(e,r),i=uf(e,r),Ze("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":h_(e,r),i=ff(e,r),Ze("invalid",e);break;default:i=r}hf(n,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?fb(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&cb(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Xa(e,d):typeof d=="number"&&Xa(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ja.hasOwnProperty(a)?d!=null&&a==="onScroll"&&Ze("scroll",e):d!=null&&Hp(e,a,d,l))}switch(n){case"input":el(e),p_(e,r,!1);break;case"textarea":el(e),m_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+oo(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ei(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Lt(t),null;case 6:if(e&&t.stateNode!=null)I0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=Ro(us.current),Ro(Xn.current),ul(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kn]=t,(a=r.nodeValue!==n)&&(e=tn,e!==null))switch(e.tag){case 3:ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=t,t.stateNode=r}return Lt(t),null;case 13:if(Ve(Xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&Yt!==null&&t.mode&1&&!(t.flags&128))Yb(),$i(),t.flags|=98560,a=!1;else if(a=ul(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(Y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[Kn]=t}else $i(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lt(t),a=!1}else zn!==null&&(Qf(zn),zn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Xe.current&1?ht===0&&(ht=3):Ch())),t.updateQueue!==null&&(t.flags|=4),Lt(t),null);case 4:return Hi(),Uf(e,t),e===null&&is(t.stateNode.containerInfo),Lt(t),null;case 10:return uh(t.type._context),Lt(t),null;case 17:return Qt(t.type)&&Gl(),Lt(t),null;case 19:if(Ve(Xe),a=t.memoizedState,a===null)return Lt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Sa(a,!1);else{if(ht!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ru(e),l!==null){for(t.flags|=128,Sa(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return He(Xe,Xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&st()>Vi&&(t.flags|=128,r=!0,Sa(a,!1),t.lanes=4194304)}else{if(!r)if(e=ru(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ge)return Lt(t),null}else 2*st()-a.renderingStartTime>Vi&&n!==1073741824&&(t.flags|=128,r=!0,Sa(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=st(),t.sibling=null,n=Xe.current,He(Xe,r?n&1|2:n&1),t):(Lt(t),null);case 22:case 23:return Ph(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xt&1073741824&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function l2(e,t){switch(ih(t),t.tag){case 1:return Qt(t.type)&&Gl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hi(),Ve(Kt),Ve(Nt),hh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ph(t),null;case 13:if(Ve(Xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ve(Xe),null;case 4:return Hi(),null;case 10:return uh(t.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var fl=!1,Bt=!1,u2=typeof WeakSet=="function"?WeakSet:Set,fe=null;function ki(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(e,t,r)}else n.current=null}function $f(e,t,n){try{n()}catch(r){nt(e,t,r)}}var og=!1;function c2(e,t){if(Pf=Vl,e=jb(),rh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,h=0,m=e,g=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(u=l+i),m!==a||r!==0&&m.nodeType!==3||(d=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break t;if(g===n&&++f===i&&(u=l),g===a&&++h===r&&(d=l),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cf={focusedElem:e,selectionRange:n},Vl=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,P=w.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:On(t.type,v),P);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(C){nt(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return w=og,og=!1,w}function $a(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&$f(t,n,a)}i=i.next}while(i!==r)}}function Wu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function M0(e){var t=e.alternate;t!==null&&(e.alternate=null,M0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kn],delete t[ss],delete t[Tf],delete t[VS],delete t[qS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function D0(e){return e.tag===5||e.tag===3||e.tag===4}function ig(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ql));else if(r!==4&&(e=e.child,e!==null))for(Hf(e,t,n),e=e.sibling;e!==null;)Hf(e,t,n),e=e.sibling}function Zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zf(e,t,n),e=e.sibling;e!==null;)Zf(e,t,n),e=e.sibling}var St=null,Tn=!1;function Rr(e,t,n){for(n=n.child;n!==null;)F0(e,t,n),n=n.sibling}function F0(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:Bt||ki(n,t);case 6:var r=St,i=Tn;St=null,Rr(e,t,n),St=r,Tn=i,St!==null&&(Tn?(e=St,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):St.removeChild(n.stateNode));break;case 18:St!==null&&(Tn?(e=St,n=n.stateNode,e.nodeType===8?vd(e.parentNode,n):e.nodeType===1&&vd(e,n),ns(e)):vd(St,n.stateNode));break;case 4:r=St,i=Tn,St=n.stateNode.containerInfo,Tn=!0,Rr(e,t,n),St=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&$f(n,t,l),i=i.next}while(i!==r)}Rr(e,t,n);break;case 1:if(!Bt&&(ki(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){nt(n,t,u)}Rr(e,t,n);break;case 21:Rr(e,t,n);break;case 22:n.mode&1?(Bt=(r=Bt)||n.memoizedState!==null,Rr(e,t,n),Bt=r):Rr(e,t,n);break;default:Rr(e,t,n)}}function ag(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u2),t.forEach(function(r){var i=y2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:St=u.stateNode,Tn=!1;break e;case 3:St=u.stateNode.containerInfo,Tn=!0;break e;case 4:St=u.stateNode.containerInfo,Tn=!0;break e}u=u.return}if(St===null)throw Error(Y(160));F0(a,l,i),St=null,Tn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){nt(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)j0(t,e),t=t.sibling}function j0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(t,e),Wn(e),r&4){try{$a(3,e,e.return),Wu(3,e)}catch(v){nt(e,e.return,v)}try{$a(5,e,e.return)}catch(v){nt(e,e.return,v)}}break;case 1:Sn(t,e),Wn(e),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Sn(t,e),Wn(e),r&512&&n!==null&&ki(n,n.return),e.flags&32){var i=e.stateNode;try{Xa(i,"")}catch(v){nt(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&sb(i,a),mf(u,l);var f=mf(u,a);for(l=0;l<d.length;l+=2){var h=d[l],m=d[l+1];h==="style"?fb(i,m):h==="dangerouslySetInnerHTML"?cb(i,m):h==="children"?Xa(i,m):Hp(i,h,m,f)}switch(u){case"input":cf(i,a);break;case"textarea":lb(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Ei(i,!!a.multiple,x,!1):g!==!!a.multiple&&(a.defaultValue!=null?Ei(i,!!a.multiple,a.defaultValue,!0):Ei(i,!!a.multiple,a.multiple?[]:"",!1))}i[ss]=a}catch(v){nt(e,e.return,v)}}break;case 6:if(Sn(t,e),Wn(e),r&4){if(e.stateNode===null)throw Error(Y(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){nt(e,e.return,v)}}break;case 3:if(Sn(t,e),Wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ns(t.containerInfo)}catch(v){nt(e,e.return,v)}break;case 4:Sn(t,e),Wn(e);break;case 13:Sn(t,e),Wn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(kh=st())),r&4&&ag(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Bt=(f=Bt)||h,Sn(t,e),Bt=f):Sn(t,e),Wn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(fe=e,h=e.child;h!==null;){for(m=fe=h;fe!==null;){switch(g=fe,x=g.child,g.tag){case 0:case 11:case 14:case 15:$a(4,g,g.return);break;case 1:ki(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){nt(r,n,v)}}break;case 5:ki(g,g.return);break;case 22:if(g.memoizedState!==null){lg(m);continue}}x!==null?(x.return=g,fe=x):lg(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=db("display",l))}catch(v){nt(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(v){nt(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Sn(t,e),Wn(e),r&4&&ag(e);break;case 21:break;default:Sn(t,e),Wn(e)}}function Wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(D0(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xa(i,""),r.flags&=-33);var a=ig(e);Zf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ig(e);Hf(e,u,l);break;default:throw Error(Y(161))}}catch(d){nt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d2(e,t,n){fe=e,U0(e)}function U0(e,t,n){for(var r=(e.mode&1)!==0;fe!==null;){var i=fe,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||fl;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||Bt;u=fl;var f=Bt;if(fl=l,(Bt=d)&&!f)for(fe=i;fe!==null;)l=fe,d=l.child,l.tag===22&&l.memoizedState!==null?ug(i):d!==null?(d.return=l,fe=d):ug(i);for(;a!==null;)fe=a,U0(a),a=a.sibling;fe=i,fl=u,Bt=f}sg(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,fe=a):sg(e)}}function sg(e){for(;fe!==null;){var t=fe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Bt||Wu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Bt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:On(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&H_(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}H_(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&ns(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Bt||t.flags&512&&Wf(t)}catch(g){nt(t,t.return,g)}}if(t===e){fe=null;break}if(n=t.sibling,n!==null){n.return=t.return,fe=n;break}fe=t.return}}function lg(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,fe=n;break}fe=t.return}}function ug(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wu(4,t)}catch(d){nt(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){nt(t,i,d)}}var a=t.return;try{Wf(t)}catch(d){nt(t,a,d)}break;case 5:var l=t.return;try{Wf(t)}catch(d){nt(t,l,d)}}}catch(d){nt(t,t.return,d)}if(t===e){fe=null;break}var u=t.sibling;if(u!==null){u.return=t.return,fe=u;break}fe=t.return}}var f2=Math.ceil,au=Pr.ReactCurrentDispatcher,xh=Pr.ReactCurrentOwner,gn=Pr.ReactCurrentBatchConfig,Ne=0,bt=null,dt=null,Pt=0,Xt=0,Si=po(0),ht=0,ps=null,$o=0,Hu=0,wh=0,Wa=null,Vt=null,kh=0,Vi=1/0,pr=null,su=!1,Vf=null,Qr=null,pl=!1,$r=null,lu=0,Ha=0,qf=null,Ol=-1,Tl=0;function jt(){return Ne&6?st():Ol!==-1?Ol:Ol=st()}function Gr(e){return e.mode&1?Ne&2&&Pt!==0?Pt&-Pt:QS.transition!==null?(Tl===0&&(Tl=Sb()),Tl):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:Lb(e.type)),e):1}function An(e,t,n,r){if(50<Ha)throw Ha=0,qf=null,Error(Y(185));xs(e,n,r),(!(Ne&2)||e!==bt)&&(e===bt&&(!(Ne&2)&&(Hu|=n),ht===4&&Fr(e,Pt)),Gt(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Vi=st()+500,ju&&ho()))}function Gt(e,t){var n=e.callbackNode;Qk(e,t);var r=Zl(e,e===bt?Pt:0);if(r===0)n!==null&&v_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&v_(n),t===1)e.tag===0?KS(cg.bind(null,e)):Gb(cg.bind(null,e)),HS(function(){!(Ne&6)&&ho()}),n=null;else{switch(Pb(r)){case 1:n=Qp;break;case 4:n=wb;break;case 16:n=Hl;break;case 536870912:n=kb;break;default:n=Hl}n=Q0(n,$0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $0(e,t){if(Ol=-1,Tl=0,Ne&6)throw Error(Y(327));var n=e.callbackNode;if(Ri()&&e.callbackNode!==n)return null;var r=Zl(e,e===bt?Pt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uu(e,r);else{t=r;var i=Ne;Ne|=2;var a=H0();(bt!==e||Pt!==t)&&(pr=null,Vi=st()+500,Io(e,t));do try{m2();break}catch(u){W0(e,u)}while(1);lh(),au.current=a,Ne=i,dt!==null?t=0:(bt=null,Pt=0,t=ht)}if(t!==0){if(t===2&&(i=bf(e),i!==0&&(r=i,t=Kf(e,i))),t===1)throw n=ps,Io(e,0),Fr(e,r),Gt(e,st()),n;if(t===6)Fr(e,r);else{if(i=e.current.alternate,!(r&30)&&!p2(i)&&(t=uu(e,r),t===2&&(a=bf(e),a!==0&&(r=a,t=Kf(e,a))),t===1))throw n=ps,Io(e,0),Fr(e,r),Gt(e,st()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:Oo(e,Vt,pr);break;case 3:if(Fr(e,r),(r&130023424)===r&&(t=kh+500-st(),10<t)){if(Zl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){jt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Of(Oo.bind(null,e,Vt,pr),t);break}Oo(e,Vt,pr);break;case 4:if(Fr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Rn(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=st()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f2(r/1960))-r,10<r){e.timeoutHandle=Of(Oo.bind(null,e,Vt,pr),r);break}Oo(e,Vt,pr);break;case 5:Oo(e,Vt,pr);break;default:throw Error(Y(329))}}}return Gt(e,st()),e.callbackNode===n?$0.bind(null,e):null}function Kf(e,t){var n=Wa;return e.current.memoizedState.isDehydrated&&(Io(e,t).flags|=256),e=uu(e,t),e!==2&&(t=Vt,Vt=n,t!==null&&Qf(t)),e}function Qf(e){Vt===null?Vt=e:Vt.push.apply(Vt,e)}function p2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fr(e,t){for(t&=~wh,t&=~Hu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rn(t),r=1<<n;e[n]=-1,t&=~r}}function cg(e){if(Ne&6)throw Error(Y(327));Ri();var t=Zl(e,0);if(!(t&1))return Gt(e,st()),null;var n=uu(e,t);if(e.tag!==0&&n===2){var r=bf(e);r!==0&&(t=r,n=Kf(e,r))}if(n===1)throw n=ps,Io(e,0),Fr(e,t),Gt(e,st()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Oo(e,Vt,pr),Gt(e,st()),null}function Sh(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Vi=st()+500,ju&&ho())}}function Wo(e){$r!==null&&$r.tag===0&&!(Ne&6)&&Ri();var t=Ne;Ne|=1;var n=gn.transition,r=Fe;try{if(gn.transition=null,Fe=1,e)return e()}finally{Fe=r,gn.transition=n,Ne=t,!(Ne&6)&&ho()}}function Ph(){Xt=Si.current,Ve(Si)}function Io(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,WS(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gl();break;case 3:Hi(),Ve(Kt),Ve(Nt),hh();break;case 5:ph(r);break;case 4:Hi();break;case 13:Ve(Xe);break;case 19:Ve(Xe);break;case 10:uh(r.type._context);break;case 22:case 23:Ph()}n=n.return}if(bt=e,dt=e=Jr(e.current,null),Pt=Xt=t,ht=0,ps=null,wh=Hu=$o=0,Vt=Wa=null,Lo!==null){for(t=0;t<Lo.length;t++)if(n=Lo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Lo=null}return e}function W0(e,t){do{var n=dt;try{if(lh(),Pl.current=iu,ou){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(Uo=0,yt=pt=Ye=null,Ua=!1,cs=0,xh.current=null,n===null||n.return===null){ht=1,ps=t,dt=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=Pt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=J_(l);if(x!==null){x.flags&=-257,X_(x,l,u,a,t),x.mode&1&&G_(a,f,t),t=x,d=f;var w=t.updateQueue;if(w===null){var v=new Set;v.add(d),t.updateQueue=v}else w.add(d);break e}else{if(!(t&1)){G_(a,f,t),Ch();break e}d=Error(Y(426))}}else if(Ge&&u.mode&1){var P=J_(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),X_(P,l,u,a,t),ah(Zi(d,u));break e}}a=d=Zi(d,u),ht!==4&&(ht=2),Wa===null?Wa=[a]:Wa.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=C0(a,d,t);W_(a,y);break e;case 1:u=d;var b=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Qr===null||!Qr.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=E0(a,u,t);W_(a,C);break e}}a=a.return}while(a!==null)}V0(n)}catch(z){t=z,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(1)}function H0(){var e=au.current;return au.current=iu,e===null?iu:e}function Ch(){(ht===0||ht===3||ht===2)&&(ht=4),bt===null||!($o&268435455)&&!(Hu&268435455)||Fr(bt,Pt)}function uu(e,t){var n=Ne;Ne|=2;var r=H0();(bt!==e||Pt!==t)&&(pr=null,Io(e,t));do try{h2();break}catch(i){W0(e,i)}while(1);if(lh(),Ne=n,au.current=r,dt!==null)throw Error(Y(261));return bt=null,Pt=0,ht}function h2(){for(;dt!==null;)Z0(dt)}function m2(){for(;dt!==null&&!jk();)Z0(dt)}function Z0(e){var t=K0(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,t===null?V0(e):dt=t,xh.current=null}function V0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l2(n,t),n!==null){n.flags&=32767,dt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ht=6,dt=null;return}}else if(n=s2(n,t,Xt),n!==null){dt=n;return}if(t=t.sibling,t!==null){dt=t;return}dt=t=e}while(t!==null);ht===0&&(ht=5)}function Oo(e,t,n){var r=Fe,i=gn.transition;try{gn.transition=null,Fe=1,_2(e,t,n,r)}finally{gn.transition=i,Fe=r}return null}function _2(e,t,n,r){do Ri();while($r!==null);if(Ne&6)throw Error(Y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Gk(e,a),e===bt&&(dt=bt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,Q0(Hl,function(){return Ri(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=gn.transition,gn.transition=null;var l=Fe;Fe=1;var u=Ne;Ne|=4,xh.current=null,c2(e,n),j0(n,e),IS(Cf),Vl=!!Pf,Cf=Pf=null,e.current=n,d2(n),Uk(),Ne=u,Fe=l,gn.transition=a}else e.current=n;if(pl&&(pl=!1,$r=e,lu=i),a=e.pendingLanes,a===0&&(Qr=null),Hk(n.stateNode),Gt(e,st()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(su)throw su=!1,e=Vf,Vf=null,e;return lu&1&&e.tag!==0&&Ri(),a=e.pendingLanes,a&1?e===qf?Ha++:(Ha=0,qf=e):Ha=0,ho(),null}function Ri(){if($r!==null){var e=Pb(lu),t=gn.transition,n=Fe;try{if(gn.transition=null,Fe=16>e?16:e,$r===null)var r=!1;else{if(e=$r,$r=null,lu=0,Ne&6)throw Error(Y(331));var i=Ne;for(Ne|=4,fe=e.current;fe!==null;){var a=fe,l=a.child;if(fe.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(fe=f;fe!==null;){var h=fe;switch(h.tag){case 0:case 11:case 15:$a(8,h,a)}var m=h.child;if(m!==null)m.return=h,fe=m;else for(;fe!==null;){h=fe;var g=h.sibling,x=h.return;if(M0(h),h===f){fe=null;break}if(g!==null){g.return=x,fe=g;break}fe=x}}}var w=a.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}fe=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,fe=l;else e:for(;fe!==null;){if(a=fe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:$a(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}var b=e.current;for(fe=b;fe!==null;){l=fe;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,fe=S;else e:for(l=b;fe!==null;){if(u=fe,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Wu(9,u)}}catch(z){nt(u,u.return,z)}if(u===l){fe=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,fe=C;break e}fe=u.return}}if(Ne=i,ho(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Nu,e)}catch{}r=!0}return r}finally{Fe=n,gn.transition=t}}return!1}function dg(e,t,n){t=Zi(n,t),t=C0(e,t,1),e=Kr(e,t,1),t=jt(),e!==null&&(xs(e,1,t),Gt(e,t))}function nt(e,t,n){if(e.tag===3)dg(e,e,n);else for(;t!==null;){if(t.tag===3){dg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qr===null||!Qr.has(r))){e=Zi(n,e),e=E0(t,e,1),t=Kr(t,e,1),e=jt(),t!==null&&(xs(t,1,e),Gt(t,e));break}}t=t.return}}function g2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,bt===e&&(Pt&n)===n&&(ht===4||ht===3&&(Pt&130023424)===Pt&&500>st()-kh?Io(e,0):wh|=n),Gt(e,t)}function q0(e,t){t===0&&(e.mode&1?(t=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):t=1);var n=jt();e=wr(e,t),e!==null&&(xs(e,t,n),Gt(e,n))}function v2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),q0(e,n)}function y2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),q0(e,n)}var K0;K0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Kt.current)qt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qt=!1,a2(e,t,n);qt=!!(e.flags&131072)}else qt=!1,Ge&&t.flags&1048576&&Jb(t,Yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;El(e,t),e=t.pendingProps;var i=Ui(t,Nt.current);Li(t,n),i=_h(null,t,r,e,i,n);var a=gh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qt(r)?(a=!0,Jl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dh(t),i.updater=Uu,t.stateNode=i,i._reactInternals=t,Nf(t,r,e,n),t=Df(null,t,r,!0,a,n)):(t.tag=0,Ge&&a&&oh(t),Ft(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(El(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=x2(r),e=On(r,e),i){case 0:t=Mf(null,t,r,e,n);break e;case 1:t=tg(null,t,r,e,n);break e;case 11:t=Y_(null,t,r,e,n);break e;case 14:t=eg(null,t,r,On(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),Mf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),tg(e,t,r,i,n);case 3:e:{if(L0(t),e===null)throw Error(Y(387));r=t.pendingProps,a=t.memoizedState,i=a.element,t0(e,t),nu(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Zi(Error(Y(423)),t),t=ng(e,t,r,n,i);break e}else if(r!==i){i=Zi(Error(Y(424)),t),t=ng(e,t,r,n,i);break e}else for(Yt=qr(t.stateNode.containerInfo.firstChild),tn=t,Ge=!0,zn=null,n=i0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){t=kr(e,t,n);break e}Ft(e,t,r,n)}t=t.child}return t;case 5:return a0(t),e===null&&Rf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Ef(r,i)?l=null:a!==null&&Ef(r,a)&&(t.flags|=32),z0(e,t),Ft(e,t,l,n),t.child;case 6:return e===null&&Rf(t),null;case 13:return R0(e,t,n);case 4:return fh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wi(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),Y_(e,t,r,i,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,He(eu,r._currentValue),r._currentValue=l,a!==null)if(Nn(a.value,l)){if(a.children===i.children&&!Kt.current){t=kr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=vr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?d.next=d:(d.next=h.next,h.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Af(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(Y(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Af(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Li(t,n),i=yn(i),r=r(i),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return r=t.type,i=On(r,t.pendingProps),i=On(r.type,i),eg(e,t,r,i,n);case 15:return O0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:On(r,i),El(e,t),t.tag=1,Qt(r)?(e=!0,Jl(t)):e=!1,Li(t,n),r0(t,r,i),Nf(t,r,i,n),Df(null,t,r,!0,e,n);case 19:return A0(e,t,n);case 22:return T0(e,t,n)}throw Error(Y(156,t.tag))};function Q0(e,t){return xb(e,t)}function b2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,t,n,r){return new b2(e,t,n,r)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x2(e){if(typeof e=="function")return Eh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vp)return 11;if(e===qp)return 14}return 2}function Jr(e,t){var n=e.alternate;return n===null?(n=_n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zl(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Eh(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hi:return Mo(n.children,i,a,t);case Zp:l=8,i|=8;break;case of:return e=_n(12,n,t,i|2),e.elementType=of,e.lanes=a,e;case af:return e=_n(13,n,t,i),e.elementType=af,e.lanes=a,e;case sf:return e=_n(19,n,t,i),e.elementType=sf,e.lanes=a,e;case ob:return Zu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nb:l=10;break e;case rb:l=9;break e;case Vp:l=11;break e;case qp:l=14;break e;case Nr:l=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=_n(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Mo(e,t,n,r){return e=_n(7,e,r,t),e.lanes=n,e}function Zu(e,t,n,r){return e=_n(22,e,r,t),e.elementType=ob,e.lanes=n,e.stateNode={isHidden:!1},e}function Cd(e,t,n){return e=_n(6,e,null,t),e.lanes=n,e}function Ed(e,t,n){return t=_n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function w2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sd(0),this.expirationTimes=sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oh(e,t,n,r,i,a,l,u,d){return e=new w2(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=_n(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(a),e}function k2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function G0(e){if(!e)return io;e=e._reactInternals;e:{if(Ko(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(Qt(n))return Qb(e,n,t)}return t}function J0(e,t,n,r,i,a,l,u,d){return e=Oh(n,r,!0,e,i,a,l,u,d),e.context=G0(null),n=e.current,r=jt(),i=Gr(n),a=vr(r,i),a.callback=t??null,Kr(n,a,i),e.current.lanes=i,xs(e,i,r),Gt(e,r),e}function Vu(e,t,n,r){var i=t.current,a=jt(),l=Gr(i);return n=G0(n),t.context===null?t.context=n:t.pendingContext=n,t=vr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kr(i,t,l),e!==null&&(An(e,i,l,a),Sl(e,i,l)),l}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Th(e,t){fg(e,t),(e=e.alternate)&&fg(e,t)}function S2(){return null}var X0=typeof reportError=="function"?reportError:function(e){console.error(e)};function zh(e){this._internalRoot=e}qu.prototype.render=zh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));Vu(e,t,null,null)};qu.prototype.unmount=zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wo(function(){Vu(null,e,null,null)}),t[xr]=null}};function qu(e){this._internalRoot=e}qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ob();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dr.length&&t!==0&&t<Dr[n].priority;n++);Dr.splice(n,0,e),n===0&&zb(e)}};function Lh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pg(){}function P2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=cu(l);a.call(f)}}var l=J0(t,r,e,0,null,!1,!1,"",pg);return e._reactRootContainer=l,e[xr]=l.current,is(e.nodeType===8?e.parentNode:e),Wo(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=cu(d);u.call(f)}}var d=Oh(e,0,!1,null,null,!1,!1,"",pg);return e._reactRootContainer=d,e[xr]=d.current,is(e.nodeType===8?e.parentNode:e),Wo(function(){Vu(t,d,n,r)}),d}function Qu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var u=i;i=function(){var d=cu(l);u.call(d)}}Vu(t,l,e,i)}else l=P2(n,t,e,i,r);return cu(l)}Cb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Aa(t.pendingLanes);n!==0&&(Gp(t,n|1),Gt(t,st()),!(Ne&6)&&(Vi=st()+500,ho()))}break;case 13:Wo(function(){var r=wr(e,1);if(r!==null){var i=jt();An(r,e,1,i)}}),Th(e,1)}};Jp=function(e){if(e.tag===13){var t=wr(e,134217728);if(t!==null){var n=jt();An(t,e,134217728,n)}Th(e,134217728)}};Eb=function(e){if(e.tag===13){var t=Gr(e),n=wr(e,t);if(n!==null){var r=jt();An(n,e,t,r)}Th(e,t)}};Ob=function(){return Fe};Tb=function(e,t){var n=Fe;try{return Fe=e,t()}finally{Fe=n}};gf=function(e,t,n){switch(t){case"input":if(cf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fu(r);if(!i)throw Error(Y(90));ab(r),cf(r,i)}}}break;case"textarea":lb(e,n);break;case"select":t=n.value,t!=null&&Ei(e,!!n.multiple,t,!1)}};mb=Sh;_b=Wo;var C2={usingClientEntryPoint:!1,Events:[ks,vi,Fu,pb,hb,Sh]},Pa={findFiberByHostInstance:zo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E2={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yb(e),e===null?null:e.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||S2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Nu=hl.inject(E2),Jn=hl}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C2;on.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(t))throw Error(Y(200));return k2(e,t,null,n)};on.createRoot=function(e,t){if(!Lh(e))throw Error(Y(299));var n=!1,r="",i=X0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Oh(e,1,!1,null,null,n,!1,r,i),e[xr]=t.current,is(e.nodeType===8?e.parentNode:e),new zh(t)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=yb(t),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return Wo(e)};on.hydrate=function(e,t,n){if(!Ku(t))throw Error(Y(200));return Qu(null,e,t,!0,n)};on.hydrateRoot=function(e,t,n){if(!Lh(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=X0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=J0(t,null,e,1,n??null,i,!1,a,l),e[xr]=t.current,is(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qu(t)};on.render=function(e,t,n){if(!Ku(t))throw Error(Y(200));return Qu(null,e,t,!1,n)};on.unmountComponentAtNode=function(e){if(!Ku(e))throw Error(Y(40));return e._reactRootContainer?(Wo(function(){Qu(null,null,e,!1,function(){e._reactRootContainer=null,e[xr]=null})}),!0):!1};on.unstable_batchedUpdates=Sh;on.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ku(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Qu(e,t,n,!1,r)};on.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=on})(Sk);const O2=Hy(Fi);var Y0,hg=Fi;Y0=hg.createRoot,hg.hydrateRoot;var Gf={},T2={get exports(){return Gf},set exports(e){Gf=e}},ex={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=T;function z2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var L2=typeof Object.is=="function"?Object.is:z2,R2=qi.useState,A2=qi.useEffect,B2=qi.useLayoutEffect,N2=qi.useDebugValue;function I2(e,t){var n=t(),r=R2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return B2(function(){i.value=n,i.getSnapshot=t,Od(i)&&a({inst:i})},[e,n,t]),A2(function(){return Od(i)&&a({inst:i}),e(function(){Od(i)&&a({inst:i})})},[e]),N2(n),n}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!L2(e,n)}catch{return!0}}function M2(e,t){return t()}var D2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M2:I2;ex.useSyncExternalStore=qi.useSyncExternalStore!==void 0?qi.useSyncExternalStore:D2;(function(e){e.exports=ex})(T2);var Jf={},F2={get exports(){return Jf},set exports(e){Jf=e}},tx={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=T,j2=Gf;function U2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $2=typeof Object.is=="function"?Object.is:U2,W2=j2.useSyncExternalStore,H2=Gu.useRef,Z2=Gu.useEffect,V2=Gu.useMemo,q2=Gu.useDebugValue;tx.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=H2(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=V2(function(){function d(x){if(!f){if(f=!0,h=x,x=r(x),i!==void 0&&l.hasValue){var w=l.value;if(i(w,x))return m=w}return m=x}if(w=m,$2(h,x))return w;var v=r(x);return i!==void 0&&i(w,v)?w:(h=x,m=v)}var f=!1,h,m,g=n===void 0?null:n;return[function(){return d(t())},g===null?void 0:function(){return d(g())}]},[t,n,r,i]);var u=W2(e,a[0],a[1]);return Z2(function(){l.hasValue=!0,l.value=u},[u]),q2(u),u};(function(e){e.exports=tx})(F2);function K2(e){e()}let nx=K2;const Q2=e=>nx=e,G2=()=>nx,ao=T.createContext(null);function rx(){return T.useContext(ao)}const J2=()=>{throw new Error("uSES not initialized!")};let ox=J2;const X2=e=>{ox=e},Y2=(e,t)=>e===t;function eP(e=ao){const t=e===ao?rx:()=>T.useContext(e);return function(r,i=Y2){const{store:a,subscription:l,getServerState:u}=t(),d=ox(l.addNestedSub,a.getState,u||a.getState,r,i);return T.useDebugValue(d),d}}const tP=eP();function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me.apply(this,arguments)}var Xf={},nP={get exports(){return Xf},set exports(e){Xf=e}},je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xt=typeof Symbol=="function"&&Symbol.for,Rh=xt?Symbol.for("react.element"):60103,Ah=xt?Symbol.for("react.portal"):60106,Ju=xt?Symbol.for("react.fragment"):60107,Xu=xt?Symbol.for("react.strict_mode"):60108,Yu=xt?Symbol.for("react.profiler"):60114,ec=xt?Symbol.for("react.provider"):60109,tc=xt?Symbol.for("react.context"):60110,Bh=xt?Symbol.for("react.async_mode"):60111,nc=xt?Symbol.for("react.concurrent_mode"):60111,rc=xt?Symbol.for("react.forward_ref"):60112,oc=xt?Symbol.for("react.suspense"):60113,rP=xt?Symbol.for("react.suspense_list"):60120,ic=xt?Symbol.for("react.memo"):60115,ac=xt?Symbol.for("react.lazy"):60116,oP=xt?Symbol.for("react.block"):60121,iP=xt?Symbol.for("react.fundamental"):60117,aP=xt?Symbol.for("react.responder"):60118,sP=xt?Symbol.for("react.scope"):60119;function sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rh:switch(e=e.type,e){case Bh:case nc:case Ju:case Yu:case Xu:case oc:return e;default:switch(e=e&&e.$$typeof,e){case tc:case rc:case ac:case ic:case ec:return e;default:return t}}case Ah:return t}}}function ix(e){return sn(e)===nc}je.AsyncMode=Bh;je.ConcurrentMode=nc;je.ContextConsumer=tc;je.ContextProvider=ec;je.Element=Rh;je.ForwardRef=rc;je.Fragment=Ju;je.Lazy=ac;je.Memo=ic;je.Portal=Ah;je.Profiler=Yu;je.StrictMode=Xu;je.Suspense=oc;je.isAsyncMode=function(e){return ix(e)||sn(e)===Bh};je.isConcurrentMode=ix;je.isContextConsumer=function(e){return sn(e)===tc};je.isContextProvider=function(e){return sn(e)===ec};je.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rh};je.isForwardRef=function(e){return sn(e)===rc};je.isFragment=function(e){return sn(e)===Ju};je.isLazy=function(e){return sn(e)===ac};je.isMemo=function(e){return sn(e)===ic};je.isPortal=function(e){return sn(e)===Ah};je.isProfiler=function(e){return sn(e)===Yu};je.isStrictMode=function(e){return sn(e)===Xu};je.isSuspense=function(e){return sn(e)===oc};je.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ju||e===nc||e===Yu||e===Xu||e===oc||e===rP||typeof e=="object"&&e!==null&&(e.$$typeof===ac||e.$$typeof===ic||e.$$typeof===ec||e.$$typeof===tc||e.$$typeof===rc||e.$$typeof===iP||e.$$typeof===aP||e.$$typeof===sP||e.$$typeof===oP)};je.typeOf=sn;(function(e){e.exports=je})(nP);var ax=Xf,lP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},uP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sx={};sx[ax.ForwardRef]=lP;sx[ax.Memo]=uP;var mg={},cP={get exports(){return mg},set exports(e){mg=e}},Ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=Symbol.for("react.element"),Ih=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),dP=Symbol.for("react.server_context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),_c=Symbol.for("react.lazy"),fP=Symbol.for("react.offscreen"),lx;lx=Symbol.for("react.module.reference");function xn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nh:switch(e=e.type,e){case sc:case uc:case lc:case pc:case hc:return e;default:switch(e=e&&e.$$typeof,e){case dP:case dc:case fc:case _c:case mc:case cc:return e;default:return t}}case Ih:return t}}}Ue.ContextConsumer=dc;Ue.ContextProvider=cc;Ue.Element=Nh;Ue.ForwardRef=fc;Ue.Fragment=sc;Ue.Lazy=_c;Ue.Memo=mc;Ue.Portal=Ih;Ue.Profiler=uc;Ue.StrictMode=lc;Ue.Suspense=pc;Ue.SuspenseList=hc;Ue.isAsyncMode=function(){return!1};Ue.isConcurrentMode=function(){return!1};Ue.isContextConsumer=function(e){return xn(e)===dc};Ue.isContextProvider=function(e){return xn(e)===cc};Ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nh};Ue.isForwardRef=function(e){return xn(e)===fc};Ue.isFragment=function(e){return xn(e)===sc};Ue.isLazy=function(e){return xn(e)===_c};Ue.isMemo=function(e){return xn(e)===mc};Ue.isPortal=function(e){return xn(e)===Ih};Ue.isProfiler=function(e){return xn(e)===uc};Ue.isStrictMode=function(e){return xn(e)===lc};Ue.isSuspense=function(e){return xn(e)===pc};Ue.isSuspenseList=function(e){return xn(e)===hc};Ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===sc||e===uc||e===lc||e===pc||e===hc||e===fP||typeof e=="object"&&e!==null&&(e.$$typeof===_c||e.$$typeof===mc||e.$$typeof===cc||e.$$typeof===dc||e.$$typeof===fc||e.$$typeof===lx||e.getModuleId!==void 0)};Ue.typeOf=xn;(function(e){e.exports=Ue})(cP);function pP(){const e=G2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const _g={notify(){},get:()=>[]};function hP(e,t){let n,r=_g;function i(m){return d(),r.subscribe(m)}function a(){r.notify()}function l(){h.onStateChange&&h.onStateChange()}function u(){return!!n}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=pP())}function f(){n&&(n(),n=void 0,r.clear(),r=_g)}const h={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return h}const mP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_P=mP?T.useLayoutEffect:T.useEffect;function gP({store:e,context:t,children:n,serverState:r}){const i=T.useMemo(()=>{const u=hP(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=T.useMemo(()=>e.getState(),[e]);_P(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,a]);const l=t||ao;return W.createElement(l.Provider,{value:i},n)}function ux(e=ao){const t=e===ao?rx:()=>T.useContext(e);return function(){const{store:r}=t();return r}}const vP=ux();function yP(e=ao){const t=e===ao?vP:ux(e);return function(){return t().dispatch}}const bP=yP();X2(Jf.useSyncExternalStoreWithSelector);Q2(Fi.unstable_batchedUpdates);/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae.apply(this,arguments)}var it;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(it||(it={}));const gg="popstate";function xP(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:u}=r.location;return hs("",{pathname:a,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ho(i)}return kP(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ki(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wP(){return Math.random().toString(36).substr(2,8)}function vg(e,t){return{usr:e.state,key:e.key,idx:t}}function hs(e,t,n,r){return n===void 0&&(n=null),Ae({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:n,key:t&&t.key||r||wP()})}function Ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function kP(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u=it.Pop,d=null,f=h();f==null&&(f=0,l.replaceState(Ae({},l.state,{idx:f}),""));function h(){return(l.state||{idx:null}).idx}function m(){u=it.Pop;let P=h(),y=P==null?null:P-f;f=P,d&&d({action:u,location:v.location,delta:y})}function g(P,y){u=it.Push;let b=hs(v.location,P,y);n&&n(b,P),f=h()+1;let S=vg(b,f),C=v.createHref(b);try{l.pushState(S,"",C)}catch{i.location.assign(C)}a&&d&&d({action:u,location:v.location,delta:1})}function x(P,y){u=it.Replace;let b=hs(v.location,P,y);n&&n(b,P),f=h();let S=vg(b,f),C=v.createHref(b);l.replaceState(S,"",C),a&&d&&d({action:u,location:v.location,delta:0})}function w(P){let y=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof P=="string"?P:Ho(P);return Pe(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let v={get action(){return u},get location(){return e(i,l)},listen(P){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(gg,m),d=P,()=>{i.removeEventListener(gg,m),d=null}},createHref(P){return t(i,P)},createURL:w,encodeLocation(P){let y=w(P);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:x,go(P){return l.go(P)}};return v}var ft;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ft||(ft={}));const SP=new Set(["lazy","caseSensitive","path","id","index","children"]);function PP(e){return e.index===!0}function cx(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let l=[...n,a],u=typeof i.id=="string"?i.id:l.join("-");if(Pe(i.index!==!0||!i.children,"Cannot specify children on an index route"),Pe(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),PP(i)){let d=Ae({},i,{hasErrorBoundary:t(i),id:u});return r[u]=d,d}else{let d=Ae({},i,{id:u,hasErrorBoundary:t(i),children:void 0});return r[u]=d,i.children&&(d.children=cx(i.children,t,l,r)),d}})}function Pi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Cr(t):t,i=gc(r.pathname||"/",n);if(i==null)return null;let a=dx(e);CP(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=NP(a[u],DP(i));return l}function dx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(Pe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Xr([r,d.relativePath]),h=n.concat(d);a.children&&a.children.length>0&&(Pe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),dx(a.children,t,h,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:AP(f,a.index),routesMeta:h})};return e.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,l);else for(let d of fx(a.path))i(a,l,d)}),t}function fx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=fx(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function CP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:BP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const EP=/^:\w+$/,OP=3,TP=2,zP=1,LP=10,RP=-2,yg=e=>e==="*";function AP(e,t){let n=e.split("/"),r=n.length;return n.some(yg)&&(r+=RP),t&&(r+=TP),n.filter(i=>!yg(i)).reduce((i,a)=>i+(EP.test(a)?OP:a===""?zP:LP),r)}function BP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function NP(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=IP({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!h)return null;Object.assign(r,h.params);let m=u.route;a.push({params:r,pathname:Xr([i,h.pathname]),pathnameBase:$P(Xr([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Xr([i,h.pathnameBase]))}return a}function IP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=MP(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,h,m)=>{if(h==="*"){let g=u[m]||"";l=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return f[h]=FP(u[m]||"",h),f},{}),pathname:a,pathnameBase:l,pattern:e}}function MP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ki(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function DP(e){try{return decodeURI(e)}catch(t){return Ki(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function FP(e,t){try{return decodeURIComponent(e)}catch(n){return Ki(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function jP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e;return{pathname:n?n.startsWith("/")?n:UP(n,t):t,search:WP(r),hash:HP(i)}}function UP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Td(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function px(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cr(e):(i=Ae({},e),Pe(!i.pathname||!i.pathname.includes("?"),Td("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Td("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Td("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,u;if(r||l==null)u=n;else{let m=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}u=m>=0?t[m]:"/"}let d=jP(i,u),f=l&&l!=="/"&&l.endsWith("/"),h=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||h)&&(d.pathname+="/"),d}const Xr=e=>e.join("/").replace(/\/\/+/g,"/"),$P=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),WP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,HP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class bg extends Error{}class ZP{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],Pe(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,l)=>r=l),this.controller=new AbortController;let i=()=>r(new bg("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((a,l)=>{let[u,d]=l;return Object.assign(a,{[u]:this.trackPromise(u,d)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof bg?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return Pe(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:qP(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function VP(e){return e instanceof Promise&&e._tracked===!0}function qP(e){if(!VP(e))return e;if(e._error)throw e._error;return e._data}class Dh{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function hx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mx=["post","put","patch","delete"],KP=new Set(mx),QP=["get",...mx],GP=new Set(QP),JP=new Set([301,302,303,307,308]),XP=new Set([307,308]),zd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},YP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},xg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},_x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eC=!gx,tC=e=>!!e.hasErrorBoundary;function nC(e){Pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||tC,n={},r=cx(e.routes,t,void 0,n),i,a=null,l=new Set,u=null,d=null,f=null,h=e.hydrationData!=null,m=Pi(r,e.history.location,e.basename),g=null;if(m==null){let U=qn(404,{pathname:e.history.location.pathname}),{matches:H,route:G}=Eg(r);m=H,g={[G.id]:U}}let x=!m.some(U=>U.route.lazy)&&(!m.some(U=>U.route.loader)||e.hydrationData!=null),w,v={historyAction:e.history.action,location:e.history.location,matches:m,initialized:x,navigation:zd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},P=it.Pop,y=!1,b,S=!1,C=!1,z=[],B=[],A=new Map,j=0,Z=-1,$=new Map,X=new Set,ne=new Map,se=new Map,ee=new Map,pe=!1;function re(){if(a=e.history.listen(G=>{let{action:ce,location:me,delta:ve}=G;if(pe){pe=!1;return}Ki(ee.size===0||ve!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ge=Tt({currentLocation:v.location,nextLocation:me,historyAction:ce});if(ge&&ve!=null){pe=!0,e.history.go(ve*-1),ln(ge,{state:"blocked",location:me,proceed(){ln(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:me}),e.history.go(ve)},reset(){Ot(ge),J({blockers:new Map(w.state.blockers)})}});return}return R(ce,me)}),v.initialized)return w;let U=v.matches.filter(G=>G.route.lazy);if(U.length===0)return R(it.Pop,v.location),w;let H=U.map(G=>Yf(G.route,t,n));return Promise.all(H).then(()=>{!v.matches.some(ce=>ce.route.loader)||e.hydrationData!=null?J({initialized:!0}):R(it.Pop,v.location)}),w}function M(){a&&a(),l.clear(),b&&b.abort(),v.fetchers.forEach((U,H)=>Ce(H)),v.blockers.forEach((U,H)=>Ot(H))}function D(U){return l.add(U),()=>l.delete(U)}function J(U){v=Ae({},v,U),l.forEach(H=>H(v))}function K(U,H){var G,ce;let me=v.actionData!=null&&v.navigation.formMethod!=null&&hr(v.navigation.formMethod)&&v.navigation.state==="loading"&&((G=U.state)==null?void 0:G._isRedirect)!==!0,ve;H.actionData?Object.keys(H.actionData).length>0?ve=H.actionData:ve=null:me?ve=v.actionData:ve=null;let ge=H.loaderData?Cg(v.loaderData,H.loaderData,H.matches||[],H.errors):v.loaderData;for(let[_e]of ee)Ot(_e);let we=y===!0||v.navigation.formMethod!=null&&hr(v.navigation.formMethod)&&((ce=U.state)==null?void 0:ce._isRedirect)!==!0;i&&(r=i,i=void 0),J(Ae({},H,{actionData:ve,loaderData:ge,historyAction:P,location:U,initialized:!0,navigation:zd,revalidation:"idle",restoreScrollPosition:un(U,H.matches||v.matches),preventScrollReset:we,blockers:new Map(v.blockers)})),S||P===it.Pop||(P===it.Push?e.history.push(U,U.state):P===it.Replace&&e.history.replace(U,U.state)),P=it.Pop,y=!1,S=!1,C=!1,z=[],B=[]}async function E(U,H){if(typeof U=="number"){e.history.go(U);return}let{path:G,submission:ce,error:me}=wg(U,H),ve=v.location,ge=hs(v.location,G,H&&H.state);ge=Ae({},ge,e.history.encodeLocation(ge));let we=H&&H.replace!=null?H.replace:void 0,_e=it.Push;we===!0?_e=it.Replace:we===!1||ce!=null&&hr(ce.formMethod)&&ce.formAction===v.location.pathname+v.location.search&&(_e=it.Replace);let tt=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,Re=Tt({currentLocation:ve,nextLocation:ge,historyAction:_e});if(Re){ln(Re,{state:"blocked",location:ge,proceed(){ln(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:ge}),E(U,H)},reset(){Ot(Re),J({blockers:new Map(v.blockers)})}});return}return await R(_e,ge,{submission:ce,pendingError:me,preventScrollReset:tt,replace:H&&H.replace})}function N(){if(Le(),J({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){R(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}R(P||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function R(U,H,G){b&&b.abort(),b=null,P=U,S=(G&&G.startUninterruptedRevalidation)===!0,na(v.location,v.matches),y=(G&&G.preventScrollReset)===!0;let ce=i||r,me=G&&G.overrideNavigation,ve=Pi(ce,H,e.basename);if(!ve){let Ke=qn(404,{pathname:H.pathname}),{matches:Jt,route:Ht}=Eg(ce);or(),K(H,{matches:Jt,loaderData:{},errors:{[Ht.id]:Ke}});return}if(sC(v.location,H)&&!(G&&G.submission&&hr(G.submission.formMethod))){K(H,{matches:ve});return}b=new AbortController;let ge=Ea(e.history,H,b.signal,G&&G.submission),we,_e;if(G&&G.pendingError)_e={[Ci(ve).route.id]:G.pendingError};else if(G&&G.submission&&hr(G.submission.formMethod)){let Ke=await V(ge,H,G.submission,ve,{replace:G.replace});if(Ke.shortCircuited)return;we=Ke.pendingActionData,_e=Ke.pendingActionError,me=Ae({state:"loading",location:H},G.submission),ge=new Request(ge.url,{signal:ge.signal})}let{shortCircuited:tt,loaderData:Re,errors:wt}=await te(ge,H,ve,me,G&&G.submission,G&&G.replace,we,_e);tt||(b=null,K(H,Ae({matches:ve},we?{actionData:we}:{},{loaderData:Re,errors:wt})))}async function V(U,H,G,ce,me){Le();let ve=Ae({state:"submitting",location:H},G);J({navigation:ve});let ge,we=ep(ce,H);if(!we.route.action&&!we.route.lazy)ge={type:ft.error,error:qn(405,{method:U.method,pathname:H.pathname,routeId:we.route.id})};else if(ge=await Ca("action",U,we,ce,n,t,w.basename),U.signal.aborted)return{shortCircuited:!0};if(Ai(ge)){let _e;return me&&me.replace!=null?_e=me.replace:_e=ge.location===v.location.pathname+v.location.search,await he(v,ge,{submission:G,replace:_e}),{shortCircuited:!0}}if(Za(ge)){let _e=Ci(ce,we.route.id);return(me&&me.replace)!==!0&&(P=it.Push),{pendingActionData:{},pendingActionError:{[_e.route.id]:ge.error}}}if(Ao(ge))throw qn(400,{type:"defer-action"});return{pendingActionData:{[we.route.id]:ge.data}}}async function te(U,H,G,ce,me,ve,ge,we){let _e=ce;_e||(_e=Ae({state:"loading",location:H,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},me));let tt=me||(_e.formMethod&&_e.formAction&&_e.formData&&_e.formEncType?{formMethod:_e.formMethod,formAction:_e.formAction,formData:_e.formData,formEncType:_e.formEncType}:void 0),Re=i||r,[wt,Ke]=kg(e.history,v,G,tt,H,C,z,B,ne,Re,e.basename,ge,we);if(or(gt=>!(G&&G.some(Zt=>Zt.route.id===gt))||wt&&wt.some(Zt=>Zt.route.id===gt)),wt.length===0&&Ke.length===0)return K(H,Ae({matches:G,loaderData:{},errors:we||null},ge?{actionData:ge}:{})),{shortCircuited:!0};if(!S){Ke.forEach(Zt=>{let ir=v.fetchers.get(Zt.key),Xo={state:"loading",data:ir&&ir.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Zt.key,Xo)});let gt=ge||v.actionData;J(Ae({navigation:_e},gt?Object.keys(gt).length===0?{actionData:null}:{actionData:gt}:{},Ke.length>0?{fetchers:new Map(v.fetchers)}:{}))}Z=++j,Ke.forEach(gt=>A.set(gt.key,b));let{results:Jt,loaderResults:Ht,fetcherResults:mo}=await be(v.matches,G,wt,Ke,U);if(U.signal.aborted)return{shortCircuited:!0};Ke.forEach(gt=>A.delete(gt.key));let Go=Og(Jt);if(Go)return await he(v,Go,{replace:ve}),{shortCircuited:!0};let{loaderData:Jo,errors:Or}=Pg(v,G,wt,Ht,we,Ke,mo,se);se.forEach((gt,Zt)=>{gt.subscribe(ir=>{(ir||gt.done)&&se.delete(Zt)})}),$e();let ra=Wt(Z);return Ae({loaderData:Jo,errors:Or},ra||Ke.length>0?{fetchers:new Map(v.fetchers)}:{})}function oe(U){return v.fetchers.get(U)||YP}function le(U,H,G,ce){if(eC)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");A.has(U)&&lt(U);let ve=Pi(i||r,G,e.basename);if(!ve){qe(U,H,qn(404,{pathname:G}));return}let{path:ge,submission:we}=wg(G,ce,!0),_e=ep(ve,ge);if(y=(ce&&ce.preventScrollReset)===!0,we&&hr(we.formMethod)){ye(U,H,ge,_e,ve,we);return}ne.set(U,{routeId:H,path:ge}),ie(U,H,ge,_e,ve,we)}async function ye(U,H,G,ce,me,ve){if(Le(),ne.delete(U),!ce.route.action&&!ce.route.lazy){let de=qn(405,{method:ve.formMethod,pathname:G,routeId:H});qe(U,H,de);return}let ge=v.fetchers.get(U),we=Ae({state:"submitting"},ve,{data:ge&&ge.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(U,we),J({fetchers:new Map(v.fetchers)});let _e=new AbortController,tt=Ea(e.history,G,_e.signal,ve);A.set(U,_e);let Re=await Ca("action",tt,ce,me,n,t,w.basename);if(tt.signal.aborted){A.get(U)===_e&&A.delete(U);return}if(Ai(Re)){A.delete(U),X.add(U);let de=Ae({state:"loading"},ve,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(U,de),J({fetchers:new Map(v.fetchers)}),he(v,Re,{isFetchActionRedirect:!0})}if(Za(Re)){qe(U,H,Re.error);return}if(Ao(Re))throw qn(400,{type:"defer-action"});let wt=v.navigation.location||v.location,Ke=Ea(e.history,wt,_e.signal),Jt=i||r,Ht=v.navigation.state!=="idle"?Pi(Jt,v.navigation.location,e.basename):v.matches;Pe(Ht,"Didn't find any matches after fetcher action");let mo=++j;$.set(U,mo);let Go=Ae({state:"loading",data:Re.data},ve,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(U,Go);let[Jo,Or]=kg(e.history,v,Ht,ve,wt,C,z,B,ne,Jt,e.basename,{[ce.route.id]:Re.data},void 0);Or.filter(de=>de.key!==U).forEach(de=>{let Yo=de.key,ia=v.fetchers.get(Yo),Rs={state:"loading",data:ia&&ia.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Yo,Rs),A.set(Yo,_e)}),J({fetchers:new Map(v.fetchers)});let{results:ra,loaderResults:gt,fetcherResults:Zt}=await be(v.matches,Ht,Jo,Or,Ke);if(_e.signal.aborted)return;$.delete(U),A.delete(U),Or.forEach(de=>A.delete(de.key));let ir=Og(ra);if(ir)return he(v,ir);let{loaderData:Xo,errors:oa}=Pg(v,v.matches,Jo,gt,void 0,Or,Zt,se),Tc={state:"idle",data:Re.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(U,Tc);let cn=Wt(mo);v.navigation.state==="loading"&&mo>Z?(Pe(P,"Expected pending action"),b&&b.abort(),K(v.navigation.location,{matches:Ht,loaderData:Xo,errors:oa,fetchers:new Map(v.fetchers)})):(J(Ae({errors:oa,loaderData:Cg(v.loaderData,Xo,Ht,oa)},cn?{fetchers:new Map(v.fetchers)}:{})),C=!1)}async function ie(U,H,G,ce,me,ve){let ge=v.fetchers.get(U),we=Ae({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ve,{data:ge&&ge.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(U,we),J({fetchers:new Map(v.fetchers)});let _e=new AbortController,tt=Ea(e.history,G,_e.signal);A.set(U,_e);let Re=await Ca("loader",tt,ce,me,n,t,w.basename);if(Ao(Re)&&(Re=await xx(Re,tt.signal,!0)||Re),A.get(U)===_e&&A.delete(U),tt.signal.aborted)return;if(Ai(Re)){await he(v,Re);return}if(Za(Re)){let Ke=Ci(v.matches,H);v.fetchers.delete(U),J({fetchers:new Map(v.fetchers),errors:{[Ke.route.id]:Re.error}});return}Pe(!Ao(Re),"Unhandled fetcher deferred data");let wt={state:"idle",data:Re.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(U,wt),J({fetchers:new Map(v.fetchers)})}async function he(U,H,G){var ce;let{submission:me,replace:ve,isFetchActionRedirect:ge}=G===void 0?{}:G;H.revalidate&&(C=!0);let we=hs(U.location,H.location,Ae({_isRedirect:!0},ge?{_isFetchActionRedirect:!0}:{}));if(Pe(we,"Expected a location on the redirect navigation"),_x.test(H.location)&&gx&&typeof((ce=window)==null?void 0:ce.location)<"u"){let Jt=e.history.createURL(H.location),Ht=gc(Jt.pathname,e.basename||"/")==null;if(window.location.origin!==Jt.origin||Ht){ve?window.location.replace(H.location):window.location.assign(H.location);return}}b=null;let _e=ve===!0?it.Replace:it.Push,{formMethod:tt,formAction:Re,formEncType:wt,formData:Ke}=U.navigation;!me&&tt&&Re&&Ke&&wt&&(me={formMethod:tt,formAction:Re,formEncType:wt,formData:Ke}),XP.has(H.status)&&me&&hr(me.formMethod)?await R(_e,we,{submission:Ae({},me,{formAction:H.location}),preventScrollReset:y}):await R(_e,we,{overrideNavigation:{state:"loading",location:we,formMethod:me?me.formMethod:void 0,formAction:me?me.formAction:void 0,formEncType:me?me.formEncType:void 0,formData:me?me.formData:void 0},preventScrollReset:y})}async function be(U,H,G,ce,me){let ve=await Promise.all([...G.map(_e=>Ca("loader",me,_e,H,n,t,w.basename)),...ce.map(_e=>_e.matches&&_e.match?Ca("loader",Ea(e.history,_e.path,me.signal),_e.match,_e.matches,n,t,w.basename):{type:ft.error,error:qn(404,{pathname:_e.path})})]),ge=ve.slice(0,G.length),we=ve.slice(G.length);return await Promise.all([Tg(U,G,ge,me.signal,!1,v.loaderData),Tg(U,ce.map(_e=>_e.match),we,me.signal,!0)]),{results:ve,loaderResults:ge,fetcherResults:we}}function Le(){C=!0,z.push(...or()),ne.forEach((U,H)=>{A.has(H)&&(B.push(H),lt(H))})}function qe(U,H,G){let ce=Ci(v.matches,H);Ce(U),J({errors:{[ce.route.id]:G},fetchers:new Map(v.fetchers)})}function Ce(U){A.has(U)&&lt(U),ne.delete(U),$.delete(U),X.delete(U),v.fetchers.delete(U)}function lt(U){let H=A.get(U);Pe(H,"Expected fetch controller: "+U),H.abort(),A.delete(U)}function _t(U){for(let H of U){let ce={state:"idle",data:oe(H).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(H,ce)}}function $e(){let U=[];for(let H of X){let G=v.fetchers.get(H);Pe(G,"Expected fetcher: "+H),G.state==="loading"&&(X.delete(H),U.push(H))}_t(U)}function Wt(U){let H=[];for(let[G,ce]of $)if(ce<U){let me=v.fetchers.get(G);Pe(me,"Expected fetcher: "+G),me.state==="loading"&&(lt(G),$.delete(G),H.push(G))}return _t(H),H.length>0}function rr(U,H){let G=v.blockers.get(U)||xg;return ee.get(U)!==H&&ee.set(U,H),G}function Ot(U){v.blockers.delete(U),ee.delete(U)}function ln(U,H){let G=v.blockers.get(U)||xg;Pe(G.state==="unblocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="proceeding"||G.state==="blocked"&&H.state==="unblocked"||G.state==="proceeding"&&H.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+H.state),v.blockers.set(U,H),J({blockers:new Map(v.blockers)})}function Tt(U){let{currentLocation:H,nextLocation:G,historyAction:ce}=U;if(ee.size===0)return;ee.size>1&&Ki(!1,"A router only supports one blocker at a time");let me=Array.from(ee.entries()),[ve,ge]=me[me.length-1],we=v.blockers.get(ve);if(!(we&&we.state==="proceeding")&&ge({currentLocation:H,nextLocation:G,historyAction:ce}))return ve}function or(U){let H=[];return se.forEach((G,ce)=>{(!U||U(ce))&&(G.cancel(),H.push(ce),se.delete(ce))}),H}function ta(U,H,G){if(u=U,f=H,d=G||(ce=>ce.key),!h&&v.navigation===zd){h=!0;let ce=un(v.location,v.matches);ce!=null&&J({restoreScrollPosition:ce})}return()=>{u=null,f=null,d=null}}function na(U,H){if(u&&d&&f){let G=H.map(me=>zg(me,v.loaderData)),ce=d(U,G)||U.key;u[ce]=f()}}function un(U,H){if(u&&d&&f){let G=H.map(ve=>zg(ve,v.loaderData)),ce=d(U,G)||U.key,me=u[ce];if(typeof me=="number")return me}return null}function Fn(U){i=U}return w={get basename(){return e.basename},get state(){return v},get routes(){return r},initialize:re,subscribe:D,enableScrollRestoration:ta,navigate:E,fetch:le,revalidate:N,createHref:U=>e.history.createHref(U),encodeLocation:U=>e.history.encodeLocation(U),getFetcher:oe,deleteFetcher:Ce,dispose:M,getBlocker:rr,deleteBlocker:Ot,_internalFetchControllers:A,_internalActiveDeferreds:se,_internalSetRoutes:Fn},w}function rC(e){return e!=null&&"formData"in e}function wg(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:Ho(e);if(!t||!rC(t))return{path:r};if(t.formMethod&&!uC(t.formMethod))return{path:r,error:qn(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:bx(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},hr(i.formMethod)))return{path:r,submission:i};let a=Cr(r),l=yx(t.formData);return n&&a.search&&wx(a.search)&&l.append("index",""),a.search="?"+l,{path:Ho(a),submission:i}}function oC(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function kg(e,t,n,r,i,a,l,u,d,f,h,m,g){let x=g?Object.values(g)[0]:m?Object.values(m)[0]:void 0,w=e.createURL(t.location),v=e.createURL(i),P=a||w.toString()===v.toString()||w.search!==v.search,y=g?Object.keys(g)[0]:void 0,S=oC(n,y).filter((z,B)=>{if(z.route.lazy)return!0;if(z.route.loader==null)return!1;if(iC(t.loaderData,t.matches[B],z)||l.some(Z=>Z===z.route.id))return!0;let A=t.matches[B],j=z;return Sg(z,Ae({currentUrl:w,currentParams:A.params,nextUrl:v,nextParams:j.params},r,{actionResult:x,defaultShouldRevalidate:P||vx(A,j)}))}),C=[];return d.forEach((z,B)=>{if(!n.some($=>$.route.id===z.routeId))return;let A=Pi(f,z.path,h);if(!A){C.push(Ae({key:B},z,{matches:null,match:null}));return}let j=ep(A,z.path);if(u.includes(B)){C.push(Ae({key:B,matches:A,match:j},z));return}Sg(j,Ae({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:x,defaultShouldRevalidate:P}))&&C.push(Ae({key:B,matches:A,match:j},z))}),[S,C]}function iC(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function vx(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Sg(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Yf(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Pe(i,"No route found in manifest");let a={};for(let l in r){let d=i[l]!==void 0&&l!=="hasErrorBoundary";Ki(!d,'Route "'+i.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!d&&!SP.has(l)&&(a[l]=r[l])}Object.assign(i,a),Object.assign(i,{hasErrorBoundary:t(Ae({},i)),lazy:void 0})}async function Ca(e,t,n,r,i,a,l,u,d,f){l===void 0&&(l="/"),u===void 0&&(u=!1),d===void 0&&(d=!1);let h,m,g,x=P=>{let y,b=new Promise((S,C)=>y=C);return g=()=>y(),t.signal.addEventListener("abort",g),Promise.race([P({request:t,params:n.params,context:f}),b])};try{let P=n.route[e];if(n.route.lazy)if(P)m=(await Promise.all([x(P),Yf(n.route,a,i)]))[0];else if(await Yf(n.route,a,i),P=n.route[e],P)m=await x(P);else{if(e==="action")throw qn(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:ft.data,data:void 0}}else Pe(P,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),m=await x(P);Pe(m!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(P){h=ft.error,m=P}finally{g&&t.signal.removeEventListener("abort",g)}if(lC(m)){let P=m.status;if(JP.has(P)){let S=m.headers.get("Location");if(Pe(S,"Redirects returned/thrown from loaders/actions must have a Location header"),_x.test(S)){if(!u){let C=new URL(t.url),z=S.startsWith("//")?new URL(C.protocol+S):new URL(S),B=gc(z.pathname,l)!=null;z.origin===C.origin&&B&&(S=z.pathname+z.search+z.hash)}}else{let C=r.slice(0,r.indexOf(n)+1),z=Mh(C).map(A=>A.pathnameBase),B=px(S,z,new URL(t.url).pathname);if(Pe(Ho(B),"Unable to resolve redirect location: "+S),l){let A=B.pathname;B.pathname=A==="/"?l:Xr([l,A])}S=Ho(B)}if(u)throw m.headers.set("Location",S),m;return{type:ft.redirect,status:P,location:S,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:h||ft.data,response:m};let y,b=m.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?y=await m.json():y=await m.text(),h===ft.error?{type:h,error:new Dh(P,m.statusText,y),headers:m.headers}:{type:ft.data,data:y,statusCode:m.status,headers:m.headers}}if(h===ft.error)return{type:h,error:m};if(m instanceof ZP){var w,v;return{type:ft.deferred,deferredData:m,statusCode:(w=m.init)==null?void 0:w.status,headers:((v=m.init)==null?void 0:v.headers)&&new Headers(m.init.headers)}}return{type:ft.data,data:m}}function Ea(e,t,n,r){let i=e.createURL(bx(t)).toString(),a={signal:n};if(r&&hr(r.formMethod)){let{formMethod:l,formEncType:u,formData:d}=r;a.method=l.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?yx(d):d}return new Request(i,a)}function yx(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function aC(e,t,n,r,i){let a={},l=null,u,d=!1,f={};return n.forEach((h,m)=>{let g=t[m].route.id;if(Pe(!Ai(h),"Cannot handle redirect results in processLoaderData"),Za(h)){let x=Ci(e,g),w=h.error;r&&(w=Object.values(r)[0],r=void 0),l=l||{},l[x.route.id]==null&&(l[x.route.id]=w),a[g]=void 0,d||(d=!0,u=hx(h.error)?h.error.status:500),h.headers&&(f[g]=h.headers)}else Ao(h)?(i.set(g,h.deferredData),a[g]=h.deferredData.data):a[g]=h.data,h.statusCode!=null&&h.statusCode!==200&&!d&&(u=h.statusCode),h.headers&&(f[g]=h.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:f}}function Pg(e,t,n,r,i,a,l,u){let{loaderData:d,errors:f}=aC(t,n,r,i,u);for(let h=0;h<a.length;h++){let{key:m,match:g}=a[h];Pe(l!==void 0&&l[h]!==void 0,"Did not find corresponding fetcher result");let x=l[h];if(Za(x)){let w=Ci(e.matches,g?.route.id);f&&f[w.route.id]||(f=Ae({},f,{[w.route.id]:x.error})),e.fetchers.delete(m)}else if(Ai(x))Pe(!1,"Unhandled fetcher revalidation redirect");else if(Ao(x))Pe(!1,"Unhandled fetcher deferred data");else{let w={state:"idle",data:x.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(m,w)}}return{loaderData:d,errors:f}}function Cg(e,t,n,r){let i=Ae({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&a.route.loader&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function Ci(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Eg(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function qn(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",u='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Dh(e||500,l,new Error(u),!0)}function Og(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ai(n))return n}}function bx(e){let t=typeof e=="string"?Cr(e):e;return Ho(Ae({},t,{hash:""}))}function sC(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Ao(e){return e.type===ft.deferred}function Za(e){return e.type===ft.error}function Ai(e){return(e&&e.type)===ft.redirect}function lC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function uC(e){return GP.has(e)}function hr(e){return KP.has(e)}async function Tg(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l];if(!d)continue;let f=e.find(m=>m.route.id===d.route.id),h=f!=null&&!vx(f,d)&&(a&&a[d.route.id])!==void 0;Ao(u)&&(i||h)&&await xx(u,r,i).then(m=>{m&&(n[l]=m||n[l])})}}async function xx(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ft.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ft.error,error:i}}return{type:ft.data,data:e.deferredData.data}}}function wx(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function zg(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function ep(e,t){let n=typeof t=="string"?Cr(t).search:t.search;if(e[e.length-1].route.index&&wx(n||""))return e[e.length-1];let r=Mh(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const dC=typeof Object.is=="function"?Object.is:cC,{useState:fC,useEffect:pC,useLayoutEffect:hC,useDebugValue:mC}=Ga;function _C(e,t,n){const r=t(),[{inst:i},a]=fC({inst:{value:r,getSnapshot:t}});return hC(()=>{i.value=r,i.getSnapshot=t,Ld(i)&&a({inst:i})},[e,r,t]),pC(()=>(Ld(i)&&a({inst:i}),e(()=>{Ld(i)&&a({inst:i})})),[e]),mC(r),r}function Ld(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!dC(n,r)}catch{return!0}}function gC(e,t,n){return t()}const vC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yC=!vC,bC=yC?gC:_C,xC="useSyncExternalStore"in Ga?(e=>e.useSyncExternalStore)(Ga):bC,Fh=T.createContext(null),jh=T.createContext(null),Uh=T.createContext(null),vc=T.createContext(null),Ps=T.createContext({outlet:null,matches:[]}),kx=T.createContext(null);function tp(){return tp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tp.apply(this,arguments)}function yc(){return T.useContext(vc)!=null}function Sx(){return yc()||Pe(!1),T.useContext(vc).location}function wC(){yc()||Pe(!1);let{basename:e,navigator:t}=T.useContext(Uh),{matches:n}=T.useContext(Ps),{pathname:r}=Sx(),i=JSON.stringify(Mh(n).map(u=>u.pathnameBase)),a=T.useRef(!1);return T.useEffect(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){t.go(u);return}let f=px(u,JSON.parse(i),r,d.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:Xr([e,f.pathname])),(d.replace?t.replace:t.push)(f,d.state,d)},[e,t,i,r])}function kC(e,t){yc()||Pe(!1);let{navigator:n}=T.useContext(Uh),r=T.useContext(jh),{matches:i}=T.useContext(Ps),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=Sx(),f;if(t){var h;let v=typeof t=="string"?Cr(t):t;u==="/"||(h=v.pathname)!=null&&h.startsWith(u)||Pe(!1),f=v}else f=d;let m=f.pathname||"/",g=u==="/"?m:m.slice(u.length)||"/",x=Pi(e,{pathname:g}),w=EC(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Xr([u,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Xr([u,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&w?T.createElement(vc.Provider,{value:{location:tp({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:it.Pop}},w):w}function SC(){let e=LC(),t=hx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}class PC extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Ps.Provider,{value:this.props.routeContext},T.createElement(kx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CC(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Fh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Ps.Provider,{value:t},r)}function EC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||Pe(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,u)=>{let d=l.route.id?i?.[l.route.id]:null,f=null;n&&(l.route.ErrorBoundary?f=T.createElement(l.route.ErrorBoundary,null):l.route.errorElement?f=l.route.errorElement:f=T.createElement(SC,null));let h=t.concat(r.slice(0,u+1)),m=()=>{let g=a;return d?g=f:l.route.Component?g=T.createElement(l.route.Component,null):l.route.element&&(g=l.route.element),T.createElement(CC,{match:l,routeContext:{outlet:a,matches:h},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(PC,{location:n.location,component:f,error:d,children:m(),routeContext:{outlet:null,matches:h}}):m()},null)}var Lg;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Lg||(Lg={}));var du;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(du||(du={}));function OC(e){let t=T.useContext(jh);return t||Pe(!1),t}function TC(e){let t=T.useContext(Ps);return t||Pe(!1),t}function zC(e){let t=TC(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function LC(){var e;let t=T.useContext(kx),n=OC(du.UseRouteError),r=zC(du.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function RC(e){let{fallbackElement:t,router:n}=e,r=T.useCallback(()=>n.state,[n]),i=xC(n.subscribe,r,r),a=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,h)=>n.navigate(d,{state:f,preventScrollReset:h?.preventScrollReset}),replace:(d,f,h)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:h?.preventScrollReset})}),[n]),l=n.basename||"/",u=T.useMemo(()=>({router:n,navigator:a,static:!1,basename:l}),[n,a,l]);return T.createElement(T.Fragment,null,T.createElement(Fh.Provider,{value:u},T.createElement(jh.Provider,{value:i},T.createElement(BC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?T.createElement(NC,null):t))),null)}function AC(e){Pe(!1)}function BC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=it.Pop,navigator:a,static:l=!1}=e;yc()&&Pe(!1);let u=t.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=Cr(r));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:x="default"}=r,w=T.useMemo(()=>{let v=gc(f,u);return v==null?null:{location:{pathname:v,search:h,hash:m,state:g,key:x},navigationType:i}},[u,f,h,m,g,x,i]);return w==null?null:T.createElement(Uh.Provider,{value:d},T.createElement(vc.Provider,{children:n,value:w}))}function NC(e){let{children:t,location:n}=e,r=T.useContext(Fh),i=r&&!t?r.router.routes:np(t);return kC(i,n)}var Rg;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Rg||(Rg={}));new Promise(()=>{});function np(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,np(r.props.children,t));return}r.type!==AC&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=np(r.props.children,a)),n.push(l)}),n}function IC(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rp(){return rp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rp.apply(this,arguments)}function MC(e,t){return nC({basename:t?.basename,history:xP({window:t?.window}),hydrationData:t?.hydrationData||DC(),routes:e,detectErrorBoundary:IC}).initialize()}function DC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=rp({},t,{errors:FC(t.errors)})),t}function FC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Dh(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}var Ag;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ag||(Ag={}));var Bg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bg||(Bg={}));function vn(e){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vn(e)}function jC(e,t){if(vn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Px(e){var t=jC(e,"string");return vn(t)==="symbol"?t:String(t)}function In(e,t,n){return t=Px(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function UC(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Ng={};function op(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Ng[t[0]]||(typeof t[0]=="string"&&(Ng[t[0]]=new Date),UC.apply(void 0,t))}function Ig(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function $C(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,f){var h=t.services.backendConnector.state["".concat(d,"|").concat(f)];return h===-1||h===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function WC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return op("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):$C(e,t,n)}var HC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ZC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},VC=function(t){return ZC[t]},qC=function(t){return t.replace(HC,VC)};function Mg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mg(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ip={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:qC};function KC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ip=Dg(Dg({},ip),e)}function QC(){return ip}var Cx;function GC(e){Cx=e}function JC(){return Cx}function Mn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Px(r.key),r)}}function Dn(e,t,n){return t&&Fg(e.prototype,t),n&&Fg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var XC={type:"3rdParty",init:function(t){KC(t.options.react),GC(t)}},YC=T.createContext(),eE=function(){function e(){Mn(this,e),this.usedNamespaces={}}return Dn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Ex(e){if(Array.isArray(e))return e}function tE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(h){f=!0,i=h}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw i}}return u}}function jg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ox(e,t){if(e){if(typeof e=="string")return jg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jg(e,t)}}function Tx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nE(e,t){return Ex(e)||tE(e,t)||Ox(e,t)||Tx()}function Ug(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ug(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ug(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var rE=function(t,n){var r=T.useRef();return T.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function $h(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=T.useContext(YC)||{},i=r.i18n,a=r.defaultNS,l=n||i||JC();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new eE),!l){op("You will need to pass in an i18next instance by using initReactI18next");var u=function(Z,$){return typeof $=="string"?$:$&&vn($)==="object"&&typeof $.defaultValue=="string"?$.defaultValue:Array.isArray(Z)?Z[Z.length-1]:Z},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&op("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Rd(Rd(Rd({},QC()),l.options.react),t),h=f.useSuspense,m=f.keyPrefix,g=e||a||l.options&&l.options.defaultNS;g=typeof g=="string"?[g]:g||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(g);var x=(l.isInitialized||l.initializedStoreOnce)&&g.every(function(j){return WC(j,l,f)});function w(){return l.getFixedT(null,f.nsMode==="fallback"?g:g[0],m)}var v=T.useState(w),P=nE(v,2),y=P[0],b=P[1],S=g.join(),C=rE(S),z=T.useRef(!0);T.useEffect(function(){var j=f.bindI18n,Z=f.bindI18nStore;z.current=!0,!x&&!h&&Ig(l,g,function(){z.current&&b(w)}),x&&C&&C!==S&&z.current&&b(w);function $(){z.current&&b(w)}return j&&l&&l.on(j,$),Z&&l&&l.store.on(Z,$),function(){z.current=!1,j&&l&&j.split(" ").forEach(function(X){return l.off(X,$)}),Z&&l&&Z.split(" ").forEach(function(X){return l.store.off(X,$)})}},[l,S]);var B=T.useRef(!0);T.useEffect(function(){z.current&&!B.current&&b(w),B.current=!1},[l,m]);var A=[y,l,x];if(A.t=y,A.i18n=l,A.ready=x,x||!x&&!h)return A;throw new Promise(function(j){Ig(l,g,function(){j()})})}function fu(e,t){return fu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},fu(e,t)}function Cs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,fu(e,t)}var Es=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),pu=typeof window>"u";function At(){}function oE(e,t){return typeof e=="function"?e(t):e}function ap(e){return typeof e=="number"&&e>=0&&e!==1/0}function hu(e){return Array.isArray(e)?e:[e]}function zx(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ll(e,t,n){return bc(e)?typeof t=="function"?Me({},n,{queryKey:e,queryFn:t}):Me({},t,{queryKey:e}):e}function Mr(e,t,n){return bc(e)?[Me({},t,{queryKey:e}),n]:[e||{},t]}function iE(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function $g(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(bc(u)){if(r){if(t.queryHash!==Wh(u,t.options))return!1}else if(!mu(t.queryKey,u))return!1}var f=iE(n,a);if(f==="none")return!1;if(f!=="all"){var h=t.isActive();if(f==="active"&&!h||f==="inactive"&&h)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function Wg(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(bc(a)){if(!t.options.mutationKey)return!1;if(n){if(Bo(t.options.mutationKey)!==Bo(a))return!1}else if(!mu(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Wh(e,t){var n=t?.queryKeyHashFn||Bo;return n(e)}function Bo(e){var t=hu(e);return aE(t)}function aE(e){return JSON.stringify(e,function(t,n){return sp(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function mu(e,t){return Lx(hu(e),hu(t))}function Lx(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!Lx(e[n],t[n])}):!1}function _u(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||sp(e)&&sp(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:i[d];l[f]=_u(e[f],t[f]),l[f]===e[f]&&u++}return r===a&&u===r?e:l}return t}function sE(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function sp(e){if(!Hg(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Hg(n)||!n.hasOwnProperty("isPrototypeOf"))}function Hg(e){return Object.prototype.toString.call(e)==="[object Object]"}function bc(e){return typeof e=="string"||Array.isArray(e)}function lE(e){return new Promise(function(t){setTimeout(t,e)})}function Zg(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function Rx(){if(typeof AbortController=="function")return new AbortController}var uE=function(e){Cs(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!pu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Es),Va=new uE,cE=function(e){Cs(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!pu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Es),Rl=new cE;function dE(e){return Math.min(1e3*Math.pow(2,e),3e4)}function gu(e){return typeof e?.cancel=="function"}var Ax=function(t){this.revert=t?.revert,this.silent=t?.silent};function Al(e){return e instanceof Ax}var Bx=function(t){var n=this,r=!1,i,a,l,u;this.abort=t.abort,this.cancel=function(g){return i?.(g)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(g,x){l=g,u=x});var d=function(x){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(x),a?.(),l(x))},f=function(x){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(x),a?.(),u(x))},h=function(){return new Promise(function(x){a=x,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},m=function g(){if(!n.isResolved){var x;try{x=t.fn()}catch(w){x=Promise.reject(w)}i=function(v){if(!n.isResolved&&(f(new Ax(v)),n.abort==null||n.abort(),gu(x)))try{x.cancel()}catch{}},n.isTransportCancelable=gu(x),Promise.resolve(x).then(d).catch(function(w){var v,P;if(!n.isResolved){var y=(v=t.retry)!=null?v:3,b=(P=t.retryDelay)!=null?P:dE,S=typeof b=="function"?b(n.failureCount,w):b,C=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,w);if(r||!C){f(w);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,w),lE(S).then(function(){if(!Va.isFocused()||!Rl.isOnline())return h()}).then(function(){r?f(w):g()})}})}};m()},fE=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Zg(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Zg(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),rt=new fE,Nx=console;function vu(){return Nx}function pE(e){Nx=e}var hE=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Me({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),ap(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,u=this.state.data,d=oE(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=_u(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(At).catch(At):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!zx(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var h=this.observers.find(function(b){return b.options.queryFn});h&&this.setOptions(h.options)}var m=hu(this.queryKey),g=Rx(),x={queryKey:m,pageParam:void 0,meta:this.meta};Object.defineProperty(x,"signal",{enumerable:!0,get:function(){if(g)return a.abortSignalConsumed=!0,g.signal}});var w=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(x)):Promise.reject("Missing queryFn")},v={fetchOptions:i,options:this.options,queryKey:m,state:this.state,fetchFn:w,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var P;(P=this.options.behavior)==null||P.onFetch(v)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=v.fetchOptions)==null?void 0:u.meta)){var y;this.dispatch({type:"fetch",meta:(y=v.fetchOptions)==null?void 0:y.meta})}return this.retryer=new Bx({fn:v.fetchFn,abort:g==null||(d=g.abort)==null?void 0:d.bind(g),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Al(S)&&S.silent||a.dispatch({type:"error",error:S}),Al(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),vu().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),rt.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Me({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Me({},r,{isPaused:!0});case"continue":return Me({},r,{isPaused:!1});case"fetch":return Me({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Me({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=i.error;return Al(u)&&u.revert&&this.revertState?Me({},this.revertState):Me({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Me({},r,{isInvalidated:!0});case"setState":return Me({},r,i.state);default:return r}},e}(),mE=function(e){Cs(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:Wh(d,a),h=this.get(f);return h||(h=new hE({cache:this,queryKey:d,queryHash:f,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(h)),h},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;rt.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Mr(i,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return $g(u,d)})},n.findAll=function(i,a){var l=Mr(i,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return $g(u,d)}):this.queries},n.notify=function(i){var a=this;rt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;rt.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;rt.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(Es),_E=function(){function e(n){this.options=Me({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||gE(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(At).catch(At)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){i=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),vu().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,i;return this.retryer=new Bx({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=vE(this.state,r),rt.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function gE(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function vE(e,t){switch(t.type){case"failed":return Me({},e,{failureCount:e.failureCount+1});case"pause":return Me({},e,{isPaused:!0});case"continue":return Me({},e,{isPaused:!1});case"loading":return Me({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Me({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Me({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Me({},e,t.state);default:return e}}var yE=function(e){Cs(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var u=new _E({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;rt.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return Wg(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return Wg(i,a)})},n.notify=function(i){var a=this;rt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return rt.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(At)})},Promise.resolve())})},t}(Es);function bE(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,h=f?.pageParam,m=f?.direction==="forward",g=f?.direction==="backward",x=((l=t.state.data)==null?void 0:l.pages)||[],w=((u=t.state.data)==null?void 0:u.pageParams)||[],v=Rx(),P=v?.signal,y=w,b=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},C=function(ee,pe,re,M){return y=M?[pe].concat(y):[].concat(y,[pe]),M?[re].concat(ee):[].concat(ee,[re])},z=function(ee,pe,re,M){if(b)return Promise.reject("Cancelled");if(typeof re>"u"&&!pe&&ee.length)return Promise.resolve(ee);var D={queryKey:t.queryKey,signal:P,pageParam:re,meta:t.meta},J=S(D),K=Promise.resolve(J).then(function(N){return C(ee,re,N,M)});if(gu(J)){var E=K;E.cancel=J.cancel}return K},B;if(!x.length)B=z([]);else if(m){var A=typeof h<"u",j=A?h:Vg(t.options,x);B=z(x,A,j)}else if(g){var Z=typeof h<"u",$=Z?h:xE(t.options,x);B=z(x,Z,$,!0)}else(function(){y=[];var se=typeof t.options.getNextPageParam>"u",ee=d&&x[0]?d(x[0],0,x):!0;B=ee?z([],se,w[0]):Promise.resolve(C([],w[0],x[0]));for(var pe=function(D){B=B.then(function(J){var K=d&&x[D]?d(x[D],D,x):!0;if(K){var E=se?w[D]:Vg(t.options,J);return z(J,se,E)}return Promise.resolve(C(J,w[D],x[D]))})},re=1;re<x.length;re++)pe(re)})();var X=B.then(function(se){return{pages:se,pageParams:y}}),ne=X;return ne.cancel=function(){b=!0,v?.abort(),gu(B)&&B.cancel()},X}}}}function Vg(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function xE(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var wE=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new mE,this.mutationCache=n.mutationCache||new yE,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Va.subscribe(function(){Va.isFocused()&&Rl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Rl.subscribe(function(){Va.isFocused()&&Rl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Mr(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Me({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,u=l.data;return[a,u]})},t.setQueryData=function(r,i,a){var l=Ll(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return rt.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Mr(r,i),l=a[0],u=this.queryCache;rt.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,u=Mr(r,i,a),d=u[0],f=u[1],h=this.queryCache,m=Me({},d,{active:!0});return rt.batch(function(){return h.findAll(d).forEach(function(g){g.reset()}),l.refetchQueries(m,f)})},t.cancelQueries=function(r,i,a){var l=this,u=Mr(r,i,a),d=u[0],f=u[1],h=f===void 0?{}:f;typeof h.revert>"u"&&(h.revert=!0);var m=rt.batch(function(){return l.queryCache.findAll(d).map(function(g){return g.cancel(h)})});return Promise.all(m).then(At).catch(At)},t.invalidateQueries=function(r,i,a){var l,u,d,f=this,h=Mr(r,i,a),m=h[0],g=h[1],x=Me({},m,{active:(l=(u=m.refetchActive)!=null?u:m.active)!=null?l:!0,inactive:(d=m.refetchInactive)!=null?d:!1});return rt.batch(function(){return f.queryCache.findAll(m).forEach(function(w){w.invalidate()}),f.refetchQueries(x,g)})},t.refetchQueries=function(r,i,a){var l=this,u=Mr(r,i,a),d=u[0],f=u[1],h=rt.batch(function(){return l.queryCache.findAll(d).map(function(g){return g.fetch(void 0,Me({},f,{meta:{refetchPage:d?.refetchPage}}))})}),m=Promise.all(h).then(At);return f?.throwOnError||(m=m.catch(At)),m},t.fetchQuery=function(r,i,a){var l=Ll(r,i,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(At).catch(At)},t.fetchInfiniteQuery=function(r,i,a){var l=Ll(r,i,a);return l.behavior=bE(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(At).catch(At)},t.cancelMutations=function(){var r=this,i=rt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(At).catch(At)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return Bo(r)===Bo(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return mu(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return Bo(r)===Bo(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return mu(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Me({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Wh(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Me({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),kE=function(e){Cs(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),qg(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return lp(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return lp(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&Kg(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,u={},d=function(h){l.trackedProps.includes(h)||l.trackedProps.push(h)};return Object.keys(i).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),i[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(i){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&i?.throwOnError?u(f.error):l(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Me({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(At)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(pu||this.currentResult.isStale||!ap(this.options.staleTime))){var a=zx(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(pu||this.options.enabled===!1||!ap(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||Va.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,h=this.currentResultOptions,m=i!==l,g=m?i.state:this.currentQueryInitialState,x=m?this.currentResult:this.previousQueryResult,w=i.state,v=w.dataUpdatedAt,P=w.error,y=w.errorUpdatedAt,b=w.isFetching,S=w.status,C=!1,z=!1,B;if(a.optimisticResults){var A=this.hasListeners(),j=!A&&qg(i,a),Z=A&&Kg(i,l,a,u);(j||Z)&&(b=!0,v||(S="loading"))}if(a.keepPreviousData&&!w.dataUpdateCount&&x?.isSuccess&&S!=="error")B=x.data,v=x.dataUpdatedAt,S=x.status,C=!0;else if(a.select&&typeof w.data<"u")if(d&&w.data===f?.data&&a.select===this.selectFn)B=this.selectResult;else try{this.selectFn=a.select,B=a.select(w.data),a.structuralSharing!==!1&&(B=_u(d?.data,B)),this.selectResult=B,this.selectError=null}catch(ne){vu().error(ne),this.selectError=ne}else B=w.data;if(typeof a.placeholderData<"u"&&typeof B>"u"&&(S==="loading"||S==="idle")){var $;if(d?.isPlaceholderData&&a.placeholderData===h?.placeholderData)$=d.data;else if($=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof $<"u")try{$=a.select($),a.structuralSharing!==!1&&($=_u(d?.data,$)),this.selectError=null}catch(ne){vu().error(ne),this.selectError=ne}typeof $<"u"&&(S="success",B=$,z=!0)}this.selectError&&(P=this.selectError,B=this.selectResult,y=Date.now(),S="error");var X={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:B,dataUpdatedAt:v,error:P,errorUpdatedAt:y,failureCount:w.fetchFailureCount,errorUpdateCount:w.errorUpdateCount,isFetched:w.dataUpdateCount>0||w.errorUpdateCount>0,isFetchedAfterMount:w.dataUpdateCount>g.dataUpdateCount||w.errorUpdateCount>g.errorUpdateCount,isFetching:b,isRefetching:b&&S!=="loading",isLoadingError:S==="error"&&w.dataUpdatedAt===0,isPlaceholderData:z,isPreviousData:C,isRefetchError:S==="error"&&w.dataUpdatedAt!==0,isStale:Hh(i,a),refetch:this.refetch,remove:this.remove};return X},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(i).some(function(h){var m=h,g=i[m]!==a[m],x=f?.some(function(v){return v===h}),w=d?.some(function(v){return v===h});return g&&!w&&(!f||x)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!sE(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Me({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!Al(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;rt.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(Es);function SE(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function qg(e,t){return SE(e,t)||e.state.dataUpdatedAt>0&&lp(e,t,t.refetchOnMount)}function lp(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Hh(e,t)}return!1}function Kg(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Hh(e,n)}function Hh(e,t){return e.isStaleByTime(t.staleTime)}var PE=O2.unstable_batchedUpdates;rt.setBatchNotifyFunction(PE);var CE=console;pE(CE);var Qg=W.createContext(void 0),Ix=W.createContext(!1);function Mx(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Qg),window.ReactQueryClientContext):Qg}var EE=function(){var t=W.useContext(Mx(W.useContext(Ix)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},OE=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;W.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=Mx(i);return W.createElement(Ix.Provider,{value:i},W.createElement(l.Provider,{value:n},a))};function TE(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var zE=W.createContext(TE()),LE=function(){return W.useContext(zE)};function RE(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function AE(e,t){var n=W.useRef(!1),r=W.useState(0),i=r[1],a=EE(),l=LE(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=rt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=rt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=rt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=W.useState(function(){return new t(a,u)}),f=d[0],h=f.getOptimisticResult(u);if(W.useEffect(function(){n.current=!0,l.clearReset();var m=f.subscribe(rt.batchCalls(function(){n.current&&i(function(g){return g+1})}));return f.updateResult(),function(){n.current=!1,m()}},[l,f]),W.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&h.isLoading)throw f.fetchOptimistic(u).then(function(m){var g=m.data;u.onSuccess==null||u.onSuccess(g),u.onSettled==null||u.onSettled(g,null)}).catch(function(m){l.clearReset(),u.onError==null||u.onError(m),u.onSettled==null||u.onSettled(void 0,m)});if(h.isError&&!l.isReset()&&!h.isFetching&&RE(u.suspense,u.useErrorBoundary,[h.error,f.getCurrentQuery()]))throw h.error;return u.notifyOnChangeProps==="tracked"&&(h=f.trackResult(h,u)),h}function BE(e,t,n){var r=Ll(e,t,n);return AE(r,kE)}function Yr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fu(e,t)}function Os(e,t){if(t&&(vn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Yr(e)}function nr(e){return nr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nr(e)}function NE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function IE(e){return Ex(e)||NE(e)||Ox(e)||Tx()}function Gg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Jg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gg(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ME={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},DE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Mn(this,e),this.init(t,n)}return Dn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||ME,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,Jg(Jg({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Qn=new DE,so=function(){function e(){Mn(this,e),this.observers={}}return Dn(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function Oa(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function Xg(e){return e==null?"":""+e}function FE(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Zh(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function Yg(e,t,n){var r=Zh(e,t,Object),i=r.obj,a=r.k;i[a]=n}function jE(e,t,n,r){var i=Zh(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function yu(e,t){var n=Zh(e,t),r=n.obj,i=n.k;if(r)return r[i]}function UE(e,t,n){var r=yu(e,n);return r!==void 0?r:yu(t,n)}function Dx(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Dx(e[r],t[r],n):e[r]=t[r]);return e}function ui(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var $E={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function WE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return $E[t]}):e}var wc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,HE=[" ",",","?","!",";"];function ZE(e,t,n){t=t||"",n=n||"";var r=HE.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function bu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=i[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=i[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+l).join(n);return f?bu(d,f,n):void 0}i=i[r[a]]}return i}}function ev(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ml(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ev(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ev(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VE(e){var t=qE();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function qE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var KE=function(e){xc(n,e);var t=VE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Mn(this,n),i=t.call(this),wc&&so.call(Yr(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Dn(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,h=[i,a];l&&typeof l!="string"&&(h=h.concat(l)),l&&typeof l=="string"&&(h=h.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(h=i.split("."));var m=yu(this.data,h);return m||!f||typeof l!="string"?m:bu(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var h=[i,a];l&&(h=h.concat(f?l.split(f):l)),i.indexOf(".")>-1&&(h=i.split("."),u=a,a=h[1]),this.addNamespaces(a),Yg(this.data,h,u),d.silent||this.emit("added",i,a,l,u)}},{key:"addResources",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});u.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},h=[i,a];i.indexOf(".")>-1&&(h=i.split("."),u=l,l=a,a=h[1]),this.addNamespaces(a);var m=yu(this.data,h)||{};u?Dx(m,l,d):m=ml(ml({},m),l),Yg(this.data,h,m),f.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?ml(ml({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(so),Fx={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,i,a))}),n}};function tv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QE(e){var t=GE();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function GE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var nv={},rv=function(e){xc(n,e);var t=QE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Mn(this,n),i=t.call(this),wc&&so.call(Yr(i)),FE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Yr(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Qn.create("translator"),i}return Dn(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=l&&i.indexOf(l)>-1,h=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!ZE(i,l,u);if(f&&!h){var m=i.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:i,namespaces:d};var g=i.split(l);(l!==u||l===u&&this.options.ns.indexOf(g[0])>-1)&&(d=g.shift()),i=g.join(u)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var u=this;if(vn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,h=this.extractFromKey(i[i.length-1],a),m=h.key,g=h.namespaces,x=g[g.length-1],w=a.lng||this.language,v=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(w&&w.toLowerCase()==="cimode"){if(v){var P=a.nsSeparator||this.options.nsSeparator;return d?{res:"".concat(x).concat(P).concat(m),usedKey:m,exactUsedKey:m,usedLng:w,usedNS:x}:"".concat(x).concat(P).concat(m)}return d?{res:m,usedKey:m,exactUsedKey:m,usedLng:w,usedNS:x}:m}var y=this.resolve(i,a),b=y&&y.res,S=y&&y.usedKey||m,C=y&&y.exactUsedKey||m,z=Object.prototype.toString.apply(b),B=["[object Number]","[object Function]","[object RegExp]"],A=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,Z=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(j&&b&&Z&&B.indexOf(z)<0&&!(typeof A=="string"&&z==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var $=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,Mt(Mt({},a),{},{ns:g})):"key '".concat(m," (").concat(this.language,")' returned an object instead of string.");return d?(y.res=$,y):$}if(f){var X=z==="[object Array]",ne=X?[]:{},se=X?C:S;for(var ee in b)if(Object.prototype.hasOwnProperty.call(b,ee)){var pe="".concat(se).concat(f).concat(ee);ne[ee]=this.translate(pe,Mt(Mt({},a),{joinArrays:!1,ns:g})),ne[ee]===pe&&(ne[ee]=b[ee])}b=ne}}else if(j&&typeof A=="string"&&z==="[object Array]")b=b.join(A),b&&(b=this.extendTranslation(b,i,a,l));else{var re=!1,M=!1,D=a.count!==void 0&&typeof a.count!="string",J=n.hasDefaultValue(a),K=D?this.pluralResolver.getSuffix(w,a.count,a):"",E=a["defaultValue".concat(K)]||a.defaultValue;!this.isValidLookup(b)&&J&&(re=!0,b=E),this.isValidLookup(b)||(M=!0,b=m);var N=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,R=N&&M?void 0:b,V=J&&E!==b&&this.options.updateMissing;if(M||re||V){if(this.logger.log(V?"updateKey":"missingKey",w,x,m,V?E:b),f){var te=this.resolve(m,Mt(Mt({},a),{},{keySeparator:!1}));te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var oe=[],le=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&le&&le[0])for(var ye=0;ye<le.length;ye++)oe.push(le[ye]);else this.options.saveMissingTo==="all"?oe=this.languageUtils.toResolveHierarchy(a.lng||this.language):oe.push(a.lng||this.language);var ie=function(be,Le,qe){var Ce=J&&qe!==b?qe:R;u.options.missingKeyHandler?u.options.missingKeyHandler(be,x,Le,Ce,V,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(be,x,Le,Ce,V,a),u.emit("missingKey",be,x,Le,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&D?oe.forEach(function(he){u.pluralResolver.getSuffixes(he,a).forEach(function(be){ie([he],m+be,a["defaultValue".concat(be)]||E)})}):ie(oe,m,E))}b=this.extendTranslation(b,i,a,y,l),M&&b===m&&this.options.appendNamespaceToMissingKey&&(b="".concat(x,":").concat(m)),(M||re)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(x,":").concat(m):m,re?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(y.res=b,y):b}},{key:"extendTranslation",value:function(i,a,l,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,Mt(Mt({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(Mt(Mt({},l),{interpolation:Mt(Mt({},this.options.interpolation),l.interpolation)}));var h=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),m;if(h){var g=i.match(this.interpolator.nestingRegexp);m=g&&g.length}var x=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(x=Mt(Mt({},this.options.interpolation.defaultVariables),x)),i=this.interpolator.interpolate(i,x,l.lng||this.language,l),h){var w=i.match(this.interpolator.nestingRegexp),v=w&&w.length;m<v&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var b=arguments.length,S=new Array(b),C=0;C<b;C++)S[C]=arguments[C];return d&&d[0]===S[0]&&!l.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var P=l.postProcess||this.options.postProcess,y=typeof P=="string"?[P]:P;return i!=null&&y&&y.length&&l.applyPostProcessor!==!1&&(i=Fx.handle(y,i,a,this.options&&this.options.postProcessPassResolved?Mt({i18nResolved:u},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,h,m;return typeof i=="string"&&(i=[i]),i.forEach(function(g){if(!a.isValidLookup(u)){var x=a.extractFromKey(g,l),w=x.key;d=w;var v=x.namespaces;a.options.fallbackNS&&(v=v.concat(a.options.fallbackNS));var P=l.count!==void 0&&typeof l.count!="string",y=P&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",S=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);v.forEach(function(C){a.isValidLookup(u)||(m=C,!nv["".concat(S[0],"-").concat(C)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(m)&&(nv["".concat(S[0],"-").concat(C)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(m,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(z){if(!a.isValidLookup(u)){h=z;var B=[w];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(B,w,z,C,l);else{var A;P&&(A=a.pluralResolver.getSuffix(z,l.count,l));var j="".concat(a.options.pluralSeparator,"zero");if(P&&(B.push(w+A),y&&B.push(w+j)),b){var Z="".concat(w).concat(a.options.contextSeparator).concat(l.context);B.push(Z),P&&(B.push(Z+A),y&&B.push(Z+j))}}for(var $;$=B.pop();)a.isValidLookup(u)||(f=$,u=a.getResource(z,C,$,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:h,usedNS:m}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,u):this.resourceStore.getResource(i,a,l,u)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(so);function Ad(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ov=function(){function e(t){Mn(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Qn.create("languageUtils")}return Dn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ad(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ad(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ad(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(u){if(u===l)return u;if(!(u.indexOf("-")<0&&l.indexOf("-")<0)&&u.indexOf(l)===0)return u})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(f){f&&(i.isSupportedCode(f)?l.push(f):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(i.formatLanguageCode(d))}),l}}]),e}(),JE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],XE={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}},YE=["v1","v2","v3"],iv={zero:0,one:1,two:2,few:3,many:4,other:5};function eO(){var e={};return JE.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:XE[t.fc]}})}),e}var tO=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Mn(this,e),this.languageUtils=t,this.options=n,this.logger=Qn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=eO()}return Dn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return iv[l]-iv[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!YE.includes(this.options.compatibilityJSON)}}]),e}();function av(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?av(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):av(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sv(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=UE(e,t,n);return!a&&i&&typeof n=="string"&&(a=bu(e,n,r),a===void 0&&(a=bu(t,n,r))),a}var nO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mn(this,e),this.logger=Qn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Dn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:WE,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?ui(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?ui(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?ui(r.nestingPrefix):r.nestingPrefixEscaped||ui("$t("),this.nestingSuffix=r.nestingSuffix?ui(r.nestingSuffix):r.nestingSuffixEscaped||ui(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,u,d,f,h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function m(P){return P.replace(/\$/g,"$$$$")}var g=function(y){if(y.indexOf(l.formatSeparator)<0){var b=sv(r,h,y,l.options.keySeparator,l.options.ignoreJSONStructure);return l.alwaysFormat?l.format(b,void 0,i,Pn(Pn(Pn({},a),r),{},{interpolationkey:y})):b}var S=y.split(l.formatSeparator),C=S.shift().trim(),z=S.join(l.formatSeparator).trim();return l.format(sv(r,h,C,l.options.keySeparator,l.options.ignoreJSONStructure),z,i,Pn(Pn(Pn({},a),r),{},{interpolationkey:C}))};this.resetRegExp();var x=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,w=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,v=[{regex:this.regexpUnescape,safeValue:function(y){return m(y)}},{regex:this.regexp,safeValue:function(y){return l.escapeValue?m(l.escape(y)):m(y)}}];return v.forEach(function(P){for(f=0;u=P.regex.exec(n);){var y=u[1].trim();if(d=g(y),d===void 0)if(typeof x=="function"){var b=x(n,u,a);d=typeof b=="string"?b:""}else if(a&&Object.prototype.hasOwnProperty.call(a,y))d="";else if(w){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(y," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=Xg(d));var S=P.safeValue(d);if(n=n.replace(u[0],S),w?(P.regex.lastIndex+=d.length,P.regex.lastIndex-=u[0].length):P.regex.lastIndex=0,f++,f>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function f(x,w){var v=this.nestingOptionsSeparator;if(x.indexOf(v)<0)return x;var P=x.split(new RegExp("".concat(v,"[ ]*{"))),y="{".concat(P[1]);x=P[0],y=this.interpolate(y,d);var b=y.match(/'/g),S=y.match(/"/g);(b&&b.length%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),w&&(d=Pn(Pn({},w),d))}catch(C){return this.logger.warn("failed parsing options string in nesting for key ".concat(x),C),"".concat(x).concat(v).concat(y)}return delete d.defaultValue,x}for(;l=this.nestingRegexp.exec(n);){var h=[];d=Pn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var m=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var g=l[1].split(this.formatSeparator).map(function(x){return x.trim()});l[1]=g.shift(),h=g,m=!0}if(u=r(f.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=Xg(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),m&&(u=h.reduce(function(x,w){return i.format(x,w,a.lng,Pn(Pn({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rO(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=IE(u),f=d[0],h=d.slice(1),m=h.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=m),m==="false"&&(n[f.trim()]=!1),m==="true"&&(n[f.trim()]=!0),isNaN(m)||(n[f.trim()]=parseInt(m,10))}})}}return{formatName:t,formatOptions:n}}function ci(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),u=t[l];return u||(u=e(i,a),t[l]=u),u(r)}}var oO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mn(this,e),this.logger=Qn.create("formatter"),this.options=t,this.formats={number:ci(function(n,r){var i=new Intl.NumberFormat(n,cr({},r));return function(a){return i.format(a)}}),currency:ci(function(n,r){var i=new Intl.NumberFormat(n,cr(cr({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:ci(function(n,r){var i=new Intl.DateTimeFormat(n,cr({},r));return function(a){return i.format(a)}}),relativetime:ci(function(n,r){var i=new Intl.RelativeTimeFormat(n,cr({},r));return function(a){return i.format(a,r.range||"day")}}),list:ci(function(n,r){var i=new Intl.ListFormat(n,cr({},r));return function(a){return i.format(a)}})},this.init(t)}return Dn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=ci(r)}},{key:"format",value:function(n,r,i){var a=this,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=r.split(this.formatSeparator),d=u.reduce(function(f,h){var m=rO(h),g=m.formatName,x=m.formatOptions;if(a.formats[g]){var w=f;try{var v=l&&l.formatParams&&l.formatParams[l.interpolationkey]||{},P=v.locale||v.lng||l.locale||l.lng||i;w=a.formats[g](f,P,cr(cr(cr({},x),l),v))}catch(y){a.logger.warn(y)}return w}else a.logger.warn("there was no format function for ".concat(g));return f},n);return d}}]),e}();function uv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iO(e){var t=aO();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function aO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sO(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var lO=function(e){xc(n,e);var t=iO(n);function n(r,i,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return Mn(this,n),l=t.call(this),wc&&so.call(Yr(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Qn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return Dn(n,[{key:"queueLoad",value:function(i,a,l,u){var d=this,f={},h={},m={},g={};return i.forEach(function(x){var w=!0;a.forEach(function(v){var P="".concat(x,"|").concat(v);!l.reload&&d.store.hasResourceBundle(x,v)?d.state[P]=2:d.state[P]<0||(d.state[P]===1?h[P]===void 0&&(h[P]=!0):(d.state[P]=1,w=!1,h[P]===void 0&&(h[P]=!0),f[P]===void 0&&(f[P]=!0),g[v]===void 0&&(g[v]=!0)))}),w||(m[x]=!0)}),(Object.keys(f).length||Object.keys(h).length)&&this.queue.push({pending:h,pendingCount:Object.keys(h).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(h),toLoadLanguages:Object.keys(m),toLoadNamespaces:Object.keys(g)}}},{key:"loaded",value:function(i,a,l){var u=i.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),l&&this.store.addResourceBundle(d,f,l),this.state[i]=a?-1:2;var h={};this.queue.forEach(function(m){jE(m.loaded,[d],f),sO(m,i),a&&m.errors.push(a),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(function(g){h[g]||(h[g]={});var x=m.loaded[g];x.length&&x.forEach(function(w){h[g][w]===void 0&&(h[g][w]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",h),this.queue=this.queue.filter(function(m){return!m.done})}},{key:"read",value:function(i,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,h=arguments.length>5?arguments[5]:void 0;if(!i.length)return h(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:f,callback:h});return}this.readingCalls++;var m=function(v,P){if(u.readingCalls--,u.waitingReads.length>0){var y=u.waitingReads.shift();u.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(v&&P&&d<u.maxRetries){setTimeout(function(){u.read.call(u,i,a,l,d+1,f*2,h)},f);return}h(v,P)},g=this.backend[l].bind(this.backend);if(g.length===2){try{var x=g(i,a);x&&typeof x.then=="function"?x.then(function(w){return m(null,w)}).catch(m):m(null,x)}catch(w){m(w)}return}return g(i,a,m)}},{key:"prepareLoading",value:function(i,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(i,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(h){l.loadOne(h)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=i.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(h,m){h&&a.logger.warn("".concat(l,"loading namespace ").concat(f," for language ").concat(d," failed"),h),!h&&m&&a.logger.log("".concat(l,"loaded namespace ").concat(f," for language ").concat(d),m),a.loaded(i,h,m)})}},{key:"saveMissing",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var m=cv(cv({},f),{},{isUpdate:d}),g=this.backend.create.bind(this.backend);if(g.length<6)try{var x;g.length===5?x=g(i,a,l,u,m):x=g(i,a,l,u),x&&typeof x.then=="function"?x.then(function(w){return h(null,w)}).catch(h):h(null,x)}catch(w){h(w)}else g(i,a,l,u,h,m)}!i||!i[0]||this.store.addResource(i[0],a,l,u)}}}]),n}(so);function dv(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(vn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),vn(t[2])==="object"||vn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function fv(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function pv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pv(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uO(e){var t=cO();return function(){var r=nr(e),i;if(t){var a=nr(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function cO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _l(){}function dO(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var xu=function(e){xc(n,e);var t=uO(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(Mn(this,n),r=t.call(this),wc&&so.call(Yr(r)),r.options=fv(i),r.services={},r.logger=Qn,r.modules={external:[]},dO(Yr(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),Os(r,Yr(r));setTimeout(function(){r.init(i,a)},0)}return r}return Dn(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=dv();this.options=Hn(Hn(Hn({},u),this.options),fv(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Hn(Hn({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?Qn.init(d(this.modules.logger),this.options):Qn.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=oO);var h=new ov(this.options);this.store=new KE(this.options.resources,this.options);var m=this.services;m.logger=Qn,m.resourceStore=this.store,m.languageUtils=h,m.pluralResolver=new tO(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(m.formatter=d(f),m.formatter.init(m,this.options),this.options.interpolation.format=m.formatter.format.bind(m.formatter)),m.interpolator=new nO(this.options),m.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},m.backendConnector=new lO(d(this.modules.backend),m.resourceStore,m,this.options),m.backendConnector.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),C=1;C<b;C++)S[C-1]=arguments[C];i.emit.apply(i,[y].concat(S))}),this.modules.languageDetector&&(m.languageDetector=d(this.modules.languageDetector),m.languageDetector.init&&m.languageDetector.init(m,this.options.detection,this.options)),this.modules.i18nFormat&&(m.i18nFormat=d(this.modules.i18nFormat),m.i18nFormat.init&&m.i18nFormat.init(this)),this.translator=new rv(this.services,this.options),this.translator.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),C=1;C<b;C++)S[C-1]=arguments[C];i.emit.apply(i,[y].concat(S))}),this.modules.external.forEach(function(y){y.init&&y.init(i)})}if(this.format=this.options.interpolation.format,l||(l=_l),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var x=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];x.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments)}});var w=["addResource","addResources","addResourceBundle","removeResourceBundle"];w.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments),i}});var v=Oa(),P=function(){var b=function(C,z){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),v.resolve(z),l(C,z)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return b(null,i.t.bind(i));i.changeLanguage(i.options.lng,b)};return this.options.resources||!this.options.initImmediate?P():setTimeout(P,0),v}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l,u=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(u=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],h=function(x){if(x){var w=a.services.languageUtils.toResolveHierarchy(x);w.forEach(function(v){f.indexOf(v)<0&&f.push(v)})}};if(d)h(d);else{var m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.forEach(function(g){return h(g)})}this.options.preload&&this.options.preload.forEach(function(g){return h(g)}),this.services.backendConnector.load(f,this.options.ns,function(g){!g&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(g)})}else u(null)}},{key:"reloadResources",value:function(i,a,l){var u=Oa();return i||(i=this.languages),a||(a=this.options.ns),l||(l=_l),this.services.backendConnector.reload(i,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&Fx.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var u=Oa();this.emit("languageChanging",i);var d=function(g){l.language=g,l.languages=l.services.languageUtils.toResolveHierarchy(g),l.resolvedLanguage=void 0,l.setResolvedLanguage(g)},f=function(g,x){x?(d(x),l.translator.changeLanguage(x),l.isLanguageChangingTo=void 0,l.emit("languageChanged",x),l.logger.log("languageChanged",x)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(g,function(){return l.t.apply(l,arguments)})},h=function(g){!i&&!g&&l.services.languageDetector&&(g=[]);var x=typeof g=="string"?g:l.services.languageUtils.getBestMatchFromCodes(g);x&&(l.language||d(x),l.translator.language||l.translator.changeLanguage(x),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(x)),l.loadResources(x,function(w){f(w,x)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?h(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(h):this.services.languageDetector.detect(h):h(i),u}},{key:"getFixedT",value:function(i,a,l){var u=this,d=function f(h,m){var g;if(vn(m)!=="object"){for(var x=arguments.length,w=new Array(x>2?x-2:0),v=2;v<x;v++)w[v-2]=arguments[v];g=u.options.overloadTranslationOptionHandler([h,m].concat(w))}else g=Hn({},m);g.lng=g.lng||f.lng,g.lngs=g.lngs||f.lngs,g.ns=g.ns||f.ns,g.keyPrefix=g.keyPrefix||l||f.keyPrefix;var P=u.options.keySeparator||".",y;return g.keyPrefix&&Array.isArray(h)?y=h.map(function(b){return"".concat(g.keyPrefix).concat(P).concat(b)}):y=g.keyPrefix?"".concat(g.keyPrefix).concat(P).concat(h):h,u.t(y,g)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var h=function(x,w){var v=a.services.backendConnector.state["".concat(x,"|").concat(w)];return v===-1||v===2};if(l.precheck){var m=l.precheck(this,h);if(m!==void 0)return m}return!!(this.hasResourceBundle(u,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||h(u,i)&&(!d||h(f,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,u=Oa();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=Oa();typeof i=="string"&&(i=[i]);var u=this.options.preload||[],d=i.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new ov(dv());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l,u=Hn(Hn(Hn({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(h){d[h]=i[h]}),d.services=Hn({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new rv(d.services,d.options),d.translator.on("*",function(h){for(var m=arguments.length,g=new Array(m>1?m-1:0),x=1;x<m;x++)g[x-1]=arguments[x];d.emit.apply(d,[h].concat(g))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(so);In(xu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new xu(e,t)});var It=xu.createInstance();It.createInstance=xu.createInstance;It.createInstance;It.dir;It.init;It.loadResources;It.reloadResources;var fO=It.use;It.changeLanguage;It.getFixedT;var wo=It.t;It.exists;It.setDefaultNamespace;It.hasLoadedNamespace;It.loadNamespaces;It.loadLanguages;const Bd=()=>at("div",{children:[ae("h1",{children:"Det skjedde en feil"}),ae("p",{children:ae("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),pO="2.25rem",hO="3.75rem",mO="540px",_O="#000000",gO="#0062ba",vO={0:{value:"Base",type:"other"},1:{value:"Components",type:"other"}},yO={id:"edeff752fe55f2581f6ceee82c66aac8b8a8622d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},bO={id:"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},xO={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}},arrow:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#d2d5d8",type:"color"}},border_bottom:{default:{value:"#d2d5d8",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#1e2b3c",type:"color"},error:{value:"#1e2b3c",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#1e2b3c",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#1e2b3c",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},pressed:{value:"#00315d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},pressed:{value:"#084826",type:"color"}}}},danger:{color:{background:{default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},pressed:{value:"#861c2c",type:"color"}}}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},background:{hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#b3253a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fff4b4",type:"color"}},background:{default:{value:"#fff4b4",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d1f4e1",type:"color"}},border:{default:{value:"#d1f4e1",type:"color"}}}},size:{min_height:{default:{value:"2.25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#b3253a",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},wO={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},kO={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},SO={border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},PO={default:{value:"2.25rem",type:"paragraphSpacing"}},CO={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},EO={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},OO={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},TO={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},zO={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},LO={disabled:{value:"30%",type:"opacity"}},RO={grey:{100:{value:"#f4f5f6",type:"color",description:`AAA 13.1 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#e9eaec",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},300:{value:"#d2d5d8",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},400:{value:"#bcbfc5",type:"color",description:`AAA 8.7 on grey 800
AA18 4.4 as bkdg for interaction blue`},500:{value:"#a5aab1",type:"color",description:`AA 6.1 on grey 800
AA18 3 as bkdg for interaction blue`},600:{value:"#68707c",type:"color",description:`AA18 3.5 on grey 800
AA18 4 on white`},700:{value:"#4b5563",type:"color",description:"AAA 7.5 on white"},800:{value:"#1e2b3c",type:"color",description:`Main Text Color
AAA 14.3 on white`},900:{value:"#141e29",type:"color",description:"AAA 16.8 on white"}},white:{value:"#ffffff",type:"color",description:`Standard bckd color.
AAA 13.1 on grey 800
AAA 7.2 as bkdg for interaction blue`},black:{value:"#000000",type:"color"},red:{100:{value:"#f9d5db",type:"color"},200:{value:"#f3abb6",type:"color"},300:{value:"#ec8292",type:"color"},400:{value:"#e6586d",type:"color"},500:{value:"#e02e49",type:"color"},600:{value:"#b3253a",type:"color"},700:{value:"#861c2c",type:"color"},800:{value:"#5a121d",type:"color"},900:{value:"#480e17",type:"color"}},orange:{100:{value:"#ffe8cd",type:"color"},200:{value:"#ffd19b",type:"color"},300:{value:"#ffba6a",type:"color"},400:{value:"#ffa338",type:"color"},500:{value:"#ff8c06",type:"color"},600:{value:"#cc7005",type:"color"},700:{value:"#995404",type:"color"},800:{value:"#663802",type:"color"},900:{value:"#522d02",type:"color"}},yellow:{100:{value:"#fffbe6",type:"color"},200:{value:"#fff4b4",type:"color"},300:{value:"#ffed83",type:"color"},400:{value:"#ffe551",type:"color"},500:{value:"#ffda06",type:"color"},600:{value:"#e6c405",type:"color"},700:{value:"#ccae05",type:"color"},800:{value:"#998304",type:"color"},900:{value:"#665702",type:"color"}},green:{100:{value:"#e8faf0",type:"color"},200:{value:"#d1f4e1",type:"color"},300:{value:"#8be4b5",type:"color"},400:{value:"#5dd997",type:"color"},500:{value:"#2ece7a",type:"color"},600:{value:"#15b560",type:"color"},700:{value:"#118849",type:"color"},800:{value:"#0c6536",type:"color"},900:{value:"#084826",type:"color"}},blue:{100:{value:"#e6eff8",type:"color"},200:{value:"#b3d0ea",type:"color"},300:{value:"#80b1dd",type:"color"},400:{value:"#66a1d6",type:"color"},500:{value:"#3381c8",type:"color"},600:{value:"#1a72c1",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004e95",type:"color"},900:{value:"#00315d",type:"color"}},purple:{100:{value:"#f5e8f2",type:"color"},200:{value:"#e0b9d8",type:"color"},300:{value:"#cc8bbf",type:"color"},400:{value:"#b75da5",type:"color"},500:{value:"#a22e8b",type:"color"},600:{value:"#98177e",type:"color"},700:{value:"#7a1265",type:"color"},800:{value:"#5b0e4c",type:"color"},900:{value:"#490b3d",type:"color"}}},AO={background:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"}},surface:{neutral:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"},"subtle-hover":{value:"#e9eaec",type:"color"},selected:{value:"#e6eff8",type:"color"},inverted:{value:"#1e2b3c",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color",description:"Standard farge for handlinger"}},success:{subtle:{value:"#d1f4e1",type:"color"},default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},active:{value:"#084826",type:"color"}},warning:{subtle:{value:"#fffbe6",type:"color"}},danger:{subtle:{value:"#f9d5db",type:"color"},default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},active:{value:"#861c2c",type:"color"}},info:{subtle:{value:"#e6eff8",type:"color"}}},border:{info:{default:{value:"#004e95",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color"}},neutral:{default:{value:"#68707c",type:"color"},subtle:{value:"#d2d5d8",type:"color"},strong:{value:"#1e2b3c",type:"color"},divider:{value:"#bcbfc5",type:"color"}},success:{default:{value:"#0c6536",type:"color"}},warning:{default:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"}}},tab_focus:{outline:{color:{value:"#98177e",type:"color"},offset:{value:"2px",type:"spacing"},width:{value:"2px",type:"borderWidth"}}},text:{success:{default:{value:"#0c6536",type:"color"},on_success:{value:"#ffffff",type:"color"}},neutral:{default:{value:"#1e2b3c",type:"color"},subtle:{value:"#68707c",type:"color"},on_inverted:{value:"#ffffff",type:"color"}},action:{default:{value:"#0062ba",type:"color"},on_action:{value:"#ffffff",type:"color"}},warning:{default:{value:"#995404",type:"color"},on_warning:{value:"#663802",type:"color"},icon_warning:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"},on_danger:{value:"#ffffff",type:"color"}},visited:{default:{value:"#7a1265",type:"color"}}}},BO={default:{first:{100:{value:"#feefef",type:"color",description:`AAA 12.8 on grey 800
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
AA18 3.7 as bkdg for interaction blue`},500:{value:"#4badf7",type:"color",description:"AA 5.8 on grey 800"},600:{value:"#1e98f5",type:"color",description:"AA 4.6 on grey 800"},700:{value:"#1b88dd",type:"color",description:"AA18 3.8 on grey 800"},800:{value:"#156aac",type:"color",description:"AA 5.6 on white"}}}},NO={tokenSetOrder:vO,Felles:yO,Altinn:bO,component:xO,border_width:wO,space:kO,interactive_components:SO,paragraph_space:PO,font_size:CO,font_family:EO,breakpoints:OO,typography:TO,size:zO,opacity:LO,colors:RO,semantic:AO,brand:BO};var up={},IO={get exports(){return up},set exports(e){up=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(fi,function(n){var r="1.9.3";function i(o){var s,c,p,_;for(c=1,p=arguments.length;c<p;c++){_=arguments[c];for(s in _)o[s]=_[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var p=c.call(arguments,2);return function(){return o.apply(s,p.length?p.concat(c.call(arguments)):arguments)}}var u=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++u),o._leaflet_id}function f(o,s,c){var p,_,k,O;return O=function(){p=!1,_&&(k.apply(c,_),_=!1)},k=function(){p?_=arguments:(o.apply(c,arguments),setTimeout(O,s),p=!0)},k}function h(o,s,c){var p=s[1],_=s[0],k=p-_;return o===p&&c?o:((o-_)%k+k)%k+_}function m(){return!1}function g(o,s){if(s===!1)return o;var c=Math.pow(10,s===void 0?6:s);return Math.round(o*c)/c}function x(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function w(o){return x(o).split(/\s+/)}function v(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var c in s)o.options[c]=s[c];return o.options}function P(o,s,c){var p=[];for(var _ in o)p.push(encodeURIComponent(c?_.toUpperCase():_)+"="+encodeURIComponent(o[_]));return(!s||s.indexOf("?")===-1?"?":"&")+p.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function b(o,s){return o.replace(y,function(c,p){var _=s[p];if(_===void 0)throw new Error("No value provided for variable "+c);return typeof _=="function"&&(_=_(s)),_})}var S=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function C(o,s){for(var c=0;c<o.length;c++)if(o[c]===s)return c;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function B(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var A=0;function j(o){var s=+new Date,c=Math.max(0,16-(s-A));return A=s+c,window.setTimeout(o,c)}var Z=window.requestAnimationFrame||B("RequestAnimationFrame")||j,$=window.cancelAnimationFrame||B("CancelAnimationFrame")||B("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function X(o,s,c){if(c&&Z===j)o.call(s);else return Z.call(window,l(o,s))}function ne(o){o&&$.call(window,o)}var se={__proto__:null,extend:i,create:a,bind:l,get lastId(){return u},stamp:d,throttle:f,wrapNum:h,falseFn:m,formatNum:g,trim:x,splitWords:w,setOptions:v,getParamString:P,template:b,isArray:S,indexOf:C,emptyImageUrl:z,requestFn:Z,cancelFn:$,requestAnimFrame:X,cancelAnimFrame:ne};function ee(){}ee.extend=function(o){var s=function(){v(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,p=a(c);p.constructor=s,s.prototype=p;for(var _ in this)Object.prototype.hasOwnProperty.call(this,_)&&_!=="prototype"&&_!=="__super__"&&(s[_]=this[_]);return o.statics&&i(s,o.statics),o.includes&&(pe(o.includes),i.apply(null,[p].concat(o.includes))),i(p,o),delete p.statics,delete p.includes,p.options&&(p.options=c.options?a(c.options):{},i(p.options,o.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var k=0,O=p._initHooks.length;k<O;k++)p._initHooks[k].call(this)}},s},ee.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},ee.mergeOptions=function(o){return i(this.prototype.options,o),this},ee.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function pe(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=S(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var re={on:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s);else{o=w(o);for(var _=0,k=o.length;_<k;_++)this._on(o[_],s,c)}return this},off:function(o,s,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var p in o)this._off(p,o[p],s);else{o=w(o);for(var _=arguments.length===1,k=0,O=o.length;k<O;k++)_?this._off(o[k]):this._off(o[k],s,c)}return this},_on:function(o,s,c,p){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,c)===!1){c===this&&(c=void 0);var _={fn:s,ctx:c};p&&(_.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(_)}},_off:function(o,s,c){var p,_,k;if(this._events&&(p=this._events[o],!!p)){if(arguments.length===1){if(this._firingCount)for(_=0,k=p.length;_<k;_++)p[_].fn=m;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var O=this._listens(o,s,c);if(O!==!1){var I=p[O];this._firingCount&&(I.fn=m,this._events[o]=p=p.slice()),p.splice(O,1)}}},fire:function(o,s,c){if(!this.listens(o,c))return this;var p=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var _=this._events[o];if(_){this._firingCount=this._firingCount+1||1;for(var k=0,O=_.length;k<O;k++){var I=_[k],F=I.fn;I.once&&this.off(o,F,I.ctx),F.call(I.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(o,s,c,p){typeof o!="string"&&console.warn('"string" type argument expected');var _=s;typeof s!="function"&&(p=!!s,_=void 0,c=void 0);var k=this._events&&this._events[o];if(k&&k.length&&this._listens(o,_,c)!==!1)return!0;if(p){for(var O in this._eventParents)if(this._eventParents[O].listens(o,s,c,p))return!0}return!1},_listens:function(o,s,c){if(!this._events)return!1;var p=this._events[o]||[];if(!s)return!!p.length;c===this&&(c=void 0);for(var _=0,k=p.length;_<k;_++)if(p[_].fn===s&&p[_].ctx===c)return _;return!1},once:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s,!0);else{o=w(o);for(var _=0,k=o.length;_<k;_++)this._on(o[_],s,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};re.addEventListener=re.on,re.removeEventListener=re.clearAllEventListeners=re.off,re.addOneTimeEventListener=re.once,re.fireEvent=re.fire,re.hasEventListeners=re.listens;var M=ee.extend(re);function D(o,s,c){this.x=c?Math.round(o):o,this.y=c?Math.round(s):s}var J=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};D.prototype={clone:function(){return new D(this.x,this.y)},add:function(o){return this.clone()._add(K(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(K(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new D(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new D(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=J(this.x),this.y=J(this.y),this},distanceTo:function(o){o=K(o);var s=o.x-this.x,c=o.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(o){return o=K(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=K(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function K(o,s,c){return o instanceof D?o:S(o)?new D(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new D(o.x,o.y):new D(o,s,c)}function E(o,s){if(o)for(var c=s?[o,s]:o,p=0,_=c.length;p<_;p++)this.extend(c[p])}E.prototype={extend:function(o){var s,c;if(!o)return this;if(o instanceof D||typeof o[0]=="number"||"x"in o)s=c=K(o);else if(o=N(o),s=o.min,c=o.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return K((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return K(this.min.x,this.max.y)},getTopRight:function(){return K(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,c;return typeof o[0]=="number"||o instanceof D?o=K(o):o=N(o),o instanceof E?(s=o.min,c=o.max):s=c=o,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=N(o);var s=this.min,c=this.max,p=o.min,_=o.max,k=_.x>=s.x&&p.x<=c.x,O=_.y>=s.y&&p.y<=c.y;return k&&O},overlaps:function(o){o=N(o);var s=this.min,c=this.max,p=o.min,_=o.max,k=_.x>s.x&&p.x<c.x,O=_.y>s.y&&p.y<c.y;return k&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,c=this.max,p=Math.abs(s.x-c.x)*o,_=Math.abs(s.y-c.y)*o;return N(K(s.x-p,s.y-_),K(c.x+p,c.y+_))},equals:function(o){return o?(o=N(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function N(o,s){return!o||o instanceof E?o:new E(o,s)}function R(o,s){if(o)for(var c=s?[o,s]:o,p=0,_=c.length;p<_;p++)this.extend(c[p])}R.prototype={extend:function(o){var s=this._southWest,c=this._northEast,p,_;if(o instanceof te)p=o,_=o;else if(o instanceof R){if(p=o._southWest,_=o._northEast,!p||!_)return this}else return o?this.extend(oe(o)||V(o)):this;return!s&&!c?(this._southWest=new te(p.lat,p.lng),this._northEast=new te(_.lat,_.lng)):(s.lat=Math.min(p.lat,s.lat),s.lng=Math.min(p.lng,s.lng),c.lat=Math.max(_.lat,c.lat),c.lng=Math.max(_.lng,c.lng)),this},pad:function(o){var s=this._southWest,c=this._northEast,p=Math.abs(s.lat-c.lat)*o,_=Math.abs(s.lng-c.lng)*o;return new R(new te(s.lat-p,s.lng-_),new te(c.lat+p,c.lng+_))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof te||"lat"in o?o=oe(o):o=V(o);var s=this._southWest,c=this._northEast,p,_;return o instanceof R?(p=o.getSouthWest(),_=o.getNorthEast()):p=_=o,p.lat>=s.lat&&_.lat<=c.lat&&p.lng>=s.lng&&_.lng<=c.lng},intersects:function(o){o=V(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),_=o.getNorthEast(),k=_.lat>=s.lat&&p.lat<=c.lat,O=_.lng>=s.lng&&p.lng<=c.lng;return k&&O},overlaps:function(o){o=V(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),_=o.getNorthEast(),k=_.lat>s.lat&&p.lat<c.lat,O=_.lng>s.lng&&p.lng<c.lng;return k&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=V(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function V(o,s){return o instanceof R?o:new R(o,s)}function te(o,s,c){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,c!==void 0&&(this.alt=+c)}te.prototype={equals:function(o,s){if(!o)return!1;o=oe(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+g(this.lat,o)+", "+g(this.lng,o)+")"},distanceTo:function(o){return ye.distance(this,oe(o))},wrap:function(){return ye.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,c=s/Math.cos(Math.PI/180*this.lat);return V([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function oe(o,s,c){return o instanceof te?o:S(o)&&typeof o[0]!="object"?o.length===3?new te(o[0],o[1],o[2]):o.length===2?new te(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new te(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new te(o,s,c)}var le={latLngToPoint:function(o,s){var c=this.projection.project(o),p=this.scale(s);return this.transformation._transform(c,p)},pointToLatLng:function(o,s){var c=this.scale(s),p=this.transformation.untransform(o,c);return this.projection.unproject(p)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(o),p=this.transformation.transform(s.min,c),_=this.transformation.transform(s.max,c);return new E(p,_)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?h(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?h(o.lat,this.wrapLat,!0):o.lat,p=o.alt;return new te(c,s,p)},wrapLatLngBounds:function(o){var s=o.getCenter(),c=this.wrapLatLng(s),p=s.lat-c.lat,_=s.lng-c.lng;if(p===0&&_===0)return o;var k=o.getSouthWest(),O=o.getNorthEast(),I=new te(k.lat-p,k.lng-_),F=new te(O.lat-p,O.lng-_);return new R(I,F)}},ye=i({},le,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var c=Math.PI/180,p=o.lat*c,_=s.lat*c,k=Math.sin((s.lat-o.lat)*c/2),O=Math.sin((s.lng-o.lng)*c/2),I=k*k+Math.cos(p)*Math.cos(_)*O*O,F=2*Math.atan2(Math.sqrt(I),Math.sqrt(1-I));return this.R*F}}),ie=6378137,he={R:ie,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,o.lat),-c),_=Math.sin(p*s);return new D(this.R*o.lng*s,this.R*Math.log((1+_)/(1-_))/2)},unproject:function(o){var s=180/Math.PI;return new te((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=ie*Math.PI;return new E([-o,-o],[o,o])}()};function be(o,s,c,p){if(S(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=c,this._d=p}be.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new D((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Le(o,s,c,p){return new be(o,s,c,p)}var qe=i({},ye,{code:"EPSG:3857",projection:he,transformation:function(){var o=.5/(Math.PI*he.R);return Le(o,.5,-o,.5)}()}),Ce=i({},qe,{code:"EPSG:900913"});function lt(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function _t(o,s){var c="",p,_,k,O,I,F;for(p=0,k=o.length;p<k;p++){for(I=o[p],_=0,O=I.length;_<O;_++)F=I[_],c+=(_?"L":"M")+F.x+" "+F.y;c+=s?de.svg?"z":"x":""}return c||"M0 0"}var $e=document.documentElement.style,Wt="ActiveXObject"in window,rr=Wt&&!document.addEventListener,Ot="msLaunchUri"in navigator&&!("documentMode"in document),ln=cn("webkit"),Tt=cn("android"),or=cn("android 2")||cn("android 3"),ta=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),na=Tt&&cn("Google")&&ta<537&&!("AudioNode"in window),un=!!window.opera,Fn=!Ot&&cn("chrome"),U=cn("gecko")&&!ln&&!un&&!Wt,H=!Fn&&cn("safari"),G=cn("phantom"),ce="OTransition"in $e,me=navigator.platform.indexOf("Win")===0,ve=Wt&&"transition"in $e,ge="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!or,we="MozPerspective"in $e,_e=!window.L_DISABLE_3D&&(ve||ge||we)&&!ce&&!G,tt=typeof orientation<"u"||cn("mobile"),Re=tt&&ln,wt=tt&&ge,Ke=!window.PointerEvent&&window.MSPointerEvent,Jt=!!(window.PointerEvent||Ke),Ht="ontouchstart"in window||!!window.TouchEvent,mo=!window.L_NO_TOUCH&&(Ht||Jt),Go=tt&&un,Jo=tt&&U,Or=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ra=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",m,s),window.removeEventListener("testPassiveEventSupport",m,s)}catch{}return o}(),gt=function(){return!!document.createElement("canvas").getContext}(),Zt=!!(document.createElementNS&&lt("svg").createSVGRect),ir=!!Zt&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Xo=!Zt&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),oa=navigator.platform.indexOf("Mac")===0,Tc=navigator.platform.indexOf("Linux")===0;function cn(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var de={ie:Wt,ielt9:rr,edge:Ot,webkit:ln,android:Tt,android23:or,androidStock:na,opera:un,chrome:Fn,gecko:U,safari:H,phantom:G,opera12:ce,win:me,ie3d:ve,webkit3d:ge,gecko3d:we,any3d:_e,mobile:tt,mobileWebkit:Re,mobileWebkit3d:wt,msPointer:Ke,pointer:Jt,touch:mo,touchNative:Ht,mobileOpera:Go,mobileGecko:Jo,retina:Or,passiveEvents:ra,canvas:gt,svg:Zt,vml:Xo,inlineSvg:ir,mac:oa,linux:Tc},Yo=de.msPointer?"MSPointerDown":"pointerdown",ia=de.msPointer?"MSPointerMove":"pointermove",Rs=de.msPointer?"MSPointerUp":"pointerup",hm=de.msPointer?"MSPointerCancel":"pointercancel",zc={touchstart:Yo,touchmove:ia,touchend:Rs,touchcancel:hm},mm={touchstart:Y1,touchmove:As,touchend:As,touchcancel:As},ei={},_m=!1;function K1(o,s,c){return s==="touchstart"&&X1(),mm[s]?(c=mm[s].bind(this,c),o.addEventListener(zc[s],c,!1),c):(console.warn("wrong event specified:",s),m)}function Q1(o,s,c){if(!zc[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(zc[s],c,!1)}function G1(o){ei[o.pointerId]=o}function J1(o){ei[o.pointerId]&&(ei[o.pointerId]=o)}function gm(o){delete ei[o.pointerId]}function X1(){_m||(document.addEventListener(Yo,G1,!0),document.addEventListener(ia,J1,!0),document.addEventListener(Rs,gm,!0),document.addEventListener(hm,gm,!0),_m=!0)}function As(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in ei)s.touches.push(ei[c]);s.changedTouches=[s],o(s)}}function Y1(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&kt(s),As(o,s)}function ew(o){var s={},c,p;for(p in o)c=o[p],s[p]=c&&c.bind?c.bind(o):c;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var tw=200;function nw(o,s){o.addEventListener("dblclick",s);var c=0,p;function _(k){if(k.detail!==1){p=k.detail;return}if(!(k.pointerType==="mouse"||k.sourceCapabilities&&!k.sourceCapabilities.firesTouchEvents)){var O=wm(k);if(!(O.some(function(F){return F instanceof HTMLLabelElement&&F.attributes.for})&&!O.some(function(F){return F instanceof HTMLInputElement||F instanceof HTMLSelectElement}))){var I=Date.now();I-c<=tw?(p++,p===2&&s(ew(k))):p=1,c=I}}}return o.addEventListener("click",_),{dblclick:s,simDblclick:_}}function rw(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var Lc=Is(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),aa=Is(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),vm=aa==="webkitTransition"||aa==="OTransition"?aa+"End":"transitionend";function ym(o){return typeof o=="string"?document.getElementById(o):o}function sa(o,s){var c=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(o,null);c=p?p[s]:null}return c==="auto"?null:c}function Ie(o,s,c){var p=document.createElement(o);return p.className=s||"",c&&c.appendChild(p),p}function Je(o){var s=o.parentNode;s&&s.removeChild(o)}function Bs(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function ti(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function ni(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function Rc(o,s){if(o.classList!==void 0)return o.classList.contains(s);var c=Ns(o);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function Se(o,s){if(o.classList!==void 0)for(var c=w(s),p=0,_=c.length;p<_;p++)o.classList.add(c[p]);else if(!Rc(o,s)){var k=Ns(o);Ac(o,(k?k+" ":"")+s)}}function ot(o,s){o.classList!==void 0?o.classList.remove(s):Ac(o,x((" "+Ns(o)+" ").replace(" "+s+" "," ")))}function Ac(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function Ns(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function dn(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&ow(o,s)}function ow(o,s){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(p)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):o.style.filter+=" progid:"+p+"(opacity="+s+")"}function Is(o){for(var s=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in s)return o[c];return!1}function _o(o,s,c){var p=s||new D(0,0);o.style[Lc]=(de.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function ut(o,s){o._leaflet_pos=s,de.any3d?_o(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function go(o){return o._leaflet_pos||new D(0,0)}var la,ua,Bc;if("onselectstart"in document)la=function(){ke(window,"selectstart",kt)},ua=function(){We(window,"selectstart",kt)};else{var ca=Is(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);la=function(){if(ca){var o=document.documentElement.style;Bc=o[ca],o[ca]="none"}},ua=function(){ca&&(document.documentElement.style[ca]=Bc,Bc=void 0)}}function Nc(){ke(window,"dragstart",kt)}function Ic(){We(window,"dragstart",kt)}var Ms,Mc;function Dc(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Ds(),Ms=o,Mc=o.style.outline,o.style.outline="none",ke(window,"keydown",Ds))}function Ds(){Ms&&(Ms.style.outline=Mc,Ms=void 0,Mc=void 0,We(window,"keydown",Ds))}function bm(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function Fc(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var iw={__proto__:null,TRANSFORM:Lc,TRANSITION:aa,TRANSITION_END:vm,get:ym,getStyle:sa,create:Ie,remove:Je,empty:Bs,toFront:ti,toBack:ni,hasClass:Rc,addClass:Se,removeClass:ot,setClass:Ac,getClass:Ns,setOpacity:dn,testProp:Is,setTransform:_o,setPosition:ut,getPosition:go,get disableTextSelection(){return la},get enableTextSelection(){return ua},disableImageDrag:Nc,enableImageDrag:Ic,preventOutline:Dc,restoreOutline:Ds,getSizedParentNode:bm,getScale:Fc};function ke(o,s,c,p){if(s&&typeof s=="object")for(var _ in s)Uc(o,_,s[_],c);else{s=w(s);for(var k=0,O=s.length;k<O;k++)Uc(o,s[k],c,p)}return this}var jn="_leaflet_events";function We(o,s,c,p){if(arguments.length===1)xm(o),delete o[jn];else if(s&&typeof s=="object")for(var _ in s)$c(o,_,s[_],c);else if(s=w(s),arguments.length===2)xm(o,function(I){return C(s,I)!==-1});else for(var k=0,O=s.length;k<O;k++)$c(o,s[k],c,p);return this}function xm(o,s){for(var c in o[jn]){var p=c.split(/\d/)[0];(!s||s(p))&&$c(o,p,null,null,c)}}var jc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Uc(o,s,c,p){var _=s+d(c)+(p?"_"+d(p):"");if(o[jn]&&o[jn][_])return this;var k=function(I){return c.call(p||o,I||window.event)},O=k;!de.touchNative&&de.pointer&&s.indexOf("touch")===0?k=K1(o,s,k):de.touch&&s==="dblclick"?k=nw(o,k):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener(jc[s]||s,k,de.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(k=function(I){I=I||window.event,Hc(o,I)&&O(I)},o.addEventListener(jc[s],k,!1)):o.addEventListener(s,O,!1):o.attachEvent("on"+s,k),o[jn]=o[jn]||{},o[jn][_]=k}function $c(o,s,c,p,_){_=_||s+d(c)+(p?"_"+d(p):"");var k=o[jn]&&o[jn][_];if(!k)return this;!de.touchNative&&de.pointer&&s.indexOf("touch")===0?Q1(o,s,k):de.touch&&s==="dblclick"?rw(o,k):"removeEventListener"in o?o.removeEventListener(jc[s]||s,k,!1):o.detachEvent("on"+s,k),o[jn][_]=null}function vo(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function Wc(o){return Uc(o,"wheel",vo),this}function da(o){return ke(o,"mousedown touchstart dblclick contextmenu",vo),o._leaflet_disable_click=!0,this}function kt(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function yo(o){return kt(o),vo(o),this}function wm(o){if(o.composedPath)return o.composedPath();for(var s=[],c=o.target;c;)s.push(c),c=c.parentNode;return s}function km(o,s){if(!s)return new D(o.clientX,o.clientY);var c=Fc(s),p=c.boundingClientRect;return new D((o.clientX-p.left)/c.x-s.clientLeft,(o.clientY-p.top)/c.y-s.clientTop)}var aw=de.linux&&de.chrome?window.devicePixelRatio:de.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Sm(o){return de.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/aw:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Hc(o,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var sw={__proto__:null,on:ke,off:We,stopPropagation:vo,disableScrollPropagation:Wc,disableClickPropagation:da,preventDefault:kt,stop:yo,getPropagationPath:wm,getMousePosition:km,getWheelDelta:Sm,isExternalTarget:Hc,addListener:ke,removeListener:We},Pm=M.extend({run:function(o,s,c,p){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=go(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=X(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var c=this._startPos.add(this._offset.multiplyBy(o));s&&c._round(),ut(this._el,c),this.fire("step")},_complete:function(){ne(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),ze=M.extend({options:{crs:qe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=v(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(oe(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=aa&&de.any3d&&!de.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ke(this._proxy,vm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter(oe(o),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=i({animate:c.animate},c.zoom),c.pan=i({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,c.zoom):this._tryAnimatedPan(o,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(de.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(de.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,c){var p=this.getZoomScale(s),_=this.getSize().divideBy(2),k=o instanceof D?o:this.latLngToContainerPoint(o),O=k.subtract(_).multiplyBy(1-1/p),I=this.containerPointToLatLng(_.add(O));return this.setView(I,s,{zoom:c})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():V(o);var c=K(s.paddingTopLeft||s.padding||[0,0]),p=K(s.paddingBottomRight||s.padding||[0,0]),_=this.getBoundsZoom(o,!1,c.add(p));if(_=typeof s.maxZoom=="number"?Math.min(s.maxZoom,_):_,_===1/0)return{center:o.getCenter(),zoom:_};var k=p.subtract(c).divideBy(2),O=this.project(o.getSouthWest(),_),I=this.project(o.getNorthEast(),_),F=this.unproject(O.add(I).divideBy(2).add(k),_);return{center:F,zoom:_}},fitBounds:function(o,s){if(o=V(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=K(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Pm,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Se(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,c){if(c=c||{},c.animate===!1||!de.any3d)return this.setView(o,s,c);this._stop();var p=this.project(this.getCenter()),_=this.project(o),k=this.getSize(),O=this._zoom;o=oe(o),s=s===void 0?O:s;var I=Math.max(k.x,k.y),F=I*this.getZoomScale(O,s),Q=_.distanceTo(p)||1,ue=1.42,xe=ue*ue;function Ee(ct){var Js=ct?-1:1,Qw=ct?F:I,Gw=F*F-I*I+Js*xe*xe*Q*Q,Jw=2*Qw*xe*Q,td=Gw/Jw,i_=Math.sqrt(td*td+1)-td,Xw=i_<1e-9?-18:Math.log(i_);return Xw}function pn(ct){return(Math.exp(ct)-Math.exp(-ct))/2}function xo(ct){return(Math.exp(ct)+Math.exp(-ct))/2}function Gs(ct){return pn(ct)/xo(ct)}var Lr=Ee(0);function ed(ct){return I*(xo(Lr)/xo(Lr+ue*ct))}function Zw(ct){return I*(xo(Lr)*Gs(Lr+ue*ct)-pn(Lr))/xe}function Vw(ct){return 1-Math.pow(1-ct,1.5)}var qw=Date.now(),r_=(Ee(1)-Lr)/ue,Kw=c.duration?1e3*c.duration:1e3*r_*.8;function o_(){var ct=(Date.now()-qw)/Kw,Js=Vw(ct)*r_;ct<=1?(this._flyToFrame=X(o_,this),this._move(this.unproject(p.add(_.subtract(p).multiplyBy(Zw(Js)/Q)),O),this.getScaleZoom(I/ed(Js),O),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),o_.call(this),this},flyToBounds:function(o,s){var c=this._getBoundsCenterZoom(o,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(o){return o=V(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,V(o));return c.equals(p)||this.panTo(p,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var c=K(s.paddingTopLeft||s.padding||[0,0]),p=K(s.paddingBottomRight||s.padding||[0,0]),_=this.project(this.getCenter()),k=this.project(o),O=this.getPixelBounds(),I=N([O.min.add(c),O.max.subtract(p)]),F=I.getSize();if(!I.contains(k)){this._enforcingBounds=!0;var Q=k.subtract(I.getCenter()),ue=I.extend(k).getSize().subtract(F);_.x+=Q.x<0?-ue.x:ue.x,_.y+=Q.y<0?-ue.y:ue.y,this.panTo(this.unproject(_),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=s.divideBy(2).round(),_=c.divideBy(2).round(),k=p.subtract(_);return!k.x&&!k.y?this:(o.animate&&o.pan?this.panBy(k):(o.pan&&this._rawPanBy(k),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,o):navigator.geolocation.getCurrentPosition(s,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,c=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,c=o.coords.longitude,p=new te(s,c),_=p.toBounds(o.coords.accuracy*2),k=this._locateOptions;if(k.setView){var O=this.getBoundsZoom(_);this.setView(p,k.maxZoom?Math.min(O,k.maxZoom):O)}var I={latlng:p,bounds:_,timestamp:o.timestamp};for(var F in o.coords)typeof o.coords[F]=="number"&&(I[F]=o.coords[F]);this.fire("locationfound",I)}},addHandler:function(o,s){if(!s)return this;var c=this[o]=new s(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Je(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ne(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)Je(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),p=Ie("div",c,s||this._mapPane);return o&&(this._panes[o]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new R(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,c){o=V(o),c=K(c||[0,0]);var p=this.getZoom()||0,_=this.getMinZoom(),k=this.getMaxZoom(),O=o.getNorthWest(),I=o.getSouthEast(),F=this.getSize().subtract(c),Q=N(this.project(I,p),this.project(O,p)).getSize(),ue=de.any3d?this.options.zoomSnap:1,xe=F.x/Q.x,Ee=F.y/Q.y,pn=s?Math.max(xe,Ee):Math.min(xe,Ee);return p=this.getScaleZoom(pn,p),ue&&(p=Math.round(p/(ue/100))*(ue/100),p=s?Math.ceil(p/ue)*ue:Math.floor(p/ue)*ue),Math.max(_,Math.min(k,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new D(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var c=this._getTopLeftPoint(o,s);return new E(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(o)/c.scale(s)},getScaleZoom:function(o,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var p=c.zoom(o*c.scale(s));return isNaN(p)?1/0:p},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(oe(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(K(o),s)},layerPointToLatLng:function(o){var s=K(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project(oe(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(oe(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(V(o))},distance:function(o,s){return this.options.crs.distance(oe(o),oe(s))},containerPointToLayerPoint:function(o){return K(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return K(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(K(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(oe(o)))},mouseEventToContainerPoint:function(o){return km(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=ym(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ke(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&de.any3d,Se(o,"leaflet-container"+(de.touch?" leaflet-touch":"")+(de.retina?" leaflet-retina":"")+(de.ielt9?" leaflet-oldie":"")+(de.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=sa(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),ut(this._mapPane,new D(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Se(o.markerPane,"leaflet-zoom-hide"),Se(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,c){ut(this._mapPane,new D(0,0));var p=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var _=this._zoom!==s;this._moveStart(_,c)._move(o,s)._moveEnd(_),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,c,p){s===void 0&&(s=this._zoom);var _=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),p?c&&c.pinch&&this.fire("zoom",c):((_||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ne(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){ut(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?We:ke;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),de.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ne(this._resizeRequest),this._resizeRequest=X(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var c=[],p,_=s==="mouseout"||s==="mouseover",k=o.target||o.srcElement,O=!1;k;){if(p=this._targets[d(k)],p&&(s==="click"||s==="preclick")&&this._draggableMoved(p)){O=!0;break}if(p&&p.listens(s,!0)&&(_&&!Hc(k,o)||(c.push(p),_))||k===this._container)break;k=k.parentNode}return!c.length&&!O&&!_&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var c=o.type;c==="mousedown"&&Dc(s),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,c){if(o.type==="click"){var p=i({},o);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var _=this._findEventTargets(o,s);if(c){for(var k=[],O=0;O<c.length;O++)c[O].listens(s,!0)&&k.push(c[O]);_=k.concat(_)}if(_.length){s==="contextmenu"&&kt(o);var I=_[0],F={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var Q=I.getLatLng&&(!I._radius||I._radius<=10);F.containerPoint=Q?this.latLngToContainerPoint(I.getLatLng()):this.mouseEventToContainerPoint(o),F.layerPoint=this.containerPointToLayerPoint(F.containerPoint),F.latlng=Q?I.getLatLng():this.layerPointToLatLng(F.layerPoint)}for(O=0;O<_.length;O++)if(_[O].fire(s,F,!0),F.originalEvent._stopped||_[O].options.bubblingMouseEvents===!1&&C(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return go(this._mapPane)||new D(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var c=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var c=this.getSize()._divideBy(2);return this.project(o,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return this.project(o,s)._subtract(p)},_latLngBoundsToNewLayerBounds:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return N([this.project(o.getSouthWest(),s)._subtract(p),this.project(o.getNorthWest(),s)._subtract(p),this.project(o.getSouthEast(),s)._subtract(p),this.project(o.getNorthEast(),s)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,c){if(!c)return o;var p=this.project(o,s),_=this.getSize().divideBy(2),k=new E(p.subtract(_),p.add(_)),O=this._getBoundsOffset(k,c,s);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?o:this.unproject(p.add(O),s)},_limitOffset:function(o,s){if(!s)return o;var c=this.getPixelBounds(),p=new E(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(p,s))},_getBoundsOffset:function(o,s,c){var p=N(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),_=p.min.subtract(o.min),k=p.max.subtract(o.max),O=this._rebound(_.x,-k.x),I=this._rebound(_.y,-k.y);return new D(O,I)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),c=this.getMaxZoom(),p=de.any3d?this.options.zoomSnap:1;return p&&(o=Math.round(o/p)*p),Math.max(s,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ot(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var c=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var o=this._proxy=Ie("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var c=Lc,p=this._proxy.style[c];_o(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Je(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();_o(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(s),_=this._getCenterOffset(o)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(_)?!1:(X(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,Se(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ot(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function lw(o,s){return new ze(o,s)}var wn=ee.extend({options:{position:"topright"},initialize:function(o){v(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),c=this.getPosition(),p=o._controlCorners[c];return Se(s,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(s,p.firstChild):p.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Je(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),fa=function(o){return new wn(o)};ze.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",c=this._controlContainer=Ie("div",s+"control-container",this._container);function p(_,k){var O=s+_+" "+s+k;o[_+k]=Ie("div",O,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)Je(this._controlCorners[o]);Je(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Cm=wn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,c,p){return c<p?-1:p<c?1:0}},initialize:function(o,s,c){v(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var p in o)this._addLayer(o[p],p);for(p in s)this._addLayer(s[p],p,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return wn.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Se(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(Se(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):ot(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ot(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Ie("div",o),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),da(s),Wc(s);var p=this._section=Ie("section",o+"-list");c&&(this._map.on("click",this.collapse,this),ke(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var _=this._layersLink=Ie("a",o+"-toggle",s);_.href="#",_.title="Layers",_.setAttribute("role","button"),ke(_,{keydown:function(k){k.keyCode===13&&this._expandSafely()},click:function(k){kt(k),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Ie("div",o+"-base",p),this._separator=Ie("div",o+"-separator",p),this._overlaysList=Ie("div",o+"-overlays",p),s.appendChild(p)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(p,_){return this.options.sortFunction(p.layer,_.layer,p.name,_.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Bs(this._baseLayersList),Bs(this._overlaysList),this._layerControlInputs=[];var o,s,c,p,_=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),s=s||p.overlay,o=o||!p.overlay,_+=p.overlay?0:1;return this.options.hideSingleBase&&(o=o&&_>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),c=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(o,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(o){var s=document.createElement("label"),c=this._map.hasLayer(o.layer),p;o.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(p),p.layerId=d(o.layer),ke(p,"click",this._onInputClick,this);var _=document.createElement("span");_.innerHTML=" "+o.name;var k=document.createElement("span");s.appendChild(k),k.appendChild(p),k.appendChild(_);var O=o.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,c,p=[],_=[];this._handlingClick=!0;for(var k=o.length-1;k>=0;k--)s=o[k],c=this._getLayer(s.layerId).layer,s.checked?p.push(c):s.checked||_.push(c);for(k=0;k<_.length;k++)this._map.hasLayer(_[k])&&this._map.removeLayer(_[k]);for(k=0;k<p.length;k++)this._map.hasLayer(p[k])||this._map.addLayer(p[k]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,c,p=this._map.getZoom(),_=o.length-1;_>=0;_--)s=o[_],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;ke(o,"click",kt),this.expand(),setTimeout(function(){We(o,"click",kt)})}}),uw=function(o,s,c){return new Cm(o,s,c)},Zc=wn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",c=Ie("div",s+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,c,p,_){var k=Ie("a",c,p);return k.innerHTML=o,k.href="#",k.title=s,k.setAttribute("role","button"),k.setAttribute("aria-label",s),da(k),ke(k,"click",yo),ke(k,"click",_,this),ke(k,"click",this._refocusOnMap,this),k},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";ot(this._zoomInButton,s),ot(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(Se(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(Se(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});ze.mergeOptions({zoomControl:!0}),ze.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Zc,this.addControl(this.zoomControl))});var cw=function(o){return new Zc(o)},Em=wn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",c=Ie("div",s),p=this.options;return this._addScales(p,s+"-line",c),o.on(p.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,c){o.metric&&(this._mScale=Ie("div",s,c)),o.imperial&&(this._iScale=Ie("div",s,c))},_update:function(){var o=this._map,s=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/o)},_updateImperial:function(o){var s=o*3.2808399,c,p,_;s>5280?(c=s/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(_=this._getRoundNum(s),this._updateScale(this._iScale,_+" ft",_/s))},_updateScale:function(o,s,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),c=o/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),dw=function(o){return new Em(o)},fw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Vc=wn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(de.inlineSvg?fw+" ":"")+"Leaflet</a>"},initialize:function(o){v(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Ie("div","leaflet-control-attribution"),da(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});ze.mergeOptions({attributionControl:!0}),ze.addInitHook(function(){this.options.attributionControl&&new Vc().addTo(this)});var pw=function(o){return new Vc(o)};wn.Layers=Cm,wn.Zoom=Zc,wn.Scale=Em,wn.Attribution=Vc,fa.layers=uw,fa.zoom=cw,fa.scale=dw,fa.attribution=pw;var Un=ee.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Un.addTo=function(o,s){return o.addHandler(s,this),this};var hw={Events:re},Om=de.touch?"touchstart mousedown":"mousedown",Tr=M.extend({options:{clickTolerance:3},initialize:function(o,s,c,p){v(this,p),this._element=o,this._dragStartTarget=s||o,this._preventOutline=c},enable:function(){this._enabled||(ke(this._dragStartTarget,Om,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Tr._dragging===this&&this.finishDrag(!0),We(this._dragStartTarget,Om,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!Rc(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){Tr._dragging===this&&this.finishDrag();return}if(!(Tr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(Tr._dragging=this,this._preventOutline&&Dc(this._element),Nc(),la(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,c=bm(this._element);this._startPoint=new D(s.clientX,s.clientY),this._startPos=go(this._element),this._parentScale=Fc(c);var p=o.type==="mousedown";ke(document,p?"mousemove":"touchmove",this._onMove,this),ke(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,c=new D(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,kt(o),this._moved||(this.fire("dragstart"),this._moved=!0,Se(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Se(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),ut(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){ot(document.body,"leaflet-dragging"),this._lastTarget&&(ot(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),We(document,"mousemove touchmove",this._onMove,this),We(document,"mouseup touchend touchcancel",this._onUp,this),Ic(),ua(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Tr._dragging=!1}});function Tm(o,s){if(!s||!o.length)return o.slice();var c=s*s;return o=gw(o,c),o=_w(o,c),o}function zm(o,s,c){return Math.sqrt(pa(o,s,c,!0))}function mw(o,s,c){return pa(o,s,c)}function _w(o,s){var c=o.length,p=typeof Uint8Array!=void 0+""?Uint8Array:Array,_=new p(c);_[0]=_[c-1]=1,qc(o,_,s,0,c-1);var k,O=[];for(k=0;k<c;k++)_[k]&&O.push(o[k]);return O}function qc(o,s,c,p,_){var k=0,O,I,F;for(I=p+1;I<=_-1;I++)F=pa(o[I],o[p],o[_],!0),F>k&&(O=I,k=F);k>c&&(s[O]=1,qc(o,s,c,p,O),qc(o,s,c,O,_))}function gw(o,s){for(var c=[o[0]],p=1,_=0,k=o.length;p<k;p++)vw(o[p],o[_])>s&&(c.push(o[p]),_=p);return _<k-1&&c.push(o[k-1]),c}var Lm;function Rm(o,s,c,p,_){var k=p?Lm:bo(o,c),O=bo(s,c),I,F,Q;for(Lm=O;;){if(!(k|O))return[o,s];if(k&O)return!1;I=k||O,F=Fs(o,s,I,c,_),Q=bo(F,c),I===k?(o=F,k=Q):(s=F,O=Q)}}function Fs(o,s,c,p,_){var k=s.x-o.x,O=s.y-o.y,I=p.min,F=p.max,Q,ue;return c&8?(Q=o.x+k*(F.y-o.y)/O,ue=F.y):c&4?(Q=o.x+k*(I.y-o.y)/O,ue=I.y):c&2?(Q=F.x,ue=o.y+O*(F.x-o.x)/k):c&1&&(Q=I.x,ue=o.y+O*(I.x-o.x)/k),new D(Q,ue,_)}function bo(o,s){var c=0;return o.x<s.min.x?c|=1:o.x>s.max.x&&(c|=2),o.y<s.min.y?c|=4:o.y>s.max.y&&(c|=8),c}function vw(o,s){var c=s.x-o.x,p=s.y-o.y;return c*c+p*p}function pa(o,s,c,p){var _=s.x,k=s.y,O=c.x-_,I=c.y-k,F=O*O+I*I,Q;return F>0&&(Q=((o.x-_)*O+(o.y-k)*I)/F,Q>1?(_=c.x,k=c.y):Q>0&&(_+=O*Q,k+=I*Q)),O=o.x-_,I=o.y-k,p?O*O+I*I:new D(_,k)}function fn(o){return!S(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Am(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),fn(o)}function Bm(o,s){var c,p,_,k,O,I,F,Q;if(!o||o.length===0)throw new Error("latlngs not passed");fn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ue=[];for(var xe in o)ue.push(s.project(oe(o[xe])));var Ee=ue.length;for(c=0,p=0;c<Ee-1;c++)p+=ue[c].distanceTo(ue[c+1])/2;if(p===0)Q=ue[0];else for(c=0,k=0;c<Ee-1;c++)if(O=ue[c],I=ue[c+1],_=O.distanceTo(I),k+=_,k>p){F=(k-p)/_,Q=[I.x-F*(I.x-O.x),I.y-F*(I.y-O.y)];break}return s.unproject(K(Q))}var yw={__proto__:null,simplify:Tm,pointToSegmentDistance:zm,closestPointOnSegment:mw,clipSegment:Rm,_getEdgeIntersection:Fs,_getBitCode:bo,_sqClosestPointOnSegment:pa,isFlat:fn,_flat:Am,polylineCenter:Bm};function Nm(o,s,c){var p,_=[1,4,2,8],k,O,I,F,Q,ue,xe,Ee;for(k=0,ue=o.length;k<ue;k++)o[k]._code=bo(o[k],s);for(I=0;I<4;I++){for(xe=_[I],p=[],k=0,ue=o.length,O=ue-1;k<ue;O=k++)F=o[k],Q=o[O],F._code&xe?Q._code&xe||(Ee=Fs(Q,F,xe,s,c),Ee._code=bo(Ee,s),p.push(Ee)):(Q._code&xe&&(Ee=Fs(Q,F,xe,s,c),Ee._code=bo(Ee,s),p.push(Ee)),p.push(F));o=p}return o}function Im(o,s){var c,p,_,k,O,I,F,Q,ue;if(!o||o.length===0)throw new Error("latlngs not passed");fn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var xe=[];for(var Ee in o)xe.push(s.project(oe(o[Ee])));var pn=xe.length;for(I=F=Q=0,c=0,p=pn-1;c<pn;p=c++)_=xe[c],k=xe[p],O=_.y*k.x-k.y*_.x,F+=(_.x+k.x)*O,Q+=(_.y+k.y)*O,I+=O*3;return I===0?ue=xe[0]:ue=[F/I,Q/I],s.unproject(K(ue))}var bw={__proto__:null,clipPolygon:Nm,polygonCenter:Im},Kc={project:function(o){return new D(o.lng,o.lat)},unproject:function(o){return new te(o.y,o.x)},bounds:new E([-180,-90],[180,90])},Qc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new E([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,c=this.R,p=o.lat*s,_=this.R_MINOR/c,k=Math.sqrt(1-_*_),O=k*Math.sin(p),I=Math.tan(Math.PI/4-p/2)/Math.pow((1-O)/(1+O),k/2);return p=-c*Math.log(Math.max(I,1e-10)),new D(o.lng*s*c,p)},unproject:function(o){for(var s=180/Math.PI,c=this.R,p=this.R_MINOR/c,_=Math.sqrt(1-p*p),k=Math.exp(-o.y/c),O=Math.PI/2-2*Math.atan(k),I=0,F=.1,Q;I<15&&Math.abs(F)>1e-7;I++)Q=_*Math.sin(O),Q=Math.pow((1-Q)/(1+Q),_/2),F=Math.PI/2-2*Math.atan(k*Q)-O,O+=F;return new te(O*s,o.x*s/c)}},xw={__proto__:null,LonLat:Kc,Mercator:Qc,SphericalMercator:he},ww=i({},ye,{code:"EPSG:3395",projection:Qc,transformation:function(){var o=.5/(Math.PI*Qc.R);return Le(o,.5,-o,.5)}()}),Mm=i({},ye,{code:"EPSG:4326",projection:Kc,transformation:Le(1/180,1,-1/180,.5)}),kw=i({},le,{projection:Kc,transformation:Le(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var c=s.lng-o.lng,p=s.lat-o.lat;return Math.sqrt(c*c+p*p)},infinite:!0});le.Earth=ye,le.EPSG3395=ww,le.EPSG3857=qe,le.EPSG900913=Ce,le.EPSG4326=Mm,le.Simple=kw;var kn=M.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});ze.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},_addLayers:function(o){o=o?S(o)?o:[o]:[];for(var s=0,c=o.length;s<c;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var _=this._zoomBoundLayers[p].options;o=_.minZoom===void 0?o:Math.min(o,_.minZoom),s=_.maxZoom===void 0?s:Math.max(s,_.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ri=kn.extend({initialize:function(o,s){v(this,s),this._layers={};var c,p;if(o)for(c=0,p=o.length;c<p;c++)this.addLayer(o[c])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[o]&&p[o].apply(p,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),Sw=function(o,s){return new ri(o,s)},ar=ri.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),ri.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),ri.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new R;for(var s in this._layers){var c=this._layers[s];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),Pw=function(o,s){return new ar(o,s)},oi=ee.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){v(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(p,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(o,s){var c=this.options,p=c[s+"Size"];typeof p=="number"&&(p=[p,p]);var _=K(p),k=K(s==="shadow"&&c.shadowAnchor||c.iconAnchor||_&&_.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(c.className||""),k&&(o.style.marginLeft=-k.x+"px",o.style.marginTop=-k.y+"px"),_&&(o.style.width=_.x+"px",o.style.height=_.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return de.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function Cw(o){return new oi(o)}var ha=oi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof ha.imagePath!="string"&&(ha.imagePath=this._detectIconPath()),(this.options.imagePath||ha.imagePath)+oi.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(c,p,_){var k=p.exec(c);return k&&k[_]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Ie("div","leaflet-default-icon-path",document.body),s=sa(o,"background-image")||sa(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Dm=Un.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new Tr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Se(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ot(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,c=s._map,p=this._marker.options.autoPanSpeed,_=this._marker.options.autoPanPadding,k=go(s._icon),O=c.getPixelBounds(),I=c.getPixelOrigin(),F=N(O.min._subtract(I).add(_),O.max._subtract(I).subtract(_));if(!F.contains(k)){var Q=K((Math.max(F.max.x,k.x)-F.max.x)/(O.max.x-F.max.x)-(Math.min(F.min.x,k.x)-F.min.x)/(O.min.x-F.min.x),(Math.max(F.max.y,k.y)-F.max.y)/(O.max.y-F.max.y)-(Math.min(F.min.y,k.y)-F.min.y)/(O.min.y-F.min.y)).multiplyBy(p);c.panBy(Q,{animate:!1}),this._draggable._newPos._add(Q),this._draggable._startPos._add(Q),ut(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=X(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(ne(this._panRequest),this._panRequest=X(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,c=s._shadow,p=go(s._icon),_=s._map.layerPointToLatLng(p);c&&ut(c,p),s._latlng=_,o.latlng=_,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){ne(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),js=kn.extend({options:{icon:new ha,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){v(this,s),this._latlng=oe(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=oe(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),Se(c,s),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ke(c,"focus",this._panOnFocus,this);var _=o.icon.createShadow(this._shadow),k=!1;_!==this._shadow&&(this._removeShadow(),k=!0),_&&(Se(_,s),_.alt=""),this._shadow=_,o.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),_&&k&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&We(this._icon,"focus",this._panOnFocus,this),Je(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Je(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&ut(this._icon,o),this._shadow&&ut(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Se(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Dm)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Dm(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&dn(this._icon,o),this._shadow&&dn(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,c=s.iconSize?K(s.iconSize):K(0,0),p=s.iconAnchor?K(s.iconAnchor):K(0,0);o.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Ew(o,s){return new js(o,s)}var zr=kn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return v(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Us=zr.extend({options:{fill:!0,radius:10},initialize:function(o,s){v(this,s),this._latlng=oe(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=oe(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return zr.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,c=this._clickTolerance(),p=[o+c,s+c];this._pxBounds=new E(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Ow(o,s){return new Us(o,s)}var Gc=Us.extend({initialize:function(o,s,c){if(typeof s=="number"&&(s=i({},c,{radius:s})),v(this,s),this._latlng=oe(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new R(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:zr.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===ye.distance){var _=Math.PI/180,k=this._mRadius/ye.R/_,O=c.project([s+k,o]),I=c.project([s-k,o]),F=O.add(I).divideBy(2),Q=c.unproject(F).lat,ue=Math.acos((Math.cos(k*_)-Math.sin(s*_)*Math.sin(Q*_))/(Math.cos(s*_)*Math.cos(Q*_)))/_;(isNaN(ue)||ue===0)&&(ue=k/Math.cos(Math.PI/180*s)),this._point=F.subtract(c.getPixelOrigin()),this._radius=isNaN(ue)?0:F.x-c.project([Q,o-ue]).x,this._radiusY=F.y-O.y}else{var xe=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(xe).x}this._updateBounds()}});function Tw(o,s,c){return new Gc(o,s,c)}var sr=zr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){v(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,c=null,p=pa,_,k,O=0,I=this._parts.length;O<I;O++)for(var F=this._parts[O],Q=1,ue=F.length;Q<ue;Q++){_=F[Q-1],k=F[Q];var xe=p(o,_,k,!0);xe<s&&(s=xe,c=p(o,_,k))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Bm(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=oe(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new R,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return fn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],c=fn(o),p=0,_=o.length;p<_;p++)c?(s[p]=oe(o[p]),this._bounds.extend(s[p])):s[p]=this._convertLatLngs(o[p]);return s},_project:function(){var o=new E;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new D(o,o);this._rawPxBounds&&(this._pxBounds=new E([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,c){var p=o[0]instanceof te,_=o.length,k,O;if(p){for(O=[],k=0;k<_;k++)O[k]=this._map.latLngToLayerPoint(o[k]),c.extend(O[k]);s.push(O)}else for(k=0;k<_;k++)this._projectLatlngs(o[k],s,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,p,_,k,O,I,F;for(c=0,_=0,k=this._rings.length;c<k;c++)for(F=this._rings[c],p=0,O=F.length;p<O-1;p++)I=Rm(F[p],F[p+1],o,p,!0),I&&(s[_]=s[_]||[],s[_].push(I[0]),(I[1]!==F[p+1]||p===O-2)&&(s[_].push(I[1]),_++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,c=0,p=o.length;c<p;c++)o[c]=Tm(o[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var c,p,_,k,O,I,F=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,k=this._parts.length;c<k;c++)for(I=this._parts[c],p=0,O=I.length,_=O-1;p<O;_=p++)if(!(!s&&p===0)&&zm(o,I[_],I[p])<=F)return!0;return!1}});function zw(o,s){return new sr(o,s)}sr._flat=Am;var ii=sr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Im(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=sr.prototype._convertLatLngs.call(this,o),c=s.length;return c>=2&&s[0]instanceof te&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(o){sr.prototype._setLatLngs.call(this,o),fn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return fn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,c=new D(s,s);if(o=new E(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,_=this._rings.length,k;p<_;p++)k=Nm(this._rings[p],o,!0),k.length&&this._parts.push(k)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,c,p,_,k,O,I,F,Q;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(k=0,F=this._parts.length;k<F;k++)for(c=this._parts[k],O=0,Q=c.length,I=Q-1;O<Q;I=O++)p=c[O],_=c[I],p.y>o.y!=_.y>o.y&&o.x<(_.x-p.x)*(o.y-p.y)/(_.y-p.y)+p.x&&(s=!s);return s||sr.prototype._containsPoint.call(this,o,!0)}});function Lw(o,s){return new ii(o,s)}var lr=ar.extend({initialize:function(o,s){v(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=S(o)?o:o.features,c,p,_;if(s){for(c=0,p=s.length;c<p;c++)_=s[c],(_.geometries||_.geometry||_.features||_.coordinates)&&this.addData(_);return this}var k=this.options;if(k.filter&&!k.filter(o))return this;var O=$s(o,k);return O?(O.feature=Zs(o),O.defaultOptions=O.options,this.resetStyle(O),k.onEachFeature&&k.onEachFeature(o,O),this.addLayer(O)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function $s(o,s){var c=o.type==="Feature"?o.geometry:o,p=c?c.coordinates:null,_=[],k=s&&s.pointToLayer,O=s&&s.coordsToLatLng||Jc,I,F,Q,ue;if(!p&&!c)return null;switch(c.type){case"Point":return I=O(p),Fm(k,o,I,s);case"MultiPoint":for(Q=0,ue=p.length;Q<ue;Q++)I=O(p[Q]),_.push(Fm(k,o,I,s));return new ar(_);case"LineString":case"MultiLineString":return F=Ws(p,c.type==="LineString"?0:1,O),new sr(F,s);case"Polygon":case"MultiPolygon":return F=Ws(p,c.type==="Polygon"?1:2,O),new ii(F,s);case"GeometryCollection":for(Q=0,ue=c.geometries.length;Q<ue;Q++){var xe=$s({geometry:c.geometries[Q],type:"Feature",properties:o.properties},s);xe&&_.push(xe)}return new ar(_);case"FeatureCollection":for(Q=0,ue=c.features.length;Q<ue;Q++){var Ee=$s(c.features[Q],s);Ee&&_.push(Ee)}return new ar(_);default:throw new Error("Invalid GeoJSON object.")}}function Fm(o,s,c,p){return o?o(s,c):new js(c,p&&p.markersInheritOptions&&p)}function Jc(o){return new te(o[1],o[0],o[2])}function Ws(o,s,c){for(var p=[],_=0,k=o.length,O;_<k;_++)O=s?Ws(o[_],s-1,c):(c||Jc)(o[_]),p.push(O);return p}function Xc(o,s){return o=oe(o),o.alt!==void 0?[g(o.lng,s),g(o.lat,s),g(o.alt,s)]:[g(o.lng,s),g(o.lat,s)]}function Hs(o,s,c,p){for(var _=[],k=0,O=o.length;k<O;k++)_.push(s?Hs(o[k],fn(o[k])?0:s-1,c,p):Xc(o[k],p));return!s&&c&&_.push(_[0].slice()),_}function ai(o,s){return o.feature?i({},o.feature,{geometry:s}):Zs(s)}function Zs(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var Yc={toGeoJSON:function(o){return ai(this,{type:"Point",coordinates:Xc(this.getLatLng(),o)})}};js.include(Yc),Gc.include(Yc),Us.include(Yc),sr.include({toGeoJSON:function(o){var s=!fn(this._latlngs),c=Hs(this._latlngs,s?1:0,!1,o);return ai(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),ii.include({toGeoJSON:function(o){var s=!fn(this._latlngs),c=s&&!fn(this._latlngs[0]),p=Hs(this._latlngs,c?2:s?1:0,!0,o);return s||(p=[p]),ai(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),ri.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(o).geometry.coordinates)}),ai(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var c=s==="GeometryCollection",p=[];return this.eachLayer(function(_){if(_.toGeoJSON){var k=_.toGeoJSON(o);if(c)p.push(k.geometry);else{var O=Zs(k);O.type==="FeatureCollection"?p.push.apply(p,O.features):p.push(O)}}}),c?ai(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function jm(o,s){return new lr(o,s)}var Rw=jm,Vs=kn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,c){this._url=o,this._bounds=V(s),v(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Se(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Je(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&ti(this._image),this},bringToBack:function(){return this._map&&ni(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=V(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Ie("img");if(Se(s,"leaflet-image-layer"),this._zoomAnimated&&Se(s,"leaflet-zoom-animated"),this.options.className&&Se(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;_o(this._image,c,s)},_reset:function(){var o=this._image,s=new E(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();ut(o,s.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){dn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),Aw=function(o,s,c){return new Vs(o,s,c)},Um=Vs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Ie("video");if(Se(s,"leaflet-image-layer"),this._zoomAnimated&&Se(s,"leaflet-zoom-animated"),this.options.className&&Se(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onloadeddata=l(this.fire,this,"load"),o){for(var c=s.getElementsByTagName("source"),p=[],_=0;_<c.length;_++)p.push(c[_].src);this._url=c.length>0?p:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var k=0;k<this._url.length;k++){var O=Ie("source");O.src=this._url[k],s.appendChild(O)}}});function Bw(o,s,c){return new Um(o,s,c)}var $m=Vs.extend({_initImage:function(){var o=this._image=this._url;Se(o,"leaflet-image-layer"),this._zoomAnimated&&Se(o,"leaflet-zoom-animated"),this.options.className&&Se(o,this.options.className),o.onselectstart=m,o.onmousemove=m}});function Nw(o,s,c){return new $m(o,s,c)}var $n=kn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof te||S(o))?(this._latlng=oe(o),v(this,s)):(v(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&dn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&dn(this._container,1),this.bringToFront(),this.options.interactive&&(Se(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(dn(this._container,0),this._removeTimeout=setTimeout(l(Je,void 0,this._container),200)):Je(this._container),this.options.interactive&&(ot(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=oe(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ti(this._container),this},bringToBack:function(){return this._map&&ni(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof ar){s=null;var c=this._source._layers;for(var p in c)if(c[p]._map){s=c[p];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=K(this.options.offset),c=this._getAnchor();this._zoomAnimated?ut(this._container,o.add(c)):s=s.add(o).add(c);var p=this._containerBottom=-s.y,_=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=p+"px",this._container.style.left=_+"px"}},_getAnchor:function(){return[0,0]}});ze.include({_initOverlay:function(o,s,c,p){var _=s;return _ instanceof o||(_=new o(p).setContent(s)),c&&_.setLatLng(c),_}}),kn.include({_initOverlay:function(o,s,c,p){var _=c;return _ instanceof o?(v(_,p),_._source=this):(_=s&&!p?s:new o(p,this),_.setContent(c)),_}});var qs=$n.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,$n.prototype.openOn.call(this,o)},onAdd:function(o){$n.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof zr||this._source.on("preclick",vo))},onRemove:function(o){$n.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof zr||this._source.off("preclick",vo))},getEvents:function(){var o=$n.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Ie("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Ie("div",o+"-content-wrapper",s);if(this._contentNode=Ie("div",o+"-content",c),da(s),Wc(this._contentNode),ke(s,"contextmenu",vo),this._tipContainer=Ie("div",o+"-tip-container",s),this._tip=Ie("div",o+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Ie("a",o+"-close-button",s);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',ke(p,"click",function(_){kt(_),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var p=o.offsetHeight,_=this.options.maxHeight,k="leaflet-popup-scrolled";_&&p>_?(s.height=_+"px",Se(o,k)):ot(o,k),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();ut(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,s=parseInt(sa(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,p=this._containerWidth,_=new D(this._containerLeft,-c-this._containerBottom);_._add(go(this._container));var k=o.layerPointToContainerPoint(_),O=K(this.options.autoPanPadding),I=K(this.options.autoPanPaddingTopLeft||O),F=K(this.options.autoPanPaddingBottomRight||O),Q=o.getSize(),ue=0,xe=0;k.x+p+F.x>Q.x&&(ue=k.x+p-Q.x+F.x),k.x-ue-I.x<0&&(ue=k.x-I.x),k.y+c+F.y>Q.y&&(xe=k.y+c-Q.y+F.y),k.y-xe-I.y<0&&(xe=k.y-I.y),(ue||xe)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([ue,xe]))}},_getAnchor:function(){return K(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Iw=function(o,s){return new qs(o,s)};ze.mergeOptions({closePopupOnClick:!0}),ze.include({openPopup:function(o,s,c){return this._initOverlay(qs,o,s,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),kn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(qs,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof ar||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){yo(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof zr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var Ks=$n.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){$n.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){$n.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=$n.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ie("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,c,p=this._map,_=this._container,k=p.latLngToContainerPoint(p.getCenter()),O=p.layerPointToContainerPoint(o),I=this.options.direction,F=_.offsetWidth,Q=_.offsetHeight,ue=K(this.options.offset),xe=this._getAnchor();I==="top"?(s=F/2,c=Q):I==="bottom"?(s=F/2,c=0):I==="center"?(s=F/2,c=Q/2):I==="right"?(s=0,c=Q/2):I==="left"?(s=F,c=Q/2):O.x<k.x?(I="right",s=0,c=Q/2):(I="left",s=F+(ue.x+xe.x)*2,c=Q/2),o=o.subtract(K(s,c,!0)).add(ue).add(xe),ot(_,"leaflet-tooltip-right"),ot(_,"leaflet-tooltip-left"),ot(_,"leaflet-tooltip-top"),ot(_,"leaflet-tooltip-bottom"),Se(_,"leaflet-tooltip-"+I),ut(_,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&dn(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return K(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Mw=function(o,s){return new Ks(o,s)};ze.include({openTooltip:function(o,s,c){return this._initOverlay(Ks,o,s,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),kn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ks,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof ar||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(ke(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),ke(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,c,p;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),p=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(s)}});var Wm=oi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Bs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=K(c.bgPos);s.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Dw(o){return new Wm(o)}oi.Default=ha;var ma=kn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:de.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){v(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),Je(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ti(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ni(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof D?o:new D(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,c=-o(-1/0,1/0),p=0,_=s.length,k;p<_;p++)k=s[p].style.zIndex,s[p]!==this._container&&k&&(c=o(c,+k));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!de.ielt9){dn(this._container,this.options.opacity);var o=+new Date,s=!1,c=!1;for(var p in this._tiles){var _=this._tiles[p];if(!(!_.current||!_.loaded)){var k=Math.min(1,(o-_.loaded)/200);dn(_.el,k),k<1?s=!0:(_.active?c=!0:this._onOpaqueTile(_),_.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(ne(this._fadeFrame),this._fadeFrame=X(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=Ie("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=s-Math.abs(o-c),this._onUpdateLevel(c)):(Je(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[o],_=this._map;return p||(p=this._levels[o]={},p.el=Ie("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=s,p.origin=_.project(_.unproject(_.getPixelOrigin()),o).round(),p.zoom=o,this._setZoomTransform(p,_.getCenter(),_.getZoom()),m(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var o,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var p=s.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)Je(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,c,p){var _=Math.floor(o/2),k=Math.floor(s/2),O=c-1,I=new D(+_,+k);I.z=+O;var F=this._tileCoordsToKey(I),Q=this._tiles[F];return Q&&Q.active?(Q.retain=!0,!0):(Q&&Q.loaded&&(Q.retain=!0),O>p?this._retainParent(_,k,O,p):!1)},_retainChildren:function(o,s,c,p){for(var _=2*o;_<2*o+2;_++)for(var k=2*s;k<2*s+2;k++){var O=new D(_,k);O.z=c+1;var I=this._tileCoordsToKey(O),F=this._tiles[I];if(F&&F.active){F.retain=!0;continue}else F&&F.loaded&&(F.retain=!0);c+1<p&&this._retainChildren(_,k,c+1,p)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,c,p){var _=Math.round(s);this.options.maxZoom!==void 0&&_>this.options.maxZoom||this.options.minZoom!==void 0&&_<this.options.minZoom?_=void 0:_=this._clampZoom(_);var k=this.options.updateWhenZooming&&_!==this._tileZoom;(!p||k)&&(this._tileZoom=_,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),_!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,s)},_setZoomTransform:function(o,s,c){var p=this._map.getZoomScale(c,o.zoom),_=o.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(s,c)).round();de.any3d?_o(o.el,_,p):ut(o.el,_)},_resetGrid:function(){var o=this._map,s=o.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,_=this._map.getPixelWorldBounds(this._tileZoom);_&&(this._globalTileRange=this._pxBoundsToTileRange(_)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],p).x/c.x),Math.ceil(o.project([0,s.wrapLng[1]],p).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],p).y/c.x),Math.ceil(o.project([s.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),p=s.getZoomScale(c,this._tileZoom),_=s.project(o,this._tileZoom).floor(),k=s.getSize().divideBy(p*2);return new E(_.subtract(k),_.add(k))},_update:function(o){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(o),_=this._pxBoundsToTileRange(p),k=_.getCenter(),O=[],I=this.options.keepBuffer,F=new E(_.getBottomLeft().subtract([I,-I]),_.getTopRight().add([I,-I]));if(!(isFinite(_.min.x)&&isFinite(_.min.y)&&isFinite(_.max.x)&&isFinite(_.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var Q in this._tiles){var ue=this._tiles[Q].coords;(ue.z!==this._tileZoom||!F.contains(new D(ue.x,ue.y)))&&(this._tiles[Q].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var xe=_.min.y;xe<=_.max.y;xe++)for(var Ee=_.min.x;Ee<=_.max.x;Ee++){var pn=new D(Ee,xe);if(pn.z=this._tileZoom,!!this._isValidTile(pn)){var xo=this._tiles[this._tileCoordsToKey(pn)];xo?xo.current=!0:O.push(pn)}}if(O.sort(function(Lr,ed){return Lr.distanceTo(k)-ed.distanceTo(k)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Gs=document.createDocumentFragment();for(Ee=0;Ee<O.length;Ee++)this._addTile(O[Ee],Gs);this._level.el.appendChild(Gs)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!s.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(o);return V(this.options.bounds).overlaps(p)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,c=this.getTileSize(),p=o.scaleBy(c),_=p.add(c),k=s.unproject(p,o.z),O=s.unproject(_,o.z);return[k,O]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),c=new R(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),c=new D(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(o){var s=this._tiles[o];s&&(Je(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){Se(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=m,o.onmousemove=m,de.ielt9&&this.options.opacity<1&&dn(o,this.options.opacity)},_addTile:function(o,s){var c=this._getTilePos(o),p=this._tileCoordsToKey(o),_=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(_),this.createTile.length<2&&X(l(this._tileReady,this,o,null,_)),ut(_,c),this._tiles[p]={el:_,coords:o,current:!0},s.appendChild(_),this.fire("tileloadstart",{tile:_,coords:o})},_tileReady:function(o,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:o});var p=this._tileCoordsToKey(o);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(dn(c.el,0),ne(this._fadeFrame),this._fadeFrame=X(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(Se(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),de.ielt9||!this._map._fadeAnimated?X(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new D(this._wrapX?h(o.x,this._wrapX):o.x,this._wrapY?h(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new E(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function Fw(o){return new ma(o)}var si=ma.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=v(this,s),s.detectRetina&&de.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var c=document.createElement("img");return ke(c,"load",l(this._tileOnLoad,this,s,c)),ke(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var s={r:de.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,i(s,this.options))},_tileOnLoad:function(o,s){de.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,c){var p=this.options.errorTileUrl;p&&s.getAttribute("src")!==p&&(s.src=p),o(c,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(o=s-o),o+p},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=m,s.onerror=m,!s.complete)){s.src=z;var c=this._tiles[o].coords;Je(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",z),ma.prototype._removeTile.call(this,o)},_tileReady:function(o,s,c){if(!(!this._map||c&&c.getAttribute("src")===z))return ma.prototype._tileReady.call(this,o,s,c)}});function Hm(o,s){return new si(o,s)}var Zm=si.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var c=i({},this.defaultWmsParams);for(var p in s)p in this.options||(c[p]=s[p]);s=v(this,s);var _=s.detectRetina&&de.retina?2:1,k=this.getTileSize();c.width=k.x*_,c.height=k.y*_,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,si.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),c=this._crs,p=N(c.project(s[0]),c.project(s[1])),_=p.min,k=p.max,O=(this._wmsVersion>=1.3&&this._crs===Mm?[_.y,_.x,k.y,k.x]:[_.x,_.y,k.x,k.y]).join(","),I=si.prototype.getTileUrl.call(this,o);return I+P(this.wmsParams,I,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function jw(o,s){return new Zm(o,s)}si.WMS=Zm,Hm.wms=jw;var ur=kn.extend({options:{padding:.1},initialize:function(o){v(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Se(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var c=this._map.getZoomScale(s,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),_=this._map.project(this._center,s),k=p.multiplyBy(-c).add(_).subtract(this._map._getNewPixelOrigin(o,s));de.any3d?_o(this._container,k,c):ut(this._container,k)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new E(c,c.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Vm=ur.extend({options:{tolerance:0},getEvents:function(){var o=ur.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ur.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");ke(o,"mousemove",this._onMouseMove,this),ke(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ke(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){ne(this._redrawRequest),delete this._ctx,Je(this._container),We(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ur.prototype._update.call(this);var o=this._bounds,s=this._container,c=o.getSize(),p=de.retina?2:1;ut(s,o.min),s.width=p*c.x,s.height=p*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",de.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){ur.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,c=s.next,p=s.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),c=[],p,_;for(_=0;_<s.length;_++){if(p=Number(s[_]),isNaN(p))return;c.push(p)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||X(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new E,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)o=p.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var c,p,_,k,O=o._parts,I=O.length,F=this._ctx;if(I){for(F.beginPath(),c=0;c<I;c++){for(p=0,_=O[c].length;p<_;p++)k=O[c][p],F[p?"lineTo":"moveTo"](k.x,k.y);s&&F.closePath()}this._fillStroke(F,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,c=this._ctx,p=Math.max(Math.round(o._radius),1),_=(Math.max(Math.round(o._radiusY),1)||p)/p;_!==1&&(c.save(),c.scale(1,_)),c.beginPath(),c.arc(s.x,s.y/_,p,0,Math.PI*2,!1),_!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,s){var c=s.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),c,p,_=this._drawFirst;_;_=_.next)c=_.layer,c.options.interactive&&c._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(ot(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var c,p,_=this._drawFirst;_;_=_.next)c=_.layer,c.options.interactive&&c._containsPoint(s)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(o),p&&(Se(this._container,"leaflet-interactive"),this._fireEvent([p],o,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,c){this._map._fireDOMEvent(s,c||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function qm(o){return de.canvas?new Vm(o):null}var _a=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Uw={_initContainer:function(){this._container=Ie("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ur.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=_a("shape");Se(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=_a("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;Je(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,c=o._fill,p=o.options,_=o._container;_.stroked=!!p.stroke,_.filled=!!p.fill,p.stroke?(s||(s=o._stroke=_a("stroke")),_.appendChild(s),s.weight=p.weight+"px",s.color=p.color,s.opacity=p.opacity,p.dashArray?s.dashStyle=S(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=p.lineCap.replace("butt","flat"),s.joinstyle=p.lineJoin):s&&(_.removeChild(s),o._stroke=null),p.fill?(c||(c=o._fill=_a("fill")),_.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(_.removeChild(c),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),c=Math.round(o._radius),p=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){ti(o._container)},_bringToBack:function(o){ni(o._container)}},Qs=de.vml?_a:lt,ga=ur.extend({_initContainer:function(){this._container=Qs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Qs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Je(this._container),We(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ur.prototype._update.call(this);var o=this._bounds,s=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),ut(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=Qs("path");o.options.className&&Se(s,o.options.className),o.options.interactive&&Se(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){Je(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,c=o.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,_t(o._parts,s))},_updateCircle:function(o){var s=o._point,c=Math.max(Math.round(o._radius),1),p=Math.max(Math.round(o._radiusY),1)||c,_="a"+c+","+p+" 0 1,0 ",k=o._empty()?"M0 0":"M"+(s.x-c)+","+s.y+_+c*2+",0 "+_+-c*2+",0 ";this._setPath(o,k)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){ti(o._path)},_bringToBack:function(o){ni(o._path)}});de.vml&&ga.include(Uw);function Km(o){return de.svg||de.vml?new ga(o):null}ze.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&qm(o)||Km(o)}});var Qm=ii.extend({initialize:function(o,s){ii.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=V(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function $w(o,s){return new Qm(o,s)}ga.create=Qs,ga.pointsToPath=_t,lr.geometryToLayer=$s,lr.coordsToLatLng=Jc,lr.coordsToLatLngs=Ws,lr.latLngToCoords=Xc,lr.latLngsToCoords=Hs,lr.getFeature=ai,lr.asFeature=Zs,ze.mergeOptions({boxZoom:!0});var Gm=Un.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){ke(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){We(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Je(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),la(),Nc(),this._startPoint=this._map.mouseEventToContainerPoint(o),ke(document,{contextmenu:yo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Ie("div","leaflet-zoom-box",this._container),Se(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new E(this._point,this._startPoint),c=s.getSize();ut(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Je(this._box),ot(this._container,"leaflet-crosshair")),ua(),Ic(),We(document,{contextmenu:yo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new R(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ze.addInitHook("addHandler","boxZoom",Gm),ze.mergeOptions({doubleClickZoom:!0});var Jm=Un.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,c=s.getZoom(),p=s.options.zoomDelta,_=o.originalEvent.shiftKey?c-p:c+p;s.options.doubleClickZoom==="center"?s.setZoom(_):s.setZoomAround(o.containerPoint,_)}});ze.addInitHook("addHandler","doubleClickZoom",Jm),ze.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Xm=Un.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new Tr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}Se(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ot(this._map._container,"leaflet-grab"),ot(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=V(this._map.options.maxBounds);this._offsetLimit=N(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,_=(p-s+c)%o+s-c,k=(p+s+c)%o-s-c,O=Math.abs(_+c)<Math.abs(k+c)?_:k;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(o){var s=this._map,c=s.options,p=!c.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),p)s.fire("moveend");else{this._prunePositions(+new Date);var _=this._lastPos.subtract(this._positions[0]),k=(this._lastTime-this._times[0])/1e3,O=c.easeLinearity,I=_.multiplyBy(O/k),F=I.distanceTo([0,0]),Q=Math.min(c.inertiaMaxSpeed,F),ue=I.multiplyBy(Q/F),xe=Q/(c.inertiaDeceleration*O),Ee=ue.multiplyBy(-xe/2).round();!Ee.x&&!Ee.y?s.fire("moveend"):(Ee=s._limitOffset(Ee,s.options.maxBounds),X(function(){s.panBy(Ee,{duration:xe,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});ze.addInitHook("addHandler","dragging",Xm),ze.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ym=Un.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),ke(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),We(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,c=o.scrollTop||s.scrollTop,p=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},c=this.keyCodes,p,_;for(p=0,_=c.left.length;p<_;p++)s[c.left[p]]=[-1*o,0];for(p=0,_=c.right.length;p<_;p++)s[c.right[p]]=[o,0];for(p=0,_=c.down.length;p<_;p++)s[c.down[p]]=[0,o];for(p=0,_=c.up.length;p<_;p++)s[c.up[p]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},c=this.keyCodes,p,_;for(p=0,_=c.zoomIn.length;p<_;p++)s[c.zoomIn[p]]=o;for(p=0,_=c.zoomOut.length;p<_;p++)s[c.zoomOut[p]]=-o},_addHooks:function(){ke(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){We(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,c=this._map,p;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[s],o.shiftKey&&(p=K(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(K(p),c.options.maxBounds)),c.options.worldCopyJump){var _=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(_)}else c.panBy(p)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;yo(o)}}});ze.addInitHook("addHandler","keyboard",Ym),ze.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var e_=Un.extend({addHooks:function(){ke(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){We(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=Sm(o),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),p),yo(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),_=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,k=c?Math.ceil(_/c)*c:_,O=o._limitZoom(s+(this._delta>0?k:-k))-s;this._delta=0,this._startTime=null,O&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+O):o.setZoomAround(this._lastMousePos,s+O))}});ze.addInitHook("addHandler","scrollWheelZoom",e_);var Ww=600;ze.mergeOptions({tapHold:de.touchNative&&de.safari&&de.mobile,tapTolerance:15});var t_=Un.extend({addHooks:function(){ke(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){We(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new D(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(ke(document,"touchend",kt),ke(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Ww),ke(document,"touchend touchcancel contextmenu",this._cancel,this),ke(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){We(document,"touchend",kt),We(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),We(document,"touchend touchcancel contextmenu",this._cancel,this),We(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new D(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});ze.addInitHook("addHandler","tapHold",t_),ze.mergeOptions({touchZoom:de.touch,bounceAtZoomLimits:!0});var n_=Un.extend({addHooks:function(){Se(this._map._container,"leaflet-touch-zoom"),ke(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ot(this._map._container,"leaflet-touch-zoom"),We(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),ke(document,"touchmove",this._onTouchMove,this),ke(document,"touchend touchcancel",this._onTouchEnd,this),kt(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]),_=c.distanceTo(p)/this._startDist;if(this._zoom=s.getScaleZoom(_,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&_<1||this._zoom>s.getMaxZoom()&&_>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,_===1)return}else{var k=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(_===1&&k.x===0&&k.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(k),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),ne(this._animRequest);var O=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=X(O,this,!0),kt(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ne(this._animRequest),We(document,"touchmove",this._onTouchMove,this),We(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ze.addInitHook("addHandler","touchZoom",n_),ze.BoxZoom=Gm,ze.DoubleClickZoom=Jm,ze.Drag=Xm,ze.Keyboard=Ym,ze.ScrollWheelZoom=e_,ze.TapHold=t_,ze.TouchZoom=n_,n.Bounds=E,n.Browser=de,n.CRS=le,n.Canvas=Vm,n.Circle=Gc,n.CircleMarker=Us,n.Class=ee,n.Control=wn,n.DivIcon=Wm,n.DivOverlay=$n,n.DomEvent=sw,n.DomUtil=iw,n.Draggable=Tr,n.Evented=M,n.FeatureGroup=ar,n.GeoJSON=lr,n.GridLayer=ma,n.Handler=Un,n.Icon=oi,n.ImageOverlay=Vs,n.LatLng=te,n.LatLngBounds=R,n.Layer=kn,n.LayerGroup=ri,n.LineUtil=yw,n.Map=ze,n.Marker=js,n.Mixin=hw,n.Path=zr,n.Point=D,n.PolyUtil=bw,n.Polygon=ii,n.Polyline=sr,n.Popup=qs,n.PosAnimation=Pm,n.Projection=xw,n.Rectangle=Qm,n.Renderer=ur,n.SVG=ga,n.SVGOverlay=$m,n.TileLayer=si,n.Tooltip=Ks,n.Transformation=be,n.Util=se,n.VideoOverlay=Um,n.bind=l,n.bounds=N,n.canvas=qm,n.circle=Tw,n.circleMarker=Ow,n.control=fa,n.divIcon=Dw,n.extend=i,n.featureGroup=Pw,n.geoJSON=jm,n.geoJson=Rw,n.gridLayer=Fw,n.icon=Cw,n.imageOverlay=Aw,n.latLng=oe,n.latLngBounds=V,n.layerGroup=Sw,n.map=lw,n.marker=Ew,n.point=K,n.polygon=Lw,n.polyline=zw,n.popup=Iw,n.rectangle=$w,n.setOptions=v,n.stamp=d,n.svg=Km,n.svgOverlay=Nw,n.tileLayer=Hm,n.tooltip=Mw,n.transformation=Le,n.version=r,n.videoOverlay=Bw;var Hw=window.L;n.noConflict=function(){return window.L=Hw,this},window.L=n})})(IO,up);var Nd,cp={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Nd={get exports(){return cp},set exports(e){cp=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Nd.exports?(t.default=t,Nd.exports=t):window.classNames=t}();var hv,mv,_v,Bi=cp;function MO(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=T.useState(t(e)),i=()=>{r(t(e))};return T.useEffect(()=>{const a=window.matchMedia(e);return i(),a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[e]),n}function dp(){return dp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dp.apply(this,arguments)}var gv,vv,yv,DO=function(e){return T.createElement("svg",dp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),hv||(hv=T.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),mv||(mv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),_v||(_v=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function fp(){return fp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fp.apply(this,arguments)}var FO=function(e){return T.createElement("svg",fp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),gv||(gv=T.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),vv||(vv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),yv||(yv=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function Te(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Wr,Cn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Te(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Wr||(Wr={}));const jO=({size:e,variant:t})=>{switch(t){case Wr.Info:case Wr.Error:case Wr.Warning:return W.createElement(DO,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Wr.Success:return W.createElement(FO,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},UO=({children:e})=>W.createElement("div",{className:Bi(Cn["panel__pointer-position"])},e),$O=({renderIcon:e=jO,title:t,children:n,variant:r=Wr.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=UO})=>{const d=(({forceMobileLayout:h})=>{const m=MO(`(max-width: ${mO})`);return!!h||m})({forceMobileLayout:l}),f=d?pO:hO;return W.createElement("div",{className:Bi(Cn.panel,{[Cn["panel--mobile-layout"]]:d})},i&&u({children:W.createElement("div",{"data-testid":"panel-pointer",className:Bi(Cn.panel__pointer,Cn[`panel__pointer--${r}`])})}),W.createElement("div",{"data-testid":"panel-content-wrapper",className:Bi(Cn["panel__content-wrapper"],Cn[`panel__content-wrapper--${r}`])},a&&W.createElement("div",{"data-testid":"panel-icon-wrapper",className:Cn["panel__icon-wrapper"]},e({size:f,variant:r})),W.createElement("div",{className:Cn.panel__content},t&&W.createElement("h2",{className:Cn.panel__header},t),W.createElement("div",{className:Cn.panel__body},n))))};Te(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);Te(`.CircularProgress-module_svg__TUYPH {
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
`);Te(`/**
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
`);Te(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}
`);T.createContext(void 0);Te(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
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
`);Te(`.ToggleButton-module_toggle-button__g4lb- {
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
`);var bv;(function(e){e.Primary="primary",e.Secondary="secondary"})(bv||(bv={}));T.createContext(void 0);Te(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);Te(`.AccordionHeader-module_accordion-header__QlYjQ {
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
`);Te(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);function jx(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const xv=e=>{var{svgIconComponent:t}=e,n=jx(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};var pp,hp,mp,Zn={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Te(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(pp||(pp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(hp||(hp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(mp||(mp={}));var wu,ku;T.forwardRef((e,t)=>{var{children:n,color:r=hp.Primary,variant:i=mp.Filled,size:a=pp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:h="button",className:m}=e,g=jx(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return W.createElement("button",Object.assign({},g,{ref:t,className:Bi(Zn["altinn-button"],Zn[`altinn-button--${a}`],Zn[`altinn-button--${i}`],Zn[`altinn-button--${r}`],Zn[`altinn-button--${i}--${r}`],{[Zn["altinn-button--full-width"]]:l},{[Zn["altinn-button--dashed-border"]]:u},{[Zn["altinn-button--only-icon"]]:!n&&f},m),type:h}),f&&d==="left"&&W.createElement(xv,{svgIconComponent:f,className:Zn.icon}),n,f&&d==="right"&&W.createElement(xv,{svgIconComponent:f,className:Zn.icon}))});(function(e){e.Primary="primary",e.Success="success"})(wu||(wu={})),function(e){e.Small="small",e.Medium="medium"}(ku||(ku={}));const WO=T.createContext({color:wu.Primary,size:ku.Medium});var HO="Page-module_page__THNNc";Te(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const ZO=({children:e,color:t=wu.Primary,size:n=ku.Medium})=>W.createElement("div",{className:HO},W.createElement(WO.Provider,{value:{color:t,size:n}},e));Te(`.PageHeader-module_page-header__94GS1 {
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
`);var VO={"page-content":"PageContent-module_page-content__-sHWi"};Te(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const Id=({children:e})=>W.createElement("div",{className:Bi(VO["page-content"])},e);var _p;Te(`.List-module_list__9aWGq {
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
`),function(e){e.Solid="solid",e.Dashed="dashed"}(_p||(_p={}));T.createContext({borderStyle:_p.Solid});Te(`.ListItem-module_list-item__OIENi {
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
`);var wv,kv,Sv;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(wv||(wv={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(kv||(kv={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Sv||(Sv={}));Te(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);Te(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Te(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var gp,Pv;Te(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(gp||(gp={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(Pv||(Pv={}));T.createContext(void 0);T.createContext({variantStandard:gp.Body});Te(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);Te(`.TableRow-module_TableRow__3GK6I {
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
`);Te(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);Te(`.TableCell-module_header-table-cell__NOs4b {
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
`);Te(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var Cv;Te(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Cv||(Cv={}));var Ev;Te(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ev||(Ev={}));Te(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);Te(`.TextArea-module_altinn-TextArea__lzLj9 {
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
`);var Ov;Te(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ov||(Ov={}));var Tv;Te(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Tv||(Tv={}));Te(`.Pagination-module_pagination-icon__zVOLT {
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
`);Te(`.MultiSelectItem-module_altinn-multi-select-item__fb2Ov {
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
`);Te(`.Select-module_altinn-select__678hU {
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
`);Te(`.Tabs-module_altinn-tabs__YJ7fE {
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
`);var zv,Lv;Te(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(zv||(zv={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Lv||(Lv={}));let Rv=0;function qO(e){const[t,n]=T.useState(e),r=e||t;return T.useEffect(()=>{t==null&&(Rv+=1,n(`aksel-icon-${Rv}`))},[t]),r}const Av=W["useId"];function Ux(e){var t;if(Av!==void 0){const n=Av();return e??n.replace(/(:)/g,"")}return(t=qO(e))!==null&&t!==void 0?t:""}var KO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const QO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=KO(e,["title","titleId"]);let a=Ux();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),GO=QO;var JO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const XO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=JO(e,["title","titleId"]);let a=Ux();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),YO=XO;function Qo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Md,$x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Md=$x,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Md.exports?(t.default=t,Md.exports=t):window.classNames=t}();var Ct=$x.exports;const vp=e=>{var{svgIconComponent:t}=e,n=Qo(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};function De(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}vp.displayName="SvgIcon";var dr={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};De(`.Button-module_button__2ZuB7 {\r
  --border-radius: 3px;\r
  --button-size: var(--component-button-size-height-small);\r
  --button-vertical-padding: var(--component-button-space-padding-x-small);\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
  --icon-size: var(--component-button-size-icon-small);\r
\r
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
.Button-module_button__2ZuB7:disabled,\r
.Button-module_button__2ZuB7[aria-disabled='true'] {\r
  cursor: auto;\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.Button-module_button__2ZuB7:focus:not(:focus-visible) {\r
  outline: none;\r
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
\r
  font-size: var(--font_size-300);\r
  gap: var(--component-button-space-gap-small);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_medium__KTxdk {\r
  --button-size: var(--component-button-size-height-medium);\r
  --button-vertical-padding: var(--component-button-space-padding-x-medium);\r
  --icon-size: var(--component-button-size-icon-medium);\r
\r
  font-size: var(--font_size-400-breakpoint_md);\r
  gap: var(--component-button-space-gap-medium);\r
  min-width: var(--component-button-size-height-medium);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_large__6bsb7 {\r
  --button-size: var(--component-button-size-height-large);\r
  --button-vertical-padding: var(--component-button-space-padding-x-large);\r
  --icon-size: var(--component-button-size-icon-large);\r
\r
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
\r
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);\r
  background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_onlyIcon__lENu3 {\r
  padding: 0.5rem;\r
}\r
\r
/* Filled button colors */\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {\r
  background: var(--component-button-filled-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--component-button-filled-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {\r
  background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {\r
  background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--colors-blue-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {\r
  background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {\r
  background: var(--component-button-filled-success-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--component-button-filled-success-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {\r
  background: var(--component-button-filled-success-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {\r
  background: var(--component-button-filled-danger-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--component-button-filled-danger-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {\r
  background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:focus-visible {\r
  outline-color: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: rgb(255 255 255 / 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: rgb(255 255 255 / 0.1);\r
}\r
\r
/* Outline button colors */\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {\r
  --font-and-icon-color: var(\r
    --component-button-outline-primary-color-text-default\r
  );\r
\r
  border-color: var(--component-button-outline-primary-color-border-default);\r
  background: var(--component-button-outline-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-800);\r
\r
  background: var(--component-button-outline-primary-color-background-hover);\r
  border-color: var(--component-button-outline-primary-color-border-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(\r
    --component-button-outline-primary-color-text-pressed\r
  );\r
\r
  background: var(--component-button-outline-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
  border-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--colors-blue-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {\r
  --font-and-icon-color: var(--colors-green-700);\r
\r
  background: var(--colors-white);\r
  border-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-green-800);\r
\r
  background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {\r
  --font-and-icon-color: var(--colors-red-500);\r
\r
  background: var(--colors-white);\r
  border-color: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-red-700);\r
\r
  background: var(--colors-red-100);\r
  border-color: var(--colors-red-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  border-color: var(--colors-white);\r
  background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:focus-visible {\r
  outline-color: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {\r
  background: rgb(255 255 255 / 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
}\r
\r
/* Quiet button colors */\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {\r
  --font-and-icon-color: var(\r
    --component-button-quiet-primary-color-text-default\r
  );\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-800);\r
\r
  background: var(--component-button-quiet-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--component-button-quiet-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {\r
  --font-and-icon-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--colors-grey-300);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {\r
  --font-and-icon-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-green-800);\r
\r
  background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--colors-green-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {\r
  --font-and-icon-color: var(--colors-red-600);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-red-800);\r
\r
  background: var(--colors-red-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:focus-visible {\r
  outline-color: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: rgb(255 255 255 / 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
}\r
`);const eT=T.forwardRef((e,t)=>{var{children:n,color:r="primary",variant:i="filled",size:a="small",fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:h="button",className:m}=e,g=Qo(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return W.createElement("button",Object.assign({},g,{ref:t,className:Ct(dr.button,dr[a],dr[i],dr[r],{[dr.fullWidth]:l},{[dr.dashedBorder]:u},{[dr.onlyIcon]:!n&&f},m),type:h}),f&&d==="left"&&W.createElement(vp,{svgIconComponent:f,className:dr.icon}),n,f&&d==="right"&&W.createElement(vp,{svgIconComponent:f,className:dr.icon}))});eT.displayName="Button";var tT="ErrorMessage-module_errorMessageWrapper__rSdCu";De(`.ErrorMessage-module_errorMessageWrapper__rSdCu {\r
  color: var(--component-error_message-color-text);\r
  font-size: var(--component-error_message-font_size-xs);\r
}\r
`);const Wx=({id:e,children:t,ariaLabel:n})=>W.createElement("div",{"aria-label":n,className:tT,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Bv(e,t){T.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function Dd(e,t){T.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function yp(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}Wx.displayName="ErrorMessage";const Ni=(e,t)=>{const n=T.useRef(!0);T.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function Hx(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Zx(e){return e.length===new Set(e).size}var nT="Tabs-module_tabs__QzIkz",rT="Tabs-module_tablist__WR6ag",oT="Tabs-module_tab__IdDYc",iT="Tabs-module_selected__TxfYv",aT="Tabs-module_divider__-r5Cd",sT="Tabs-module_tabpanel__0vR1c";De(`@import url('https://altinncdn.no/fonts/altinn-din/altinn-din.css');\r
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
\r
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
  outline: var(--semantic-tab_focus-outline-color) auto\r
    var(--semantic-tab_focus-outline-width);\r
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
`);const Nv=e=>e.replace(/\s/,"_"),Vx=({activeTab:e,items:t,onChange:n})=>{const r=T.useId(),i=t.map(({name:v,content:P,value:y,tabId:b,panelId:S})=>{const C=y??v;return{name:v,content:P,value:C,tabId:b??r+Nv(C)+"-tab",panelId:S??r+Nv(C)+"-panel"}});if(!Zx(i.map(({value:v})=>v)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(v=>v.value===e))throw Error("The given active tab value must exist in the list of items.");const a=v=>i.findIndex(P=>P.value===v),l=e??i[0].value,[u,d]=T.useState(l),[f,h]=T.useState(a(l));T.useEffect(()=>d(l),[l]);const m=T.useRef(null),g=i.length-1;Ni(()=>{var v;(v=m.current)===null||v===void 0||v.querySelectorAll('[role="tab"]')[f].focus()},[f]);const x=v=>{u!==v&&n&&n(v),d(v),h(a(v))},w=v=>P=>{switch(P.key){case"ArrowRight":f!==void 0&&h(f===g?0:f+1);break;case"ArrowLeft":f!==void 0&&h(f===0?g:f-1);break;case"Space":x(v)}};return W.createElement("div",{className:nT},W.createElement("div",{className:rT,ref:m,role:"tablist"},i.map((v,P)=>{const y=v.value===u;return W.createElement("button",{"aria-controls":v.panelId,"aria-selected":y,className:Ct(oT,y&&iT),id:v.tabId,key:v.value,onClick:()=>x(v.value),onKeyDown:w(v.value),role:"tab",tabIndex:f===P?0:-1},v.name)})),W.createElement("hr",{className:aT}),i.map(v=>W.createElement("div",{className:sT,"aria-labelledby":v.tabId,hidden:v.value!==u,id:v.panelId,key:v.panelId,role:"tabpanel"},v.content)))};Vx.displayName="Tabs";var Ar={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};De(`.FieldSet-module_fieldSet__GgktD {\r
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
`);const Vh=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,helpText:l,legend:u,size:d="small"})=>W.createElement("fieldset",{className:Ct(Ar.fieldSet,Ar[d],t),disabled:i},u&&W.createElement("legend",{className:Ar.legend},W.createElement("span",{className:Ar.legendAndHelpText},W.createElement("span",{className:Ar.legendContent},u),l&&W.createElement(Xh,{size:d,title:`Help text for ${u}`},l))),r&&W.createElement("p",{className:Ar.description},r),W.createElement("div",{className:Ct(Ar.content,n)},e),a&&W.createElement("div",{className:Ar.errorMessage},W.createElement(Wx,null,a)));function ms(e){return e.split("-")[1]}function qh(e){return e==="y"?"height":"width"}function Do(e){return e.split("-")[0]}function Ts(e){return["top","bottom"].includes(Do(e))?"x":"y"}function Iv(e,t,n){let{reference:r,floating:i}=e;const a=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,u=Ts(t),d=qh(u),f=r[d]/2-i[d]/2,h=u==="x";let m;switch(Do(t)){case"top":m={x:a,y:r.y-i.height};break;case"bottom":m={x:a,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:l};break;case"left":m={x:r.x-i.width,y:l};break;default:m={x:r.x,y:r.y}}switch(ms(t)){case"start":m[u]-=f*(n&&h?-1:1);break;case"end":m[u]+=f*(n&&h?-1:1)}return m}Vh.displayName="FieldSet";function qx(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function bp(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Kx(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:h="viewport",elementContext:m="floating",altBoundary:g=!1,padding:x=0}=t,w=qx(x),v=u[g?m==="floating"?"reference":"floating":m],P=bp(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(v)))==null||n?v:v.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:h,strategy:d})),y=m==="floating"?{...l.floating,x:r,y:i}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},C=bp(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:d}):y);return{top:(P.top-C.top+w.top)/S.y,bottom:(C.bottom-P.bottom+w.bottom)/S.y,left:(P.left-C.left+w.left)/S.x,right:(C.right-P.right+w.right)/S.x}}const lT=Math.min,uT=Math.max;function xp(e,t,n){return uT(e,lT(t,n))}const Mv=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:i,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const f=qx(r),h={x:i,y:a},m=Ts(l),g=qh(m),x=await d.getDimensions(n),w=m==="y"?"top":"left",v=m==="y"?"bottom":"right",P=u.reference[g]+u.reference[m]-h[m]-u.floating[g],y=h[m]-u.reference[m],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let S=b?m==="y"?b.clientHeight||0:b.clientWidth||0:0;S===0&&(S=u.floating[g]);const C=P/2-y/2,z=f[w],B=S-x[g]-f[v],A=S/2-x[g]/2+C,j=xp(z,A,B),Z=ms(l)!=null&&A!=j&&u.reference[g]/2-(A<z?f[w]:f[v])-x[g]/2<0;return{[m]:h[m]-(Z?A<z?z-A:B-A:0),data:{[m]:j,centerOffset:A-j}}}}),cT={left:"right",right:"left",bottom:"top",top:"bottom"};function gl(e){return e.replace(/left|right|bottom|top/g,t=>cT[t])}const dT={start:"end",end:"start"};function Fd(e){return e.replace(/start|end/g,t=>dT[t])}const fT=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:w=!0,...v}=e,P=Do(r),y=Do(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=m||(y||!w?[gl(l)]:function(X){const ne=gl(X);return[Fd(X),ne,Fd(ne)]}(l));m||x==="none"||S.push(...function(X,ne,se,ee){const pe=ms(X);let re=function(M,D,J){const K=["left","right"],E=["right","left"],N=["top","bottom"],R=["bottom","top"];switch(M){case"top":case"bottom":return J?D?E:K:D?K:E;case"left":case"right":return D?N:R;default:return[]}}(Do(X),se==="start",ee);return pe&&(re=re.map(M=>M+"-"+pe),ne&&(re=re.concat(re.map(Fd)))),re}(l,w,x,b));const C=[l,...S],z=await Kx(t,v),B=[];let A=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&B.push(z[P]),h){const{main:X,cross:ne}=function(se,ee,pe){pe===void 0&&(pe=!1);const re=ms(se),M=Ts(se),D=qh(M);let J=M==="x"?re===(pe?"end":"start")?"right":"left":re==="start"?"bottom":"top";return ee.reference[D]>ee.floating[D]&&(J=gl(J)),{main:J,cross:gl(J)}}(r,a,b);B.push(z[X],z[ne])}if(A=[...A,{placement:r,overflows:B}],!B.every(X=>X<=0)){var j,Z;const X=(((j=i.flip)==null?void 0:j.index)||0)+1,ne=C[X];if(ne)return{data:{index:X,overflows:A},reset:{placement:ne}};let se=(Z=A.filter(ee=>ee.overflows[0]<=0).sort((ee,pe)=>ee.overflows[1]-pe.overflows[1])[0])==null?void 0:Z.placement;if(!se)switch(g){case"bestFit":{var $;const ee=($=A.map(pe=>[pe.placement,pe.overflows.filter(re=>re>0).reduce((re,M)=>re+M,0)]).sort((pe,re)=>pe[1]-re[1])[0])==null?void 0:$[0];ee&&(se=ee);break}case"initialPlacement":se=l}if(r!==se)return{reset:{placement:se}}}return{}}}},pT=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await async function(a,l){const{placement:u,platform:d,elements:f}=a,h=await(d.isRTL==null?void 0:d.isRTL(f.floating)),m=Do(u),g=ms(u),x=Ts(u)==="x",w=["left","top"].includes(m)?-1:1,v=h&&x?-1:1,P=typeof l=="function"?l(a):l;let{mainAxis:y,crossAxis:b,alignmentAxis:S}=typeof P=="number"?{mainAxis:P,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...P};return g&&typeof S=="number"&&(b=g==="end"?-1*S:S),x?{x:b*v,y:y*w}:{x:y*w,y:b*v}}(t,e);return{x:n+i.x,y:r+i.y,data:i}}}};function en(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Yn(e){return en(e).getComputedStyle(e)}const Dv=Math.min,qa=Math.max,Su=Math.round;function Qx(e){const t=Yn(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,a=e.offsetHeight,l=Su(n)!==i||Su(r)!==a;return l&&(n=i,r=a),{width:n,height:r,fallback:l}}function lo(e){return Jx(e)?(e.nodeName||"").toLowerCase():""}let vl;function Gx(){if(vl)return vl;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(vl=e.brands.map(t=>t.brand+"/"+t.version).join(" "),vl):navigator.userAgent}function er(e){return e instanceof en(e).HTMLElement}function Bn(e){return e instanceof en(e).Element}function Jx(e){return e instanceof en(e).Node}function Fv(e){return typeof ShadowRoot>"u"?!1:e instanceof en(e).ShadowRoot||e instanceof ShadowRoot}function kc(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Yn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function hT(e){return["table","td","th"].includes(lo(e))}function wp(e){const t=/firefox/i.test(Gx()),n=Yn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const a=n.contain;return a!=null&&a.includes(i)})}function kp(){return/^((?!chrome|android).)*safari/i.test(Gx())}function Kh(e){return["html","body","#document"].includes(lo(e))}function Xx(e){return Bn(e)?e:e.contextElement}const Yx={x:1,y:1};function Ii(e){const t=Xx(e);if(!er(t))return Yx;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=Qx(t);let l=(a?Su(n.width):n.width)/r,u=(a?Su(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function Zo(e,t,n,r){var i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=Xx(e);let d=Yx;t&&(r?Bn(r)&&(d=Ii(r)):d=Ii(e));const f=u?en(u):window,h=kp()&&n;let m=(l.left+(h&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/d.x,g=(l.top+(h&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,x=l.width/d.x,w=l.height/d.y;if(u){const v=en(u),P=r&&Bn(r)?en(r):r;let y=v.frameElement;for(;y&&r&&P!==v;){const b=Ii(y),S=y.getBoundingClientRect(),C=getComputedStyle(y);S.x+=(y.clientLeft+parseFloat(C.paddingLeft))*b.x,S.y+=(y.clientTop+parseFloat(C.paddingTop))*b.y,m*=b.x,g*=b.y,x*=b.x,w*=b.y,m+=S.x,g+=S.y,y=en(y).frameElement}}return{width:x,height:w,top:g,right:m+x,bottom:g+w,left:m,x:m,y:g}}function eo(e){return((Jx(e)?e.ownerDocument:e.document)||window.document).documentElement}function Sc(e){return Bn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function e1(e){return Zo(eo(e)).left+Sc(e).scrollLeft}function _s(e){if(lo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Fv(e)&&e.host||eo(e);return Fv(t)?t.host:t}function t1(e){const t=_s(e);return Kh(t)?t.ownerDocument.body:er(t)&&kc(t)?t:t1(t)}function to(e,t){var n;t===void 0&&(t=[]);const r=t1(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=en(r);return i?t.concat(a,a.visualViewport||[],kc(r)?r:[]):t.concat(r,to(r))}function jv(e,t,n){let r;if(t==="viewport")r=function(l,u){const d=en(l),f=eo(l),h=d.visualViewport;let m=f.clientWidth,g=f.clientHeight,x=0,w=0;if(h){m=h.width,g=h.height;const v=kp();(!v||v&&u==="fixed")&&(x=h.offsetLeft,w=h.offsetTop)}return{width:m,height:g,x,y:w}}(e,n);else if(t==="document")r=function(l){const u=eo(l),d=Sc(l),f=l.ownerDocument.body,h=qa(u.scrollWidth,u.clientWidth,f.scrollWidth,f.clientWidth),m=qa(u.scrollHeight,u.clientHeight,f.scrollHeight,f.clientHeight);let g=-d.scrollLeft+e1(l);const x=-d.scrollTop;return Yn(f).direction==="rtl"&&(g+=qa(u.clientWidth,f.clientWidth)-h),{width:h,height:m,x:g,y:x}}(eo(e));else if(Bn(t))r=function(l,u){const d=Zo(l,!0,u==="fixed"),f=d.top+l.clientTop,h=d.left+l.clientLeft,m=er(l)?Ii(l):{x:1,y:1};return{width:l.clientWidth*m.x,height:l.clientHeight*m.y,x:h*m.x,y:f*m.y}}(t,n);else{const l={...t};if(kp()){var i,a;const u=en(e);l.x-=((i=u.visualViewport)==null?void 0:i.offsetLeft)||0,l.y-=((a=u.visualViewport)==null?void 0:a.offsetTop)||0}r=l}return bp(r)}function Uv(e,t){return er(e)&&Yn(e).position!=="fixed"?t?t(e):e.offsetParent:null}function $v(e,t){const n=en(e);let r=Uv(e,t);for(;r&&hT(r)&&Yn(r).position==="static";)r=Uv(r,t);return r&&(lo(r)==="html"||lo(r)==="body"&&Yn(r).position==="static"&&!wp(r))?n:r||function(i){let a=_s(i);for(;er(a)&&!Kh(a);){if(wp(a))return a;a=_s(a)}return null}(e)||n}function mT(e,t,n){const r=er(t),i=eo(t),a=Zo(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((lo(t)!=="body"||kc(i))&&(l=Sc(t)),er(t)){const d=Zo(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else i&&(u.x=e1(i));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}const _T={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?function(d,f){const h=f.get(d);if(h)return h;let m=to(d).filter(v=>Bn(v)&&lo(v)!=="body"),g=null;const x=Yn(d).position==="fixed";let w=x?_s(d):d;for(;Bn(w)&&!Kh(w);){const v=Yn(w),P=wp(w);v.position==="fixed"?g=null:(x?P||g:P||v.position!=="static"||!g||!["absolute","fixed"].includes(g.position))?g=v:m=m.filter(y=>y!==w),w=_s(w)}return f.set(d,m),m}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,f)=>{const h=jv(t,f,i);return d.top=qa(h.top,d.top),d.right=Dv(h.right,d.right),d.bottom=Dv(h.bottom,d.bottom),d.left=qa(h.left,d.left),d},jv(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=er(n),a=eo(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((i||!i&&r!=="fixed")&&((lo(n)!=="body"||kc(a))&&(l=Sc(n)),er(n))){const f=Zo(n);u=Ii(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:Bn,getDimensions:function(e){return er(e)?Qx(e):e.getBoundingClientRect()},getOffsetParent:$v,getDocumentElement:eo,getScale:Ii,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||$v,a=this.getDimensions;return{reference:mT(t,await i(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Yn(e).direction==="rtl"};function gT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=i&&!u,f=d||a?[...Bn(e)?to(e):e.contextElement?to(e.contextElement):[],...to(t)]:[];f.forEach(x=>{d&&x.addEventListener("scroll",n,{passive:!0}),a&&x.addEventListener("resize",n)});let h,m=null;if(l){let x=!0;m=new ResizeObserver(()=>{x||n(),x=!1}),Bn(e)&&!u&&m.observe(e),Bn(e)||!e.contextElement||u||m.observe(e.contextElement),m.observe(t)}let g=u?Zo(e):null;return u&&function x(){const w=Zo(e);!g||w.x===g.x&&w.y===g.y&&w.width===g.width&&w.height===g.height||n(),g=w,h=requestAnimationFrame(x)}(),n(),()=>{var x;f.forEach(w=>{d&&w.removeEventListener("scroll",n),a&&w.removeEventListener("resize",n)}),(x=m)==null||x.disconnect(),m=null,u&&cancelAnimationFrame(h)}}const vT=(e,t,n)=>{const r=new Map,i={platform:_T,...n},a={...i.platform,_c:r};return(async(l,u,d)=>{const{placement:f="bottom",strategy:h="absolute",middleware:m=[],platform:g}=d,x=m.filter(Boolean),w=await(g.isRTL==null?void 0:g.isRTL(u));let v=await g.getElementRects({reference:l,floating:u,strategy:h}),{x:P,y}=Iv(v,f,w),b=f,S={},C=0;for(let z=0;z<x.length;z++){const{name:B,fn:A}=x[z],{x:j,y:Z,data:$,reset:X}=await A({x:P,y,initialPlacement:f,placement:b,strategy:h,middlewareData:S,rects:v,platform:g,elements:{reference:l,floating:u}});P=j??P,y=Z??y,S={...S,[B]:{...S[B],...$}},X&&C<=50&&(C++,typeof X=="object"&&(X.placement&&(b=X.placement),X.rects&&(v=X.rects===!0?await g.getElementRects({reference:l,floating:u,strategy:h}):X.rects),{x:P,y}=Iv(v,b,w)),z=-1)}return{x:P,y,placement:b,strategy:h,middlewareData:S}})(e,t,{...i,platform:a})},yT=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return i=t,Object.prototype.hasOwnProperty.call(i,"current")?t.current!=null?Mv({element:t.current,padding:n}).fn(r):{}:t?Mv({element:t,padding:n}).fn(r):{};var i}}};var Bl=typeof document<"u"?T.useLayoutEffect:T.useEffect;function Pu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Pu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!=0;){const a=i[r];if((a!=="_owner"||!e.$$typeof)&&!Pu(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function Wv(e){const t=T.useRef(e);return Bl(()=>{t.current=e}),t}var n1=typeof document<"u"?T.useLayoutEffect:T.useEffect;let jd=!1,bT=0;const Hv=()=>"floating-ui-"+bT++,Zv=Ga["useId".toString()]||function(){const[e,t]=T.useState(()=>jd?Hv():void 0);return n1(()=>{e==null&&t(Hv())},[]),T.useEffect(()=>{jd||(jd=!0)},[]),e},xT=T.createContext(null),wT=T.createContext(null),r1=()=>T.useContext(wT);function o1(e){return e?.ownerDocument||document}function i1(e){return o1(e).defaultView||window}function No(e){return!!e&&e instanceof i1(e).Element}function Qh(e){return!!e&&e instanceof i1(e).HTMLElement}function kT(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:i,version:a}=r;return i+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function ST(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Vv(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Ud(e,t){let n=e.filter(i=>{var a;return i.parentId===t&&((a=i.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return i.parentId===l.id&&((u=i.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const PT=Ga["useInsertionEffect".toString()]||(e=>e());function a1(e){const t=T.useRef(()=>{});return PT(()=>{t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function qv(e){return Qh(e.target)&&e.target.tagName==="BUTTON"}function Kv(e){return function(t){return Qh(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function $d(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const CT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},ET={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},OT=function(e,t){let{open:n,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:f=!0,escapeKey:h=!0,outsidePress:m=!0,outsidePressEvent:g="pointerdown",referencePress:x=!1,referencePressEvent:w="pointerdown",ancestorScroll:v=!1,bubbles:P=!0}=t===void 0?{}:t;const y=r1(),b=(((S=T.useContext(xT))==null?void 0:S.id)||null)!=null;var S;const C=a1(typeof m=="function"?m:()=>!1),z=typeof m=="function"?C:m,B=T.useRef(!1),{escapeKeyBubbles:A,outsidePressBubbles:j}=function(Z){var $,X;return Z===void 0&&(Z=!0),{escapeKeyBubbles:typeof Z=="boolean"?Z:($=Z.escapeKey)==null||$,outsidePressBubbles:typeof Z=="boolean"?Z:(X=Z.outsidePress)==null||X}}(P);return T.useEffect(()=>{if(!n||!f)return;function Z(ee){if(ee.key==="Escape"){if(!A&&y&&Ud(y.nodesRef.current,a).length>0)return;i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function $(ee){const pe=B.current;if(B.current=!1,pe||typeof z=="function"&&!z(ee))return;const re=function(D){return"composedPath"in D?D.composedPath()[0]:D.target}(ee);if(Qh(re)&&d){const D=d.ownerDocument.defaultView||window,J=re.scrollWidth>re.clientWidth,K=re.scrollHeight>re.clientHeight;let E=K&&ee.offsetX>re.clientWidth;if(K&&D.getComputedStyle(re).direction==="rtl"&&(E=ee.offsetX<=re.offsetWidth-re.clientWidth),E||J&&ee.offsetY>re.clientHeight)return}const M=y&&Ud(y.nodesRef.current,a).some(D=>{var J;return $d(ee,(J=D.context)==null?void 0:J.elements.floating)});$d(ee,d)||$d(ee,u)||M||!j&&y&&Ud(y.nodesRef.current,a).length>0||(i.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:kT(ee)||ST(ee)}}),r(!1))}function X(){r(!1)}const ne=o1(d);h&&ne.addEventListener("keydown",Z),z&&ne.addEventListener(g,$);let se=[];return v&&(No(u)&&(se=to(u)),No(d)&&(se=se.concat(to(d))),!No(l)&&l&&l.contextElement&&(se=se.concat(to(l.contextElement)))),se=se.filter(ee=>{var pe;return ee!==((pe=ne.defaultView)==null?void 0:pe.visualViewport)}),se.forEach(ee=>{ee.addEventListener("scroll",X,{passive:!0})}),()=>{h&&ne.removeEventListener("keydown",Z),z&&ne.removeEventListener(g,$),se.forEach(ee=>{ee.removeEventListener("scroll",X)})}},[d,u,l,h,z,g,i,y,a,n,r,v,f,A,j,b]),T.useEffect(()=>{B.current=!1},[z,g]),T.useMemo(()=>f?{reference:{[CT[w]]:()=>{x&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[ET[g]]:()=>{B.current=!0}}}:{},[f,i,x,g,w,r])};function Gh(e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function TT(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,i=function(y){y===void 0&&(y={});const{placement:b="bottom",strategy:S="absolute",middleware:C=[],platform:z,whileElementsMounted:B,open:A}=y,[j,Z]=T.useState({x:null,y:null,strategy:S,placement:b,middlewareData:{},isPositioned:!1}),[$,X]=T.useState(C);Pu($,C)||X(C);const ne=T.useRef(null),se=T.useRef(null),ee=T.useRef(j),pe=Wv(B),re=Wv(z),[M,D]=T.useState(null),[J,K]=T.useState(null),E=T.useCallback(le=>{ne.current!==le&&(ne.current=le,D(le))},[]),N=T.useCallback(le=>{se.current!==le&&(se.current=le,K(le))},[]),R=T.useCallback(()=>{if(!ne.current||!se.current)return;const le={placement:b,strategy:S,middleware:$};re.current&&(le.platform=re.current),vT(ne.current,se.current,le).then(ye=>{const ie={...ye,isPositioned:!0};V.current&&!Pu(ee.current,ie)&&(ee.current=ie,Fi.flushSync(()=>{Z(ie)}))})},[$,b,S,re]);Bl(()=>{A===!1&&ee.current.isPositioned&&(ee.current.isPositioned=!1,Z(le=>({...le,isPositioned:!1})))},[A]);const V=T.useRef(!1);Bl(()=>(V.current=!0,()=>{V.current=!1}),[]),Bl(()=>{if(M&&J){if(pe.current)return pe.current(M,J,R);R()}},[M,J,R,pe]);const te=T.useMemo(()=>({reference:ne,floating:se,setReference:E,setFloating:N}),[E,N]),oe=T.useMemo(()=>({reference:M,floating:J}),[M,J]);return T.useMemo(()=>({...j,update:R,refs:te,elements:oe,reference:E,floating:N}),[j,R,te,oe,E,N])}(e),a=r1(),l=T.useRef(null),u=T.useRef({}),d=T.useState(()=>function(){const y=new Map;return{emit(b,S){var C;(C=y.get(b))==null||C.forEach(z=>z(S))},on(b,S){y.set(b,[...y.get(b)||[],S])},off(b,S){y.set(b,(y.get(b)||[]).filter(C=>C!==S))}}}())[0],[f,h]=T.useState(null),m=T.useCallback(y=>{const b=No(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(b)},[i.refs]),g=T.useCallback(y=>{(No(y)||y===null)&&(l.current=y,h(y)),(No(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!No(y))&&i.refs.setReference(y)},[i.refs]),x=T.useMemo(()=>({...i.refs,setReference:g,setPositionReference:m,domReference:l}),[i.refs,g,m]),w=T.useMemo(()=>({...i.elements,domReference:f}),[i.elements,f]),v=a1(n),P=T.useMemo(()=>({...i,refs:x,elements:w,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:v}),[i,r,d,t,v,x,w]);return n1(()=>{const y=a?.nodesRef.current.find(b=>b.id===r);y&&(y.context=P)}),T.useMemo(()=>({...i,context:P,refs:x,reference:g,positionReference:m}),[i,x,P,g,m])}function Wd(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(i=>i?i[n]:null).concat(e).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),i[u]=function(){for(var h,m=arguments.length,g=new Array(m),x=0;x<m;x++)g[x]=arguments[x];(h=r.get(u))==null||h.forEach(w=>w(...g))})):i[u]=d}),i),{})}}var Sp={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function zT(e){var{variant:t="default",arrow:n,initialOpen:r,placement:i,offset:a,open:l,onOpenChange:u}=e,d=Qo(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,h]=T.useState(r),m=l??f,g=u??h,x=T.useRef(null),w=TT({placement:i,open:m,onOpenChange:g,whileElementsMounted:gT,middleware:[pT(a??(n?12:4)),fT({padding:5,fallbackPlacements:["bottom","top"]}),(v={padding:5},v===void 0&&(v={}),{name:"shift",options:v,async fn(z){const{x:B,y:A,placement:j}=z,{mainAxis:Z=!0,crossAxis:$=!1,limiter:X={fn:K=>{let{x:E,y:N}=K;return{x:E,y:N}}},...ne}=v,se={x:B,y:A},ee=await Kx(z,ne),pe=Ts(Do(j)),re=pe==="x"?"y":"x";let M=se[pe],D=se[re];if(Z){const K=pe==="y"?"bottom":"right";M=xp(M+ee[pe==="y"?"top":"left"],M,M-ee[K])}if($){const K=re==="y"?"bottom":"right";D=xp(D+ee[re==="y"?"top":"left"],D,D-ee[K])}const J=X.fn({...z,[pe]:M,[re]:D});return{...J,data:{x:J.x-B,y:J.y-A}}}}),yT({element:x,padding:8})]});var v;const P=w.context,y=function(z,B){let{open:A,onOpenChange:j,dataRef:Z,refs:$}=z,{enabled:X=!0,event:ne="click",toggle:se=!0,ignoreMouse:ee=!1,keyboardHandlers:pe=!0}=B===void 0?{}:B;const re=T.useRef();return T.useMemo(()=>X?{reference:{onPointerDown(M){re.current=M.pointerType},onMouseDown(M){M.button===0&&(Vv(re.current,!0)&&ee||ne!=="click"&&(A?!se||Z.current.openEvent&&Z.current.openEvent.type!=="mousedown"||j(!1):(M.preventDefault(),j(!0)),Z.current.openEvent=M.nativeEvent))},onClick(M){Z.current.__syncReturnFocus||(ne==="mousedown"&&re.current?re.current=void 0:Vv(re.current,!0)&&ee||(A?!se||Z.current.openEvent&&Z.current.openEvent.type!=="click"||j(!1):j(!0),Z.current.openEvent=M.nativeEvent))},onKeyDown(M){re.current=void 0,pe&&(qv(M)||(M.key!==" "||Kv($.domReference.current)||M.preventDefault(),M.key==="Enter"&&(A?se&&j(!1):j(!0))))},onKeyUp(M){pe&&(qv(M)||Kv($.domReference.current)||M.key===" "&&(A?se&&j(!1):j(!0)))}}}:{},[X,Z,ne,ee,pe,$,se,A,j])}(P,{enabled:l==null}),b=OT(P,{referencePress:!1}),S=function(z,B){let{open:A}=z,{enabled:j=!0,role:Z="dialog"}=B===void 0?{}:B;const $=Zv(),X=Zv();return T.useMemo(()=>{const ne={id:$,role:Z};return j?Z==="tooltip"?{reference:{"aria-describedby":A?$:void 0},floating:ne}:{reference:{"aria-expanded":A?"true":"false","aria-haspopup":Z==="alertdialog"?"dialog":Z,"aria-controls":A?$:void 0,...Z==="listbox"&&{role:"combobox"},...Z==="menu"&&{id:X}},floating:{...ne,...Z==="menu"&&{"aria-labelledby":X}}}:{}},[j,Z,A,$,X])}(P),C=function(z){z===void 0&&(z=[]);const B=z,A=T.useCallback($=>Wd($,z,"reference"),B),j=T.useCallback($=>Wd($,z,"floating"),B),Z=T.useCallback($=>Wd($,z,"item"),B);return T.useMemo(()=>({getReferenceProps:A,getFloatingProps:j,getItemProps:Z}),[A,j,Z])}([y,b,S]);return T.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:m,setOpen:g},C),w),d),{arrow:n,arrowRef:x,variant:t}),[m,g,C,w,d,n,x,t])}De(`.Popover-module_popover__E9K9X {\r
  width: max-content;\r
  z-index: 2;\r
  padding: 12px;\r
  max-width: calc(100vw - 20px);\r
  border: 1px solid gray;\r
  border-radius: 3px;\r
  box-shadow: 0 3px 6px 0 #0003;\r
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
  background-color: #fff;\r
  border-color: #68707c;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {\r
  background-color: #e6eff8;\r
  border-color: #004c8f;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {\r
  background-color: #fffbe6;\r
  border-color: #cc7005;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {\r
  background-color: #f9d5db;\r
  border-color: #b3253a;\r
}\r
\r
.Popover-module_arrow__5A-0e {\r
  position: absolute;\r
  box-sizing: content-box;\r
  z-index: -1;\r
  transform: rotate(45deg);\r
  background-color: inherit;\r
  border: 1px solid;\r
\r
  /* Set border color separately in order to make inheritance work. */\r
  border-color: inherit;\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='top'] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 3px 3px 6px 0 #0003;\r
  clip-path: inset(0 -10px -10px 0);\r
  border-left-color: transparent;\r
  border-top-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='bottom'] > .Popover-module_arrow__5A-0e {\r
  clip-path: inset(-10px 0 0 -10px);\r
  border-bottom-color: transparent;\r
  border-right-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='left'] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 1px 3px 6px 0 #0003;\r
  clip-path: inset(-10px -10px 0 0);\r
  border-left-color: transparent;\r
  border-bottom-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='right'] > .Popover-module_arrow__5A-0e {\r
  box-shadow: -1px 3px 6px 0 #0003;\r
  clip-path: inset(0 0 -10px -10px);\r
  border-right-color: transparent;\r
  border-top-color: transparent;\r
}\r
`);const s1=T.createContext(null),Jh=()=>{const e=T.useContext(s1);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function l1(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:i=!1}=e,a=Qo(e,["children","trigger","arrow","initialOpen"]);const l=zT(Object.assign({arrow:r,initialOpen:i},a));return W.createElement(s1.Provider,{value:l},W.createElement(LT,null,n),W.createElement(RT,null,t,l.arrow&&W.createElement(AT,null)))}l1.displayName="Popover";const LT=T.forwardRef(function(e,t){var{children:n}=e,r=Qo(e,["children"]);const i=Jh(),a=n.ref,l=Gh([i.reference,t,a]);return T.isValidElement(n)?T.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null}),RT=T.forwardRef(function(e,t){var n,r;const i=Jh(),a=Gh([i.floating,t]);return i.open?W.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0},"data-placement":i.placement,className:Ct(Sp.popover,Sp[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:i.role||"dialog"}),e.children):null}),AT=T.forwardRef(function(e,t){var n,r;const i=Jh(),a=Gh([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return W.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:Sp.arrow},e))});var BT="utility-module_visuallyHidden__R-C67";De(`/**\r
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
`);var ko={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};De(`.HelpText-module_helpTextButton__Ir4Uk {\r
  background-color: transparent;\r
  border-radius: 50px;\r
  padding: 0;\r
  cursor: pointer;\r
  display: flex;\r
  border: none;\r
}\r
\r
@media print {\r
  .HelpText-module_helpTextButton__Ir4Uk {\r
    display: none;\r
  }\r
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
.HelpText-module_helpTextIcon__ex2WU {\r
  color: var(--colors-blue-700);\r
  width: var(--help_text-icon-width);\r
  height: var(--help_text-icon-height);\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^='open'])\r
  > .HelpText-module_helpTextIcon__ex2WU {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^='open'])\r
  > .HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: inline-block;\r
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
`);const Xh=e=>{var{className:t,children:n,title:r,placement:i="right",onClick:a,size:l="small"}=e,u=Qo(e,["className","children","title","placement","onClick","size"]);const[d,f]=T.useState(!1);return W.createElement(l1,{variant:"info",placement:i,open:d,onOpenChange:f,className:ko.helpTextContent,role:"tooltip",trigger:W.createElement("button",Object.assign({},u,{className:Ct(ko.helpTextButton,t),onClick:h=>{f(m=>!m),a?.(h)}}),W.createElement(YO,{className:Ct(ko.helpTextIcon,ko.helpTextIconFilled,ko[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),W.createElement(GO,{className:Ct(ko.helpTextIcon,ko[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),W.createElement("span",{className:BT},r))},n)};Xh.displayName="HelpText";var En={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};De(`.CheckboxRadioTemplate-module_template__CbnTf {\r
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
.CheckboxRadioTemplate-module_clickable__iw4S2 {\r
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
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha, :has(button:focus-visible)):has(:focus-visible) {\r
  outline: 2px solid var(--semantic-tab_focus-outline-color);\r
  outline-offset: 2px;\r
}\r
`);const NT=({checked:e,children:t,className:n,description:r,disabled:i,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:f,name:h,onChange:m,presentation:g,size:x="small",type:w,value:v})=>{const P=T.useId(),y=d??"input-"+P,b=f?`${y}-label`:void 0,S=r?`${y}-description`:void 0,C=f&&!u,z=!g||typeof f!="object"&&typeof r!="object";return W.createElement(Qv,{className:Ct(En.template,En[x],i&&En.disabled,n),htmlFor:y,isLabel:z},!l&&W.createElement(Qv,{className:En.inputWrapper,htmlFor:y,isLabel:!z},W.createElement("input",{"aria-describedby":S,"aria-label":C||typeof f!="string"?void 0:f,"aria-labelledby":C?b:void 0,checked:e!=null&&e,className:En.input,disabled:i,id:y,name:h,onChange:i?void 0:m,role:g?"presentation":void 0,type:w,value:v}),W.createElement("span",{className:En.visibleBox},t)),(C||r)&&W.createElement("span",{className:En.labelAndDescription},C&&W.createElement("span",{className:En.labelAndHelpText},W.createElement("span",{className:En.label,id:b},f),a&&W.createElement(Xh,{size:x,title:`Help text for ${f}`},a)),r&&W.createElement("span",{className:En.description,id:S},r)))},Qv=({children:e,className:t,htmlFor:n,isLabel:r})=>r?W.createElement("label",{className:t+" "+En.clickable,htmlFor:n},e):W.createElement("span",{className:t},e);var IT="Checkbox-module_checkbox__lSeQj",MT="Checkbox-module_compact__Cl41-",DT="Checkbox-module_error__E-bmD",FT="Checkbox-module_checked__3yAq6",jT="Checkbox-module_disabled__x7-eg",UT="Checkbox-module_readOnly__FamUn",$T="Checkbox-module_visibleBox__G7q8H",WT="Checkbox-module_checkmark__ES9N8";De(`.Checkbox-module_checkbox__lSeQj {\r
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
`);const Dt=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,helpText:l,hideLabel:u,label:d,name:f,onChange:h,presentation:m,readOnly:g})=>W.createElement(NT,{checked:t,className:Ct(IT,t&&FT,a&&DT,i&&jT,n&&MT,g&&UT),description:r,disabled:i,helpText:l,hideInput:g,hideLabel:u,inputId:e,label:d,name:f,onChange:h,presentation:m,size:n?"xsmall":"small",type:"checkbox"},W.createElement("span",{className:$T},W.createElement("span",{className:WT})));Dt.displayName="Checkbox";const HT=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},Gv=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),i=new Set;for(let a=0;a<e.length;a++){const l=n[a];for(const u of HT(l,r))if(!i.has(u)){i.add(u);break}}return i.size},Jv=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let i=0;for(let a=0;a<r.length;a++)if(r[a]===n[i]&&(i++,i===n.length))return!0;return!1},ZT=e=>(t,n)=>{const r=(i=>(a,l)=>{const u=Jv(i,a),d=Jv(i,l);if(!u&&!d)return 0;if(u&&!d)return-1;if(!u&&d)return 1;let f=0;for(let h=0;h<i.length;h++){const m=a.substring(f).indexOf(i[h]),g=l.substring(f).indexOf(i[h]);if(m<g)return-1;if(m>g)return 1;f+=m+1}return 0})(e)(t,n);return r!==0?r:(i=>(a,l)=>{const u=Gv(i,a);return Gv(i,l)-u})(e)(t,n)},u1=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n)if(e[i]!==t[i])return!1;return!0};var Hd={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};De(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
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
`);const VT=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},Xv=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Nl=({compact:e,description:t,disabled:n,error:r,helpText:i,items:a,legend:l,onChange:u,presentation:d,variant:f="vertical"})=>{if(!Zx(a.map(w=>w.name)))throw Error("Each name in the checkbox group must be unique.");const[h,m]=T.useReducer(VT,Xv(a)),g=yp([...a]);Ni(()=>{(a.length!==g?.length||a.some((w,v)=>!u1(w,g[v])))&&m({type:"reset",state:Xv(a)})});const x=yp(h);return Ni(()=>{u&&!n&&!Hx(x,h)&&u(h)},[h,u,n]),W.createElement(Vh,{contentClassName:Ct(Hd.checkboxGroup,Hd[f],e&&Hd.compact),description:t,disabled:n,error:r,helpText:i,legend:l,size:e?"xsmall":"small"},a.map(w=>W.createElement(Dt,{checkboxId:w.checkboxId,checked:h.includes(w.name),compact:e,description:w.description,disabled:n||w.disabled,error:!!r,helpText:w.helpText,key:w.name,label:w.label,name:w.name,onChange:v=>{m({type:v.target.checked?"check":"uncheck",name:w.name})},presentation:d})))};Nl.displayName="CheckboxGroup";De(`.RadioButton-module_radio__-lcP- {\r
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
\r
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
`);De(`.RadioGroup-module_radioGroup__pO2pz {\r
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
`);const qT=()=>W.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),KT=()=>W.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var Yv="Icon-module_icon__3YqoF",QT="Icon-module_disabled__e4-Yg";De(`.Icon-module_icon__3YqoF {\r
  background: var(--icon-background);\r
  padding-right: var(--component-input-border_width-focus);\r
  padding-left: var(--component-input-border_width-default);\r
  display: flex;\r
  align-items: center;\r
  flex: none;\r
}\r
\r
.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {\r
  opacity: 0.6;\r
}\r
`);const GT=({variant:e,disabled:t=!1})=>{switch(e){case"error":return W.createElement("div",{className:Yv,"data-testid":"input-icon-error"},W.createElement(qT,null));case"search":return W.createElement("div",{className:Ct(Yv,t&&QT),"data-testid":"input-icon-search"},W.createElement(KT,null));default:return null}};var So={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};De(`.InputWrapper-module_inputWrapper__I-Tcb {\r
  --background: var(--component-input-color-background-default);\r
  --border-color: var(--component-input-color-border-default);\r
  --icon-background: transparent;\r
  --outline-color: var(--semantic-tab_focus-outline-color);\r
  --paddingX: 0;\r
  --paddingY: 0;\r
\r
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
\r
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
  font-size: var(--component-input-font_size-sm);\r
  outline: none;\r
  padding: var(--paddingY) var(--paddingX);\r
  width: 100%;\r
}\r
\r
.InputWrapper-module_label__x0-XH {\r
  font-weight: var(--component-label-font_weight-default);\r
  padding: 0;\r
}\r
`);const JT=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:u,readOnly:d=!1})=>{const f=T.useId(),h=t??f,{variant:m,iconVariant:g}=(({readOnly:x=!1,disabled:w=!1,isValid:v=!0,isSearch:P=!1}={})=>x===!0||x==="readonlyInfo"?{variant:"readonlyInfo",iconVariant:"none"}:x==="readonlyConfirm"?{variant:"readonlyConfirm",iconVariant:"none"}:v===!1?{variant:"error",iconVariant:"error"}:{variant:w?"disabled":"default",iconVariant:P?"search":"none"})({disabled:e,isSearch:r,isValid:i,readOnly:d});return W.createElement(W.Fragment,null,a&&W.createElement("label",{className:So.label,htmlFor:h},a),W.createElement("div",{"data-testid":"InputWrapper",className:Ct(So.inputWrapper,So[m],{[So.search]:r,[So.withFocusEffect]:!l,[So.withPadding]:!u})},W.createElement(GT,{variant:g,disabled:e}),n({className:So.field,inputId:h,variant:m})))};var XT="MultiSelectItem-module_multiSelectItem__tjklN",YT="MultiSelectItem-module_deleteButton__xRVRz",ez="MultiSelectItem-module_deleteButtonCross__yqZOX";De(`.MultiSelectItem-module_multiSelectItem__tjklN {\r
  --border-radius: calc(var(--multiselect_item-height) / 2);\r
\r
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
.MultiSelectItem-module_deleteButton__xRVRz:focus-visible {\r
  background-color: var(--delete_cross_box-color-hover);\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:not(:disabled):hover {\r
  background-color: var(--delete_cross_box-color-hover);\r
}\r
\r
.MultiSelectItem-module_deleteButtonCross__yqZOX {\r
  background-color: var(--multiselect_item_delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
`);const c1=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>W.createElement("span",{className:XT},W.createElement("span",null,r),W.createElement("button",{"aria-label":e,className:YT,disabled:t,onClick:n},W.createElement("span",{className:ez})));c1.displayName="MultiSelectItem";var vt={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",textInput:"Select-module_textInput__QOpiN",single:"Select-module_single__i2zPs",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",optionListWrapper:"Select-module_optionListWrapper__Ech-7",expanded:"Select-module_expanded__QPHZ6",optionList:"Select-module_optionList__Lhg-F",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};De(`.Select-module_select__cjdcr {\r
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
\r
  opacity: var(--opacity-disabled);\r
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
\r
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
  --delete_cross-color: var(--delete_cross-color-disabled);\r
\r
  cursor: auto;\r
  background-color: transparent;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {\r
  background-color: var(--delete_cross_box-color-hover);\r
\r
  --delete_cross-color: var(--delete_cross-color-hover);\r
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
.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {\r
  --delete_cross-color: var(--delete_cross-color-active);\r
}\r
\r
.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionListWrapper__Ech-7 {\r
  display: none;\r
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
`);const tz=(e,t)=>((n,r)=>[...n.entries()].map(([i,a])=>({key:i,keywords:(a?.length?a:[i]).sort(r)})).sort((i,a)=>{const l=Math.min(i.keywords.length,a.keywords.length);for(let u=0;u<l;u++){const d=r(i.keywords[u],a.keywords[u]);if(d!==0)return d}return 0}).map(({key:i})=>i))(new Map(e.map(({label:n,value:r,keywords:i})=>[r,i?[n,...i]:[n]])),ZT(t)).map(n=>e.find(r=>r.value===n)),Ta={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Pp=e=>{var t;const{disabled:n,error:r,hideLabel:i,inputId:a,label:l,multiple:u,onChange:d,options:f,searchLabel:h,value:m}=e,g=f.map(ie=>ie.value);if(g.length!==new Set(g).size)throw Error("Each value in the option list must be unique.");const[x,w]=T.useState(u&&m!=null?m:[]),[v,P]=T.useState(""),[y,b]=T.useState(f),S=yp([...f]);Ni(()=>{(f.length!==S?.length||f.some((ie,he)=>!u1(ie,S[he])))&&(b(f),w(u&&m!=null?m:[]))});const C=f.length,z=(t=y[0])===null||t===void 0?void 0:t.value;Ni(()=>{z!==void 0&&A(z)},[z]);const[B,A]=T.useState(u?void 0:m),j=y.findIndex(ie=>ie.value===B),Z=T.useCallback(ie=>P(!u&&ie||""),[P,u]),[$,X]=T.useState(!1);Bv("click",()=>X(!1)),Bv("keydown",()=>X(!0));const[ne,se]=T.useState(!1),ee=T.useRef(null),pe=T.useRef(null);Ni(()=>{u?Hx(m,x)||w(m??[]):A(m)},[m]),T.useEffect(()=>{const ie=ee.current;if(ie){const he=ie.offsetHeight,be=ie.querySelectorAll("button");if(!be.length)return;const Le=ie.scrollTop,qe=Le+he,Ce=be[j];if(Ce){const lt=Ce.offsetTop,_t=lt+Ce.offsetHeight;lt>=Le&&_t<=qe||(ie.scrollTop=lt<Le?lt:_t-he)}}},[j]);const re=ie=>{var he;return(he=f.find(be=>be.value===ie))!==null&&he!==void 0?he:{label:"",value:""}},M=(ie,he)=>{x?.length||A(he),w(ie),d&&d(ie),Z()},D=ie=>{var he;u?x.includes(ie)?J(ie):M([...x,ie],ie):(A(he=ie),Z(re(he).label),se(!1),d&&d(he))},J=ie=>{M(x.filter(he=>he!==ie),ie)},K=T.useCallback(()=>{let ie=null;if(B===void 0)ie=y[0];else{const he=j+1;he>=0&&he<C&&(ie=y[he])}ie&&(A(ie.value),Z(ie.label)),se(!0)},[B,j,Z,A,y,C]),E=T.useCallback(()=>{let ie=null;if(B===void 0)ie=y[C-1];else{const he=j-1;he>=0&&he<C&&(ie=y[he])}ie&&(A(ie.value),Z(ie.label)),se(!0)},[B,j,Z,A,y,C]);Dd(Ta.ArrowDown,()=>{ne?K():se(!0)}),Dd(Ta.ArrowUp,()=>{ne?E():se(!0)}),Dd(Ta.Enter,()=>{ne&&u&&B?D(B):ne&&se(!1)});const N=ie=>{const he=ie.target.value;he&&(b(tz(f,he)),!ne&&se(!0)),P(he)},R=ie=>B===ie,V=ie=>u?x.includes(ie):R(ie),te=T.useId(),oe=a??te,le=T.useId(),ye=pe.current?`calc(${pe.current.offsetWidth}px + 2 * ${NO.component.input.border_width.default.value})`:void 0;return W.createElement("span",{className:Ct(vt.select,vt[u?"multiple":"single"],ne&&vt.expanded,n&&vt.disabled,$&&vt.usingKeyboard),"data-testid":"select-root"},W.createElement(JT,{disabled:n,inputId:oe,inputRenderer:({className:ie,inputId:he})=>W.createElement("span",{className:ie+" "+vt.field,ref:pe},W.createElement("span",{className:vt.inputArea},u&&W.createElement(W.Fragment,null,x.map(re).map(be=>W.createElement(c1,{deleteButtonLabel:be.deleteButtonLabel,disabled:n!=null&&n,key:be.value,label:be.label,onDeleteButtonClick:()=>J(be.value)}))),W.createElement("input",{"aria-activedescendant":`${he}-${B}`,"aria-autocomplete":"list","aria-controls":le,"aria-expanded":ne,"aria-haspopup":"listbox","aria-label":h??l,"aria-owns":le,autoComplete:"off",className:vt.textInput,disabled:n,id:he,onBlur:()=>se(!1),onClick:()=>se(!0),onChange:N,onFocus:()=>se(!0),onKeyDown:be=>{Object.values(Ta).includes(be.key)&&be.preventDefault()},role:"combobox",type:"text",value:v})),u&&W.createElement("button",{"aria-label":e.deleteButtonLabel,className:vt.deleteButton,disabled:!x.length||n,onClick:()=>{M([])}},W.createElement("span",{className:vt.deleteButtonCross})),W.createElement("button",{"aria-controls":le,"aria-expanded":ne,"aria-haspopup":"listbox","aria-label":l,className:vt.fieldButton,disabled:n,onBlur:()=>se(!1),onClick:()=>se(!0),onKeyDown:be=>{Object.values(Ta).includes(be.key)&&(be.preventDefault(),se(!0))},tabIndex:-1,value:u?x:B},W.createElement("span",{className:vt.arrowWrapper},W.createElement("span",{className:vt.arrow})))),isSearch:!1,isValid:!r,label:i?void 0:l,noFocusEffect:u,noPadding:!0,readOnly:!1}),W.createElement("span",{className:vt.optionListWrapper,ref:ee,style:{width:ye}},W.createElement("span",{"aria-expanded":ne,className:vt.optionList,id:le,role:"listbox"},y.map(ie=>{var he;return W.createElement("button",{"aria-label":ie.label,"aria-selected":V(ie.value),className:Ct(vt.option,V(ie.value)&&vt.selected,u&&R(ie.value)&&vt.focused),id:`${oe}-${ie.value}`,key:ie.value,onClick:()=>D(ie.value),onMouseDown:be=>be.preventDefault(),onKeyDown:be=>be.preventDefault(),role:"option",value:ie.value},(he=ie.formattedLabel)!==null&&he!==void 0?he:ie.label)}))))};Pp.displayName="Select";var nz="Spinner-module_spinner__GpFZS",rz="Spinner-module_spinnerCircle__DRFwJ",oz="Spinner-module_defaultForeground__Ay0Sq",iz="Spinner-module_interactionForeground__8aY93",az="Spinner-module_invertedForeground__DF2fs",sz="Spinner-module_defaultBackground__7A7zq",lz="Spinner-module_interactionBackground__jBIwt",uz="Spinner-module_invertedBackground__nQ8Oa";De(`.Spinner-module_spinner__GpFZS {\r
  animation: Spinner-module_rotate-animation__PTh4z 2s linear infinite;\r
}\r
\r
.Spinner-module_spinnerCircle__DRFwJ {\r
  animation: Spinner-module_stroke-animation__bulMB 1.5s ease-in-out infinite;\r
}\r
\r
.Spinner-module_defaultForeground__Ay0Sq {\r
  stroke: var(--colors-grey-500);\r
}\r
\r
.Spinner-module_interactionForeground__8aY93 {\r
  stroke: var(--semantic-border-action-default);\r
}\r
\r
.Spinner-module_invertedForeground__DF2fs {\r
  stroke: var(--colors-white);\r
}\r
\r
.Spinner-module_defaultBackground__7A7zq,\r
.Spinner-module_interactionBackground__jBIwt,\r
.Spinner-module_invertedBackground__nQ8Oa {\r
  stroke: var(--colors-grey-200);\r
}\r
\r
@keyframes Spinner-module_rotate-animation__PTh4z {\r
  100% {\r
    transform: rotate(360deg);\r
  }\r
}\r
\r
@keyframes Spinner-module_stroke-animation__bulMB {\r
  0% {\r
    stroke-dasharray: 1, 150;\r
    stroke-dashoffset: 0;\r
  }\r
\r
  50% {\r
    stroke-dasharray: 90, 150;\r
    stroke-dashoffset: -62;\r
  }\r
\r
  100% {\r
    stroke-dasharray: 90, 150;\r
    stroke-dashoffset: -124;\r
  }\r
}\r
`);const ey={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},ty={default:{foreground:oz,background:sz},interaction:{foreground:iz,background:lz},inverted:{foreground:az,background:uz}},cz=e=>{var{title:t,size:n="medium",variant:r="default",className:i=""}=e,a=Qo(e,["title","size","variant","className"]);return W.createElement("svg",Object.assign({className:`${nz} ${i}`,style:{width:ey[n],height:ey[n]},viewBox:"0 0 50 50"},a),W.createElement("title",null,t),W.createElement("circle",{className:ty[r].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),W.createElement("circle",{className:`${rz} ${ty[r].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))};De(`.TextArea-module_textArea__Fp7-I {\r
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
`);const d1=T.createContext(void 0),Yh=()=>{const e=T.useContext(d1);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var dz="Accordion-module_accordion__LVhhv";De(`.Accordion-module_accordion__LVhhv {\r
  --component-accordion-color-background: var(--colors-white);\r
  --component-panel-size-width: 100%;\r
\r
  background-color: var(--component-accordion-color-background);\r
  width: var(--component-panel-size-width);\r
}\r
`);const f1=({children:e,open:t,onClick:n,iconVariant:r="primary"})=>{const i=T.useId(),a=T.useId();return W.createElement("div",{className:dz},W.createElement(d1.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};f1.displayName="Accordion";const p1=({children:e})=>{const{open:t,contentId:n,headerId:r}=Yh();return W.createElement("div",null,t&&W.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};p1.displayName="AccordionContent";var fz="AccordionHeader-module_accordionHeader__nap0Y",pz="AccordionHeader-module_subtitle__CpDh7",hz="AccordionHeader-module_withSubtitle__zCXnG",mz="AccordionHeader-module_title__3VVAA",_z="AccordionHeader-module_actions__WCBkS";De(`.AccordionHeader-module_accordionHeader__nap0Y {\r
  --component-accordion_header-border_top_color: var(--colors-grey-200);\r
  --component-accordion_header-border_top_style: solid;\r
  --component-accordion_header-border_top_width: var(--border_width-thin);\r
  --component-accordion_header-color-background: var(--colors-white);\r
\r
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
    opacity: 0.6;\r
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
  --component-accordion_header_title-font_weight: var(\r
    --component-panel-font_weight-heading\r
  );\r
  --component-accordion_header_title-spacing-margin_left: 1.6rem;\r
\r
  background-color: var(--component-accordion_header_title-color-background);\r
  border-bottom-style: var(\r
    --component-accordion_header_title-border_bottom_style\r
  );\r
  border-left-style: var(--component-accordion_header_title-border_left_style);\r
  border-right-style: var(\r
    --component-accordion_header_title-border_right_style\r
  );\r
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
`);var gz="AccordionIcon-module_accordionIcon__C4yU3",vz="AccordionIcon-module_opened__jWTPV";De(`.AccordionIcon-module_accordionIcon__C4yU3 {\r
  --size: 20px;\r
\r
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
`);const yz=e=>W.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),W.createElement("path",{d:`\r
        M 12.8834 34\r
        L 10      31.0909\r
        L 22.9754 18\r
        L 10       4.90909\r
        L 12.8834  2\r
        L 28.7423 18\r
        L 12.8834 34\r
        Z\r
      `,fill:_O})),bz=e=>W.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),W.createElement("path",{d:`\r
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
      `,fill:gO})),h1=()=>{const{onClick:e,open:t,iconVariant:n}=Yh(),r={className:Ct(gz,t&&vz),onClick:e};switch(n){case"primary":return W.createElement(yz,Object.assign({},r));case"secondary":return W.createElement(bz,Object.assign({},r))}};h1.displayName="AccordionIcon";const m1=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=Yh();return W.createElement("div",{className:Ct(fz,{[hz]:n})},W.createElement(h1,null),W.createElement("button",{className:mz,"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&W.createElement("span",{"data-testid":"accordion-header-subtitle",className:pz},n)),W.createElement("div",{className:_z},t))};m1.displayName="AccordionHeader";var ny={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};De(`.List-module_list__9aWGq {\r
  --component-list-border_width: 1px;\r
\r
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
`);const xz=({children:e,borderStyle:t="solid"})=>W.createElement("ul",{className:ny.list+" "+ny[t]},e);var wz="ListItem-module_listItem__AJQMK";De(`.ListItem-module_listItem__AJQMK {\r
  border-bottom-color: var(--component-list-border_color);\r
  border-bottom-style: var(--component-list-border_style);\r
  border-bottom-width: var(--component-list-border_width);\r
  display: block;\r
}\r
`);const Po=({children:e})=>W.createElement("li",{className:wz},e);De(`.Table-module_table__Dkosn {\r
  align-self: stretch;\r
  background-color: #fff;\r
  border-collapse: collapse;\r
  border-spacing: 0;\r
  box-shadow: 0 1px 1px rgb(0 0 0 / 0.12), 0 2px 2px rgb(0 0 0 / 0.12);\r
  flex-grow: 0;\r
  order: 3;\r
  width: 100%;\r
}\r
`);T.createContext(void 0);T.createContext({variantStandard:"body"});De(`.TableHeader-module_table-header__mrqgB {\r
  align-self: stretch;\r
  background: #f5f5f5;\r
  flex-grow: 0;\r
  order: 1;\r
}\r
`);De(`.TableRow-module_tableRow__lREy- {\r
  height: 60px;\r
  width: 1056px;\r
}\r
\r
.TableRow-module_tableRow__lREy-.TableRow-module_selected__0FWjw {\r
  background-color: #e0daf7;\r
  border-bottom: 1px solid #dde3e5;\r
  border-left: 2px solid #011728;\r
  border-top: 1px solid #dde3e5;\r
}\r
\r
.TableRow-module_tableRow__lREy-.TableRow-module_body__CUiHu:hover {\r
  background-color: #e3f7ff;\r
  cursor: pointer;\r
}\r
`);De(`.TableCell-module_headerTableCell__1Riow {\r
  background: #f5f5f5;\r
  margin: 20px 0;\r
  padding: 8px;\r
  text-align: left;\r
  user-select: none;\r
}\r
\r
.TableCell-module_headerTableCellRadiobutton__aHo20 {\r
  background: #f5f5f5;\r
  margin: 10px 0;\r
  padding: 8px;\r
  text-align: left;\r
  user-select: none;\r
}\r
\r
.TableCell-module_bodyTableCell__MTK68 {\r
  border-bottom: 1px solid #dde3e5;\r
  border-top: 1px solid #dde3e5;\r
  margin: 20px 0;\r
  max-width: 300px;\r
  text-align: left;\r
}\r
\r
.TableCell-module_bodyTableCellRadiobutton__zztqA {\r
  border-bottom: 1px solid #dde3e5;\r
  border-top: 1px solid #dde3e5;\r
  text-align: left;\r
}\r
\r
.TableCell-module_image__vWvwd {\r
  max-height: 45px;\r
  max-width: 45px;\r
}\r
\r
.TableCell-module_input__cyAaE {\r
  margin: 0 15px;\r
}\r
\r
.TableCell-module_radioButton__kN3Cg {\r
  margin: 0 0 0 15px;\r
}\r
\r
.TableCell-module_containerSortable__8hKI3 {\r
  align-items: center;\r
  cursor: pointer;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: flex-start;\r
}\r
\r
.TableCell-module_icon__ADG4G {\r
  fill: rgb(0 0 0 / 0.4);\r
  margin-left: -5px;\r
}\r
\r
.TableCell-module_iconDesc__bD3-5 {\r
  fill: rgb(0 0 0);\r
  margin-left: -5px;\r
}\r
\r
.TableCell-module_iconAsc__bGb1O {\r
  fill: rgb(0 0 0);\r
  margin-left: -5px;\r
  transform: rotate(180deg);\r
}\r
\r
.TableCell-module_header__HuaKn {\r
  color: #4b5563;\r
  font-weight: 600;\r
  margin: 10px 10px 10px 0;\r
}\r
\r
.TableCell-module_property__k74rm {\r
  margin: 10px 10px 10px 0;\r
}\r
`);De(`.TableBody-module_tableBody__fKFbY {\r
  align-self: stretch;\r
  background-color: #ffff;\r
  flex-grow: 0;\r
  order: 2;\r
}\r
`);De(`.TableFooter-module_tableFooter__MJ37D {\r
  align-self: stretch;\r
  background: #f5f5f5;\r
  flex-grow: 0;\r
  order: 1;\r
}\r
`);De(`.ToggleButtonGroup-module_toggleButtonGroup__Q-2j7 {\r
  align-items: stretch;\r
  border-color: var(--component-toggle_button-color-border-inactive);\r
  border-radius: var(--interactive_components-border_radius-normal);\r
  border-style: solid;\r
  border-width: 2px;\r
  box-sizing: border-box;\r
  display: inline-flex;\r
  height: var(--component-button-size-height-small);\r
  width: 100%;\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW {\r
  background-color: var(--component-toggle_button-color-background-inactive);\r
  border-radius: 0;\r
  border: none;\r
  color: var(--component-toggle_button-color-text-inactive);\r
  cursor: pointer;\r
  flex: 1;\r
  font-family: var(--font_family-default);\r
  font-size: var(--component-toggle_button-font_size-sm);\r
  padding-left: var(--component-toggle_button-space-padding-x);\r
  padding-right: var(--component-toggle_button-space-padding-x);\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW.ToggleButtonGroup-module_pressed__aAphL {\r
  background-color: var(--component-toggle_button-color-background-active);\r
  color: var(--component-toggle_button-color-text-active);\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW:focus-visible {\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
  outline: var(--semantic-tab_focus-outline-color) auto\r
    var(--semantic-tab_focus-outline-width);\r
  z-index: 1;\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW:not(.ToggleButtonGroup-module_pressed__aAphL):hover {\r
  background-color: #cff0ff;\r
}\r
`);var ry,oy,iy,ay,sy,ly,uy,cy,Ka,Cp,dy,fy,py,hy,my,_y,gy;(function(e){e.Xsmall="xsmall",e.Small="small"})(ry||(ry={})),function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(oy||(oy={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(iy||(iy={})),function(e){e.None="none",e.Error="error",e.Search="search"}(ay||(ay={})),function(e){e.Primary="primary",e.Secondary="secondary"}(sy||(sy={})),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(ly||(ly={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(uy||(uy={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(cy||(cy={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ka||(Ka={})),function(e){e.Xsmall="xsmall",e.Small="small"}(Cp||(Cp={})),function(e){e.Xsmall="xsmall",e.Small="small"}(dy||(dy={})),function(e){e.Xsmall="xsmall",e.Small="small"}(fy||(fy={})),function(e){e.Xsmall="xsmall",e.Small="small"}(py||(py={})),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(hy||(hy={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(my||(my={})),function(e){e.XLarge="xlarge",e.Large="large",e.Medium="medium",e.Small="small",e.XSmall="xsmall"}(_y||(_y={})),function(e){e[e.H1=1]="H1",e[e.H2=2]="H2",e[e.H3=3]="H3",e[e.H4=4]="H4",e[e.H5=5]="H5",e[e.H6=6]="H6"}(gy||(gy={}));function _1(e,t){return function(){return e.apply(t,arguments)}}const{toString:g1}=Object.prototype,{getPrototypeOf:em}=Object,tm=(e=>t=>{const n=g1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Er=e=>(e=e.toLowerCase(),t=>tm(t)===e),Pc=e=>t=>typeof t===e,{isArray:Yi}=Array,gs=Pc("undefined");function kz(e){return e!==null&&!gs(e)&&e.constructor!==null&&!gs(e.constructor)&&uo(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const v1=Er("ArrayBuffer");function Sz(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&v1(e.buffer),t}const Pz=Pc("string"),uo=Pc("function"),y1=Pc("number"),nm=e=>e!==null&&typeof e=="object",Cz=e=>e===!0||e===!1,Il=e=>{if(tm(e)!=="object")return!1;const t=em(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ez=Er("Date"),Oz=Er("File"),Tz=Er("Blob"),zz=Er("FileList"),Lz=e=>nm(e)&&uo(e.pipe),Rz=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||g1.call(e)===t||uo(e.toString)&&e.toString()===t)},Az=Er("URLSearchParams"),Bz=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Yi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function b1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const x1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),w1=e=>!gs(e)&&e!==x1;function Ep(){const{caseless:e}=w1(this)&&this||{},t={},n=(r,i)=>{const a=e&&b1(t,i)||i;Il(t[a])&&Il(r)?t[a]=Ep(t[a],r):Il(r)?t[a]=Ep({},r):Yi(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&zs(arguments[r],n);return t}const Nz=(e,t,n,{allOwnKeys:r}={})=>(zs(t,(i,a)=>{n&&uo(i)?e[a]=_1(i,n):e[a]=i},{allOwnKeys:r}),e),Iz=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Mz=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dz=(e,t,n,r)=>{let i,a,l;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&em(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Fz=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},jz=e=>{if(!e)return null;if(Yi(e))return e;let t=e.length;if(!y1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Uz=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&em(Uint8Array)),$z=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},Wz=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Hz=Er("HTMLFormElement"),Zz=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),vy=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Vz=Er("RegExp"),k1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};zs(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},qz=e=>{k1(e,(t,n)=>{if(uo(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(uo(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kz=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Yi(e)?r(e):r(String(e).split(t)),n},Qz=()=>{},Gz=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Zd="abcdefghijklmnopqrstuvwxyz",yy="0123456789",S1={DIGIT:yy,ALPHA:Zd,ALPHA_DIGIT:Zd+Zd.toUpperCase()+yy},Jz=(e=16,t=S1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Xz(e){return!!(e&&uo(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Yz=e=>{const t=new Array(10),n=(r,i)=>{if(nm(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Yi(r)?[]:{};return zs(r,(l,u)=>{const d=n(l,i+1);!gs(d)&&(a[u]=d)}),t[i]=void 0,a}}return r};return n(e,0)},q={isArray:Yi,isArrayBuffer:v1,isBuffer:kz,isFormData:Rz,isArrayBufferView:Sz,isString:Pz,isNumber:y1,isBoolean:Cz,isObject:nm,isPlainObject:Il,isUndefined:gs,isDate:Ez,isFile:Oz,isBlob:Tz,isRegExp:Vz,isFunction:uo,isStream:Lz,isURLSearchParams:Az,isTypedArray:Uz,isFileList:zz,forEach:zs,merge:Ep,extend:Nz,trim:Bz,stripBOM:Iz,inherits:Mz,toFlatObject:Dz,kindOf:tm,kindOfTest:Er,endsWith:Fz,toArray:jz,forEachEntry:$z,matchAll:Wz,isHTMLForm:Hz,hasOwnProperty:vy,hasOwnProp:vy,reduceDescriptors:k1,freezeMethods:qz,toObjectSet:Kz,toCamelCase:Zz,noop:Qz,toFiniteNumber:Gz,findKey:b1,global:x1,isContextDefined:w1,ALPHABET:S1,generateString:Jz,isSpecCompliantForm:Xz,toJSONObject:Yz};function Be(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}q.inherits(Be,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const P1=Be.prototype,C1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{C1[e]={value:e}});Object.defineProperties(Be,C1);Object.defineProperty(P1,"isAxiosError",{value:!0});Be.from=(e,t,n,r,i,a)=>{const l=Object.create(P1);return q.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),Be.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const eL=null;function Op(e){return q.isPlainObject(e)||q.isArray(e)}function E1(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function by(e,t,n){return e?e.concat(t).map(function(i,a){return i=E1(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function tL(e){return q.isArray(e)&&!e.some(Op)}const nL=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function Cc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,P){return!q.isUndefined(P[v])});const r=n.metaTokens,i=n.visitor||h,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw new TypeError("visitor must be a function");function f(w){if(w===null)return"";if(q.isDate(w))return w.toISOString();if(!d&&q.isBlob(w))throw new Be("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(w)||q.isTypedArray(w)?d&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function h(w,v,P){let y=w;if(w&&!P&&typeof w=="object"){if(q.endsWith(v,"{}"))v=r?v:v.slice(0,-2),w=JSON.stringify(w);else if(q.isArray(w)&&tL(w)||(q.isFileList(w)||q.endsWith(v,"[]"))&&(y=q.toArray(w)))return v=E1(v),y.forEach(function(S,C){!(q.isUndefined(S)||S===null)&&t.append(l===!0?by([v],C,a):l===null?v:v+"[]",f(S))}),!1}return Op(w)?!0:(t.append(by(P,v,a),f(w)),!1)}const m=[],g=Object.assign(nL,{defaultVisitor:h,convertValue:f,isVisitable:Op});function x(w,v){if(!q.isUndefined(w)){if(m.indexOf(w)!==-1)throw Error("Circular reference detected in "+v.join("."));m.push(w),q.forEach(w,function(y,b){(!(q.isUndefined(y)||y===null)&&i.call(t,y,q.isString(b)?b.trim():b,v,g))===!0&&x(y,v?v.concat(b):[b])}),m.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return x(e),t}function xy(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function rm(e,t){this._pairs=[],e&&Cc(e,this,t)}const O1=rm.prototype;O1.append=function(t,n){this._pairs.push([t,n])};O1.toString=function(t){const n=t?function(r){return t.call(this,r,xy)}:xy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function rL(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function T1(e,t,n){if(!t)return e;const r=n&&n.encode||rL,i=n&&n.serialize;let a;if(i?a=i(t,n):a=q.isURLSearchParams(t)?t.toString():new rm(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class oL{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(r){r!==null&&t(r)})}}const wy=oL,z1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iL=typeof URLSearchParams<"u"?URLSearchParams:rm,aL=typeof FormData<"u"?FormData:null,sL=typeof Blob<"u"?Blob:null,lL=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),uL=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Gn={isBrowser:!0,classes:{URLSearchParams:iL,FormData:aL,Blob:sL},isStandardBrowserEnv:lL,isStandardBrowserWebWorkerEnv:uL,protocols:["http","https","file","blob","url","data"]};function cL(e,t){return Cc(e,new Gn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Gn.isNode&&q.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function dL(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fL(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function L1(e){function t(n,r,i,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&q.isArray(i)?i.length:l,d?(q.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!u):((!i[l]||!q.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&q.isArray(i[l])&&(i[l]=fL(i[l])),!u)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(r,i)=>{t(dL(r),i,n,0)}),n}return null}const pL={"Content-Type":void 0};function hL(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ec={transitional:z1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=q.isObject(t);if(a&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return i&&i?JSON.stringify(L1(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cL(t,this.formSerializer).toString();if((u=q.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Cc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),hL(t)):t}],transformResponse:[function(t){const n=this.transitional||Ec.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&q.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?Be.from(u,Be.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gn.classes.FormData,Blob:Gn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],function(t){Ec.headers[t]={}});q.forEach(["post","put","patch"],function(t){Ec.headers[t]=q.merge(pL)});const om=Ec,mL=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_L=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&mL[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ky=Symbol("internals");function za(e){return e&&String(e).trim().toLowerCase()}function Ml(e){return e===!1||e==null?e:q.isArray(e)?e.map(Ml):String(e)}function gL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function vL(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Vd(e,t,n,r,i){if(q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function yL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function bL(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}class Oc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(u,d,f){const h=za(d);if(!h)throw new Error("header name must be a non-empty string");const m=q.findKey(i,h);(!m||i[m]===void 0||f===!0||f===void 0&&i[m]!==!1)&&(i[m||d]=Ml(u))}const l=(u,d)=>q.forEach(u,(f,h)=>a(f,h,d));return q.isPlainObject(t)||t instanceof this.constructor?l(t,n):q.isString(t)&&(t=t.trim())&&!vL(t)?l(_L(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=za(t),t){const r=q.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return gL(i);if(q.isFunction(n))return n.call(this,i,r);if(q.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=za(t),t){const r=q.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Vd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(l){if(l=za(l),l){const u=q.findKey(r,l);u&&(!n||Vd(r,r[u],u,n))&&(delete r[u],i=!0)}}return q.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Vd(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return q.forEach(this,(i,a)=>{const l=q.findKey(r,a);if(l){n[l]=Ml(i),delete n[a];return}const u=t?yL(a):String(a).trim();u!==a&&delete n[a],n[u]=Ml(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&q.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[ky]=this[ky]={accessors:{}}).accessors,i=this.prototype;function a(l){const u=za(l);r[u]||(bL(i,l),r[u]=!0)}return q.isArray(t)?t.forEach(a):a(t),this}}Oc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.freezeMethods(Oc.prototype);q.freezeMethods(Oc);const yr=Oc;function qd(e,t){const n=this||om,r=t||n,i=yr.from(r.headers);let a=r.data;return q.forEach(e,function(u){a=u.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function R1(e){return!!(e&&e.__CANCEL__)}function Ls(e,t,n){Be.call(this,e??"canceled",Be.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(Ls,Be,{__CANCEL__:!0});function xL(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Be("Request failed with status code "+n.status,[Be.ERR_BAD_REQUEST,Be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const wL=Gn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),q.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),q.isString(a)&&d.push("path="+a),q.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function SL(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function A1(e,t){return e&&!kL(t)?SL(e,t):t}const PL=Gn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const u=q.isString(l)?i(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function CL(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function EL(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),h=r[a];l||(l=f),n[i]=d,r[i]=f;let m=a,g=0;for(;m!==i;)g+=n[m++],m=m%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),f-l<t)return;const x=h&&f-h;return x?Math.round(g*1e3/x):void 0}}function Sy(e,t){let n=0;const r=EL(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-n,d=r(u),f=a<=l;n=a;const h={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&f?(l-a)/d:void 0,event:i};h[t?"download":"upload"]=!0,e(h)}}const OL=typeof XMLHttpRequest<"u",TL=OL&&function(e){return new Promise(function(n,r){let i=e.data;const a=yr.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}q.isFormData(i)&&(Gn.isStandardBrowserEnv||Gn.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let f=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(x+":"+w))}const h=A1(e.baseURL,e.url);f.open(e.method.toUpperCase(),T1(h,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function m(){if(!f)return;const x=yr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),v={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:x,config:e,request:f};xL(function(y){n(y),d()},function(y){r(y),d()},v),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(r(new Be("Request aborted",Be.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new Be("Network Error",Be.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||z1;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new Be(w,v.clarifyTimeoutError?Be.ETIMEDOUT:Be.ECONNABORTED,e,f)),f=null},Gn.isStandardBrowserEnv){const x=(e.withCredentials||PL(h))&&e.xsrfCookieName&&wL.read(e.xsrfCookieName);x&&a.set(e.xsrfHeaderName,x)}i===void 0&&a.setContentType(null),"setRequestHeader"in f&&q.forEach(a.toJSON(),function(w,v){f.setRequestHeader(v,w)}),q.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),l&&l!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Sy(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Sy(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=x=>{f&&(r(!x||x.type?new Ls(null,e,f):x),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const g=CL(h);if(g&&Gn.protocols.indexOf(g)===-1){r(new Be("Unsupported protocol "+g+":",Be.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Dl={http:eL,xhr:TL};q.forEach(Dl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const zL={getAdapter:e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=q.isString(n)?Dl[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Be(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(q.hasOwnProp(Dl,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!q.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Dl};function Kd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ls(null,e)}function Py(e){return Kd(e),e.headers=yr.from(e.headers),e.data=qd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),zL.getAdapter(e.adapter||om.adapter)(e).then(function(r){return Kd(e),r.data=qd.call(e,e.transformResponse,r),r.headers=yr.from(r.headers),r},function(r){return R1(r)||(Kd(e),r&&r.response&&(r.response.data=qd.call(e,e.transformResponse,r.response),r.response.headers=yr.from(r.response.headers))),Promise.reject(r)})}const Cy=e=>e instanceof yr?e.toJSON():e;function Qi(e,t){t=t||{};const n={};function r(f,h,m){return q.isPlainObject(f)&&q.isPlainObject(h)?q.merge.call({caseless:m},f,h):q.isPlainObject(h)?q.merge({},h):q.isArray(h)?h.slice():h}function i(f,h,m){if(q.isUndefined(h)){if(!q.isUndefined(f))return r(void 0,f,m)}else return r(f,h,m)}function a(f,h){if(!q.isUndefined(h))return r(void 0,h)}function l(f,h){if(q.isUndefined(h)){if(!q.isUndefined(f))return r(void 0,f)}else return r(void 0,h)}function u(f,h,m){if(m in t)return r(f,h);if(m in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(f,h)=>i(Cy(f),Cy(h),!0)};return q.forEach(Object.keys(e).concat(Object.keys(t)),function(h){const m=d[h]||i,g=m(e[h],t[h],h);q.isUndefined(g)&&m!==u||(n[h]=g)}),n}const B1="1.3.4",im={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{im[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ey={};im.transitional=function(t,n,r){function i(a,l){return"[Axios v"+B1+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new Be(i(l," has been removed"+(n?" in "+n:"")),Be.ERR_DEPRECATED);return n&&!Ey[l]&&(Ey[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function LL(e,t,n){if(typeof e!="object")throw new Be("options must be an object",Be.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new Be("option "+a+" must be "+d,Be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Be("Unknown option "+a,Be.ERR_BAD_OPTION)}}const Tp={assertOptions:LL,validators:im},Br=Tp.validators;class Cu{constructor(t){this.defaults=t,this.interceptors={request:new wy,response:new wy}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Qi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Tp.assertOptions(r,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1),i!==void 0&&Tp.assertOptions(i,{encode:Br.function,serialize:Br.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&q.merge(a.common,a[n.method]),l&&q.forEach(["delete","get","head","post","put","patch","common"],w=>{delete a[w]}),n.headers=yr.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(d=d&&v.synchronous,u.unshift(v.fulfilled,v.rejected))});const f=[];this.interceptors.response.forEach(function(v){f.push(v.fulfilled,v.rejected)});let h,m=0,g;if(!d){const w=[Py.bind(this),void 0];for(w.unshift.apply(w,u),w.push.apply(w,f),g=w.length,h=Promise.resolve(n);m<g;)h=h.then(w[m++],w[m++]);return h}g=u.length;let x=n;for(m=0;m<g;){const w=u[m++],v=u[m++];try{x=w(x)}catch(P){v.call(this,P);break}}try{h=Py.call(this,x)}catch(w){return Promise.reject(w)}for(m=0,g=f.length;m<g;)h=h.then(f[m++],f[m++]);return h}getUri(t){t=Qi(this.defaults,t);const n=A1(t.baseURL,t.url);return T1(n,t.params,t.paramsSerializer)}}q.forEach(["delete","get","head","options"],function(t){Cu.prototype[t]=function(n,r){return this.request(Qi(r||{},{method:t,url:n,data:(r||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(Qi(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}Cu.prototype[t]=n(),Cu.prototype[t+"Form"]=n(!0)});const Fl=Cu;class am{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new Ls(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new am(function(i){t=i}),cancel:t}}}const RL=am;function AL(e){return function(n){return e.apply(null,n)}}function BL(e){return q.isObject(e)&&e.isAxiosError===!0}const zp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zp).forEach(([e,t])=>{zp[t]=e});const NL=zp;function N1(e){const t=new Fl(e),n=_1(Fl.prototype.request,t);return q.extend(n,Fl.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return N1(Qi(e,i))},n}const mt=N1(om);mt.Axios=Fl;mt.CanceledError=Ls;mt.CancelToken=RL;mt.isCancel=R1;mt.VERSION=B1;mt.toFormData=Cc;mt.AxiosError=Be;mt.Cancel=mt.CanceledError;mt.all=function(t){return Promise.all(t)};mt.spread=AL;mt.isAxiosError=BL;mt.mergeConfig=Qi;mt.AxiosHeaders=yr;mt.formToJSON=e=>L1(q.isHTMLForm(e)?new FormData(e):e);mt.HttpStatusCode=NL;mt.default=mt;const I1=mt;function Ln(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function co(e){return!!e&&!!e[Qe]}function Sr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===HL}(e)||Array.isArray(e)||!!e[By]||!!(!((t=e.constructor)===null||t===void 0)&&t[By])||sm(e)||lm(e))}function Vo(e,t,n){n===void 0&&(n=!1),ea(e)===0?(n?Object.keys:Di)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function ea(e){var t=e[Qe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:sm(e)?2:lm(e)?3:0}function Mi(e,t){return ea(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function IL(e,t){return ea(e)===2?e.get(t):e[t]}function M1(e,t,n){var r=ea(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function D1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function sm(e){return $L&&e instanceof Map}function lm(e){return WL&&e instanceof Set}function To(e){return e.o||e.t}function um(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=j1(e);delete t[Qe];for(var n=Di(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function cm(e,t){return t===void 0&&(t=!1),dm(e)||co(e)||!Sr(e)||(ea(e)>1&&(e.set=e.add=e.clear=e.delete=ML),Object.freeze(e),t&&Vo(e,function(n,r){return cm(r,!0)},!0)),e}function ML(){Ln(2)}function dm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function tr(e){var t=Bp[e];return t||Ln(18,e),t}function DL(e,t){Bp[e]||(Bp[e]=t)}function Lp(){return vs}function Qd(e,t){t&&(tr("Patches"),e.u=[],e.s=[],e.v=t)}function Eu(e){Rp(e),e.p.forEach(FL),e.p=null}function Rp(e){e===vs&&(vs=e.l)}function Oy(e){return vs={p:[],l:vs,h:e,m:!0,_:0}}function FL(e){var t=e[Qe];t.i===0||t.i===1?t.j():t.O=!0}function Gd(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||tr("ES5").S(t,e,r),r?(n[Qe].P&&(Eu(t),Ln(4)),Sr(e)&&(e=Ou(t,e),t.l||Tu(t,e)),t.u&&tr("Patches").M(n[Qe].t,e,t.u,t.s)):e=Ou(t,n,[]),Eu(t),t.u&&t.v(t.u,t.s),e!==F1?e:void 0}function Ou(e,t,n){if(dm(t))return t;var r=t[Qe];if(!r)return Vo(t,function(u,d){return Ty(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Tu(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=um(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Vo(a,function(u,d){return Ty(e,r,i,u,d,n,l)}),Tu(e,i,!1),n&&e.u&&tr("Patches").N(r,n,e.u,e.s)}return r.o}function Ty(e,t,n,r,i,a,l){if(co(i)){var u=Ou(e,i,a&&t&&t.i!==3&&!Mi(t.R,r)?a.concat(r):void 0);if(M1(n,r,u),!co(u))return;e.m=!1}else l&&n.add(i);if(Sr(i)&&!dm(i)){if(!e.h.D&&e._<1)return;Ou(e,i),t&&t.A.l||Tu(e,i)}}function Tu(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&cm(t,n)}function Jd(e,t){var n=e[Qe];return(n?To(n):e)[t]}function zy(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function jr(e){e.P||(e.P=!0,e.l&&jr(e.l))}function Xd(e){e.o||(e.o=um(e.t))}function Ap(e,t,n){var r=sm(t)?tr("MapSet").F(t,n):lm(t)?tr("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),u={i:l?1:0,A:a?a.A:Lp(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=u,f=ys;l&&(d=[u],f=Na);var h=Proxy.revocable(d,f),m=h.revoke,g=h.proxy;return u.k=g,u.j=m,g}(t,n):tr("ES5").J(t,n);return(n?n.A:Lp()).p.push(r),r}function jL(e){return co(e)||Ln(22,e),function t(n){if(!Sr(n))return n;var r,i=n[Qe],a=ea(n);if(i){if(!i.P&&(i.i<4||!tr("ES5").K(i)))return i.t;i.I=!0,r=Ly(n,a),i.I=!1}else r=Ly(n,a);return Vo(r,function(l,u){i&&IL(i.t,l)===u||M1(r,l,t(u))}),a===3?new Set(r):r}(e)}function Ly(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return um(e)}function UL(){function e(a,l){var u=i[a];return u?u.enumerable=l:i[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[Qe];return ys.get(d,a)},set:function(d){var f=this[Qe];ys.set(f,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][Qe];if(!u.P)switch(u.i){case 5:r(u)&&jr(u);break;case 4:n(u)&&jr(u)}}}function n(a){for(var l=a.t,u=a.k,d=Di(u),f=d.length-1;f>=0;f--){var h=d[f];if(h!==Qe){var m=l[h];if(m===void 0&&!Mi(l,h))return!0;var g=u[h],x=g&&g[Qe];if(x?x.t!==m:!D1(g,m))return!0}}var w=!!l[Qe];return d.length!==Di(l).length+(w?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};DL("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(h,m){if(h){for(var g=Array(m.length),x=0;x<m.length;x++)Object.defineProperty(g,""+x,e(x,!0));return g}var w=j1(m);delete w[Qe];for(var v=Di(w),P=0;P<v.length;P++){var y=v[P];w[y]=e(y,h||!!w[y].enumerable)}return Object.create(Object.getPrototypeOf(m),w)}(u,a),f={i:u?5:4,A:l?l.A:Lp(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,Qe,{value:f,writable:!0}),d},S:function(a,l,u){u?co(l)&&l[Qe].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var h=f[Qe];if(h){var m=h.t,g=h.k,x=h.R,w=h.i;if(w===4)Vo(g,function(S){S!==Qe&&(m[S]!==void 0||Mi(m,S)?x[S]||d(g[S]):(x[S]=!0,jr(h)))}),Vo(m,function(S){g[S]!==void 0||Mi(g,S)||(x[S]=!1,jr(h))});else if(w===5){if(r(h)&&(jr(h),x.length=!0),g.length<m.length)for(var v=g.length;v<m.length;v++)x[v]=!1;else for(var P=m.length;P<g.length;P++)x[P]=!0;for(var y=Math.min(g.length,m.length),b=0;b<y;b++)g.hasOwnProperty(b)||(x[b]=!0),x[b]===void 0&&d(g[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var Ry,vs,fm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",$L=typeof Map<"u",WL=typeof Set<"u",Ay=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",F1=fm?Symbol.for("immer-nothing"):((Ry={})["immer-nothing"]=!0,Ry),By=fm?Symbol.for("immer-draftable"):"__$immer_draftable",Qe=fm?Symbol.for("immer-state"):"__$immer_state",HL=""+Object.prototype.constructor,Di=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,j1=Object.getOwnPropertyDescriptors||function(e){var t={};return Di(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Bp={},ys={get:function(e,t){if(t===Qe)return e;var n=To(e);if(!Mi(n,t))return function(i,a,l){var u,d=zy(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Sr(r)?r:r===Jd(e.t,t)?(Xd(e),e.o[t]=Ap(e.A.h,r,e)):r},has:function(e,t){return t in To(e)},ownKeys:function(e){return Reflect.ownKeys(To(e))},set:function(e,t,n){var r=zy(To(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Jd(To(e),t),a=i?.[Qe];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(D1(n,i)&&(n!==void 0||Mi(e.t,t)))return!0;Xd(e),jr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Jd(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Xd(e),jr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=To(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ln(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ln(12)}},Na={};Vo(ys,function(e,t){Na[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Na.deleteProperty=function(e,t){return Na.set.call(this,e,t,void 0)},Na.set=function(e,t,n){return ys.set.call(this,e[0],t,n,e[0])};var ZL=function(){function e(n){var r=this;this.g=Ay,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var d=r;return function(v){var P=this;v===void 0&&(v=u);for(var y=arguments.length,b=Array(y>1?y-1:0),S=1;S<y;S++)b[S-1]=arguments[S];return d.produce(v,function(C){var z;return(z=a).call.apply(z,[P,C].concat(b))})}}var f;if(typeof a!="function"&&Ln(6),l!==void 0&&typeof l!="function"&&Ln(7),Sr(i)){var h=Oy(r),m=Ap(r,i,void 0),g=!0;try{f=a(m),g=!1}finally{g?Eu(h):Rp(h)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(v){return Qd(h,l),Gd(v,h)},function(v){throw Eu(h),v}):(Qd(h,l),Gd(f,h))}if(!i||typeof i!="object"){if((f=a(i))===void 0&&(f=i),f===F1&&(f=void 0),r.D&&cm(f,!0),l){var x=[],w=[];tr("Patches").M(i,f,x,w),l(x,w)}return f}Ln(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(f){for(var h=arguments.length,m=Array(h>1?h-1:0),g=1;g<h;g++)m[g-1]=arguments[g];return r.produceWithPatches(f,function(x){return i.apply(void 0,[x].concat(m))})};var l,u,d=r.produce(i,a,function(f,h){l=f,u=h});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Sr(n)||Ln(8),co(n)&&(n=jL(n));var r=Oy(this),i=Ap(this,n,void 0);return i[Qe].C=!0,Rp(r),i},t.finishDraft=function(n,r){var i=n&&n[Qe],a=i.A;return Qd(a,r),Gd(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Ay&&Ln(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=tr("Patches").$;return co(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),rn=new ZL,U1=rn.produce;rn.produceWithPatches.bind(rn);rn.setAutoFreeze.bind(rn);rn.setUseProxies.bind(rn);rn.applyPatches.bind(rn);rn.createDraft.bind(rn);rn.finishDraft.bind(rn);function Ny(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Iy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ny(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ny(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var My=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Yd=function(){return Math.random().toString(36).substring(7).split("").join(".")},zu={INIT:"@@redux/INIT"+Yd(),REPLACE:"@@redux/REPLACE"+Yd(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Yd()}};function VL(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function $1(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Rt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Rt(1));return n($1)(e,t)}if(typeof e!="function")throw new Error(Rt(2));var i=e,a=t,l=[],u=l,d=!1;function f(){u===l&&(u=l.slice())}function h(){if(d)throw new Error(Rt(3));return a}function m(v){if(typeof v!="function")throw new Error(Rt(4));if(d)throw new Error(Rt(5));var P=!0;return f(),u.push(v),function(){if(P){if(d)throw new Error(Rt(6));P=!1,f();var b=u.indexOf(v);u.splice(b,1),l=null}}}function g(v){if(!VL(v))throw new Error(Rt(7));if(typeof v.type>"u")throw new Error(Rt(8));if(d)throw new Error(Rt(9));try{d=!0,a=i(a,v)}finally{d=!1}for(var P=l=u,y=0;y<P.length;y++){var b=P[y];b()}return v}function x(v){if(typeof v!="function")throw new Error(Rt(10));i=v,g({type:zu.REPLACE})}function w(){var v,P=m;return v={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Rt(11));function S(){b.next&&b.next(h())}S();var C=P(S);return{unsubscribe:C}}},v[My]=function(){return this},v}return g({type:zu.INIT}),r={dispatch:g,subscribe:m,getState:h,replaceReducer:x},r[My]=w,r}function qL(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:zu.INIT});if(typeof r>"u")throw new Error(Rt(12));if(typeof n(void 0,{type:zu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Rt(13))})}function KL(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{qL(n)}catch(u){l=u}return function(d,f){if(d===void 0&&(d={}),l)throw l;for(var h=!1,m={},g=0;g<a.length;g++){var x=a[g],w=n[x],v=d[x],P=w(v,f);if(typeof P>"u")throw f&&f.type,new Error(Rt(14));m[x]=P,h=h||P!==v}return h=h||a.length!==Object.keys(d).length,h?m:d}}function Lu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function QL(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(Rt(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=Lu.apply(void 0,u)(i.dispatch),Iy(Iy({},i),{},{dispatch:a})}}}function W1(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(i,a,e):l(u)}}};return t}var H1=W1();H1.withExtraArgument=W1;const Dy=H1;var GL=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),JL=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(f){return function(h){return d([f,h])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=f[0]&2?i.return:f[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,f[1])).done)return a;switch(i=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(h){f=[6,h],i=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Ru=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},XL=Object.defineProperty,YL=Object.defineProperties,eR=Object.getOwnPropertyDescriptors,Fy=Object.getOwnPropertySymbols,tR=Object.prototype.hasOwnProperty,nR=Object.prototype.propertyIsEnumerable,jy=function(e,t,n){return t in e?XL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},no=function(e,t){for(var n in t||(t={}))tR.call(t,n)&&jy(e,n,t[n]);if(Fy)for(var r=0,i=Fy(t);r<i.length;r++){var n=i[r];nR.call(t,n)&&jy(e,n,t[n])}return e},ef=function(e,t){return YL(e,eR(t))},rR=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{u(n.next(d))}catch(f){i(f)}},l=function(d){try{u(n.throw(d))}catch(f){i(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},oR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Lu:Lu.apply(null,arguments)};function iR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var aR=function(e){GL(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ru([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ru([void 0],n.concat(this))))},t}(Array);function Np(e){return Sr(e)?U1(e,function(){}):e}function sR(e){return typeof e=="boolean"}function lR(){return function(t){return uR(t)}}function uR(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new aR;return n&&(sR(n)?r.push(Dy):r.push(Dy.withExtraArgument(n.extraArgument))),r}var cR=!0;function dR(e){var t=lR(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,h=f===void 0?void 0:f,m=n.enhancers,g=m===void 0?void 0:m,x;if(typeof i=="function")x=i;else if(iR(i))x=KL(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var w=l;typeof w=="function"&&(w=w(t));var v=QL.apply(void 0,w),P=Lu;d&&(P=oR(no({trace:!cR},typeof d=="object"&&d)));var y=[v];Array.isArray(g)?y=Ru([v],g):typeof g=="function"&&(y=g(y));var b=P.apply(void 0,y);return $1(x,h,b)}function ro(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return no(no({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Z1(e){var t={},n=[],r,i={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function fR(e){return typeof e=="function"}function pR(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Z1(t):[t,n,r],a=i[0],l=i[1],u=i[2],d;if(fR(e))d=function(){return Np(e())};else{var f=Np(e);d=function(){return f}}function h(m,g){m===void 0&&(m=d());var x=Ru([a[g.type]],l.filter(function(w){var v=w.matcher;return v(g)}).map(function(w){var v=w.reducer;return v}));return x.filter(function(w){return!!w}).length===0&&(x=[u]),x.reduce(function(w,v){if(v)if(co(w)){var P=w,y=v(P,g);return y===void 0?w:y}else{if(Sr(w))return U1(w,function(b){return v(b,g)});var y=v(w,g);if(y===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return w},m)}return h.getInitialState=d,h}function hR(e,t){return e+"/"+t}function mR(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Np(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},u={};i.forEach(function(h){var m=r[h],g=hR(t,h),x,w;"reducer"in m?(x=m.reducer,w=m.prepare):x=m,a[h]=x,l[g]=x,u[h]=w?ro(g,w):ro(g)});function d(){var h=typeof e.extraReducers=="function"?Z1(e.extraReducers):[e.extraReducers],m=h[0],g=m===void 0?{}:m,x=h[1],w=x===void 0?[]:x,v=h[2],P=v===void 0?void 0:v,y=no(no({},g),l);return pR(n,function(b){for(var S in y)b.addCase(S,y[S]);for(var C=0,z=w;C<z.length;C++){var B=z[C];b.addMatcher(B.matcher,B.reducer)}P&&b.addDefaultCase(P)})}var f;return{name:t,reducer:function(h,m){return f||(f=d()),f(h,m)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var _R="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",gR=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=_R[Math.random()*64|0];return t},vR=["name","message","stack","code"],tf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Uy=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),yR=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=vR;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},V1=function(){function e(t,n,r){var i=ro(t+"/fulfilled",function(f,h,m,g){return{payload:f,meta:ef(no({},g||{}),{arg:m,requestId:h,requestStatus:"fulfilled"})}}),a=ro(t+"/pending",function(f,h,m){return{payload:void 0,meta:ef(no({},m||{}),{arg:h,requestId:f,requestStatus:"pending"})}}),l=ro(t+"/rejected",function(f,h,m,g,x){return{payload:g,error:(r&&r.serializeError||yR)(f||"Rejected"),meta:ef(no({},x||{}),{arg:m,requestId:h,rejectedWithValue:!!g,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(h,m,g){var x=r?.idGenerator?r.idGenerator(f):gR(),w=new u,v;function P(b){v=b,w.abort()}var y=function(){return rR(this,null,function(){var b,S,C,z,B,A,j;return JL(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),z=(b=r?.condition)==null?void 0:b.call(r,f,{getState:m,extra:g}),xR(z)?[4,z]:[3,2];case 1:z=Z.sent(),Z.label=2;case 2:if(z===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return B=new Promise(function($,X){return w.signal.addEventListener("abort",function(){return X({name:"AbortError",message:v||"Aborted"})})}),h(a(x,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:x,arg:f},{getState:m,extra:g}))),[4,Promise.race([B,Promise.resolve(n(f,{dispatch:h,getState:m,extra:g,requestId:x,signal:w.signal,abort:P,rejectWithValue:function($,X){return new tf($,X)},fulfillWithValue:function($,X){return new Uy($,X)}})).then(function($){if($ instanceof tf)throw $;return $ instanceof Uy?i($.payload,x,f,$.meta):i($,x,f)})])];case 3:return C=Z.sent(),[3,5];case 4:return A=Z.sent(),C=A instanceof tf?l(null,x,f,A.payload,A.meta):l(A,x,f),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&l.match(C)&&C.meta.condition,j||h(C),[2,C]}})})}();return Object.assign(y,{abort:P,requestId:x,arg:f,unwrap:function(){return y.then(bR)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function bR(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function xR(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var pm="listenerMiddleware";ro(pm+"/add");ro(pm+"/removeAll");ro(pm+"/remove");var $y;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);UL();const wR={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:"Name",evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[],fWD:!1,rWD:!1,rearAxleSteering:!1,adaptiveCruiseControl:!1,autoSteer:!1,automaticParking:!1,blindSpotMonitoring:!1,automatedLaneChange:!1,driverDrowsinessDetection:!1,driverMonitoringSystem:!1,rearCrossTrafficAlert:!1,exitWarning:!1,trafficSignRecognition:!1,efficiencyAssist:!1},searchOptions:{brands:["Audi","BMW","BYD","CUPRA","Hongqi","Hyundai","Kia","Lucid","Mercedes","Nio","Nissan","Porsche","SKODA","Tesla","Toyota","Volkswagen"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},Ip=V1("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await I1.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),Mp=V1("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await I1.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),q1=mR({name:"evsearch",initialState:wR,reducers:{updateSortOrder:(e,t)=>{e.search.sortOrder=t.payload},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateRWD:(e,t)=>{e.search.rWD=t.payload},updateFWD:(e,t)=>{e.search.fWD=t.payload},updateRearAxleSteering:(e,t)=>{e.search.rearAxleSteering=t.payload},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{e.search.airSuspension=t.payload},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateAdaptiveCruiseControl:(e,t)=>{e.search.adaptiveCruiseControl=t.payload},updateAutoSteer:(e,t)=>{e.search.autoSteer=t.payload},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n},updateSortOrderFromParam:(e,t)=>{e.search.sortOrder=t.payload}},extraReducers:e=>{e.addCase(Ip.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Ip.rejected,(t,n)=>{t.error=n.error.message}).addCase(Mp.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Mp.rejected,(t,n)=>{t.error=n.error.message})}}),kR=q1.reducer,{updateSortOrder:SR,updateEvType:PR,updateBrands:CR,updateSeatConfig:ER,updateAllWheelDrive:OR,updateNightVision:TR,updateAdaptiveDamping:zR,updateAdaptiveAirSuspension:LR,updateInstrumentCluster:RR,updateHeadUpDisplay:AR,updateAndroidAuto:BR,updateAppleCarPlay:NR,updateColors:IR,updateFWD:MR,updateRWD:DR,updateRearAxleSteering:FR,updateSortOrderFromParam:v5,updateAdaptiveCruiseControl:jR,updateAutoSteer:UR}=q1.actions,fr=tP,$R=()=>bP(),WR="_pageContainer_kmlfw_3",HR="_exitButton_kmlfw_71",ZR={pageContainer:WR,exitButton:HR},VR=({children:e})=>(wC(),$h("common"),ae("div",{className:ZR.pageContainer,children:ae("div",{children:e})})),qR="_evsearchAccordionContent_1w6bc_1",KR="_evText_1w6bc_11",QR="_scopeItems_1w6bc_19",GR="_line_1w6bc_27",JR="_contentTexts_1w6bc_37",XR="_bottomContentTexts_1w6bc_47",YR="_thumb_1w6bc_55",e5="_card_1w6bc_73",t5="_cards_1w6bc_81",n5="_thumbcontainer_1w6bc_105",di={evsearchAccordionContent:qR,evText:KR,scopeItems:QR,line:GR,contentTexts:JR,bottomContentTexts:XR,thumb:YR,card:e5,cards:t5,thumbcontainer:n5},r5=({title:e="No info",subtitle:t="No info",maxPower:n=0,topSpeedKph:r=0,infoUri:i="",netBattery:a=0,wltpConsumption:l=0,wltpRange:u=0,zeroTo100:d=0,thumbUri:f="",maxDcChargingSpeed:h=0,averageDcChargingSpeed:m=0})=>{const[g,x]=T.useState(!1);return ae("div",{children:at(f1,{open:g,onClick:()=>{x(!g)},children:[ae(m1,{subtitle:t,children:e}),ae(p1,{children:ae("div",{className:di.evsearchAccordionContent,children:at("div",{className:di.cards,children:[ae("div",{className:di.card,children:ae("div",{className:di.thumbcontainer,children:ae("img",{src:f,alt:e,className:di.thumb})})}),at("div",{className:di.card,children:["Read our ",ae("a",{href:i,children:"full article"}),", see all"," ",ae("a",{href:i+"specifications/",children:"specifications"}),", or see our"," ",ae("a",{href:i+"gallery/",children:"image gallery"}),".",ae("br",{}),ae("br",{}),at(xz,{borderStyle:"dashed",children:[at(Po,{children:[ae("b",{children:wo("evsearch.specwltprange")})," - ",u," km"]}),at(Po,{children:[ae("b",{children:wo("evsearch.specwltpconsumption")})," - ",l," kWh/100km"]}),at(Po,{children:[ae("b",{children:wo("evsearch.specnetbattery")})," - ",a," kWh"]}),at(Po,{children:[ae("b",{children:wo("evsearch.zeroto100")})," - ",d," seconds"]}),at(Po,{children:[ae("b",{children:wo("evsearch.topspeed")}),"- ",r," km/h"]}),at(Po,{children:[ae("b",{children:wo("evsearch.maxpower")})," - ",n," kW"]}),at(Po,{children:[ae("b",{children:wo("evsearch.chargingspeed")})," - ",h,"/",m," kW"]})]})]})]})})})]})})},o5="_pageContent_1gqfc_1",i5="_pageContentContainer_1gqfc_19",a5="_resultInfo_1gqfc_33",s5="_searchinput_1gqfc_45",l5="_searchinfo_1gqfc_53",u5="_searchinfoContent_1gqfc_63",Co={pageContent:o5,pageContentContainer:i5,resultInfo:a5,searchinput:s5,searchinfo:l5,searchinfoContent:u5},Wy=()=>{const{t:e}=$h("common"),t=fr(M=>M.evsearchResult.loading),n=$R(),r=async()=>await n(Mp()),i=fr(M=>M.evsearchResult.evList.evs),a=fr(M=>M.evsearchResult.evList.count),l=fr(M=>M.evsearchResult.searchOptions.bodyTypes),u=fr(M=>M.evsearchResult.searchOptions.colors),d=fr(M=>M.evsearchResult.searchOptions.seatConfiguration),f=fr(M=>M.evsearchResult.searchOptions.brands),h=fr(M=>M.evsearchResult.search),m=async M=>await n(Ip(M)),g=fr(M=>M.evsearchResult.error);T.useEffect(()=>{t&&(r(),m(h))},[]),T.useEffect(()=>{t||m(h)},[h]);const x=M=>{n(SR(M))},w=M=>{n(CR(M))},v=f.map(M=>({label:M,value:M})),P=M=>{n(PR(M))},y=M=>{n(ER(M))},b=M=>{n(OR(M.target.checked))},S=M=>{n(DR(M.target.checked))},C=M=>{n(MR(M.target.checked))},z=M=>{n(FR(M.target.checked))},B=M=>{n(TR(M.target.checked))},A=M=>{n(zR(M.target.checked))},j=M=>{n(LR(M.target.checked))},Z=M=>{n(RR(M.target.checked))},$=M=>{n(AR(M.target.checked))},X=M=>{n(NR(M.target.checked))},ne=M=>{n(jR(M.target.checked))},se=M=>{n(UR(M.target.checked))},ee=M=>{n(BR(M.target.checked))},pe=M=>{n(IR(M))},re=()=>g?ae($O,{title:e("api_delegation.data_retrieval_failed"),variant:Wr.Error,forceMobileLayout:!0,children:at("div",{children:[e("api_delegation.error_message"),": ",g]})}):t?ae("center",{children:ae(cz,{title:"Spinner",size:"3xLarge",variant:"interaction"})}):i.map((M,D)=>ae(r5,{title:M.name,subtitle:M.sortValue+" "+M.sortParameter,maxPower:M.maxPowerKw,topSpeedKph:M.topSpeedKph,infoUri:M.infoUri,wltpConsumption:M.wltpConsumption,wltpRange:M.wltpRange,netBattery:M.netBattery,zeroTo100:M.zeroTo100,thumbUri:M.thumbUri,averageDcChargingSpeed:M.averageDcChargingSpeed,maxDcChargingSpeed:M.maxDcChargingSpeed},D));return ae(VR,{children:ae(ZO,{children:at(Id,{children:[at("div",{className:Co.pageContent,children:[ae(Vh,{legend:"Welcome to EVKX EV Search",size:Cp.Small,className:Co.searchinfo,contentClassName:Co.searchinfoContent,children:at("p",{children:["EVKX offers the most comprehensive search for EVs.",ae("br",{}),"You can search and sort on a whole lot of parameters. Please read our"," ",ae("a",{href:"/guides/evsearch/",children:"search guide"})]})}),ae("br",{}),ae(Pp,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:x,options:[{label:String(e("evsearch.sortorderbrand")),value:"Name"},{label:String(e("evsearch.specwltprange")),value:"RangeMinimumWltp"},{label:String(e("evsearch.specwltpconsumption")),value:"WltpBasicConsumption"},{label:String(e("evsearch.sortordernetsize")),value:"NetBattery"},{label:String(e("evsearch.sortordernetsizedesc")),value:"NetBatteryDesc"},{label:String(e("evsearch.maxpowersort")),value:"PowerDesc"},{label:String(e("evsearch.topspeedsort")),value:"TopSpeedDesc"},{label:String(e("evsearch.maxdcchargingsort")),value:"MaxDCCharging"},{label:String(e("evsearch.averagechargingspeed0100")),value:"AverageChargingSpeedDesc"},{label:String(e("evsearch.averagechargingspeed10100")),value:"AverageChargingSpeed10100Desc"},{label:String(e("evsearch.averagechargingspeed1080")),value:"AverageChargingSpeed1080Desc"},{label:String(e("evsearch.sort0100kmh")),value:"ZeroTo100"},{label:String(e("evsearch.sort1000kmdrivingtime")),value:"DrivingTime1000kmChallenge"},{label:String(e("evsearch.sort1000kmaveragespeed")),value:"AverageSpeed1000kmChallengeDesc"},{label:String(e("evsearch.travelspeedwltpcyclus")),value:"TravelSpeedWltpDesc"},{label:String(e("evsearch.travelspeed120kmh")),value:"TravelSpeed120kmhDesc"},{label:String(e("evsearch.nominalvoltagesort")),value:"NominalVoltage"},{label:String(e("evsearch.trunksize")),value:"TrunkSizeDesc"},{label:String(e("evsearch.maxtrunksize")),value:"MaxTrunkSizeDesc"},{label:String(e("evsearch.maxload")),value:"MaxLoadDesc"},{label:String(e("evsearch.maxtrailer")),value:"MaxTrailerSizeDesc"},{label:String(e("evsearch.maxgroundclearance")),value:"MaxGroundClearanceDesc"},{label:String(e("evsearch.mingroundclearance")),value:"MinGroundClearance"},{label:String(e("evsearch.suspensionheightadjustment")),value:"SuspensionHeightAdjustment"}]}),ae(Pp,{label:String(e("evsearch.brandfilter")),multiple:!0,onChange:w,options:v}),ae("br",{}),ae(Nl,{"data-testid":"evsearch-evtype",variant:Ka.Horizontal,onChange:M=>{P(M)},compact:!0,legend:"Select body type",items:l.map(M=>({label:M,name:M,checked:h.evType===void 0||h.evType.includes(M)}))}),ae("br",{}),ae(Vx,{items:[{content:ae(Nl,{"data-testid":"evsearch-seatconfig",variant:Ka.Horizontal,onChange:M=>{y(M)},compact:!0,legend:"Number of seats",items:d.map(M=>({label:M,name:M,checked:h.seatConfiguration===void 0||h.seatConfiguration.includes(M)}))}),name:"Seats"},{content:at(Id,{children:[ae(Dt,{checked:h.allWheelDrive,label:"All wheel drive",onChange:b,compact:!0}),ae("br",{}),ae(Dt,{checked:h.rWD,label:"RWD",onChange:S,compact:!0}),ae("br",{}),ae(Dt,{checked:h.fWD,label:"FWD",onChange:C,compact:!0}),ae("br",{}),ae(Dt,{checked:h.adaptiveSuspension,label:"Adaptive Suspension",onChange:A,compact:!0}),ae("br",{}),ae(Dt,{checked:h.airSuspension,label:"Air Suspension",onChange:j,compact:!0}),ae("br",{}),ae(Dt,{checked:h.rearAxleSteering,label:"Rear Axle Steering",onChange:z,compact:!0})]}),name:"Drivetrain"},{content:at(Id,{children:[ae(Dt,{checked:h.nightVision,label:"Nightvision",onChange:B,compact:!0}),ae("br",{}),ae(Dt,{checked:h.adaptiveCruiseControl,label:"AdaptiveCruiseControl",onChange:ne,compact:!0}),ae("br",{}),ae(Dt,{checked:h.autoSteer,label:"Autosteer",onChange:se,compact:!0}),ae("br",{}),"Read more about Adavanced Driver Assist Systems in our"," ",ae("a",{href:"../technology/driverassistance/",children:"technology section"})]}),name:"Driver Assistance"},{content:ae(Nl,{"data-testid":"evsearch-evtype",variant:Ka.Horizontal,onChange:M=>{pe(M)},compact:!0,legend:"Select paint color",items:u.map(M=>({label:M,name:M,checked:h.colors===void 0||h.colors.includes(M)}))}),name:"Exterior"},{content:at("div",{children:[ae(Dt,{checked:h.headUpDisplay,label:"Head Up Display",onChange:$,compact:!0}),ae("br",{}),ae(Dt,{checked:h.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:Z,compact:!0}),ae("br",{}),ae(Dt,{checked:h.androidAuto,label:"Android Auto Support",onChange:ee,compact:!0}),ae("br",{}),ae(Dt,{checked:h.appleCarPlay,label:"Apple Car Play Support",onChange:X,compact:!0})]}),name:"UI & Interface"}]}),ae("br",{})]}),ae("div",{className:Co.pageContentAccordionsContainer,children:at("div",{className:Co.apiAccordions,children:[at("h4",{className:Co.resultInfo,children:[a," ",e("evsearch.searchresult"),":"]}),ae("div",{className:Co.accordionScrollContainer,children:re()})]})})]})})})},c5=MC([{path:"/",errorElement:ae(Bd,{})},{path:"evsearch",element:ae(Wy,{}),errorElement:ae(Bd,{})},{path:"nb/evsearch",element:ae(Wy,{}),errorElement:ae(Bd,{})}],{basename:"/"}),d5={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},jl={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in jl)jl[e]===void 0&&delete jl[e];const f5={...d5,...jl};function p5(e){return f5[e]}const h5=({children:e})=>{const{i18n:t}=$h("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,l=new URL(a,import.meta.url).href;return BE("Localizations",async()=>{const d=await(await fetch(l)).json();It.addResourceBundle(t.language,"common",d)},{staleTime:1/0,suspense:!0}),ae(kk,{children:e})};var Au={},m5={get exports(){return Au},set exports(e){Au=e}};(function(e,t){(function(n,r){r(t)})(fi,function(n){function r(E,N){E.super_=N,E.prototype=Object.create(N.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}})}function i(E,N){Object.defineProperty(this,"kind",{value:E,enumerable:!0}),N&&N.length&&Object.defineProperty(this,"path",{value:N,enumerable:!0})}function a(E,N,R){a.super_.call(this,"E",E),Object.defineProperty(this,"lhs",{value:N,enumerable:!0}),Object.defineProperty(this,"rhs",{value:R,enumerable:!0})}function l(E,N){l.super_.call(this,"N",E),Object.defineProperty(this,"rhs",{value:N,enumerable:!0})}function u(E,N){u.super_.call(this,"D",E),Object.defineProperty(this,"lhs",{value:N,enumerable:!0})}function d(E,N,R){d.super_.call(this,"A",E),Object.defineProperty(this,"index",{value:N,enumerable:!0}),Object.defineProperty(this,"item",{value:R,enumerable:!0})}function f(E,N,R){var V=E.slice((R||N)+1||E.length);return E.length=N<0?E.length+N:N,E.push.apply(E,V),E}function h(E){var N=typeof E>"u"?"undefined":pe(E);return N!=="object"?N:E===Math?"math":E===null?"null":Array.isArray(E)?"array":Object.prototype.toString.call(E)==="[object Date]"?"date":typeof E.toString=="function"&&/^\/.*\//.test(E.toString())?"regexp":"object"}function m(E,N,R,V,te,oe,le){te=te||[],le=le||[];var ye=te.slice(0);if(typeof oe<"u"){if(V){if(typeof V=="function"&&V(ye,oe))return;if((typeof V>"u"?"undefined":pe(V))==="object"){if(V.prefilter&&V.prefilter(ye,oe))return;if(V.normalize){var ie=V.normalize(ye,oe,E,N);ie&&(E=ie[0],N=ie[1])}}}ye.push(oe)}h(E)==="regexp"&&h(N)==="regexp"&&(E=E.toString(),N=N.toString());var he=typeof E>"u"?"undefined":pe(E),be=typeof N>"u"?"undefined":pe(N),Le=he!=="undefined"||le&&le[le.length-1].lhs&&le[le.length-1].lhs.hasOwnProperty(oe),qe=be!=="undefined"||le&&le[le.length-1].rhs&&le[le.length-1].rhs.hasOwnProperty(oe);if(!Le&&qe)R(new l(ye,N));else if(!qe&&Le)R(new u(ye,E));else if(h(E)!==h(N))R(new a(ye,E,N));else if(h(E)==="date"&&E-N!==0)R(new a(ye,E,N));else if(he==="object"&&E!==null&&N!==null)if(le.filter(function($e){return $e.lhs===E}).length)E!==N&&R(new a(ye,E,N));else{if(le.push({lhs:E,rhs:N}),Array.isArray(E)){var Ce;for(E.length,Ce=0;Ce<E.length;Ce++)Ce>=N.length?R(new d(ye,Ce,new u(void 0,E[Ce]))):m(E[Ce],N[Ce],R,V,ye,Ce,le);for(;Ce<N.length;)R(new d(ye,Ce,new l(void 0,N[Ce++])))}else{var lt=Object.keys(E),_t=Object.keys(N);lt.forEach(function($e,Wt){var rr=_t.indexOf($e);rr>=0?(m(E[$e],N[$e],R,V,ye,$e,le),_t=f(_t,rr)):m(E[$e],void 0,R,V,ye,$e,le)}),_t.forEach(function($e){m(void 0,N[$e],R,V,ye,$e,le)})}le.length=le.length-1}else E!==N&&(he==="number"&&isNaN(E)&&isNaN(N)||R(new a(ye,E,N)))}function g(E,N,R,V){return V=V||[],m(E,N,function(te){te&&V.push(te)},R),V.length?V:void 0}function x(E,N,R){if(R.path&&R.path.length){var V,te=E[N],oe=R.path.length-1;for(V=0;V<oe;V++)te=te[R.path[V]];switch(R.kind){case"A":x(te[R.path[V]],R.index,R.item);break;case"D":delete te[R.path[V]];break;case"E":case"N":te[R.path[V]]=R.rhs}}else switch(R.kind){case"A":x(E[N],R.index,R.item);break;case"D":E=f(E,N);break;case"E":case"N":E[N]=R.rhs}return E}function w(E,N,R){if(E&&N&&R&&R.kind){for(var V=E,te=-1,oe=R.path?R.path.length-1:0;++te<oe;)typeof V[R.path[te]]>"u"&&(V[R.path[te]]=typeof R.path[te]=="number"?[]:{}),V=V[R.path[te]];switch(R.kind){case"A":x(R.path?V[R.path[te]]:V,R.index,R.item);break;case"D":delete V[R.path[te]];break;case"E":case"N":V[R.path[te]]=R.rhs}}}function v(E,N,R){if(R.path&&R.path.length){var V,te=E[N],oe=R.path.length-1;for(V=0;V<oe;V++)te=te[R.path[V]];switch(R.kind){case"A":v(te[R.path[V]],R.index,R.item);break;case"D":te[R.path[V]]=R.lhs;break;case"E":te[R.path[V]]=R.lhs;break;case"N":delete te[R.path[V]]}}else switch(R.kind){case"A":v(E[N],R.index,R.item);break;case"D":E[N]=R.lhs;break;case"E":E[N]=R.lhs;break;case"N":E=f(E,N)}return E}function P(E,N,R){if(E&&N&&R&&R.kind){var V,te,oe=E;for(te=R.path.length-1,V=0;V<te;V++)typeof oe[R.path[V]]>"u"&&(oe[R.path[V]]={}),oe=oe[R.path[V]];switch(R.kind){case"A":v(oe[R.path[V]],R.index,R.item);break;case"D":oe[R.path[V]]=R.lhs;break;case"E":oe[R.path[V]]=R.lhs;break;case"N":delete oe[R.path[V]]}}}function y(E,N,R){if(E&&N){var V=function(te){R&&!R(E,N,te)||w(E,N,te)};m(E,N,V)}}function b(E){return"color: "+D[E].color+"; font-weight: bold"}function S(E){var N=E.kind,R=E.path,V=E.lhs,te=E.rhs,oe=E.index,le=E.item;switch(N){case"E":return[R.join("."),V,"→",te];case"N":return[R.join("."),te];case"D":return[R.join(".")];case"A":return[R.join(".")+"["+oe+"]",le];default:return[]}}function C(E,N,R,V){var te=g(E,N);try{V?R.groupCollapsed("diff"):R.group("diff")}catch{R.log("diff")}te?te.forEach(function(oe){var le=oe.kind,ye=S(oe);R.log.apply(R,["%c "+D[le].text,b(le)].concat(re(ye)))}):R.log("—— no diff ——");try{R.groupEnd()}catch{R.log("—— diff end —— ")}}function z(E,N,R,V){switch(typeof E>"u"?"undefined":pe(E)){case"object":return typeof E[V]=="function"?E[V].apply(E,re(R)):E[V];case"function":return E(N);default:return E}}function B(E){var N=E.timestamp,R=E.duration;return function(V,te,oe){var le=["action"];return le.push("%c"+String(V.type)),N&&le.push("%c@ "+te),R&&le.push("%c(in "+oe.toFixed(2)+" ms)"),le.join(" ")}}function A(E,N){var R=N.logger,V=N.actionTransformer,te=N.titleFormatter,oe=te===void 0?B(N):te,le=N.collapsed,ye=N.colors,ie=N.level,he=N.diff,be=typeof N.titleFormatter>"u";E.forEach(function(Le,qe){var Ce=Le.started,lt=Le.startedTime,_t=Le.action,$e=Le.prevState,Wt=Le.error,rr=Le.took,Ot=Le.nextState,ln=E[qe+1];ln&&(Ot=ln.prevState,rr=ln.started-Ce);var Tt=V(_t),or=typeof le=="function"?le(function(){return Ot},_t,Le):le,ta=se(lt),na=ye.title?"color: "+ye.title(Tt)+";":"",un=["color: gray; font-weight: lighter;"];un.push(na),N.timestamp&&un.push("color: gray; font-weight: lighter;"),N.duration&&un.push("color: gray; font-weight: lighter;");var Fn=oe(Tt,ta,rr);try{or?ye.title&&be?R.groupCollapsed.apply(R,["%c "+Fn].concat(un)):R.groupCollapsed(Fn):ye.title&&be?R.group.apply(R,["%c "+Fn].concat(un)):R.group(Fn)}catch{R.log(Fn)}var U=z(ie,Tt,[$e],"prevState"),H=z(ie,Tt,[Tt],"action"),G=z(ie,Tt,[Wt,$e],"error"),ce=z(ie,Tt,[Ot],"nextState");if(U)if(ye.prevState){var me="color: "+ye.prevState($e)+"; font-weight: bold";R[U]("%c prev state",me,$e)}else R[U]("prev state",$e);if(H)if(ye.action){var ve="color: "+ye.action(Tt)+"; font-weight: bold";R[H]("%c action    ",ve,Tt)}else R[H]("action    ",Tt);if(Wt&&G)if(ye.error){var ge="color: "+ye.error(Wt,$e)+"; font-weight: bold;";R[G]("%c error     ",ge,Wt)}else R[G]("error     ",Wt);if(ce)if(ye.nextState){var we="color: "+ye.nextState(Ot)+"; font-weight: bold";R[ce]("%c next state",we,Ot)}else R[ce]("next state",Ot);he&&C($e,Ot,R,or);try{R.groupEnd()}catch{R.log("—— log end ——")}})}function j(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=Object.assign({},J,E),R=N.logger,V=N.stateTransformer,te=N.errorTransformer,oe=N.predicate,le=N.logErrors,ye=N.diffPredicate;if(typeof R>"u")return function(){return function(he){return function(be){return he(be)}}};if(E.getState&&E.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(he){return function(be){return he(be)}}};var ie=[];return function(he){var be=he.getState;return function(Le){return function(qe){if(typeof oe=="function"&&!oe(be,qe))return Le(qe);var Ce={};ie.push(Ce),Ce.started=ee.now(),Ce.startedTime=new Date,Ce.prevState=V(be()),Ce.action=qe;var lt=void 0;if(le)try{lt=Le(qe)}catch($e){Ce.error=te($e)}else lt=Le(qe);Ce.took=ee.now()-Ce.started,Ce.nextState=V(be());var _t=N.diff&&typeof ye=="function"?ye(be,qe):N.diff;if(A(ie,Object.assign({},N,{diff:_t})),ie.length=0,Ce.error)throw Ce.error;return lt}}}}var Z,$,X=function(E,N){return new Array(N+1).join(E)},ne=function(E,N){return X("0",N-E.toString().length)+E},se=function(E){return ne(E.getHours(),2)+":"+ne(E.getMinutes(),2)+":"+ne(E.getSeconds(),2)+"."+ne(E.getMilliseconds(),3)},ee=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},re=function(E){if(Array.isArray(E)){for(var N=0,R=Array(E.length);N<E.length;N++)R[N]=E[N];return R}return Array.from(E)},M=[];Z=(typeof fi>"u"?"undefined":pe(fi))==="object"&&fi?fi:typeof window<"u"?window:{},$=Z.DeepDiff,$&&M.push(function(){typeof $<"u"&&Z.DeepDiff===g&&(Z.DeepDiff=$,$=void 0)}),r(a,i),r(l,i),r(u,i),r(d,i),Object.defineProperties(g,{diff:{value:g,enumerable:!0},observableDiff:{value:m,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:w,enumerable:!0},revertChange:{value:P,enumerable:!0},isConflict:{value:function(){return typeof $<"u"},enumerable:!0},noConflict:{value:function(){return M&&(M.forEach(function(E){E()}),M=null),g},enumerable:!0}});var D={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},J={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(E){return E},actionTransformer:function(E){return E},errorTransformer:function(E){return E},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},K=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=E.dispatch,R=E.getState;return typeof N=="function"||typeof R=="function"?j()({dispatch:N,getState:R}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=J,n.createLogger=j,n.logger=K,n.default=K,Object.defineProperty(n,"__esModule",{value:!0})})})(m5,Au);Au.createLogger();const _5=dR({reducer:{evsearchResult:kR}}),g5=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};fO(XC).init({lng:g5("no_nb"),fallbackLng:p5("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new wE({defaultOptions:void 0});Y0(document.getElementById("root")).render(ae(T.StrictMode,{children:ae(gP,{store:_5,children:ae(OE,{client:e,children:ae(h5,{children:ae(RC,{router:c5})})})})}))});
