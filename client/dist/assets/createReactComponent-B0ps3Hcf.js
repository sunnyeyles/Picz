import{r as e,j as d}from"./index-Bgmcq9v8.js";function g(c){const l=e.createContext(null);return[({children:t,value:s})=>d.jsx(l.Provider,{value:s,children:t}),()=>{const t=e.useContext(l);if(t===null)throw new Error(c);return t}]}function p(c=!1,l){const{onOpen:r,onClose:o}={},[t,s]=e.useState(c),a=e.useCallback(()=>{s(n=>n||(r==null||r(),!0))},[r]),u=e.useCallback(()=>{s(n=>n&&(o==null||o(),!1))},[o]),i=e.useCallback(()=>{t?u():a()},[u,a,t]);return[t,{open:a,close:u,toggle:i}]}/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(c,l,r,o)=>{const t=e.forwardRef(({color:s="currentColor",size:a=24,stroke:u=2,title:i,className:n,children:f,...w},x)=>e.createElement("svg",{ref:x,...h[c],width:a,height:a,className:["tabler-icon",`tabler-icon-${l}`,n].join(" "),strokeWidth:u,stroke:s,...w},[i&&e.createElement("title",{key:"svg-title"},i),...o.map(([m,C])=>e.createElement(m,C)),...Array.isArray(f)?f:[f]]));return t.displayName=`${r}`,t};export{v as a,g as c,p as u};
