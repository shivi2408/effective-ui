import{j as a}from"./jsx-runtime-j_jdvEMj.js";import{r as f}from"./index-B-o1Wr-g.js";import{c as b}from"./index-DUolvyrz.js";import{F as _}from"./index-vva0AINM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const z=({items:l,separator:k=">",maxItems:s,isDisabled:t=!1,variant:h="light",onClick:x})=>{const[T,v]=f.useState(!1),y=f.useRef(null);f.useEffect(()=>{const r=i=>{y.current&&!y.current.contains(i.target)&&v(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[]);const c=(r,i)=>{console.log(`Item clicked: ${r}`),!(t||!i)&&x&&x(r)},L=()=>{v(r=>!r)},O=()=>{if(!s||l.length<=s||s<3)return l.map((e,n)=>a.jsxs("span",{className:"breadcrumb-item",children:[e.link?a.jsx("a",{href:t?void 0:e.link,className:b("breadcrumb-link",{"breadcrumb-link-disabled":t}),onClick:o=>{o.preventDefault(),c(e.label,e.link)},children:e.label}):a.jsx("span",{className:"breadcrumb-label",children:e.label}),n<l.length-1&&a.jsx("span",{className:"breadcrumb-separator",children:k})]},n));const r=l.slice(0,Math.ceil((s-1)/2)),i=l.slice(-Math.floor((s-1)/2)),W=l.slice(Math.ceil((s-1)/2),-Math.floor((s-1)/2));return a.jsxs(a.Fragment,{children:[r.map((e,n)=>a.jsxs("span",{className:"breadcrumb-item",children:[e.link?a.jsx("a",{href:t?void 0:e.link,className:b("breadcrumb-link",{"breadcrumb-link-disabled":t}),onClick:o=>{o.preventDefault(),c(e.label,e.link)},children:e.label}):a.jsx("span",{className:"breadcrumb-label",children:e.label}),a.jsx("span",{className:"breadcrumb-separator",children:k})]},`start-${n}`)),a.jsxs("span",{className:"breadcrumb-item breadcrumb-ellipsis",onClick:L,ref:y,children:[a.jsx(_,{size:18}),T&&a.jsx("div",{className:"breadcrumb-dropdown",children:W.map((e,n)=>a.jsx("div",{className:"breadcrumb-dropdown-item",onClick:()=>c(e.label,e.link),children:e.label},`hidden-${n}`))})]}),i.map((e,n)=>a.jsxs("span",{className:"breadcrumb-item",children:[a.jsx("span",{className:"breadcrumb-separator",children:k}),e.link?a.jsx("a",{href:t?void 0:e.link,className:b("breadcrumb-link",{"breadcrumb-link-disabled":t}),onClick:o=>{o.preventDefault(),c(e.label,e.link)},children:e.label}):a.jsx("span",{className:"breadcrumb-label",children:e.label})]},`end-${n}`))]})};return a.jsx("div",{className:b("breadcrumbs-container",{"breadcrumbs-light":h==="light","breadcrumbs-solid":h==="solid","breadcrumbs-bordered":h==="bordered"}),children:O()})},Q={title:"Components/Breadcrumbs",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{control:"object",description:"An array of breadcrumb items with `label` and optional `link`."},separator:{control:"text",description:"The separator string between breadcrumb items.",defaultValue:">"},maxItems:{control:"number",description:'The maximum number of items to display, with "..." in the middle if truncated.'},isDisabled:{control:"boolean",description:"Disable interaction with breadcrumb links."},variant:{control:"select",options:["light","solid","bordered"],description:"Visual variant of the breadcrumbs.",defaultValue:"light"},onClick:{action:"clicked",description:"Function called when a breadcrumb is clicked."}},args:{separator:">",variant:"light",onClick:l=>console.log(`Breadcrumb clicked: ${l}`)}},d={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],separator:">",variant:"light"}},m={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],separator:"/",variant:"light"}},u={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"},{label:"Extra",link:"/extra"}],maxItems:3,variant:"light"}},g={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],isDisabled:!0,variant:"light"}},p={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],variant:"solid"}};var C,j,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Category',
      link: '/category'
    }, {
      label: 'Subcategory',
      link: '/subcategory'
    }, {
      label: 'Item',
      link: '/item'
    }],
    separator: '>',
    variant: 'light'
  }
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,I,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Category',
      link: '/category'
    }, {
      label: 'Subcategory',
      link: '/subcategory'
    }, {
      label: 'Item',
      link: '/item'
    }],
    separator: '/',
    variant: 'light'
  }
}`,...(w=(I=m.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var E,H,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Category',
      link: '/category'
    }, {
      label: 'Subcategory',
      link: '/subcategory'
    }, {
      label: 'Item',
      link: '/item'
    }, {
      label: 'Extra',
      link: '/extra'
    }],
    maxItems: 3,
    variant: 'light'
  }
}`,...(D=(H=u.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var V,M,$;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Category',
      link: '/category'
    }, {
      label: 'Subcategory',
      link: '/subcategory'
    }, {
      label: 'Item',
      link: '/item'
    }],
    isDisabled: true,
    variant: 'light'
  }
}`,...($=(M=g.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var B,F,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Category',
      link: '/category'
    }, {
      label: 'Subcategory',
      link: '/subcategory'
    }, {
      label: 'Item',
      link: '/item'
    }],
    variant: 'solid'
  }
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const U=["Default","WithCustomSeparator","MaxItems","Disabled","SolidVariant"];export{d as Default,g as Disabled,u as MaxItems,p as SolidVariant,m as WithCustomSeparator,U as __namedExportsOrder,Q as default};
