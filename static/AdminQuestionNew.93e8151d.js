import{_ as h,a as N}from"./BaseFormSelect.34adcd32.js";import{_ as b}from"./BaseFormInput.5468c907.js";import{_ as q}from"./BaseFormTextarea.9ccf6510.js";import{_ as A,d as w,S as Q,m as $,i as _,x as k,f as u,w as R,u as e,o as n,a as T,b as a,e as f}from"./index.708eb5c6.js";import{u as D}from"./vee-validate.esm.64a4d8cc.js";import{q as S}from"./data.054ee288.js";import{u as B}from"./questions.1acc58b7.js";import{c as V,a as r,b as E,e as H}from"./array.05a311f4.js";import"./BaseMessage.b99eec1c.js";import"./BaseSelect.e5e35936.js";import"./BaseInput.de1862dc.js";import"./BaseTextarea.63f235fc.js";import"./api.d802ac0b.js";const L={class:"m-2 p-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 bg-white rounded-2xl duration-500"},j=w({__name:"AdminQuestionNew",setup(z){const F=Q(),t=$(()=>Number(F.params.roleId)),g=V({content:r().required("\u6B64\u6B04\u4F4D\u5FC5\u586B"),tag:r().required("\u6B64\u6B04\u4F4D\u5FC5\u586B"),textHint:r(),typeId:E(),isRequired:H()}),{values:s,handleSubmit:C}=D({initialValues:{typeId:1,content:"",tag:"",textHint:"",isRequired:!1},validationSchema:g}),i=_("setToastData",()=>null),c=_("setIsLoading",()=>null),x=C(async o=>{try{c(!0);const m=await B().createQuestion({roleId:t.value,question:{...o,typeId:Number(o.typeId)}});i({isActive:!0,variant:"success",message:"\u65B0\u589E\u6210\u529F"}),B().readQuestionnaire(t.value),l.push(`/admin/question/${t.value}`)}catch({response:m}){i({isActive:!0,variant:"error",message:"\u65B0\u589E\u5931\u6557"})}finally{c(!1)}}),l=k(),y=()=>l.push(`/admin/question/${t.value}`);return(o,m)=>{const p=N,d=q,v=b,I=h;return n(),u(I,{size:"full",onConfirm:e(x),onCancel:y},{default:R(()=>[T("article",L,[a(p,{class:"col-span-1 p-0",name:"typeId",options:e(S),title:"\u8ACB\u9078\u64C7\u554F\u7B54\u985E\u578B"},null,8,["options"]),a(d,{name:"content",class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u8ACB\u8F38\u5165\u554F\u984C\u6558\u8FF0"}),a(v,{name:"tag",type:"text",class:"col-span-1 p-0",title:"\u8ACB\u8F38\u5165\u6A19\u7C64"}),Number(e(s).typeId)===2||Number(e(s).typeId)===3?(n(),u(d,{key:0,name:"textHint",class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u8ACB\u8F38\u5165\u6587\u5B57\u554F\u984C\u6558\u8FF0"})):f("v-if",!0),Number(e(s).typeId)===2||Number(e(s).typeId)===3?(n(),u(p,{key:1,class:"col-span-1 p-0",name:"isRequired",options:[{text:"\u9078\u586B",value:!1},{text:"\u5FC5\u586B",value:!0}],title:"\u662F\u5426\u5FC5\u586B"})):f("v-if",!0)])]),_:1},8,["onConfirm"])}}}),se=A(j,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminQuestionNew.vue"]]);export{se as default};
