import{_ as n,d as a,l,c as p,n as d}from"./index.a32bcd10.js";const c=["value","disabled"],i=a({__name:"BaseInput",props:{status:{type:String,required:!0},value:{type:String,required:!0,default:""}},emits:["update:value"],setup(s,{emit:r}){const e=s,o={success:"focus:border-success",alert:"focus:border-alert",error:"focus:border-error",info:"focus:border-info",muted:"bg-muted-light"};return(m,t)=>(l(),p("input",{class:d([o[e.status],"px-2 py-1 text-dark outline-0 border-2 border-dark rounded-lg duration-500"]),value:e.value,disabled:e.status==="muted",onInput:t[0]||(t[0]=u=>r("update:value",u.target.value))},null,42,c))}}),f=n(i,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseInput.vue"]]);export{f as _};