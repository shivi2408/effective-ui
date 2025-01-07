import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";import{c as A}from"./index-i5X67GZP.js";import{b as ne,c as oe}from"./index-CQ3Blegy.js";import"./iconBase-DNSKKw1X.js";const $=({color:E="dark",className:O,style:L,showShadow:R=!1,hideDisabledDates:W=!1,showMonthAndYearPickers:z=!0,visibleMonths:p=1,weekdayStyle:H="short",disableAnimation:B=!1,onDateSelect:f})=>{const[s,y]=i.useState(new Date),[G,w]=i.useState(s.getDate()),[g,b]=i.useState(!1),[D,S]=i.useState(s.getMonth()),[v,M]=i.useState(s.getFullYear()),J=Array.from({length:7},(n,a)=>new Date(2023,0,a+1).toLocaleString("default",{weekday:H})),K=s.getDate(),Q=s.getMonth(),U=s.getFullYear();i.useEffect(()=>{w(s.getDate())},[s]);const k=n=>{y(a=>new Date(a.getFullYear(),a.getMonth()+n,1))},X=n=>{const a=n.getFullYear(),r=n.getMonth(),o=new Date(a,r,1).getDay(),l=new Date(a,r+1,0).getDate(),te=new Date(a,r,0).getDate(),m=[];if(!W)for(let t=o;t>0;t--)m.push(e.jsx("div",{className:"calendar-day inactive",children:te-t+1},`prev-${t}`));for(let t=1;t<=l;t++){const se=t===G,re=t===K&&r===Q&&a===U;m.push(e.jsx("div",{className:A("calendar-day",{"calendar-day-selected":se,"calendar-day-current":re}),onClick:()=>{w(t),f&&f(new Date(n.getFullYear(),n.getMonth(),t))},children:t},`day-${t}`))}return m},Z=()=>{S(s.getMonth()),M(s.getFullYear()),b(!g)},ee=()=>{y(new Date(v,D,1)),b(!1)},ae=A("calendar",`calendar-${E}`,{"calendar-shadow":R,"calendar-no-animation":B},O);return e.jsx("div",{className:ae,style:L,children:Array.from({length:p}).map((n,a)=>{const r=new Date(s.getFullYear(),s.getMonth()+a,1);return e.jsxs("div",{className:"calendar-month",children:[e.jsxs("div",{className:"calendar-header",children:[a===0&&e.jsx("button",{className:"calendar-nav",onClick:()=>k(-1),"aria-label":"Previous Month",children:e.jsx(ne,{size:24})}),e.jsx("span",{className:"calendar-title",onClick:Z,children:z?r.toLocaleString("default",{month:"long",year:"numeric"}):`${r.getMonth()+1} / ${r.getFullYear()}`}),a===p-1&&e.jsx("button",{className:"calendar-nav",onClick:()=>k(1),"aria-label":"Next Month",children:e.jsx(oe,{size:24})})]}),g&&a===0&&e.jsxs("div",{className:"calendar-picker",children:[e.jsx("select",{value:D,onChange:o=>S(parseInt(o.target.value,10)),children:Array.from({length:12}).map((o,l)=>e.jsx("option",{value:l,children:new Date(2023,l,1).toLocaleString("default",{month:"long"})},l))}),e.jsx("input",{type:"number",value:v,onChange:o=>M(parseInt(o.target.value,10))}),e.jsx("button",{onClick:ee,children:"Apply"})]}),e.jsx("div",{className:"calendar-days",children:J.map((o,l)=>e.jsx("div",{className:"calendar-day-name",children:o},`day-name-${l}`))}),e.jsx("div",{className:"calendar-grid",children:X(r)})]},`month-${a}`)})})};$.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'dark'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'dark'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},showShadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideDisabledDates:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showMonthAndYearPickers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},visibleMonths:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},weekdayStyle:{required:!1,tsType:{name:"union",raw:"'narrow' | 'short' | 'long'",elements:[{name:"literal",value:"'narrow'"},{name:"literal",value:"'short'"},{name:"literal",value:"'long'"}]},description:"",defaultValue:{value:"'short'",computed:!1}},disableAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDateSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const he={title:"Components/Calendar",component:$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","dark"],description:"The color theme of the calendar."},showShadow:{control:"boolean",description:"Show shadow around the calendar."},hideDisabledDates:{control:"boolean",description:"Hide disabled or unavailable dates."},showMonthAndYearPickers:{control:"boolean",description:"Show dropdowns for month and year selection."},visibleMonths:{control:"number",description:"Number of months to display."},weekdayStyle:{control:"select",options:["narrow","short","long"],description:"Style of weekdays (narrow, short, or long)."},disableAnimation:{control:"boolean",description:"Disable animations for calendar transitions."}}},d={args:{color:"default",showShadow:!0,hideDisabledDates:!1,showMonthAndYearPickers:!0,visibleMonths:1,weekdayStyle:"narrow",disableAnimation:!1}},c={args:{color:"default",showShadow:!1,visibleMonths:1,weekdayStyle:"short",disableAnimation:!1}},u={args:{color:"dark",showShadow:!0,visibleMonths:2,showMonthAndYearPickers:!0,hideDisabledDates:!1,weekdayStyle:"short",disableAnimation:!0}},h={args:{color:"primary",disableAnimation:!0,visibleMonths:1,showMonthAndYearPickers:!1,showShadow:!1,hideDisabledDates:!0,weekdayStyle:"short"}};var j,x,Y;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: 'default',
    showShadow: true,
    hideDisabledDates: false,
    showMonthAndYearPickers: true,
    visibleMonths: 1,
    weekdayStyle: 'narrow',
    disableAnimation: false
  }
}`,...(Y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var C,N,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    color: 'default',
    showShadow: false,
    visibleMonths: 1,
    weekdayStyle: 'short',
    disableAnimation: false
  }
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var T,q,V;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: 'dark',
    showShadow: true,
    visibleMonths: 2,
    showMonthAndYearPickers: true,
    hideDisabledDates: false,
    weekdayStyle: 'short',
    disableAnimation: true
  }
}`,...(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var F,I,_;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    disableAnimation: true,
    visibleMonths: 1,
    showMonthAndYearPickers: false,
    showShadow: false,
    hideDisabledDates: true,
    weekdayStyle: 'short'
  }
}`,...(_=(I=h.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const me=["Default","WithoutShadow","MultiMonthView","DisabledAnimations"];export{d as Default,h as DisabledAnimations,u as MultiMonthView,c as WithoutShadow,me as __namedExportsOrder,he as default};
