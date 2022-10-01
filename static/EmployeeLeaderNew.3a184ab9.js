import{_ as N,a as S}from"./BaseFormSelect.9430fb12.js";import{_ as T}from"./EmployeeAnswer.553c3762.js";import{_ as V,d as $,z as o,i as B,u as z,A as M,k as A,g as O,h as r,l as d,e as i,f as y,c as j,C as G,E as Q,G as R,F as H}from"./index.9955c37b.js";import{u as J}from"./questions.34bb22ac.js";import{u as n}from"./answers.df3e78b2.js";import{u as K}from"./users.eb142274.js";import{u as P}from"./vee-validate.esm.6b7e2808.js";import{c as W,a as X}from"./array.12268bd8.js";import{d as Y}from"./data.d5f5edba.js";import{u as E}from"./account.96147f74.js";import"./BaseMessage.7e7fc42c.js";import"./BaseSelect.979f9ef3.js";import"./BaseFormTextarea.c0e34e35.js";import"./BaseTextarea.d59dc85e.js";import"./BaseFormScore.af31bd7d.js";import"./BaseScore.9e084921.js";import"./BaseTag.3c8b20aa.js";import"./api.7475408f.js";const Z={class:"p-4"},ee={class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},se=i("hr",{class:"border-1 border-theme my-4 w-full"},null,-1),te={class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},oe=$({__name:"EmployeeLeaderNew",setup(re){var v;const l=o(()=>E().accountId),m=o(()=>J().questions(2)),{values:c,handleSubmit:C,setFieldValue:a}=P();a("department","\u672A\u586B\u540D\u55AE"),(v=m.value)==null||v.forEach((e,s)=>{a(`answers[${s}].qId`,e.id)});const F=[{text:"\u672A\u586B\u540D\u55AE",value:"\u672A\u586B\u540D\u55AE"}].concat(Y),I=o(()=>{var e;return(e=K().activeUsers)==null?void 0:e.filter(s=>s.department===c.department&&s.roles.includes(2)&&E().accountId!==s.id)}),x=o(()=>n().unfilledList[2]),D=o(()=>n().answerUsers(2)),p=o(()=>{a("reviewee",0);const e=c.department==="\u672A\u586B\u540D\u55AE"?x.value:I.value,s=e==null?void 0:e.filter(t=>{var u;return!((u=D.value)!=null&&u.includes(t.id))}).map(t=>({text:t.name,value:t.id}));return s!=null&&s.length&&a("reviewee",s[0].value),s}),_=B("setToastData",()=>null),f=B("setIsLoading",()=>null),L=C(async e=>{try{f(!0);const s=await n().createAnswers({reviewer:l.value,qId:2,reviewee:Number(e.reviewee),answers:e.answers});_({isActive:!0,variant:"success",message:"\u65B0\u589E\u6210\u529F"}),n().readAnswersInformation({userId:l.value,qId:2}),w.push("/employee/leader")}catch({response:s}){_({isActive:!0,variant:"error",message:"\u65B0\u589E\u5931\u6557"})}finally{f(!1)}}),w=z(),b=()=>w.push("/employee/leader"),q=async()=>{try{const e=await n().readUnfilledList({accountId:l.value,qId:2})}catch({response:e}){}};return M(async()=>{await q()}),(e,s)=>{const t=S,u=T,U=N;return d(),A(U,{size:"full",onConfirm:r(L),onCancel:b},{default:O(()=>{var g;return[i("article",Z,[i("header",ee,[y(t,{name:"department",options:r(F),class:"col-span-1",title:"\u5408\u4F5C\u90E8\u9580",rule:W().required("\u6B64\u6B04\u4F4D\u5FC5\u586B")},null,8,["options","rule"]),y(t,{name:"reviewee",options:r(p),class:"col-span-1",title:"\u5408\u4F5C\u5C0D\u8C61",disabled:!((g=r(p))!=null&&g.length),rule:X().required("\u6B64\u6B04\u4F4D\u5FC5\u586B")},null,8,["options","disabled","rule"])]),se,i("article",te,[(d(!0),j(H,null,G(r(m),(h,k)=>Q((d(),A(u,{id:h.id,key:h.id,index:k,"role-id":2,class:"col-span-1 lg:col-span-2 2xl:col-span-3"},null,8,["id","index"])),[[R,r(c).reviewee]])),128))])])]}),_:1},8,["onConfirm"])}}}),Ee=V(oe,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeeLeaderNew.vue"]]);export{Ee as default};
