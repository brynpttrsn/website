import{d as m,h as s,$ as d,G as p,o as u,c as f,b as _,q as c,a as h,e as x,f as y}from"./index.d3343a60.js";import{m as g,_ as v}from"./markdown.88cb3255.js";import{u as $}from"./ReducedMotion.78fcaab1.js";const k={class:"prose prose-discord dark:prose-light mx-auto py-16 px-4 break-words-legacy sm:px-8 lg:py-8 w-full max-w-4xl lg:max-w-full"},w=["innerHTML"],E=m({setup(B){const n=x(),a=y(),l=s(()=>a.state.docs),r=s(()=>a.state.file),i=s(()=>{var o;const e=(o=l.value)==null?void 0:o.custom[n.params.category].files[n.params.file];if(!e)return;a.commit({type:"setFile",file:e});let t;return e.type==="md"?t=e.content:t=`# ${e.name}
\`\`\`${e.type}
${e.content}
\`\`\``,g(t)});return d({title:s(()=>{var e,t;return`discord.js | ${(t=(e=r.value)==null?void 0:e.name)!=null?t:""}`})}),p(()=>{const e=document.getElementById("container");e&&e.scrollTop>200&&e.scrollTo({top:0,behavior:$.value?void 0:"smooth"})}),(e,t)=>{var o;return u(),f("div",k,[_(v,{class:"float-right mt-2",path:(o=c(r))==null?void 0:o.path},null,8,["path"]),h("div",{innerHTML:c(i)},null,8,w)])}}});export{E as default};
