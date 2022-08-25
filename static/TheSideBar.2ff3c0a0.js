import{_ as m}from"./BaseSvgIcon.715e781d.js";import{_ as d,d as c,o as t,c as s,a as i,l as p,b as _,n as h,F as f,s as g}from"./index.3acd79c5.js";const x={class:"absolute top-4 bottom-16 inset-x-4 xl:right-16 overflow-auto"},v={class:"absolute right-4 bottom-2 rounded-2xl flex justify-center items-center bg-theme fill-white duration-500"},w=c({__name:"TheModal",props:{size:{type:String,required:!0,default:"side"},isActive:{type:Boolean,required:!0}},emits:["update:isActive"],setup(o,{emit:n}){const a=o,l={full:"w-full sm:w-[34rem] lg:w-[50rem] xl:w-[62rem] 2xl:w-[78rem]",side:"max-w-full w-[26rem]"};return(r,e)=>{const u=m;return t(),s("div",{class:h(["fixed top-0 md:top-8 bottom-0 md:bottom-8 right-0 md:right-0 xl:right-0 bg-theme-light border-2 border-theme rounded-l-xl shadow-md overflow-hidden z-30",l[a.size]])},[i("article",x,[p(r.$slots,"default",{},void 0,!0)]),i("button",v,[_(u,{name:"close",class:"w-12 h-12",onClick:e[0]||(e[0]=B=>n("update:isActive",!1))})])],2)}}}),z=d(w,[["__scopeId","data-v-7af84aec"],["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/TheModal.vue"]]);const b={class:"sidebar fixed -top-2 md:top-auto md:bottom-10 right-0 md:right-4 xl:right-20 flex flex-row md:flex-col z-20"},y=c({__name:"TheSideBar",props:{items:{type:Array,required:!0}},setup(o){const n=o;return(a,l)=>{const r=m;return t(),s("div",b,[(t(!0),s(f,null,g(n.items,e=>(t(),s("button",{key:e.name,class:"my-2 p-2 rounded-2xl flex justify-center items-center md:bg-light md:hover:bg-theme fill-white md:shadow-md duration-500"},[_(r,{name:e.icon,class:"w-8 h-8 md:w-10 md:h-10",onClick:e.function},null,8,["name","onClick"])]))),128))])}}}),T=d(y,[["__file","/home/runner/work/peer-assessment/peer-assessment/src/components/TheSideBar.vue"]]);export{T as _,z as a};
