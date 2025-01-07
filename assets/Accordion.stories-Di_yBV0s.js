import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{r as M}from"./index-B-o1Wr-g.js";import{c as m}from"./index-DUolvyrz.js";import{I as _,a as B}from"./index-DMoKmcBB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const i=({title:e,isOpen:I=!1,isDisabled:d=!1,isCompact:L=!1,children:N,onToggle:l,className:S,style:U,...y})=>{const[r,k]=M.useState(I),w=()=>{d||(k(!r),l&&l(!r))},E=m("accordion",{"accordion-disabled":d},{"accordion-open":r},{"accordion-compact":L},S),F=m("accordion-header",{"accordion-disabled-header":d});return o.jsxs("div",{className:E,style:U,...y,children:[o.jsxs("div",{className:F,onClick:w,children:[o.jsx("span",{className:"accordion-title",children:e}),o.jsx("span",{className:"accordion-icon",children:r?o.jsx(_,{}):o.jsx(B,{})})]}),r&&o.jsx("div",{className:"accordion-content",children:N})]})},K={title:"Components/Accordion",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the accordion."},isOpen:{control:"boolean",description:"Whether the accordion is open by default."},isDisabled:{control:"boolean",description:"Disable the accordion."},isCompact:{control:"boolean",description:"to make the accordion look compact"},children:{control:"text",description:"Content inside the accordion."},onToggle:{action:"toggled",description:"Function called when the accordion is toggled."}}},c={args:{title:"Accordion 1",isOpen:!1,children:"This is the content of the accordion."}},n={args:{title:"Accordion 2",isOpen:!0,children:"This accordion is open by default."}},t={args:{title:"Accordion ",isDisabled:!0,children:"This accordion is disabled."}},s={args:{title:"Accordion",isCompact:!1,isOpen:!1},render:e=>o.jsxs(o.Fragment,{children:[o.jsx(i,{...e,title:"Accordion 1",isOpen:e.isOpen,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),o.jsx(i,{...e,title:"Accordion 2",isOpen:e.isOpen,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),o.jsx(i,{...e,title:"Accordion 3",isOpen:e.isOpen,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})},a={args:{title:"Accordion 1",isCompact:!0},render:e=>o.jsxs(o.Fragment,{children:[o.jsx(i,{...e,title:"Accordion 1",children:"Content of Accordion 1"}),o.jsx(i,{...e,title:"Accordion 2",children:"Content of Accordion 2"}),o.jsx(i,{...e,title:"Accordion 3",children:"Content of Accordion 3"})]})};var u,p,A;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Accordion 1',
    isOpen: false,
    children: 'This is the content of the accordion.'
  }
}`,...(A=(p=c.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};var h,g,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Accordion 2',
    isOpen: true,
    children: 'This accordion is open by default.'
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,O;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Accordion ',
    isDisabled: true,
    children: 'This accordion is disabled.'
  }
}`,...(O=(b=t.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var q,C,j;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,T,D;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const P=["Default","Open","Disabled","MultipleAccordions","isCompact"];export{c as Default,t as Disabled,s as MultipleAccordions,n as Open,P as __namedExportsOrder,K as default,a as isCompact};
