import{c as h,e as I,l as R}from"./use-translate.fec5be1c.js";import{m as r,n as v,w as C}from"./with-install.6c9f4f06.js";import{B as w}from"./constant.80c6de18.js";import{r as D,u as L}from"./use-route.13c8c682.js";import{I as N}from"./index.a07b08cc.js";import{L as V}from"./index.98a2059e.js";import{z as q,e as i}from"./vue-libs.7ad34eae.js";const[O,a]=h("button"),U=I({},D,{tag:r("button"),text:String,icon:String,type:r("default"),size:r("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:r("button"),loadingSize:v,loadingText:String,loadingType:String,iconPosition:r("left")}),_=q({name:O,props:U,emits:["click"],setup(e,{emit:f,slots:o}){const g=L(),m=()=>o.loading?o.loading():i(V,{size:e.loadingSize,type:e.loadingType,class:a("loading")},null),c=()=>{if(e.loading)return m();if(o.icon)return i("div",{class:a("icon")},[o.icon()]);if(e.icon)return i(N,{name:e.icon,class:a("icon"),classPrefix:e.iconPrefix},null)},b=()=>{let n;if(e.loading?n=e.loadingText:n=o.default?o.default():e.text,n)return i("span",{class:a("text")},[n])},B=()=>{const{color:n,plain:l}=e;if(n){const t={color:l?n:"white"};return l||(t.background=n),n.includes("gradient")?t.border=0:t.borderColor=n,t}},x=n=>{e.loading?R(n):e.disabled||(f("click",n),g())};return()=>{const{tag:n,type:l,size:t,block:y,round:S,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:p,iconPosition:u}=e,z=[a([l,t,{plain:P,block:y,round:S,square:k,loading:T,disabled:s,hairline:d}]),{[w]:d}];return i(n,{type:p,class:z,style:B(),disabled:s,onClick:x},{default:()=>[i("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}}),E=C(_),M=E;export{E as B,M as V};
