import{c as g,a as C}from"./use-translate.56565eec.js";import{u as T,w as _}from"./with-install.f3d37716.js";import{T as x}from"./index.80713880.js";import{I as k}from"./index.e2935f15.js";import{C as V}from"./index.0404d7f8.js";import{a as h,R as v}from"./index.7dfc77fe.js";import{B as y}from"./index.786f87ea.js";import{A as f,e as o,x as E,r as S,o as b,c as w,w as B,C as u}from"./vue-libs.a040eeb8.js";import{s as p}from"./index.ab43bf94.js";import"./constant.80c6de18.js";import"./index.bc7c56e3.js";import"./use-route.f2a7e4c6.js";import"./Checker.f5aa016f.js";import"./index.e5e922ff.js";import"./index.358f6f43.js";import"./interceptor.37662564.js";import"./use-expose.33aa695d.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.61a8687b.js";import"./mount-component.c1b82ecd.js";const[I,a,A]=g("contact-list"),D={list:Array,addText:String,modelValue:T,defaultTagText:String},L=f({name:I,props:D,emits:["add","edit","select","update:modelValue"],setup(n,{emit:t}){const i=(e,d)=>{const c=()=>{t("update:modelValue",e.id),t("select",e,d)},s=()=>o(v,{class:a("radio"),name:e.id,iconSize:16},null),r=()=>o(k,{name:"edit",class:a("edit"),onClick:l=>{l.stopPropagation(),t("edit",e,d)}},null),m=()=>{const l=[`${e.name}\uFF0C${e.tel}`];return e.isDefault&&n.defaultTagText&&l.push(o(x,{type:"primary",round:!0,class:a("item-tag")},{default:()=>[n.defaultTagText]})),l};return o(V,{key:e.id,isLink:!0,center:!0,class:a("item"),titleClass:a("item-title"),onClick:c},{icon:r,title:m,"right-icon":s})};return()=>o("div",{class:a()},[o(h,{modelValue:n.modelValue,class:a("group")},{default:()=>[n.list&&n.list.map(i)]}),o("div",{class:[a("bottom"),"van-safe-area-bottom"]},[o(y,{round:!0,block:!0,type:"primary",class:a("add"),text:n.addText||A("addContact"),onClick:()=>t("add")},null)])])}}),N=_(L),R=N,nt=f({__name:"index",setup(n){const t=C({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000"}],select:"\u9009\u62E9",defaultTagText:"\u9ED8\u8BA4"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),i=E("1"),e=()=>{p(t("add"))},d=s=>{p(t("edit")+s.id)},c=s=>{p(t("select")+s.id)};return(s,r)=>{const m=S("demo-block");return b(),w(m,{title:u(t)("basicUsage")},{default:B(()=>[o(u(R),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=l=>i.value=l),list:u(t)("list"),"default-tag-text":u(t)("defaultTagText"),onAdd:e,onEdit:d,onSelect:c},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{nt as default};