import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as E}from"./index-DJO9vBfz.js";import{c as t}from"./index-i5X67GZP.js";const k=({label:x,variant:v="primary",borderRadius:y="sm",size:l="medium",disabled:n=!1,defaultChecked:g=!1,className:C,style:R,as:N="button",onClick:V,...j})=>{const[o,T]=E.useState(g),q=t("checkbox",`checkbox-${l}`,{"checkbox-disabled":n},C),w=t("checkbox-input",{"checkbox-input-checked":o}),D=t("checkbox-custom",`checkbox-custom-${v}`,`checkbox-custom-${l}`,`checkbox-custom-${y}`),S=()=>{n||T(z=>!z)};return r.jsxs("label",{className:q,style:R,children:[r.jsx("input",{type:"checkbox",className:w,checked:o,onChange:S}),r.jsx("span",{className:D}),x]})};k.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const P={title:"Components/Checkbox",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed next to the checkbox."},disabled:{control:"boolean",description:"Disable the checkbox."},variant:{control:"select",options:["primary","secondary","success","warning"],description:"Color variant of the checkbox."},borderRadius:{control:"select",options:["none","sm","md","full"],description:"Border radius for the checkbox."},size:{control:"select",options:["small","medium","large"],description:"Size of the checkbox."}}},e={args:{label:"Default",variant:"primary",borderRadius:"sm",size:"medium",disabled:!1}},a={args:{label:"Checked",variant:"primary",borderRadius:"sm",size:"medium",disabled:!1,defaultChecked:!0}},s={args:{label:"Disabled ",disabled:!0,borderRadius:"sm",size:"medium"}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    variant: 'primary',
    borderRadius: 'sm',
    size: 'medium',
    disabled: false
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    variant: 'primary',
    borderRadius: 'sm',
    size: 'medium',
    disabled: false,
    defaultChecked: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Disabled ',
    disabled: true,
    // makes the checkbox non-interactive
    borderRadius: 'sm',
    size: 'medium'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const B=["Default","Checked","Disabled"];export{a as Checked,e as Default,s as Disabled,B as __namedExportsOrder,P as default};
