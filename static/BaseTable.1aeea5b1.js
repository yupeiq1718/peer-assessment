import{_ as i,d as p,o as e,c as r,a as n,F as o,s as l,t as c,l as y}from"./index.8c98bab7.js";const _={class:"relative border-separate border-spacing-x-0 border-spacing-y-2 text-dark text-center min-w-full"},b=["width"],m=p({__name:"BaseTable",props:{fields:{type:Array,required:!0},items:{type:Array,required:!0}},setup(d){const s=d;return(u,h)=>(e(),r("table",_,[n("thead",null,[n("tr",null,[(e(!0),r(o,null,l(s.fields,t=>(e(),r("th",{key:t.key,width:t.width,class:"px-4 py-2 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white font-bold"},c(t.name),9,b))),128))])]),n("tbody",null,[(e(!0),r(o,null,l(s.items,t=>(e(),r("tr",{key:t.key,class:"whitespace-nowrap"},[(e(!0),r(o,null,l(s.fields,a=>(e(),r("td",{key:a.key,class:"px-4 py-4 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white align-middle whitespace-nowrap"},[y(u.$slots,a.key,{data:t[a.key]})]))),128))]))),128))])]))}}),w=i(m,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/BaseTable.vue"]]);export{w as _};
