import{c as d,b as m,E as p,u as V,p as g}from"./use-translate.fec5be1c.js";import{n as h,u as f,w as u}from"./with-install.6c9f4f06.js";import{z as c,x as k,e as s,A as R}from"./vue-libs.7ad34eae.js";import{c as b,C}from"./Checker.92c3e531.js";const[l,P]=d("radio-group"),w={disabled:Boolean,iconSize:h,direction:String,modelValue:f,checkedColor:String},i=Symbol(l),G=c({name:l,props:w,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){const{linkChildren:o}=m(i),r=a=>t("update:modelValue",a);return k(()=>e.modelValue,a=>t("change",a)),o({props:e,updateValue:r}),p(()=>e.modelValue),()=>{var a;return s("div",{class:P([e.direction]),role:"radiogroup"},[(a=n.default)==null?void 0:a.call(n)])}}}),S=u(G),y=S,[v,_]=d("radio"),x=c({name:v,props:b,emits:["update:modelValue"],setup(e,{emit:t,slots:n}){const{parent:o}=V(i),r=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):t("update:modelValue",e.name)};return()=>s(C,R({bem:_,role:"radio",parent:o,checked:r(),onToggle:a},e),g(n,["default","icon"]))}}),z=u(x),B=z;export{z as R,y as V,S as a,B as b};
