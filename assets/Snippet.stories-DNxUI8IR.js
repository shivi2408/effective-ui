import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as h}from"./index-B-o1Wr-g.js";import{a as f}from"./index-vva0AINM.js";import{G as d}from"./iconBase-9qBny9oe.js";import{c as y}from"./index-DUolvyrz.js";import"./_commonjsHelpers-Cpj98o6Y.js";function C(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(t)}function j(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389zm192 0a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389zm-144 48a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437z"},child:[]}]})(t)}const b=({code:t,className:m,style:u})=>{const[x,r]=h.useState(!1),g=()=>{navigator.clipboard.writeText(t),r(!0),setTimeout(()=>{r(!1)},4e3)};return e.jsxs("div",{className:y("snippet-container",m),style:u,children:[e.jsx("span",{className:"snippet-dollar",children:e.jsx(j,{size:20})}),e.jsx("span",{className:"snippet-command",children:t}),e.jsx("button",{className:"snippet-copy-button",onClick:g,"aria-label":"Copy",children:x?e.jsx(f,{className:"icon-copied"}):e.jsx(C,{className:"icon-copy"})})]})},z={title:"Components/Snippet",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{code:{control:"text",description:"The code snippet text to display."},className:{control:"text",description:"Additional CSS classes for custom styling."},style:{control:"object",description:"Inline styles for the component."}}},a={args:{code:"npm install @nextui-org/react"}},o={args:{code:"npx create-react-app my-app",style:{backgroundColor:"#1e1e1e",color:"#fff",padding:"12px",borderRadius:"8px"}}};var s,n,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    code: 'npm install @nextui-org/react'
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    code: 'npx create-react-app my-app',
    style: {
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: '12px',
      borderRadius: '8px'
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const A=["Default","WithInlineStyle"];export{a as Default,o as WithInlineStyle,A as __namedExportsOrder,z as default};
