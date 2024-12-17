import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";const D=({name:E,options:R,selected:n,onChange:i,orientation:A="column",className:N,style:B,disabled:p=!1})=>{const[u,d]=c.useState(n||"");c.useEffect(()=>{n!==void 0&&n!==u&&d(n)},[n]);const L=e=>{p||(d(e),i&&i(e))};return a.jsx("div",{className:`radio-input ${A==="row"?"radio-row":"radio-column"} ${N}`,style:B,children:R.map((e,_)=>a.jsxs("label",{className:"radio-label",children:[a.jsx("input",{type:"radio",name:E,className:"input",value:e.value,checked:u===e.value,onChange:()=>L(e.value),disabled:p}),e.label&&a.jsx("span",{className:"radio-label-text",children:e.label})]},_))})};D.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label?: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}],raw:"{ value: string; label?: string }[]"},description:""},selected:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G={title:"Components/Radio",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"The name attribute for the radio group."},options:{control:"object",description:"Array of options for the radio group. Each option should have a value and optionally a label."},selected:{control:"text",description:"The currently selected value."},onChange:{action:"changed",description:"Function called when a radio option is selected."},orientation:{control:"radio",options:["row","column"],description:"Sets the layout orientation of the radio group."},disabled:{control:"boolean",description:"Disables all the radio buttons in the group."},className:{control:"text",description:"Additional CSS classes for styling."},style:{control:"object",description:"Inline styles for the radio group."}},args:{onChange:()=>{}}},o={args:{name:"default-radio",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],selected:"option1",orientation:"column",disabled:!1}},t={args:{name:"large-group",options:[{value:"optionA",label:"Option A"},{value:"optionB",label:"Option B"},{value:"optionC",label:"Option C"},{value:"optionD",label:"Option D"},{value:"optionE",label:"Option E"}],selected:"optionB",orientation:"column",disabled:!1}},l={args:{name:"default-radio",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],selected:"option1",orientation:"column",disabled:!0}},s={args:{name:"no-labels",options:[{value:"1"},{value:"2"},{value:"3"}],selected:"2",orientation:"column",disabled:!1}},r={args:{name:"custom-styles",options:[{value:"opt1",label:"Custom 1"},{value:"opt2",label:"Custom 2"},{value:"opt3",label:"Custom 3"}],selected:"opt1",orientation:"row",style:{gap:"15px"},disabled:!1}};var m,b,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'default-radio',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }],
    selected: 'option1',
    orientation: 'column',
    disabled: false
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'large-group',
    options: [{
      value: 'optionA',
      label: 'Option A'
    }, {
      value: 'optionB',
      label: 'Option B'
    }, {
      value: 'optionC',
      label: 'Option C'
    }, {
      value: 'optionD',
      label: 'Option D'
    }, {
      value: 'optionE',
      label: 'Option E'
    }],
    selected: 'optionB',
    orientation: 'column',
    disabled: false
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,O,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'default-radio',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }],
    selected: 'option1',
    orientation: 'column',
    disabled: true
  }
}`,...(C=(O=l.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var x,w,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'no-labels',
    options: [{
      value: '1'
    }, {
      value: '2'
    }, {
      value: '3'
    }],
    selected: '2',
    orientation: 'column',
    disabled: false
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,q,j;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'custom-styles',
    options: [{
      value: 'opt1',
      label: 'Custom 1'
    }, {
      value: 'opt2',
      label: 'Custom 2'
    }, {
      value: 'opt3',
      label: 'Custom 3'
    }],
    selected: 'opt1',
    orientation: 'row',
    style: {
      gap: '15px'
    },
    disabled: false
  }
}`,...(j=(q=r.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const I=["Default","LargeGroup","Disabled","WithoutLabels","RowFlex"];export{o as Default,l as Disabled,t as LargeGroup,r as RowFlex,s as WithoutLabels,I as __namedExportsOrder,G as default};
