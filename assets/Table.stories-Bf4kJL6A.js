import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as b}from"./index-i5X67GZP.js";import"./index-DJO9vBfz.js";const q=({columns:t,data:s,className:D,style:E,onRowClick:u,striped:V=!1,bordered:_=!0,radius:I="none",cellPadding:g="8px 12px",...L})=>{const $=b("table",{"table-striped":V},D),J=b("table-container",`table-radius-${I}`,{"table-bordered":_});return e.jsx("div",{className:J,style:E,...L,children:e.jsxs("table",{className:$,children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map(a=>e.jsx("th",{style:{width:a.width,textAlign:a.align||"left",padding:g},className:a.className,children:a.title},a.key))})}),e.jsx("tbody",{children:s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t.length,style:{textAlign:"center",padding:"55px 12px"},children:"No data available"})}):s.map((a,m)=>e.jsx("tr",{onClick:()=>u&&u(a,m),className:u?"clickable-row":"",children:t.map(r=>e.jsx("td",{style:{textAlign:r.align||"left",padding:g},className:r.className,children:r.render?r.render(a[r.key],a,m):a[r.key]},r.key))},m))})]})})};q.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: any, index: number) => void",signature:{arguments:[{type:{name:"any"},name:"record"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},cellPadding:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'8px 12px'",computed:!1}}}};const Z={title:"Components/Table",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Applies striped styles to alternate rows."},bordered:{control:"boolean",description:"Applies border styles to the table."},radius:{control:"select",options:["none","sm","md","lg"],description:"Sets the border radius of the table."},cellPadding:{control:"text",description:"Custom padding for table cells.",defaultValue:"8px 12px"},onRowClick:{action:"rowClicked",description:"Function called when a row is clicked."},style:{control:"object",description:"Inline styles for the table container."},className:{control:"text",description:"Custom class for the table."}}},n=[{key:"id",title:"ID",width:"10%",align:"center"},{key:"name",title:"Name",align:"left"},{key:"age",title:"Age",align:"center"},{key:"status",title:"Status",align:"center"},{key:"actions",title:"Actions",render:(t,s)=>e.jsx("button",{onClick:()=>alert(s.name),children:"Edit"}),align:"center"}],p=[{id:1,name:"John Doe",age:28,status:"Active"},{id:2,name:"Jane Smith",age:34,status:"Paused"},{id:3,name:"Sam Wilson",age:23,status:"Vacation"},{id:4,name:"Zoey Lang",age:32,status:"Active"}],d={args:{columns:n,data:p,striped:!1,bordered:!0,radius:"none",cellPadding:"12px"}},l={args:{columns:n,data:p,striped:!0,bordered:!0,radius:"sm",cellPadding:"10px 15px"}},i={args:{columns:n,data:[],striped:!1,bordered:!0,radius:"none",cellPadding:"12px"}},o={args:{columns:n,data:p,striped:!0,bordered:!0,onRowClick:t=>alert(`Row clicked: ${t.name}`),radius:"md",cellPadding:"8px 12px"}},c={args:{columns:n,data:p,striped:!0,bordered:!0,radius:"lg",cellPadding:"12px 16px"}};var x,y,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: false,
    bordered: true,
    radius: 'none',
    cellPadding: '12px' // Default padding
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,w,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'sm',
    cellPadding: '10px 15px' // Custom padding
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,S,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,v,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    onRowClick: record => alert(\`Row clicked: \${record.name}\`),
    radius: 'md',
    cellPadding: '8px 12px' // Default padding
  }
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var N,A,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true,
    radius: 'lg',
    cellPadding: '12px 16px' // Custom padding
  }
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const z=["Default","Striped","EmptyState","ClickableRows","LargeRadius"];export{o as ClickableRows,d as Default,i as EmptyState,c as LargeRadius,l as Striped,z as __namedExportsOrder,Z as default};
