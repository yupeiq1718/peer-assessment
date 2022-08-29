import{a as m}from"./BaseSelect.6e82dcb6.js";import{_ as p,d as u,o as r,c as s,a as n,t as i,b,F as l,s as c,l as y}from"./index.ab2214bb.js";const h={class:"p-8 bg-white rounded-xl flex flex-col"},f={class:"mb-4"},x=u({__name:"BaseFormOne",props:{title:{type:String,required:!0}},setup(o){const t=o;return(d,_)=>{const e=m;return r(),s("form",h,[n("label",f,i(t.title),1),b(e,{class:"max-w-[20rem]"})])}}}),S=p(x,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseFormOne.vue"]]),w={class:"relative border-separate border-spacing-x-0 border-spacing-y-2 text-dark text-center min-w-full"},k=["width"],g=u({__name:"BaseTable",props:{fields:{type:Array,required:!0},items:{type:Array,required:!0}},setup(o){const t=o;return(d,_)=>(r(),s("table",w,[n("thead",null,[n("tr",null,[(r(!0),s(l,null,c(t.fields,e=>(r(),s("th",{key:e.key,width:e.width,class:"px-4 py-2 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white font-bold"},i(e.name),9,k))),128))])]),n("tbody",null,[(r(!0),s(l,null,c(t.items,e=>(r(),s("tr",{key:e.key,class:"whitespace-nowrap"},[(r(!0),s(l,null,c(t.fields,a=>(r(),s("td",{key:a.key,class:"px-4 py-4 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white align-middle whitespace-nowrap"},[y(d.$slots,a.key,{data:e[a.key]})]))),128))]))),128))])]))}}),$=p(g,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseTable.vue"]]);export{S as _,$ as a};
