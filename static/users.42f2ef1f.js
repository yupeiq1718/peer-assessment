import{x as y,r as u,z as c}from"./index.38b7c3e0.js";import{u as t}from"./api.be81d2e7.js";const h=y("users",()=>{const a=u([]),i=async e=>{try{const r=await t.post("/user",e);return Promise.resolve(r)}catch(r){return Promise.reject(r)}},l=async()=>{try{const e=await t.get("/users");return a.value=e.data.data,Promise.resolve(e)}catch(e){return Promise.reject(e)}},m=async({id:e,user:r})=>{try{const n=await t.put(`/user/${e}`,r);return Promise.resolve(n)}catch(n){return Promise.reject(n)}},d=async e=>{try{const r=await t.delete(`/user/${e}`);return Promise.resolve(r)}catch(r){return Promise.reject(r)}},o=c(()=>a.value.filter(e=>e.activate)),p=c(()=>e=>o.value.find(r=>r.id===e)),s=u({department:"",roles:0}),v=e=>{s.value=e},f=c(()=>{var e;return(e=o.value)==null?void 0:e.filter(r=>(!s.value.department||r.department===s.value.department)&&(!s.value.roles||r.roles.includes(s.value.roles)))});return{users:a,createUser:i,readUsers:l,updateUser:m,deleteUser:d,user:p,activeUsers:o,filterData:s,setFilterData:v,filteredUsers:f}});export{h as u};