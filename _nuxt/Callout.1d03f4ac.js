import{d,r as t,b as p,c as _,e as a,g as m,n,K as l,am as f,an as v,a8 as g,k as h}from"./entry.32c92277.js";import{r}from"./slot.e8319902.js";import"./node.3b26ec1b.js";const y={class:"summary"},C={class:"content"},V=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>t(!1)}},emits:["update:modelValue"],setup(s,{emit:c}){const e=t(s.modelValue),u=()=>{e.value=!e.value,c("update:modelValue",e.value)};return(o,w)=>{const i=g;return p(),_("div",{class:n(["callout",[s.type]])},[a("span",{class:"preview",onClick:u},[a("span",y,[r(o.$slots,"summary",{},void 0,!0)]),m(i,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),f(a("div",C,[r(o.$slots,"content",{},void 0,!0)],512),[[v,l(e)]])],2)}}});const I=h(V,[["__scopeId","data-v-df113285"]]);export{I as default};
