import{c as g,D as h,h as C}from"./use-translate.813c82b8.js";import{n as w,u as i,w as k}from"./with-install.ed706383.js";import{L as b}from"./index.04ba88cf.js";import{z as S,e as t}from"./vue-libs.e99ed056.js";const[y,l]=g("switch"),z={size:w,loading:Boolean,disabled:Boolean,modelValue:i,activeColor:String,inactiveColor:String,activeValue:{type:i,default:!0},inactiveValue:{type:i,default:!1}};var L=S({name:y,props:z,emits:["change","update:modelValue"],setup(e,{emit:c,slots:d}){const o=()=>e.modelValue===e.activeValue,r=()=>{if(!e.disabled&&!e.loading){const a=o()?e.inactiveValue:e.activeValue;c("update:modelValue",a),c("change",a)}},u=()=>{if(e.loading){const a=o()?e.activeColor:e.inactiveColor;return t(b,{class:l("loading"),color:a},null)}if(d.node)return d.node()};return h(()=>e.modelValue),()=>{const{size:a,loading:m,disabled:s,activeColor:v,inactiveColor:f}=e,n=o(),V={fontSize:C(a),backgroundColor:n?v:f};return t("div",{role:"switch",class:l({on:n,loading:m,disabled:s}),style:V,tabindex:s?void 0:0,"aria-checked":n,onClick:r},[t("div",{class:l("node")},[u()])])}}});const D=k(L);export{D as S};