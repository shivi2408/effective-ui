import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as t}from"./index-DJO9vBfz.js";import{c as f}from"./index-i5X67GZP.js";import{a as g,b as w,c as v,d as y}from"./index-D0zyV334.js";import"./iconBase-DNSKKw1X.js";const q=({options:h,triggerLabel:d,placement:R="bottom",multipleSelection:p=!1,disabledKeys:I=[],withAnimation:P=!1,className:$,style:z,...B})=>{const[O,c]=t.useState(!1),[u,D]=t.useState([]),m=t.useRef(null),G=()=>{if(p){const e=h.filter(l=>u.includes(l.value)).map(l=>l.label);return e.length>0?e.join(", "):d}return d},H=()=>c(e=>!e),J=e=>{p?D(l=>l.includes(e)?l.filter(X=>X!==e):[...l,e]):(D([e]),c(!1))},b=e=>I.includes(e),Q=f("dropdown",{"dropdown-animated":P},$),U=f("dropdown-menu",`dropdown-${R}`,{"dropdown-open":O}),W=e=>f("dropdown-item",{"dropdown-disabled":b(e.value),"dropdown-selected":u.includes(e.value),"dropdown-danger":e.danger});return t.useEffect(()=>{const e=l=>{m.current&&!m.current.contains(l.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),n.jsxs("div",{className:Q,style:z,ref:m,...B,children:[n.jsx("button",{className:"dropdown-trigger",onClick:H,disabled:b(d),children:G()}),O&&n.jsx("ul",{className:U,children:h.map((e,l)=>n.jsxs("li",{className:W(e),onClick:()=>!b(e.value)&&J(e.value),children:[p&&u.includes(e.value)&&n.jsx("span",{className:"dropdown-checkmark",children:"✔"}),e.icon&&n.jsx("span",{className:"dropdown-icon",children:e.icon}),n.jsx("span",{className:"dropdown-label",children:e.label}),e.description&&n.jsx("span",{className:"dropdown-description",children:e.description})]},l))})]})};q.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},triggerLabel:{required:!0,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},multipleSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabledKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},withAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const te={title:"Components/Dropdown",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of options for the dropdown menu.",defaultValue:[{label:"New file",value:"new_file",icon:n.jsx(g,{})},{label:"Copy link",value:"copy_link",icon:n.jsx(w,{})},{label:"Edit file",value:"edit_file",icon:n.jsx(v,{})},{label:"Delete file",value:"delete_file",danger:!0,icon:n.jsx(y,{})}]},triggerLabel:{control:{type:"text"},description:"Label for the dropdown trigger button.",defaultValue:"Trigger"},placement:{control:{type:"select"},description:"Placement of the dropdown menu relative to the trigger.",options:["top","bottom","left","right"],defaultValue:"bottom"},multipleSelection:{control:{type:"boolean"},description:"Allow multiple selections.",defaultValue:!1},disabledKeys:{control:{type:"text"},description:"Comma-separated list of disabled keys.",defaultValue:""},withAnimation:{control:{type:"boolean"},description:"Toggle dropdown animation.",defaultValue:!0}}},o={args:{options:[{label:"New file",value:"new_file",icon:n.jsx(g,{})},{label:"Copy link",value:"copy_link",icon:n.jsx(w,{})},{label:"Edit file",value:"edit_file",icon:n.jsx(v,{})},{label:"Delete file",value:"delete_file",danger:!0,icon:n.jsx(y,{})}],triggerLabel:"Trigger",placement:"bottom",multipleSelection:!1,disabledKeys:[],withAnimation:!0}},a={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"}],triggerLabel:"Dropdown with Many Options",placement:"right",multipleSelection:!1,disabledKeys:[],withAnimation:!0}},i={args:{options:[],triggerLabel:"Disabled Dropdown",placement:"bottom",multipleSelection:!1,disabledKeys:[],withAnimation:!1}},s={args:{options:[{label:"Option 1",value:"option1",icon:n.jsx(g,{})},{label:"Option 2",value:"option2",icon:n.jsx(w,{})},{label:"Option 3",value:"option3",icon:n.jsx(v,{})},{label:"Option 4",value:"option4",icon:n.jsx(y,{})}],triggerLabel:"Multi Select Dropdown",placement:"bottom",multipleSelection:!0,disabledKeys:[],withAnimation:!0}},r={args:{options:[{label:"New file",value:"new_file"},{label:"Copy link",value:"copy_link",disabled:!0},{label:"Edit file",value:"edit_file"},{label:"Delete file",value:"delete_file",danger:!0}],triggerLabel:"Dropdown with Disabled Options",placement:"bottom",multipleSelection:!1,disabledKeys:["copy_link"],withAnimation:!0}};var x,_,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'New file',
      value: 'new_file',
      icon: <FaFile />
    }, {
      label: 'Copy link',
      value: 'copy_link',
      icon: <FaLink />
    }, {
      label: 'Edit file',
      value: 'edit_file',
      icon: <FaEdit />
    }, {
      label: 'Delete file',
      value: 'delete_file',
      danger: true,
      icon: <FaTrash />
    }],
    triggerLabel: 'Trigger',
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: true
  }
}`,...(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var j,k,L;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }, {
      label: 'Option 4',
      value: 'option4'
    }, {
      label: 'Option 5',
      value: 'option5'
    }, {
      label: 'Option 6',
      value: 'option6'
    }],
    triggerLabel: 'Dropdown with Many Options',
    placement: 'right',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: true
  }
}`,...(L=(k=a.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var T,A,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: [],
    triggerLabel: 'Disabled Dropdown',
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: false
  }
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var N,F,E;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'option1',
      icon: <FaFile />
    }, {
      label: 'Option 2',
      value: 'option2',
      icon: <FaLink />
    }, {
      label: 'Option 3',
      value: 'option3',
      icon: <FaEdit />
    }, {
      label: 'Option 4',
      value: 'option4',
      icon: <FaTrash />
    }],
    triggerLabel: 'Multi Select Dropdown',
    placement: 'bottom',
    multipleSelection: true,
    disabledKeys: [],
    withAnimation: true
  }
}`,...(E=(F=s.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var K,V,M;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'New file',
      value: 'new_file'
    }, {
      label: 'Copy link',
      value: 'copy_link',
      disabled: true
    }, {
      label: 'Edit file',
      value: 'edit_file'
    }, {
      label: 'Delete file',
      value: 'delete_file',
      danger: true
    }],
    triggerLabel: 'Dropdown with Disabled Options',
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: ['copy_link'],
    withAnimation: true
  }
}`,...(M=(V=r.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const oe=["Default","ManyOptions","DisabledState","MultiSelect","DisabledOptions"];export{o as Default,r as DisabledOptions,i as DisabledState,a as ManyOptions,s as MultiSelect,oe as __namedExportsOrder,te as default};
