import{e as f,g as v,f as c,aR as k,ap as i,Y as t,a4 as u,a7 as d,Z as s,an as S,ao as L,a5 as p,aH as C,$ as m,a8 as _,b0 as N,b1 as R}from"./index-7ac5122e.js";const b=f({props:{createVNode:Function,data:Object,param:String},render(){const{createVNode:o,data:n,param:l}=this;return(()=>!o||!n||!l?v("span",{depth:3},{default:()=>""}):o(n,l))()}}),V={key:0},A={key:1},B={key:0},F={key:1},I=f({__name:"index",props:{labelPlacement:{default:"left"},title:{default:""},describeList:{default:()=>[]},column:{},data:{},itemLabelStyle:{default:()=>({width:"130px",padding:"11px 10px"})},itemContentStyle:{default:()=>({padding:"11px 10px",verticalAlign:"middle"})},labelAlign:{default:"right"}},setup(o){const n=o,l=c({}),r=c({});return k(()=>{i(l.value,n.itemContentStyle),i(r.value,n.itemLabelStyle)}),(a,w)=>{const y=N,g=R;return t(),u(g,{"label-placement":a.labelPlacement,title:a.title,bordered:"",column:a.column,"label-align":a.labelAlign},{default:d(()=>[(t(!0),s(S,null,L(a.describeList,(e,h)=>(t(),u(y,{key:h,span:e.span,"label-style":r.value,"content-style":l.value},{label:d(()=>[p(C)(e.label)?(t(),s("span",V,[m(p(b),{"create-v-node":e.label,data:a.data,param:e.param},null,8,["create-v-node","data","param"])])):(t(),s("span",A,_(e.label),1))]),default:d(()=>[e.render?(t(),s("span",B,[m(p(b),{"create-v-node":e.render,data:a.data,param:e.param},null,8,["create-v-node","data","param"])])):(t(),s("span",F,_(a.data[e.param]),1))]),_:2},1032,["span","label-style","content-style"]))),128))]),_:1},8,["label-placement","title","column","label-align"])}}});export{I as _};