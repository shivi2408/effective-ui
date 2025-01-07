import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as m}from"./index-DJO9vBfz.js";import{c as d}from"./index-i5X67GZP.js";import{e as Y,f as Z}from"./index-D0zyV334.js";import"./iconBase-DNSKKw1X.js";const E=({label:u,placeholder:C="Enter text...",variant:D="flat",color:M="secondary",size:j="md",radius:I="sm",fullWidth:B=!1,labelPlacement:N="outside",disabled:i=!1,isMultiline:F=!1,isPassword:p=!1,validationBehavior:ee,defaultValue:R="",className:$,style:_,onChange:o,...k})=>{const[H,L]=m.useState(R),[a,O]=m.useState(!1),A=d("input",{"input-fullWidth":B},{"input-disabled":i},$),G=d("inputbox-label",`inputbox-label-${N}`),J=d("inputbox",`inputbox-${j}`,`inputbox-${D}`,`inputbox-${I}`,`inputbox--${M}`),K=c=>{i||(L(c.target.value),o==null||o(c.target.value))},Q=()=>{O(!a)},U=F?"textarea":"input",X=p&&!a?"password":"text";return e.jsxs("label",{className:A,style:_,children:[u&&e.jsx("span",{className:G,children:u}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx(U,{className:J,placeholder:C,value:H,onChange:K,disabled:i,type:X,...k}),p&&e.jsxs("button",{type:"button",onClick:Q,className:"toggle-password-visibility","aria-label":a?"Hide password":"Show password",children:[a?e.jsx(Y,{}):e.jsx(Z,{})," "]})]})]})};E.__docgenInfo={description:"",methods:[],displayName:"InputBox",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Enter text...'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'flat' | 'faded' | 'bordered' | 'underlined'",elements:[{name:"literal",value:"'flat'"},{name:"literal",value:"'faded'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'underlined'"}]},description:"",defaultValue:{value:"'flat'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labelPlacement:{required:!1,tsType:{name:"union",raw:"'inside' | 'outside'",elements:[{name:"literal",value:"'inside'"},{name:"literal",value:"'outside'"}]},description:"",defaultValue:{value:"'outside'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isMultiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validationBehavior:{required:!1,tsType:{name:"string"},description:""},isPassword:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},defaultValue:{defaultValue:{value:"''",computed:!1},required:!1}}};const ne={title:"Components/InputBox",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the input box."},placeholder:{control:"text",description:"Placeholder text for the input box."},disabled:{control:"boolean",description:"Disable the input box, making it non-interactive."},variant:{control:"select",options:["flat","faded","bordered","underlined"],description:"Style variant of the input box."},color:{control:"select",options:["primary","secondary","success","warning"],description:"Color variant of the inputbox."},size:{control:"select",options:["sm","md","lg"],description:"Size of the input box."},radius:{control:"select",options:["none","sm","md","lg","full"],description:"Border radius for the input box."},fullWidth:{control:"boolean",description:"If true, the input box spans the full width of its container."},labelPlacement:{control:"select",options:["inside","outside"],description:"Position of the label in relation to the input box."},isMultiline:{control:"boolean",description:"If true, renders a textarea instead of a single-line input."},isPassword:{control:"boolean",description:"If true, input box behaves like a password field."},validationBehavior:{control:"text",description:"Custom validation behavior for the input box."},defaultValue:{control:"text",description:"Default value for the input box."}}},l={args:{label:"Default",placeholder:"Enter text...",variant:"bordered",color:"secondary",radius:"sm",size:"md",disabled:!1,defaultValue:"",fullWidth:!1,labelPlacement:"outside",isMultiline:!1}},t={args:{label:"Multiline ",placeholder:"Enter multiple lines...",variant:"flat",radius:"md",size:"lg",defaultValue:"",isMultiline:!0,fullWidth:!0}},s={args:{label:"Disabled ",placeholder:"Cannot type here...",variant:"faded",radius:"sm",size:"md",disabled:!0}},r={args:{label:"Full Width ",placeholder:"Spans full width...",variant:"underlined",size:"lg",fullWidth:!0}},n={args:{label:"Password",placeholder:"Enter your password",variant:"bordered",color:"primary",radius:"md",size:"md",isPassword:!0,fullWidth:!1,defaultValue:""}};var f,b,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,w,V;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Disabled ',
    placeholder: 'Cannot type here...',
    variant: 'faded',
    radius: 'sm',
    size: 'md',
    disabled: true
  }
}`,...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var P,S,T;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Full Width ',
    placeholder: 'Spans full width...',
    variant: 'underlined',
    size: 'lg',
    fullWidth: true
  }
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,W,z;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(W=n.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const ie=["Default","Multiline","Disabled","FullWidth","Password"];export{l as Default,s as Disabled,r as FullWidth,t as Multiline,n as Password,ie as __namedExportsOrder,ne as default};
