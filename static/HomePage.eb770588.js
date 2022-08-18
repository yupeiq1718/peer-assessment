import{_ as B}from"./BaseSvgIcon.0390324e.js";import{_ as v}from"./BaseButton.a8db34fd.js";import{_ as b,d as y,i as p,r as k,o as a,c as m,a as e,b as _,w as i,u as t,n as w,t as s,e as d,f,g as E,h as r}from"./index.bbe5ce13.js";const C="/peer-assessment/static/google.1d63dcad.png",D={class:"fixed w-full inset-y-0 bg-theme duration-1000 px-0 md:px-8 py-8 flex justify-center items-center"},A={class:"relative container max-h-full h-[40rem] md:h-[45rem] grid grid-cols-12 items-center"},F=e("div",{class:"absolute w-full h-3/4 hidden md:block rounded-2xl bg-theme-light shadow-md ease-linear duration-1000"},null,-1),$={class:"absolute left-[8.33%] hidden md:block w-1/3 text-center"},P=e("p",{class:"text-muted mb-4 text-lg"},s("\u6211\u60F3\u8981\u586B\u5BEB\u4E92\u8A55\u554F\u5377"),-1),N=r(s("\u5207\u63DB\u54E1\u5DE5\u767B\u5165")),V={class:"absolute right-[8.33%] hidden md:block w-1/3 text-center"},j=e("p",{class:"text-muted mb-4 text-lg"},s("\u6211\u60F3\u8981\u8A2D\u5B9A\u4E92\u8A55\u7CFB\u7D71"),-1),H=r(s("\u5207\u63DB\u7BA1\u7406\u54E1\u767B\u5165")),S={class:"text-center text-dark"},z=e("h1",{class:"text-2xl font-bold mb-4"},s("\u5149\u79BE\u611F\u77E5\u4E92\u8A55\u7CFB\u7D71"),-1),I={key:0},M={key:1},T={class:"text-center"},q=r(s("\u5207\u63DB\u54E1\u5DE5\u767B\u5165")),G=r(s("\u5207\u63DB\u7BA1\u7406\u54E1\u767B\u5165")),J=y({__name:"HomePage",setup(K){const n=p("type",k("employee")),u=p("switchPosition",()=>null),h=()=>{E.push(`/${n.value}`)},x={employee:"left-[8.33%] ",admin:"left-[8.33%] md:left-[41.67%] xl:left-[58.33%]"};return u("employee"),(L,o)=>{const l=v,g=B;return a(),m("div",D,[e("div",A,[F,e("section",$,[P,_(l,{variant:"muted",class:"bg-transparent text-md",onClick:o[0]||(o[0]=c=>t(u)("employee"))},{default:i(()=>[N]),_:1})]),e("section",V,[j,_(l,{variant:"muted",class:"bg-transparent text-md",onClick:o[1]||(o[1]=c=>t(u)("admin"))},{default:i(()=>[H]),_:1})]),e("section",{class:w(["absolute bg-white w-5/6 md:w-1/2 xl:w-1/3 h-full rounded-2xl shadow-md duration-1000 ease-in-out px-8 flex justify-evenly items-center flex-col",x[t(n)]])},[e("header",null,[_(g,{name:"logo",class:"w-full fill-theme duration-1000"})]),e("article",S,[z,t(n)==="employee"?(a(),m("p",I,s("\u54E1\u5DE5\u767B\u5165"))):d("v-if",!0),t(n)==="admin"?(a(),m("p",M,s("\u7BA1\u7406\u54E1\u767B\u5165"))):d("v-if",!0)]),e("footer",T,[e("img",{src:C,alt:"google",class:"mb-4",onClick:h}),t(n)==="admin"?(a(),f(l,{key:0,variant:"theme",class:"bg-transparent text-md md:hidden",onClick:o[2]||(o[2]=c=>t(u)("employee"))},{default:i(()=>[q]),_:1})):d("v-if",!0),t(n)==="employee"?(a(),f(l,{key:1,variant:"theme",class:"bg-transparent text-md md:hidden",onClick:o[3]||(o[3]=c=>t(u)("admin"))},{default:i(()=>[G]),_:1})):d("v-if",!0)])],2)])])}}}),U=b(J,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/HomePage.vue"]]);export{U as default};
