import{_ as z}from"./TheSideBar.0a46b73a.js";import{_ as U}from"./BaseTable.a66c6bb7.js";import{_ as $,d as q,z as n,i as B,u as V,l as a,k as _,g as o,e as x,t as E,f as i,q as G,h as r,c as D,C as H,F as J,j as f,s as K,A as O,b as P,T as L,B as W}from"./index.0dbdd8c0.js";import{_ as X}from"./BaseScore.4e2e3b99.js";import{_ as Y}from"./BaseTag.e8991360.js";import{u as v}from"./answers.b49097bc.js";import{u as M}from"./account.95136fe9.js";import{g as S,d as Z}from"./data.6ab9a877.js";import{u as N}from"./system.6a3a7555.js";import{u as T}from"./questions.ee41367c.js";import{u as ee}from"./users.4685495f.js";import"./api.a5ece804.js";const te={class:"flex justify-start items-center"},se=["src"],ne={key:0},oe=q({__name:"EmployeeLeaderMain",setup(j){const y=n(()=>N().systemStatus),h=n(()=>M().accountId),w=[{name:"\u59D3\u540D",key:"profile"},{name:"\u90E8\u9580",key:"department",width:"20%"},{name:"\u8A55\u5206",key:"scores",width:"60%"},{name:"\u529F\u80FD",key:"function"}],g=n(()=>{var e;return(e=v().answersInformation(2))==null?void 0:e.map(t=>({profile:{name:t.reviewee.name,picture:t.reviewee.picture},department:t.reviewee.department,scores:t.answers.filter(p=>p.score).map(p=>p.score),function:t.id}))}),A=e=>Z.findIndex(t=>e===t.value),m=B("setToastData",()=>null),d=B("setIsLoading",()=>null),k=async e=>{try{d(!0);const t=await v().deleteAnswersInformation(e);m({isActive:!0,variant:"success",message:"\u522A\u9664\u6210\u529F"}),v().readAnswersInformation({userId:h.value,qId:2})}catch{m({isActive:!0,variant:"error",message:"\u522A\u9664\u5931\u6557"})}finally{d(!1)}},u=V(),c=e=>u.push(`/employee/leader/edit/${e}`),l=B("setConfirmData",()=>null),I=e=>{l({isActive:!0,confirm:()=>k(e),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u522A\u9664\u8A72\u7B46\u8CC7\u6599\uFF1F"})};return(e,t)=>{const p=Y,Q=X,F=K,R=U;return a(),_(R,{fields:w,items:r(g)},{profile:o(s=>[x("div",te,[x("img",{class:"inline-block rounded-full w-16 max-w-none h-16 mr-4",src:s.data.picture||"/user.png",alt:"user"},null,8,se),x("span",null,E(s.data.name),1)])]),department:o(s=>[i(p,{variant:r(S)(A(s.data))},{default:o(()=>[G(E(s.data),1)]),_:2},1032,["variant"])]),scores:o(s=>[(a(!0),D(J,null,H(s.data,(C,b)=>(a(),_(Q,{key:b,class:"w-[4.5rem] h-[4.5rem]",variant:r(S)(b),score:C},null,8,["variant","score"]))),128))]),function:o(s=>[r(y)===1?(a(),D("div",ne,[i(F,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"edit",onClick:C=>c(s.data)},null,8,["onClick"]),i(F,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"delete",onClick:C=>I(s.data)},null,8,["onClick"])])):f("v-if",!0)]),_:1},8,["items"])}}}),ae=$(oe,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/EmployeeLeaderMain.vue"]]),re={key:0,class:"absolute w-full h-full pt-6 px-4"},ue=q({__name:"EmployeeLeader",setup(j){const y=n(()=>N().systemStatus),h=n(()=>M().accountId),w=V(),g=n(()=>y.value===1&&[{name:"create",icon:"plus",function:()=>w.push("/employee/leader/new")}]),A=async u=>{try{const c=await T().readQuestionnaire(u)}catch{}},m=n(()=>T().questionnaire(2)),d=async({userId:u,qId:c})=>{try{const l=await v().readAnswersInformation({userId:u,qId:c})}catch{}},k=n(()=>ee().users);return O(()=>{A(2),d({userId:h.value,qId:2})}),(u,c)=>{const l=ae,I=z,e=P("router-view");return r(k)?(a(),D("div",re,[i(l),i(L,{name:"sidebar",mode:"out-in",appear:""},{default:o(()=>[r(m)?(a(),_(I,{key:0,items:r(g)},null,8,["items"])):f("v-if",!0)]),_:1}),r(m)?(a(),_(e,{key:0},{default:o(({Component:t})=>[i(L,{name:"modal",mode:"out-in",appear:""},{default:o(()=>[(a(),_(W(t)))]),_:2},1024)]),_:1})):f("v-if",!0)])):f("v-if",!0)}}}),ge=$(ue,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeeLeader.vue"]]);export{ge as default};
