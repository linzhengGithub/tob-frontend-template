import{bL as N,bf as c,bg as g,bM as x,bN as P}from"./index-7b7dfb38.js";function I(r,i,u,a){if(!N(r))return r;i=c(i,r);for(var e=-1,d=i.length,l=d-1,s=r;s!=null&&++e<d;){var n=g(i[e]),t=u;if(n==="__proto__"||n==="constructor"||n==="prototype")return r;if(e!=l){var f=s[n];t=a?a(f,n,s):void 0,t===void 0&&(t=N(f)?f:x(i[e+1])?[]:{})}P(s,n,t),s=s[n]}return r}function h(r,i,u){return r==null?r:I(r,i,u)}function v(r){if(!r)return"";if(["NInput","NInputNumber"].includes(r))return"请输入";if(["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(r))return"请选择"}export{v as c,h as s};