import{o as n,c as t,a as o,d as Y,u as q,e as z,f as D,i as T,r as K,v as _,q as C,b as u,t as b,x as w,s as e,F as M,n as P,p as c,G as J}from"./index.980e5b33.js";import{a as O,i as Q,r as U}from"./headlessui.esm.f3af27ab.js";import{c as G,d as W,t as B,_ as H,b as L,a as X}from"./See.45b15d4c.js";import{m as I,_ as Z}from"./markdown.0e21a40f.js";const ee={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},se=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1),ne=[se];function te(a,f){return n(),t("svg",ee,ne)}var oe={name:"heroicons-outline-minus",render:te};const re={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1),le=[ae];function ie(a,f){return n(),t("svg",re,le)}var ce={name:"heroicons-outline-plus",render:ie};const ue={class:"flex gap-1 items-center -ml-1"},de={class:"font-semibold"},_e=["aria-expanded"],me={class:"sr-only"},pe=["innerHTML"],he=Y({props:["names","variable","nullable"],setup(a){var r;const f=a,k=q(),A=z(),x=D(),s=T(()=>x.state.docs),m=K((r=s.value)==null?void 0:r.typedefs.find(p=>p.name===f.names[0][0])),v=T(()=>{var p,h;return I((h=G((p=m.value)==null?void 0:p.description,s.value,k,A))!=null?h:"")});return(p,h)=>{const g=ce,$=oe;return m.value?(n(),_(e(U),{key:0,as:"div"},{default:C(({open:d})=>[u(e(O),{as:"div",class:"focus:outline-none"},{default:C(()=>[o("div",ue,[o("span",de,b(a.nullable?"?":"")+b(a.variable?"...":""),1),(n(!0),t(M,null,w(a.names,l=>(n(),_(W,{key:e(B)(l),type:l},null,8,["type"]))),128)),o("button",{class:"leading-3 focus:outline-none","aria-expanded":d},[o("span",me,b(d?"Shrink":"Expand"),1),u(g,{class:P(["inline-block",{hidden:d}]),"aria-hidden":"true"},null,8,["class"]),u($,{class:P(["inline-block",{hidden:!d}]),"aria-hidden":"true"},null,8,["class"])],8,_e)])]),_:2},1024),u(e(Q),null,{default:C(()=>{var l,y;return[e(v)?(n(),t("div",{key:0,innerHTML:e(v)},null,8,pe)):c("",!0),(l=m.value)!=null&&l.props?(n(),_(H,{key:1,parameters:(y=m.value)==null?void 0:y.props},null,8,["parameters"])):c("",!0)]}),_:1})]),_:1})):(n(),_(L,{key:1,names:a.names},null,8,["names"]))}}}),fe={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},ve={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},ye=["id"],ke=["innerHTML"],xe=o("h2",null,"Types",-1),ge={id:"typedef-types"},$e={key:2},be=o("h2",null,"Properties",-1),we={key:3},Me=o("h2",null,"Parameters",-1),Be={key:4},Te=o("h2",null,"Returns",-1),Ae={key:0},Ce={key:1},Ne=Y({setup(a){var v;const f=q(),k=z(),A=D(),x=T(()=>A.state.docs),s=(v=x.value)==null?void 0:v.typedefs.find(r=>r.name===k.params.typedef),m=T(()=>I(G(s==null?void 0:s.description,x.value,f,k)));return J(()=>{const r=document.getElementById("container");r&&r.scrollTop>200&&r.scrollTo({top:0,behavior:"smooth"})}),(r,p)=>{var h,g,$,d,l,y,R,E,N,S,V,j,F;return n(),t("div",fe,[u(Z,{class:"float-right mt-2",meta:(h=e(s))==null?void 0:h.meta},null,8,["meta"]),o("div",ve,[o("h1",{id:`doc-for-${(g=e(s))==null?void 0:g.name}`},b(($=e(s))==null?void 0:$.name),9,ye),(d=e(s))!=null&&d.description?(n(),t("p",{key:0,innerHTML:e(m)},null,8,ke)):c("",!0),(y=(l=e(s))==null?void 0:l.see)!=null&&y.length?(n(),_(X,{key:1,see:(R=e(s))==null?void 0:R.see},null,8,["see"])):c("",!0),xe,o("ul",ge,[(n(!0),t(M,null,w((E=e(s))==null?void 0:E.type,i=>(n(),t("li",{key:e(B)(i)},[u(he,{class:"!m-0",names:i},null,8,["names"])]))),128))]),((N=e(s))==null?void 0:N.props)&&((S=e(s))==null?void 0:S.props.length)?(n(),t("div",$e,[be,u(H,{parameters:e(s).props},null,8,["parameters"])])):c("",!0),((V=e(s))==null?void 0:V.params)&&((j=e(s))==null?void 0:j.params.length)?(n(),t("div",we,[Me,u(H,{parameters:e(s).params},null,8,["parameters"])])):c("",!0),(F=e(s))!=null&&F.returns?(n(),t("div",Be,[Te,o("p",null,[e(s).returns&&Array.isArray(e(s).returns)?(n(),t("span",Ae,[(n(!0),t(M,null,w(e(s).returns,i=>(n(),_(L,{key:e(B)(i),names:i},null,8,["names"]))),128))])):e(s).returns&&!Array.isArray(e(s).returns)?(n(),t("span",Ce,[(n(!0),t(M,null,w(e(s).returns.types||e(s).returns,i=>(n(),_(L,{key:e(B)(i),names:i,variable:e(s).returns.variable,nullable:e(s).returns.nullable},null,8,["names","variable","nullable"]))),128))])):c("",!0)])])):c("",!0)])])}}});export{Ne as default};
