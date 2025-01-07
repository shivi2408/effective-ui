import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as J}from"./index-i5X67GZP.js";import{F as L}from"./index-D0zyV334.js";import"./index-DJO9vBfz.js";import"./iconBase-DNSKKw1X.js";const b=({size:A="md",radius:I="md",src:n,alt:j,name:R,initials:w,icon:l,color:W="default",isBordered:V=!1,className:_,style:F,onClick:P,...U})=>{const o=w||(c=>{var m,u;if(!c)return"";const d=c.split(" "),D=((m=d[0])==null?void 0:m.charAt(0))||"",E=((u=d[1])==null?void 0:u.charAt(0))||"";return(D+E).toUpperCase()})(R),$=J("avatar",`avatar-${A}`,`avatar-${I}`,`avatar-${W}`,{"avatar-bordered":V},_);return e.jsx("div",{className:$,style:F,onClick:P,...U,children:n?e.jsx("img",{src:n,alt:j||"Avatar",className:"avatar-img"}):o?e.jsx("span",{className:"avatar-initials",children:o}):l?e.jsx("span",{className:"avatar-icon",children:l}):e.jsx("span",{className:"avatar-icon",children:e.jsx(L,{size:22})})})};b.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},initials:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},isBordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const X={title:"Components/Avatar",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"The size of the avatar."},color:{control:"select",options:["default","primary","secondary","success","danger"],description:"The background color of the avatar."},radius:{control:"select",options:["none","sm","md","lg","full"],description:"The border radius of the avatar."},src:{control:"text",description:"The URL of the avatar image."},name:{control:"text",description:"The name to generate initials from if no image is provided."},initials:{control:"text",description:"Initials to display if no image is provided."},isBordered:{control:"boolean",description:"Whether the avatar has a border."},onClick:{action:"clicked",description:"Function called when the avatar is clicked."}}},a={args:{size:"small",color:"default",radius:"full",src:"",name:"",isBordered:!1}},r={args:{size:"medium",color:"secondary",radius:"full",src:"https://i.pravatar.cc/300?u=a042581f4e29026709d",name:"",isBordered:!1}},s={args:{size:"medium",color:"primary",radius:"full",src:"https://i.pravatar.cc/300?u=a042581f4e29026709d",name:"",isBordered:!0}},t={args:{size:"medium",color:"default",radius:"full",src:"",name:"Jane Smith",isBordered:!1}},i={args:{size:"medium",color:"success",radius:"full",src:"https://i.pravatar.cc/300?u=clickable-avatar",name:"",isBordered:!0,onClick:()=>alert("Avatar clicked!")}};var p,f,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'default',
    radius: 'full',
    src: '',
    name: '',
    // Name to generate initials from
    isBordered: false
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'secondary',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    name: '',
    isBordered: false
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,x,z;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'primary',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    name: '',
    isBordered: true
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var B,k,q;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'default',
    radius: 'full',
    src: '',
    name: 'Jane Smith',
    // Name for initials
    isBordered: false
  }
}`,...(q=(k=t.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var N,C,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'success',
    radius: 'full',
    src: 'https://i.pravatar.cc/300?u=clickable-avatar',
    name: '',
    isBordered: true,
    onClick: () => alert('Avatar clicked!')
  }
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Y=["Default","WithImage","WithBorder","WithText","ClickableAvatar"];export{i as ClickableAvatar,a as Default,s as WithBorder,r as WithImage,t as WithText,Y as __namedExportsOrder,X as default};
