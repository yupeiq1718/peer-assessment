import{x as j,r as i,z as u}from"./index.44dce1a8.js";import{u as t}from"./api.4218be54.js";const g=j("answers",()=>{const w=i({}),o=u(()=>e=>{var r;return(r=w.value)==null?void 0:r[e]}),d=i({1:[],2:[]}),m=i(),l=async({reviewee:e,reviewer:r,qId:s,answers:n})=>{try{const a=await t.post("/answer",{reviewee:e,reviewer:r,qId:s,answers:n});return Promise.resolve(a)}catch(a){return Promise.reject(a)}},p=async({userId:e,qId:r})=>{try{const s=await t.get(`/answer?userId=${e}&qId=${r}`);return w.value[r]=s.data.data,Promise.resolve(s)}catch(s){return Promise.reject(s)}},f=async({id:e,reviewee:r,reviewer:s,qId:n,answers:a})=>{try{const c=await t.put(`/answer/${e}`,{reviewee:r,reviewer:s,qId:n,answers:a});return Promise.resolve(c)}catch(c){return Promise.reject(c)}},v=async e=>{try{const r=await t.delete(`/answer/${e}`);return Promise.resolve(r)}catch(r){return Promise.reject(r)}},y=async({qId:e,accountId:r})=>{try{const s=await t.get(`/answer/unfilled?qId=${e}&userId=${r}`);return d.value[e]=s.data.data,Promise.resolve(s)}catch(s){return Promise.reject(s)}},P=async()=>{try{const e=await t.get("/answer/unfilled");return m.value=e.data.data,Promise.resolve(e)}catch(e){return Promise.reject(e)}},I=u(()=>e=>{var r;return(r=o.value(e))==null?void 0:r.map(s=>s.reviewee.id)}),h=u(()=>({qId:e,id:r})=>{var s;return(s=o.value(e))==null?void 0:s.find(n=>n.id===r)});return{answersInformation:o,unfilledList:d,warningUserList:m,createAnswers:l,readAnswersInformation:p,updateAnswers:f,deleteAnswersInformation:v,readUnfilledList:y,readWarningUserList:P,answerUsers:I,answerInformation:h}});export{g as u};
