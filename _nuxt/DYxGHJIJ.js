import{d as C,l as g,Z as v,at as D,p as w,L as o,U as d}from"./Cz5AhWPw.js";import _ from"./BuX3sVmY.js";import S from"./4OJkgbVM.js";import"./YwaNRJrw.js";import"./2ETV-d1z.js";const q=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,e=v(),{tag:m,excerpt:a,path:l,query:i,head:r}=f,u=r===void 0?c:r,s={...i||{},path:l||(i==null?void 0:i.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,s,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:a,...this.$attrs})}:({data:t})=>(u&&d(t),o(_,{value:t,excerpt:a,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),B=q;export{B as default};
