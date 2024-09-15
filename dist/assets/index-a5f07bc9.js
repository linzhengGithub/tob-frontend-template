import{_ as z}from"./HandleRoleModal.vue_vue_type_script_setup_true_lang-284d1783.js";import{e as A,f as o,ao as y,aI as B,Y as F,Z as M,$ as n,a5 as v,a3 as P,a8 as r,ac as c,ar as _,_ as E}from"./index-7b7dfb38.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-3e5308f3.js";import{u as T,F as V}from"./useForm-60c9b58b.js";import{a as G,d as I}from"./index-3265f94d.js";import{c as L}from"./index-a55e0f6c.js";import"./index-9b819191.js";import"./createPlaceholder-6fcd5da5.js";const D={class:"h-flex-col"},H={class:"mb-4 flex gap-2"},X=A({__name:"index",setup(U){const u=o(),p=o(),i=o({page:1,pageSize:10}),k=o("add"),[x,{getFieldsValue:R,resetFields:h}]=T({schemas:$(),showActionButtonGroup:!1,gridProps:{cols:4,xGap:10,yGap:0}}),d=o([]),w=y([{title:"序号",key:"index",width:60,align:"center",render:(t,e)=>`${e+1}`},{title:"角色名",key:"name",ellipsis:{tooltip:!0}},{title:"角色备注",key:"remark",ellipsis:{tooltip:!0}},{title:"创建时间",key:"createTime",ellipsis:{tooltip:!0}},{title:"更新时间",key:"updateTime",ellipsis:{tooltip:!0}}]),b=y({key:"_action",title:"操作",align:"center",fixed:"right",width:260,actions:()=>C()}),m=o(null);function C(){return[{iconConfig:{icon:"ep-edit"},title:"编辑"},{iconConfig:{icon:"ep-delete"},title:"删除",componentProps:{type:"error"}}]}function $(){return[{field:"name",component:"NInput",label:"角色名",componentProps:{placeholder:"请输入角色名"}}]}async function q(t){const{title:e,record:a}=t;switch(e){case"编辑":g("edit",a.id);break;case"删除":L({content:{type:"warning"},onPositiveClick:async()=>{await I(a.id),s("search")}});break}}function S(t){d.value=t}async function f(t){var e;await((e=u.value)==null?void 0:e.reloadData(t))}function g(t,e){var a;k.value=t,m.value=e||null,(a=p.value)==null||a.toggleModal()}async function s(t){t==="search"?i.value=_({},i.value,R()):i.value=_({page:1,pageSize:10},h()),await f(i.value)}return B(async()=>{await f()}),(t,e)=>{const a=E;return F(),M("div",D,[n(V,{"label-width":"auto","label-align":"left",onRegister:v(x)},null,8,["onRegister"]),P("div",H,[n(a,{type:"primary",size:"small",onClick:e[0]||(e[0]=l=>g("add"))},{default:r(()=>e[4]||(e[4]=[c(" 新增角色 ")])),_:1}),n(a,{type:"primary",size:"small",onClick:e[1]||(e[1]=l=>s("search"))},{default:r(()=>e[5]||(e[5]=[c(" 查询 ")])),_:1}),n(a,{type:"primary",size:"small",onClick:e[2]||(e[2]=l=>s("clear"))},{default:r(()=>e[6]||(e[6]=[c(" 清空 ")])),_:1})]),n(N,{ref_key:"tableElRef",ref:u,class:"flex-1",data:d.value,columns:w,"action-column":b,"flex-height":!1,"request-api":v(G),"request-params":i.value,onRequestSuccess:S,onHandleAction:q},null,8,["data","columns","action-column","request-api","request-params"]),n(z,{id:m.value,ref_key:"handleRoleModalRef",ref:p,onSuccess:e[3]||(e[3]=l=>s("search"))},null,8,["id"])])}}});export{X as default};