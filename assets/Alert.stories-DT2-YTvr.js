import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{f as E}from"./index-YkVIqR4J.js";import{r as p}from"./index-B-o1Wr-g.js";import{c as W}from"./index-DUolvyrz.js";import{a as g}from"./index-DNTnlTbR.js";import{G as l}from"./iconBase-9qBny9oe.js";import"./_commonjsHelpers-Cpj98o6Y.js";function G(s){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"},child:[]},{tag:"path",attr:{d:"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"},child:[]}]})(s)}function I(s){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]},{tag:"path",attr:{d:"M12 8v4"},child:[]},{tag:"path",attr:{d:"M12 16h.01"},child:[]}]})(s)}function V(s){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"},child:[]},{tag:"path",attr:{d:"M12 8v4"},child:[]},{tag:"path",attr:{d:"M12 16h.01"},child:[]}]})(s)}const t=({message:s,type:c="info",icon:d,duration:u=2e5,onClose:i,className:N,style:b})=>{const[S,m]=p.useState(!0);if(p.useEffect(()=>{const L=setTimeout(()=>{m(!1),i&&i()},u);return()=>clearTimeout(L)},[u,i]),!S)return null;const D=W("alert",`alert-${c}`,N),B=()=>{if(d)return e.jsx("span",{className:"alert-icon",children:d});switch(c){case"success":return e.jsx(G,{className:"alert-icon"});case"default":return e.jsx(g,{className:"alert-icon"});case"info":return e.jsx(g,{className:"alert-icon"});case"warning":return e.jsx(I,{className:"alert-icon"});case"danger":return e.jsx(V,{className:"alert-icon"});default:return null}};return e.jsxs("div",{className:D,style:b,children:[B(),e.jsx("span",{children:s}),e.jsx("button",{className:"alert-close",onClick:()=>m(!1),children:"×"})]})},$={title:"Components/Alert",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{control:"text",description:"The message displayed inside the alert."},type:{control:"select",options:["default","success","info","warning","danger"],description:"The type of the alert (affects color)."},duration:{control:"number",description:"Time in milliseconds before the alert automatically disappears.",defaultValue:2e5},onClose:{action:"closed",description:"Function called when the alert is closed."},className:{control:"text",description:"Additional class name for custom styling."},style:{control:"object",description:"Custom inline styles."}},args:{onClose:E()}},a={args:{message:"This is an alert!",type:"default"}},r={args:{message:"Default alert message",type:"info"},render:s=>e.jsxs("div",{children:[e.jsx(t,{...s,message:"This is a default alert!",type:"default"}),e.jsx(t,{...s,message:"This is an info alert!",type:"info"}),e.jsx(t,{...s,message:"This is a success alert!",type:"success"}),e.jsx(t,{...s,message:"This is a warning alert!",type:"warning"}),e.jsx(t,{...s,message:"This is a danger alert!",type:"danger"})]})},n={args:{message:"This alert will disappear after 5 seconds.",type:"success",duration:5e3}},o={args:{message:"Click the close button to dismiss this alert.",type:"info"}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    message: 'This is an alert!',
    type: 'default'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,T,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: 'Default alert message',
    type: 'info'
  },
  render: args => <div>\r
        <Alert {...args} message="This is a default alert!" type="default" />\r
        <Alert {...args} message="This is an info alert!" type="info" />\r
        <Alert {...args} message="This is a success alert!" type="success" />\r
        <Alert {...args} message="This is a warning alert!" type="warning" />\r
        <Alert {...args} message="This is a danger alert!" type="danger" />\r
      </div>
}`,...(j=(T=r.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var A,v,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    message: 'This alert will disappear after 5 seconds.',
    type: 'success',
    duration: 5000
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var w,k,M;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: 'Click the close button to dismiss this alert.',
    type: 'info'
  }
}`,...(M=(k=o.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const q=["DefaultAlert","Types","CustomDurationAlert","AlertWithCloseButton"];export{o as AlertWithCloseButton,n as CustomDurationAlert,a as DefaultAlert,r as Types,q as __namedExportsOrder,$ as default};
