import{j as f}from"./jsx-runtime-CkxqCPlQ.js";import{r as g}from"./index-DJO9vBfz.js";import{c as I}from"./index-i5X67GZP.js";const B=({variant:o="solid",length:t=4,color:O="default",size:V="md",isDisabled:r=!1,radius:$="md",onChange:c,validationBehavior:m="numeric",className:C,style:P,...S})=>{const[d,p]=g.useState(Array(t).fill(""));g.useEffect(()=>{p(Array(t).fill(""))},[t]);const E=(n,e)=>{if(r)return;const a=[...d];if(!(m==="numeric"&&!/^\d*$/.test(n))&&!(m==="alphanumeric"&&!/^[a-zA-Z0-9]*$/.test(n))&&(a[e]=n.slice(-1),p(a),c&&c(a.join("")),n&&e<t-1)){const u=document.getElementById(`otp-${e+1}`);u==null||u.focus()}},j=(n,e)=>{if(!r&&n.key==="Backspace"&&d[e]===""){const a=document.getElementById(`otp-${e-1}`);a==null||a.focus()}},A=I("inputotp-field",`inputotp-${o}`,`inputotp-${V}`,`inputotp-${O}`,`inputotp-radius-${$}`,{"inputotp-disabled":r},C);return f.jsx("div",{className:"inputotp-container",style:P,...S,children:d.map((n,e)=>f.jsx("input",{id:`otp-${e}`,type:"text",maxLength:1,value:n,onChange:a=>E(a.target.value,e),onKeyDown:a=>j(a,e),disabled:r,className:A},e))})};B.__docgenInfo={description:"",methods:[],displayName:"InputOTP",props:{variant:{required:!1,tsType:{name:"union",raw:"'flat' | 'bordered' | 'faded' | 'underlined'",elements:[{name:"literal",value:"'flat'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'faded'"},{name:"literal",value:"'underlined'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'none' |'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(otp: string) => void",signature:{arguments:[{type:{name:"string"},name:"otp"}],return:{name:"void"}}},description:""},validationBehavior:{required:!1,tsType:{name:"union",raw:"'none' | 'numeric' | 'alphanumeric'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'numeric'"},{name:"literal",value:"'alphanumeric'"}]},description:"",defaultValue:{value:"'numeric'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const R={title:"Components/InputOTP",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["flat","bordered","faded","underlined"],description:"The variant of the chip."},length:{control:{type:"number",min:1,max:10},description:"The number of OTP input fields."},color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the input fields."},size:{control:"select",options:["sm","md","lg"],description:"The size of the input fields."},radius:{control:"select",options:["none","sm","md","lg"],description:"The border radius of the input fields."},isDisabled:{control:"boolean",description:"Disable the input fields."},validationBehavior:{control:"select",options:["none","numeric","alphanumeric"],description:"The validation behavior for input values."},onChange:{action:"changed",description:"Function called when the OTP value changes."}},args:{onChange:o=>console.log("Entered OTP:",o)}},i={args:{length:4,color:"default",size:"md",radius:"md",isDisabled:!1,validationBehavior:"numeric"}},s={args:{length:4,color:"secondary",size:"md",radius:"md",isDisabled:!0,validationBehavior:"none"}},l={args:{length:5,color:"primary",size:"lg",radius:"lg",isDisabled:!1,validationBehavior:"alphanumeric"}};var h,v,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    length: 4,
    color: 'default',
    size: 'md',
    radius: 'md',
    isDisabled: false,
    validationBehavior: 'numeric'
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,b,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    length: 4,
    color: 'secondary',
    size: 'md',
    radius: 'md',
    isDisabled: true,
    validationBehavior: 'none'
  }
}`,...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var w,q,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    length: 5,
    color: 'primary',
    size: 'lg',
    radius: 'lg',
    isDisabled: false,
    validationBehavior: 'alphanumeric'
  }
}`,...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const k=["Default","Disabled","WithAlphanumericValidation"];export{i as Default,s as Disabled,l as WithAlphanumericValidation,k as __namedExportsOrder,R as default};
