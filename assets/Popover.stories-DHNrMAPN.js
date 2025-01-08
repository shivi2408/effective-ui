import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as R}from"./index-B-o1Wr-g.js";import{c as u}from"./index-DUolvyrz.js";import{B as r}from"./Button-Bq0IRLN9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const A=({trigger:n="click",position:l="top",content:t,isVisible:E,children:H,backdrop:N="transparent",className:$,style:I,onVisibilityChange:o,...O})=>{const[d,m]=R.useState(E||!1),D=()=>{const v=!d;m(v),o==null||o(v)},U=()=>{n==="hover"&&(m(!0),o==null||o(!0))},_=()=>{n==="hover"&&(m(!1),o==null||o(!1))},q=u("popover",`popover-${l}`,{"popover-visible":d},$),L=u("popover-container",`popover-container-${N}`);return e.jsxs("div",{className:L,onClick:n==="click"?D:void 0,onMouseEnter:U,onMouseLeave:_,...O,children:[e.jsx("div",{className:"popover-trigger",children:H}),d&&e.jsx("div",{className:q,style:I,children:t})]})},Q={title:"Components/Popover",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{trigger:{control:"select",options:["click","hover"],description:"The event that triggers the popover."},position:{control:"select",options:["top","bottom","left","right"],description:"Position of the popover relative to the trigger element."},isVisible:{control:"boolean",description:"Control the visibility of the popover."},content:{control:"text",description:"Content inside the popover."},backdrop:{control:"select",options:["transparent","blur","opaque"],description:"backdrop effect to the trigger element."}},args:{}},s={args:{trigger:"click",position:"bottom",content:"This is a popover triggered by a click!",children:e.jsx(r,{children:"Click Me"}),backdrop:"transparent"}},i={args:{trigger:"hover",position:"top",content:"This is a popover triggered by hover!",children:e.jsx(r,{children:"Hover Over Me"}),backdrop:"blur"}},c={render:n=>{const l=["left","top","bottom","right"];return e.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center"},children:l.map(t=>e.jsx(A,{...n,position:t,content:`Popover positioned at the ${t}.`,children:e.jsx(r,{children:t.charAt(0).toUpperCase()+t.slice(1)})},t))})},args:{trigger:"click",content:"Popover content",children:e.jsx(r,{children:"Default Button"})}},p={args:{isVisible:!0,position:"bottom",content:"This popover is always visible.",children:e.jsx(r,{children:"Always Visible"})}},a={args:{trigger:"click",position:"bottom",content:e.jsxs("div",{children:[e.jsx("h4",{children:"Custom Popover Content"}),e.jsx("p",{children:"This is some detailed content in the popover."})]}),children:e.jsx(r,{children:"Click Me"})}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    trigger: 'click',
    position: 'bottom',
    content: 'This is a popover triggered by a click!',
    children: <Button>Click Me</Button>,
    backdrop: 'transparent'
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,f,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    position: 'top',
    content: 'This is a popover triggered by hover!',
    children: <Button>Hover Over Me</Button>,
    backdrop: 'blur'
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var j,B,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const positions: Array<'left' | 'top' | 'bottom' | 'right'> = ['left', 'top', 'bottom', 'right'];
    return <div style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center'
    }}>\r
          {positions.map(position => <Popover key={position} {...args} position={position} content={\`Popover positioned at the \${position}.\`}>\r
              <Button>{position.charAt(0).toUpperCase() + position.slice(1)}</Button>\r
            </Popover>)}\r
        </div>;
  },
  args: {
    trigger: 'click',
    content: 'Popover content',
    children: <Button>Default Button</Button> // Provide default children here
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var T,C,y;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isVisible: true,
    position: 'bottom',
    content: 'This popover is always visible.',
    children: <Button>Always Visible</Button>
  }
}`,...(y=(C=p.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var M,w,S;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    trigger: 'click',
    position: 'bottom',
    content: <div>\r
        <h4>Custom Popover Content</h4>\r
        <p>This is some detailed content in the popover.</p>\r
      </div>,
    children: <Button>Click Me</Button>
  }
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const W=["ClickTrigger","HoverTrigger","Placement","ControlledVisibility","CustomContent"];export{s as ClickTrigger,p as ControlledVisibility,a as CustomContent,i as HoverTrigger,c as Placement,W as __namedExportsOrder,Q as default};
