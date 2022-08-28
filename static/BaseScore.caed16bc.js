import{_ as d,d as h,k as p,r as v,v as _,x as g,o as y,c as E}from"./index.cb3be632.js";const P=h({__name:"BaseScore",props:{variant:{type:String,required:!0},score:{type:Number,required:!0,default:0}},setup(m){const a=m,n=p(()=>{switch(!0){case a.score<0:return 0;case a.score>5:return 5;default:return Math.round(a.score*100)/100}}),o={theme:getComputedStyle(document.documentElement).getPropertyValue("--color-theme-light"),success:"#D9ECEB",alert:"#FCE9CE",error:"#FADCDB",info:"#DEEFF6",muted:"#E1E1E1"},s={theme:getComputedStyle(document.documentElement).getPropertyValue("--color-theme"),success:"#66B4AF",alert:"#F2A63B",error:"#ED7470",info:"#7DC1DC",muted:"#888888"},c=v(),l=()=>{const e=c.value.getContext("2d"),t=e.canvas.width,r=t*.5*17/18,i=r*13/17,u=Math.PI*2*n.value/5;e.beginPath(),e.moveTo(t*.5,t*.5-r),e.arc(t*.5,t*.5,r,-Math.PI*.5,Math.PI*1.5,!1),e.fillStyle=o[a.variant],e.fill(),e.beginPath(),e.moveTo(t*.5,t*.5-r),e.arc(t*.5,t*.5,r,-Math.PI*.5,u-Math.PI*.5,!1),e.lineTo(t*.5,t*.5),e.fillStyle=s[a.variant],e.fill(),e.beginPath(),e.moveTo(t*.5,t*.5-i),e.arc(t*.5,t*.5,i,-Math.PI*.5,Math.PI*1.5,!1),e.fillStyle="#fff",e.fill(),e.fillStyle=u?s[a.variant]:o[a.variant],e.font=`${t/3}px sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n.value,t*.5,t-r)};return _(a,()=>l()),g(()=>{l()}),(f,e)=>(y(),E("canvas",{ref_key:"rate",ref:c,class:"inline-block",width:"68",height:"68"},null,512))}}),M=d(P,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseScore.vue"]]);export{M as _};
