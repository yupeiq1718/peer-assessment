import{_ as Q,a as $}from"./BaseFormSelect.e29ccb27.js";import{_ as w}from"./BaseFormInput.5362a304.js";import{_ as T}from"./BaseFormTextarea.58d94d74.js";import{_ as D,d as E,a as S,z as I,i as q,u as V,k as i,g as j,h as t,l as r,e as z,f as c,j as h}from"./index.38b7c3e0.js";import{u as L}from"./vee-validate.esm.8fafe6ae.js";import{q as M}from"./data.6ab9a877.js";import{u as l}from"./questions.6c0f0499.js";import{b as G,c as p,a as J,e as K}from"./array.45a8b4dd.js";import"./BaseMessage.7b7274ae.js";import"./BaseSelect.dd6946e1.js";import"./BaseInput.b78ec8eb.js";import"./BaseTextarea.3576f3cc.js";import"./api.be81d2e7.js";const O={class:"m-2 p-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 bg-white rounded-2xl duration-500"},P=E({__name:"AdminQuestionEdit",setup(U){var f,g,F,B,v;const a=S(),s=I(()=>Number(a.params.roleId)),u=I(()=>l().question({roleId:s.value,id:Number(a.params.id)})),b=G({content:p().required("\u6B64\u6B04\u4F4D\u5FC5\u586B"),tag:p().required("\u6B64\u6B04\u4F4D\u5FC5\u586B"),textHint:p(),typeId:J(),isRequired:K()}),{setFieldValue:o,values:n,handleSubmit:N}=L({validationSchema:b});o("content",((f=u.value)==null?void 0:f.content)||""),o("tag",((g=u.value)==null?void 0:g.tag)||""),o("textHint",((F=u.value)==null?void 0:F.textHint)||""),o("typeId",((B=u.value)==null?void 0:B.typeId)||1),o("isRequired",((v=u.value)==null?void 0:v.isRequired)||!1);const m=q("setToastData",()=>null),d=q("setIsLoading",()=>null),A=N(async e=>{try{d(!0);const x=await l().updateQuestion({roleId:s.value,id:Number(a.params.id),question:{content:e.content,tag:e.tag,textHint:e.textHint,typeId:Number(e.typeId),isRequired:String(e.isRequired)==="true"}});m({isActive:!0,variant:"success",message:"\u66F4\u65B0\u6210\u529F"}),l().readQuestionnaire(s.value),_.push(`/admin/question/${s.value}`)}catch({response:x}){m({isActive:!0,variant:"error",message:"\u66F4\u65B0\u5931\u6557"})}finally{d(!1)}}),_=V(),R=()=>_.push(`/admin/question/${s.value}`);return(e,x)=>{const C=$,y=T,k=w,H=Q;return r(),i(H,{size:"full",onConfirm:t(A),onCancel:R},{default:j(()=>[z("article",O,[c(C,{class:"col-span-1 p-0",name:"typeId",options:t(M),title:"\u8ACB\u9078\u64C7\u554F\u7B54\u985E\u578B"},null,8,["options"]),c(y,{name:"content",class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u8ACB\u8F38\u5165\u554F\u984C\u6558\u8FF0"}),c(k,{name:"tag",type:"text",class:"col-span-1 p-0",title:"\u8ACB\u8F38\u5165\u6A19\u7C64"}),Number(t(n).typeId)===2||Number(t(n).typeId)===3?(r(),i(y,{key:0,name:"textHint",class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u8ACB\u8F38\u5165\u6587\u5B57\u554F\u984C\u6558\u8FF0"})):h("v-if",!0),Number(t(n).typeId)===2||Number(t(n).typeId)===3?(r(),i(C,{key:1,class:"col-span-1 p-0",name:"isRequired",options:[{text:"\u9078\u586B",value:!1},{text:"\u5FC5\u586B",value:!0}],title:"\u662F\u5426\u5FC5\u586B"})):h("v-if",!0)])]),_:1},8,["onConfirm"])}}}),ce=D(P,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminQuestionEdit.vue"]]);export{ce as default};