import{c as x,e as C,a as k}from"./use-translate.27860f70.js";import{d as _,b as p,n as h,t as F,w}from"./with-install.8f167980.js";import{B as A}from"./index.4b91fb67.js";import{R as B,a as S}from"./index.59d0b8b3.js";import{T as y}from"./index.a97336b9.js";import{I as v}from"./index.a43dba5a.js";import{C as L}from"./index.9633d8c1.js";import{A as T,e as s,Q as D,x as I,r as V,o as j,c as $,w as P,C as l}from"./vue-libs.73c42632.js";import{s as g}from"./index.361d06fd.js";import"./constant.80c6de18.js";import"./use-route.3f983808.js";import"./index.0acc8c08.js";import"./Checker.29cf14f7.js";import"./index.70d893ee.js";import"./index.e275e566.js";import"./interceptor.de5b6308.js";import"./use-expose.aea2526e.js";import"./use-touch.53b51ffa.js";import"./use-lazy-render.0515f8b3.js";import"./on-popup-reopen.3f7ea527.js";import"./index.111f2b3a.js";import"./mount-component.a3193047.js";function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[O,c]=x("address-item"),R=T({name:O,props:{address:_(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String},emits:["edit","click","select"],setup(e,{slots:t,emit:u}){const m=()=>{e.switchable&&u("select"),u("click")},r=()=>s(v,{name:"edit",class:c("edit"),onClick:d=>{d.stopPropagation(),u("edit"),u("click")}},null),f=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return s(y,{type:"primary",round:!0,class:c("tag")},{default:()=>[e.defaultTagText]})},a=()=>{const{address:d,disabled:i,switchable:n}=e,o=[s("div",{class:c("name")},[`${d.name} ${d.tel}`,f()]),s("div",{class:c("address")},[d.address])];return n&&!i?s(B,{name:d.id,iconSize:18},N(o)?o:{default:()=>[o]}):o};return()=>{var i;const{disabled:d}=e;return s("div",{class:c({disabled:d}),onClick:m},[s(L,{border:!1,titleClass:c("title")},{title:a,"right-icon":r}),(i=t.bottom)==null?void 0:i.call(t,C({},e.address,{disabled:d}))])}}});function U(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[z,b,q]=x("address-list"),G={list:p(),modelValue:h,switchable:F,disabledText:String,disabledList:p(),addButtonText:String,defaultTagText:String},J=T({name:z,props:G,emits:["add","edit","select","clickItem","editDisabled","selectDisabled","update:modelValue"],setup(e,{slots:t,emit:u}){const m=(a,d,i)=>{const n=()=>u(i?"editDisabled":"edit",a,d),o=()=>u("clickItem",a,d),E=()=>{u(i?"selectDisabled":"select",a,d),i||u("update:modelValue",a.id)};return s(R,{key:a.id,address:a,disabled:i,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:n,onClick:o,onSelect:E},{bottom:t["item-bottom"],tag:t.tag})},r=(a,d)=>{if(a)return a.map((i,n)=>m(i,n,d))},f=()=>s("div",{class:[b("bottom"),"van-safe-area-bottom"]},[s(A,{round:!0,block:!0,type:"primary",text:e.addButtonText||q("add"),class:b("add"),onClick:()=>u("add")},null)]);return()=>{var n,o;const a=r(e.list),d=r(e.disabledList,!0),i=e.disabledText&&s("div",{class:b("disabled-text")},[e.disabledText]);return s("div",{class:b()},[(n=t.top)==null?void 0:n.call(t),s(S,{modelValue:e.modelValue},U(a)?a:{default:()=>[a]}),i,d,(o=t.default)==null?void 0:o.call(t),f()])}}}),Q=w(J),Te=T({__name:"index",setup(e){const t=k({"zh-CN":{list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7"}],disabledList:[{id:"3",name:"\u738B\u4E94",tel:"1320000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7"}],add:"\u65B0\u589E\u5730\u5740",edit:"\u7F16\u8F91\u5730\u5740",disabledText:"\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4",defaultTagText:"\u9ED8\u8BA4"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),u=I("1"),m=()=>{g(t("add"))},r=(f,a)=>{g(`${t("edit")}:${a}`)};return(f,a)=>{const d=V("demo-block");return j(),$(d,{title:l(t)("basicUsage")},{default:P(()=>[s(l(Q),{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=i=>u.value=i),list:l(t)("list"),"disabled-list":l(t)("disabledList"),"disabled-text":l(t)("disabledText"),"default-tag-text":l(t)("defaultTagText"),onAdd:m,onEdit:r},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{Te as default};