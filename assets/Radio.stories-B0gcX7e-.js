import{j as n}from"./jsx-runtime-j_jdvEMj.js";import{r as d}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const L=({name:A,options:B,selected:o,onChange:r,orientation:N="column",className:R,style:F,disabled:p=!1})=>{const[u,c]=d.useState(o||"");d.useEffect(()=>{o!==void 0&&o!==u&&c(o)},[o]);const T=e=>{p||(c(e),r&&r(e))};return n.jsx("div",{className:`radio-input ${N==="row"?"radio-row":"radio-column"} ${R}`,style:F,children:B.map((e,G)=>n.jsxs("label",{className:"radio-label",children:[n.jsx("input",{type:"radio",name:A,className:"radioinput",value:e.value,checked:u===e.value,onChange:()=>T(e.value),disabled:p}),e.label&&n.jsx("span",{className:"radio-label-text",children:e.label})]},G))})},k={title:"Components/Radio",component:L,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"The name attribute for the radio group."},options:{control:"object",description:"Array of options for the radio group. Each option should have a value and optionally a label."},selected:{control:"text",description:"The currently selected value."},onChange:{action:"changed",description:"Function called when a radio option is selected."},orientation:{control:"radio",options:["row","column"],description:"Sets the layout orientation of the radio group."},disabled:{control:"boolean",description:"Disables all the radio buttons in the group."},className:{control:"text",description:"Additional CSS classes for styling."},style:{control:"object",description:"Inline styles for the radio group."}},args:{onChange:()=>{}}},a={args:{name:"default-radio",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],selected:"option1",orientation:"column",disabled:!1}},t={args:{name:"lg-group",options:[{value:"optionA",label:"Option A"},{value:"optionB",label:"Option B"},{value:"optionC",label:"Option C"},{value:"optionD",label:"Option D"},{value:"optionE",label:"Option E"}],selected:"optionB",orientation:"column",disabled:!1}},l={args:{name:"default-radio",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],selected:"option1",orientation:"column",disabled:!0}},s={args:{name:"no-labels",options:[{value:"1"},{value:"2"},{value:"3"}],selected:"2",orientation:"column",disabled:!1}},i={args:{name:"custom-styles",options:[{value:"opt1",label:"Custom 1"},{value:"opt2",label:"Custom 2"},{value:"opt3",label:"Custom 3"}],selected:"opt1",orientation:"row",style:{gap:"15px"},disabled:!1}};var m,b,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,f,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'lg-group',
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var O,x,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,S,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,j,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const I=["Default","lgGroup","Disabled","WithoutLabels","RowFlex"];export{a as Default,l as Disabled,i as RowFlex,s as WithoutLabels,I as __namedExportsOrder,k as default,t as lgGroup};
