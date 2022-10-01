import{_ as h}from"./BaseFormTextarea.c0e34e35.js";import{_ as q}from"./BaseFormScore.af31bd7d.js";import{_ as v}from"./BaseTag.3c8b20aa.js";import{_ as w,d as k,z as I,l as n,c as N,e as i,f as b,g as F,q as l,t as p,h as e,k as _,j as d}from"./index.9955c37b.js";import{u as $}from"./questions.34bb22ac.js";import{g as f}from"./data.d5f5edba.js";import{a as C,c as V}from"./array.12268bd8.js";const D={class:"p-8 bg-white rounded-2xl flex flex-col mb-4"},E=k({__name:"EmployeeAnswer",props:{id:{type:Number,required:!0},roleId:{type:Number,required:!0},index:{type:Number,required:!0}},setup(x){const r=x,t=I(()=>$().question({roleId:r.roleId,id:r.id}));return(T,A)=>{var o,s,a,u,m;const B=v,y=q,g=h;return n(),N("div",null,[i("article",D,[i("label",null,[b(B,{variant:e(f)(r.index)},{default:F(()=>{var c;return[l(p((c=e(t))==null?void 0:c.tag),1)]}),_:1},8,["variant"]),l(" "+p((o=e(t))==null?void 0:o.content),1)]),((s=e(t))==null?void 0:s.typeId)===1||((a=e(t))==null?void 0:a.typeId)===2?(n(),_(y,{key:0,name:`answers[${r.index}].score`,variant:e(f)(r.index),rule:C().required("\u6B64\u6B04\u4F4D\u5FC5\u586B"),class:"mt-4"},null,8,["name","variant","rule"])):d("v-if",!0),((u=e(t))==null?void 0:u.typeId)===2||((m=e(t))==null?void 0:m.typeId)===3?(n(),_(g,{key:1,name:`answers[${r.index}].comment`,placeholder:e(t).textHint,class:"w-full mt-4",rule:V().required("\u6B64\u6B04\u4F4D\u5FC5\u586B")},null,8,["name","placeholder","rule"])):d("v-if",!0)])])}}}),K=w(E,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/EmployeeAnswer.vue"]]);export{K as _};
