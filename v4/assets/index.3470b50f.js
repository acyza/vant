import{A as _,a,b as u}from"./index.7fd329b7.js";import{c as I,e as k,u as A,a as E}from"./use-translate.27860f70.js";import{n as F,u as P,w as h}from"./with-install.8f167980.js";import{r as D,u as w}from"./use-route.3f983808.js";import{I as y}from"./index.a43dba5a.js";import{B as v}from"./index.70d893ee.js";import{A as C,e as n,B as S,r as N,o as T,a as O,w as c,C as t,F as R}from"./vue-libs.73c42632.js";import{s as B}from"./index.361d06fd.js";import"./use-placeholder.6f696e33.js";import"./use-height.6a13fb88.js";import"./on-popup-reopen.3f7ea527.js";import"./use-expose.aea2526e.js";import"./index.4b91fb67.js";import"./constant.80c6de18.js";import"./index.0acc8c08.js";import"./index.e275e566.js";import"./interceptor.de5b6308.js";import"./use-touch.53b51ffa.js";import"./use-lazy-render.0515f8b3.js";import"./index.111f2b3a.js";import"./mount-component.a3193047.js";const[U,p]=I("action-bar-icon"),j=k({},D,{dot:Boolean,text:String,icon:String,color:String,badge:F,iconClass:P,badgeProps:Object,iconPrefix:String}),z=C({name:U,props:j,setup(r,{slots:o}){const i=w();A(_);const s=()=>{const{dot:d,badge:m,icon:l,color:f,iconClass:b,badgeProps:x,iconPrefix:g}=r;return o.icon?n(v,S({dot:d,class:p("icon"),content:m},x),{default:o.icon}):n(y,{tag:"div",dot:d,name:l,badge:m,color:f,class:[p("icon"),b],badgeProps:x,classPrefix:g},null)};return()=>n("div",{role:"button",class:p(),tabindex:0,onClick:i},[s(),o.default?o.default():r.text])}}),e=h(z),it=C({__name:"index",setup(r){const o=E({"zh-CN":{icon1:"\u5BA2\u670D",icon2:"\u8D2D\u7269\u8F66",icon3:"\u5E97\u94FA",button1:"\u52A0\u5165\u8D2D\u7269\u8F66",button2:"\u7ACB\u5373\u8D2D\u4E70",iconBadge:"\u5FBD\u6807\u63D0\u793A",collected:"\u5DF2\u6536\u85CF",clickIcon:"\u70B9\u51FB\u56FE\u6807",clickButton:"\u70B9\u51FB\u6309\u94AE",customIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customButtonColor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),i=()=>B(o("clickIcon")),s=()=>B(o("clickButton"));return(d,m)=>{const l=N("demo-block");return T(),O(R,null,[n(l,{title:t(o)("basicUsage")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:i},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:i},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:i},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("iconBadge")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customIconColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(u),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{it as default};