import{j as a}from"./jsx-runtime-j_jdvEMj.js";import{c as x}from"./index-DUolvyrz.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const L=({columns:r,data:m,className:v,style:T,onRowClick:p,striped:$=!1,bordered:I=!0,radius:J="none",cellPadding:g="8px 12px",...V})=>{const _=x("table",{"table-striped":$},v),F=x("table-container",`table-radius-${J}`,{"table-bordered":I});return a.jsx("div",{className:F,style:T,...V,children:a.jsxs("table",{className:_,children:[a.jsx("thead",{children:a.jsx("tr",{children:r.map(e=>a.jsx("th",{style:{width:e.width,textAlign:e.align||"left",padding:g},className:e.className,children:e.title},e.key))})}),a.jsx("tbody",{children:m.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:r.length,style:{textAlign:"center",padding:"55px 12px"},children:"No data available"})}):m.map((e,u)=>a.jsx("tr",{onClick:()=>p&&p(e,u),className:p?"clickable-row":"",children:r.map(t=>a.jsx("td",{style:{textAlign:t.align||"left",padding:g},className:t.className,children:t.render?t.render(e[t.key],e,u):e[t.key]},t.key))},u))})]})})},z={title:"Components/Table",component:L,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Applies striped styles to alternate rows."},bordered:{control:"boolean",description:"Applies border styles to the table."},radius:{control:"select",options:["none","sm","md","lg"],description:"Sets the border radius of the table."},cellPadding:{control:"text",description:"Custom padding for table cells.",defaultValue:"8px 12px"},onRowClick:{action:"rowClicked",description:"Function called when a row is clicked."},style:{control:"object",description:"Inline styles for the table container."},className:{control:"text",description:"Custom class for the table."}}},s=[{key:"id",title:"ID",width:"10%",align:"center"},{key:"name",title:"Name",align:"left"},{key:"age",title:"Age",align:"center"},{key:"status",title:"Status",align:"center"}],c=[{id:1,name:"John Doe",age:28,status:"Active"},{id:2,name:"Jane Smith",age:34,status:"Paused"},{id:3,name:"Sam Wilson",age:23,status:"Vacation"},{id:4,name:"Zoey Lang",age:32,status:"Active"}],n={args:{columns:s,data:c,striped:!1,bordered:!0,radius:"none",cellPadding:"12px"}},d={args:{columns:s,data:c,striped:!0,bordered:!0,radius:"sm",cellPadding:"10px 15px"}},o={args:{columns:s,data:[],striped:!1,bordered:!0,radius:"none",cellPadding:"12px"}},l={args:{columns:s,data:c,striped:!0,bordered:!0,onRowClick:r=>alert(`Row clicked: ${r.name}`),radius:"md",cellPadding:"8px 12px"}},i={args:{columns:s,data:c,striped:!0,bordered:!0,radius:"lg",cellPadding:"12px 16px"}};var b,h,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: false,
    bordered: true,
    radius: 'none',
    cellPadding: '12px' // Default padding
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,k,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'sm',
    cellPadding: '10px 15px' // Custom padding
  }
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,j,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns,
    // Table columns
    data: [],
    // Empty data array, no rows
    striped: false,
    bordered: true,
    radius: 'none',
    cellPadding: '12px' // Default padding
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var N,P,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    onRowClick: record => alert(\`Row clicked: \${record.name}\`),
    radius: 'md',
    cellPadding: '8px 12px' // Default padding
  }
}`,...(A=(P=l.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var R,D,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'lg',
    cellPadding: '12px 16px' // Custom padding
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const B=["Default","Striped","EmptyState","ClickableRows","lgRadius"];export{l as ClickableRows,n as Default,o as EmptyState,d as Striped,B as __namedExportsOrder,z as default,i as lgRadius};
