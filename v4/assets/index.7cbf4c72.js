import{c as m,n as d,e as v,v as y,i as f,l as h}from"./use-translate.c7ada534.js";import{n as r,u as w,t as s,w as x}from"./with-install.fe59c8e0.js";import{A as z,x as O,e as c,T as S,j as D,v as I}from"./vue-libs.34a885a4.js";import{u as N}from"./use-lazy-render.a4c2132f.js";const[P,R]=m("overlay"),k={show:Boolean,zIndex:r,duration:r,className:w,lockScroll:s,lazyRender:s,customStyle:Object},T=z({name:P,props:k,setup(e,{slots:t}){const n=O(),l=N(()=>e.show||!e.lazyRender),i=a=>{e.lockScroll&&h(a,!0)},u=l(()=>{var o;const a=v(y(e.zIndex),e.customStyle);return f(e.duration)&&(a.animationDuration=`${e.duration}s`),D(c("div",{ref:n,style:a,class:[R(),e.className]},[(o=t.default)==null?void 0:o.call(t)]),[[I,e.show]])});return d("touchmove",i,{target:n}),()=>c(S,{name:"van-fade",appear:!0},{default:u})}}),V=x(T),p=V;export{V as O,p as V};