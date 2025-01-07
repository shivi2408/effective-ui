import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{c as b}from"./index-i5X67GZP.js";import"./index-DJO9vBfz.js";const q=({columns:t,data:m,className:D,style:V,onRowClick:p,striped:E=!1,bordered:_=!0,radius:I="none",cellPadding:g="8px 12px",...$})=>{const J=b("table",{"table-striped":E},D),F=b("table-container",`table-radius-${I}`,{"table-bordered":_});return a.jsx("div",{className:F,style:V,...$,children:a.jsxs("table",{className:J,children:[a.jsx("thead",{children:a.jsx("tr",{children:t.map(e=>a.jsx("th",{style:{width:e.width,textAlign:e.align||"left",padding:g},className:e.className,children:e.title},e.key))})}),a.jsx("tbody",{children:m.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:t.length,style:{textAlign:"center",padding:"55px 12px"},children:"No data available"})}):m.map((e,u)=>a.jsx("tr",{onClick:()=>p&&p(e,u),className:p?"clickable-row":"",children:t.map(r=>a.jsx("td",{style:{textAlign:r.align||"left",padding:g},className:r.className,children:r.render?r.render(e[r.key],e,u):e[r.key]},r.key))},u))})]})})};q.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: any, index: number) => void",signature:{arguments:[{type:{name:"any"},name:"record"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},cellPadding:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'8px 12px'",computed:!1}}}};const Z={title:"Components/Table",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Applies striped styles to alternate rows."},bordered:{control:"boolean",description:"Applies border styles to the table."},radius:{control:"select",options:["none","sm","md","lg"],description:"Sets the border radius of the table."},cellPadding:{control:"text",description:"Custom padding for table cells.",defaultValue:"8px 12px"},onRowClick:{action:"rowClicked",description:"Function called when a row is clicked."},style:{control:"object",description:"Inline styles for the table container."},className:{control:"text",description:"Custom class for the table."}}},s=[{key:"id",title:"ID",width:"10%",align:"center"},{key:"name",title:"Name",align:"left"},{key:"age",title:"Age",align:"center"},{key:"status",title:"Status",align:"center"}],c=[{id:1,name:"John Doe",age:28,status:"Active"},{id:2,name:"Jane Smith",age:34,status:"Paused"},{id:3,name:"Sam Wilson",age:23,status:"Vacation"},{id:4,name:"Zoey Lang",age:32,status:"Active"}],n={args:{columns:s,data:c,striped:!1,bordered:!0,radius:"none",cellPadding:"12px"}},d={args:{columns:s,data:c,striped:!0,bordered:!0,radius:"sm",cellPadding:"10px 15px"}},l={args:{columns:s,data:[],striped:!1,bordered:!0,radius:"none",cellPadding:"12px"}},i={args:{columns:s,data:c,striped:!0,bordered:!0,onRowClick:t=>alert(`Row clicked: ${t.name}`),radius:"md",cellPadding:"8px 12px"}},o={args:{columns:s,data:c,striped:!0,bordered:!0,radius:"lg",cellPadding:"12px 16px"}};var x,y,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: false,
    bordered: true,
    radius: 'none',
    cellPadding: '12px' // Default padding
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,w,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'sm',
    cellPadding: '10px 15px' // Custom padding
  }
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,C,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var v,P,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    onRowClick: record => alert(\`Row clicked: \${record.name}\`),
    radius: 'md',
    cellPadding: '8px 12px' // Default padding
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,R,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'lg',
    cellPadding: '12px 16px' // Custom padding
  }
}`,...(A=(R=o.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const z=["Default","Striped","EmptyState","ClickableRows","lgRadius"];export{i as ClickableRows,n as Default,l as EmptyState,d as Striped,z as __namedExportsOrder,Z as default,o as lgRadius};
