import{_ as w,a as b,b as y}from"./twitter.3371d54b.js";import{A as k,C,o as l,h as _,F as j,i as B,j as s,k as e,v as t,l as m,_ as D,D as S,r as $,a as f,J as A,E as F,G as L,n as N}from"./vendor.8a97a59a.js";/* empty css                   */const E={class:"max-w-screen-2xl mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-4"},V={class:"flex justify-between"},z={class:"flex items-center"},I={class:"ml-2 text-left"},J=["onClick"],R=s("div",null,[s("div",{class:"btn btn-primary"},"Follow"),s("p",{class:"text-text"},"12312 Follow")],-1),q={class:"flex justify-center mt-5 text-nft"},G={href:"#"},M={href:"#"},P={href:"#"},T={props:{data:{type:Array,default:()=>[{avatar:"",eth:"",address:""}]}},setup(h){const n=k("subAddress"),o=C();return(r,d)=>{const u=D,i=S,c=w,p=b,v=y;return l(),_("div",E,[(l(!0),_(j,null,B(h.data,a=>(l(),_("div",{key:a.relayId,class:"bg-white mb-10 p-5 rounded-2xl overflow-hidden hover:shadow-2xl"},[s("div",V,[s("div",z,[s("div",null,[e(u,{radius:"50%",lazy:"",width:"64px",height:"64px",fit:"cover",src:a.avatar},null,8,["src"])]),s("div",I,[s("div",{class:"text-xl",onClick:d[0]||(d[0]=g=>t(o).push("/user"))},m(a.eth),1),s("div",{class:"cursor-pointer",onClick:g=>t(o).push({path:"/user",query:{add:a.address}})},m(t(n)(a.address)),9,J)])]),R]),e(i),s("div",q,[s("a",G,[e(c,{class:"mx-3"})]),s("a",M,[e(p,{class:"mx-3"})]),s("a",P,[e(v,{class:"mx-3"})])])]))),128))])}}};var x={};const U={class:"mt-10"},H={class:"mt-20"},K={setup(h){const n=$([]),o=f({searchLoading:!1}),r=f({keyword:""}),d=new A("https://mainnet.infura.io/v3/dc36737451e44647bb760f42a10779f5");function u(){o.searchLoading=!0,d.resolveName(r.keyword).then(i=>{n.value.push({avatar:"",eth:"",address:i})})}return(i,c)=>{const p=T;return l(),_("div",U,[s("div",null,[F(s("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=v=>t(r).keyword=v),placeholder:"Search by ENS or wallet address",class:"input input-bordered w-full max-w-md mr-5"},null,512),[[L,t(r).keyword]]),s("div",{class:N([{loading:t(o).searchLoading},"btn"]),onClick:u},"Search",2)]),s("div",H,[e(p,{data:n.value},null,8,["data"])])])}}};typeof x=="function"&&x(K);export{K as default};
