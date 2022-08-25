import{_ as E,a as S,b as T,c as D,d as C,e as M}from"./BaseTable.3ce62807.js";import{_ as F}from"./BaseButton.91cdd8ce.js";import{_ as f,o,c as m,a as c,b as e,w as s,F as $,j as i,d as b,r as B,t as w,s as N,f as p,T as k,e as x}from"./index.7f21504e.js";import{_ as V}from"./BaseSvgIcon.2341fb4b.js";import{_ as j,a as A}from"./BaseTag.bd71cf92.js";import{_ as O}from"./user.ef8b3aab.js";const U={},z={class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},I={class:"w-full flex justify-center"},L=i(" \u78BA\u5B9A "),q=i(" \u53D6\u6D88 ");function G(d,a){const n=E,_=S,r=T,t=F;return o(),m($,null,[c("article",z,[e(n,{class:"col-span-1",title:"\u5408\u4F5C\u90E8\u9580"}),e(n,{class:"col-span-1",title:"\u5408\u4F5C\u90E8\u9580"}),e(_,{class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u554F\u984C\u4E00\uFF1A\u4F60\u5C31\u672C\u6B21\u8207\u5C0D\u65B9\u7684\u5408\u4F5C\u7D93\u9A57\uFF0C\u7D9C\u5408\u8A55\u5206\u6703\u7D66\u5C0D\u65B9\u5E7E\u5206",tag:"\u7D9C\u5408"}),e(r,{class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u554F\u984C\u4E00\uFF1A\u4F60\u5C31\u672C\u6B21\u8207\u5C0D\u65B9\u7684\u5408\u4F5C\u7D93\u9A57\uFF0C\u7D9C\u5408\u8A55\u5206\u6703\u7D66\u5C0D\u65B9\u5E7E\u5206",description:"\u5C0D\u65BC\u4FE1\u8CF4\u7A0B\u5EA6\uFF0C\u662F\u5426\u6709\u60F3\u88DC\u5145\u5730\u65B9",tag:"\u7D9C\u5408"})]),c("footer",I,[e(t,{class:"mx-2",variant:"success"},{default:s(()=>[L]),_:1}),e(t,{class:"mx-2",variant:"error"},{default:s(()=>[q]),_:1})])],64)}const H=f(U,[["render",G],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/EmployeeStaffCreate.vue"]]),J={},K={class:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},P={class:"w-full flex justify-center"},Q=i(" \u78BA\u5B9A "),R=i(" \u53D6\u6D88 ");function W(d,a){const n=E,_=S,r=T,t=F;return o(),m($,null,[c("article",K,[e(n,{class:"col-span-1",title:"\u5408\u4F5C\u90E8\u9580"}),e(n,{class:"col-span-1",title:"\u5408\u4F5C\u90E8\u9580"}),e(_,{class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u554F\u984C\u4E00\uFF1A\u4F60\u5C31\u672C\u6B21\u8207\u5C0D\u65B9\u7684\u5408\u4F5C\u7D93\u9A57\uFF0C\u7D9C\u5408\u8A55\u5206\u6703\u7D66\u5C0D\u65B9\u5E7E\u5206",tag:"\u7D9C\u5408"}),e(r,{class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u554F\u984C\u4E00\uFF1A\u4F60\u5C31\u672C\u6B21\u8207\u5C0D\u65B9\u7684\u5408\u4F5C\u7D93\u9A57\uFF0C\u7D9C\u5408\u8A55\u5206\u6703\u7D66\u5C0D\u65B9\u5E7E\u5206",description:"\u5C0D\u65BC\u4FE1\u8CF4\u7A0B\u5EA6\uFF0C\u662F\u5426\u6709\u60F3\u88DC\u5145\u5730\u65B9",tag:"\u7D9C\u5408"})]),c("footer",P,[e(t,{class:"mx-2",variant:"success"},{default:s(()=>[Q]),_:1}),e(t,{class:"mx-2",variant:"error"},{default:s(()=>[R]),_:1})])],64)}const X=f(J,[["render",W],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/EmployeeStaffUpdate.vue"]]),Y={class:"mx-4"},Z=c("img",{class:"inline-block rounded-full w-16 max-w-none h-16 mr-4",src:O,alt:"user"},null,-1),ee=b({__name:"EmployeeStaffMain",setup(d){const a=[{name:"\u59D3\u540D",key:"name"},{name:"\u90E8\u9580",key:"department",width:"20%"},{name:"\u8A55\u5206",key:"scores",width:"60%"},{name:"\u529F\u80FD",key:"function"}],n=B([{key:"1",name:"\u8A31\u65BE\u65DF",department:"O2 meta \u7D44",scores:[1,4,3,3,5]},{key:"2",name:"\u5289\u4E8E\u7444",department:"\u5C08\u6848\u7D44",scores:[3,2,5,4,2]}]);return(_,r)=>{const t=j,g=A,u=V,h=D;return o(),m("div",Y,[e(h,{fields:a,items:n.value},{name:s(l=>[c("div",null,[Z,c("span",null,w(l.data),1)])]),department:s(l=>[e(t,{variant:"theme"},{default:s(()=>[i(w(l.data),1)]),_:2},1024)]),scores:s(l=>[(o(!0),m($,null,N(l.data,(v,y)=>(o(),p(g,{key:y,variant:"theme",score:v},null,8,["score"]))),128))]),function:s(()=>[c("div",null,[e(u,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"edit"}),e(u,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"delete"})])]),_:1},8,["items"])])}}}),se=f(ee,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/EmployeeStaffMain.vue"]]),ne={class:"absolute w-full h-full"},te=b({__name:"EmployeeStaff",setup(d){const a=B(!1),n=B(""),_=[{name:"plus",icon:"plus",function:()=>{a.value=!0,n.value="update"}}];return(r,t)=>{const g=se,u=C,h=X,l=H,v=M;return o(),m("div",ne,[e(g),e(k,{name:"sidebar",mode:"out-in",appear:""},{default:s(()=>[e(u,{items:_})]),_:1}),e(k,{name:"modal",mode:"out-in"},{default:s(()=>[a.value?(o(),p(v,{key:0,"is-active":a.value,"onUpdate:is-active":t[0]||(t[0]=y=>a.value=y),size:"full"},{default:s(()=>[n.value==="update"?(o(),p(h,{key:0})):x("v-if",!0),n.value==="create"?(o(),p(l,{key:1})):x("v-if",!0)]),_:1},8,["is-active"])):x("v-if",!0)]),_:1})])}}}),me=f(te,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeeStaff.vue"]]);export{me as default};
