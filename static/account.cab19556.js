import{x as o,r as c}from"./index.38b7c3e0.js";import{u as s}from"./api.be81d2e7.js";const d=o("account",()=>{const e=c();return{accountId:e,readAccountId:async t=>{try{const r=await s.get(`/user/${t}`);return e.value=r.data.data.userId,Promise.resolve(r)}catch(r){return Promise.reject(r)}}}});export{d as u};