import{w as u,F as g,r as f,G as h,j as s}from"./index-jdee_lUX.js";import{u as x,N as S,P as w,T as n}from"./use-form--l4Cz_D3.js";import{C as P}from"./Container-BN4N0sYD.js";import{L as j}from"./LoadingOverlay-BkWl8Nrx.js";import{G as b}from"./Group-BGQGWzuk.js";import{B as y}from"./Button--bmL5SZH.js";import"./Transition-BXtJ1OKc.js";const I=()=>{const e=u(),[i,{isLoading:r}]=g(),[l,a]=f.useState(null);return{handleSignup:async o=>{try{const t=await i(o).unwrap();a({color:"green",message:"Signup successful!"});const{token:c,username:d,email:p}=t;document.cookie=`token=${c}; path=/; msax-age=${60*60*24}; SameSite=Strict; Secure`,e(h({username:d,email:p}))}catch(t){console.log(t),a({color:"red",message:"Signup failed!"})}},notification:l,setNotification:a,isLoading:r}},F=()=>{const e=x({initialValues:{username:"",email:"",password:"",confirmPassword:""},validate:{email:o=>/^\S+@\S+$/.test(o)?null:"Invalid email",confirmPassword:(o,t)=>o!==t.password?"Passwords did not match":null}}),{handleSignup:i,notification:r,setNotification:l,isLoading:a}=I(),m=async o=>{i(o),e.reset()};return s.jsxs(P,{m:"md",children:[s.jsx(j,{visible:a,loaderProps:{size:"lg",color:"blue"}}),r&&s.jsx(S,{color:r.color,onClose:()=>l(null),children:r.message}),s.jsx(w,{bd:"1px solid blue.8",p:"lg",radius:"sm",children:s.jsxs("form",{onSubmit:e.onSubmit(m),children:[s.jsx(n,{mt:"md",label:"Username",placeholder:"Username",...e.getInputProps("username")}),s.jsx(n,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")}),s.jsx(n,{mt:"md",label:"Password",placeholder:"Password",type:"password",...e.getInputProps("password")}),s.jsx(n,{mt:"md",label:"Confirm Password",placeholder:"Confirm Password",type:"password",...e.getInputProps("confirmPassword")}),s.jsx(b,{justify:"center",mt:"xl",children:s.jsx(y,{type:"submit",loading:a,children:"Sign Up"})})]})})]})};export{F as default};