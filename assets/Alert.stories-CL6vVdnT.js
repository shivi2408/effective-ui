import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{f as E}from"./index-YkVIqR4J.js";import{r as m}from"./index-B-o1Wr-g.js";import{c as G}from"./index-DUolvyrz.js";import{a as p}from"./index-DNTnlTbR.js";import{G as W}from"./index-CLYcwX4a.js";import{G as N}from"./iconBase-9qBny9oe.js";import"./_commonjsHelpers-Cpj98o6Y.js";function I(s){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]},{tag:"path",attr:{d:"M12 8v4"},child:[]},{tag:"path",attr:{d:"M12 16h.01"},child:[]}]})(s)}function V(s){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"},child:[]},{tag:"path",attr:{d:"M12 8v4"},child:[]},{tag:"path",attr:{d:"M12 16h.01"},child:[]}]})(s)}const t=({message:s,type:l="info",icon:c,duration:d=2e5,onClose:i,className:b,style:M})=>{const[D,u]=m.useState(!0);if(m.useEffect(()=>{const B=setTimeout(()=>{u(!1),i&&i()},d);return()=>clearTimeout(B)},[d,i]),!D)return null;const S=G("alert",`alert-${l}`,b),L=()=>{if(c)return e.jsx("span",{className:"alert-icon",children:c});switch(l){case"success":return e.jsx(W,{className:"alert-icon"});case"default":return e.jsx(p,{className:"alert-icon"});case"info":return e.jsx(p,{className:"alert-icon"});case"warning":return e.jsx(I,{className:"alert-icon"});case"danger":return e.jsx(V,{className:"alert-icon"});default:return null}};return e.jsxs("div",{className:S,style:M,children:[L(),e.jsx("span",{children:s}),e.jsx("button",{className:"alert-close",onClick:()=>u(!1),children:"×"})]})},J={title:"Components/Alert",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{control:"text",description:"The message displayed inside the alert."},type:{control:"select",options:["default","success","info","warning","danger"],description:"The type of the alert (affects color)."},duration:{control:"number",description:"Time in milliseconds before the alert automatically disappears.",defaultValue:2e5},onClose:{action:"closed",description:"Function called when the alert is closed."},className:{control:"text",description:"Additional class name for custom styling."},style:{control:"object",description:"Custom inline styles."}},args:{onClose:E()}},a={args:{message:"This is an alert!",type:"default"}},r={args:{message:"Default alert message",type:"info"},render:s=>e.jsxs("div",{children:[e.jsx(t,{...s,message:"This is a default alert!",type:"default"}),e.jsx(t,{...s,message:"This is an info alert!",type:"info"}),e.jsx(t,{...s,message:"This is a success alert!",type:"success"}),e.jsx(t,{...s,message:"This is a warning alert!",type:"warning"}),e.jsx(t,{...s,message:"This is a danger alert!",type:"danger"})]})},o={args:{message:"This alert will disappear after 5 seconds.",type:"success",duration:5e3}},n={args:{message:"Click the close button to dismiss this alert.",type:"info"}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: 'This is an alert!',
    type: 'default'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,x,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var j,A,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    message: 'This alert will disappear after 5 seconds.',
    type: 'success',
    duration: 5000
  }
}`,...(v=(A=o.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var C,k,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: 'Click the close button to dismiss this alert.',
    type: 'info'
  }
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const K=["DefaultAlert","Types","CustomDurationAlert","AlertWithCloseButton"];export{n as AlertWithCloseButton,o as CustomDurationAlert,a as DefaultAlert,r as Types,K as __namedExportsOrder,J as default};
