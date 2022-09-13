import{_ as B}from"./TheSideBar.e07b7420.js";import{_ as k}from"./BaseTable.1aeea5b1.js";import{_ as y}from"./BaseSvgIcon.4c111a3f.js";import{_ as E}from"./BaseTag.c0a8e334.js";import{_ as p,d,r as D,o as l,c as f,b as n,w as e,a as r,t as m,j as _,v as g,m as x,T as c,f as A,q as b}from"./index.8c98bab7.js";import{_ as C}from"./user.ef8b3aab.js";const T={class:"mx-5 my-2"},U=r("img",{class:"inline-block rounded-full w-16 max-w-none h-16 mr-4",src:C,alt:"user"},null,-1),F=d({__name:"AdminUsersMain",setup(h){const s=[{name:"\u59D3\u540D",key:"name"},{name:"\u96FB\u5B50\u4FE1\u7BB1",key:"email",width:"40%"},{name:"\u90E8\u9580",key:"department",width:"20%"},{name:"\u89D2\u8272",key:"role",width:"20%"},{name:"\u529F\u80FD",key:"function"}],u=D([{key:"1",name:"\u8A31\u65BE\u65DF",email:"yupeiq1718@osensetech.com",department:"O2 meta \u7D44",role:"\u4E00\u822C\u54E1\u5DE5"},{key:"2",name:"\u5289\u4E8E\u7444",email:"claire.liu@osensetech.com",department:"\u5C08\u6848\u7D44",role:"\u4E00\u822C\u4E3B\u7BA1"}]);return(v,w)=>{const o=E,a=y,i=k;return l(),f("div",T,[n(i,{fields:s,items:u.value},{name:e(t=>[r("div",null,[U,r("span",null,m(t.data),1)])]),email:e(t=>[_(m(t.data),1)]),department:e(t=>[n(o,{variant:"theme"},{default:e(()=>[_(m(t.data),1)]),_:2},1024)]),role:e(t=>[n(o,{variant:"theme"},{default:e(()=>[_(m(t.data),1)]),_:2},1024)]),function:e(()=>[r("div",null,[n(a,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"edit"}),n(a,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"delete"})])]),_:1},8,["items"])])}}}),$=p(F,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminUsersMain.vue"]]),M={class:"absolute w-full h-full"},N=d({__name:"AdminUsers",setup(h){const s=g(),u=[{name:"create",icon:"plus",function:()=>s.push("/admin/users/create")},{name:"filter",icon:"filter",function:()=>s.push("/admin/users/filter")}];return(v,w)=>{const o=$,a=B,i=x("router-view");return l(),f("div",M,[n(o),n(c,{name:"sidebar",mode:"out-in",appear:""},{default:e(()=>[n(a,{items:u})]),_:1}),n(i,null,{default:e(({Component:t})=>[n(c,{name:"modal",mode:"out-in",appear:""},{default:e(()=>[(l(),A(b(t)))]),_:2},1024)]),_:1})])}}}),R=p(N,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminUsers.vue"]]);export{R as default};
