import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as m}from"./index-B-o1Wr-g.js";import{c as d}from"./index-DUolvyrz.js";import{d as X,e as Y}from"./index-CZG-Yva6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const Z=({label:u,placeholder:M="Enter text...",variant:V="flat",color:C="secondary",size:I="md",radius:B="sm",fullWidth:F=!1,labelPlacement:N="outside",disabled:n=!1,isMultiline:$=!1,isPassword:c=!1,validationBehavior:ee,defaultValue:k="",className:R,style:T,onChange:i,..._})=>{const[H,L]=m.useState(k),[t,O]=m.useState(!1),q=d("input",{"input-fullWidth":F},{"input-disabled":n},R),A=d("inputbox-label",`inputbox-label-${N}`),G=d("inputbox",`inputbox-${I}`,`inputbox-${V}`,`inputbox-${B}`,`inputbox--${C}`),J=p=>{n||(L(p.target.value),i==null||i(p.target.value))},K=()=>{O(!t)},Q=$?"textarea":"input",U=c&&!t?"password":"text";return e.jsxs("label",{className:q,style:T,children:[u&&e.jsx("span",{className:A,children:u}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(Q,{className:G,placeholder:M,value:H,onChange:J,disabled:n,type:U,..._}),c&&e.jsxs("button",{type:"button",onClick:K,className:"toggle-password-visibility","aria-label":t?"Hide password":"Show password",children:[t?e.jsx(X,{}):e.jsx(Y,{})," "]})]})]})},ne={title:"Components/InputBox",component:Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the input box."},placeholder:{control:"text",description:"Placeholder text for the input box."},disabled:{control:"boolean",description:"Disable the input box, making it non-interactive."},variant:{control:"select",options:["flat","faded","bordered","underlined"],description:"Style variant of the input box."},color:{control:"select",options:["primary","secondary","success","warning"],description:"Color variant of the inputbox."},size:{control:"select",options:["sm","md","lg"],description:"Size of the input box."},radius:{control:"select",options:["none","sm","md","lg","full"],description:"Border radius for the input box."},fullWidth:{control:"boolean",description:"If true, the input box spans the full width of its container."},labelPlacement:{control:"select",options:["inside","outside"],description:"Position of the label in relation to the input box."},isMultiline:{control:"boolean",description:"If true, renders a textarea instead of a single-line input."},isPassword:{control:"boolean",description:"If true, input box behaves like a password field."},validationBehavior:{control:"text",description:"Custom validation behavior for the input box."},defaultValue:{control:"text",description:"Default value for the input box."}}},a={args:{label:"Default",placeholder:"Enter text...",variant:"bordered",color:"secondary",radius:"sm",size:"md",disabled:!1,defaultValue:"",fullWidth:!1,labelPlacement:"outside",isMultiline:!1}},s={args:{label:"Multiline ",placeholder:"Enter multiple lines...",variant:"flat",radius:"md",size:"lg",defaultValue:"",isMultiline:!0,fullWidth:!0}},l={args:{label:"Disabled ",placeholder:"Cannot type here...",variant:"faded",radius:"sm",size:"md",disabled:!0}},r={args:{label:"Full Width ",placeholder:"Spans full width...",variant:"underlined",size:"lg",fullWidth:!0}},o={args:{label:"Password",placeholder:"Enter your password",variant:"bordered",color:"primary",radius:"md",size:"md",isPassword:!0,fullWidth:!1,defaultValue:""}};var f,b,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    placeholder: 'Enter text...',
    variant: 'bordered',
    color: 'secondary',
    radius: 'sm',
    size: 'md',
    disabled: false,
    defaultValue: '',
    fullWidth: false,
    labelPlacement: 'outside',
    isMultiline: false
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,g,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Multiline ',
    placeholder: 'Enter multiple lines...',
    variant: 'flat',
    radius: 'md',
    size: 'lg',
    defaultValue: '',
    isMultiline: true,
    fullWidth: true
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var w,y,P;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Disabled ',
    placeholder: 'Cannot type here...',
    variant: 'faded',
    radius: 'sm',
    size: 'md',
    disabled: true
  }
}`,...(P=(y=l.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var S,W,z;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Full Width ',
    placeholder: 'Spans full width...',
    variant: 'underlined',
    size: 'lg',
    fullWidth: true
  }
}`,...(z=(W=r.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var E,D,j;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    variant: 'bordered',
    color: 'primary',
    radius: 'md',
    size: 'md',
    isPassword: true,
    // Password input
    fullWidth: false,
    defaultValue: ''
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const ie=["Default","Multiline","Disabled","FullWidth","Password"];export{a as Default,l as Disabled,r as FullWidth,s as Multiline,o as Password,ie as __namedExportsOrder,ne as default};
