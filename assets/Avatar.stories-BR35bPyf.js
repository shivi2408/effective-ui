import{j as a}from"./jsx-runtime-j_jdvEMj.js";import{c as O}from"./index-DUolvyrz.js";import{F as P}from"./index-q-Zt5UqQ.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const q=({size:N="md",radius:T="md",src:i,alt:S,name:W,initials:F,icon:n,color:U="default",isBordered:$=!1,className:D,style:E,onClick:J,...R})=>{const c=F||(l=>{var m,u;if(!l)return"";const d=l.split(" "),w=((m=d[0])==null?void 0:m.charAt(0))||"",L=((u=d[1])==null?void 0:u.charAt(0))||"";return(w+L).toUpperCase()})(W),_=O("avatar",`avatar-${N}`,`avatar-${T}`,`avatar-${U}`,{"avatar-bordered":$},D);return a.jsx("div",{className:_,style:E,onClick:J,...R,children:i?a.jsx("img",{src:i,alt:S||"Avatar",className:"avatar-img"}):c?a.jsx("span",{className:"avatar-initials",children:c}):n?a.jsx("span",{className:"avatar-icon",children:n}):a.jsx("span",{className:"avatar-icon",children:a.jsx(P,{size:22})})})},Y={title:"Components/Avatar",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"The size of the avatar."},color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The background color of the avatar."},radius:{control:"select",options:["none","sm","md","lg","full"],description:"The border radius of the avatar."},src:{control:"text",description:"The URL of the avatar image."},name:{control:"text",description:"The name to generate initials from if no image is provided."},initials:{control:"text",description:"Initials to display if no image is provided."},isBordered:{control:"boolean",description:"Whether the avatar has a border."},onClick:{action:"clicked",description:"Function called when the avatar is clicked."}}},r={args:{size:"small",color:"default",radius:"full",src:"",name:"",isBordered:!1}},e={args:{size:"medium",color:"secondary",radius:"full",src:"https://i.pravatar.cc/300?u=a042581f4e29026709d",name:"",isBordered:!1}},s={args:{size:"medium",color:"primary",radius:"full",src:"https://i.pravatar.cc/300?u=a042581f4e29026709d",name:"",isBordered:!0}},t={args:{size:"medium",color:"default",radius:"full",src:"",name:"Jane Smith",isBordered:!1}},o={args:{size:"medium",color:"success",radius:"full",src:"https://i.pravatar.cc/300?u=clickable-avatar",name:"",isBordered:!0,onClick:()=>alert("Avatar clicked!")}};var p,f,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'default',
    radius: 'full',
    src: '',
    name: '',
    // Name to generate initials from
    isBordered: false
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,g,x;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'secondary',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    name: '',
    isBordered: false
  }
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var z,B,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'primary',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    name: '',
    isBordered: true
  }
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var b,y,A;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'default',
    radius: 'full',
    src: '',
    name: 'Jane Smith',
    // Name for initials
    isBordered: false
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var j,C,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'success',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=clickable-avatar',
    name: '',
    isBordered: true,
    onClick: () => alert('Avatar clicked!')
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Z=["Default","WithImage","WithBorder","WithText","ClickableAvatar"];export{o as ClickableAvatar,r as Default,s as WithBorder,e as WithImage,t as WithText,Z as __namedExportsOrder,Y as default};
