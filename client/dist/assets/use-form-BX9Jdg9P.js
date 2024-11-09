import{r as f,j as I,R as qe,o as Me,a as O,b as q,B as x,c as K,e as le,F as Ke,g as be,d as Q,f as Y,G as J,H as ke,L as Ue,q as He,z as Xe}from"./index-nOu4IbS4.js";import{p as ae}from"./polymorphic-factory-e6TTGQ6v.js";import{U as Ze}from"./Transition-BDbwtbS3.js";function Je(t=null){const e=f.createContext(t);return[({children:s,value:i})=>I.jsx(e.Provider,{value:i,children:s}),()=>f.useContext(e)]}function Qe(){return`mantine-${Math.random().toString(36).slice(2,11)}`}const Ye=qe.useId||(()=>{});function Ge(){const t=Ye();return t?`mantine-${t.replace(/:/g,"")}`:""}function et(t){const e=Ge(),[r,o]=f.useState(e);return Me(()=>{o(Qe())},[]),typeof t=="string"?t:typeof window>"u"?e:r}var Oe={root:"m_1b7284a3"};const tt={},rt=K((t,{radius:e,shadow:r})=>({root:{"--paper-radius":e===void 0?void 0:le(e),"--paper-shadow":Ke(r)}})),De=ae((t,e)=>{const r=O("Paper",tt,t),{classNames:o,className:s,style:i,styles:n,unstyled:u,withBorder:c,vars:l,radius:b,shadow:v,variant:S,mod:y,...p}=r,a=q({name:"Paper",props:r,classes:Oe,className:s,style:i,classNames:o,styles:n,unstyled:u,vars:l,varsResolver:rt});return I.jsx(x,{ref:e,mod:[{"data-with-border":c},y],...a("root"),variant:S,...p})});De.classes=Oe;De.displayName="@mantine/core/Paper";const Le=f.forwardRef(({size:t="var(--cb-icon-size, 70%)",style:e,...r},o)=>I.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:t,height:t},ref:o,...r,children:I.jsx("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}));Le.displayName="@mantine/core/CloseIcon";var Te={root:"m_86a44da5","root--subtle":"m_220c80f2"};const st={variant:"subtle"},ot=K((t,{size:e,radius:r,iconSize:o})=>({root:{"--cb-size":be(e,"cb-size"),"--cb-radius":r===void 0?void 0:le(r),"--cb-icon-size":Q(o)}})),Ee=ae((t,e)=>{const r=O("CloseButton",st,t),{iconSize:o,children:s,vars:i,radius:n,className:u,classNames:c,style:l,styles:b,unstyled:v,"data-disabled":S,disabled:y,variant:p,icon:a,mod:h,...w}=r,E=q({name:"CloseButton",props:r,className:u,style:l,classes:Te,classNames:c,styles:b,unstyled:v,vars:i,varsResolver:ot});return I.jsxs(Ze,{ref:e,...w,unstyled:v,variant:p,disabled:y,mod:[{disabled:y||S},h],...E("root",{variant:p,active:!y&&!S}),children:[a||I.jsx(Le,{}),s]})});Ee.classes=Te;Ee.displayName="@mantine/core/CloseButton";const[nt,ue]=Je({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var z={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const Ie={},it=K((t,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${J(e)} - ${Q(2)})`}})),de=Y((t,e)=>{const r=O("InputDescription",Ie,t),{classNames:o,className:s,style:i,styles:n,unstyled:u,vars:c,size:l,__staticSelector:b,__inheritStyles:v=!0,variant:S,...y}=O("InputDescription",Ie,r),p=ue(),a=q({name:["InputWrapper",b],props:r,classes:z,className:s,style:i,classNames:o,styles:n,unstyled:u,rootSelector:"description",vars:c,varsResolver:it}),h=v&&(p==null?void 0:p.getStyles)||a;return I.jsx(x,{component:"p",ref:e,variant:S,size:l,...h("description",p!=null&&p.getStyles?{className:s,style:i}:void 0),...y})});de.classes=z;de.displayName="@mantine/core/InputDescription";const ct={},lt=K((t,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${J(e)} - ${Q(2)})`}})),fe=Y((t,e)=>{const r=O("InputError",ct,t),{classNames:o,className:s,style:i,styles:n,unstyled:u,vars:c,size:l,__staticSelector:b,__inheritStyles:v=!0,variant:S,...y}=r,p=q({name:["InputWrapper",b],props:r,classes:z,className:s,style:i,classNames:o,styles:n,unstyled:u,rootSelector:"error",vars:c,varsResolver:lt}),a=ue(),h=v&&(a==null?void 0:a.getStyles)||p;return I.jsx(x,{component:"p",ref:e,variant:S,size:l,...h("error",a!=null&&a.getStyles?{className:s,style:i}:void 0),...y})});fe.classes=z;fe.displayName="@mantine/core/InputError";const we={labelElement:"label"},at=K((t,{size:e})=>({label:{"--input-label-size":J(e),"--input-asterisk-color":void 0}})),pe=Y((t,e)=>{const r=O("InputLabel",we,t),{classNames:o,className:s,style:i,styles:n,unstyled:u,vars:c,labelElement:l,size:b,required:v,htmlFor:S,onMouseDown:y,children:p,__staticSelector:a,variant:h,mod:w,...E}=O("InputLabel",we,r),g=q({name:["InputWrapper",a],props:r,classes:z,className:s,style:i,classNames:o,styles:n,unstyled:u,rootSelector:"label",vars:c,varsResolver:at}),$=ue(),F=($==null?void 0:$.getStyles)||g;return I.jsxs(x,{...F("label",$!=null&&$.getStyles?{className:s,style:i}:void 0),component:l,variant:h,size:b,ref:e,htmlFor:l==="label"?S:void 0,mod:[{required:v},w],onMouseDown:m=>{y==null||y(m),!m.defaultPrevented&&m.detail>1&&m.preventDefault()},...E,children:[p,v&&I.jsx("span",{...F("required"),"aria-hidden":!0,children:" *"})]})});pe.classes=z;pe.displayName="@mantine/core/InputLabel";const Ve={},_e=Y((t,e)=>{const r=O("InputPlaceholder",Ve,t),{classNames:o,className:s,style:i,styles:n,unstyled:u,vars:c,__staticSelector:l,variant:b,error:v,mod:S,...y}=O("InputPlaceholder",Ve,r),p=q({name:["InputPlaceholder",l],props:r,classes:z,className:s,style:i,classNames:o,styles:n,unstyled:u,rootSelector:"placeholder"});return I.jsx(x,{...p("placeholder"),mod:[{error:!!v},S],component:"span",variant:b,ref:e,...y})});_e.classes=z;_e.displayName="@mantine/core/InputPlaceholder";function ut(t,{hasDescription:e,hasError:r}){const o=t.findIndex(c=>c==="input"),s=t.slice(0,o),i=t.slice(o+1),n=e&&s.includes("description")||r&&s.includes("error");return{offsetBottom:e&&i.includes("description")||r&&i.includes("error"),offsetTop:n}}const dt={labelElement:"label",inputContainer:t=>t,inputWrapperOrder:["label","description","input","error"]},ft=K((t,{size:e})=>({label:{"--input-label-size":J(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${J(e)} - ${Q(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${J(e)} - ${Q(2)})`}})),je=Y((t,e)=>{const r=O("InputWrapper",dt,t),{classNames:o,className:s,style:i,styles:n,unstyled:u,vars:c,size:l,variant:b,__staticSelector:v,inputContainer:S,inputWrapperOrder:y,label:p,error:a,description:h,labelProps:w,descriptionProps:E,errorProps:g,labelElement:$,children:F,withAsterisk:m,id:_,required:V,__stylesApiProps:R,mod:D,...U}=r,M=q({name:["InputWrapper",v],props:R||r,classes:z,className:s,style:i,classNames:o,styles:n,unstyled:u,vars:c,varsResolver:ft}),B={size:l,variant:b,__staticSelector:v},A=et(_),oe=typeof m=="boolean"?m:V,G=(g==null?void 0:g.id)||`${A}-error`,ee=(E==null?void 0:E.id)||`${A}-description`,te=A,H=!!a&&typeof a!="boolean",P=!!h,d=`${H?G:""} ${P?ee:""}`,j=d.trim().length>0?d.trim():void 0,C=(w==null?void 0:w.id)||`${A}-label`,L=p&&I.jsx(pe,{labelElement:$,id:C,htmlFor:te,required:oe,...B,...w,children:p},"label"),X=P&&I.jsx(de,{...E,...B,size:(E==null?void 0:E.size)||B.size,id:(E==null?void 0:E.id)||ee,children:h},"description"),Z=I.jsx(f.Fragment,{children:S(F)},"input"),T=H&&f.createElement(fe,{...g,...B,size:(g==null?void 0:g.size)||B.size,key:"error",id:(g==null?void 0:g.id)||G},a),re=y.map(xe=>{switch(xe){case"label":return L;case"input":return Z;case"description":return X;case"error":return T;default:return null}});return I.jsx(nt,{value:{getStyles:M,describedBy:j,inputId:te,labelId:C,...ut(y,{hasDescription:P,hasError:H})},children:I.jsx(x,{ref:e,variant:b,size:l,mod:[{error:!!a},D],...M("root"),...U,children:re})})});je.classes=z;je.displayName="@mantine/core/InputWrapper";const pt={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},mt=K((t,e,r)=>({wrapper:{"--input-margin-top":r.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":r.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":be(e.size,"input-height"),"--input-fz":J(e.size),"--input-radius":e.radius===void 0?void 0:le(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?Q(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?Q(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?be(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),W=ae((t,e)=>{const r=O("Input",pt,t),{classNames:o,className:s,style:i,styles:n,unstyled:u,required:c,__staticSelector:l,__stylesApiProps:b,size:v,wrapperProps:S,error:y,disabled:p,leftSection:a,leftSectionProps:h,leftSectionWidth:w,rightSection:E,rightSectionProps:g,rightSectionWidth:$,rightSectionPointerEvents:F,leftSectionPointerEvents:m,variant:_,vars:V,pointer:R,multiline:D,radius:U,id:M,withAria:B,withErrorStyles:A,mod:oe,inputSize:G,...ee}=r,{styleProps:te,rest:H}=ke(ee),P=ue(),d={offsetBottom:P==null?void 0:P.offsetBottom,offsetTop:P==null?void 0:P.offsetTop},j=q({name:["Input",l],props:b||r,classes:z,className:s,style:i,classNames:o,styles:n,unstyled:u,stylesCtx:d,rootSelector:"wrapper",vars:V,varsResolver:mt}),C=B?{required:c,disabled:p,"aria-invalid":!!y,"aria-describedby":P==null?void 0:P.describedBy,id:(P==null?void 0:P.inputId)||M}:{};return I.jsxs(x,{...j("wrapper"),...te,...S,mod:[{error:!!y&&A,pointer:R,disabled:p,multiline:D,"data-with-right-section":!!E,"data-with-left-section":!!a},oe],variant:_,size:v,children:[a&&I.jsx("div",{...h,"data-position":"left",...j("section",{className:h==null?void 0:h.className,style:h==null?void 0:h.style}),children:a}),I.jsx(x,{component:"input",...H,...C,ref:e,required:c,mod:{disabled:p,error:!!y&&A},variant:_,__size:G,...j("input")}),E&&I.jsx("div",{...g,"data-position":"right",...j("section",{className:g==null?void 0:g.className,style:g==null?void 0:g.style}),children:E})]})});W.classes=z;W.Wrapper=je;W.Label=pe;W.Error=fe;W.Description=de;W.Placeholder=_e;W.displayName="@mantine/core/Input";function yt(t,e,r){const o=O(t,e,r),{label:s,description:i,error:n,required:u,classNames:c,styles:l,className:b,unstyled:v,__staticSelector:S,__stylesApiProps:y,errorProps:p,labelProps:a,descriptionProps:h,wrapperProps:w,id:E,size:g,style:$,inputContainer:F,inputWrapperOrder:m,withAsterisk:_,variant:V,vars:R,mod:D,...U}=o,{styleProps:M,rest:B}=ke(U),A={label:s,description:i,error:n,required:u,classNames:c,className:b,__staticSelector:S,__stylesApiProps:y||o,errorProps:p,labelProps:a,descriptionProps:h,unstyled:v,styles:l,size:g,style:$,inputContainer:F,inputWrapperOrder:m,withAsterisk:_,variant:V,id:E,mod:D,...w};return{...B,classNames:c,styles:l,unstyled:v,wrapperProps:{...A,...M},inputProps:{required:u,classNames:c,styles:l,unstyled:v,size:g,__staticSelector:S,__stylesApiProps:y||o,error:n,variant:V,id:E}}}const bt={__staticSelector:"InputBase",withAria:!0},me=ae((t,e)=>{const{inputProps:r,wrapperProps:o,...s}=yt("InputBase",bt,t);return I.jsx(W.Wrapper,{...o,children:I.jsx(W,{...r,...s,ref:e})})});me.classes={...W.classes,...W.Wrapper.classes};me.displayName="@mantine/core/InputBase";var ze={root:"m_a513464",icon:"m_a4ceffb",loader:"m_b0920b15",body:"m_a49ed24",title:"m_3feedf16",description:"m_3d733a3a",closeButton:"m_919a4d88"};const vt={withCloseButton:!0},ht=K((t,{radius:e,color:r})=>({root:{"--notification-radius":e===void 0?void 0:le(e),"--notification-color":r?He(r,t):void 0}})),Be=Y((t,e)=>{const r=O("Notification",vt,t),{className:o,color:s,radius:i,loading:n,withCloseButton:u,withBorder:c,title:l,icon:b,children:v,onClose:S,closeButtonProps:y,classNames:p,style:a,styles:h,unstyled:w,variant:E,vars:g,mod:$,...F}=r,m=q({name:"Notification",classes:ze,props:r,className:o,style:a,classNames:p,styles:h,unstyled:w,vars:g,varsResolver:ht});return I.jsxs(x,{...m("root"),mod:[{"data-with-icon":!!b||n,"data-with-border":c},$],ref:e,variant:E,...F,role:"alert",children:[b&&!n&&I.jsx("div",{...m("icon"),children:b}),n&&I.jsx(Ue,{size:28,color:s,...m("loader")}),I.jsxs("div",{...m("body"),children:[l&&I.jsx("div",{...m("title"),children:l}),I.jsx(x,{...m("description"),mod:{"data-with-title":!!l},children:v})]}),u&&I.jsx(Ee,{iconSize:16,color:"gray",...y,unstyled:w,onClick:S,...m("closeButton")})]})});Be.classes=ze;Be.displayName="@mantine/core/Notification";const gt={},Ae=Y((t,e)=>{const r=O("TextInput",gt,t);return I.jsx(me,{component:"input",ref:e,...r,__staticSelector:"TextInput"})});Ae.classes=me.classes;Ae.displayName="@mantine/core/TextInput";function St(t){if(!/^[0-9a-zA-Z-]+$/.test(t))throw new Error(`[@mantine/use-form] Form name "${t}" is invalid, it should contain only letters, numbers and dashes`)}const Et=typeof window<"u"?f.useLayoutEffect:f.useEffect;function N(t,e){Et(()=>{if(t)return window.addEventListener(t,e),()=>window.removeEventListener(t,e)},[t])}function _t(t,e){t&&St(t),N(`mantine-form:${t}:set-field-value`,r=>e.setFieldValue(r.detail.path,r.detail.value)),N(`mantine-form:${t}:set-values`,r=>e.setValues(r.detail)),N(`mantine-form:${t}:set-initial-values`,r=>e.setInitialValues(r.detail)),N(`mantine-form:${t}:set-errors`,r=>e.setErrors(r.detail)),N(`mantine-form:${t}:set-field-error`,r=>e.setFieldError(r.detail.path,r.detail.error)),N(`mantine-form:${t}:clear-field-error`,r=>e.clearFieldError(r.detail)),N(`mantine-form:${t}:clear-errors`,e.clearErrors),N(`mantine-form:${t}:reset`,e.reset),N(`mantine-form:${t}:validate`,e.validate),N(`mantine-form:${t}:validate-field`,r=>e.validateField(r.detail)),N(`mantine-form:${t}:reorder-list-item`,r=>e.reorderListItem(r.detail.path,r.detail.payload)),N(`mantine-form:${t}:remove-list-item`,r=>e.removeListItem(r.detail.path,r.detail.index)),N(`mantine-form:${t}:insert-list-item`,r=>e.insertListItem(r.detail.path,r.detail.item,r.detail.index)),N(`mantine-form:${t}:set-dirty`,r=>e.setDirty(r.detail)),N(`mantine-form:${t}:set-touched`,r=>e.setTouched(r.detail)),N(`mantine-form:${t}:reset-dirty`,r=>e.resetDirty(r.detail)),N(`mantine-form:${t}:reset-touched`,e.resetTouched)}function jt(t){return e=>{if(!e)t(e);else if(typeof e=="function")t(e);else if(typeof e=="object"&&"nativeEvent"in e){const{currentTarget:r}=e;r instanceof HTMLInputElement?r.type==="checkbox"?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}}function ve(t){return t===null||typeof t!="object"?{}:Object.keys(t).reduce((e,r)=>{const o=t[r];return o!=null&&o!==!1&&(e[r]=o),e},{})}function It(t){const[e,r]=f.useState(ve(t)),o=f.useRef(e),s=f.useCallback(c=>{r(l=>{const b=ve(typeof c=="function"?c(l):c);return o.current=b,b})},[]),i=f.useCallback(()=>s({}),[]),n=f.useCallback(c=>{o.current[c]!==void 0&&s(l=>{const b={...l};return delete b[c],b})},[e]),u=f.useCallback((c,l)=>{l==null||l===!1?n(c):o.current[c]!==l&&s(b=>({...b,[c]:l}))},[e]);return{errorsState:e,setErrors:s,clearErrors:i,setFieldError:u,clearFieldError:n}}function he(t,e){if(e===null||typeof e!="object")return{};const r={...e};return Object.keys(e).forEach(o=>{o.includes(`${String(t)}.`)&&delete r[o]}),r}function $e(t,e){const r=t.substring(e.length+1).split(".")[0];return parseInt(r,10)}function Ce(t,e,r,o){if(e===void 0)return r;const s=`${String(t)}`;let i=r;o===-1&&(i=he(`${s}.${e}`,i));const n={...i},u=new Set;return Object.entries(i).filter(([c])=>{if(!c.startsWith(`${s}.`))return!1;const l=$e(c,s);return Number.isNaN(l)?!1:l>=e}).forEach(([c,l])=>{const b=$e(c,s),v=c.replace(`${s}.${b}`,`${s}.${b+o}`);n[v]=l,u.add(v),u.has(c)||delete n[c]}),n}function wt(t,{from:e,to:r},o){const s=`${t}.${e}`,i=`${t}.${r}`,n={...o};return Object.keys(o).every(u=>{let c,l;if(u.startsWith(s)&&(c=u,l=u.replace(s,i)),u.startsWith(i)&&(c=u.replace(i,s),l=u),c&&l){const b=n[c],v=n[l];return v===void 0?delete n[c]:n[c]=v,b===void 0?delete n[l]:n[l]=b,!1}return!0}),n}function Fe(t,e,r){typeof r.value=="object"&&(r.value=se(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||e==="__proto__"?Object.defineProperty(t,e,r):t[e]=r.value}function se(t){if(typeof t!="object")return t;var e=0,r,o,s,i=Object.prototype.toString.call(t);if(i==="[object Object]"?s=Object.create(t.__proto__||null):i==="[object Array]"?s=Array(t.length):i==="[object Set]"?(s=new Set,t.forEach(function(n){s.add(se(n))})):i==="[object Map]"?(s=new Map,t.forEach(function(n,u){s.set(se(u),se(n))})):i==="[object Date]"?s=new Date(+t):i==="[object RegExp]"?s=new RegExp(t.source,t.flags):i==="[object DataView]"?s=new t.constructor(se(t.buffer)):i==="[object ArrayBuffer]"?s=t.slice(0):i.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(o=Object.getOwnPropertySymbols(t);e<o.length;e++)Fe(s,o[e],Object.getOwnPropertyDescriptor(t,o[e]));for(e=0,o=Object.getOwnPropertyNames(t);e<o.length;e++)Object.hasOwnProperty.call(s,r=o[e])&&s[r]===t[r]||Fe(s,r,Object.getOwnPropertyDescriptor(t,r))}return s||t}function We(t){return typeof t!="string"?[]:t.split(".")}function k(t,e){const r=We(t);if(r.length===0||typeof e!="object"||e===null)return;let o=e[r[0]];for(let s=1;s<r.length&&o!=null;s+=1)o=o[r[s]];return o}function ye(t,e,r){const o=We(t);if(o.length===0)return r;const s=se(r);if(o.length===1)return s[o[0]]=e,s;let i=s[o[0]];for(let n=1;n<o.length-1;n+=1){if(i===void 0)return s;i=i[o[n]]}return i[o[o.length-1]]=e,s}function Vt(t,{from:e,to:r},o){const s=k(t,o);if(!Array.isArray(s))return o;const i=[...s],n=s[e];return i.splice(e,1),i.splice(r,0,n),ye(t,i,o)}function $t(t,e,r,o){const s=k(t,o);if(!Array.isArray(s))return o;const i=[...s];return i.splice(typeof r=="number"?r:i.length,0,e),ye(t,i,o)}function Ct(t,e,r){const o=k(t,r);return Array.isArray(o)?ye(t,o.filter((s,i)=>i!==e),r):r}function Ft({$values:t,$errors:e,$status:r}){const o=f.useCallback((n,u)=>{r.clearFieldDirty(n),e.setErrors(c=>wt(n,u,c)),t.setValues({values:Vt(n,u,t.refValues.current),updateState:!0})},[]),s=f.useCallback((n,u)=>{r.clearFieldDirty(n),e.setErrors(c=>Ce(n,u,c,-1)),t.setValues({values:Ct(n,u,t.refValues.current),updateState:!0})},[]),i=f.useCallback((n,u,c)=>{r.clearFieldDirty(n),e.setErrors(l=>Ce(n,c,l,1)),t.setValues({values:$t(n,u,c,t.refValues.current),updateState:!0})},[]);return{reorderListItem:o,removeListItem:s,insertListItem:i}}var Pt=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,s,i;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(s=o;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(r).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[s]))return!1;for(s=o;s--!==0;){var n=i[s];if(!t(e[n],r[n]))return!1}return!0}return e!==e&&r!==r};const ie=Xe(Pt);function ne(t,e){const r=Object.keys(t);if(typeof e=="string"){const o=r.filter(s=>s.startsWith(`${e}.`));return t[e]||o.some(s=>t[s])||!1}return r.some(o=>t[o])}function Nt({initialDirty:t,initialTouched:e,mode:r,$values:o}){const[s,i]=f.useState(e),[n,u]=f.useState(t),c=f.useRef(e),l=f.useRef(t),b=f.useCallback(m=>{const _=typeof m=="function"?m(c.current):m;c.current=_,r==="controlled"&&i(_)},[]),v=f.useCallback((m,_=!1)=>{const V=typeof m=="function"?m(l.current):m;l.current=V,(r==="controlled"||_)&&u(V)},[]),S=f.useCallback(()=>b({}),[]),y=f.useCallback(m=>{const _=m?{...m,...o.refValues.current}:o.refValues.current;o.setValuesSnapshot(_),v({})},[]),p=f.useCallback((m,_)=>{b(V=>ne(V,m)===_?V:{...V,[m]:_})},[]),a=f.useCallback((m,_,V)=>{v(R=>ne(R,m)===_?R:{...R,[m]:_},V)},[]),h=f.useCallback((m,_)=>{const V=ne(l.current,m),R=!ie(k(m,o.getValuesSnapshot()),_),D=he(m,l.current);D[m]=R,v(D,V!==R)},[]),w=f.useCallback(m=>ne(c.current,m),[]),E=f.useCallback(m=>v(_=>{if(typeof m!="string")return _;const V=he(m,_);return delete V[m],ie(V,_)?_:V}),[]),g=f.useCallback(m=>{if(m){const V=k(m,l.current);if(typeof V=="boolean")return V;const R=k(m,o.refValues.current),D=k(m,o.valuesSnapshot.current);return!ie(R,D)}return Object.keys(l.current).length>0?ne(l.current):!ie(o.refValues.current,o.valuesSnapshot.current)},[]),$=f.useCallback(()=>l.current,[]),F=f.useCallback(()=>c.current,[]);return{touchedState:s,dirtyState:n,touchedRef:c,dirtyRef:l,setTouched:b,setDirty:v,resetDirty:y,resetTouched:S,isTouched:w,setFieldTouched:p,setFieldDirty:a,setTouchedState:i,setDirtyState:u,clearFieldDirty:E,isDirty:g,getDirty:$,getTouched:F,setCalculatedFieldDirty:h}}function Rt({initialValues:t,onValuesChange:e,mode:r}){const o=f.useRef(!1),[s,i]=f.useState(t||{}),n=f.useRef(s),u=f.useRef(s),c=f.useCallback(({values:a,subscribers:h,updateState:w=!0,mergeWithPreviousValues:E=!0})=>{const g=n.current,$=a instanceof Function?a(n.current):a,F=E?{...g,...$}:$;n.current=F,w&&i(F),e==null||e(F,g),h==null||h.filter(Boolean).forEach(m=>m({updatedValues:F,previousValues:g}))},[e]),l=f.useCallback(a=>{var E;const h=k(a.path,n.current),w=a.value instanceof Function?a.value(h):a.value;if(h!==w){const g=n.current,$=ye(a.path,w,n.current);c({values:$,updateState:a.updateState}),(E=a.subscribers)==null||E.filter(Boolean).forEach(F=>F({path:a.path,updatedValues:$,previousValues:g}))}},[c]),b=f.useCallback(a=>{u.current=a},[]),v=f.useCallback((a,h)=>{o.current||(o.current=!0,c({values:a,updateState:r==="controlled"}),b(a),h())},[c]),S=f.useCallback(()=>{c({values:u.current,updateState:!0,mergeWithPreviousValues:!1})},[c]),y=f.useCallback(()=>n.current,[]),p=f.useCallback(()=>u.current,[]);return{initialized:o,stateValues:s,refValues:n,valuesSnapshot:u,setValues:c,setFieldValue:l,resetValues:S,setValuesSnapshot:b,initialize:v,getValues:y,getValuesSnapshot:p}}function kt({$status:t}){const e=f.useRef({}),r=f.useCallback((s,i)=>{f.useEffect(()=>(e.current[s]=e.current[s]||[],e.current[s].push(i),()=>{e.current[s]=e.current[s].filter(n=>n!==i)}),[i])},[]),o=f.useCallback(s=>e.current[s]?e.current[s].map(i=>n=>i({previousValue:k(s,n.previousValues),value:k(s,n.updatedValues),touched:t.isTouched(s),dirty:t.isDirty(s)})):[],[]);return{subscribers:e,watch:r,getFieldSubscribers:o}}function Pe(t,e){return t?`${t}-${e.toString()}`:e.toString()}function Ne(t){const e=ve(t);return{hasErrors:Object.keys(e).length>0,errors:e}}function ge(t,e,r="",o={}){return typeof t!="object"||t===null?o:Object.keys(t).reduce((s,i)=>{const n=t[i],u=`${r===""?"":`${r}.`}${i}`,c=k(u,e);let l=!1;return typeof n=="function"&&(s[u]=n(c,e,u)),typeof n=="object"&&Array.isArray(c)&&(l=!0,c.forEach((b,v)=>ge(n,e,`${u}.${v}`,s))),typeof n=="object"&&typeof c=="object"&&c!==null&&(l||ge(n,e,u,s)),s},o)}function Se(t,e){return Ne(typeof t=="function"?t(e):ge(t,e))}function ce(t,e,r){if(typeof t!="string")return{hasError:!1,error:null};const o=Se(e,r),s=Object.keys(o.errors).find(i=>t.split(".").every((n,u)=>n===i.split(".")[u]));return{hasError:!!s,error:s?o.errors[s]:null}}const Ot="__MANTINE_FORM_INDEX__";function Re(t,e){return e?typeof e=="boolean"?e:Array.isArray(e)?e.includes(t.replace(/[.][0-9]+/g,`.${Ot}`)):!1:!1}function zt({name:t,mode:e="controlled",initialValues:r,initialErrors:o={},initialDirty:s={},initialTouched:i={},clearInputErrorOnChange:n=!0,validateInputOnChange:u=!1,validateInputOnBlur:c=!1,onValuesChange:l,transformValues:b=y=>y,enhanceGetInputProps:v,validate:S}={}){const y=It(o),p=Rt({initialValues:r,onValuesChange:l,mode:e}),a=Nt({initialDirty:s,initialTouched:i,$values:p,mode:e}),h=Ft({$values:p,$errors:y,$status:a}),w=kt({$status:a}),[E,g]=f.useState(0),[$,F]=f.useState({}),m=f.useCallback(()=>{p.resetValues(),y.clearErrors(),a.resetDirty(),a.resetTouched(),e==="uncontrolled"&&g(d=>d+1)},[]),_=f.useCallback(d=>{n&&y.clearErrors(),e==="uncontrolled"&&g(j=>j+1),Object.keys(w.subscribers.current).forEach(j=>{const C=k(j,p.refValues.current),L=k(j,d);C!==L&&w.getFieldSubscribers(j).forEach(X=>X({previousValues:d,updatedValues:p.refValues.current}))})},[n]),V=f.useCallback(d=>{const j=p.refValues.current;p.initialize(d,()=>e==="uncontrolled"&&g(C=>C+1)),_(j)},[_]),R=f.useCallback((d,j,C)=>{const L=Re(d,u),X=j instanceof Function?j(k(d,p.refValues.current)):j;a.setCalculatedFieldDirty(d,X),a.setFieldTouched(d,!0),!L&&n&&y.clearFieldError(d),p.setFieldValue({path:d,value:j,updateState:e==="controlled",subscribers:[...w.getFieldSubscribers(d),L?Z=>{const T=ce(d,S,Z.updatedValues);T.hasError?y.setFieldError(d,T.error):y.clearFieldError(d)}:null,(C==null?void 0:C.forceUpdate)!==!1&&e!=="controlled"?()=>F(Z=>({...Z,[d]:(Z[d]||0)+1})):null]})},[l,S]),D=f.useCallback(d=>{const j=p.refValues.current;p.setValues({values:d,updateState:e==="controlled"}),_(j)},[l,_]),U=f.useCallback(()=>{const d=Se(S,p.refValues.current);return y.setErrors(d.errors),d},[S]),M=f.useCallback(d=>{const j=ce(d,S,p.refValues.current);return j.hasError?y.setFieldError(d,j.error):y.clearFieldError(d),j},[S]),B=(d,{type:j="input",withError:C=!0,withFocus:L=!0,...X}={})=>{const T={onChange:jt(re=>R(d,re,{forceUpdate:!1})),"data-path":Pe(t,d)};return C&&(T.error=y.errorsState[d]),j==="checkbox"?T[e==="controlled"?"checked":"defaultChecked"]=k(d,p.refValues.current):T[e==="controlled"?"value":"defaultValue"]=k(d,p.refValues.current),L&&(T.onFocus=()=>a.setFieldTouched(d,!0),T.onBlur=()=>{if(Re(d,c)){const re=ce(d,S,p.refValues.current);re.hasError?y.setFieldError(d,re.error):y.clearFieldError(d)}}),Object.assign(T,v==null?void 0:v({inputProps:T,field:d,options:{type:j,withError:C,withFocus:L,...X},form:P}))},A=(d,j)=>C=>{C==null||C.preventDefault();const L=U();L.hasErrors?j==null||j(L.errors,p.refValues.current,C):d==null||d(b(p.refValues.current),C)},oe=d=>b(d||p.refValues.current),G=f.useCallback(d=>{d.preventDefault(),m()},[]),ee=f.useCallback(d=>d?!ce(d,S,p.refValues.current).hasError:!Se(S,p.refValues.current).hasErrors,[S]),te=d=>`${E}-${d}-${$[d]||0}`,H=f.useCallback(d=>document.querySelector(`[data-path="${Pe(t,d)}"]`),[]),P={watch:w.watch,initialized:p.initialized.current,values:p.stateValues,getValues:p.getValues,setInitialValues:p.setValuesSnapshot,initialize:V,setValues:D,setFieldValue:R,errors:y.errorsState,setErrors:y.setErrors,setFieldError:y.setFieldError,clearFieldError:y.clearFieldError,clearErrors:y.clearErrors,resetDirty:a.resetDirty,setTouched:a.setTouched,setDirty:a.setDirty,isTouched:a.isTouched,resetTouched:a.resetTouched,isDirty:a.isDirty,getTouched:a.getTouched,getDirty:a.getDirty,reorderListItem:h.reorderListItem,insertListItem:h.insertListItem,removeListItem:h.removeListItem,reset:m,validate:U,validateField:M,getInputProps:B,onSubmit:A,onReset:G,isValid:ee,getTransformedValues:oe,key:te,getInputNode:H};return _t(t,P),P}export{Be as N,De as P,Ae as T,zt as u};
