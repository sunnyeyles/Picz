import{r as _,f as $,a as B,o as d,b as N,j as R,B as S,c as b}from"./index-Bgmcq9v8.js";function z(r){return _.Children.toArray(r).filter(Boolean)}var u={root:"m_4081bf90"};const E={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},O=b((r,{grow:e,preventGrowOverflow:s,gap:t,align:o,justify:a,wrap:l},{childWidth:n})=>({root:{"--group-child-width":e&&s?n:void 0,"--group-gap":d(t),"--group-align":o,"--group-justify":a,"--group-wrap":l}})),g=$((r,e)=>{const s=B("Group",E,r),{classNames:t,className:o,style:a,styles:l,unstyled:n,children:f,gap:h,align:P,justify:W,wrap:A,grow:m,preventGrowOverflow:F,vars:y,variant:v,__size:w,mod:x,...G}=s,c=z(f),i=c.length,p=d(h??"md"),j={childWidth:`calc(${100/i}% - (${p} - ${p} / ${i}))`},C=N({name:"Group",props:s,stylesCtx:j,className:o,style:a,classes:u,classNames:t,styles:l,unstyled:n,vars:y,varsResolver:O});return R.jsx(S,{...C("root"),ref:e,variant:v,mod:[{grow:m},x],size:w,...G,children:c})});g.classes=u;g.displayName="@mantine/core/Group";export{g as G};
