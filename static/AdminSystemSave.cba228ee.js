import{_ as f}from"./TheModal.45341db4.js";import{_ as y}from"./BaseFormInput.07c6fa7e.js";import{_ as F,d as A,u as D,i as o,k as v,g as S,y as h,o as C,e as m,f as i}from"./index.d57fffa1.js";import{u as g}from"./vee-validate.esm.1588715a.js";import{u as E}from"./system.6f76f2b4.js";import{u as w}from"./history.0893033d.js";import{a as b,c as x}from"./array.50563ff0.js";import"./BaseMessage.3bc53715.js";import"./BaseInput.921d125e.js";import"./api.749027f8.js";const k={class:"m-2"},I={class:"m-2"},N=A({__name:"AdminSystemSave",setup(T){const s=D(),{handleSubmit:c,setFieldValue:t}=g();t("year",new Date().getFullYear()),t("filename","");const u=o("setToastData",()=>null),a=o("setIsLoading",()=>null),l=()=>{h().setConfirmData({isActive:!0,confirm:()=>_(),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u5132\u5B58\u6240\u6709\u4E92\u8A55\u4E26\u7D50\u675F\u6B64\u6B21\u4E92\u8A55\u586B\u5BEB\uFF1F"})},p=async()=>{try{const e=await E().readSystemStatus()}catch({response:e}){}},_=c(async e=>{try{a(!0);const n=await w().createHistory({year:Number(e.year),filename:e.filename});u({isActive:!0,variant:"success",message:"\u5132\u5B58\u6210\u529F"}),await p(),s.push("/admin/system")}catch({response:n}){u({isActive:!0,variant:"error",message:"\u5132\u5B58\u5931\u6557"})}finally{a(!1)}}),B=()=>s.push("/admin/system");return(e,n)=>{const r=y,d=f;return C(),v(d,{size:"side",onConfirm:l,onCancel:B},{default:S(()=>[m("div",k,[i(r,{class:"mb-4",title:"\u5E74\u5EA6",name:"year",type:"number",rule:b().typeError("\u6B64\u6B04\u4F4D\u683C\u5F0F\u4E0D\u7B26").min(1911,"\u6B64\u6B04\u4F4D\u683C\u5F0F\u4E0D\u7B26").required("\u6B64\u6B04\u4F4D\u5FC5\u586B")},null,8,["rule"])]),m("div",I,[i(r,{class:"mb-4",title:"\u540D\u7A31",name:"filename",type:"text",rule:x().required("\u6B64\u6B04\u4F4D\u5FC5\u586B")},null,8,["rule"])])]),_:1})}}}),G=F(N,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminSystemSave.vue"]]);export{G as default};
