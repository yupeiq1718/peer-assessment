import{_ as N}from"./TheSideBar.14696c5b.js";import{_ as V}from"./BaseTable.c98cdd53.js";import{_ as S,d as b,m as _,i as C,x as E,o as u,c as I,b as n,w as a,a as p,t as B,j as L,F as Q,v as U,f as T,u as f,k as j,y as R,q as z,T as x,e as G,s as H}from"./index.043853cc.js";import{_ as J}from"./BaseScore.982bfe2c.js";import{_ as K}from"./BaseTag.9416b871.js";import{_ as O}from"./user.ef8b3aab.js";import{u as c}from"./answers.e3176c4c.js";import{u as D}from"./questions.597fad96.js";import{u as F}from"./users.af9a9982.js";import"./api.f3d74f86.js";const P={class:"mx-5 my-2"},W=p("img",{class:"inline-block rounded-full w-16 max-w-none h-16 mr-4",src:O,alt:"user"},null,-1),X=b({__name:"EmployeeStaffMain",setup($){const d=[{name:"\u59D3\u540D",key:"name"},{name:"\u90E8\u9580",key:"department",width:"20%"},{name:"\u8A55\u5206",key:"scores",width:"60%"},{name:"\u529F\u80FD",key:"function"}],w=_(()=>{var e;return(e=c().answersInformation(1))==null?void 0:e.map(s=>({name:s.reviewee.name,department:s.reviewee.department,scores:s.answers.filter(r=>r.score).map(r=>r.score),function:s.id}))}),m=C("setToastData",()=>null),i=C("setIsLoading",()=>null),h=async e=>{try{i(!0);const s=await c().deleteAnswersInformation(e);m({isActive:!0,variant:"success",message:"\u522A\u9664\u6210\u529F"}),c().readAnswersInformation({userId:1,qId:1})}catch{m({isActive:!0,variant:"error",message:"\u522A\u9664\u5931\u6557"})}finally{i(!1)}},v=E(),y=e=>v.push(`/employee/staff/edit/${e}`),A=C("setConfirmData",()=>null),t=e=>{A({isActive:!0,confirm:()=>h(e),text:"\u8ACB\u78BA\u8A8D\u662F\u5426\u522A\u9664\u8A72\u7B46\u8CC7\u6599\uFF1F"})};return(e,s)=>{const r=K,g=J,l=j,q=V;return u(),I("div",P,[n(q,{fields:d,items:f(w)},{name:a(o=>[p("div",null,[W,p("span",null,B(o.data),1)])]),department:a(o=>[n(r,{variant:"theme"},{default:a(()=>[L(B(o.data),1)]),_:2},1024)]),scores:a(o=>[(u(!0),I(Q,null,U(o.data,(k,M)=>(u(),T(g,{key:M,variant:"theme",score:k},null,8,["score"]))),128))]),function:a(o=>[p("div",null,[n(l,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"edit",onClick:k=>y(o.data)},null,8,["onClick"]),n(l,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"delete",onClick:k=>t(o.data)},null,8,["onClick"])])]),_:1},8,["items"])])}}}),Y=S(X,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/EmployeeStaffMain.vue"]]),Z={key:0,class:"absolute w-full h-full"},ee=b({__name:"EmployeeStaff",setup($){const d=E(),w=[{name:"create",icon:"plus",function:()=>d.push("/employee/staff/new")}],m=_(()=>D().questionnaire(1)),i=async t=>{try{const e=await D().readQuestionnaire(t)}catch{}},h=_(()=>c().answersInformation(1)),v=async({userId:t,qId:e})=>{try{const s=await c().readAnswersInformation({userId:t,qId:e})}catch{}},y=async()=>{try{const t=await F().readUsers()}catch{}},A=_(()=>F().users);return R(()=>{i(1),v({userId:1,qId:1}),y()}),(t,e)=>{const s=Y,r=N,g=z("router-view");return f(m)&&f(h)&&f(A)?(u(),I("div",Z,[n(s),n(x,{name:"sidebar",mode:"out-in",appear:""},{default:a(()=>[n(r,{items:w})]),_:1}),n(g,null,{default:a(({Component:l})=>[n(x,{name:"modal",mode:"out-in",appear:""},{default:a(()=>[(u(),T(H(l)))]),_:2},1024)]),_:1})])):G("v-if",!0)}}}),le=S(ee,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/EmployeeStaff.vue"]]);export{le as default};
