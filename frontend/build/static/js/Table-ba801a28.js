import{c as w,r as x,u as $,j as h,l as j}from"./index-ed945649.js";var k=Object.defineProperty,B=Object.defineProperties,C=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,c=(r,o,t)=>o in r?k(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,m=(r,o)=>{for(var t in o||(o={}))T.call(o,t)&&c(r,t,o[t]);if(d)for(var t of d(o))N.call(o,t)&&c(r,t,o[t]);return r},D=(r,o)=>B(r,C(o)),H=w((r,{captionSide:o,horizontalSpacing:t,verticalSpacing:a,fontSize:s,withBorder:n,withColumnBorders:l})=>{const e=`1px solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`;return{root:D(m({},r.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:o,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,lineHeight:r.lineHeight,border:n?e:"","& caption":{marginTop:o==="top"?0:r.spacing.xs,marginBottom:o==="bottom"?0:r.spacing.xs,fontSize:r.fontSizes.sm,color:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[6]},"& thead tr th, & tfoot tr th":{textAlign:"left",fontWeight:"bold",color:r.colorScheme==="dark"?r.colors.dark[0]:r.colors.gray[7],fontSize:r.fn.size({size:s,sizes:r.fontSizes}),padding:`${r.fn.size({size:a,sizes:r.spacing})}px ${r.fn.size({size:t,sizes:r.spacing})}px`},"& thead tr th":{borderBottom:e},"& tfoot tr th":{borderTop:e},"& tbody tr td":{padding:`${r.fn.size({size:a,sizes:r.spacing})}px ${r.fn.size({size:t,sizes:r.spacing})}px`,borderBottom:e,fontSize:r.fn.size({size:s,sizes:r.fontSizes})},"& tbody tr:last-of-type td":{borderBottom:"none"},"& th + th, & td + td":{borderLeft:l?e:""},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[0]},"&[data-hover] tbody tr":r.fn.hover({backgroundColor:r.colorScheme==="dark"?r.colors.dark[5]:r.colors.gray[1]})})}});const E=H;var I=Object.defineProperty,R=Object.defineProperties,V=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,p=(r,o,t)=>o in r?I(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,A=(r,o)=>{for(var t in o||(o={}))f.call(o,t)&&p(r,t,o[t]);if(i)for(var t of i(o))g.call(o,t)&&p(r,t,o[t]);return r},L=(r,o)=>R(r,V(o)),W=(r,o)=>{var t={};for(var a in r)f.call(r,a)&&o.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&i)for(var a of i(r))o.indexOf(a)<0&&g.call(r,a)&&(t[a]=r[a]);return t};const q={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},F=x.exports.forwardRef((r,o)=>{const t=$("Table",q,r),{className:a,children:s,striped:n,highlightOnHover:l,captionSide:e,horizontalSpacing:_,verticalSpacing:v,fontSize:y,unstyled:b,withBorder:O,withColumnBorders:z}=t,S=W(t,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders"]),{classes:u,cx:P}=E({captionSide:e,verticalSpacing:v,horizontalSpacing:_,fontSize:y,withBorder:O,withColumnBorders:z},{unstyled:b,name:"Table"});return h(j,{...L(A({},S),{component:"table",ref:o,className:P(u.root,a),"data-striped":n||void 0,"data-hover":l||void 0}),children:s})});F.displayName="@mantine/core/Table";export{F as T};
