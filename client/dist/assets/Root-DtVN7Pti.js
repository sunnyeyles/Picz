import{r as u,p as Se,M as qe,u as Qe,f as P,a as L,b as W,j as i,B as j,c as Q,d as y,L as Ke,g as Ae,e as Je,h as ze,i as et,k as tt,I as Pe,l as nt,m as O,n as M,o as rt,q as ke,s as ot,t as at,v as st,w as lt,x as ct,y as it,O as ut}from"./index-Cxj4aO93.js";import{T as Te,c as dt,a as _,u as pt}from"./createReactComponent-GSEtkLkc.js";import{u as ft,p as K,U as Me,T as ht,g as vt,G as le}from"./Group-DYSC0JXo.js";import{C as mt}from"./Container-DSvad0L2.js";import"./__commonjsHelpers__-CqkleIqs.js";var A=function(){return A=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},A.apply(this,arguments)};function Be(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function gt(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,o;t<a;t++)(o||!(t in n))&&(o||(o=Array.prototype.slice.call(n,0,t)),o[t]=n[t]);return e.concat(o||Array.prototype.slice.call(n))}var U="right-scroll-bar-position",q="width-before-scroll-bar",bt="with-scroll-bars-hidden",yt="--removed-body-scroll-bar-size";function ne(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function wt(e,n){var r=u.useState(function(){return{value:e,callback:n,facade:{get current(){return r.value},set current(t){var a=r.value;a!==t&&(r.value=t,r.callback(t,a))}}}})[0];return r.callback=n,r.facade}var xt=typeof window<"u"?u.useLayoutEffect:u.useEffect,Ce=new WeakMap;function St(e,n){var r=wt(null,function(t){return e.forEach(function(a){return ne(a,t)})});return xt(function(){var t=Ce.get(r);if(t){var a=new Set(t),o=new Set(e),s=r.current;a.forEach(function(l){o.has(l)||ne(l,null)}),o.forEach(function(l){a.has(l)||ne(l,s)})}Ce.set(r,e)},[e]),r}function kt(e){return e}function Ct(e,n){n===void 0&&(n=kt);var r=[],t=!1,a={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(o){var s=n(o,t);return r.push(s),function(){r=r.filter(function(l){return l!==s})}},assignSyncMedium:function(o){for(t=!0;r.length;){var s=r;r=[],s.forEach(o)}r={push:function(l){return o(l)},filter:function(){return r}}},assignMedium:function(o){t=!0;var s=[];if(r.length){var l=r;r=[],l.forEach(o),s=r}var d=function(){var h=s;s=[],h.forEach(o)},p=function(){return Promise.resolve().then(d)};p(),r={push:function(h){s.push(h),p()},filter:function(h){return s=s.filter(h),r}}}};return a}function Lt(e){e===void 0&&(e={});var n=Ct(null);return n.options=A({async:!0,ssr:!1},e),n}var $e=function(e){var n=e.sideCar,r=Be(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var t=n.read();if(!t)throw new Error("Sidecar medium not found");return u.createElement(t,A({},r))};$e.isSideCarExport=!0;function jt(e,n){return e.useMedium(n),$e}var Ve=Lt(),re=function(){},J=u.forwardRef(function(e,n){var r=u.useRef(null),t=u.useState({onScrollCapture:re,onWheelCapture:re,onTouchMoveCapture:re}),a=t[0],o=t[1],s=e.forwardProps,l=e.children,d=e.className,p=e.removeScrollBar,h=e.enabled,c=e.shards,m=e.sideCar,v=e.noIsolation,b=e.inert,f=e.allowPinchZoom,g=e.as,w=g===void 0?"div":g,k=e.gapMode,x=Be(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=m,S=St([r,n]),E=A(A({},x),a);return u.createElement(u.Fragment,null,h&&u.createElement(C,{sideCar:Ve,removeScrollBar:p,shards:c,noIsolation:v,inert:b,setCallbacks:o,allowPinchZoom:!!f,lockRef:r,gapMode:k}),s?u.cloneElement(u.Children.only(l),A(A({},E),{ref:S})):u.createElement(w,A({},E,{className:d,ref:S}),l))});J.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};J.classNames={fullWidth:q,zeroRight:U};var Nt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function It(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=Nt();return n&&e.setAttribute("nonce",n),e}function _t(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function Et(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var Rt=function(){var e=0,n=null;return{add:function(r){e==0&&(n=It())&&(_t(n,r),Et(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},At=function(){var e=Rt();return function(n,r){u.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&r])}},Fe=function(){var e=At(),n=function(r){var t=r.styles,a=r.dynamic;return e(t,a),null};return n},zt={left:0,top:0,right:0,gap:0},oe=function(e){return parseInt(e||"",10)||0},Pt=function(e){var n=window.getComputedStyle(document.body),r=n[e==="padding"?"paddingLeft":"marginLeft"],t=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[oe(r),oe(t),oe(a)]},Tt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return zt;var n=Pt(e),r=document.documentElement.clientWidth,t=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,t-r+n[2]-n[0])}},Mt=Fe(),V="data-scroll-locked",Bt=function(e,n,r,t){var a=e.left,o=e.top,s=e.right,l=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(bt,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(l,"px ").concat(t,`;
  }
  body[`).concat(V,`] {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(t,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(t,`;
    `),r==="padding"&&"padding-right: ".concat(l,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(U,` {
    right: `).concat(l,"px ").concat(t,`;
  }
  
  .`).concat(q,` {
    margin-right: `).concat(l,"px ").concat(t,`;
  }
  
  .`).concat(U," .").concat(U,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(q," .").concat(q,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body[`).concat(V,`] {
    `).concat(yt,": ").concat(l,`px;
  }
`)},Le=function(){var e=parseInt(document.body.getAttribute(V)||"0",10);return isFinite(e)?e:0},$t=function(){u.useEffect(function(){return document.body.setAttribute(V,(Le()+1).toString()),function(){var e=Le()-1;e<=0?document.body.removeAttribute(V):document.body.setAttribute(V,e.toString())}},[])},Vt=function(e){var n=e.noRelative,r=e.noImportant,t=e.gapMode,a=t===void 0?"margin":t;$t();var o=u.useMemo(function(){return Tt(a)},[a]);return u.createElement(Mt,{styles:Bt(o,!n,a,r?"":"!important")})},ce=!1;if(typeof window<"u")try{var X=Object.defineProperty({},"passive",{get:function(){return ce=!0,!0}});window.addEventListener("test",X,X),window.removeEventListener("test",X,X)}catch{ce=!1}var B=ce?{passive:!1}:!1,Ft=function(e){return e.tagName==="TEXTAREA"},Oe=function(e,n){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[n]!=="hidden"&&!(r.overflowY===r.overflowX&&!Ft(e)&&r[n]==="visible")},Ot=function(e){return Oe(e,"overflowY")},Wt=function(e){return Oe(e,"overflowX")},je=function(e,n){var r=n.ownerDocument,t=n;do{typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&(t=t.host);var a=We(e,t);if(a){var o=He(e,t),s=o[1],l=o[2];if(s>l)return!0}t=t.parentNode}while(t&&t!==r.body);return!1},Ht=function(e){var n=e.scrollTop,r=e.scrollHeight,t=e.clientHeight;return[n,r,t]},Dt=function(e){var n=e.scrollLeft,r=e.scrollWidth,t=e.clientWidth;return[n,r,t]},We=function(e,n){return e==="v"?Ot(n):Wt(n)},He=function(e,n){return e==="v"?Ht(n):Dt(n)},Gt=function(e,n){return e==="h"&&n==="rtl"?-1:1},Xt=function(e,n,r,t,a){var o=Gt(e,window.getComputedStyle(n).direction),s=o*t,l=r.target,d=n.contains(l),p=!1,h=s>0,c=0,m=0;do{var v=He(e,l),b=v[0],f=v[1],g=v[2],w=f-g-o*b;(b||w)&&We(e,l)&&(c+=w,m+=b),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!d&&l!==document.body||d&&(n.contains(l)||n===l));return(h&&(Math.abs(c)<1||!a)||!h&&(Math.abs(m)<1||!a))&&(p=!0),p},Y=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ne=function(e){return[e.deltaX,e.deltaY]},Ie=function(e){return e&&"current"in e?e.current:e},Yt=function(e,n){return e[0]===n[0]&&e[1]===n[1]},Zt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ut=0,$=[];function qt(e){var n=u.useRef([]),r=u.useRef([0,0]),t=u.useRef(),a=u.useState(Ut++)[0],o=u.useState(Fe)[0],s=u.useRef(e);u.useEffect(function(){s.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var f=gt([e.lockRef.current],(e.shards||[]).map(Ie),!0).filter(Boolean);return f.forEach(function(g){return g.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),f.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=u.useCallback(function(f,g){if("touches"in f&&f.touches.length===2||f.type==="wheel"&&f.ctrlKey)return!s.current.allowPinchZoom;var w=Y(f),k=r.current,x="deltaX"in f?f.deltaX:k[0]-w[0],C="deltaY"in f?f.deltaY:k[1]-w[1],S,E=f.target,N=Math.abs(x)>Math.abs(C)?"h":"v";if("touches"in f&&N==="h"&&E.type==="range")return!1;var z=je(N,E);if(!z)return!0;if(z?S=N:(S=N==="v"?"h":"v",z=je(N,E)),!z)return!1;if(!t.current&&"changedTouches"in f&&(x||C)&&(t.current=S),!S)return!0;var xe=t.current||S;return Xt(xe,g,f,xe==="h"?x:C,!0)},[]),d=u.useCallback(function(f){var g=f;if(!(!$.length||$[$.length-1]!==o)){var w="deltaY"in g?Ne(g):Y(g),k=n.current.filter(function(S){return S.name===g.type&&(S.target===g.target||g.target===S.shadowParent)&&Yt(S.delta,w)})[0];if(k&&k.should){g.cancelable&&g.preventDefault();return}if(!k){var x=(s.current.shards||[]).map(Ie).filter(Boolean).filter(function(S){return S.contains(g.target)}),C=x.length>0?l(g,x[0]):!s.current.noIsolation;C&&g.cancelable&&g.preventDefault()}}},[]),p=u.useCallback(function(f,g,w,k){var x={name:f,delta:g,target:w,should:k,shadowParent:Qt(w)};n.current.push(x),setTimeout(function(){n.current=n.current.filter(function(C){return C!==x})},1)},[]),h=u.useCallback(function(f){r.current=Y(f),t.current=void 0},[]),c=u.useCallback(function(f){p(f.type,Ne(f),f.target,l(f,e.lockRef.current))},[]),m=u.useCallback(function(f){p(f.type,Y(f),f.target,l(f,e.lockRef.current))},[]);u.useEffect(function(){return $.push(o),e.setCallbacks({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:m}),document.addEventListener("wheel",d,B),document.addEventListener("touchmove",d,B),document.addEventListener("touchstart",h,B),function(){$=$.filter(function(f){return f!==o}),document.removeEventListener("wheel",d,B),document.removeEventListener("touchmove",d,B),document.removeEventListener("touchstart",h,B)}},[]);var v=e.removeScrollBar,b=e.inert;return u.createElement(u.Fragment,null,b?u.createElement(o,{styles:Zt(a)}):null,v?u.createElement(Vt,{gapMode:e.gapMode}):null)}function Qt(e){for(var n=null;e!==null;)e instanceof ShadowRoot&&(n=e.host,e=e.host),e=e.parentNode;return n}const Kt=jt(Ve,qt);var ie=u.forwardRef(function(e,n){return u.createElement(J,A({},e,{ref:n,sideCar:Kt}))});ie.classNames=J.classNames;function ue(e,n){return e in n?Se(n[e]):Se(e)}function _e(e,n){const r=e.map(t=>({value:t,px:ue(t,n)}));return r.sort((t,a)=>t.px-a.px),r}function De(e,n){return ft("(prefers-color-scheme: dark)",e==="dark",n)?"dark":"light"}function Jt(e,n,r){u.useEffect(()=>(window.addEventListener(e,n,r),()=>window.removeEventListener(e,n,r)),[e,n])}function Ee(e){const n=document.createElement("style");return n.setAttribute("data-mantine-styles","inline"),n.innerHTML="*, *::before, *::after {transition: none !important;}",n.setAttribute("data-mantine-disable-transition","true"),e&&n.setAttribute("nonce",e),document.head.appendChild(n),()=>document.querySelectorAll("[data-mantine-disable-transition]").forEach(t=>t.remove())}function Ge({keepTransitions:e}={}){const n=u.useRef(),r=u.useRef(),t=u.useContext(qe),a=Qe(),o=u.useRef(a==null?void 0:a());if(!t)throw new Error("[@mantine/core] MantineProvider was not found in tree");const s=c=>{t.setColorScheme(c),n.current=e?()=>{}:Ee(o.current),window.clearTimeout(r.current),r.current=window.setTimeout(()=>{var m;(m=n.current)==null||m.call(n)},10)},l=()=>{t.clearColorScheme(),n.current=e?()=>{}:Ee(o.current),window.clearTimeout(r.current),r.current=window.setTimeout(()=>{var c;(c=n.current)==null||c.call(n)},10)},d=De("light",{getInitialValueInEffect:!1}),p=t.colorScheme==="auto"?d:t.colorScheme,h=u.useCallback(()=>s(p==="light"?"dark":"light"),[s,p]);return u.useEffect(()=>()=>{var c;(c=n.current)==null||c.call(n),window.clearTimeout(r.current)},[]),{colorScheme:t.colorScheme,setColorScheme:s,clearColorScheme:l,toggleColorScheme:h}}function en(e,n={getInitialValueInEffect:!0}){const r=De(e,n),{colorScheme:t}=Ge();return t==="auto"?r:t}var ee={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21"};const Re={orientation:"horizontal"},tn=Q((e,{borderWidth:n})=>({group:{"--ai-border-width":y(n)}})),de=P((e,n)=>{const r=L("ActionIconGroup",Re,e),{className:t,style:a,classNames:o,styles:s,unstyled:l,orientation:d,vars:p,borderWidth:h,variant:c,mod:m,...v}=L("ActionIconGroup",Re,e),b=W({name:"ActionIconGroup",props:r,classes:ee,className:t,style:a,classNames:o,styles:s,unstyled:l,vars:p,varsResolver:tn,rootSelector:"group"});return i.jsx(j,{...b("group"),ref:n,variant:c,mod:[{"data-orientation":d},m],role:"group",...v})});de.classes=ee;de.displayName="@mantine/core/ActionIconGroup";const nn={},rn=Q((e,{size:n,radius:r,variant:t,gradient:a,color:o,autoContrast:s})=>{const l=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:a,variant:t||"filled",autoContrast:s});return{root:{"--ai-size":Ae(n,"ai-size"),"--ai-radius":r===void 0?void 0:Je(r),"--ai-bg":o||t?l.background:void 0,"--ai-hover":o||t?l.hover:void 0,"--ai-hover-color":o||t?l.hoverColor:void 0,"--ai-color":l.color,"--ai-bd":o||t?l.border:void 0}}}),te=K((e,n)=>{const r=L("ActionIcon",nn,e),{className:t,unstyled:a,variant:o,classNames:s,styles:l,style:d,loading:p,loaderProps:h,size:c,color:m,radius:v,__staticSelector:b,gradient:f,vars:g,children:w,disabled:k,"data-disabled":x,autoContrast:C,mod:S,...E}=r,N=W({name:["ActionIcon",b],props:r,className:t,style:d,classes:ee,classNames:s,styles:l,unstyled:a,vars:g,varsResolver:rn});return i.jsxs(Me,{...N("root",{active:!k&&!p&&!x}),...E,unstyled:a,variant:o,size:c,disabled:k||p,ref:n,mod:[{loading:p,disabled:k||x},S],children:[i.jsx(ht,{mounted:!!p,transition:"slide-down",duration:150,children:z=>i.jsx(j,{component:"span",...N("loader",{style:z}),"aria-hidden":!0,children:i.jsx(Ke,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...h})})}),i.jsx(j,{component:"span",mod:{loading:p},...N("icon"),children:w})]})});te.classes=ee;te.displayName="@mantine/core/ActionIcon";te.Group=de;const on={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var Xe={root:"m_8bffd616"};const an={},pe=K((e,n)=>{const r=L("Flex",an,e),{classNames:t,className:a,style:o,styles:s,unstyled:l,vars:d,gap:p,rowGap:h,columnGap:c,align:m,justify:v,wrap:b,direction:f,...g}=r,w=W({name:"Flex",classes:Xe,props:r,className:a,style:o,classNames:t,styles:s,unstyled:l,vars:d}),k=ze(),x=et(),C=tt({styleProps:{gap:p,rowGap:h,columnGap:c,align:m,justify:v,wrap:b,direction:f},theme:k,data:on});return i.jsxs(i.Fragment,{children:[C.hasResponsiveStyles&&i.jsx(Pe,{selector:`.${x}`,styles:C.styles,media:C.media}),i.jsx(j,{ref:n,...w("root",{className:x,style:nt(C.inlineStyles)}),...g})]})});pe.classes=Xe;pe.displayName="@mantine/core/Flex";var Ye={root:"m_849cf0da"};const sn={underline:"hover"},fe=K((e,n)=>{const{underline:r,className:t,unstyled:a,mod:o,...s}=L("Anchor",sn,e);return i.jsx(Te,{component:"a",ref:n,className:O({[Ye.root]:!a},t),...s,mod:[{underline:r},o],__staticSelector:"Anchor",unstyled:a})});fe.classes=Ye;fe.displayName="@mantine/core/Anchor";const[ln,F]=dt("AppShell was not found in tree");var T={root:"m_89ab340",navbar:"m_45252eee",aside:"m_9cdde9a",header:"m_3b16f56b",main:"m_8983817",footer:"m_3840c879",section:"m_6dcfc7c7"};const cn={},he=P((e,n)=>{const r=L("AppShellAside",cn,e),{classNames:t,className:a,style:o,styles:s,unstyled:l,vars:d,withBorder:p,zIndex:h,mod:c,...m}=r,v=F();return v.disabled?null:i.jsx(j,{component:"aside",ref:n,mod:[{"with-border":p??v.withBorder},c],...v.getStyles("aside",{className:a,classNames:t,styles:s,style:o}),...m,__vars:{"--app-shell-aside-z-index":`calc(${h??v.zIndex} + 1)`}})});he.classes=T;he.displayName="@mantine/core/AppShellAside";const un={},ve=P((e,n)=>{var b;const r=L("AppShellFooter",un,e),{classNames:t,className:a,style:o,styles:s,unstyled:l,vars:d,withBorder:p,zIndex:h,mod:c,...m}=r,v=F();return v.disabled?null:i.jsx(j,{component:"footer",ref:n,mod:[{"with-border":p??v.withBorder},c],...v.getStyles("footer",{className:O({[ie.classNames.zeroRight]:v.offsetScrollbars},a),classNames:t,styles:s,style:o}),...m,__vars:{"--app-shell-footer-z-index":(b=h??v.zIndex)==null?void 0:b.toString()}})});ve.classes=T;ve.displayName="@mantine/core/AppShellFooter";const dn={},me=P((e,n)=>{var b;const r=L("AppShellHeader",dn,e),{classNames:t,className:a,style:o,styles:s,unstyled:l,vars:d,withBorder:p,zIndex:h,mod:c,...m}=r,v=F();return v.disabled?null:i.jsx(j,{component:"header",ref:n,mod:[{"with-border":p??v.withBorder},c],...v.getStyles("header",{className:O({[ie.classNames.zeroRight]:v.offsetScrollbars},a),classNames:t,styles:s,style:o}),...m,__vars:{"--app-shell-header-z-index":(b=h??v.zIndex)==null?void 0:b.toString()}})});me.classes=T;me.displayName="@mantine/core/AppShellHeader";const pn={},ge=P((e,n)=>{const r=L("AppShellMain",pn,e),{classNames:t,className:a,style:o,styles:s,vars:l,...d}=r,p=F();return i.jsx(j,{component:"main",ref:n,...p.getStyles("main",{className:a,style:o,classNames:t,styles:s}),...d})});ge.classes=T;ge.displayName="@mantine/core/AppShellMain";function H(e){return typeof e=="object"?e.base:e}function D(e){const n=typeof e=="object"&&e!==null&&typeof e.base<"u"&&Object.keys(e).length===1;return typeof e=="number"||typeof e=="string"||n}function G(e){return!(typeof e!="object"||e===null||Object.keys(e).length===1&&"base"in e)}function fn({baseStyles:e,minMediaStyles:n,maxMediaStyles:r,aside:t,theme:a}){var d,p,h;const o=t==null?void 0:t.width,s="translateX(var(--app-shell-aside-width))",l="translateX(calc(var(--app-shell-aside-width) * -1))";if(t!=null&&t.breakpoint&&!((d=t==null?void 0:t.collapsed)!=null&&d.mobile)&&(r[t==null?void 0:t.breakpoint]=r[t==null?void 0:t.breakpoint]||{},r[t==null?void 0:t.breakpoint]["--app-shell-aside-width"]="100%",r[t==null?void 0:t.breakpoint]["--app-shell-aside-offset"]="0px"),D(o)){const c=y(H(o));e["--app-shell-aside-width"]=c,e["--app-shell-aside-offset"]=c}if(G(o)&&(typeof o.base<"u"&&(e["--app-shell-aside-width"]=y(o.base),e["--app-shell-aside-offset"]=y(o.base)),M(o).forEach(c=>{c!=="base"&&(n[c]=n[c]||{},n[c]["--app-shell-aside-width"]=y(o[c]),n[c]["--app-shell-aside-offset"]=y(o[c]))})),(p=t==null?void 0:t.collapsed)!=null&&p.desktop){const c=t.breakpoint;n[c]=n[c]||{},n[c]["--app-shell-aside-transform"]=s,n[c]["--app-shell-aside-transform-rtl"]=l,n[c]["--app-shell-aside-offset"]="0px !important"}if((h=t==null?void 0:t.collapsed)!=null&&h.mobile){const c=ue(t.breakpoint,a.breakpoints)-.1;r[c]=r[c]||{},r[c]["--app-shell-aside-width"]="100%",r[c]["--app-shell-aside-offset"]="0px",r[c]["--app-shell-aside-transform"]=s,r[c]["--app-shell-aside-transform-rtl"]=l}}function hn({baseStyles:e,minMediaStyles:n,footer:r}){const t=r==null?void 0:r.height,a="translateY(var(--app-shell-footer-height))",o=(r==null?void 0:r.offset)??!0;if(D(t)){const s=y(H(t));e["--app-shell-footer-height"]=s,o&&(e["--app-shell-footer-offset"]=s)}G(t)&&(typeof t.base<"u"&&(e["--app-shell-footer-height"]=y(t.base),o&&(e["--app-shell-footer-offset"]=y(t.base))),M(t).forEach(s=>{s!=="base"&&(n[s]=n[s]||{},n[s]["--app-shell-footer-height"]=y(t[s]),o&&(n[s]["--app-shell-footer-offset"]=y(t[s])))})),r!=null&&r.collapsed&&(e["--app-shell-footer-transform"]=a,e["--app-shell-footer-offset"]="0px !important")}function vn({baseStyles:e,minMediaStyles:n,header:r}){const t=r==null?void 0:r.height,a="translateY(calc(var(--app-shell-header-height) * -1))",o=(r==null?void 0:r.offset)??!0;if(D(t)){const s=y(H(t));e["--app-shell-header-height"]=s,o&&(e["--app-shell-header-offset"]=s)}G(t)&&(typeof t.base<"u"&&(e["--app-shell-header-height"]=y(t.base),o&&(e["--app-shell-header-offset"]=y(t.base))),M(t).forEach(s=>{s!=="base"&&(n[s]=n[s]||{},n[s]["--app-shell-header-height"]=y(t[s]),o&&(n[s]["--app-shell-header-offset"]=y(t[s])))})),r!=null&&r.collapsed&&(e["--app-shell-header-transform"]=a,e["--app-shell-header-offset"]="0px !important")}function mn({baseStyles:e,minMediaStyles:n,maxMediaStyles:r,navbar:t,theme:a}){var d,p,h;const o=t==null?void 0:t.width,s="translateX(calc(var(--app-shell-navbar-width) * -1))",l="translateX(var(--app-shell-navbar-width))";if(t!=null&&t.breakpoint&&!((d=t==null?void 0:t.collapsed)!=null&&d.mobile)&&(r[t==null?void 0:t.breakpoint]=r[t==null?void 0:t.breakpoint]||{},r[t==null?void 0:t.breakpoint]["--app-shell-navbar-width"]="100%",r[t==null?void 0:t.breakpoint]["--app-shell-navbar-offset"]="0px"),D(o)){const c=y(H(o));e["--app-shell-navbar-width"]=c,e["--app-shell-navbar-offset"]=c}if(G(o)&&(typeof o.base<"u"&&(e["--app-shell-navbar-width"]=y(o.base),e["--app-shell-navbar-offset"]=y(o.base)),M(o).forEach(c=>{c!=="base"&&(n[c]=n[c]||{},n[c]["--app-shell-navbar-width"]=y(o[c]),n[c]["--app-shell-navbar-offset"]=y(o[c]))})),(p=t==null?void 0:t.collapsed)!=null&&p.desktop){const c=t.breakpoint;n[c]=n[c]||{},n[c]["--app-shell-navbar-transform"]=s,n[c]["--app-shell-navbar-transform-rtl"]=l,n[c]["--app-shell-navbar-offset"]="0px !important"}if((h=t==null?void 0:t.collapsed)!=null&&h.mobile){const c=ue(t.breakpoint,a.breakpoints)-.1;r[c]=r[c]||{},r[c]["--app-shell-navbar-width"]="100%",r[c]["--app-shell-navbar-offset"]="0px",r[c]["--app-shell-navbar-transform"]=s,r[c]["--app-shell-navbar-transform-rtl"]=l}}function ae(e){return Number(e)===0?"0px":rt(e)}function gn({padding:e,baseStyles:n,minMediaStyles:r}){D(e)&&(n["--app-shell-padding"]=ae(H(e))),G(e)&&(e.base&&(n["--app-shell-padding"]=ae(e.base)),M(e).forEach(t=>{t!=="base"&&(r[t]=r[t]||{},r[t]["--app-shell-padding"]=ae(e[t]))}))}function bn({navbar:e,header:n,footer:r,aside:t,padding:a,theme:o}){const s={},l={},d={};mn({baseStyles:d,minMediaStyles:s,maxMediaStyles:l,navbar:e,theme:o}),fn({baseStyles:d,minMediaStyles:s,maxMediaStyles:l,aside:t,theme:o}),vn({baseStyles:d,minMediaStyles:s,header:n}),hn({baseStyles:d,minMediaStyles:s,footer:r}),gn({baseStyles:d,minMediaStyles:s,padding:a});const p=_e(M(s),o.breakpoints).map(m=>({query:`(min-width: ${ke(m.px)})`,styles:s[m.value]})),h=_e(M(l),o.breakpoints).map(m=>({query:`(max-width: ${ke(m.px)})`,styles:l[m.value]})),c=[...p,...h];return{baseStyles:d,media:c}}function yn({navbar:e,header:n,aside:r,footer:t,padding:a}){const o=ze(),s=ot(),{media:l,baseStyles:d}=bn({navbar:e,header:n,footer:t,aside:r,padding:a,theme:o});return i.jsx(Pe,{media:l,styles:d,selector:s.cssVariablesSelector})}const wn={},be=P((e,n)=>{const r=L("AppShellNavbar",wn,e),{classNames:t,className:a,style:o,styles:s,unstyled:l,vars:d,withBorder:p,zIndex:h,mod:c,...m}=r,v=F();return v.disabled?null:i.jsx(j,{component:"nav",ref:n,mod:[{"with-border":p??v.withBorder},c],...v.getStyles("navbar",{className:a,classNames:t,styles:s,style:o}),...m,__vars:{"--app-shell-navbar-z-index":`calc(${h??v.zIndex} + 1)`}})});be.classes=T;be.displayName="@mantine/core/AppShellNavbar";const xn={},ye=K((e,n)=>{const r=L("AppShellSection",xn,e),{classNames:t,className:a,style:o,styles:s,vars:l,grow:d,mod:p,...h}=r,c=F();return i.jsx(j,{ref:n,mod:[{grow:d},p],...c.getStyles("section",{className:a,style:o,classNames:t,styles:s}),...h})});ye.classes=T;ye.displayName="@mantine/core/AppShellSection";function Sn({transitionDuration:e,disabled:n}){const[r,t]=u.useState(!0),a=u.useRef(),o=u.useRef();return Jt("resize",()=>{t(!0),clearTimeout(a.current),a.current=window.setTimeout(()=>u.startTransition(()=>{t(!1)}),200)}),at(()=>{t(!0),clearTimeout(o.current),o.current=window.setTimeout(()=>u.startTransition(()=>{t(!1)}),e||0)},[n,e]),r}const kn={withBorder:!0,offsetScrollbars:!0,padding:0,transitionDuration:200,transitionTimingFunction:"ease",zIndex:vt("app")},Cn=Q((e,{transitionDuration:n,transitionTimingFunction:r})=>({root:{"--app-shell-transition-duration":`${n}ms`,"--app-shell-transition-timing-function":r}})),I=P((e,n)=>{const r=L("AppShell",kn,e),{classNames:t,className:a,style:o,styles:s,unstyled:l,vars:d,navbar:p,withBorder:h,padding:c,transitionDuration:m,transitionTimingFunction:v,header:b,zIndex:f,layout:g,disabled:w,aside:k,footer:x,offsetScrollbars:C,mod:S,...E}=r,N=W({name:"AppShell",classes:T,props:r,className:a,style:o,classNames:t,styles:s,unstyled:l,vars:d,varsResolver:Cn}),z=Sn({disabled:w,transitionDuration:m});return i.jsxs(ln,{value:{getStyles:N,withBorder:h,zIndex:f,disabled:w,offsetScrollbars:C},children:[i.jsx(yn,{navbar:p,header:b,aside:k,footer:x,padding:c}),i.jsx(j,{ref:n,...N("root"),mod:[{resizing:z,layout:g,disabled:w},S],...E})]})});I.classes=T;I.displayName="@mantine/core/AppShell";I.Navbar=be;I.Header=me;I.Main=ge;I.Aside=he;I.Footer=ve;I.Section=ye;var Ze={root:"m_fea6bf1a",burger:"m_d4fb9cad"};const Ln={},jn=Q((e,{color:n,size:r,lineSize:t,transitionDuration:a,transitionTimingFunction:o})=>({root:{"--burger-color":n?st(n,e):void 0,"--burger-size":Ae(r,"burger-size"),"--burger-line-size":t?y(t):void 0,"--burger-transition-duration":a===void 0?void 0:`${a}ms`,"--burger-transition-timing-function":o}})),we=P((e,n)=>{const r=L("Burger",Ln,e),{classNames:t,className:a,style:o,styles:s,unstyled:l,vars:d,opened:p,children:h,transitionDuration:c,transitionTimingFunction:m,lineSize:v,...b}=r,f=W({name:"Burger",classes:Ze,props:r,className:a,style:o,classNames:t,styles:s,unstyled:l,vars:d,varsResolver:jn});return i.jsxs(Me,{...f("root"),ref:n,...b,children:[i.jsx(j,{mod:["reduce-motion",{opened:p}],...f("burger")}),h]})});we.classes=Ze;we.displayName="@mantine/core/Burger";const Nn=()=>{const e=lt();return()=>{try{document.cookie="token=; path=/; max-age=0; SameSite=Strict; Secure",e(ct()),console.log("Logout successful")}catch(r){console.log("logout error:",r)}}};/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var In=_("outline","lamp-2","IconLamp2",[["path",{d:"M5 21h9",key:"svg-0"}],["path",{d:"M10 21l-7 -8l8.5 -5.5",key:"svg-1"}],["path",{d:"M13 14c-2.148 -2.148 -2.148 -5.852 0 -8c2.088 -2.088 5.842 -1.972 8 0l-8 8z",key:"svg-2"}],["path",{d:"M11.742 7.574l-1.156 -1.156a2 2 0 0 1 2.828 -2.829l1.144 1.144",key:"svg-3"}],["path",{d:"M15.5 12l.208 .274a2.527 2.527 0 0 0 3.556 0c.939 -.933 .98 -2.42 .122 -3.4l-.366 -.369",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var _n=_("outline","lamp-off","IconLampOff",[["path",{d:"M9 20h6",key:"svg-0"}],["path",{d:"M12 20v-8",key:"svg-1"}],["path",{d:"M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676",key:"svg-2"}],["path",{d:"M3 3l18 18",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var En=_("outline","library-photo","IconLibraryPhoto",[["path",{d:"M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1",key:"svg-1"}],["path",{d:"M17 7h.01",key:"svg-2"}],["path",{d:"M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644",key:"svg-3"}],["path",{d:"M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rn=_("outline","logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var An=_("outline","message-2","IconMessage2",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var zn=_("outline","messages","IconMessages",[["path",{d:"M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10",key:"svg-0"}],["path",{d:"M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pn=_("outline","photo-up","IconPhotoUp",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526",key:"svg-3"}],["path",{d:"M19 22v-6",key:"svg-4"}],["path",{d:"M22 19l-3 -3l-3 3",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tn=_("outline","receipt-refund","IconReceiptRefund",[["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2",key:"svg-0"}],["path",{d:"M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mn=_("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bn=_("outline","switch-horizontal","IconSwitchHorizontal",[["path",{d:"M16 3l4 4l-4 4",key:"svg-0"}],["path",{d:"M10 7l10 0",key:"svg-1"}],["path",{d:"M8 13l-4 4l4 4",key:"svg-2"}],["path",{d:"M4 17l9 0",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $n=_("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);const Vn="_navbar_xt7j5_1",Fn="_navbarMain_xt7j5_10",On="_title_xt7j5_15",Wn="_link_xt7j5_20",Hn="_linkIcon_xt7j5_37",Dn="_footer_xt7j5_62",R={navbar:Vn,navbarMain:Fn,title:On,link:Wn,linkIcon:Hn,footer:Dn},Gn=[{label:"Upload Image",icon:Pn,route:"/imageupload"},{label:"My Images",icon:En,route:"/signin"},{label:"Reviews",icon:An,route:"/signup"},{label:"Messages",icon:zn,route:"/"},{label:"User",icon:$n,route:"/userdetails"},{label:"Refunds",icon:Tn,route:"/"},{label:"Settings",icon:Mn,route:"/"}],Xn=({toggleNavbar:e})=>{const n=it(),r=Nn(),t=()=>{r(),n("/signup"),e()},[a,o]=u.useState("Billing"),s=Gn.map(l=>i.jsxs("a",{className:R.link,"data-active":l.label===a||void 0,onClick:d=>{d.preventDefault(),o(l.label),n(l.route),e()},children:[i.jsx(l.icon,{className:R.linkIcon,stroke:1.5}),i.jsx("span",{children:l.label})]},l.label));return i.jsxs("nav",{className:R.navbar,children:[i.jsx("div",{children:i.jsx(Te,{fw:500,size:"sm",className:R.title,c:"dimmed",mb:"xs",children:"sunnyeyles@gmail.com"})}),i.jsx("div",{className:R.navbarMain,children:s}),i.jsxs("div",{className:R.footer,children:[i.jsxs("a",{href:"#",className:R.link,onClick:l=>{l.preventDefault(),e()},children:[i.jsx(Bn,{className:R.linkIcon,stroke:1.5}),i.jsx("span",{children:"Change account"})]}),i.jsxs("a",{href:"#",className:R.link,onClick:t,children:[i.jsx(Rn,{className:R.linkIcon,stroke:1.5}),i.jsx("span",{children:"Logout"})]})]})]})},Ue=({width:e,height:n,pFontSize:r,iczFontSize:t})=>i.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[i.jsxs("svg",{viewBox:"0 0 24 24",width:e,height:n,xmlns:"http://www.w3.org/2000/svg",fill:"#5c68ac",children:[i.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),i.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsxs("g",{id:"SVGRepo_iconCarrier",children:[i.jsx("title",{children:"pic_fill"}),i.jsx("g",{id:"页面-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:i.jsx("g",{id:"File",transform:"translate(-912.000000, -48.000000)",fillRule:"nonzero",children:i.jsxs("g",{id:"pic_fill",transform:"translate(912.000000, 48.000000)",children:[i.jsx("path",{d:"M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",id:"MingCute",fillRule:"nonzero"}),i.jsx("path",{d:"M20,3 C21.1046,3 22,3.89543 22,5 L22,19 C22,20.1046 21.1046,21 20,21 L4,21 C2.89543,21 2,20.1046 2,19 L2,5 C2,3.89543 2.89543,3 4,3 L20,3 Z M20,5 L4,5 L4,15.1005 L8.9948,10.1057 C9.48296,9.61757 10.2744,9.61757 10.7626,10.1057 L14.8284,14.1716 L16.0659,12.9342 C16.554,12.446 17.3455,12.446 17.8336,12.9342 L20,15.1005 L20,5 Z M15.5,7 C16.3284,7 17,7.67157 17,8.5 C17,9.32843 16.3284,10 15.5,10 C14.6716,10 14,9.32843 14,8.5 C14,7.67157 14.6716,7 15.5,7 Z",id:"形状",fill:"#5c68ac"})]})})})]})]}),i.jsxs("span",{style:{marginLeft:"4px",fontSize:`${t}`,color:"#b9c7e2",fontFamily:"'Arial Rounded MT Bold', sans-serif"},children:[i.jsx("span",{style:{fontSize:`${r}`},children:"P"}),"icz"]})]}),Yn="_icon_5mbzw_1",Zn="_dark_5mbzw_6",Un="_light_5mbzw_16",Z={icon:Yn,dark:Zn,light:Un},qn=()=>{const{setColorScheme:e}=Ge({keepTransitions:!0}),n=en("light",{getInitialValueInEffect:!0});return i.jsxs(te,{onClick:()=>e(n==="light"?"dark":"light"),variant:"default",size:"xl","aria-label":"Toggle color scheme",children:[i.jsx(In,{className:O(Z.icon,Z.light),stroke:1.5}),i.jsx(_n,{className:O(Z.icon,Z.dark),stroke:1.5})]})},Qn=()=>{const[e,{toggle:n}]=pt();return i.jsxs(I,{header:{height:60},navbar:{width:300,breakpoint:"sm",collapsed:{mobile:!e}},padding:"md",children:[i.jsx(I.Header,{children:i.jsxs(le,{h:"100%",px:"md",justify:"space-between",children:[i.jsxs(le,{children:[i.jsx(we,{opened:e,onClick:n,hiddenFrom:"sm",size:"sm"}),i.jsx(Ue,{width:"35",height:"28",pFontSize:"28",iczFontSize:"24"})]}),i.jsx(qn,{})]})}),i.jsx(I.Navbar,{p:"md",children:i.jsx(Xn,{toggleNavbar:n})})]})},Kn="_footer_tqlgp_1",Jn="_inner_tqlgp_7",er="_links_tqlgp_19",se={footer:Kn,inner:Jn,links:er},tr=[{link:"#",label:"Contact"},{link:"#",label:"Privacy"},{link:"#",label:"Blog"},{link:"#",label:"Careers"}],nr=()=>{const e=tr.map(n=>i.jsx(fe,{c:"dimmed",href:n.link,onClick:r=>r.preventDefault(),size:"sm",children:n.label}));return i.jsx("div",{className:se.footer,children:i.jsxs(mt,{className:se.inner,children:[i.jsx(Ue,{width:"35",height:"35"}),i.jsx(le,{className:se.links,children:e})]})})},cr=()=>i.jsxs(j,{children:[i.jsx(Qn,{}),i.jsx(pe,{mih:"calc(100vh - 60px)",gap:"md",justify:"center",align:"center",direction:"column",wrap:"wrap",children:i.jsx(ut,{})}),i.jsx(nr,{})]});export{cr as default};
