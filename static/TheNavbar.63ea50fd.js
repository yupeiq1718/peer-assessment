import{_ as g,d as b,o as p,c as m,a as e,l as k,t as d,k as B,r as S,b as c,n as s,F as $,s as T,u as C,g as v,p as I,h as M}from"./index.0a2b3067.js";import{_ as j}from"./BaseSvgIcon.60d1f658.js";import{_ as E}from"./user.ef8b3aab.js";const N={class:"main fixed left-0 md:left-12 xl:left-40 right-0 xl:right-8 top-12 md:top-4 bottom-0 md:bottom-4 bg-white md:rounded-l-xl xl:rounded-xl shadow-md"},q={class:"main-content absolute left-4 right-4 md:left-20 xl:left-12 md:right-24 xl:right-32 top-10 md:top-12 bottom-4 md:bottom-8 bg-muted-light border-4 border-muted rounded-xl shadow-md"},F={class:"absolute inset-x-4 top-7 bottom-4 overflow-auto"},A={class:"absolute left-1/2 -top-8 transform -translate-x-1/2 px-8 py-2 bg-muted text-white rounded-xl text-xl md:text-2xl font-bold whitespace-nowrap shadow-md"},D=b({__name:"TheMain",props:{title:{type:String,required:!0}},setup(n){const r=n;return(_,f)=>(p(),m("main",N,[e("div",q,[e("article",F,[k(_.$slots,"default",{},void 0,!0)]),e("h1",A,d(r.title),1)])]))}}),ee=g(D,[["__scopeId","data-v-64a4526c"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/TheMain.vue"]]);const w=n=>(I("data-v-30300f61"),n=n(),M(),n),L={class:"fixed md:hidden left-0 top-0 flex items-center justify-center w-12 h-12"},z={class:"absolute top-4 flex justify-start items-center border-b-2 border-theme pb-4 duration-500"},P=w(()=>e("img",{class:"rounded-full w-16 h-16",src:E,alt:"user"},null,-1)),V={class:"text-lg font-bold text-dark"},R={class:"text-sm text-dark"},G={class:"text-xs text-muted"},H={class:"navbar-content absolute inset-y-28 overflow-hidden flex flex-col justify-between items-center"},J=["onClick"],K={class:"absolute bottom-4 border-t-2 border-theme pt-4"},O=w(()=>e("h2",null,d("\u767B\u51FA"),-1)),Q=[O],U=b({__name:"TheNavbar",props:{activePage:{type:String,required:!0},pageList:{type:Array,required:!0}},setup(n){const r=n,_=B(()=>a=>a===r.activePage?"bg-theme fill-white text-white":"bg-theme-light fill-theme text-theme"),f=a=>v.push(a),h={name:"\u8A31\u65BE\u65DF",position:"\u4E00\u822C\u54E1\u5DE5",email:"yupeiq1718@osensetech.com"},t=S("folded"),x=a=>{t.value=a},o={navBar:{folded:"transform -translate-x-full md:translate-x-0 w-24",expanded:"w-[18rem]"},list:{folded:"py-4",expanded:"py-2"},logo:{folded:"w-0",expanded:"w-48"},icon:{folded:"w-8 h-8",expanded:"w-6 h-6"},title:{folded:"w-0",expanded:"px-4 w-48"},logoutButton:{folded:"py-4 w-16",expanded:"py-2 w-64"},logoutTitle:{folded:"w-0",expanded:"px-4 w-24"},profile:{folded:"w-0",expanded:"px-2 w-48"}},y=()=>v.push("/");return(a,i)=>{const u=j;return p(),m("nav",{onMouseenter:i[0]||(i[0]=l=>x("expanded")),onMouseleave:i[1]||(i[1]=l=>x("folded"))},[e("section",L,[c(u,{name:"menu",class:"w-8 h-8 fill-white"})]),e("section",{class:s(["navbar fixed left-0 xl:left-8 inset-y-0 md:inset-y-12 z-10 bg-theme-light rounded-r-2xl xl:rounded-2xl px-4 duration-500 shadow-md",o.navBar[t.value]])},[e("header",z,[P,e("div",{class:s([o.profile[t.value],"h-16 overflow-hidden duration-500 whitespace-nowrap"])},[e("h2",V,d(h.name),1),e("h3",R,d(h.position),1),e("p",G,d(h.email),1)],2)]),e("article",H,[e("ul",null,[(p(!0),m($,null,T(r.pageList,l=>(p(),m("li",{key:l.name,role:"button",class:s(["p-4 rounded-2xl flex justify-start items-start duration-500",[C(_)(l.name),o.list[t.value]]]),onClick:W=>f(l.url)},[c(u,{name:l.icon,class:s([o.icon[t.value],"duration-500"])},null,8,["name","class"]),e("span",{class:s(["text-lg h-7 font-bold overflow-hidden duration-500",o.title[t.value]])},[e("h2",null,d(l.title),1)],2)],10,J))),128))]),c(u,{class:s(["fill-theme h-12 duration-500",o.logo[t.value]]),name:"logo"},null,8,["class"])]),e("footer",K,[e("button",{class:s(["rounded-2xl p-4 flex justify-center items-center bg-white fill-theme text-theme duration-500",o.logoutButton[t.value]]),onClick:y},[c(u,{name:"logout",class:s([o.icon[t.value],"duration-500"])},null,8,["class"]),e("span",{class:s(["text-lg h-7 font-bold overflow-hidden duration-500",o.logoutTitle[t.value]])},Q,2)],2)])],2)],32)}}}),te=g(U,[["__scopeId","data-v-30300f61"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/TheNavbar.vue"]]);export{te as _,ee as a};
