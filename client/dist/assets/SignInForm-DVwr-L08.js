import{w as p,P as g,r as x,K as S,j as s,N as f}from"./index-C-eU99ou.js";import{u as h,N as j,P as b,T as m}from"./use-form-BMelOdAE.js";import{C as w}from"./Container-CDALcLJH.js";import{L as P,B as y}from"./LoadingOverlay-BmApxcsK.js";import{G as I}from"./Group-MfgOYBup.js";const L=()=>{const e=p(),[i,{isLoading:n}]=g(),[a,o]=x.useState(null);return{handleSignin:async r=>{try{const t=await i(r).unwrap(),{username:l,email:u}=t.user,{token:d}=t;document.cookie=`token=${d}; path=/; max-age=86400; SameSite=Strict; Secure`,e(S({username:l,email:u})),o({color:"green",message:"Signin successful!"})}catch(t){console.log(t),o({color:"red",message:"signin failed!"})}},notification:a,setNotification:o,isLoading:n}},B=()=>{const e=h({initialValues:{username:"",password:""}}),{handleSignin:i,notification:n,setNotification:a,isLoading:o}=L(),c=async r=>{await i(r),e.reset()};return s.jsxs(w,{m:"md",children:[s.jsx(P,{visible:o,loaderProps:s.jsx(f,{})}),n&&s.jsx(j,{color:n.color,onClose:()=>a(null),children:n.message}),s.jsx(b,{bd:"1px solid blue.8",p:"lg",radius:"sm",children:s.jsxs("form",{onSubmit:e.onSubmit(c),children:[s.jsx(m,{mt:"md",label:"Username",placeholder:"Username",...e.getInputProps("username")}),s.jsx(m,{mt:"md",label:"Password",placeholder:"Password",type:"password",...e.getInputProps("password")}),s.jsx(I,{justify:"center",mt:"xl",children:s.jsx(y,{type:"submit",children:"Sign In"})})]})})]})};export{B as default};
