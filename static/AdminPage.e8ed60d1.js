import{_ as C,a as B}from"./TheNavbar.e0962340.js";import{_ as D,d as P,A as t,u as T,i as c,B as b,b as k,c as x,f as s,g as n,T as m,o,h as a,k as l,C as F,j as q}from"./index.8e734258.js";import{u as p}from"./account.ad01628e.js";import{u as I}from"./users.b6dbb148.js";import{u as S}from"./system.e1a63dec.js";import"./data.ff9c2fa5.js";import"./api.5131a906.js";const E={class:"fixed top-0 bottom-0 bg-theme w-full"},L=P({__name:"AdminPage",setup(M){const _=t(()=>p().accountId),d=t(()=>["users","question","warning","results","system"]),u=T(),i=t(()=>String(u.currentRoute.value.path.split("/")[2]).toLowerCase()),r={users:{title:"\u4F7F\u7528\u8005\u8A2D\u5B9A",url:"/admin/users",icon:"users"},question:{title:"\u554F\u5377\u8A2D\u5B9A",url:"/admin/question/1",icon:"question"},warning:{title:"\u672A\u586B\u540D\u55AE\u63D0\u9192",url:"/admin/warning",icon:"warning"},results:{title:"\u6B77\u53F2\u7D50\u679C\u67E5\u8A62",url:"/admin/results",icon:"result"},system:{title:"\u7CFB\u7D71\u72C0\u614B\u8A2D\u5B9A",url:"/admin/system",icon:"setting"}},g=t(()=>d.value.map(e=>({name:e,...r[e]})));c("setThemeColor",()=>null)("admin"),c("switchPosition",()=>null)("admin");const f=async()=>{try{await p().readAccountId("admin"),await I().readUsers(),await S().readSystemStatus()}catch({response:e}){u.push("/?type=admin")}};return b(async()=>{await f()}),(e,R)=>{const h=C,v=B,w=k("router-view");return o(),x("div",E,[s(m,{name:"navbar",mode:"out-in",appear:""},{default:n(()=>[s(h,{"active-page":a(i),"page-list":a(g)},null,8,["active-page","page-list"])]),_:1}),s(w,null,{default:n(({Component:A,route:y})=>[s(m,{name:"main",mode:"out-in",appear:""},{default:n(()=>[a(_)?(o(),l(v,{key:y.path.split("/")[2],title:r[a(i)].title},{default:n(()=>[(o(),l(F(A)))]),_:2},1032,["title"])):q("v-if",!0)]),_:2},1024)]),_:1})])}}}),O=D(L,[["__scopeId","data-v-316cf2b4"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminPage.vue"]]);export{O as default};