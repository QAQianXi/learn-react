import{b as e,j as t}from"./index-b1b3d88f.js";import{u as a,C as o}from"./useChart-6ed2a33e.js";const s=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function i(){const{colorText:i}=e(),r=a({stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:["2011","2012","2013","2014","2015","2016"],labels:{style:{colors:[i,i,i,i,i,i]}}}});return t.jsx(o,{type:"radar",series:s,options:r,height:320})}export{i as default};