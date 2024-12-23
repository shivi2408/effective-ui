import{j as n}from"./jsx-runtime-j_jdvEMj.js";import{r as o}from"./index-B-o1Wr-g.js";import{c as f}from"./index-DUolvyrz.js";import{F as g,a as w,b as v,c as h}from"./index-CZG-Yva6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const X=({options:y,triggerLabel:d,placement:R="bottom",multipleSelection:p=!1,disabledKeys:I=[],withAnimation:P=!1,className:$,style:q,...z})=>{const[O,c]=o.useState(!1),[u,D]=o.useState([]),m=o.useRef(null),B=()=>{if(p){const e=y.filter(l=>u.includes(l.value)).map(l=>l.label);return e.length>0?e.join(", "):d}return d},G=()=>c(e=>!e),H=e=>{p?D(l=>l.includes(e)?l.filter(W=>W!==e):[...l,e]):(D([e]),c(!1))},b=e=>I.includes(e),J=f("dropdown",{"dropdown-animated":P},$),Q=f("dropdown-menu",`dropdown-${R}`,{"dropdown-open":O}),U=e=>f("dropdown-item",{"dropdown-disabled":b(e.value),"dropdown-selected":u.includes(e.value),"dropdown-danger":e.danger});return o.useEffect(()=>{const e=l=>{m.current&&!m.current.contains(l.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),n.jsxs("div",{className:J,style:q,ref:m,...z,children:[n.jsx("button",{className:"dropdown-trigger",onClick:G,disabled:b(d),children:B()}),O&&n.jsx("ul",{className:Q,children:y.map((e,l)=>n.jsxs("li",{className:U(e),onClick:()=>!b(e.value)&&H(e.value),children:[p&&u.includes(e.value)&&n.jsx("span",{className:"dropdown-checkmark",children:"✔"}),e.icon&&n.jsx("span",{className:"dropdown-icon",children:e.icon}),n.jsx("span",{className:"dropdown-label",children:e.label}),e.description&&n.jsx("span",{className:"dropdown-description",children:e.description})]},l))})]})},te={title:"Components/Dropdown",component:X,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of options for the dropdown menu.",defaultValue:[{label:"New file",value:"new_file",icon:n.jsx(g,{})},{label:"Copy link",value:"copy_link",icon:n.jsx(w,{})},{label:"Edit file",value:"edit_file",icon:n.jsx(v,{})},{label:"Delete file",value:"delete_file",danger:!0,icon:n.jsx(h,{})}]},triggerLabel:{control:{type:"text"},description:"Label for the dropdown trigger button.",defaultValue:"Trigger"},placement:{control:{type:"select"},description:"Placement of the dropdown menu relative to the trigger.",options:["top","bottom","left","right"],defaultValue:"bottom"},multipleSelection:{control:{type:"boolean"},description:"Allow multiple selections.",defaultValue:!1},disabledKeys:{control:{type:"text"},description:"Comma-separated list of disabled keys.",defaultValue:""},withAnimation:{control:{type:"boolean"},description:"Toggle dropdown animation.",defaultValue:!0}}},t={args:{options:[{label:"New file",value:"new_file",icon:n.jsx(g,{})},{label:"Copy link",value:"copy_link",icon:n.jsx(w,{})},{label:"Edit file",value:"edit_file",icon:n.jsx(v,{})},{label:"Delete file",value:"delete_file",danger:!0,icon:n.jsx(h,{})}],triggerLabel:"Trigger",placement:"bottom",multipleSelection:!1,disabledKeys:[],withAnimation:!0}},a={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"}],triggerLabel:"Dropdown with Many Options",placement:"right",multipleSelection:!1,disabledKeys:[],withAnimation:!0}},i={args:{options:[],triggerLabel:"Disabled Dropdown",placement:"bottom",multipleSelection:!1,disabledKeys:[],withAnimation:!1}},s={args:{options:[{label:"Option 1",value:"option1",icon:n.jsx(g,{})},{label:"Option 2",value:"option2",icon:n.jsx(w,{})},{label:"Option 3",value:"option3",icon:n.jsx(v,{})},{label:"Option 4",value:"option4",icon:n.jsx(h,{})}],triggerLabel:"Multi Select Dropdown",placement:"bottom",multipleSelection:!0,disabledKeys:[],withAnimation:!0}},r={args:{options:[{label:"New file",value:"new_file"},{label:"Copy link",value:"copy_link",disabled:!0},{label:"Edit file",value:"edit_file"},{label:"Delete file",value:"delete_file",danger:!0}],triggerLabel:"Dropdown with Disabled Options",placement:"bottom",multipleSelection:!1,disabledKeys:["copy_link"],withAnimation:!0}};var x,_,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var k,S,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(L=(S=a.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var F,C,E;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: [],
    triggerLabel: 'Disabled Dropdown',
    placement: 'bottom',
    multipleSelection: false,
    disabledKeys: [],
    withAnimation: false
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,A,K;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(A=s.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var M,T,V;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(T=r.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const ae=["Default","ManyOptions","DisabledState","MultiSelect","DisabledOptions"];export{t as Default,r as DisabledOptions,i as DisabledState,a as ManyOptions,s as MultiSelect,ae as __namedExportsOrder,te as default};
