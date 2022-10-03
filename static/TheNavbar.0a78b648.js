import{_ as C,d as I,l as a,c as r,e,f as u,g as j,v as q,T as N,t as c,z as k,r as S,i as z,h as i,n,F as $,C as T,j as A,D as B,s as D,p as F,m as V}from"./index.57433029.js";import{u as P}from"./account.85edfc9e.js";import{u as E}from"./users.f875ecc3.js";import{r as R}from"./data.6ab9a877.js";const U={class:"main fixed left-0 lg:left-12 2xl:left-40 right-0 2xl:right-8 top-12 lg:top-4 bottom-0 lg:bottom-4 bg-white lg:rounded-l-2xl 2xl:rounded-2xl shadow-md"},G={class:"main-content absolute left-4 right-4 lg:left-20 2xl:left-12 lg:right-24 2xl:right-32 top-10 lg:top-12 bottom-4 lg:bottom-8 bg-muted-light border-4 border-muted rounded-2xl shadow-md"},H={class:"absolute inset-4 overflow-auto"},J={class:"absolute left-1/2 -top-8 transform -translate-x-1/2 px-8 py-2 bg-muted text-white rounded-2xl text-xl lg:text-2xl font-bold whitespace-nowrap shadow-md"},K=I({__name:"TheMain",props:{title:{type:String,required:!0}},setup(l){const p=l;return(f,x)=>(a(),r("main",U,[e("div",G,[u(N,{name:"article",mode:"out-in",appear:""},{default:j(()=>[e("article",H,[q(f.$slots,"default",{},void 0,!0)])]),_:3}),e("h1",J,c(p.title),1)])]))}}),pe=C(K,[["__scopeId","data-v-64a4526c"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/TheMain.vue"]]);const O=l=>(F("data-v-30300f61"),l=l(),V(),l),Q={class:"fixed lg:hidden left-0 top-0 flex items-center justify-center w-12 h-12"},W={class:"absolute top-4 flex justify-start items-center border-b-2 border-theme pb-4 duration-500"},X=["src"],Y={class:"text-lg font-bold text-dark"},Z={class:"text-sm text-dark"},ee={class:"text-xs text-muted"},te={key:0,class:"absolute inset-y-28 overflow-hidden flex flex-col justify-between items-center duration-1000"},se=["onClick"],oe={class:"absolute bottom-4 border-t-2 border-theme pt-4"},ne=O(()=>e("h2",null,c("\u767B\u51FA"),-1)),le=[ne],ae=I({__name:"TheNavbar",props:{activePage:{type:String,required:!0},pageList:{type:Array,required:!0}},setup(l){const p=l,f=k(()=>d=>d===p.activePage?"bg-theme fill-white text-white":"bg-theme-light fill-theme text-theme"),x=d=>B.push(d),m=k(()=>E().user(Number(P().accountId))),t=S("folded"),g=d=>{t.value=d},M=z("type",S("admin")),o={navBar:{folded:"transform -translate-x-full lg:translate-x-0 w-24",expanded:"w-[18rem]"},list:{folded:"py-4",expanded:"py-2"},logo:{folded:"w-0",expanded:"w-48"},icon:{folded:"w-8 h-8",expanded:"w-6 h-6"},title:{folded:"w-0",expanded:"px-4 w-48"},logoutButton:{folded:"py-4 w-16",expanded:"py-2 w-64"},logoutTitle:{folded:"w-0",expanded:"px-4 w-24"},profile:{folded:"w-0",expanded:"px-2 w-48"}},L=()=>{window.sessionStorage.setItem("access-token",""),B.push(`/?type=${M.value}`)};return(d,_)=>{var v,w,b,y;const h=D;return a(),r("nav",{onMouseenter:_[0]||(_[0]=s=>g("expanded")),onMouseleave:_[1]||(_[1]=s=>g("folded"))},[e("section",Q,[u(h,{name:"menu",class:"w-8 h-8 fill-white"})]),e("section",{class:n(["navbar fixed left-0 2xl:left-8 inset-y-0 lg:inset-y-12 z-10 bg-theme-light rounded-r-2xl 2xl:rounded-2xl px-4 duration-500 shadow-md",o.navBar[t.value]])},[e("header",W,[e("img",{class:"image relative rounded-full w-16 h-16",src:((v=i(m))==null?void 0:v.picture)||"/user.png",alt:"user"},null,8,X),e("div",{class:n([o.profile[t.value],"h-16 overflow-hidden duration-500 whitespace-nowrap"])},[e("h2",Y,c((w=i(m))==null?void 0:w.name),1),e("h3",Z,[(a(!0),r($,null,T((b=i(m))==null?void 0:b.roles,s=>(a(),r("span",{key:s,class:"mr-1"},c(i(R)[s-1].text),1))),128))]),e("p",ee,c((y=i(m))==null?void 0:y.email),1)],2)]),u(N,{name:"navbar-content",mode:"out-in",appear:""},{default:j(()=>[l.pageList.length?(a(),r("article",te,[e("ul",null,[(a(!0),r($,null,T(p.pageList,s=>(a(),r("li",{key:s.name,role:"button",class:n(["p-4 rounded-2xl flex justify-start items-center duration-500",[i(f)(s.name),o.list[t.value]]]),onClick:re=>x(s.url)},[u(h,{name:s.icon,class:n([o.icon[t.value],"duration-500"])},null,8,["name","class"]),e("span",{class:n(["text-lg h-7 font-bold overflow-hidden duration-500",o.title[t.value]])},[e("h2",null,c(s.title),1)],2)],10,se))),128))]),u(h,{class:n(["fill-theme h-12 duration-500",o.logo[t.value]]),name:"logo"},null,8,["class"])])):A("v-if",!0)]),_:1}),e("footer",oe,[e("button",{class:n(["image rounded-2xl p-4 flex justify-center items-center bg-white fill-theme text-theme duration-500",o.logoutButton[t.value]]),onClick:L},[u(h,{name:"logout",class:n(o.icon[t.value])},null,8,["class"]),e("span",{class:n(["text-lg h-7 font-bold overflow-hidden",o.logoutTitle[t.value]])},le,2)],2)])],2)],32)}}}),me=C(ae,[["__scopeId","data-v-30300f61"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/TheNavbar.vue"]]);export{me as _,pe as a};
