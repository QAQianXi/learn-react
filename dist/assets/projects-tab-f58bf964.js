import{j as e,I as s,y as a,cd as l,a9 as n,a5 as i}from"./index-b1b3d88f.js";import{d as t}from"./dayjs.min-0adc8d86.js";import{f as r}from"./utils-ed264e69.js";import{C as m}from"./index-afd123aa.js";import{R as o,C as c}from"./row-ad48b915.js";import{A as d}from"./index-15da099d.js";import"./index-89a86bdf.js";function x(){const x=[{icon:e.jsx(s,{icon:"logos:react",size:40}),name:"Admin Template",client:a.person.fullName(),desc:"Time is our most valuable asset, that is why we want to help you save it by creating…",members:r(15),startDate:t(a.date.past({years:1})),deadline:t(a.date.future({years:1})),messages:236,allHours:"98/135",allTasks:a.number.int({min:60,max:99}),closedTasks:a.number.int({min:30,max:60})},{icon:e.jsx(s,{icon:"logos:vue",size:40}),name:"App Design",desc:"App design combines the user interface (UI) and user experience (UX).  ",client:a.person.fullName(),members:r(27),startDate:t(a.date.past({years:1})),deadline:t(a.date.future({years:1})),messages:236,allHours:"880/421",allTasks:a.number.int({min:60,max:99}),closedTasks:a.number.int({min:30,max:60})},{icon:e.jsx(s,{icon:"logos:figma",size:40}),name:"Figma Dashboard",desc:"Use this template to organize your design project. Some of the key features are… ",client:a.person.fullName(),members:r(32),startDate:t(a.date.past({years:1})),deadline:t(a.date.future({years:1})),messages:236,allHours:"1.2k/820",allTasks:a.number.int({min:60,max:99}),closedTasks:a.number.int({min:30,max:60})},{icon:e.jsx(s,{icon:"logos:html-5",size:40}),name:"Create Website",desc:"Your domain name should reflect your products or services so that your...  ",client:a.person.fullName(),members:r(221),startDate:t(a.date.past({years:1})),deadline:t(a.date.future({years:1})),messages:236,allHours:"142/420",allTasks:a.number.int({min:60,max:99}),closedTasks:a.number.int({min:30,max:60})},{icon:e.jsx(s,{icon:"logos:adobe-xd",size:40}),name:"Logo Design",desc:"Premium logo designs created by top logo designers. Create the branding of business.  ",client:a.person.fullName(),members:r(125),startDate:t(a.date.past({years:1})),deadline:t(a.date.future({years:1})),messages:232,allHours:"580/445",allTasks:a.number.int({min:60,max:99}),closedTasks:a.number.int({min:30,max:60})}];return e.jsx(o,{gutter:[16,16],children:x.map((a=>e.jsx(c,{span:24,md:12,children:e.jsxs(m,{className:"w-full flex-col",children:[e.jsxs("header",{className:"flex w-full items-center",children:[a.icon,e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"ml-4 text-xl opacity-70",children:a.name}),e.jsxs("span",{className:"text-md ml-4 opacity-50",children:["Client: ",a.client]})]}),e.jsx("div",{className:"ml-auto flex opacity-70",children:e.jsx(l,{children:e.jsx(s,{icon:"fontisto:more-v-a",size:18})})})]}),e.jsxs("main",{className:"mt-4 w-full",children:[e.jsxs("div",{className:"my-2 flex justify-between",children:[e.jsxs("span",{children:["Start Date:",e.jsx("span",{className:"ml-2 opacity-50",children:a.startDate.format("DD/MM/YYYY")})]}),e.jsxs("span",{children:["Deadline:",e.jsx("span",{className:"ml-2 opacity-50",children:a.deadline.format("DD/MM/YYYY")})]})]}),e.jsx("span",{className:"opacity-70",children:a.desc})]}),e.jsx(n,{}),e.jsxs("footer",{className:"flex w-full  flex-col items-center",children:[e.jsxs("div",{className:"mb-4 flex w-full justify-between",children:[e.jsxs("span",{children:["All Hours:",e.jsx("span",{className:"ml-2 opacity-50",children:a.allHours})]}),e.jsxs(i,{color:"warning",children:[a.deadline.diff(t(),"day")," days left"]})]}),e.jsxs("div",{className:"flex w-full ",children:[e.jsx(d.Group,{maxCount:4,children:a.members.map(((s,a)=>e.jsx(d,{src:s},a)))}),e.jsxs("div",{className:"ml-auto flex items-center opacity-50",children:[e.jsx(s,{icon:"solar:chat-round-line-linear",size:24}),e.jsx("span",{className:"ml-2",children:a.messages})]})]})]})]})},a.name)))})}export{x as default};
