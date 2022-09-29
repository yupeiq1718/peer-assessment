import{_ as S,a as T}from"./BaseFormSelect.d260a6ba.js";import{_ as V}from"./EmployeeAnswer.4b489961.js";import{_ as z,d as R,z as t,a as U,i as g,u as j,k as B,g as M,h as o,l as r,e as O,f as F,c as Q,C as G,F as H}from"./index.a07c9b9e.js";import{u as J}from"./questions.d5088a89.js";import{u as n}from"./answers.71f0ba27.js";import{u as K}from"./users.03d9ab6c.js";import{u as P}from"./vee-validate.esm.a36f4fe9.js";import{c as C,a as I,b as i,d as W}from"./array.2d7814ad.js";import{d as X}from"./data.5612e520.js";import{u as Y}from"./account.eadd3a32.js";import"./BaseMessage.c3e469c8.js";import"./BaseSelect.f7b0837f.js";import"./BaseFormTextarea.0c248811.js";import"./BaseTextarea.05a2c1e5.js";import"./BaseFormScore.00defae8.js";import"./BaseScore.b587a6ab.js";import"./BaseTag.a95911c1.js";import"./api.9ad47dd7.js";const Z={class:"mx-5 mt-5 mb-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},ee=R({__name:"EmployeeLeaderEdit",setup(se){var d,_,f;const u=t(()=>Y().accountId),c=U(),h=t(()=>J().questions(2)),a=t(()=>n().answerInformation({qId:2,id:Number(c.params.id)})),y=C({department:I().required("\u6B64\u6B04\u4F4D\u5FC5\u586B"),reviewee:i().required("\u6B64\u6B04\u4F4D\u5FC5\u586B"),answers:W().of(C({qId:i(),score:i(),comment:I()}))}),b={department:(d=a.value)==null?void 0:d.reviewee.department,reviewee:(_=a.value)==null?void 0:_.reviewee.id,answers:((f=a.value)==null?void 0:f.answers)||[]},{values:x,handleSubmit:E}=P({initialValues:b,validationSchema:y}),q=t(()=>{var e;return(e=K().activeUsers)==null?void 0:e.filter(s=>s.department===x.department&&s.role.includes(2))}),A=t(()=>{var e;return(e=q.value)==null?void 0:e.map(s=>({text:s.name,value:s.id}))}),m=g("setToastData",()=>null),l=g("setIsLoading",()=>null),k=E(async e=>{try{l(!0);const s=await n().updateAnswers({id:Number(c.params.id),reviewer:u.value,qId:2,reviewee:Number(e.reviewee),answers:e.answers});m({isActive:!0,variant:"success",message:"\u66F4\u65B0\u6210\u529F"}),n().readAnswersInformation({userId:u.value,qId:2}),p.push("/employee/leader")}catch({response:s}){m({isActive:!0,variant:"error",message:"\u66F4\u65B0\u5931\u6557"})}finally{l(!1)}}),p=j(),L=()=>p.push("/employee/leader");return(e,s)=>{const v=T,D=V,N=S;return r(),B(N,{size:"full",onConfirm:o(k),onCancel:L},{default:M(()=>[O("article",Z,[F(v,{name:"department",options:o(X),class:"col-span-1",title:"\u5408\u4F5C\u90E8\u9580",disabled:""},null,8,["options"]),F(v,{name:"reviewee",options:o(A),class:"col-span-1",title:"\u5408\u4F5C\u5C0D\u8C61",disabled:""},null,8,["options"]),(r(!0),Q(H,null,G(o(h),(w,$)=>(r(),B(D,{id:w.id,key:w.id,index:$,"role-id":2,class:"col-span-1 lg:col-span-2 2xl:col-span-3"},null,8,["id","index"]))),128))])]),_:1},8,["onConfirm"])}}}),Fe=z(ee,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeeLeaderEdit.vue"]]);export{Fe as default};
