import{c as L,e as S,i as r}from"./use-translate.4bd55976.js";import{n as c,t as V,u as o,w as I}from"./with-install.4d0ca77e.js";import{r as y,u as B}from"./use-route.d291d507.js";import{I as b}from"./index.43c21584.js";import{A as D,e as a}from"./vue-libs.34a885a4.js";const[q,t]=L("cell"),z={icon:String,size:String,title:c,value:c,label:c,center:Boolean,isLink:Boolean,border:V,required:Boolean,iconPrefix:String,valueClass:o,labelClass:o,titleClass:o,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},N=S({},z,y),R=D({name:q,props:N,setup(e,{slots:n}){const m=B(),C=()=>{if(n.label||r(e.label))return a("div",{class:[t("label"),e.labelClass]},[n.label?n.label():e.label])},h=()=>{if(n.title||r(e.title))return a("div",{class:[t("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():a("span",null,[e.title]),C()])},v=()=>{const l=n.value||n.default;if(l||r(e.value))return a("div",{class:[t("value"),e.valueClass]},[l?l():a("span",null,[e.value])])},w=()=>{if(n.icon)return n.icon();if(e.icon)return a(b,{name:e.icon,class:t("left-icon"),classPrefix:e.iconPrefix},null)},P=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const l=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return a(b,{name:l,class:t("right-icon")},null)}};return()=>{var d,f;const{size:l,center:u,border:g,isLink:k,required:x}=e,i=(d=e.clickable)!=null?d:k,s={center:u,required:x,clickable:i,borderless:!g};return l&&(s[l]=!!l),a("div",{class:t(s),role:i?"button":void 0,tabindex:i?0:void 0,onClick:m},[w(),h(),v(),P(),(f=n.extra)==null?void 0:f.call(n)])}}}),A=I(R),F=A;export{A as C,F as V,z as c};