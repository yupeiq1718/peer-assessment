import{x as a,r as o}from"./index.0dbdd8c0.js";import{u as r}from"./api.a5ece804.js";const y=a("system",()=>{const s=o();return{systemStatus:s,readSystemStatus:async()=>{try{const t=await r.get("/system-status-code");return s.value=t.data.data.systemStatusCode,Promise.resolve(t)}catch(t){return Promise.reject(t)}},updateSystemStatus:async t=>{try{const e=await r.put(`/system-status-code/${t}`);return Promise.resolve(e)}catch(e){return Promise.reject(e)}}}});export{y as u};
