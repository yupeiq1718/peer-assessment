import{_ as O}from"./TheSideBar.7e69f294.js";import{_ as F,d as N,z as n,a as S,i as B,u as z,l as o,c as f,e as _,f as a,g as w,q as C,t as q,h as e,k as A,j as y,s as H,F as U,C as P,w as W,A as X,b as Y,T as L,B as Z}from"./index.8860b673.js";import{_ as ee}from"./BaseFormTextarea.68737fd8.js";import{_ as te}from"./BaseFormScore.7e4b340f.js";import{_ as se}from"./BaseTag.4a02341c.js";import{u as g}from"./questions.90f8490d.js";import{g as R,r as ne}from"./data.6ab9a877.js";import{u as G}from"./system.b7cc1d75.js";import{u as oe}from"./users.384a25c2.js";import"./BaseMessage.9c5f38cf.js";import"./BaseTextarea.10d33873.js";import"./vee-validate.esm.4c777bfe.js";import"./BaseScore.037ba240.js";import"./api.3f8f16a2.js";const re={class:"p-8 bg-white rounded-2xl flex flex-col mb-4"},ae={key:0,class:"flex flex-row justify-end items-center duration-500 overflow-hidden"},ie=_("hr",{class:"border-2 border-light grow-[1] mx-3"},null,-1),ue=N({__name:"AdminQuestionAnswer",props:{id:{type:Number,required:!0},index:{type:Number,required:!0}},setup(b){const i=b,m=n(()=>G().systemStatus),v=S(),t=n(()=>Number(v.params.roleId)),s=n(()=>g().question({roleId:t.value,id:i.id})),d=B("setToastData",()=>null),u=B("setIsLoading",()=>null),h=async()=>{try{const r=await g().readQuestionnaire(t.value)}catch{}},l=async({roleId:r,id:c})=>{try{u(!0);const k=await g().deleteQuestion({roleId:r,id:c});d({isActive:!0,variant:"success",message:"\u522A\u9664\u6210\u529F"}),h()}catch{d({isActive:!0,variant:"error",message:"\u522A\u9664\u5931\u6557"})}finally{u(!1)}},p=z(),I=()=>{var r;p.push(`/admin/question/${t.value}/edit/${(r=s.value)==null?void 0:r.id}`)},Q=B("setConfirmData",()=>null),$=()=>{Q({isActive:!0,confirm:()=>l({roleId:2,id:i.id}),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u522A\u9664\u8A72\u7B46\u8CC7\u6599\uFF1F"})};return(r,c)=>{var D,j,V,M,E;const k=se,J=te,K=ee,T=H;return o(),f("div",null,[_("article",re,[_("label",null,[a(k,{variant:e(R)(i.index)},{default:w(()=>{var x;return[C(q((x=e(s))==null?void 0:x.tag),1)]}),_:1},8,["variant"]),C(" "+q((D=e(s))==null?void 0:D.content),1)]),((j=e(s))==null?void 0:j.typeId)===1||((V=e(s))==null?void 0:V.typeId)===2?(o(),A(J,{key:0,name:"score",variant:e(R)(i.index),class:"mt-4"},null,8,["variant"])):y("v-if",!0),((M=e(s))==null?void 0:M.typeId)===2||((E=e(s))==null?void 0:E.typeId)===3?(o(),A(K,{key:1,name:"text",placeholder:e(s).textHint,class:"w-full mt-4"},null,8,["placeholder"])):y("v-if",!0)]),e(m)===0?(o(),f("footer",ae,[ie,_("button",{class:"rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500",onClick:c[0]||(c[0]=x=>I())},[a(T,{name:"edit",class:"w-6 h-6"})]),_("button",{class:"rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500",onClick:c[1]||(c[1]=x=>$())},[a(T,{name:"delete",class:"w-6 h-6"})])])):y("v-if",!0)])}}}),le=F(ue,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminQuestionAnswer.vue"]]),ce={class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},me=N({__name:"AdminQuestionMain",setup(b){const i=S(),m=n(()=>Number(i.params.roleId)),v=n(()=>g().questions(m.value)||[]);return(t,s)=>{const d=le;return o(),f("article",ce,[(o(!0),f(U,null,P(e(v),(u,h)=>(o(),A(d,{id:u.id,key:u.id,index:h,class:"col-span-1 lg:col-span-2 2xl:col-span-3"},null,8,["id","index"]))),128))])}}}),de=F(me,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminQuestionMain.vue"]]),pe={class:"absolute font-bold text-dark text-sm h-4 mb-2"},_e={key:0,class:"absolute top-8 left-0 w-full h-[calc(100%-2rem)] pt-4 px-4 overflow-auto"},fe=N({__name:"AdminQuestion",setup(b){const i=n(()=>G().systemStatus),m=z(),v=S(),t=n(()=>Number(v.params.roleId)),s=n(()=>{const l=ne.find(p=>p.value===Number(t.value));return`${l==null?void 0:l.text}\u4E92\u8A55\u554F\u5377`}),d=n(()=>i.value===0?[{name:"create",icon:"plus",function:()=>m.push(`/admin/question/${t.value}/new`)},{name:"filter",icon:"filter",function:()=>m.push(`/admin/question/${t.value}/filter`)}]:[{name:"filter",icon:"filter",function:()=>m.push(`/admin/question/${t.value}/filter`)}]),u=async l=>{try{const p=await g().readQuestionnaire(l)}catch{}},h=n(()=>oe().users);return W(t,()=>u(t.value)),X(()=>{u(t.value)}),(l,p)=>{const I=H,Q=de,$=O,r=Y("router-view");return o(),f(U,null,[_("span",pe,[a(I,{name:"question",class:"w-4 h-4 mr-2"}),C(q(e(s)),1)]),e(h)?(o(),f("div",_e,[a(Q),a(L,{name:"sidebar",mode:"out-in",appear:""},{default:w(()=>[a($,{items:e(d)},null,8,["items"])]),_:1}),a(r,null,{default:w(({Component:c})=>[a(L,{name:"modal",mode:"out-in",appear:""},{default:w(()=>[(o(),A(Z(c)))]),_:2},1024)]),_:1})])):y("v-if",!0)],64)}}}),qe=F(fe,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminQuestion.vue"]]);export{qe as default};