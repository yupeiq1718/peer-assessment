import{a as L}from"./TheSideBar.e0a14270.js";import{_ as x,d as b,A as F,o as m,c as y,e as u,t as o,h as t,F as g,Y as _,u as $,i as h,b as P,k as C,j as R,f as l,g as B,T as f,C as Y,y as c}from"./index.0be65a8a.js";import{u as d}from"./system.f580cd77.js";import{s as r}from"./data.ff9c2fa5.js";import{u as q}from"./answers.e8e743fd.js";import"./api.c2bc4a84.js";const z={class:"bg-white rounded-2xl px-6 py-4 my-4 flex justify-between items-center"},G={class:"text-lg font-bold"},H=u("span",{class:"text-dark"},o("\u4E92\u8A55\u72C0\u614B")+"\uFF1A",-1),J={class:"text-theme"},K=u("hr",{class:"border-1 border-muted my-4 w-full"},null,-1),O={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},Q={class:"bg-white rounded-2xl px-6 py-4"},U={class:"text-lg font-bold text-dark mb-2"},W=_('<p class="text-dark">\u958B\u653E\u586B\u5BEB\u4E92\u8A55\u554F\u5377\u3002\u9EDE\u9078\u300C\u66AB\u505C\u300D\u53EF\u5207\u63DB\u7CFB\u7D71\u81F3\u300C\u66AB\u505C\u4E2D\u300D\u3002</p><section class="my-4 border-2 border-light p-4"><h3 class="font-bold text-dark mb-2">\u54E1\u5DE5\uFF1A</h3><ul class="text-muted"><li>\u54E1\u5DE5\u4E92\u8A55\u586B\u5BEB</li></ul></section><section class="my-4 border-2 border-light p-4"><h3 class="font-bold text-dark mb-2">\u4E3B\u7BA1\uFF1A</h3><ul class="text-muted"><li>\u4E3B\u7BA1\u4E92\u8A55\u586B\u5BEB</li><li>\u6B77\u53F2\u7D50\u679C\u67E5\u8A62</li></ul></section><section class="my-4 border-2 border-light p-4"><h3 class="font-bold text-dark mb-2">\u7BA1\u7406\u54E1\uFF1A</h3><ul class="text-muted"><li>\u4F7F\u7528\u8005\u8A2D\u5B9A</li><li>\u672A\u586B\u540D\u55AE\u63D0\u9192</li><li>\u6B77\u53F2\u7D50\u679C\u67E5\u8A62</li><li>\u7CFB\u7D71\u72C0\u614B\u8A2D\u5B9A</li></ul></section>',4),X={class:"bg-white rounded-2xl px-6 py-4"},Z={class:"text-lg font-bold text-dark mb-2"},uu=_('<p class="text-dark">\u66AB\u6642\u7121\u6CD5\u586B\u5BEB\u4E92\u8A55\u554F\u5238\u3002\u9EDE\u9078\u300C\u6062\u5FA9\u9032\u884C\u300D\u53EF\u5207\u63DB\u7CFB\u7D71\u56DE\u300C\u9032\u884C\u4E2D\u300D\u3002\u9EDE\u9078\u300C\u7522\u751F\u4E92\u8A55\u7D50\u679C\u300D\u53EF\u7522\u751F\u672C\u6B21\u4E92\u8A55\u7D50\u679C\u4E26\u7D50\u675F\u672C\u6B21\u4E92\u8A55\u586B\u5BEB\u3002\u9EDE\u9078\u300C\u522A\u9664\u4E92\u8A55\u7D00\u9304\u300D\u53EF\u522A\u9664\u672C\u6B21\u4E92\u8A55\u7D00\u9304\u4E26\u7D50\u675F\u672C\u6B21\u4E92\u8A55\u586B\u5BEB\u3002</p><section class="my-4 border-2 border-light p-4"><h3 class="font-bold text-dark mb-2">\u4E3B\u7BA1\uFF1A</h3><ul class="text-muted"><li>\u6B77\u53F2\u7D50\u679C\u67E5\u8A62</li></ul></section><section class="my-4 border-2 border-light p-4"><h3 class="font-bold text-dark mb-2">\u7BA1\u7406\u54E1\uFF1A</h3><ul class="text-muted"><li>\u4F7F\u7528\u8005\u8A2D\u5B9A</li><li>\u672A\u586B\u540D\u55AE\u63D0\u9192</li><li>\u6B77\u53F2\u7D50\u679C\u67E5\u8A62</li><li>\u7CFB\u7D71\u72C0\u614B\u8A2D\u5B9A</li></ul></section>',3),tu={class:"bg-white rounded-2xl px-6 py-4"},eu={class:"text-lg font-bold text-dark mb-2"},su=_('<p class="text-dark">\u4E92\u8A55\u5C1A\u672A\u958B\u59CB\u3002\u9EDE\u9078\u300C\u958B\u59CB\u300D\u53EF\u5207\u63DB\u7CFB\u7D71\u81F3 \u300C\u9032\u884C\u4E2D\u300D\u3002</p><section class="my-4 border-2 border-light p-4"><h3 class="font-bold text-dark mb-2">\u4E3B\u7BA1\uFF1A</h3><ul class="text-muted"><li>\u6B77\u53F2\u7D50\u679C\u67E5\u8A62</li></ul></section><section class="my-4 border-2 border-light p-4"><h3 class="font-bold text-dark mb-2">\u7BA1\u7406\u54E1\uFF1A</h3><ul class="text-muted"><li>\u4F7F\u7528\u8005\u8A2D\u5B9A</li><li>\u554F\u5377\u8A2D\u5B9A</li><li>\u6B77\u53F2\u7D50\u679C\u67E5\u8A62</li><li>\u7CFB\u7D71\u72C0\u614B\u8A2D\u5B9A</li></ul></section>',3),ou=b({__name:"AdminSystemMain",setup(v){const n=F(()=>d().systemStatus);return(p,E)=>{var s;return m(),y(g,null,[u("header",z,[u("h2",G,[H,u("span",J,o((s=t(r)[t(n)])==null?void 0:s.text),1)])]),K,u("article",O,[u("section",Q,[u("h2",U,o(t(r)[1].text)+"\uFF1A ",1),W]),u("section",X,[u("h2",Z,o(t(r)[2].text)+"\uFF1A ",1),uu]),u("section",tu,[u("h2",eu,o(t(r)[0].text)+"\uFF1A ",1),su])])],64)}}}),nu=x(ou,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminSystemMain.vue"]]),au={class:"absolute w-full h-full pt-6 px-4"},iu=b({__name:"AdminSystem",setup(v){const n=F(()=>d().systemStatus),p=$(),E=F(()=>{switch(n.value){case 0:return[{name:"\u958B\u59CB",icon:"begin",function:S}];case 1:return[{name:"\u66AB\u505C",icon:"pause",function:k}];case 2:return[{name:"\u6062\u5FA9\u9032\u884C",icon:"play",function:w},{name:"\u5132\u5B58\u4E92\u8A55\u7D50\u679C",icon:"file_save",function:()=>p.push("/admin/system/save")},{name:"\u522A\u9664\u4E92\u8A55\u7D50\u679C",icon:"file_delete",function:T}];default:return[]}}),s=async()=>{try{const e=await d().readSystemStatus()}catch({response:e}){}},a=h("setToastData",()=>null),i=h("setIsLoading",()=>null),S=()=>{c().setConfirmData({isActive:!0,confirm:()=>A(1),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u958B\u59CB\u4E92\u8A55\u586B\u5BEB\uFF1F"})},k=()=>{c().setConfirmData({isActive:!0,confirm:()=>A(2),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u66AB\u505C\u4E92\u8A55\u586B\u5BEB\uFF1F"})},w=()=>{c().setConfirmData({isActive:!0,confirm:()=>A(1),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u6062\u5FA9\u9032\u884C\u4E92\u8A55\u586B\u5BEB\uFF1F"})},T=()=>{c().setConfirmData({isActive:!0,confirm:()=>I(),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u522A\u9664\u6240\u6709\u4E92\u8A55\u4E26\u7D50\u675F\u6B64\u6B21\u4E92\u8A55\u586B\u5BEB\uFF1F"})},A=async e=>{try{i(!0);const D=await d().updateSystemStatus(e);await s(),a({isActive:!0,variant:"success",message:"\u66F4\u65B0\u6210\u529F"})}catch({response:D}){a({isActive:!0,variant:"error",message:"\u66F4\u65B0\u5931\u6557"})}finally{i(!1)}},I=async()=>{try{i(!0);const e=await q().deleteAllAnswersInformation();await s(),a({isActive:!0,variant:"success",message:"\u522A\u9664\u6210\u529F"})}catch({response:e}){a({isActive:!0,variant:"error",message:"\u522A\u9664\u5931\u6557"})}finally{i(!1)}};return(e,D)=>{const N=nu,V=L,j=P("router-view");return m(),y(g,null,[u("div",au,[t(n)!==void 0?(m(),C(N,{key:0})):R("v-if",!0)]),l(f,{name:"sidebar",mode:"out-in",appear:""},{default:B(()=>[l(V,{items:t(E)},null,8,["items"])]),_:1}),l(j,null,{default:B(({Component:M})=>[l(f,{name:"modal",mode:"out-in",appear:""},{default:B(()=>[(m(),C(Y(M)))]),_:2},1024)]),_:1})],64)}}}),Bu=x(iu,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminSystem.vue"]]);export{Bu as default};
