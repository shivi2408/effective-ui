import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{f as F}from"./index-B5ZI-g0m.js";import{M as O}from"./index-LF_i0ZAm.js";import{d as A}from"./index-CQ3Blegy.js";import{r as h}from"./index-DJO9vBfz.js";import{c as p}from"./index-i5X67GZP.js";import"./iconBase-DNSKKw1X.js";const q=({color:D="default",size:i="md",isDisabled:l=!1,children:d,onChange:m,checked:s=!1,className:C,style:M,onIcon:W,offIcon:L,...E})=>{const[a,u]=h.useState(s);h.useEffect(()=>{s!==a&&u(s)},[s]);const V=()=>{l||(u(!a),m&&m(!a))},_=p("switch",{"switch-disabled":l},{"switch-checked":!a},`switch-${i}`,C),$=p("switch-track",`switch-track-${D}`,`switch-${i}`,{"switch-checked":!a});return e.jsxs("div",{className:_,style:M,onClick:V,...E,children:[e.jsx("div",{className:$,children:e.jsx("div",{className:"switch-thumb",children:a?e.jsx("span",{className:"thumb-icon ",children:W}):e.jsx("span",{className:"thumb-icon ",children:L})})}),d&&e.jsx("span",{className:"switch-label",children:d})]})};q.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'| 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},offIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const X={title:"Components/Switch",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the switch."},size:{control:"select",options:["sm","md","lg"],description:"The size of the switch."},isDisabled:{control:"boolean",description:"Disable the switch."},checked:{control:"boolean",description:"Whether the switch is in the on (checked) state."},onChange:{action:"changed",description:"Function called when the switch is toggled."},children:{control:"text",description:"Label or content inside the switch."}},args:{onChange:F()}},r={args:{color:"default",size:"md",children:""}},t={args:{size:"lg",children:""}},c={args:{color:"primary",size:"md",isDisabled:!0,checked:!1,children:"Disabled"}},o={args:{color:"primary",size:"md",children:"Switch with Label"}},n={args:{color:"default",size:"md",checked:!0,onIcon:e.jsx(A,{}),offIcon:e.jsx(O,{}),children:"Switch with Thumb Icon"}};var f,g,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'md',
    children: ''
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var b,y,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: ''
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,T,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'md',
    isDisabled: true,
    checked: false,
    children: 'Disabled'
  }
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,R,x;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'md',
    children: 'Switch with Label'
  }
}`,...(x=(R=o.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var I,z,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'md',
    checked: true,
    onIcon: <IoMdMoon />,
    offIcon: <MdWbSunny />,
    children: 'Switch with Thumb Icon'
  }
}`,...(j=(z=n.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const Y=["Default","lg","Disabled","WithLabel","WithThumbIcon"];export{r as Default,c as Disabled,o as WithLabel,n as WithThumbIcon,Y as __namedExportsOrder,X as default,t as lg};
