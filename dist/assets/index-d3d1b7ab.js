import{r as e,j as t,f as i,a8 as s,cY as o,cW as r,a5 as a,cd as n,I as l}from"./index-b1b3d88f.js";import{T as d}from"./Table-290d2207.js";import{RoleModal as m}from"./role-modal-79b9c57f.js";import{P as c}from"./index-978109e8.js";import"./styleChecker-9f7ab8c8.js";import"./addEventListener-f1ef07f1.js";import"./List-7bacef27.js";import"./useIcons-d7dc163e.js";import"./CheckOutlined-7754a19c.js";import"./Pagination-b3aa6d53.js";import"./index-3b5b5826.js";import"./index-9f9ad849.js";import"./index-3bce57f1.js";import"./index-dae9ddf3.js";import"./index-8fbc16fd.js";import"./index-5331936b.js";import"./iconUtil-8d71c978.js";import"./extendsObject-8d078517.js";import"./index-84aed370.js";import"./row-ad48b915.js";import"./index-47ec96c7.js";import"./index-89a86bdf.js";const x=o,j={id:"",name:"",label:"",status:r.ENABLE,permission:[]};function p(){const[o,p]=e.useState({formValue:{...j},title:"New",show:!1,onOk:()=>{p((e=>({...e,show:!1})))},onCancel:()=>{p((e=>({...e,show:!1})))}}),u=[{title:"Name",dataIndex:"name",width:300},{title:"Label",dataIndex:"label"},{title:"Order",dataIndex:"order",width:60},{title:"Status",dataIndex:"status",align:"center",width:120,render:e=>t.jsx(a,{color:e===r.DISABLE?"error":"success",children:e===r.DISABLE?"Disable":"Enable"})},{title:"Desc",dataIndex:"desc"},{title:"Action",key:"operation",align:"center",width:100,render:(e,i)=>t.jsxs("div",{className:"flex w-full justify-center text-gray",children:[t.jsx(n,{onClick:()=>h(i),children:t.jsx(l,{icon:"solar:pen-bold-duotone",size:18})}),t.jsx(c,{title:"Delete the Role",okText:"Yes",cancelText:"No",placement:"left",children:t.jsx(n,{children:t.jsx(l,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],h=e=>{p((t=>({...t,show:!0,title:"Edit",formValue:e})))};return t.jsxs(i,{title:"Role List",extra:t.jsx(s,{type:"primary",onClick:()=>{p((e=>({...e,show:!0,title:"Create New",formValue:{...e.formValue,...j}})))},children:"New"}),children:[t.jsx(d,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:u,dataSource:x}),t.jsx(m,{...o})]})}export{p as default};
