import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as D}from"./index-i5X67GZP.js";import{G as S}from"./iconBase-DNSKKw1X.js";import"./index-DJO9vBfz.js";const L=({href:o="#",color:R="default",size:x="md",isDisabled:s=!1,underline:b="none",children:V,icon:i,className:E,style:C,onClick:l,...H})=>{const M=c=>{if(s){c.preventDefault();return}l&&l(c)},q=D("link",`link-${R}`,`link-${x}`,`link-underline-${b}`,{"link-disabled":s},E);return e.jsxs("a",{href:s?void 0:o,className:q,style:C,onClick:M,...H,children:[V,i&&e.jsx("span",{className:"link-icon",children:i})]})};L.__docgenInfo={description:"",methods:[],displayName:"Link",props:{href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},underline:{required:!1,tsType:{name:"union",raw:"'none' | 'hover' | 'always' | 'active' | 'focus'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"},{name:"literal",value:"'active'"},{name:"literal",value:"'focus'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement, MouseEvent>",elements:[{name:"HTMLAnchorElement"},{name:"MouseEvent"}]},name:"event"}],return:{name:"void"}}},description:""}}};function N(o){return S({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"},child:[]}]})(o)}const A={title:"Components/Link",component:L,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",description:"The URL the link points to."},color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The color variant of the link."},size:{control:"select",options:["sm","md","lg"],description:"The size of the link."},isDisabled:{control:"boolean",description:"Disable the link."},underline:{control:"select",options:["none","hover","always","active","focus"],description:"Underline style of the link."},children:{control:"text",description:"Text or elements inside the link."},onClick:{action:"clicked",description:"Function called when the link is clicked."},icon:{control:"boolean",description:"Toggle to show or hide an anchor icon."}},args:{onClick:void 0}},r={args:{href:"#",color:"default",size:"md",children:'"First solve the problem. Then, write the code." - Jon Johnson.'}},n={args:{href:"#",color:"secondary",underline:"hover",children:" Visit out our new Store"}},a={args:{href:"#",isDisabled:!0,children:"Disabled Link"}},t={args:{href:"#",color:"primary",children:e.jsxs(e.Fragment,{children:['"First solve the problem. Then, write the code." - Jon Johnson.',e.jsx(N,{size:20,style:{marginLeft:"8px"}})]})}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '#',
    color: 'default',
    size: 'md',
    children: '"First solve the problem. Then, write the code." - Jon Johnson.'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    href: '#',
    color: 'secondary',
    underline: 'hover',
    children: ' Visit out our new Store'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,g,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    href: '#',
    isDisabled: true,
    children: 'Disabled Link'
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var k,T,w;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    href: '#',
    color: 'primary',
    children: <>\r
          "First solve the problem. Then, write the code." - Jon Johnson.\r
          <RiExternalLinkLine size={20} style={{
        marginLeft: '8px'
      }} />\r
        </>
  }
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const I=["Default","Underline","Disabled","WithAnchorIcon"];export{r as Default,a as Disabled,n as Underline,t as WithAnchorIcon,I as __namedExportsOrder,A as default};
