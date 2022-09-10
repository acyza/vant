import{c as R,e as f,p as I,h as K,t as k,x as U,d as _}from"./use-translate.4bd55976.js";import{n as L,u as z,m as M,t as P,w as W}from"./with-install.4d0ca77e.js";import{A as p,x as V,H as X,e as n,B as v,X as j}from"./vue-libs.34a885a4.js";import{e as q,c as G}from"./constant.80c6de18.js";import{c as J}from"./interceptor.442e99c6.js";import{p as Q,a as Y,P as Z}from"./index.df58843c.js";import{B as x}from"./index.d3837f2c.js";import{b as T,c as $}from"./index.1a7c4eb4.js";import{m as ee,u as te}from"./mount-component.60637ff5.js";const[ne,l,d]=R("dialog"),oe=f({},Q,{title:String,theme:String,width:L,message:[String,Function],callback:Function,allowHtml:Boolean,className:z,transition:M("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),ae=[...Y,"transition","closeOnPopstate"],D=p({name:ne,props:oe,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:o}){const u=V(),i=X({confirm:!1,cancel:!1}),C=t=>r("update:show",t),b=t=>{var a;C(!1),(a=e.callback)==null||a.call(e,t)},y=t=>()=>{!e.show||(r(t),e.beforeClose?(i[t]=!0,J(e.beforeClose,{args:[t],done(){b(t),i[t]=!1},canceled(){i[t]=!1}})):b(t))},B=y("cancel"),g=y("confirm"),S=j(t=>{var s,c;if(t.target!==((c=(s=u.value)==null?void 0:s.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?g:k,Escape:e.showCancelButton?B:k})[t.key](),r("keydown",t)},["enter","esc"]),O=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:l("header",{isolated:!e.message&&!o.default})},[t])},A=t=>{const{message:a,allowHtml:s,messageAlign:c}=e,m=l("message",{"has-title":t,[c]:c}),w=U(a)?a():a;return s&&typeof w=="string"?n("div",{class:m,innerHTML:w},null):n("div",{class:m},[w])},E=()=>{if(o.default)return n("div",{class:l("content")},[o.default()]);const{title:t,message:a,allowHtml:s}=e;if(a){const c=!!(t||o.title);return n("div",{key:s?1:0,class:l("content",{isolated:!c})},[A(c)])}},H=()=>n("div",{class:[G,l("footer")]},[e.showCancelButton&&n(x,{size:"large",text:e.cancelButtonText||d("cancel"),class:l("cancel"),style:{color:e.cancelButtonColor},loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(x,{size:"large",text:e.confirmButtonText||d("confirm"),class:[l("confirm"),{[q]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),N=()=>n($,{class:l("footer")},{default:()=>[e.showCancelButton&&n(T,{type:"warning",text:e.cancelButtonText||d("cancel"),class:l("cancel"),color:e.cancelButtonColor,loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(T,{type:"danger",text:e.confirmButtonText||d("confirm"),class:l("confirm"),color:e.confirmButtonColor,loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),F=()=>o.footer?o.footer():e.theme==="round-button"?N():H();return()=>{const{width:t,title:a,theme:s,message:c,className:m}=e;return n(Z,v({ref:u,role:"dialog",class:[l([s]),m],style:{width:K(t)},tabindex:0,"aria-labelledby":a||c,onKeydown:S,"onUpdate:show":C},I(e,ae)),{default:()=>[O(),E(),F()]})}}});let h;const le={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let ce=f({},le);function se(){({instance:h}=ee({setup(){const{state:r,toggle:o}=te();return()=>n(D,v(r,{"onUpdate:show":o}),null)}}))}function re(e){return _?new Promise((r,o)=>{h||se(),h.open(f({},ce,e,{callback:u=>{(u==="confirm"?r:o)(u)}}))}):Promise.resolve()}const Ce=e=>re(f({showCancelButton:!0},e)),be=W(D);export{be as D,Ce as a,re as s};