import{o as l,c as m,a as t,d as te,b as s,u as be,e as xe,f as ye,g as $e,r as J,h as y,M as f,i as S,j as Ce,w as ke,k as Te,l as we,n as g,m as V,p as o,q as e,F as M,s as z,t as k,v as Ve,x as h,y as re,z as D,A as Ee,B as Fe,C as ne,D as ie,V as de,R as ue,E as Be,G as Se,H as Me,I as ce}from"./index.8a0ff228.js";import{u as R,t as Re}from"./ReducedMotion.13af741e.js";import{_ as je,a as ze}from"./chevron-right.43555099.js";import{r as X,a as Z,i as ee,I as fe,D as pe,w as ge,L as me,U as _e,G as ve,$ as he}from"./headlessui.esm.d4d3c726.js";import{_ as De}from"./Spinner.5a9debb4.js";const Ue={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Le=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m8 7l4-4m0 0l4 4m-4-4v18"},null,-1),Ae=[Le];function Ie(Q,w){return l(),m("svg",Ue,Ae)}var Ne={name:"heroicons-outline-arrow-narrow-up",render:Ie};const Ge={class:"fixed bottom-0 right-0 pb-4"},Ke={class:"px-6 lg:px-8"},Oe=te({setup(Q){const w=()=>{var n;return(n=document.getElementById("container"))==null?void 0:n.scrollTo({top:0,behavior:R.value?void 0:"smooth"})};return(n,_)=>{const W=Ne;return l(),m("div",Ge,[t("div",Ke,[t("button",{class:"bg-discord-blurple-500 hover:bg-discord-blurple-530 dark:hover:bg-discord-blurple-560 text-gray-200 hover:text-white rounded-md p-2 leading-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200",onClick:_[0]||(_[0]=C=>w())},[s(W,{class:"h-6 w-6"})])])])}}}),Pe={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ye=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 15l7-7l7 7"},null,-1),qe=[Ye];function He(Q,w){return l(),m("svg",Pe,qe)}var Je={name:"heroicons-outline-chevron-up",render:He};const Qe=["aria-expanded"],We=t("span",{class:"sr-only"},"Open menu",-1),Xe={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},Ze={class:"my-5 px-2 space-y-1 z-10"},et={class:"pb-1"},tt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},st=["aria-expanded"],at={class:"sr-only"},ot=D(" Docs settings "),lt={class:"relative mt-1"},rt={class:"truncate"},nt={class:"truncate"},it={class:"relative mt-1"},dt={class:"truncate"},ut={class:"truncate"},ct={class:"flex justify-between px-2"},ft=D("Reduced Motion"),pt={class:"flex justify-between px-2"},gt=D("Show privates"),mt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},_t=["aria-expanded"],vt={class:"sr-only"},ht={class:"truncate"},bt={class:"truncate"},xt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},yt=["aria-expanded"],kt={class:"sr-only"},wt=D(" Classes "),$t={class:"truncate"},Ct={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Tt=["aria-expanded"],Vt={class:"sr-only"},Et=D(" Typedefs "),Ft={class:"truncate"},Bt=te({setup(Q){var G,K,O,P,Y;const w=be(),n=xe(),_=ye(),C=$e(Ve).greater("lg"),p=J(!1),b=J(),U=y(()=>_.state.sources),E=y(()=>_.state.source),L=y(()=>_.state.tag),i=y(()=>_.state.docs),A=y(()=>_.state.branches),F=y(()=>U.value.find(d=>n.params.source===d.id)),B=J({source:(K=(G=F.value)==null?void 0:G.source)!=null?K:f,name:(P=(O=F.value)==null?void 0:O.name)!=null?P:f.name}),T=J((Y=n.params.tag)!=null?Y:f.defaultTag),I=y(()=>{var d,a;return S.value?(d=i.value)==null?void 0:d.classes:(a=i.value)==null?void 0:a.classes.filter(v=>v.access!=="private")}),N=y(()=>{var d,a;return S.value?(d=i.value)==null?void 0:d.typedefs:(a=i.value)==null?void 0:a.typedefs.filter(v=>v.access!=="private")});return Ce(b,()=>p.value=!1),ke(C,()=>p.value=!1,{immediate:!0}),Te([B,T],async([d,a],[v,x])=>{if(d!==v)return T.value=d.source.defaultTag,w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:d.source.defaultTag,category:d.source.defaultFile.category,file:d.source.defaultFile.id}});if(a!==x)return w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:a,category:d.source.defaultFile.category,file:d.source.defaultFile.id}})}),(d,a)=>{var H,se,ae;const v=je,x=ze,q=Je,j=we("router-link");return l(),m(M,null,[p.value?V("",!0):(l(),m("div",{key:0,class:g(["block fixed lg:hidden z-10 transition-transform transform-gpu",p.value?"translate-x-72 md:translate-x-80":null])},[t("button",{type:"button",class:"rounded-md rounded-l-none rounded-tr-none p-3 inline-flex items-center justify-center text-gray-200 bg-discord-blurple-600 hover:bg-discord-blurple-630 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"sidebar-menu","aria-expanded":p.value,onClick:a[0]||(a[0]=u=>p.value=!p.value)},[We,s(v,{class:g(["h-6 w-6",{hidden:p.value,block:!p.value}]),"aria-hidden":"true"},null,8,["class"])],8,Qe)],2)),t("div",{ref_key:"sidebarElement",ref:b,class:g(["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",p.value?"translate-x-0":"-translate-x-full lg:translate-x-0"])},[t("div",Xe,[t("nav",Ze,[t("ul",null,[t("li",et,[s(e(X),{"default-open":!0},{default:o(({open:u})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",tt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":u},[t("span",at,h(u?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:u}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!u}]),"aria-hidden":"true"},null,8,["class"])],8,st),ot])]),_:2},1024),s(e(ee),{as:"ul",class:"px-2 space-y-3"},{default:o(()=>[t("li",null,[s(e(fe),{modelValue:B.value,"onUpdate:modelValue":a[1]||(a[1]=r=>B.value=r)},{default:o(({open:r})=>[t("div",lt,[s(e(pe),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:o(()=>[t("span",rt,h(B.value.name),1),r?V("",!0):(l(),k(x,{key:0})),r?(l(),k(q,{key:1})):V("",!0)]),_:2},1024),s(e(ge),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:o(()=>[(l(!0),m(M,null,z(e(U),c=>(l(),k(e(me),{key:c.source.id,class:"cursor-default",value:c},{default:o(({active:$})=>[t("li",{class:g(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":$}])},[t("span",nt,h(c.name),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(fe),{modelValue:T.value,"onUpdate:modelValue":a[2]||(a[2]=r=>T.value=r)},{default:o(({open:r})=>[t("div",it,[s(e(pe),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:o(()=>[t("span",dt,h(T.value),1),r?V("",!0):(l(),k(x,{key:0})),r?(l(),k(q,{key:1})):V("",!0)]),_:2},1024),s(e(ge),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:o(()=>[(l(!0),m(M,null,z(e(A),c=>(l(),k(e(me),{key:c,class:"cursor-default",value:c},{default:o(({active:$})=>[t("li",{class:g(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":$}])},[t("span",ut,h(c),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(_e),null,{default:o(()=>[t("div",ct,[s(e(ve),{class:"mr-4 dark:text-gray-200"},{default:o(()=>[ft]),_:1}),s(e(he),{modelValue:e(R),"onUpdate:modelValue":a[3]||(a[3]=r=>re(R)?R.value=r:null),class:g(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",e(R)?"bg-discord-blurple-500":"bg-gray-500"]),onClick:a[4]||(a[4]=r=>e(Re)(e(R)))},{default:o(()=>[t("span",{class:g(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",e(R)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})]),t("li",null,[s(e(_e),null,{default:o(()=>[t("div",pt,[s(e(ve),{class:"mr-4 dark:text-gray-200"},{default:o(()=>[gt]),_:1}),s(e(he),{modelValue:e(S),"onUpdate:modelValue":a[5]||(a[5]=r=>re(S)?S.value=r:null),class:g(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",e(S)?"bg-discord-red-500":"bg-gray-500"])},{default:o(()=>[t("span",{class:g(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",e(S)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})])]),_:1})]),_:1})]),(l(!0),m(M,null,z((H=e(i))==null?void 0:H.custom,(u,r)=>(l(),m("li",{key:r},[s(e(X),{"default-open":!0},{default:o(({open:c})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",mt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",vt,h(c?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,_t),t("span",ht,h(u.name),1)])]),_:2},1024),s(e(ee),{as:"ul"},{default:o(()=>[(l(!0),m(M,null,z(u.files,($,oe)=>{var le;return l(),m("li",{key:oe},[s(j,{to:{name:"docs-source-tag-category-file",params:{source:(le=e(E))==null?void 0:le.id,tag:e(L),category:r,file:oe}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[6]||(a[6]=jt=>p.value=!1)},{default:o(()=>[t("span",bt,h(typeof $=="object"?$.name:$),1)]),_:2},1032,["to"])])}),128))]),_:2},1024)]),_:2},1024)]))),128)),(se=e(I))!=null&&se.length?(l(),k(e(X),{key:0,as:"li","default-open":!0},{default:o(({open:u})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",xt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":u},[t("span",kt,h(u?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:u}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!u}]),"aria-hidden":"true"},null,8,["class"])],8,yt),wt])]),_:2},1024),s(e(ee),{as:"ul"},{default:o(()=>[(l(!0),m(M,null,z(e(I),r=>{var c;return l(),m("li",{key:r.name},[s(j,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:(c=e(E))==null?void 0:c.id,tag:e(L),class:r.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[7]||(a[7]=$=>p.value=!1)},{default:o(()=>[t("span",$t,h(r.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):V("",!0),(ae=e(N))!=null&&ae.length?(l(),k(e(X),{key:1,as:"li","default-open":!0},{default:o(({open:u})=>[s(e(Z),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",Ct,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":u},[t("span",Vt,h(u?"Shrink":"Expand"),1),s(v,{class:g(["inline-block",{hidden:u}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:g(["inline-block",{hidden:!u}]),"aria-hidden":"true"},null,8,["class"])],8,Tt),Et])]),_:2},1024),s(e(ee),{as:"ul"},{default:o(()=>[(l(!0),m(M,null,z(e(N),r=>{var c;return l(),m("li",{key:r.name},[s(j,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:(c=e(E))==null?void 0:c.id,tag:e(L),typedef:r.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[8]||(a[8]=$=>p.value=!1)},{default:o(()=>[t("span",Ft,h(r.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):V("",!0)])])])],2)],64)}}}),St={class:"lg:flex mx-auto w-full max-w-screen-2xl"},Mt={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Rt=D(" Couldn't load the documentation data. "),It=te({setup(Q){const w=be(),n=xe(),_=ye(),{Ctrl_K:W}=Ee({passive:!1,onEventFired(i){i.ctrlKey&&i.key==="k"&&i.type==="keydown"&&i.preventDefault()}}),C=Fe({[f.id]:f,main:f,[ne.id]:ne,[ie.id]:ie,[de.id]:de,[ue.id]:ue}),p=J(!1),b=y(()=>_.state.source),U=y(()=>_.state.tag),E=y(()=>_.state.docs);Be(()=>{const i=document.getElementById("container");Se(i,"scroll",()=>{i&&i.scrollTop>300?p.value=!0:p.value=!1})}),ke(W,()=>{var i;(i=document.getElementById("search"))==null||i.focus()});const L=async()=>{var i,A,F,B,T,I,N,G,K,O,P,Y,d,a,v,x,q,j,H;if(n.path!=="/"){if(n.params.source&&n.params.tag&&(((i=E.value)==null?void 0:i.id)!==C[n.params.source].id||((A=E.value)==null?void 0:A.tag)!==n.params.tag)&&await _.dispatch({type:"fetchDocs",inputSource:(F=C[n.params.source])!=null?F:f,inputTag:(B=n.params.tag)!=null?B:U.value}),n.params.source&&C[n.params.source])_.commit({type:"setSource",source:C[n.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:f.id,tag:f.defaultTag,category:f.defaultFile.category,file:f.defaultFile.id}});if(n.params.tag)_.commit({type:"setTag",tag:n.params.tag}),_.commit({type:"setSource",source:C[n.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:(I=(T=b.value)==null?void 0:T.id)!=null?I:f.id,tag:((N=b.value)==null?void 0:N.recentTag)||((G=b.value)==null?void 0:G.defaultTag),category:(O=(K=b.value)==null?void 0:K.defaultFile.category)!=null?O:f.defaultFile.category,file:(Y=(P=b.value)==null?void 0:P.defaultFile.id)!=null?Y:f.defaultFile.id}});if(!n.params.file&&!n.params.class&&!n.params.typedef&&n.name!=="docs-source-tag-search")return w.replace({name:"docs-source-tag-category-file",params:{source:(a=(d=b.value)==null?void 0:d.id)!=null?a:f.id,tag:(v=U.value)!=null?v:f.defaultTag,category:(q=(x=b.value)==null?void 0:x.defaultFile.category)!=null?q:f.defaultFile.category,file:(H=(j=b.value)==null?void 0:j.defaultFile.id)!=null?H:f.defaultFile.id}})}};return Me(()=>void L()),(i,A)=>{const F=we("router-view");return l(),m("div",null,[t("div",St,[s(Bt),e(E)?(l(),k(F,{key:i.$route.path})):e(ce)?(l(),m("div",Mt,[Rt,t("pre",null,h(e(ce).toString()),1)])):(l(),k(De,{key:2}))]),p.value?(l(),k(Oe,{key:0})):V("",!0)])}}});export{It as default};
