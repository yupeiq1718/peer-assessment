import{_ as v,a as E}from"./TheNavbar.b0eb0529.js";import{_ as y,d as h,r as B,k as r,i as C,m as w,o,c as T,b as e,w as t,T as u,u as n,f as p,q as b,g as k}from"./index.3acd79c5.js";import"./BaseSvgIcon.715e781d.js";import"./user.ef8b3aab.js";const x={class:"fixed top-0 bottom-0 bg-theme w-full"},P=h({__name:"EmployeePage",setup(A){const c=B(["staff","leader","result","calendar"]),s=r(()=>String(k.currentRoute.value.name).toLowerCase()),l={staff:{title:"\u54E1\u5DE5\u4E92\u8A55\u586B\u5BEB",url:"/employee/staff",icon:"staff"},leader:{title:"\u4E3B\u7BA1\u4E92\u8A55\u586B\u5BEB",url:"/employee/leader",icon:"leader"},result:{title:"\u4E92\u8A55\u7D50\u679C",url:"/employee/result",icon:"result"},calendar:{title:"\u6642\u9593\u8EF8",url:"/employee/calendar",icon:"calendar"}},_=r(()=>c.value.map(a=>({name:a,...l[a]})));return C("setThemeColor",()=>null)("employee"),(a,L)=>{const m=v,i=E,d=w("router-view");return o(),T("div",x,[e(u,{name:"navbar",mode:"out-in",appear:""},{default:t(()=>[e(m,{"active-page":n(s),"page-list":n(_)},null,8,["active-page","page-list"])]),_:1}),e(d,null,{default:t(({Component:f,route:g})=>[e(u,{name:"main",mode:"out-in",appear:""},{default:t(()=>[(o(),p(i,{key:g.path,title:l[n(s)].title},{default:t(()=>[(o(),p(b(f)))]),_:2},1032,["title"]))]),_:2},1024)]),_:1})])}}}),F=y(P,[["__scopeId","data-v-484b3117"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeePage.vue"]]);export{F as default};
