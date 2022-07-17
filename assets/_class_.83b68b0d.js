import{d as P,u as z,e as F,f as O,h as f,l as J,o as e,c as n,a as r,b as m,p as L,z as v,x,m as l,q as t,t as h,F as y,r as R,a2 as ke,a3 as xe,a4 as $e,a5 as Te,s as $,n as D,g as we,i as V,w as Me,v as Le,$ as Ce,E as He,k as Ee}from"./index.3fedfa05.js";import{m as q,_ as K,H as X}from"./markdown.d7943e2d.js";import{c as B,_ as U,a as ee,p as je,t as S,b as Z,d as Y}from"./See.f72203cf.js";import{_ as De,a as Ae}from"./chevron-right.51d0963e.js";import{r as G,a as Q,i as W}from"./headlessui.esm.2d443e5c.js";import{u as N}from"./ReducedMotion.8647bc05.js";const Ze=["id"],qe={class:"flex items-center"},Be={class:"inline-block mr-2"},Se={class:"text-gray-200 text-sm font-semibold uppercase pt-6"},Pe={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Ie=["innerHTML"],Ve={class:"grid pl-2.5"},Ne=["innerHTML"],Re=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),ze=P({props:{event:null},setup(s){const u=s,g=z(),T=F(),C=O(),b=f(()=>C.state.docs),o=f(()=>q(B(u.event.description,b.value,g,T))),w=f(()=>typeof u.event.deprecated=="string"?q(B(u.event.deprecated,b.value,g,T)):"");return(E,_)=>{var H;const p=J("router-link");return e(),n(y,null,[r("div",{id:`doc-for-e-${s.event.name}`,class:"scroll-to mb-8"},[m(K,{class:"float-right mt-8",meta:s.event.meta},null,8,["meta"]),r("div",qe,[r("h3",Be,[m(p,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${s.event.name}`}}},{default:L(()=>[v(x(s.event.name),1)]),_:1},8,["to"])]),r("span",Se,[s.event.deprecated?(e(),n("span",Pe,"Deprecated")):l("",!0)])]),s.event.deprecated&&t(w)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(w)},null,8,Ie)):l("",!0),r("div",Ve,[r("p",{class:"noprose",innerHTML:t(o)},null,8,Ne),s.event.params&&s.event.params.length?(e(),h(U,{key:0,parameters:s.event.params},null,8,["parameters"])):l("",!0),(H=s.event.see)!=null&&H.length?(e(),h(ee,{key:1,see:s.event.see},null,8,["see"])):l("",!0)])],8,Ze),Re],64)}}}),Fe={class:"grid"},Oe={class:"overflow-x-auto lg:custom-scroll"},Je={class:"relative"},Ke={class:"my-0 javascript"},Ue=["innerHTML"],Ge=P({props:{code:null},setup(s){const u=s,g=R(),T=R(!1),C=ke(E=>{E(),T.value=!1},1e3),{show:b,hide:o}=xe(g,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),w=async()=>{try{await navigator.clipboard.writeText(u.code),b()}catch{}T.value=!0,C(o)};return(E,_)=>{const p=$e,H=Te;return e(),n("div",Fe,[r("div",Oe,[r("div",Je,[r("pre",Ke,[r("code",{innerHTML:t(X).highlight(s.code,{language:"javascript"}).value},null,8,Ue)]),r("button",{ref_key:"copyButton",ref:g,class:"absolute right-0 top-0 mt-4 mr-4 inline-block hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200","aria-label":"Copy code"},[T.value?(e(),h(H,{key:1,class:"fill-current text-discord-green-600 dark:text-discord-green-500","aria-hidden":"true",onClick:w})):(e(),h(p,{key:0,class:"fill-current text-gray-700 dark:text-gray-200","aria-hidden":"true",onClick:w}))],512)])])])}}});const Qe=["id"],We={class:"flex items-center"},Xe={class:"inline-block mr-2"},Ye=v(") "),et={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},tt={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},st={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},nt={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ot={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},rt=["innerHTML"],lt={class:"grid pl-2.5"},at=["innerHTML"],ct={class:"font-semibold mt-3"},it=v(" Returns: "),dt={key:0},ut={key:1},mt={class:"mt-3"},pt=["innerHTML"],ht={key:1,class:"font-semibold"},_t=v(" Throws: "),ft={key:2,class:"font-semibold"},yt=v(" Emits: "),vt={key:0},bt={key:3,class:"font-semibold mt-3"},gt=v(" Examples: "),kt=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),xt=P({props:{method:null},setup(s){const u=s,g=z(),T=F(),C=O(),b=f(()=>C.state.docs),o=f(()=>{var k;return q(B((k=u.method.description)!=null?k:"No description.",b.value,g,T))}),w=f(()=>typeof u.method.deprecated=="string"?q(B(u.method.deprecated,b.value,g,T)):""),E=f(()=>{var k;return q(B((k=u.method.returns.description)!=null?k:u.method.returnsDescription,b.value,g,T))}),_=f(()=>u.method.params?u.method.params.filter(k=>!k.name.includes(".")):null),p=f(()=>u.method.emits?u.method.emits.map(k=>je(k,b.value)):null),H=f(()=>`${u.method.scope==="static"?"s-":""}${u.method.name}`);return(k,c)=>{var a,j;const i=J("router-link");return e(),n(y,null,[r("div",{id:`doc-for-${t(H)}`,class:"scroll-to mb-8"},[m(K,{class:"float-right mt-9",meta:s.method.meta},null,8,["meta"]),r("div",We,[r("h3",Xe,[m(i,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(H)}}},{default:L(()=>[v(" ."+x(s.method.name)+"(",1),(e(!0),n(y,null,$(t(_),d=>(e(),n("span",{key:d.name,class:D(["method-param text-discord-blurple-560 dark:text-discord-blurple-300 opacity-90 dark:opacity-75",d.optional?"optional":""])},x(d.variable?"...":"")+x(d.name),3))),128)),Ye]),_:1},8,["to"])]),r("span",et,[s.method.scope==="static"?(e(),n("span",tt,"Static")):l("",!0),s.method.abstract?(e(),n("span",st,"Abstract")):l("",!0),s.method.deprecated?(e(),n("span",nt,"Deprecated")):l("",!0),s.method.access==="private"?(e(),n("span",ot,"Private")):l("",!0)])]),s.method.deprecated&&t(w)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(w)},null,8,rt)):l("",!0),r("div",lt,[r("p",{class:"noprose",innerHTML:t(o)},null,8,at),s.method.params?(e(),h(U,{key:0,parameters:s.method.params},null,8,["parameters"])):l("",!0),r("div",ct,[it,s.method.returns&&Array.isArray(s.method.returns)?(e(),n("span",dt,[t(b).meta.format>=30?(e(),n(y,{key:0},[Array.isArray(s.method.returns[0])?(e(!0),n(y,{key:0},$(s.method.returns.flat(),d=>(e(),h(Z,{key:t(S)(d),names:d},null,8,["names"]))),128)):(e(!0),n(y,{key:1},$(s.method.returns.flat(),d=>{var I;return e(),h(Z,{key:t(S)(d),names:(I=d.types)==null?void 0:I.flat(),variable:d.variable,nullable:d.nullable},null,8,["names","variable","nullable"])}),128))],64)):(e(!0),n(y,{key:1},$(s.method.returns,d=>(e(),h(Z,{key:t(S)(d),names:d},null,8,["names"]))),128))])):s.method.returns&&!Array.isArray(s.method.returns)?(e(),n("span",ut,[(e(!0),n(y,null,$(s.method.returns.types,d=>(e(),h(Z,{key:t(S)(d),names:d,variable:d.variable,nullable:d.nullable},null,8,["names","variable","nullable"]))),128))])):(e(),h(Y,{key:2,type:["void"]})),r("div",mt,[s.method.returns&&!Array.isArray(s.method.returns)&&s.method.returns.description||s.method.returnsDescription?(e(),n("p",{key:0,class:"noprose",innerHTML:t(E)},null,8,pt)):l("",!0)])]),s.method.throws?(e(),n("div",ht,[_t,(e(!0),n(y,null,$(s.method.throws,d=>(e(),h(Z,{key:d,names:d},null,8,["names"]))),128))])):l("",!0),t(p)&&t(p).length?(e(),n("div",ft,[yt,t(p).length>1?(e(),n("ul",vt,[(e(!0),n(y,null,$(t(p),d=>(e(),n("li",{key:d.text},[m(i,{to:d.link},{default:L(()=>[v(x(d.text),1)]),_:2},1032,["to"])]))),128))])):(e(),h(i,{key:1,to:t(p)[0].link},{default:L(()=>[v(x(t(p)[0].text),1)]),_:1},8,["to"]))])):l("",!0),(a=s.method.examples)!=null&&a.length?(e(),n("div",bt,[gt,(e(!0),n(y,null,$(s.method.examples,d=>(e(),h(Ge,{key:d,code:d.replace(/(`{3,})(.+)?/gm,"").trim()},null,8,["code"]))),128))])):l("",!0),(j=s.method.see)!=null&&j.length?(e(),h(ee,{key:4,see:s.method.see},null,8,["see"])):l("",!0)])],8,Qe),kt],64)}}});function A(s){return`${s.scope==="static"?"s-":""}${s.name}`}const $t={key:0},Tt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},wt=["aria-expanded"],Mt={class:"sr-only"},Lt=v(" Properties "),Ct=["onClick"],Ht={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Et={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},jt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},Dt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},At={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Zt={key:1},qt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Bt=["aria-expanded"],St={class:"sr-only"},Pt=v(" Methods "),It=["onClick"],Vt={class:"space-x-1 text-gray-200 text-sm font-semibold uppercase"},Nt={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},Rt={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},zt={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Ft={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Ot={key:2},Jt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Kt=["aria-expanded"],Ut={class:"sr-only"},Gt=v(" Events "),Qt=["onClick"],Wt={key:0,class:"text-gray-200 text-sm font-semibold uppercase inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},Xt=P({props:{properties:null,methods:null,events:null},setup(s){const u=s,T=we(Le).greater("lg"),C=R(!1),b=f(()=>{var _;return V.value?u.properties:(_=u.properties)==null?void 0:_.filter(p=>p.access!=="private")}),o=f(()=>{var _;return V.value?u.methods:(_=u.methods)==null?void 0:_.filter(p=>p.access!=="private")}),w=f(()=>{var _;return V.value?u.events:(_=u.events)==null?void 0:_.filter(p=>p.access!=="private")}),E=_=>{const p=document.getElementById(`doc-for-${_}`);p==null||p.scrollIntoView({behavior:N.value?void 0:"smooth",block:"start"})};return Me(T,()=>C.value=!0,{immediate:!0}),(_,p)=>{const H=De,k=Ae,c=J("router-link");return e(),n("div",{class:D(["grid sm:grid-cols-2 mb-10",s.events&&s.events.length?"md:grid-cols-3":null])},[t(b)&&t(b).length?(e(),n("div",$t,[m(t(G),{"default-open":C.value},{default:L(({open:i})=>[m(t(Q),{class:"focus:outline-none",tabindex:"-1"},{default:L(()=>[r("div",Tt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Mt,x(i?"Shrink":"Expand"),1),m(H,{class:D(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),m(k,{class:D(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,wt),Lt])]),_:2},1024),m(t(W),{as:"ul",class:"no-list !mt-0 pl-2"},{default:L(()=>[(e(!0),n(y,null,$(t(b),a=>(e(),n("li",{key:t(A)(a),class:"cursor-pointer mb-14 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:j=>E(t(A)(a))},[m(c,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(A)(a)}},class:"mx-2"},{default:L(()=>[v(x(a.name),1)]),_:2},1032,["to"]),r("span",Ht,[a.scope==="static"?(e(),n("span",Et,"S")):l("",!0),a.abstract?(e(),n("span",jt,"A")):l("",!0),a.deprecated?(e(),n("span",Dt,"D")):l("",!0),a.access==="private"?(e(),n("span",At,"P")):l("",!0)])],8,Ct))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0),t(o)&&t(o).length?(e(),n("div",Zt,[m(t(G),{"default-open":C.value},{default:L(({open:i})=>[m(t(Q),{class:"focus:outline-none",tabindex:"-1"},{default:L(()=>[r("div",qt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",St,x(i?"Shrink":"Expand"),1),m(H,{class:D(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),m(k,{class:D(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Bt),Pt])]),_:2},1024),m(t(W),{as:"ul",class:"no-list !mt-0 pl-2"},{default:L(()=>[(e(!0),n(y,null,$(t(o),a=>(e(),n("li",{key:t(A)(a),class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:j=>E(t(A)(a))},[m(c,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(A)(a)}},class:"mx-2"},{default:L(()=>[v(x(a.name),1)]),_:2},1032,["to"]),r("span",Vt,[a.scope==="static"?(e(),n("span",Nt,"S")):l("",!0),a.abstract?(e(),n("span",Rt,"A")):l("",!0),a.deprecated?(e(),n("span",zt,"D")):l("",!0),a.access==="private"?(e(),n("span",Ft,"P")):l("",!0)])],8,It))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0),t(w)&&t(w).length?(e(),n("div",Ot,[m(t(G),{"default-open":C.value},{default:L(({open:i})=>[m(t(Q),{class:"focus:outline-none",tabindex:"-1"},{default:L(()=>[r("div",Jt,[r("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":i},[r("span",Ut,x(i?"Shrink":"Expand"),1),m(H,{class:D(["inline-block",{hidden:i}]),"aria-hidden":"true"},null,8,["class"]),m(k,{class:D(["inline-block",{hidden:!i}]),"aria-hidden":"true"},null,8,["class"])],8,Kt),Gt])]),_:2},1024),m(t(W),{as:"ul",class:"no-list !mt-0 pl-2"},{default:L(()=>[(e(!0),n(y,null,$(t(w),a=>(e(),n("li",{key:a.name,class:"cursor-pointer border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500",onClick:j=>E(`e-${a.name}`)},[m(c,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${a.name}`}},class:"mx-2"},{default:L(()=>[v(x(a.name),1)]),_:2},1032,["to"]),a.deprecated?(e(),n("span",Wt,"D")):l("",!0)],8,Qt))),128))]),_:1})]),_:1},8,["default-open"])])):l("",!0)],2)}}}),Yt=["id"],es={class:"flex items-center"},ts={class:"inline-block mr-2"},ss={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},ns={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},os={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},rs={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ls={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},as=["innerHTML"],cs={class:"grid pl-2.5"},is=["innerHTML"],ds={class:"font-semibold mt-3"},us=v(" Type: "),ms={key:1,class:"mt-3"},ps=v(" Default: "),hs=r("div",{class:"w-full pr-32 lg:pr-96"},[r("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1),_s=P({props:{prop:null},setup(s){const u=s,g=z(),T=F(),C=O(),b=f(()=>C.state.docs),o=f(()=>{var _;return q((_=B(u.prop.description,b.value,g,T))!=null?_:"")}),w=f(()=>typeof u.prop.deprecated=="string"?q(B(u.prop.deprecated,b.value,g,T)):""),E=f(()=>`${u.prop.scope==="static"?"s-":""}${u.prop.name}`);return(_,p)=>{var k;const H=J("router-link");return e(),n(y,null,[r("div",{id:`doc-for-${t(E)}`,class:"scroll-to mb-8"},[m(K,{class:"float-right mt-8",meta:s.prop.meta},null,8,["meta"]),r("div",es,[r("h3",ts,[m(H,{to:{name:"docs-source-tag-class-class",query:{scrollTo:t(E)}}},{default:L(()=>[v("."+x(s.prop.name),1)]),_:1},8,["to"])]),r("span",ss,[s.prop.scope==="static"?(e(),n("span",ns,"Static")):l("",!0),s.prop.readonly?(e(),n("span",os,"Read-only")):l("",!0),s.prop.deprecated?(e(),n("span",rs,"Deprecated")):l("",!0),s.prop.access==="private"?(e(),n("span",ls,"Private")):l("",!0)])]),s.prop.deprecated&&t(w)?(e(),n("p",{key:0,class:"noprose warn !mt-1.5 !mb-2.5",innerHTML:t(w)},null,8,as)):l("",!0),r("div",cs,[r("p",{class:"noprose",innerHTML:t(o)},null,8,is),s.prop.props&&s.prop.props.length>0?(e(),h(U,{key:0,parameters:s.prop.props},null,8,["parameters"])):l("",!0),r("div",ds,[us,(e(!0),n(y,null,$(s.prop.type,c=>(e(),h(Z,{key:t(S)(c),names:c,nullable:s.prop.nullable},null,8,["names","nullable"]))),128))]),s.prop.default?(e(),n("div",ms,[ps,r("code",null,x(s.prop.default),1)])):l("",!0),(k=s.prop.see)!=null&&k.length?(e(),h(ee,{key:2,see:s.prop.see},null,8,["see"])):l("",!0)])],8,Yt),hs],64)}}}),fs={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},ys={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},vs=["id"],bs={class:"font-bold !mt-3"},gs={key:0},ks=v(" extends "),xs={key:1},$s=v(" implements "),Ts=["innerHTML"],ws={key:1,class:"grid"},Ms=r("h2",{class:"!mt-3"},"Constructor",-1),Ls=v(");"),Cs={key:2,class:"!mt-4"},Hs={key:3},Es={key:4},Ss=P({setup(s){var k;X.configure({ignoreUnescapedHTML:!0});const u=z(),g=F(),T=O(),C=R(),b=f(()=>T.state.docs),o=(k=b.value)==null?void 0:k.classes.find(c=>c.name===g.params.class),w=f(()=>q(B(o==null?void 0:o.description,b.value,u,g))),E=f(()=>!(o!=null&&o.construct)||!o.construct.params?null:o.construct.params.filter(c=>!c.name.includes("."))),_=f(()=>{if(!(o!=null&&o.props))return null;let c=o.props;return V.value||(c=c.filter(i=>i.access!=="private")),c.sort((i,a)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${a.scope==="static"?"ZZZ":""}${a.name}`))}),p=f(()=>{if(!(o!=null&&o.methods))return null;let c=o.methods;return V.value||(c=c.filter(i=>i.access!=="private")),c.sort((i,a)=>`${i.scope==="static"?"ZZZ":""}${i.name}`.localeCompare(`${a.scope==="static"?"ZZZ":""}${a.name}`))}),H=c=>c;return Ce({title:f(()=>{var c;return`discord.js | ${(c=o==null?void 0:o.name)!=null?c:""}`})}),He(()=>{const c=document.getElementById(`doc-for-${g.query.scrollTo}`);c==null||c.scrollIntoView({behavior:N.value?void 0:"smooth",block:"start"});const i=document.getElementById("container");!g.query.scrollTo&&i&&i.scrollTop>200&&i.scrollTo({top:0,behavior:N.value?void 0:"smooth"}),C.value&&X.highlightElement(C.value)}),Ee(()=>g.query.scrollTo,()=>{const c=document.getElementById(`doc-for-${g.query.scrollTo}`);c==null||c.scrollIntoView({behavior:N.value?void 0:"smooth",block:"start"})}),(c,i)=>{var a,j,d,I,te,se,ne,oe,re,le,ae,ce,ie,de,ue,me,pe,he,_e,fe,ye;return e(),n("div",fs,[m(K,{class:"float-right mt-2",meta:(a=t(o))==null?void 0:a.meta},null,8,["meta"]),r("div",ys,[r("h1",{id:`doc-for-${(j=t(o))==null?void 0:j.name}`,class:"!mb-3"},x((d=t(o))==null?void 0:d.name),9,vs),r("p",bs,[(I=t(o))!=null&&I.extends?(e(),n("span",gs,[ks,typeof((te=t(o))==null?void 0:te.extends[0])=="string"?(e(),h(Y,{key:0,type:H((se=t(o))==null?void 0:se.extends)},null,8,["type"])):(e(!0),n(y,{key:1},$((ne=t(o))==null?void 0:ne.extends,M=>(e(),h(Z,{key:t(S)(M),names:M},null,8,["names"]))),128))])):l("",!0),(oe=t(o))!=null&&oe.implements?(e(),n("span",xs,[$s,typeof((re=t(o))==null?void 0:re.implements[0])=="string"?(e(),h(Y,{key:0,type:H((le=t(o))==null?void 0:le.implements)},null,8,["type"])):(e(!0),n(y,{key:1},$((ae=t(o))==null?void 0:ae.implements,M=>(e(),h(Z,{key:t(S)(M),names:M},null,8,["names"]))),128))])):l("",!0)]),(ce=t(o))!=null&&ce.description?(e(),n("p",{key:0,class:"!mb-2",innerHTML:t(w)},null,8,Ts)):l("",!0),(ie=t(o))!=null&&ie.construct?(e(),n("div",ws,[Ms,r("pre",{ref_key:"codeblock",ref:C,class:"javascript"},[r("code",null,[v(x(((de=t(b))==null?void 0:de.global)==="discord.js"?"new ":"")+x((ue=t(o))==null?void 0:ue.construct.name)+"(",1),(e(!0),n(y,null,$(t(E),(M,ge)=>{var ve,be;return e(),n("span",{key:M.name},x(M.name)+x(((be=(ve=t(E))==null?void 0:ve.length)!=null?be:1)-1!==ge?", ":""),1)}),128)),Ls])],512),t(o).construct.params?(e(),h(U,{key:0,parameters:t(o).construct.params},null,8,["parameters"])):l("",!0)])):l("",!0),m(Xt,{class:"mt-3",properties:(me=t(o))==null?void 0:me.props,methods:(pe=t(o))==null?void 0:pe.methods,events:(he=t(o))==null?void 0:he.events},null,8,["properties","methods","events"]),t(_)&&t(_).length?(e(),n("h2",Cs,"Properties")):l("",!0),(e(!0),n(y,null,$(t(_),M=>(e(),h(_s,{key:t(A)(M),prop:M},null,8,["prop"]))),128)),t(p)&&t(p).length?(e(),n("h2",Hs,"Methods")):l("",!0),(e(!0),n(y,null,$(t(p),M=>(e(),h(xt,{key:t(A)(M),method:M},null,8,["method"]))),128)),((_e=t(o))==null?void 0:_e.events)&&((fe=t(o))==null?void 0:fe.events.length)?(e(),n("h2",Es,"Events")):l("",!0),(e(!0),n(y,null,$((ye=t(o))==null?void 0:ye.events,M=>(e(),h(ze,{key:`e-${M.name}`,event:M},null,8,["event"]))),128))])])}}});export{Ss as default};
