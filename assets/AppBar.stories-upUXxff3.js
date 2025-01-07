import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{R as c}from"./index-B-o1Wr-g.js";import{c as o}from"./index-DUolvyrz.js";import"./_commonjsHelpers-Cpj98o6Y.js";const v=({logo:y,menuItems:h,responsiveBreakpoint:O=768,className:S,style:M,userMenu:j=[]})=>{const[i,A]=c.useState(!1),[l,x]=c.useState(!1),I=o("appbar",S),B=o("appbar-menu",{"appbar-menu-open":i}),N=o("appbar-user-menu",{"appbar-user-menu-open":l});return e.jsxs("header",{className:I,style:M,children:[e.jsx("div",{className:"appbar-logo",children:y}),e.jsx("button",{className:"appbar-toggle",onClick:()=>A(!i),"aria-label":"Toggle menu",children:"☰"}),e.jsx("nav",{className:B,children:h.map((r,s)=>e.jsx("button",{className:"appbar-menu-item",onClick:r.onClick,children:r.label},s))}),e.jsxs("div",{className:"appbar-user",children:[e.jsx("button",{className:"appbar-user-icon",onClick:()=>x(!l),"aria-label":"User settings",children:"👤"}),l&&e.jsx("div",{className:N,children:j.map((r,s)=>e.jsx("button",{className:"appbar-user-menu-item",onClick:r.onClick,children:r.label},s))})]})]})};v.__docgenInfo={description:"",methods:[],displayName:"AppBar",props:{logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"Array<{ label: string; onClick: () => void }>"},description:""},responsiveBreakpoint:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"768",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},userMenu:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"Array<{ label: string; onClick: () => void }>"},description:"",defaultValue:{value:"[]",computed:!1}}}};const w={title:"Components/AppBar",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{logo:{control:"text",description:"The logo displayed in the AppBar."},responsiveBreakpoint:{control:"number",description:"Screen width breakpoint for menu collapse."},menuItems:{control:"object",description:"Menu items for the AppBar."},userMenu:{control:"object",description:"User menu items for the AppBar."}}},n={args:{logo:e.jsx("img",{src:"src/stories/assets/discord.svg",alt:"Logo"}),menuItems:[{label:"Home",onClick:()=>alert("Home clicked")},{label:"About",onClick:()=>alert("About clicked")},{label:"Contact",onClick:()=>alert("Contact clicked")}],responsiveBreakpoint:768,userMenu:[{label:"Profile",onClick:()=>alert("Profile clicked")},{label:"Logout",onClick:()=>alert("Logout clicked")}]}},a={args:{logo:e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"Effective UI"}),menuItems:[{label:"Dashboard",onClick:()=>alert("Dashboard clicked")},{label:"Profile",onClick:()=>alert("Profile clicked")},{label:"Settings",onClick:()=>alert("Settings clicked")}],responsiveBreakpoint:600,userMenu:[{label:"My Account",onClick:()=>alert("My Account clicked")},{label:"Sign Out",onClick:()=>alert("Sign Out clicked")}]}},t={args:{logo:e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"Minimal UI"}),menuItems:[],responsiveBreakpoint:768,userMenu:[{label:"Settings",onClick:()=>alert("Settings clicked")},{label:"Logout",onClick:()=>alert("Logout clicked")}]}};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    logo: <img src="src/stories/assets/discord.svg" alt="Logo" />,
    menuItems: [{
      label: 'Home',
      onClick: () => alert('Home clicked')
    }, {
      label: 'About',
      onClick: () => alert('About clicked')
    }, {
      label: 'Contact',
      onClick: () => alert('Contact clicked')
    }],
    responsiveBreakpoint: 768,
    userMenu: [{
      label: 'Profile',
      onClick: () => alert('Profile clicked')
    }, {
      label: 'Logout',
      onClick: () => alert('Logout clicked')
    }]
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    logo: <div style={{
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }}>Effective UI</div>,
    menuItems: [{
      label: 'Dashboard',
      onClick: () => alert('Dashboard clicked')
    }, {
      label: 'Profile',
      onClick: () => alert('Profile clicked')
    }, {
      label: 'Settings',
      onClick: () => alert('Settings clicked')
    }],
    responsiveBreakpoint: 600,
    userMenu: [{
      label: 'My Account',
      onClick: () => alert('My Account clicked')
    }, {
      label: 'Sign Out',
      onClick: () => alert('Sign Out clicked')
    }]
  }
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var b,C,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    logo: <div style={{
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }}>Minimal UI</div>,
    menuItems: [],
    responsiveBreakpoint: 768,
    userMenu: [{
      label: 'Settings',
      onClick: () => alert('Settings clicked')
    }, {
      label: 'Logout',
      onClick: () => alert('Logout clicked')
    }]
  }
}`,...(f=(C=t.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const R=["Default","WithCustomMenuItems","WithOnlyUserMenu"];export{n as Default,a as WithCustomMenuItems,t as WithOnlyUserMenu,R as __namedExportsOrder,w as default};
