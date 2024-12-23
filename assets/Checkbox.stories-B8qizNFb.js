import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{r as $}from"./index-B-o1Wr-g.js";import{c as r}from"./index-DUolvyrz.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E=({label:x,variant:f="primary",borderRadius:C="sm",size:c="md",disabled:t=!1,defaultChecked:g=!1,className:y,style:D,as:_="button",onClick:w,...B})=>{const[n,R]=$.useState(g),v=r("checkbox",`checkbox-${c}`,{"checkbox-disabled":t},y),z=r("checkbox-input",{"checkbox-input-checked":n}),j=r("checkbox-custom",`checkbox-custom-${f}`,`checkbox-custom-${c}`,`checkbox-custom-${C}`),S=()=>{t||R(N=>!N)};return o.jsxs("label",{className:v,style:D,children:[o.jsx("input",{type:"checkbox",className:z,checked:n,onChange:S}),o.jsx("span",{className:j}),x]})},A={title:"Components/Checkbox",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed next to the checkbox."},disabled:{control:"boolean",description:"Disable the checkbox."},variant:{control:"select",options:["primary","secondary","success","warning"],description:"Color variant of the checkbox."},borderRadius:{control:"select",options:["none","sm","md","full"],description:"Border radius for the checkbox."},size:{control:"select",options:["sm","md","lg"],description:"Size of the checkbox."}}},e={args:{label:"Default",variant:"primary",borderRadius:"sm",size:"md",disabled:!1}},s={args:{label:"Checked",variant:"primary",borderRadius:"sm",size:"md",disabled:!1,defaultChecked:!0}},a={args:{label:"Disabled ",disabled:!0,borderRadius:"sm",size:"md"}};var d,i,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    variant: 'primary',
    borderRadius: 'sm',
    size: 'md',
    disabled: false
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,b,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    variant: 'primary',
    borderRadius: 'sm',
    size: 'md',
    disabled: false,
    defaultChecked: true
  }
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var u,h,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Disabled ',
    disabled: true,
    // makes the checkbox non-interactive
    borderRadius: 'sm',
    size: 'md'
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const F=["Default","Checked","Disabled"];export{s as Checked,e as Default,a as Disabled,F as __namedExportsOrder,A as default};
