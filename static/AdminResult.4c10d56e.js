import{_ as b,a as x,b as y}from"./BaseTable.b70b0b74.js";import{_ as f,o as a,c as _,b as e,d as A,r as l,w as o,a as p,t as k,j as R,F as T,s as $,f as d,T as w,e as g}from"./index.82d5e3f7.js";import{_ as D}from"./TheSideBar.d2a6b764.js";import{_ as F}from"./BaseScore.de803547.js";import{_ as E}from"./BaseTag.b0fa9c0b.js";import{_ as C}from"./user.ef8b3aab.js";import"./BaseSvgIcon.3e342ce6.js";const M={};function N(v,s){const n=b;return a(),_("div",null,[e(n,{class:"mb-4",title:"\u5E74\u5EA6"}),e(n,{class:"mb-4",title:"\u6B21\u5225"}),e(n,{class:"mb-4",title:"\u985E\u578B"})])}const V=f(M,[["render",N],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminResultFilter.vue"]]),S={class:"mx-4"},O=p("img",{class:"inline-block rounded-full w-16 max-w-none h-16 mr-4",src:C,alt:"user"},null,-1),j=A({__name:"AdminResultMain",setup(v){const s=[{name:"\u59D3\u540D",key:"name"},{name:"\u90E8\u9580",key:"department",width:"28%"},{name:"\u8A55\u5206",key:"scores",width:"56%"}],n=l([{key:"1",name:"\u8A31\u65BE\u65DF",department:"O2 meta \u7D44",scores:[1,4,3,3,5]},{key:"2",name:"\u5289\u4E8E\u7444",department:"\u5C08\u6848\u7D44",scores:[3,2,5,4,2]}]);return(h,B)=>{const r=E,m=F,i=x;return a(),_("div",S,[e(i,{fields:s,items:n.value},{name:o(t=>[p("div",null,[O,p("span",null,k(t.data),1)])]),department:o(t=>[e(r,{variant:"theme"},{default:o(()=>[R(k(t.data),1)]),_:2},1024)]),scores:o(t=>[(a(!0),_(T,null,$(t.data,(u,c)=>(a(),d(m,{key:c,variant:"theme",score:u},null,8,["score"]))),128))]),_:1},8,["items"])])}}}),z=f(j,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminResultMain.vue"]]),L={class:"absolute w-full h-full"},U=A({__name:"AdminResult",setup(v){const s=l(!1),n=l(""),h=[{name:"download",icon:"download",function:()=>{}},{name:"filter",icon:"filter",function:()=>{s.value=!0,n.value="filter"}}];return(B,r)=>{const m=z,i=D,t=V,u=y;return a(),_("div",L,[e(m),e(w,{name:"sidebar",mode:"out-in",appear:""},{default:o(()=>[e(i,{items:h})]),_:1}),e(w,{name:"modal",mode:"out-in"},{default:o(()=>[s.value?(a(),d(u,{key:0,"is-active":s.value,"onUpdate:is-active":r[0]||(r[0]=c=>s.value=c),size:"side"},{default:o(()=>[n.value==="filter"?(a(),d(t,{key:0})):g("v-if",!0)]),_:1},8,["is-active"])):g("v-if",!0)]),_:1})])}}}),Q=f(U,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminResult.vue"]]);export{Q as default};
