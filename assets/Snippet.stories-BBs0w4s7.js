import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as f}from"./index-B-o1Wr-g.js";import{a as h}from"./index-CLYcwX4a.js";import{G as d}from"./iconBase-9qBny9oe.js";import{c as y}from"./index-DUolvyrz.js";import"./_commonjsHelpers-Cpj98o6Y.js";function C(t){return d({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},child:[]}]})(t)}function j(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389zm192 0a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389zm-144 48a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437z"},child:[]}]})(t)}const S=({code:t,className:m,style:u})=>{const[x,s]=f.useState(!1),g=()=>{navigator.clipboard.writeText(t),s(!0),setTimeout(()=>{s(!1)},4e3)};return e.jsxs("div",{className:y("snippet-container",m),style:u,children:[e.jsxs("span",{className:"snippet-command",children:[e.jsx("span",{className:"snippet-dollar",children:e.jsx(j,{size:18})})," ",t]}),e.jsx("button",{className:"snippet-copy-button",onClick:g,"aria-label":"Copy",children:x?e.jsx(C,{className:"icon-copied"}):e.jsx(h,{className:"icon-copy"})})]})},A={title:"Components/Snippet",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{code:{control:"text",description:"The code snippet text to display."},className:{control:"text",description:"Additional CSS classes for custom styling."},style:{control:"object",description:"Inline styles for the component."}}},a={args:{code:"npm install @nextui-org/react"}},o={args:{code:"npx create-react-app my-app",style:{backgroundColor:"#1e1e1e",color:"#fff",padding:"12px",borderRadius:"8px"}}};var r,n,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    code: 'npm install @nextui-org/react'
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    code: 'npx create-react-app my-app',
    style: {
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: '12px',
      borderRadius: '8px'
    }
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const T=["Default","WithInlineStyle"];export{a as Default,o as WithInlineStyle,T as __namedExportsOrder,A as default};
