import{b as r,j as e,y as s,I as l,c as o}from"./index-b1b3d88f.js";import{C as a}from"./index-afd123aa.js";import{T as c}from"./index-fa5ce600.js";import"./CheckOutlined-7754a19c.js";import"./styleChecker-9f7ab8c8.js";function i(){const i=r(),n=r=>{switch(r){case 1:return{color:i.colorInfo,bg:i.colorInfoBgHover};case 2:return{color:i.colorError,bg:i.colorErrorBgHover};default:return{color:i.colorPrimary,bg:i.colorPrimaryBgHover}}};return e.jsxs(a,{className:"flex-col",children:[e.jsx("header",{className:"self-start",children:e.jsx(c.Title,{level:5,children:"Top Authors"})}),e.jsx("main",{className:"w-full",children:new Array(3).fill("").map(((r,a)=>e.jsxs("div",{className:"mb-4 flex",children:[e.jsx("img",{src:s.image.avatar(),alt:"",className:"h-10 w-10 rounded-full"}),e.jsxs("div",{className:"ml-2 flex flex-col",children:[e.jsx("span",{children:s.person.fullName()}),e.jsxs("div",{className:"flex items-center  text-gray",children:[e.jsx(l,{icon:"icon-park-solid:like",size:14}),e.jsxs("span",{className:"ml-2",children:[s.number.float({min:3,max:9,precision:3}),"k"]})]})]}),e.jsx("div",{className:"ml-auto flex h-10 w-10 items-center justify-center rounded-full",style:{background:o(n(a).bg).alpha(.4).toString()},children:e.jsx(l,{icon:"solar:cup-star-bold",size:24,color:n(a).color})})]},a)))})]})}export{i as default};