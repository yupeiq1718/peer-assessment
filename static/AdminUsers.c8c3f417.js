import{_ as D}from"./TheModal.fa46856d.js";import{_ as x,a as T}from"./BaseTable.81aeed77.js";import{_ as p,o as t,c as i,b as e,d as g,a as u,t as m,F as C,s as S,f as d,w as o,j as h,r as F,T as k,e as v}from"./index.1ac8fa56.js";import{_ as $}from"./BaseSelect.cc9756fe.js";import{_ as q}from"./BaseInput.f8061f80.js";import{_ as M}from"./TheSideBar.c52465d4.js";import{_ as N}from"./BaseSvgIcon.5f3c17ee.js";import{_ as O}from"./user.ef8b3aab.js";const V={},z={class:"m-2"};function I(r,n){const s=x;return t(),i("div",z,[e(s,{class:"mb-4",title:"\u90E8\u9580"}),e(s,{class:"mb-4",title:"\u89D2\u8272"})])}const j=p(V,[["render",I],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminUsersFilter.vue"]]),L={class:"p-8 pb-4 bg-white rounded-xl flex flex-col items-start"},G={class:"mb-4"},H=g({__name:"BaseFormFive",props:{title:{type:String,required:!0},tags:{type:Array,required:!0}},setup(r){const n=r;return(s,a)=>{const c=$;return t(),i("form",L,[u("label",G,m(n.title),1),u("div",null,[(t(!0),i(C,null,S(r.tags,_=>(t(),d(c,{key:_,class:"inline-block mr-4 mb-4",variant:"theme"},{default:o(()=>[h(m(_),1)]),_:2},1024))),128))])])}}}),w=p(H,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseFormFive.vue"]]),J={class:"p-8 bg-white rounded-xl flex flex-col"},K={class:"mb-4"},P=g({__name:"BaseFormFour",props:{title:{type:String,required:!0}},setup(r){const n=r;return(s,a)=>{const c=q;return t(),i("form",J,[u("label",K,m(n.title),1),e(c,{type:"text",class:"max-w-[20rem]"})])}}}),y=p(P,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseFormFour.vue"]]),Q={},R={class:"m-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"};function W(r,n){const s=y,a=x,c=w;return t(),i("article",R,[e(s,{class:"col-span-1",title:"\u59D3\u540D"}),e(s,{class:"col-span-1",title:"\u96FB\u5B50\u90F5\u4EF6"}),e(a,{class:"col-start-1 col-span-1",title:"\u90E8\u9580"}),e(a,{class:"col-span-1",title:"\u4E3B\u7BA1"}),e(c,{class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u89D2\u8272",tags:["\u4E00\u822C\u54E1\u5DE5","\u4E00\u822C\u4E3B\u7BA1","\u9AD8\u7D1A\u4E3B\u7BA1","\u7BA1\u7406\u54E1"]})])}const X=p(Q,[["render",W],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminUsersCreate.vue"]]),Y={},Z={class:"m-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"};function ee(r,n){const s=y,a=x,c=w;return t(),i("article",Z,[e(s,{class:"col-span-1",title:"\u59D3\u540D"}),e(s,{class:"col-span-1",title:"\u96FB\u5B50\u90F5\u4EF6"}),e(a,{class:"col-start-1 col-span-1",title:"\u90E8\u9580"}),e(a,{class:"col-span-1",title:"\u4E3B\u7BA1"}),e(c,{class:"col-span-1 lg:col-span-2 2xl:col-span-3",title:"\u89D2\u8272",tags:["\u4E00\u822C\u54E1\u5DE5","\u4E00\u822C\u4E3B\u7BA1","\u9AD8\u7D1A\u4E3B\u7BA1","\u7BA1\u7406\u54E1"]})])}const se=p(Y,[["render",ee],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminUsersUpdate.vue"]]),ne={class:"mx-5 my-2"},te=u("img",{class:"inline-block rounded-full w-16 max-w-none h-16 mr-4",src:O,alt:"user"},null,-1),oe=g({__name:"AdminUsersMain",setup(r){const n=[{name:"\u59D3\u540D",key:"name"},{name:"\u96FB\u5B50\u4FE1\u7BB1",key:"email",width:"40%"},{name:"\u90E8\u9580",key:"department",width:"20%"},{name:"\u89D2\u8272",key:"role",width:"20%"},{name:"\u529F\u80FD",key:"function"}],s=F([{key:"1",name:"\u8A31\u65BE\u65DF",email:"yupeiq1718@osensetech.com",department:"O2 meta \u7D44",role:"\u4E00\u822C\u54E1\u5DE5"},{key:"2",name:"\u5289\u4E8E\u7444",email:"claire.liu@osensetech.com",department:"\u5C08\u6848\u7D44",role:"\u4E00\u822C\u4E3B\u7BA1"}]);return(a,c)=>{const _=$,f=N,B=T;return t(),i("div",ne,[e(B,{fields:n,items:s.value},{name:o(l=>[u("div",null,[te,u("span",null,m(l.data),1)])]),email:o(l=>[h(m(l.data),1)]),department:o(l=>[e(_,{variant:"theme"},{default:o(()=>[h(m(l.data),1)]),_:2},1024)]),role:o(l=>[e(_,{variant:"theme"},{default:o(()=>[h(m(l.data),1)]),_:2},1024)]),function:o(()=>[u("div",null,[e(f,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"edit"}),e(f,{role:"button",class:"w-6 h-6 m-2 fill-muted hover:fill-theme",name:"delete"})])]),_:1},8,["items"])])}}}),ae=p(oe,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/AdminUsersMain.vue"]]),re={class:"absolute w-full h-full"},ce=g({__name:"AdminUsers",setup(r){const n=F(!1),s=F(""),a=[{name:"plus",icon:"plus",function:()=>{n.value=!0,s.value="create"}},{name:"filter",icon:"filter",function:()=>{n.value=!0,s.value="filter"}}];return(c,_)=>{const f=ae,B=M,l=se,b=X,A=j,U=D;return t(),i("div",re,[e(f),e(k,{name:"sidebar",mode:"out-in",appear:""},{default:o(()=>[e(B,{items:a})]),_:1}),e(k,{name:"modal",mode:"out-in"},{default:o(()=>[n.value?(t(),d(U,{key:0,"is-active":n.value,"onUpdate:is-active":_[0]||(_[0]=E=>n.value=E),size:s.value==="filter"?"side":"full"},{default:o(()=>[s.value==="update"?(t(),d(l,{key:0})):v("v-if",!0),s.value==="create"?(t(),d(b,{key:1})):v("v-if",!0),s.value==="filter"?(t(),d(A,{key:2})):v("v-if",!0)]),_:1},8,["is-active","size"])):v("v-if",!0)]),_:1})])}}}),ve=p(ce,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/AdminUsers.vue"]]);export{ve as default};
