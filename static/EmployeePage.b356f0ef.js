import{_ as B,a as C}from"./TheNavbar.bbc032ce.js";import{_ as P,d as A,z as s,r as T,u as b,i as c,A as k,b as x,c as I,f as t,g as o,T as i,l as n,h as a,k as p,B as D,j as L}from"./index.fe3aa23c.js";import{u as m}from"./account.6254ada4.js";import{u as M}from"./users.7cf8a190.js";import"./data.054ee288.js";import"./api.a4fc115a.js";const N={class:"fixed top-0 bottom-0 bg-theme w-full"},j=A({__name:"EmployeePage",setup(R){const _=s(()=>m().accountId),d=T(["staff","leader","result","calendar"]),r=b(),u=s(()=>String(r.currentRoute.value.path.split("/")[2]).toLowerCase()),l={staff:{title:"\u54E1\u5DE5\u4E92\u8A55\u586B\u5BEB",url:"/employee/staff",icon:"staff"},leader:{title:"\u4E3B\u7BA1\u4E92\u8A55\u586B\u5BEB",url:"/employee/leader",icon:"leader"},result:{title:"\u4E92\u8A55\u7D50\u679C",url:"/employee/result",icon:"result"},calendar:{title:"\u6642\u9593\u8EF8",url:"/employee/calendar",icon:"calendar"}},f=s(()=>d.value.map(e=>({name:e,...l[e]})));c("setThemeColor",()=>null)("employee"),c("switchPosition",()=>null)("employee");const h=async()=>{try{await m().readAccountId(),await M().readUsers()}catch({response:e}){r.push("/?type=employee")}};return k(async()=>{await h()}),(e,z)=>{const y=B,g=C,v=x("router-view");return n(),I("div",N,[t(i,{name:"navbar",mode:"out-in",appear:""},{default:o(()=>[t(y,{"active-page":a(u),"page-list":a(f)},null,8,["active-page","page-list"])]),_:1}),t(v,null,{default:o(({Component:E,route:w})=>[t(i,{name:"main",mode:"out-in",appear:""},{default:o(()=>[a(_)?(n(),p(g,{key:w.path.split("/")[2],title:l[a(u)].title},{default:o(()=>[(n(),p(D(E)))]),_:2},1032,["title"])):L("v-if",!0)]),_:2},1024)]),_:1})])}}}),K=P(j,[["__scopeId","data-v-484b3117"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeePage.vue"]]);export{K as default};
