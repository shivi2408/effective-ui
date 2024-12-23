import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{R as i}from"./index-B-o1Wr-g.js";import{c as r}from"./index-DUolvyrz.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O=({logo:h,menuItems:M,responsiveBreakpoint:L=768,className:v,style:S,userMenu:x=[]})=>{const[c,j]=i.useState(!1),[t,I]=i.useState(!1),B=r("appbar",v),y=r("appbar-menu",{"appbar-menu-open":c}),A=r("appbar-user-menu",{"appbar-user-menu-open":t});return e.jsxs("header",{className:B,style:S,children:[e.jsx("div",{className:"appbar-logo",children:h}),e.jsx("button",{className:"appbar-toggle",onClick:()=>j(!c),"aria-label":"Toggle menu",children:"☰"}),e.jsx("nav",{className:y,children:M.map((n,a)=>e.jsx("button",{className:"appbar-menu-item",onClick:n.onClick,children:n.label},a))}),e.jsxs("div",{className:"appbar-user",children:[e.jsx("button",{className:"appbar-user-icon",onClick:()=>I(!t),"aria-label":"User settings",children:"👤"}),t&&e.jsx("div",{className:A,children:x.map((n,a)=>e.jsx("button",{className:"appbar-user-menu-item",onClick:n.onClick,children:n.label},a))})]})]})},D={title:"Components/AppBar",component:O,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{logo:{control:"text",description:"The logo displayed in the AppBar."},responsiveBreakpoint:{control:"number",description:"Screen width breakpoint for menu collapse."},menuItems:{control:"object",description:"Menu items for the AppBar."},userMenu:{control:"object",description:"User menu items for the AppBar."}}},l={args:{logo:e.jsx("img",{src:"src/stories/assets/discord.svg",alt:"Logo"}),menuItems:[{label:"Home",onClick:()=>alert("Home clicked")},{label:"About",onClick:()=>alert("About clicked")},{label:"Contact",onClick:()=>alert("Contact clicked")}],responsiveBreakpoint:768,userMenu:[{label:"Profile",onClick:()=>alert("Profile clicked")},{label:"Logout",onClick:()=>alert("Logout clicked")}]}},o={args:{logo:e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"Effective UI"}),menuItems:[{label:"Dashboard",onClick:()=>alert("Dashboard clicked")},{label:"Profile",onClick:()=>alert("Profile clicked")},{label:"Settings",onClick:()=>alert("Settings clicked")}],responsiveBreakpoint:600,userMenu:[{label:"My Account",onClick:()=>alert("My Account clicked")},{label:"Sign Out",onClick:()=>alert("Sign Out clicked")}]}},s={args:{logo:e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"Minimal UI"}),menuItems:[],responsiveBreakpoint:768,userMenu:[{label:"Settings",onClick:()=>alert("Settings clicked")},{label:"Logout",onClick:()=>alert("Logout clicked")}]}};var u,p,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,k,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var g,C,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const z=["Default","WithCustomMenuItems","WithOnlyUserMenu"];export{l as Default,o as WithCustomMenuItems,s as WithOnlyUserMenu,z as __namedExportsOrder,D as default};
