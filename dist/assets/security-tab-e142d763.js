import{cp as s,j as a,a7 as e,a8 as r}from"./index-b1b3d88f.js";import{C as o}from"./index-afd123aa.js";import{F as l}from"./index-84aed370.js";import"./row-ad48b915.js";function d(){const{notification:d}=s.useApp();return a.jsxs(o,{className:"!h-auto flex-col",children:[a.jsxs(l,{layout:"vertical",initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},labelCol:{span:8},className:"w-full",children:[a.jsx(l.Item,{label:"Old Password",name:"oldPassword",children:a.jsx(e.Password,{})}),a.jsx(l.Item,{label:"New Password",name:"newPassword",children:a.jsx(e.Password,{})}),a.jsx(l.Item,{label:"Confirm New Password",name:"confirmPassword",children:a.jsx(e.Password,{})})]}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(r,{type:"primary",onClick:()=>{d.success({message:"Update success!",duration:3})},children:"Save Changes"})})]})}export{d as default};