import{_ as m}from"./AddModal.vue_vue_type_script_setup_true_lang-722aab66.js";import{_ as p}from"./CheckModal.vue_vue_type_script_setup_true_lang-d155f515.js";import{e as x,f as t,am as g,Y as k,Z as h,$ as n,a7 as s,aa as d,an as M,a5 as _,_ as v}from"./index-fb446db3.js";import"./index-b0ec238a.js";import"./index-5efae2b5.js";import"./createPlaceholder-7ef036b0.js";import"./index.vue_vue_type_script_setup_true_lang-41fda2f3.js";const w=x({__name:"index",setup(C){const o=t(null),l=t(null),a=t(""),c=t(""),i=g({name:"linzheng",idCard:"330382xxxxxxxxxxxx",nation:"汉族",address:"浙江省xx市"});function u(){const e=_(o);a.value="这是一个新增/编辑弹窗",e==null||e.toggleModal()}function f(){const e=_(l);a.value="这是一个查看弹窗",c.value="add",e==null||e.cancelBtnFn()}return(e,y)=>{const r=v;return k(),h(M,null,[n(r,{onClick:u},{default:s(()=>[d(" toggle addModal ")]),_:1}),n(r,{onClick:f},{default:s(()=>[d(" toggle checkModal ")]),_:1}),n(m,{ref_key:"addModal_ref",ref:o,title:a.value},null,8,["title"]),n(p,{ref_key:"checkModal_ref",ref:l,data:i,title:a.value,type:c.value},null,8,["data","title","type"])],64)}}});export{w as default};