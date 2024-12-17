import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as E}from"./index-DJO9vBfz.js";import{c as m}from"./index-i5X67GZP.js";import{I as F,a as V}from"./index-BV45KLB0.js";import"./iconBase-DNSKKw1X.js";const i=({title:o,isOpen:N=!1,isDisabled:d=!1,isCompact:S=!1,children:D,onToggle:l,className:w,style:I,...R})=>{const[r,L]=E.useState(N),U=()=>{d||(L(!r),l&&l(!r))},k=m("accordion",{"accordion-disabled":d},{"accordion-open":r},{"accordion-compact":S},w),_=m("accordion-header",{"accordion-disabled-header":d});return e.jsxs("div",{className:k,style:I,...R,children:[e.jsxs("div",{className:_,onClick:U,children:[e.jsx("span",{className:"accordion-title",children:o}),e.jsx("span",{className:"accordion-icon",children:r?e.jsx(F,{}):e.jsx(V,{})})]}),r&&e.jsx("div",{className:"accordion-content",children:D})]})};i.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const G={title:"Components/Accordion",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the accordion."},isOpen:{control:"boolean",description:"Whether the accordion is open by default."},isDisabled:{control:"boolean",description:"Disable the accordion."},isCompact:{control:"boolean",description:"to make the accordion look compact"},children:{control:"text",description:"Content inside the accordion."},onToggle:{action:"toggled",description:"Function called when the accordion is toggled."}}},t={args:{title:"Accordion 1",isOpen:!1,children:"This is the content of the accordion."}},n={args:{title:"Accordion 2",isOpen:!0,children:"This accordion is open by default."}},s={args:{title:"Accordion ",isDisabled:!0,children:"This accordion is disabled."}},a={args:{title:"Accordion",isCompact:!1,isOpen:!1},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...o,title:"Accordion 1",isOpen:o.isOpen,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx(i,{...o,title:"Accordion 2",isOpen:o.isOpen,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx(i,{...o,title:"Accordion 3",isOpen:o.isOpen,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})},c={args:{title:"Accordion 1",isCompact:!0},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...o,title:"Accordion 1",children:"Content of Accordion 1"}),e.jsx(i,{...o,title:"Accordion 2",children:"Content of Accordion 2"}),e.jsx(i,{...o,title:"Accordion 3",children:"Content of Accordion 3"})]})};var p,u,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Accordion 1',
    isOpen: false,
    children: 'This is the content of the accordion.'
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,A,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Accordion 2',
    isOpen: true,
    children: 'This accordion is open by default.'
  }
}`,...(h=(A=n.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var x,b,q;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Accordion ',
    isDisabled: true,
    children: 'This accordion is disabled.'
  }
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var O,C,T;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Accordion',
    isCompact: false,
    isOpen: false // Default state for all accordions
  },
  render: args => <>\r
        <Accordion {...args} title="Accordion 1" isOpen={args.isOpen}>\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r
        </Accordion>\r
        <Accordion {...args} title="Accordion 2" isOpen={args.isOpen}>\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r
        </Accordion>\r
        <Accordion {...args} title="Accordion 3" isOpen={args.isOpen}>\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r
        </Accordion>\r
      </>
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,y,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Accordion 1',
    // Add a default title here
    isCompact: true
  },
  render: args => <>\r
        <Accordion {...args} title="Accordion 1">\r
          Content of Accordion 1\r
        </Accordion>\r
        <Accordion {...args} title="Accordion 2">\r
          Content of Accordion 2\r
        </Accordion>\r
        <Accordion {...args} title="Accordion 3">\r
          Content of Accordion 3\r
        </Accordion>\r
      </>
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const H=["Default","Open","Disabled","MultipleAccordions","isCompact"];export{t as Default,s as Disabled,a as MultipleAccordions,n as Open,H as __namedExportsOrder,G as default,c as isCompact};
