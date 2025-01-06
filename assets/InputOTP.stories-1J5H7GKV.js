import{j as f}from"./jsx-runtime-j_jdvEMj.js";import{r as h}from"./index-B-o1Wr-g.js";import{c as I}from"./index-DUolvyrz.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N=({variant:c="solid",length:n=4,color:O="default",size:E="md",isDisabled:a=!1,radius:j="md",onChange:p,validationBehavior:u="numeric",className:A,style:C,...P})=>{const[l,m]=h.useState(Array(n).fill(""));h.useEffect(()=>{m(Array(n).fill(""))},[n]);const w=(o,e)=>{if(a)return;const t=[...l];if(!(u==="numeric"&&!/^\d*$/.test(o))&&!(u==="alphanumeric"&&!/^[a-zA-Z0-9]*$/.test(o))&&(t[e]=o.slice(-1),m(t),p&&p(t.join("")),o&&e<n-1)){const d=document.getElementById(`otp-${e+1}`);d==null||d.focus()}},S=(o,e)=>{if(!a&&o.key==="Backspace"&&l[e]===""){const t=document.getElementById(`otp-${e-1}`);t==null||t.focus()}},x=I("inputotp-field",`inputotp-${c}`,`inputotp-${E}`,`inputotp-${O}`,`inputotp-radius-${j}`,{"inputotp-disabled":a},A);return f.jsx("div",{className:"inputotp-container",style:C,...P,children:l.map((o,e)=>f.jsx("input",{id:`otp-${e}`,type:"text",maxLength:1,value:o,onChange:t=>w(t.target.value,e),onKeyDown:t=>S(t,e),disabled:a,className:x},e))})},_={title:"Components/InputOTP",component:N,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["flat","bordered","faded","underlined"],description:"The variant of the chip."},length:{control:{type:"number",min:1,max:10},description:"The number of OTP input fields."},color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the input fields."},size:{control:"select",options:["sm","md","lg"],description:"The size of the input fields."},radius:{control:"select",options:["none","sm","md","lg"],description:"The border radius of the input fields."},isDisabled:{control:"boolean",description:"Disable the input fields."},validationBehavior:{control:"select",options:["none","numeric","alphanumeric"],description:"The validation behavior for input values."},onChange:{action:"changed",description:"Function called when the OTP value changes."}},args:{onChange:c=>console.log("Entered OTP:",c)}},r={args:{length:4,color:"default",size:"md",radius:"md",isDisabled:!1,validationBehavior:"numeric"}},s={args:{length:4,color:"secondary",size:"md",radius:"md",isDisabled:!0,validationBehavior:"none"}},i={args:{length:5,color:"primary",size:"lg",radius:"lg",isDisabled:!1,validationBehavior:"alphanumeric"}};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    length: 4,
    color: 'default',
    size: 'md',
    radius: 'md',
    isDisabled: false,
    validationBehavior: 'numeric'
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,T,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    length: 4,
    color: 'secondary',
    size: 'md',
    radius: 'md',
    isDisabled: true,
    validationBehavior: 'none'
  }
}`,...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var z,B,$;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    length: 5,
    color: 'primary',
    size: 'lg',
    radius: 'lg',
    isDisabled: false,
    validationBehavior: 'alphanumeric'
  }
}`,...($=(B=i.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const F=["Default","Disabled","WithAlphanumericValidation"];export{r as Default,s as Disabled,i as WithAlphanumericValidation,F as __namedExportsOrder,_ as default};
