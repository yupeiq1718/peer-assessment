import{_ as m}from"./TheModal.376a397d.js";import{_}from"./BaseSelect.2d15259a.js";import{_ as d,d as f,r as x,v as B,f as o,w as g,o as n,a as s,b as v,q as h,t as A}from"./index.8c98bab7.js";import{B as C,a as Q,b}from"./BaseQuestionFormAll.08efeb15.js";import"./BaseSvgIcon.4c111a3f.js";import"./BaseInput.ae5e846c.js";import"./BaseTextarea.a727c36c.js";const w={class:"m-2 p-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 bg-white rounded-2xl duration-500"},F={class:"col-span-1 flex flex-col"},U=s("label",{class:"mb-4"},A("\u8ACB\u9078\u64C7\u554F\u7B54\u985E\u578B"),-1),k=f({__name:"AdminQuestionUpdate",setup(S){const e=x(""),a=[{value:"score",text:"\u8A55\u5206"},{value:"text",text:"\u6587\u5B57"},{value:"all",text:"\u8A55\u5206 + \u6587\u5B57"}],l={score:C,text:Q,all:b},u=B(),c=()=>u.push("/admin/question");return(q,t)=>{const r=_,i=m;return n(),o(i,{size:"full",onCancel:c},{default:g(()=>[s("article",w,[s("section",F,[U,v(r,{selected:e.value,"onUpdate:selected":t[0]||(t[0]=p=>e.value=p),class:"col-span-1",title:"\u5408\u4F5C\u90E8\u9580",status:"info",options:a},null,8,["selected"])]),(n(),o(h(l[e.value])))])]),_:1})}}}),z=d(k,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminQuestionUpdate.vue"]]);export{z as default};