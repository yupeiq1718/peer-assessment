import{_ as J}from"./TheSideBar.4994e65a.js";import{_ as q,d as F,a as N,z as m,i as $,u as R,l as i,c as h,e as l,f as a,g as x,q as B,t as k,h as t,k as w,j as C,s as z,F as H,C as K,w as O,A as P,b as W,T as E,B as X}from"./index.6deaa61a.js";import{_ as Y}from"./BaseFormTextarea.bbe12c66.js";import{_ as Z}from"./BaseFormScore.07188b4f.js";import{_ as ee}from"./BaseTag.986e51cc.js";import{u as v}from"./questions.ba917b56.js";import{g as L,r as te}from"./data.6ab9a877.js";import{u as ne}from"./users.72a3ff26.js";import"./BaseMessage.00179dea.js";import"./BaseTextarea.3e5bce05.js";import"./vee-validate.esm.939b5ff5.js";import"./BaseScore.d5a5ea75.js";import"./api.b8ed9cc4.js";const se={class:"p-8 bg-white rounded-2xl flex flex-col mb-4"},oe={class:"flex flex-row justify-end items-center duration-500 overflow-hidden"},re=l("hr",{class:"border-2 border-light grow-[1] mx-3"},null,-1),ae=F({__name:"AdminQuestionAnswer",props:{id:{type:Number,required:!0},index:{type:Number,required:!0}},setup(A){const o=A,p=N(),e=m(()=>Number(p.params.roleId)),n=m(()=>v().question({roleId:e.value,id:o.id})),f=$("setToastData",()=>null),c=$("setIsLoading",()=>null),d=async()=>{try{const r=await v().readQuestionnaire(e.value)}catch{}},s=async({roleId:r,id:u})=>{try{c(!0);const Q=await v().deleteQuestion({roleId:r,id:u});f({isActive:!0,variant:"success",message:"\u522A\u9664\u6210\u529F"}),d()}catch{f({isActive:!0,variant:"error",message:"\u522A\u9664\u5931\u6557"})}finally{c(!1)}},_=R(),y=()=>{var r;_.push(`/admin/question/${e.value}/edit/${(r=n.value)==null?void 0:r.id}`)},b=$("setConfirmData",()=>null),I=()=>{b({isActive:!0,confirm:()=>s({roleId:2,id:o.id}),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u522A\u9664\u8A72\u7B46\u8CC7\u6599\uFF1F"})};return(r,u)=>{var D,j,S,V,M;const Q=ee,U=Z,G=Y,T=z;return i(),h("div",null,[l("article",se,[l("label",null,[a(Q,{variant:t(L)(o.index)},{default:x(()=>{var g;return[B(k((g=t(n))==null?void 0:g.tag),1)]}),_:1},8,["variant"]),B(" "+k((D=t(n))==null?void 0:D.content),1)]),((j=t(n))==null?void 0:j.typeId)===1||((S=t(n))==null?void 0:S.typeId)===2?(i(),w(U,{key:0,name:"score",variant:t(L)(o.index),class:"mt-4"},null,8,["variant"])):C("v-if",!0),((V=t(n))==null?void 0:V.typeId)===2||((M=t(n))==null?void 0:M.typeId)===3?(i(),w(G,{key:1,name:"text",placeholder:t(n).textHint,class:"w-full mt-4"},null,8,["placeholder"])):C("v-if",!0)]),l("footer",oe,[re,l("button",{class:"rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500",onClick:u[0]||(u[0]=g=>y())},[a(T,{name:"edit",class:"w-6 h-6"})]),l("button",{class:"rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500",onClick:u[1]||(u[1]=g=>I())},[a(T,{name:"delete",class:"w-6 h-6"})])])])}}}),ie=q(ae,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminQuestionAnswer.vue"]]),ue={class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},ce=F({__name:"AdminQuestionMain",setup(A){const o=N(),p=m(()=>Number(o.params.roleId)),e=m(()=>v().questions(p.value)||[]);return(n,f)=>{const c=ie;return i(),h("article",ue,[(i(!0),h(H,null,K(t(e),(d,s)=>(i(),w(c,{id:d.id,key:d.id,index:s,class:"col-span-1 lg:col-span-2 2xl:col-span-3"},null,8,["id","index"]))),128))])}}}),le=q(ce,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminQuestionMain.vue"]]),me={class:"font-bold text-dark text-sm"},de={key:0,class:"absolute w-full h-full pt-4 px-4"},_e=F({__name:"AdminQuestion",setup(A){const o=R(),p=N(),e=m(()=>Number(p.params.roleId)),n=m(()=>{const s=te.find(_=>_.value===Number(e.value));return`${s==null?void 0:s.text}\u4E92\u8A55\u554F\u5377`}),f=[{name:"create",icon:"plus",function:()=>o.push(`/admin/question/${e.value}/new`)},{name:"filter",icon:"filter",function:()=>o.push(`/admin/question/${e.value}/filter`)}],c=async s=>{try{const _=await v().readQuestionnaire(s)}catch{}},d=m(()=>ne().users);return O(e,()=>c(e.value)),P(()=>{c(e.value)}),(s,_)=>{const y=z,b=le,I=J,r=W("router-view");return i(),h(H,null,[l("span",me,[a(y,{name:"question",class:"w-4 h-4 mr-2"}),B(k(t(n)),1)]),t(d)?(i(),h("div",de,[a(b),a(E,{name:"sidebar",mode:"out-in",appear:""},{default:x(()=>[a(I,{items:f})]),_:1}),a(r,null,{default:x(({Component:u})=>[a(E,{name:"modal",mode:"out-in",appear:""},{default:x(()=>[(i(),w(X(u)))]),_:2},1024)]),_:1})])):C("v-if",!0)],64)}}}),Be=q(_e,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminQuestion.vue"]]);export{Be as default};
