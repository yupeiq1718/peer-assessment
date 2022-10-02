import{_ as J}from"./TheSideBar.705e9465.js";import{_ as q,d as F,a as N,z as c,i as k,u as R,l as s,c as x,e as m,f as u,g as y,q as B,t as C,h as t,k as w,j as b,s as z,F as H,C as K,w as O,A as P,b as W,T as E,B as X}from"./index.c6c19617.js";import{_ as Y}from"./BaseFormTextarea.8b16f0ef.js";import{_ as Z}from"./BaseFormScore.857b94ae.js";import{_ as ee}from"./BaseTag.0bd065e9.js";import{u as p}from"./questions.57021e7f.js";import{g as L,r as te}from"./data.6ab9a877.js";import{u as ne}from"./users.9cbb6080.js";import"./BaseMessage.f4c5d55e.js";import"./BaseTextarea.307185c8.js";import"./vee-validate.esm.b910bb18.js";import"./BaseScore.bd51e175.js";import"./api.51a74389.js";const se={class:"p-8 bg-white rounded-2xl flex flex-col mb-4"},oe={class:"flex flex-row justify-end items-center duration-500 overflow-hidden"},re=m("hr",{class:"border-2 border-light grow-[1] mx-3"},null,-1),ae=F({__name:"AdminQuestionAnswer",props:{id:{type:Number,required:!0},index:{type:Number,required:!0}},setup(I){const o=I,f=N(),e=c(()=>Number(f.params.roleId)),n=c(()=>p().question({roleId:e.value,id:o.id})),v=k("setToastData",()=>null),l=k("setIsLoading",()=>null),d=async()=>{try{const r=await p().readQuestionnaire(e.value)}catch{}},h=async({roleId:r,id:i})=>{try{l(!0);const g=await p().deleteQuestion({roleId:r,id:i});v({isActive:!0,variant:"success",message:"\u522A\u9664\u6210\u529F"}),d()}catch{v({isActive:!0,variant:"error",message:"\u522A\u9664\u5931\u6557"})}finally{l(!1)}},a=R(),_=()=>{var r;a.push(`/admin/question/${e.value}/edit/${(r=n.value)==null?void 0:r.id}`)},Q=k("setConfirmData",()=>null),$=()=>{Q({isActive:!0,confirm:()=>h({roleId:2,id:o.id}),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u522A\u9664\u8A72\u7B46\u8CC7\u6599\uFF1F"})};return(r,i)=>{var D,j,S,V,M;const g=ee,U=Z,G=Y,T=z;return s(),x("div",null,[m("article",se,[m("label",null,[u(g,{variant:t(L)(o.index)},{default:y(()=>{var A;return[B(C((A=t(n))==null?void 0:A.tag),1)]}),_:1},8,["variant"]),B(" "+C((D=t(n))==null?void 0:D.content),1)]),((j=t(n))==null?void 0:j.typeId)===1||((S=t(n))==null?void 0:S.typeId)===2?(s(),w(U,{key:0,name:"score",variant:t(L)(o.index),class:"mt-4"},null,8,["variant"])):b("v-if",!0),((V=t(n))==null?void 0:V.typeId)===2||((M=t(n))==null?void 0:M.typeId)===3?(s(),w(G,{key:1,name:"text",placeholder:t(n).textHint,class:"w-full mt-4"},null,8,["placeholder"])):b("v-if",!0)]),m("footer",oe,[re,m("button",{class:"rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500",onClick:i[0]||(i[0]=A=>_())},[u(T,{name:"edit",class:"w-6 h-6"})]),m("button",{class:"rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500",onClick:i[1]||(i[1]=A=>$())},[u(T,{name:"delete",class:"w-6 h-6"})])])])}}}),ie=q(ae,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminQuestionAnswer.vue"]]),ue={class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},ce=F({__name:"AdminQuestionMain",setup(I){const o=N(),f=c(()=>Number(o.params.roleId)),e=c(()=>p().questions(f.value));return(n,v)=>{const l=ie;return s(),x("article",ue,[(s(!0),x(H,null,K(t(e),(d,h)=>(s(),w(l,{id:d.id,key:d.id,index:h,class:"col-span-1 lg:col-span-2 2xl:col-span-3"},null,8,["id","index"]))),128))])}}}),le=q(ce,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminQuestionMain.vue"]]),me={class:"font-bold text-dark text-sm"},de={key:0,class:"absolute w-full h-full pt-4 px-4"},_e=F({__name:"AdminQuestion",setup(I){const o=R(),f=N(),e=c(()=>Number(f.params.roleId)),n=c(()=>{const a=te.find(_=>_.value===Number(e.value));return`${a==null?void 0:a.text}\u4E92\u8A55\u554F\u5377`}),v=[{name:"create",icon:"plus",function:()=>o.push(`/admin/question/${e.value}/new`)},{name:"filter",icon:"filter",function:()=>o.push(`/admin/question/${e.value}/filter`)}],l=async a=>{try{const _=await p().readQuestionnaire(a)}catch{}},d=c(()=>ne().users),h=c(()=>p().questionnaire(e.value));return O(e,()=>l(e.value)),P(()=>{l(e.value)}),(a,_)=>{const Q=z,$=le,r=J,i=W("router-view");return s(),x(H,null,[m("span",me,[u(Q,{name:"question",class:"w-4 h-4 mr-2"}),B(C(t(n)),1)]),t(d)?(s(),x("div",de,[t(h)?(s(),w($,{key:0})):b("v-if",!0),u(E,{name:"sidebar",mode:"out-in",appear:""},{default:y(()=>[u(r,{items:v})]),_:1}),u(i,null,{default:y(({Component:g})=>[u(E,{name:"modal",mode:"out-in",appear:""},{default:y(()=>[(s(),w(X(g)))]),_:2},1024)]),_:1})])):b("v-if",!0)],64)}}}),ke=q(_e,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminQuestion.vue"]]);export{ke as default};
