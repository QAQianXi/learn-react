import{r as e,B as t,aa as r,D as a,am as s,E as n,aB as o,bh as i,a_ as l,G as c,as as g,an as p,ad as u}from"./index-b1b3d88f.js";import{P as m}from"./index-89a86bdf.js";const d=e.createContext({}),f=e=>{const{antCls:t,componentCls:r,iconCls:s,avatarBg:n,avatarColor:o,containerSize:i,containerSizeLG:l,containerSizeSM:c,textFontSize:g,textFontSizeLG:p,textFontSizeSM:u,borderRadius:m,borderRadiusLG:d,borderRadiusSM:f,lineWidth:h,lineType:b}=e,S=(e,t,a)=>({width:e,height:e,lineHeight:e-2*h+"px",borderRadius:"50%",[`&${r}-square`]:{borderRadius:a},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:t,[`> ${s}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},a(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:o,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:n,border:`${h}px ${b} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),S(i,g,m)),{"&-lg":Object.assign({},S(l,p,d)),"&-sm":Object.assign({},S(c,u,f)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},h=e=>{const{componentCls:t,groupBorderColor:r,groupOverlapping:a,groupSpace:s}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:a}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:s}}}},b=t("Avatar",(e=>{const{colorTextLightSolid:t,colorTextPlaceholder:a}=e,s=r(e,{avatarBg:a,avatarColor:t});return[f(s),h(s)]}),(e=>{const{controlHeight:t,controlHeightLG:r,controlHeightSM:a,fontSize:s,fontSizeLG:n,fontSizeXL:o,fontSizeHeading3:i,marginXS:l,marginXXS:c,colorBorderBg:g}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:a,textFontSize:Math.round((n+o)/2),textFontSizeLG:i,textFontSizeSM:s,groupSpace:c,groupOverlapping:-l,groupBorderColor:g}}));var S=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]])}return r};const v=(t,r)=>{const[a,p]=e.useState(1),[u,m]=e.useState(!1),[f,h]=e.useState(!0),v=e.useRef(null),x=e.useRef(null),y=s(r,v),{getPrefixCls:z,avatar:O}=e.useContext(n),$=e.useContext(d),C=()=>{if(!x.current||!v.current)return;const e=x.current.offsetWidth,r=v.current.offsetWidth;if(0!==e&&0!==r){const{gap:a=4}=t;2*a<r&&p(r-2*a<e?(r-2*a)/e:1)}};e.useEffect((()=>{m(!0)}),[]),e.useEffect((()=>{h(!0),p(1)}),[t.src]),e.useEffect(C,[t.gap]);const j=()=>{const{onError:e}=t;!1!==(null==e?void 0:e())&&h(!1)},{prefixCls:E,shape:k,size:N,src:w,srcSet:P,icon:G,className:L,rootClassName:M,alt:R,draggable:B,children:H,crossOrigin:T}=t,F=S(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),_=o((e=>{var t,r;return null!==(r=null!==(t=null!=N?N:null==$?void 0:$.size)&&void 0!==t?t:e)&&void 0!==r?r:"default"})),X=Object.keys("object"==typeof _&&_||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),A=i(X),W=e.useMemo((()=>{if("object"!=typeof _)return{};const e=l.find((e=>A[e])),t=_[e];return t?{width:t,height:t,lineHeight:`${t}px`,fontSize:G?t/2:18}:{}}),[A,_]),I=z("avatar",E),[q,D]=b(I),V=c({[`${I}-lg`]:"large"===_,[`${I}-sm`]:"small"===_}),J=e.isValidElement(w),K=k||(null==$?void 0:$.shape)||"circle",Q=c(I,V,null==O?void 0:O.className,`${I}-${K}`,{[`${I}-image`]:J||w&&f,[`${I}-icon`]:!!G},L,M,D),U="number"==typeof _?{width:_,height:_,lineHeight:`${_}px`,fontSize:G?_/2:18}:{};let Y;if("string"==typeof w&&f)Y=e.createElement("img",{src:w,draggable:B,srcSet:P,onError:j,alt:R,crossOrigin:T});else if(J)Y=w;else if(G)Y=G;else if(u||1!==a){const t=`scale(${a}) translateX(-50%)`,r={msTransform:t,WebkitTransform:t,transform:t},s="number"==typeof _?{lineHeight:`${_}px`}:{};Y=e.createElement(g,{onResize:C},e.createElement("span",{className:`${I}-string`,ref:x,style:Object.assign(Object.assign({},s),r)},H))}else Y=e.createElement("span",{className:`${I}-string`,style:{opacity:0},ref:x},H);return delete F.onError,delete F.gap,q(e.createElement("span",Object.assign({},F,{style:Object.assign(Object.assign(Object.assign(Object.assign({},U),W),null==O?void 0:O.style),F.style),className:Q,ref:y}),Y))},x=e.forwardRef(v),y=t=>{const{size:r,shape:a}=e.useContext(d),s=e.useMemo((()=>({size:t.size||r,shape:t.shape||a})),[t.size,t.shape,r,a]);return e.createElement(d.Provider,{value:s},t.children)},z=t=>{const{getPrefixCls:r,direction:a}=e.useContext(n),{prefixCls:s,className:o,rootClassName:i,style:l,maxCount:g,maxStyle:d,size:f,shape:h,maxPopoverPlacement:S="top",maxPopoverTrigger:v="hover",children:z}=t,O=r("avatar",s),$=`${O}-group`,[C,j]=b(O),E=c($,{[`${$}-rtl`]:"rtl"===a},o,i,j),k=p(z).map(((e,t)=>u(e,{key:`avatar-key-${t}`}))),N=k.length;if(g&&g<N){const t=k.slice(0,g),r=k.slice(g,N);return t.push(e.createElement(m,{key:"avatar-popover-key",content:r,trigger:v,placement:S,overlayClassName:`${$}-popover`},e.createElement(x,{style:d},"+"+(N-g)))),C(e.createElement(y,{shape:h,size:f},e.createElement("div",{className:E,style:l},t)))}return C(e.createElement(y,{shape:h,size:f},e.createElement("div",{className:E,style:l},k)))},O=x;O.Group=z;const $=O;export{$ as A};
