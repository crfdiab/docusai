import{d as p,az as m,x,J as o,b as S,c as z,aA as f,K as a,k as I}from"./entry.32c92277.js";const y=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;const s=_;m(n=>({"6aadc760":a(d)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),d=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),z("span",{style:f({width:a(c),height:a(c)})},null,4))}});const g=I(y,[["__scopeId","data-v-6dd92818"]]);export{g as default};
