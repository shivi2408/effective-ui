import{j as r}from"./jsx-runtime-j_jdvEMj.js";import{c as d}from"./index-DUolvyrz.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=({variant:o="app",...c})=>{const p=d("color-group",`color-group-${o}`);return r.jsxs("div",{className:p,...c,children:[r.jsxs("h3",{children:[o.charAt(0).toUpperCase()+o.slice(1)," Colors"]}),r.jsx("div",{className:"color-grid",children:A(o).map(n=>r.jsx("div",{className:"color-block",style:{backgroundColor:n},children:n},n))})]})},m={app:["#FFFFFF","#000000"],blue:["#E6F1FE","#CCE3FD","#99C7FB","#66AAF9","#338EF7","#006FEE","#005BC4","#004493","#002E62","#001731"],purple:["#F2EAFA","#E4D4F4","#C9A9E9","#AE7EDE","#9353D3","#7828C8","#6020A0","#481878","#301050","#180828"],green:["#E8FAF0","#D1F4E0","#A2E9C1","#74DFA2","#45D483","#17C964","#12A150","#0E793C","#095028","#052814"],red:["#FEE7EF","#FDD0DF","#FAA0BF","#F871A0","#F54180","#F31260","#C20E4D","#920B3A","#610726","#310413"],pink:["#FFEDFA","#FFDCF5","#FFB8EB","#FF95E1","#FF71D7","#FF4ECD","#CC3EA4","#992F7B","#661F52","#331029"],yellow:["#FEFCE8","#FDEDD3","#FBDBA7","#F9C97C","#F7B750","#F5A524","#C4841D","#936316","#62420E","#312107"],cyan:["#F0FCFF","#E6FAFE","#D7F8FE","#C3F4FD","#A5EEFD","#7EE7FC","#06B7DB","#09AACD","#0E8AAA","#053B48"],layout:["#FFFFFF","#000000","#d4d4d8","#006FEE"],content:["#fafafa","#f4f4f5","#e5e4e6","#d4d4d8"],base:["#d4d4d8","#006FEE","#7828C8","#17C964","#F5A524","#F31260"],default:["#fafafa","#f4f4f5","#e5e4e6","#d4d4d8","#a1a0ab","#70707a","#53525a","#3e3e46","#26262a","#18191a"],primary:["#E6F1FE","#CCE3FD","#99C7FB","#66AAF9","#338EF7","#006FEE","#005BC4","#004493","#002E62","#001731"],secondary:["#F2EAFA","#E4D4F4","#C9A9E9","#AE7EDE","#9353D3","#7828C8","#6020A0","#481878","#301050","#180828"],success:["#E8FAF0","#D1F4E0","#A2E9C1","#74DFA2","#45D483","#17C964","#12A150","#0E793C","#095028","#052814"],warning:["#FEFCE8","#FDEDD3","#FBDBA7","#F9C97C","#F7B750","#F5A524","#C4841D","#936316","#62420E","#312107"],danger:["#FEE7EF","#FDD0DF","#FAA0BF","#F871A0","#F54180","#F31260","#C20E4D","#920B3A","#610726","#310413"]},A=o=>m[o],x={title:"Foundations/Colors",component:a,parameters:{},tags:["autodocs"],argTypes:{variant:{control:"color",description:"Color Variants (e.g., primary, secondary, etc.)"}}},s={args:{variant:"app"},parameters:{story:{name:"Common Colors"}},render:o=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"app"}),r.jsx(a,{variant:"blue"}),r.jsx(a,{variant:"purple"}),r.jsx(a,{variant:"green"}),r.jsx(a,{variant:"red"}),r.jsx(a,{variant:"pink"}),r.jsx(a,{variant:"yellow"}),r.jsx(a,{variant:"cyan"})]})},e={args:{variant:"app"},parameters:{story:{name:"Semantic Colors"}},render:o=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"layout"}),r.jsx(a,{variant:"content"}),r.jsx(a,{variant:"base"}),r.jsx(a,{variant:"default"}),r.jsx(a,{variant:"primary"}),r.jsx(a,{variant:"secondary"}),r.jsx(a,{variant:"success"}),r.jsx(a,{variant:"warning"}),r.jsx(a,{variant:"danger"})]})};var t,F,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'app'
  },
  parameters: {
    story: {
      name: 'Common Colors'
    }
  },
  render: args => <>\r
      {/* Rendering all color variants under one group */}\r
      <Colors variant="app" />\r
      <Colors variant="blue" />\r
      <Colors variant="purple" />\r
      <Colors variant="green" />\r
      <Colors variant="red" />\r
      <Colors variant="pink" />\r
      <Colors variant="yellow" />\r
      <Colors variant="cyan" />\r
    </>
}`,...(i=(F=s.parameters)==null?void 0:F.docs)==null?void 0:i.source}}};var l,C,E;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'app'
  },
  parameters: {
    story: {
      name: 'Semantic Colors'
    }
  },
  render: args => <>\r
      {/* Rendering all color variants under one group */}\r
      <Colors variant="layout" />\r
      <Colors variant="content" />\r
      <Colors variant="base" />\r
      <Colors variant="default" />\r
      <Colors variant="primary" />\r
      <Colors variant="secondary" />\r
      <Colors variant="success" />\r
      <Colors variant="warning" />\r
      <Colors variant="danger" />\r
    </>
}`,...(E=(C=e.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const j=["CommonColors","SemanticColors"];export{s as CommonColors,e as SemanticColors,j as __namedExportsOrder,x as default};
