import{c as L,b as se,N as le,Q as ue,R as re,O as _,l as ve,S as A,F as k,u as fe}from"./use-translate.fec5be1c.js";import{t as M,n as W,c as R,w as q}from"./with-install.6c9f4f06.js";import{u as he}from"./use-touch.79e2b006.js";import{u as F}from"./use-expose.9edd25e2.js";import{o as de}from"./on-popup-reopen.c53e1654.js";import{z as J,C as me,H as K,D as h,x as C,N as Q,L as we,M as ge,J as pe,e as P,q as U}from"./vue-libs.7ad34eae.js";const[j,$]=L("swipe"),ye={loop:M,width:W,height:W,vertical:Boolean,autoplay:R(0),duration:R(500),touchable:M,lazyRender:Boolean,initialSwipe:R(0),indicatorColor:String,showIndicators:M,stopPropagation:M},G=Symbol(j),Se=J({name:j,props:ye,emits:["change"],setup(a,{emit:y,slots:d}){const u=me(),e=K({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),s=he(),{children:m,linkChildren:O}=se(G),i=h(()=>m.length),n=h(()=>e[a.vertical?"height":"width"]),r=h(()=>a.vertical?s.deltaY.value:s.deltaX.value),f=h(()=>e.rect?(a.vertical?e.rect.height:e.rect.width)-n.value*i.value:0),I=h(()=>Math.ceil(Math.abs(f.value)/n.value)),S=h(()=>i.value*n.value),g=h(()=>(e.active+i.value)%i.value),B=h(()=>{const t=a.vertical?"vertical":"horizontal";return s.direction.value===t}),Z=h(()=>{const t={transitionDuration:`${e.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${e.offset}px)`};if(n.value){const c=a.vertical?"height":"width",o=a.vertical?"width":"height";t[c]=`${S.value}px`,t[o]=a[o]?`${a[o]}px`:""}return t}),ee=t=>{const{active:c}=e;return t?a.loop?k(c+t,-1,i.value):k(c+t,0,I.value):c},E=(t,c=0)=>{let o=t*n.value;a.loop||(o=Math.min(o,-f.value));let v=c-o;return a.loop||(v=k(v,f.value,0)),v},w=({pace:t=0,offset:c=0,emitChange:o})=>{if(i.value<=1)return;const{active:v}=e,l=ee(t),T=E(l,c);if(a.loop){if(m[0]&&T!==f.value){const D=T<f.value;m[0].setOffset(D?S.value:0)}if(m[i.value-1]&&T!==0){const D=T>0;m[i.value-1].setOffset(D?-S.value:0)}}e.active=l,e.offset=T,o&&l!==v&&y("change",g.value)},z=()=>{e.swiping=!0,e.active<=-1?w({pace:i.value}):e.active>=i.value&&w({pace:-i.value})},te=()=>{z(),s.reset(),A(()=>{e.swiping=!1,w({pace:-1,emitChange:!0})})},N=()=>{z(),s.reset(),A(()=>{e.swiping=!1,w({pace:1,emitChange:!0})})};let V;const b=()=>clearTimeout(V),x=()=>{b(),a.autoplay>0&&i.value>1&&(V=setTimeout(()=>{N(),x()},+a.autoplay))},p=(t=+a.initialSwipe)=>{if(!u.value)return;const c=()=>{var o,v;if(!_(u)){const l={width:u.value.offsetWidth,height:u.value.offsetHeight};e.rect=l,e.width=+((o=a.width)!=null?o:l.width),e.height=+((v=a.height)!=null?v:l.height)}i.value&&(t=Math.min(i.value-1,t)),e.active=t,e.swiping=!0,e.offset=E(t),m.forEach(l=>{l.setOffset(0)}),x()};_(u)?U().then(c):c()},Y=()=>p(e.active);let H;const ae=t=>{!a.touchable||(s.start(t),H=Date.now(),b(),z())},ie=t=>{a.touchable&&e.swiping&&(s.move(t),B.value&&(ve(t,a.stopPropagation),w({offset:r.value})))},X=()=>{if(!a.touchable||!e.swiping)return;const t=Date.now()-H,c=r.value/t;if((Math.abs(c)>.25||Math.abs(r.value)>n.value/2)&&B.value){const v=a.vertical?s.offsetY.value:s.offsetX.value;let l=0;a.loop?l=v>0?r.value>0?-1:1:0:l=-Math[r.value>0?"ceil":"floor"](r.value/n.value),w({pace:l,emitChange:!0})}else r.value&&w({pace:0});e.swiping=!1,x()},ne=(t,c={})=>{z(),s.reset(),A(()=>{let o;a.loop&&t===i.value?o=e.active===0?0:t:o=t%i.value,c.immediate?A(()=>{e.swiping=!1}):e.swiping=!1,w({pace:o-e.active,emitChange:!0})})},oe=(t,c)=>{const o=c===g.value,v=o?{backgroundColor:a.indicatorColor}:void 0;return P("i",{style:v,class:$("indicator",{active:o})},null)},ce=()=>{if(d.indicator)return d.indicator({active:g.value,total:i.value});if(a.showIndicators&&i.value>1)return P("div",{class:$("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(oe)])};return F({prev:te,next:N,state:e,resize:Y,swipeTo:ne}),O({size:n,props:a,count:i,activeIndicator:g}),C(()=>a.initialSwipe,t=>p(+t)),C(i,()=>p(e.active)),C(()=>a.autoplay,x),C([le,ue],Y),C(re(),t=>{t==="visible"?x():b()}),Q(p),we(()=>p(e.active)),de(()=>p(e.active)),ge(b),pe(b),()=>{var t;return P("div",{ref:u,class:$()},[P("div",{style:Z.value,class:$("track",{vertical:a.vertical}),onTouchstart:ae,onTouchmove:ie,onTouchend:X,onTouchcancel:X},[(t=d.default)==null?void 0:t.call(d)]),ce()])}}}),be=q(Se),De=be,[xe,Te]=L("swipe-item"),Ce=J({name:xe,setup(a,{slots:y}){let d;const u=K({offset:0,inited:!1,mounted:!1}),{parent:e,index:s}=fe(G);if(!e)return;const m=h(()=>{const n={},{vertical:r}=e.props;return e.size.value&&(n[r?"height":"width"]=`${e.size.value}px`),u.offset&&(n.transform=`translate${r?"Y":"X"}(${u.offset}px)`),n}),O=h(()=>{const{loop:n,lazyRender:r}=e.props;if(!r||d)return!0;if(!u.mounted)return!1;const f=e.activeIndicator.value,I=e.count.value-1,S=f===0&&n?I:f-1,g=f===I&&n?0:f+1;return d=s.value===f||s.value===S||s.value===g,d}),i=n=>{u.offset=n};return Q(()=>{U(()=>{u.mounted=!0})}),F({setOffset:i}),()=>{var n;return P("div",{class:Te(),style:m.value},[O.value?(n=y.default)==null?void 0:n.call(y):null])}}}),Pe=q(Ce),ke=Pe;export{be as S,De as V,Pe as a,ke as b};
