import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{c as z}from"./index-DUolvyrz.js";import{G as F}from"./iconBase-9qBny9oe.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S=({href:t="#",color:y="default",size:w="md",isDisabled:i=!1,underline:T="none",children:C,icon:a,className:D,style:V,onClick:c,...H})=>{const J=l=>{if(i){l.preventDefault();return}c&&c(l)},j=z("link",`link-${y}`,`link-${w}`,`link-underline-${T}`,{"link-disabled":i},D);return e.jsxs("a",{href:i?void 0:t,className:j,style:V,onClick:J,...H,children:[C,a&&e.jsx("span",{className:"link-icon",children:a})]})};function E(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"},child:[]}]})(t)}const A={title:"Components/Link",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",description:"The URL the link points to."},color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the link."},size:{control:"select",options:["sm","md","lg"],description:"The size of the link."},isDisabled:{control:"boolean",description:"Disable the link."},underline:{control:"select",options:["none","hover","always","active","focus"],description:"Underline style of the link."},children:{control:"text",description:"Text or elements inside the link."},onClick:{action:"clicked",description:"Function called when the link is clicked."},icon:{control:"boolean",description:"Toggle to show or hide an anchor icon."}},args:{onClick:void 0}},r={args:{href:"#",color:"default",size:"md",children:'"First solve the problem. Then, write the code." - Jon Johnson.'}},o={args:{href:"#",color:"secondary",underline:"hover",children:" Visit out our new Store"}},n={args:{href:"#",isDisabled:!0,children:"Disabled Link"}},s={args:{href:"#",color:"primary",children:e.jsxs(e.Fragment,{children:['"First solve the problem. Then, write the code." - Jon Johnson.',e.jsx(E,{size:20,style:{marginLeft:"8px"}})]})}};var d,h,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '#',
    color: 'default',
    size: 'md',
    children: '"First solve the problem. Then, write the code." - Jon Johnson.'
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,u,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: '#',
    color: 'secondary',
    underline: 'hover',
    children: ' Visit out our new Store'
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,k,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '#',
    isDisabled: true,
    children: 'Disabled Link'
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var L,b,v;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    href: '#',
    color: 'primary',
    children: <>\r
          "First solve the problem. Then, write the code." - Jon Johnson.\r
          <RiExternalLinkLine size={20} style={{
        marginLeft: '8px'
      }} />\r
        </>
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const G=["Default","Underline","Disabled","WithAnchorIcon"];export{r as Default,n as Disabled,o as Underline,s as WithAnchorIcon,G as __namedExportsOrder,A as default};
