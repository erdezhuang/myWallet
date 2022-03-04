import{a as j,b as M,c as $,u as T,d as F,e as I}from"./app.671282d5.js";import{I as W,C as B,r as p,A as L,o as r,h as c,j as e,v as s,k as t,K as a,F as N,i as R,l as V,L as z,t as A,D as E,x as H}from"./vendor.8a97a59a.js";/* empty css                   */import{D as v,T as d,a as h,m as J,w as K,b as x,c as O}from"./WalletConnect.022a38a5.js";const U={class:"w-72 mx-auto"},q={class:"bg-bg flex justify-between items-center rounded-lg text-2xl text-text cursor-pointer"},G={class:"fixed inset-0 z-10 overflow-y-auto"},P={class:"min-h-screen px-4 text-center"},Q=e("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B",-1),X={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},Y={class:"flex justify-center"},Z=["src"],ee=e("p",{class:"text-center text-2xl mt-2"}," MetaMask ",-1),te={class:"flex justify-center"},se=["src"],ae=e("p",{class:"text-center text-2xl mt-2"}," WalletConnect ",-1),oe={class:"fixed inset-0 z-10 overflow-y-auto"},ne={class:"min-h-screen px-4 text-center"},le=e("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B",-1),ie={class:"inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},re=z("\u9009\u62E9\u94B1\u5305"),ce={class:"grid grid-cols-2 gap-5"},de=["onClick"],ue={setup(w){W();const u=B(),o=p(!1),n=p(!1),_=j(),g=M(),y=$(),b=T();L("subAddress");function k(){b.userChain.address?u.push("/"):o.value=!0}function C(){g.login(),o.value=!1}function D(){o.value=!1,n.value=!0}function S(f){y.login(A(f)),n.value=!1}return(f,l)=>{const m=E;return r(),c("div",null,[e("div",U,[e("div",q,[e("div",{class:"flex-1 m-2 hover:text-white bg-active text-white py-3 rounded-lg",onClick:k},"Wallet"),e("div",{class:"flex-1 m-2 hover:text-white",onClick:l[0]||(l[0]=i=>s(u).push("/follow"))},"Follow")])]),t(s(x),{appear:"",show:o.value,as:"template"},{default:a(()=>[t(s(v),{as:"div",onClose:l[1]||(l[1]=i=>o.value=!1)},{default:a(()=>[e("div",G,[e("div",P,[t(s(d),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[t(s(h),{class:"fixed inset-0 bg-black bg-opacity-50"})]),_:1}),Q,t(s(d),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e("div",X,[e("div",{class:"cursor-pointer mb-10",onClick:C},[e("div",Y,[e("img",{src:s(J),width:"64",alt:"metaMask"},null,8,Z)]),ee]),t(m),e("div",{class:"mt-10 cursor-pointer",onClick:D},[e("div",te,[e("img",{src:s(K),width:"64",alt:"walletConnect"},null,8,se)]),ae])])]),_:1})])])]),_:1})]),_:1},8,["show"]),t(s(x),{appear:"",show:n.value,as:"template"},{default:a(()=>[t(s(v),{as:"div",onClose:l[2]||(l[2]=i=>n.value=!1)},{default:a(()=>[e("div",oe,[e("div",ne,[t(s(d),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[t(s(h),{class:"fixed inset-0 bg-black bg-opacity-50"})]),_:1}),le,t(s(d),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e("div",ie,[t(s(O),null,{default:a(()=>[re]),_:1}),t(m),e("div",ce,[(r(!0),c(N,null,R(s(_).chains,i=>(r(),c("div",{key:i.name,class:"btn btn-outline mr-2 leading-5",onClick:pe=>S(i)},V(i.name),9,de))),128))])])]),_:1})])])]),_:1})]),_:1},8,["show"])])}}},_e={},fe={class:"px-4 py-10 text-center text-gray-700 dark:text-gray-200"};function me(w,u){const o=ue,n=H("router-view"),_=I;return r(),c("main",fe,[t(o),t(n),t(_)])}var ge=F(_e,[["render",me]]);export{ge as default};
