import{c as S,b as O,v as R,e as M,u as z,f as j,a as K}from"./use-translate.56565eec.js";import{t as T,n as P,c as L,w as $}from"./with-install.f3d37716.js";import{b as Y}from"./constant.80c6de18.js";import{c as Z}from"./interceptor.37662564.js";import{u as q}from"./use-placeholder.ad58dee6.js";import{A,x as C,e as t,P as G,D as H,B as J,r as Q,o as W,a as X,w as a,C as e,h as u,t as n,d as y,F as ee}from"./vue-libs.a040eeb8.js";import{r as te,u as ae}from"./use-route.f2a7e4c6.js";import{I as oe}from"./index.e2935f15.js";import{B as ne}from"./index.bc7c56e3.js";import{c as k}from"./index.0d8cb686.js";import{s as le}from"./index.ab43bf94.js";import"./use-height.0ded1a7f.js";import"./on-popup-reopen.2164636b.js";import"./index.358f6f43.js";import"./use-expose.33aa695d.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./index.61a8687b.js";import"./index.e5e922ff.js";import"./mount-component.c1b82ecd.js";const[w,N]=S("tabbar"),ue={route:Boolean,fixed:T,border:T,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:L(0),safeAreaInsetBottom:{type:Boolean,default:null}},U=Symbol(w),re=A({name:w,props:ue,emits:["change","update:modelValue"],setup(i,{emit:o,slots:d}){const _=C(),{linkChildren:p}=O(U),v=q(_,N),g=()=>{var f;return(f=i.safeAreaInsetBottom)!=null?f:i.fixed},m=()=>{var s;const{fixed:f,zIndex:b,border:r}=i;return t("div",{ref:_,role:"tablist",style:R(b),class:[N({fixed:f}),{[Y]:r,"van-safe-area-bottom":g()}]},[(s=d.default)==null?void 0:s.call(d)])};return p({props:i,setActive:(f,b)=>{Z(i.beforeChange,{args:[f],done(){o("update:modelValue",f),o("change",f),b()}})}}),()=>i.fixed&&i.placeholder?v(m):m()}}),ie=$(re),V=ie,[ce,I]=S("tabbar-item"),se=M({},te,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String}),de=A({name:ce,props:se,emits:["click"],setup(i,{emit:o,slots:d}){const _=ae(),p=G().proxy,{parent:v,index:g}=z(U);if(!v)return;const m=H(()=>{var s;const{route:b,modelValue:r}=v.props;if(b&&"$route"in p){const{$route:c}=p,{to:x}=i,h=j(x)?x:{path:x};return!!c.matched.find(E=>{const D="path"in h&&h.path===E.path,F="name"in h&&h.name===E.name;return D||F})}return((s=i.name)!=null?s:g.value)===r}),B=b=>{var r;m.value||v.setActive((r=i.name)!=null?r:g.value,_),o("click",b)},f=()=>{if(d.icon)return d.icon({active:m.value});if(i.icon)return t(oe,{name:i.icon,classPrefix:i.iconPrefix},null)};return()=>{var h;const{dot:b,badge:r}=i,{activeColor:s,inactiveColor:c}=v.props,x=m.value?s:c;return t("div",{role:"tab",class:I({active:m.value}),style:{color:x},tabindex:0,"aria-selected":m.value,onClick:B},[t(ne,J({dot:b,class:I("icon"),content:r},i.badgeProps),{default:f}),t("div",{class:I("text")},[(h=d.default)==null?void 0:h.call(d,{active:m.value})])])}}}),me=$(de),l=me,fe=["src"],we=A({__name:"index",setup(i){const o=K({"zh-CN":{badge:"\u5FBD\u6807\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",switchEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),d=C(0),_=C(0),p=C(0),v=C(0),g=C(0),m=C("home"),B={active:k("user-active.png"),inactive:k("user-inactive.png")},f=b=>{le(`${o("tab")} ${b+1}`)};return(b,r)=>{const s=Q("demo-block");return W(),X(ee,null,[t(s,{title:e(o)("basicUsage")},{default:a(()=>[t(e(V),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=c=>d.value=c)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("matchByName")},{default:a(()=>[t(e(V),{modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=c=>m.value=c)},{default:a(()=>[t(e(l),{name:"home",icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"search",icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"friends",icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"setting",icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("badge")},{default:a(()=>[t(e(V),{modelValue:_.value,"onUpdate:modelValue":r[2]||(r[2]=c=>_.value=c)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search",dot:""},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o",badge:"5"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o",badge:"20"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customIcon")},{default:a(()=>[t(e(V),{modelValue:p.value,"onUpdate:modelValue":r[3]||(r[3]=c=>p.value=c)},{default:a(()=>[t(e(l),{badge:"3"},{icon:a(c=>[y("img",{src:c.active?B.active:B.inactive},null,8,fe)]),default:a(()=>[y("span",null,n(e(o)("custom")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customColor")},{default:a(()=>[t(e(V),{modelValue:v.value,"onUpdate:modelValue":r[4]||(r[4]=c=>v.value=c),"active-color":"#ee0a24"},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("switchEvent")},{default:a(()=>[t(e(V),{modelValue:g.value,"onUpdate:modelValue":r[5]||(r[5]=c=>g.value=c),onChange:f},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(`${e(o)("tab")} 1`),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(`${e(o)("tab")} 2`),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(`${e(o)("tab")} 3`),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(`${e(o)("tab")} 4`),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{we as default};