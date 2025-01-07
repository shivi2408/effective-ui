import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as c}from"./index-B-o1Wr-g.js";import{c as A}from"./index-DUolvyrz.js";import{b as oe,c as re}from"./index-DMoKmcBB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const ne=({color:L="dark",className:W,style:z,showShadow:T=!1,hideDisabledDates:V=!1,showMonthAndYearPickers:H=!0,visibleMonths:p=1,weekdayStyle:R="short",disableAnimation:q=!1,onDateSelect:w})=>{const[s,g]=c.useState(new Date),[B,y]=c.useState(s.getDate()),[f,D]=c.useState(!1),[b,S]=c.useState(s.getMonth()),[M,k]=c.useState(s.getFullYear()),G=Array.from({length:7},(r,a)=>new Date(2023,0,a+1).toLocaleString("default",{weekday:R})),J=s.getDate(),K=s.getMonth(),Q=s.getFullYear();c.useEffect(()=>{y(s.getDate())},[s]);const v=r=>{g(a=>new Date(a.getFullYear(),a.getMonth()+r,1))},U=r=>{const a=r.getFullYear(),o=r.getMonth(),n=new Date(a,o,1).getDay(),l=new Date(a,o+1,0).getDate(),ae=new Date(a,o,0).getDate(),m=[];if(!V)for(let t=n;t>0;t--)m.push(e.jsx("div",{className:"calendar-day inactive",children:ae-t+1},`prev-${t}`));for(let t=1;t<=l;t++){const te=t===B,se=t===J&&o===K&&a===Q;m.push(e.jsx("div",{className:A("calendar-day",{"calendar-day-selected":te,"calendar-day-current":se}),onClick:()=>{y(t),w&&w(new Date(r.getFullYear(),r.getMonth(),t))},children:t},`day-${t}`))}return m},X=()=>{S(s.getMonth()),k(s.getFullYear()),D(!f)},Z=()=>{g(new Date(M,b,1)),D(!1)},ee=A("calendar",`calendar-${L}`,{"calendar-shadow":T,"calendar-no-animation":q},W);return e.jsx("div",{className:ee,style:z,children:Array.from({length:p}).map((r,a)=>{const o=new Date(s.getFullYear(),s.getMonth()+a,1);return e.jsxs("div",{className:"calendar-month",children:[e.jsxs("div",{className:"calendar-header",children:[a===0&&e.jsx("button",{className:"calendar-nav",onClick:()=>v(-1),"aria-label":"Previous Month",children:e.jsx(oe,{size:24})}),e.jsx("span",{className:"calendar-title",onClick:X,children:H?o.toLocaleString("default",{month:"long",year:"numeric"}):`${o.getMonth()+1} / ${o.getFullYear()}`}),a===p-1&&e.jsx("button",{className:"calendar-nav",onClick:()=>v(1),"aria-label":"Next Month",children:e.jsx(re,{size:24})})]}),f&&a===0&&e.jsxs("div",{className:"calendar-picker",children:[e.jsx("select",{value:b,onChange:n=>S(parseInt(n.target.value,10)),children:Array.from({length:12}).map((n,l)=>e.jsx("option",{value:l,children:new Date(2023,l,1).toLocaleString("default",{month:"long"})},l))}),e.jsx("input",{type:"number",value:M,onChange:n=>k(parseInt(n.target.value,10))}),e.jsx("button",{onClick:Z,children:"Apply"})]}),e.jsx("div",{className:"calendar-days",children:G.map((n,l)=>e.jsx("div",{className:"calendar-day-name",children:n},`day-name-${l}`))}),e.jsx("div",{className:"calendar-grid",children:U(o)})]},`month-${a}`)})})},me={title:"Components/Calendar",component:ne,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","dark"],description:"The color theme of the calendar."},showShadow:{control:"boolean",description:"Show shadow around the calendar."},hideDisabledDates:{control:"boolean",description:"Hide disabled or unavailable dates."},showMonthAndYearPickers:{control:"boolean",description:"Show dropdowns for month and year selection."},visibleMonths:{control:"number",description:"Number of months to display."},weekdayStyle:{control:"select",options:["narrow","short","long"],description:"Style of weekdays (narrow, short, or long)."},disableAnimation:{control:"boolean",description:"Disable animations for calendar transitions."}}},i={args:{color:"default",showShadow:!0,hideDisabledDates:!1,showMonthAndYearPickers:!0,visibleMonths:1,weekdayStyle:"narrow",disableAnimation:!1}},d={args:{color:"default",showShadow:!1,visibleMonths:1,weekdayStyle:"short",disableAnimation:!1}},h={args:{color:"dark",showShadow:!0,visibleMonths:2,showMonthAndYearPickers:!0,hideDisabledDates:!1,weekdayStyle:"short",disableAnimation:!0}},u={args:{color:"primary",disableAnimation:!0,visibleMonths:1,showMonthAndYearPickers:!1,showShadow:!1,hideDisabledDates:!0,weekdayStyle:"short"}};var j,x,Y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: 'default',
    showShadow: true,
    hideDisabledDates: false,
    showMonthAndYearPickers: true,
    visibleMonths: 1,
    weekdayStyle: 'narrow',
    disableAnimation: false
  }
}`,...(Y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var N,C,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: 'default',
    showShadow: false,
    visibleMonths: 1,
    weekdayStyle: 'short',
    disableAnimation: false
  }
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var F,I,$;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: 'dark',
    showShadow: true,
    visibleMonths: 2,
    showMonthAndYearPickers: true,
    hideDisabledDates: false,
    weekdayStyle: 'short',
    disableAnimation: true
  }
}`,...($=(I=h.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var _,E,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    disableAnimation: true,
    visibleMonths: 1,
    showMonthAndYearPickers: false,
    showShadow: false,
    hideDisabledDates: true,
    weekdayStyle: 'short'
  }
}`,...(O=(E=u.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const pe=["Default","WithoutShadow","MultiMonthView","DisabledAnimations"];export{i as Default,u as DisabledAnimations,h as MultiMonthView,d as WithoutShadow,pe as __namedExportsOrder,me as default};
