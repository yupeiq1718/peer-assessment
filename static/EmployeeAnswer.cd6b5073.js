import{_ as v}from"./BaseFormTextarea.322c7d9a.js";import{_ as w}from"./BaseFormScore.e04691c0.js";import{_ as k}from"./BaseTag.31cf6300.js";import{_ as B,d as I,z as N,l as o,c as b,e as i,f as q,g as V,q as l,t as _,h as e,k as u,j as d}from"./index.fe3aa23c.js";import{u as $}from"./questions.4dd51f61.js";import{g as f}from"./data.054ee288.js";const C={class:"p-8 bg-white rounded-2xl flex flex-col mb-4"},E=I({__name:"EmployeeAnswer",props:{id:{type:Number,required:!0},roleId:{type:Number,required:!0},index:{type:Number,required:!0}},setup(x){const n=x,t=N(()=>$().question({roleId:n.roleId,id:n.id}));return(T,A)=>{var s,r,a,m,c;const y=k,g=w,h=v;return o(),b("div",null,[i("article",C,[i("label",null,[q(y,{variant:e(f)(n.id)},{default:V(()=>{var p;return[l(_((p=e(t))==null?void 0:p.tag),1)]}),_:1},8,["variant"]),l(" "+_((s=e(t))==null?void 0:s.content),1)]),((r=e(t))==null?void 0:r.typeId)===1||((a=e(t))==null?void 0:a.typeId)===2?(o(),u(g,{key:0,name:`answers[${n.index}].score`,variant:e(f)(n.id),class:"mt-4"},null,8,["name","variant"])):d("v-if",!0),((m=e(t))==null?void 0:m.typeId)===2||((c=e(t))==null?void 0:c.typeId)===3?(o(),u(h,{key:1,name:`answers[${n.index}].comment`,placeholder:e(t).textHint,class:"w-full mt-4"},null,8,["name","placeholder"])):d("v-if",!0)])])}}}),Q=B(E,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/EmployeeAnswer.vue"]]);export{Q as _};
