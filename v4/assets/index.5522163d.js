import{V as i}from"./index.b31fce0f.js";import{V as v}from"./index.0404d7f8.js";import{V as f}from"./index.e2935f15.js";import{a as _}from"./use-translate.56565eec.js";import{a as g}from"./index.d9bcb687.js";import{A,x as d,r as F,o as U,a as k,e as t,w as a,C as e,d as w,F as x}from"./vue-libs.a040eeb8.js";import"./with-install.f3d37716.js";import"./index.e5e922ff.js";import"./use-route.f2a7e4c6.js";import"./index.bc7c56e3.js";import"./constant.80c6de18.js";import"./interceptor.37662564.js";import"./index.358f6f43.js";import"./use-expose.33aa695d.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.61a8687b.js";import"./index.786f87ea.js";import"./index.0d1c3817.js";import"./use-placeholder.ad58dee6.js";import"./use-height.0ded1a7f.js";import"./mount-component.c1b82ecd.js";const E={class:"icon-wrapper"},Y=A({__name:"index",setup(y){const u=_({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customNode:"\u81EA\u5B9A\u4E49\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customNode:"Custom Node",customColor:"Custom Color",asyncControl:"Async Control"}}),n=d(!0),r=d(!0),s=d(!0),p=d(!0),c=d(!0),C=V=>{g({title:u("title"),message:u("message")}).then(()=>{p.value=V})};return(V,l)=>{const m=F("demo-block");return U(),k(x,null,[t(m,{title:e(u)("basicUsage")},{default:a(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(u)("disabled")},{default:a(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=o=>n.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(u)("loadingStatus")},{default:a(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=o=>n.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(u)("customSize")},{default:a(()=>[t(e(i),{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=o=>r.value=o),size:"22px"},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(u)("customColor")},{default:a(()=>[t(e(i),{modelValue:s.value,"onUpdate:modelValue":l[4]||(l[4]=o=>s.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(u)("customNode")},{default:a(()=>[t(e(i),{modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=o=>s.value=o)},{node:a(()=>[w("div",E,[t(e(f),{name:s.value?"success":"cross"},null,8,["name"])])]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(u)("asyncControl")},{default:a(()=>[t(e(i),{"model-value":p.value,"onUpdate:modelValue":C},null,8,["model-value"])]),_:1},8,["title"]),t(m,{title:e(u)("withCell")},{default:a(()=>[t(e(v),{center:"",title:e(u)("title")},{"right-icon":a(()=>[t(e(i),{modelValue:c.value,"onUpdate:modelValue":l[6]||(l[6]=o=>c.value=o)},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{Y as default};