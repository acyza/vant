import{c as p,a as f}from"./use-translate.27860f70.js";import{m as _,t as k,w as F}from"./with-install.8f167980.js";import{C as b}from"./index.9633d8c1.js";import{A as C,e as a,D as B,r as E,o as h,a as y,w as c,C as t,F as A}from"./vue-libs.73c42632.js";import{s}from"./index.361d06fd.js";import"./use-route.3f983808.js";import"./index.a43dba5a.js";import"./index.70d893ee.js";import"./index.e275e566.js";import"./constant.80c6de18.js";import"./interceptor.de5b6308.js";import"./use-expose.aea2526e.js";import"./use-touch.53b51ffa.js";import"./use-lazy-render.0515f8b3.js";import"./on-popup-reopen.3f7ea527.js";import"./index.111f2b3a.js";import"./index.0acc8c08.js";import"./mount-component.a3193047.js";const[w,u,r]=p("contact-card"),x={tel:String,name:String,type:_("add"),addText:String,editable:k},S=C({name:w,props:x,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||r("addContact"):[a("div",null,[`${r("name")}\uFF1A${e.name}`]),a("div",null,[`${r("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:u([e.type]),border:!1,isLink:e.editable,titleClass:u("title"),onClick:o},{title:d})}}),m=F(S),Q=C({__name:"index",setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(g,T)=>{const l=E("demo-block");return h(),y(A,null,[a(l,{title:t(n)("addContact")},{default:c(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(l,{title:t(n)("editContact")},{default:c(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(l,{title:t(n)("uneditable")},{default:c(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{Q as default};