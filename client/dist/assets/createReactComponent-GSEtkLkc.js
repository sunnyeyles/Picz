import{r as n,j as g,a as T,b as E,B as j,c as N,E as P,F as R,G as B,v as A}from"./index-Cxj4aO93.js";import{p as F}from"./Group-DYSC0JXo.js";function D(e){const a=n.createContext(null);return[({children:t,value:s})=>g.jsx(a.Provider,{value:s,children:t}),()=>{const t=n.useContext(a);if(t===null)throw new Error(e);return t}]}function H(e=!1,a){const{onOpen:r,onClose:o}={},[t,s]=n.useState(e),l=n.useCallback(()=>{s(i=>i||(r==null||r(),!0))},[r]),c=n.useCallback(()=>{s(i=>i&&(o==null||o(),!1))},[o]),u=n.useCallback(()=>{t?c():l()},[c,l,t]);return[t,{open:l,close:c,toggle:u}]}var v={root:"m_b6d8b162"};function L(e){if(e==="start")return"start";if(e==="end"||e)return"end"}const _={inherit:!1},G=N((e,{variant:a,lineClamp:r,gradient:o,size:t,color:s})=>({root:{"--text-fz":P(t),"--text-lh":R(t),"--text-gradient":a==="gradient"?B(o,e):void 0,"--text-line-clamp":typeof r=="number"?r.toString():void 0,"--text-color":s?A(s,e):void 0}})),h=F((e,a)=>{const r=T("Text",_,e),{lineClamp:o,truncate:t,inline:s,inherit:l,gradient:c,span:u,__staticSelector:i,vars:d,className:m,style:p,classNames:x,styles:f,unstyled:w,variant:y,mod:C,size:b,...k}=r,S=E({name:["Text",i],props:r,classes:v,className:m,style:p,classNames:x,styles:f,unstyled:w,vars:d,varsResolver:G});return g.jsx(j,{...S("root",{focusable:!0}),ref:a,component:u?"span":"p",variant:y,mod:[{"data-truncate":L(t),"data-line-clamp":typeof o=="number","data-inline":s,"data-inherit":l},C],size:b,...k})});h.classes=v;h.displayName="@mantine/core/Text";/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var W={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(e,a,r,o)=>{const t=n.forwardRef(({color:s="currentColor",size:l=24,stroke:c=2,title:u,className:i,children:d,...m},p)=>n.createElement("svg",{ref:p,...W[e],width:l,height:l,className:["tabler-icon",`tabler-icon-${a}`,i].join(" "),strokeWidth:c,stroke:s,...m},[u&&n.createElement("title",{key:"svg-title"},u),...o.map(([x,f])=>n.createElement(x,f)),...Array.isArray(d)?d:[d]]));return t.displayName=`${r}`,t};export{h as T,V as a,D as c,H as u};
