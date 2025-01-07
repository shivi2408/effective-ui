import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{f as R}from"./index-YkVIqR4J.js";import{M as q}from"./index-DNTnlTbR.js";import{d as A}from"./index-DMoKmcBB.js";import{r as p}from"./index-B-o1Wr-g.js";import{c as u}from"./index-DUolvyrz.js";import"./iconBase-9qBny9oe.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B=({color:W="default",size:i="md",isDisabled:l=!1,children:d,onChange:h,checked:r=!1,className:C,style:L,onIcon:v,offIcon:E,...$})=>{const[s,m]=p.useState(r);p.useEffect(()=>{r!==s&&m(r)},[r]);const _=()=>{l||(m(!s),h&&h(!s))},F=u("switch",{"switch-disabled":l},{"switch-checked":!s},`switch-${i}`,C),O=u("switch-track",`switch-track-${W}`,`switch-${i}`,{"switch-checked":!s});return e.jsxs("div",{className:F,style:L,onClick:_,...$,children:[e.jsx("div",{className:O,children:e.jsx("div",{className:"switch-thumb",children:s?e.jsx("span",{className:"thumb-icon ",children:v}):e.jsx("span",{className:"thumb-icon ",children:E})})}),d&&e.jsx("span",{className:"switch-label",children:d})]})},Y={title:"Components/Switch",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the switch."},size:{control:"select",options:["sm","md","lg"],description:"The size of the switch."},isDisabled:{control:"boolean",description:"Disable the switch."},checked:{control:"boolean",description:"Whether the switch is in the on (checked) state."},onChange:{action:"changed",description:"Function called when the switch is toggled."},children:{control:"text",description:"Label or content inside the switch."}},args:{onChange:R()}},c={args:{color:"default",size:"md",children:""}},o={args:{size:"lg",children:""}},t={args:{color:"primary",size:"md",isDisabled:!0,checked:!1,children:"Disabled"}},a={args:{color:"primary",size:"md",children:"Switch with Label"}},n={args:{color:"default",size:"md",checked:!0,onIcon:e.jsx(A,{}),offIcon:e.jsx(q,{}),children:"Switch with Thumb Icon"}};var f,g,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'md',
    children: ''
  }
}`,...(w=(g=c.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var b,x,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: ''
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,z,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'md',
    isDisabled: true,
    checked: false,
    children: 'Disabled'
  }
}`,...(j=(z=t.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var y,I,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'md',
    children: 'Switch with Label'
  }
}`,...(D=(I=a.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var T,M,N;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'md',
    checked: true,
    onIcon: <IoMdMoon />,
    offIcon: <MdWbSunny />,
    children: 'Switch with Thumb Icon'
  }
}`,...(N=(M=n.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Z=["Default","lg","Disabled","WithLabel","WithThumbIcon"];export{c as Default,t as Disabled,a as WithLabel,n as WithThumbIcon,Z as __namedExportsOrder,Y as default,o as lg};
