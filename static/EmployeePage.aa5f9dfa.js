import{_ as b,a as A}from"./TheNavbar.25c2cb6f.js";import{_ as T,d as k,z as t,u as x,i as _,A as D,b as I,c as L,f as a,g as s,T as d,l,h as n,k as f,B as N,j as M}from"./index.e20371ec.js";import{u as v}from"./account.90f76a17.js";import{u as y}from"./users.a1b98be4.js";import"./data.ecc5dcde.js";import"./api.c7e43ded.js";const j={class:"fixed top-0 bottom-0 bg-theme w-full"},F=k({__name:"EmployeePage",setup(R){const r=t(()=>v().accountId),c=t(()=>{var e;return(e=y().user(Number(r.value)))==null?void 0:e.role}),g=t(()=>{var u,o;let e=[];return(u=c.value)!=null&&u.includes(1)&&(e=[...e,"staff"]),(o=c.value)!=null&&o.includes(2)&&(e=[...e,"leader","result"]),e}),i=x(),p=t(()=>String(i.currentRoute.value.path.split("/")[2]).toLowerCase()),m={staff:{title:"\u54E1\u5DE5\u4E92\u8A55\u586B\u5BEB",url:"/employee/staff",icon:"staff"},leader:{title:"\u4E3B\u7BA1\u4E92\u8A55\u586B\u5BEB",url:"/employee/leader",icon:"leader"},result:{title:"\u4E92\u8A55\u7D50\u679C\u700F\u89BD",url:"/employee/result",icon:"result"},calendar:{title:"\u6642\u9593\u8EF8",url:"/employee/calendar",icon:"calendar"}},h=t(()=>g.value.map(e=>({name:e,...m[e]})));_("setThemeColor",()=>null)("employee"),_("switchPosition",()=>null)("employee");const B=async()=>{try{await v().readAccountId("employee"),await y().readUsers()}catch({response:e}){i.push("/?type=employee")}};return D(async()=>{await B()}),(e,u)=>{const o=b,E=A,w=I("router-view");return l(),L("div",j,[a(d,{name:"navbar",mode:"out-in",appear:""},{default:s(()=>[a(o,{"active-page":n(p),"page-list":n(h)},null,8,["active-page","page-list"])]),_:1}),a(w,null,{default:s(({Component:C,route:P})=>[a(d,{name:"main",mode:"out-in",appear:""},{default:s(()=>[n(r)?(l(),f(E,{key:P.path.split("/")[2],title:m[n(p)].title},{default:s(()=>[(l(),f(N(C)))]),_:2},1032,["title"])):M("v-if",!0)]),_:2},1024)]),_:1})])}}}),K=T(F,[["__scopeId","data-v-484b3117"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeePage.vue"]]);export{K as default};
