import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{c as I}from"./index-DUolvyrz.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W=({variant:v="solid",color:j="default",size:y="md",radius:S="full",isDisabled:b=!1,children:N,startContent:n,endContent:c,className:O,style:T,...D})=>{const E=I("chip",`chip-${v}`,`chip-${j}`,`chip-${y}`,`chip-radius-${S}`,{"chip-disabled":b},O);return e.jsxs("div",{className:E,style:T,...D,children:[n&&e.jsx("span",{className:"chip-start-content",children:n}),e.jsx("span",{className:"chip-content",children:N}),c&&e.jsx("span",{className:"chip-end-content",children:c})]})},k={title:"Components/Chip",component:W,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outlined","light"],description:"The variant of the chip."},color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the chip."},size:{control:"select",options:["sm","md","lg"],description:"The size of the chip."},radius:{control:"select",options:["none","sm","md","lg","full"],description:"The border radius of the chip."},isDisabled:{control:"boolean",description:"Disable the chip."},children:{control:"text",description:"Content inside the chip."},startContent:{control:"text",description:"Content or icon at the start of the chip."},endContent:{control:"text",description:"Content or icon at the end of the chip."}},args:{variant:"solid",size:"md",color:"default"}},t={args:{children:"Chip"}},r={args:{variant:"outlined",color:"primary",children:"Outlined"}},o={args:{color:"success",startContent:"🎉",children:"Chip"}},s={args:{color:"danger",endContent:"🌟",children:"Chip"}};var a,i,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Chip'
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,p,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined'
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'success',
    startContent: '🎉',
    children: 'Chip'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,C,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'danger',
    endContent: '🌟',
    children: 'Chip'
  }
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const q=["Default","Outlined","WithStartIcon","WithEndIcon"];export{t as Default,r as Outlined,s as WithEndIcon,o as WithStartIcon,q as __namedExportsOrder,k as default};
