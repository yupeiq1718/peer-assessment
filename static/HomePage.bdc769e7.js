import{_ as v,a as E}from"./BaseButton.20e77250.js";import{_ as y,d as b,r as k,c as m,a as e,b as _,w as d,n as w,t,e as i,f,o as u,g as c}from"./index.ab5ac4ae.js";const C="/peer-assessment/static/google.1d63dcad.png",D={class:"fixed w-full h-screen bg-theme duration-1000 px-0 md:px-8 py-8 flex justify-center items-center"},A={class:"relative container max-h-full h-[40rem] md:h-[45rem] grid grid-cols-12 items-center"},F=e("div",{class:"absolute w-full h-3/4 hidden md:block rounded-2xl bg-theme-light drop-shadow-md ease-linear duration-1000"},null,-1),P={class:"absolute left-[8.33%] hidden md:block w-1/3 text-center"},$=e("p",{class:"text-muted mb-4 text-lg"},t("\u6211\u60F3\u8981\u586B\u5BEB\u4E92\u8A55\u554F\u5377"),-1),N=c(t("\u5207\u63DB\u54E1\u5DE5\u767B\u5165")),V={class:"absolute right-[8.33%] hidden md:block w-1/3 text-center"},H=e("p",{class:"text-muted mb-4 text-lg"},t("\u6211\u60F3\u8981\u8A2D\u5B9A\u4E92\u8A55\u7CFB\u7D71"),-1),T=c(t("\u5207\u63DB\u7BA1\u7406\u54E1\u767B\u5165")),j={class:"text-center text-dark"},M=e("h1",{class:"text-2xl font-bold mb-4"},t("\u5149\u79BE\u611F\u77E5\u4E92\u8A55\u7CFB\u7D71"),-1),S={key:0},z={key:1},I={class:"text-center"},q=e("img",{src:C,alt:"google",class:"mb-4"},null,-1),G=c(t("\u5207\u63DB\u54E1\u5DE5\u767B\u5165")),J=c(t("\u5207\u63DB\u7BA1\u7406\u54E1\u767B\u5165")),K=b({__name:"HomePage",setup(L){const n=k("employee"),x=s=>{n.value=s},p={employee:["#A2CED3","#E8F3F4"],admin:["#D4B3AE","#F4ECEB"]},h=s=>{document.documentElement.style.setProperty("--color-theme",p[s][0]),document.documentElement.style.setProperty("--color-theme-light",p[s][1])};h(n.value);const l=s=>{h(s),x(s)},g={employee:"left-[8.33%] ",admin:"left-[8.33%] md:left-[41.67%] xl:left-[58.33%]"};return(s,o)=>{const a=v,B=E;return u(),m("div",D,[e("div",A,[F,e("section",P,[$,_(a,{variant:"muted",class:"bg-transparent text-md",onClick:o[0]||(o[0]=r=>l("employee"))},{default:d(()=>[N]),_:1})]),e("section",V,[H,_(a,{variant:"muted",class:"bg-transparent text-md",onClick:o[1]||(o[1]=r=>l("admin"))},{default:d(()=>[T]),_:1})]),e("section",{class:w(["absolute bg-white w-5/6 md:w-1/2 xl:w-1/3 h-full rounded-2xl drop-shadow-md duration-1000 ease-in-out px-8 flex justify-evenly items-center flex-col",g[n.value]])},[e("header",null,[_(B,{name:"logo",class:"w-full fill-theme duration-1000"})]),e("article",j,[M,n.value==="employee"?(u(),m("p",S,t("\u54E1\u5DE5\u767B\u5165"))):i("v-if",!0),n.value==="admin"?(u(),m("p",z,t("\u7BA1\u7406\u54E1\u767B\u5165"))):i("v-if",!0)]),e("footer",I,[q,n.value==="admin"?(u(),f(a,{key:0,variant:"theme",class:"bg-transparent text-md md:hidden",onClick:o[2]||(o[2]=r=>l("employee"))},{default:d(()=>[G]),_:1})):i("v-if",!0),n.value==="employee"?(u(),f(a,{key:1,variant:"theme",class:"bg-transparent text-md md:hidden",onClick:o[3]||(o[3]=r=>l("admin"))},{default:d(()=>[J]),_:1})):i("v-if",!0)])],2)])])}}}),R=y(K,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/views/HomePage.vue"]]);export{R as default};
