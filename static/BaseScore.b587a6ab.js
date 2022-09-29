import{_ as d,d as p,z as h,r as v,w as E,o as F,l as C,c as y}from"./index.a07c9b9e.js";const _=p({__name:"BaseScore",props:{variant:{type:String,required:!0},score:{type:Number,required:!0,default:0}},setup(m){const a=m,n=h(()=>{switch(!0){case a.score<0:return 0;case a.score>5:return 5;default:return Math.round(a.score*100)/100}}),o={theme:getComputedStyle(document.documentElement).getPropertyValue("--color-theme-light"),success:"#E6F2E6",alert:"#FFF2DC",error:"#FADCDB",info:"#DEEFF6",muted:"#E1E1E1",variant1:"#F2EAF5",variant2:"#FFF1E9",variant3:"#F1F4EF",variant4:"#E0E2EC",primary:"#E8F3F4",secondary:"#F4ECEB"},s={theme:getComputedStyle(document.documentElement).getPropertyValue("--color-theme"),success:"#9CCD9B",alert:"#FFCC72",error:"#ED7470",info:"#7DC1DC",muted:"#888888",variant1:"#CCABD8",variant2:"#FFC8A6",variant3:"#C6D2BE",variant4:"#838BB2",primary:"#A2CED3",secondary:"#D4B3AE"},c=v(),l=()=>{const e=c.value.getContext("2d"),t=e.canvas.width,r=t*.5*17/18,i=r*13/17,u=Math.PI*2*n.value/5;e.beginPath(),e.moveTo(t*.5,t*.5-r),e.arc(t*.5,t*.5,r,-Math.PI*.5,Math.PI*1.5,!1),e.fillStyle=o[a.variant],e.fill(),e.beginPath(),e.moveTo(t*.5,t*.5-r),e.arc(t*.5,t*.5,r,-Math.PI*.5,u-Math.PI*.5,!1),e.lineTo(t*.5,t*.5),e.fillStyle=s[a.variant],e.fill(),e.beginPath(),e.moveTo(t*.5,t*.5-i),e.arc(t*.5,t*.5,i,-Math.PI*.5,Math.PI*1.5,!1),e.fillStyle="#fff",e.fill(),e.fillStyle=u?s[a.variant]:o[a.variant],e.font=`${t/3}px sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n.value,t*.5,t-r)};return E(a,()=>l()),F(()=>{l()}),(f,e)=>(C(),y("canvas",{ref_key:"rate",ref:c,class:"inline-block",width:"68",height:"68"},null,512))}}),B=d(_,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseScore.vue"]]);export{B as _};
