import{f as V}from"./index-B5ZI-g0m.js";import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r as u}from"./index-DJO9vBfz.js";import{c as p}from"./index-i5X67GZP.js";const D=({color:C="default",size:l="medium",isDisabled:n=!1,children:o,onChange:d,checked:a=!1,className:N,style:q,...L})=>{const[e,m]=u.useState(a);u.useEffect(()=>{a!==e&&m(a)},[a]);const R=()=>{n||(m(!e),d&&d(!e))},j=p("switch",{"switch-disabled":n},{"switch-checked":!e},`switch-${l}`,N),E=p("switch-track",`switch-track-${C}`,`switch-${l}`,{"switch-checked":!e});return s.jsxs("div",{className:j,style:q,onClick:R,...L,children:[s.jsx("div",{className:E,children:s.jsx("div",{className:"switch-thumb"})}),o&&s.jsx("span",{className:"switch-label",children:o})]})};D.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{required:!1,tsType:{name:"union",raw:"'default' |'primary' | 'secondary' | 'success' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const I={title:"Components/Switch",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the switch."},size:{control:"select",options:["small","medium","large"],description:"The size of the switch."},isDisabled:{control:"boolean",description:"Disable the switch."},checked:{control:"boolean",description:"Whether the switch is in the on (checked) state."},onChange:{action:"changed",description:"Function called when the switch is toggled."},children:{control:"text",description:"Label or content inside the switch."}},args:{onChange:V()}},r={args:{color:"default",size:"medium",children:""}},t={args:{size:"large",children:""}},i={args:{color:"primary",size:"medium",isDisabled:!0,checked:!1,children:"Disabled"}},c={args:{color:"primary",size:"medium",children:"Switch with Label"}};var h,f,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'medium',
    children: ''
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,y,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: ''
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,S,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    isDisabled: true,
    checked: false,
    children: 'Disabled'
  }
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var T,x,z;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    children: 'Switch with Label'
  }
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const O=["Default","Large","Disabled","WithLabel"];export{r as Default,i as Disabled,t as Large,c as WithLabel,O as __namedExportsOrder,I as default};
