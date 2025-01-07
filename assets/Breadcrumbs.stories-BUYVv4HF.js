import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as f}from"./index-DJO9vBfz.js";import{c as d}from"./index-i5X67GZP.js";import{F as O}from"./index-6a4VENTw.js";import"./iconBase-DNSKKw1X.js";const F=({items:l,separator:k=">",maxItems:t,isDisabled:s=!1,variant:h="light",onClick:v})=>{const[_,x]=f.useState(!1),y=f.useRef(null);f.useEffect(()=>{const r=i=>{y.current&&!y.current.contains(i.target)&&x(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[]);const c=(r,i)=>{console.log(`Item clicked: ${r}`),!(s||!i)&&v&&v(r)},R=()=>{x(r=>!r)},A=()=>{if(!t||l.length<=t||t<3)return l.map((e,n)=>a.jsxs("span",{className:"breadcrumb-item",children:[e.link?a.jsx("a",{href:s?void 0:e.link,className:d("breadcrumb-link",{"breadcrumb-link-disabled":s}),onClick:o=>{o.preventDefault(),c(e.label,e.link)},children:e.label}):a.jsx("span",{className:"breadcrumb-label",children:e.label}),n<l.length-1&&a.jsx("span",{className:"breadcrumb-separator",children:k})]},n));const r=l.slice(0,Math.ceil((t-1)/2)),i=l.slice(-Math.floor((t-1)/2)),L=l.slice(Math.ceil((t-1)/2),-Math.floor((t-1)/2));return a.jsxs(a.Fragment,{children:[r.map((e,n)=>a.jsxs("span",{className:"breadcrumb-item",children:[e.link?a.jsx("a",{href:s?void 0:e.link,className:d("breadcrumb-link",{"breadcrumb-link-disabled":s}),onClick:o=>{o.preventDefault(),c(e.label,e.link)},children:e.label}):a.jsx("span",{className:"breadcrumb-label",children:e.label}),a.jsx("span",{className:"breadcrumb-separator",children:k})]},`start-${n}`)),a.jsxs("span",{className:"breadcrumb-item breadcrumb-ellipsis",onClick:R,ref:y,children:[a.jsx(O,{size:18}),_&&a.jsx("div",{className:"breadcrumb-dropdown",children:L.map((e,n)=>a.jsx("div",{className:"breadcrumb-dropdown-item",onClick:()=>c(e.label,e.link),children:e.label},`hidden-${n}`))})]}),i.map((e,n)=>a.jsxs("span",{className:"breadcrumb-item",children:[a.jsx("span",{className:"breadcrumb-separator",children:k}),e.link?a.jsx("a",{href:s?void 0:e.link,className:d("breadcrumb-link",{"breadcrumb-link-disabled":s}),onClick:o=>{o.preventDefault(),c(e.label,e.link)},children:e.label}):a.jsx("span",{className:"breadcrumb-label",children:e.label})]},`end-${n}`))]})};return a.jsx("div",{className:d("breadcrumbs-container",{"breadcrumbs-light":h==="light","breadcrumbs-solid":h==="solid","breadcrumbs-bordered":h==="bordered"}),children:A()})};F.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; link?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!1}}]}}],raw:"{ label: string; link?: string }[]"},description:""},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'>'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'light' | 'solid' | 'bordered'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'bordered'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""}}};const P={title:"Components/Breadcrumbs",component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{control:"object",description:"An array of breadcrumb items with `label` and optional `link`."},separator:{control:"text",description:"The separator string between breadcrumb items.",defaultValue:">"},maxItems:{control:"number",description:'The maximum number of items to display, with "..." in the middle if truncated.'},isDisabled:{control:"boolean",description:"Disable interaction with breadcrumb links."},variant:{control:"select",options:["light","solid","bordered"],description:"Visual variant of the breadcrumbs.",defaultValue:"light"},onClick:{action:"clicked",description:"Function called when a breadcrumb is clicked."}},args:{separator:">",variant:"light",onClick:l=>console.log(`Breadcrumb clicked: ${l}`)}},b={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],separator:">",variant:"light"}},m={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],separator:"/",variant:"light"}},u={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"},{label:"Extra",link:"/extra"}],maxItems:3,variant:"light"}},p={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],isDisabled:!0,variant:"light"}},g={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/subcategory"},{label:"Item",link:"/item"}],variant:"solid"}};var C,j,S;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(j=b.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,w,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var E,H,V;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(H=u.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var T,q,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var M,B,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(B=g.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const Q=["Default","WithCustomSeparator","MaxItems","Disabled","SolidVariant"];export{b as Default,p as Disabled,u as MaxItems,g as SolidVariant,m as WithCustomSeparator,Q as __namedExportsOrder,P as default};
