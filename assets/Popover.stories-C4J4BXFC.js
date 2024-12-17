import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as U}from"./index-DJO9vBfz.js";import{c as g}from"./index-i5X67GZP.js";import{B as o}from"./Button-DAjo5gje.js";const m=({trigger:n="click",position:l="top",content:r,isVisible:S,children:M,backdrop:A="transparent",className:V,style:E,onVisibilityChange:t,...H})=>{const[d,u]=U.useState(S||!1),I=()=>{const v=!d;u(v),t==null||t(v)},_=()=>{n==="hover"&&(u(!0),t==null||t(!0))},$=()=>{n==="hover"&&(u(!1),t==null||t(!1))},O=g("popover",`popover-${l}`,{"popover-visible":d},V),D=g("popover-container",`popover-container-${A}`);return e.jsxs("div",{className:D,onClick:n==="click"?I:void 0,onMouseEnter:_,onMouseLeave:$,...H,children:[e.jsx("div",{className:"popover-trigger",children:M}),d&&e.jsx("div",{className:O,style:E,children:r})]})};m.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:"",defaultValue:{value:"'click'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},backdrop:{required:!1,tsType:{name:"union",raw:"'transparent' | 'blur' | 'opaque'",elements:[{name:"literal",value:"'transparent'"},{name:"literal",value:"'blur'"},{name:"literal",value:"'opaque'"}]},description:"",defaultValue:{value:"'transparent'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onVisibilityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isVisible: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isVisible"}],return:{name:"void"}}},description:""}}};const J={title:"Components/Popover",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{trigger:{control:"select",options:["click","hover"],description:"The event that triggers the popover."},position:{control:"select",options:["top","bottom","left","right"],description:"Position of the popover relative to the trigger element."},isVisible:{control:"boolean",description:"Control the visibility of the popover."},content:{control:"text",description:"Content inside the popover."},backdrop:{control:"select",options:["transparent","blur","opaque"],description:"backdrop effect to the trigger element."}},args:{}},s={args:{trigger:"click",position:"bottom",content:"This is a popover triggered by a click!",children:e.jsx(o,{children:"Click Me"}),backdrop:"transparent"}},i={args:{trigger:"hover",position:"top",content:"This is a popover triggered by hover!",children:e.jsx(o,{children:"Hover Over Me"}),backdrop:"blur"}},a={render:n=>{const l=["left","top","bottom","right"];return e.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center"},children:l.map(r=>e.jsx(m,{...n,position:r,content:`Popover positioned at the ${r}.`,children:e.jsx(o,{children:r.charAt(0).toUpperCase()+r.slice(1)})},r))})},args:{trigger:"click",content:"Popover content",children:e.jsx(o,{children:"Default Button"})}},c={args:{isVisible:!0,position:"bottom",content:"This popover is always visible.",children:e.jsx(o,{children:"Always Visible"})}},p={args:{trigger:"click",position:"bottom",content:e.jsxs("div",{children:[e.jsx("h4",{children:"Custom Popover Content"}),e.jsx("p",{children:"This is some detailed content in the popover."})]}),children:e.jsx(o,{children:"Click Me"})}};var h,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    trigger: 'click',
    position: 'bottom',
    content: 'This is a popover triggered by a click!',
    children: <Button>Click Me</Button>,
    backdrop: 'transparent'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var k,y,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    position: 'top',
    content: 'This is a popover triggered by hover!',
    children: <Button>Hover Over Me</Button>,
    backdrop: 'blur'
  }
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,P,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(P=a.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var B,C,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isVisible: true,
    position: 'bottom',
    content: 'This popover is always visible.',
    children: <Button>Always Visible</Button>
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var q,R,N;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    trigger: 'click',
    position: 'bottom',
    content: <div>\r
        <h4>Custom Popover Content</h4>\r
        <p>This is some detailed content in the popover.</p>\r
      </div>,
    children: <Button>Click Me</Button>
  }
}`,...(N=(R=p.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const K=["ClickTrigger","HoverTrigger","Placement","ControlledVisibility","CustomContent"];export{s as ClickTrigger,c as ControlledVisibility,p as CustomContent,i as HoverTrigger,a as Placement,K as __namedExportsOrder,J as default};
