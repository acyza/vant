import{c as F,e as f,p as K,h as I,t as k,x as z,d as U}from"./use-translate.fec5be1c.js";import{n as L,u as M,m as V,t as P,w as W}from"./with-install.6c9f4f06.js";import{m as _,u as X}from"./mount-component.5701bbc6.js";import{z as $,C as j,H as q,e as o,A as D,X as G}from"./vue-libs.7ad34eae.js";import{e as J,c as Q}from"./constant.80c6de18.js";import{c as Y}from"./interceptor.2bcb0d63.js";import{p as Z,a as ee,P as te}from"./index.e65191a7.js";import{B as v}from"./index.414acf3c.js";import{b as x,c as ne}from"./index.5b3d9575.js";const[oe,s,g]=F("dialog"),le=f({},Z,{title:String,theme:String,width:L,message:[String,Function],callback:Function,allowHtml:Boolean,className:M,transition:V("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),ae=[...ee,"transition","closeOnPopstate"],S=$({name:oe,props:le,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:i,slots:l}){const d=j(),u=q({confirm:!1,cancel:!1}),b=t=>i("update:show",t),y=t=>{var a;b(!1),(a=e.callback)==null||a.call(e,t)},O=t=>()=>{!e.show||(i(t),e.beforeClose?(u[t]=!0,Y(e.beforeClose,{args:[t],done(){y(t),u[t]=!1},canceled(){u[t]=!1}})):y(t))},C=O("cancel"),w=O("confirm"),T=G(t=>{var r,c;if(t.target!==((c=(r=d.value)==null?void 0:r.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?w:k,Escape:e.showCancelButton?C:k})[t.key](),i("keydown",t)},["enter","esc"]),p=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:s("header",{isolated:!e.message&&!l.default})},[t])},A=t=>{const{message:a,allowHtml:r,messageAlign:c}=e,B=s("message",{"has-title":t,[c]:c}),h=z(a)?a():a;return r&&typeof h=="string"?o("div",{class:B,innerHTML:h},null):o("div",{class:B},[h])},E=()=>{if(l.default)return o("div",{class:s("content")},[l.default()]);const{title:t,message:a,allowHtml:r}=e;if(a){const c=!!(t||l.title);return o("div",{key:r?1:0,class:s("content",{isolated:!c})},[A(c)])}},H=()=>o("div",{class:[Q,s("footer")]},[e.showCancelButton&&o(v,{size:"large",text:e.cancelButtonText||g("cancel"),class:s("cancel"),style:{color:e.cancelButtonColor},loading:u.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&o(v,{size:"large",text:e.confirmButtonText||g("confirm"),class:[s("confirm"),{[J]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:u.confirm,disabled:e.confirmButtonDisabled,onClick:w},null)]),N=()=>o(ne,{class:s("footer")},{default:()=>[e.showCancelButton&&o(x,{type:"warning",text:e.cancelButtonText||g("cancel"),class:s("cancel"),color:e.cancelButtonColor,loading:u.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&o(x,{type:"danger",text:e.confirmButtonText||g("confirm"),class:s("confirm"),color:e.confirmButtonColor,loading:u.confirm,disabled:e.confirmButtonDisabled,onClick:w},null)]}),R=()=>l.footer?l.footer():e.theme==="round-button"?N():H();return()=>{const{width:t,title:a,theme:r,message:c,className:B}=e;return o(te,D({ref:d,role:"dialog",class:[s([r]),B],style:{width:I(t)},tabindex:0,"aria-labelledby":a||c,onKeydown:T,"onUpdate:show":b},K(e,ae)),{default:()=>[p(),E(),R()]})}}});let m;function se(){({instance:m}=_({setup(){const{state:i,toggle:l}=X();return()=>o(S,D(i,{"onUpdate:show":l}),null)}}))}function n(e){return U?new Promise((i,l)=>{m||se(),m.open(f({},n.currentOptions,e,{callback:d=>{(d==="confirm"?i:l)(d)}}))}):Promise.resolve()}n.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};n.currentOptions=f({},n.defaultOptions);n.alert=n;n.confirm=e=>n(f({showCancelButton:!0},e));n.close=()=>{m&&m.toggle(!1)};n.setDefaultOptions=e=>{f(n.currentOptions,e)};n.resetDefaultOptions=()=>{n.currentOptions=f({},n.defaultOptions)};n.Component=W(S);n.install=e=>{e.use(n.Component),e.config.globalProperties.$dialog=n};export{n as D};
