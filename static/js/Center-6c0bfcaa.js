import{r as f,u as d,j as m,l as v,p as x,m as y}from"./index-ed945649.js";function w({value:e,defaultValue:r,finalValue:t,onChange:n=()=>{}}){const[a,l]=f.exports.useState(r!==void 0?r:t),_=s=>{l(s),n==null||n(s)};return e!==void 0?[e,n,!0]:[a,_,!1]}var O=Object.defineProperty,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,i=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,P=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&i(e,t,r[t]);if(o)for(var t of o(r))c.call(r,t)&&i(e,t,r[t]);return e},C=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&o)for(var n of o(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const u=f.exports.forwardRef((e,r)=>{const t=d("Center",{},e),{inline:n,sx:a}=t,l=C(t,["inline","sx"]);return m(v,{...P({ref:r,sx:[{display:n?"inline-flex":"flex",alignItems:"center",justifyContent:"center"},...x(a)]},l)})});u.displayName="@mantine/core/Center";const g=y(u);export{g as C,w as u};
