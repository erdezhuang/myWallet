if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const t=s=>i(s,n),u={module:{uri:n},exports:o,require:t};e[n]=Promise.all(r.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-455a0d7a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.962fce35.js",revision:null},{url:"assets/app.4215bd40.css",revision:null},{url:"assets/app.671282d5.js",revision:null},{url:"assets/DividerSfc.1bbe365e.css",revision:null},{url:"assets/follow.174be7b8.js",revision:null},{url:"assets/follow.49894580.js",revision:null},{url:"assets/home.5681cb71.js",revision:null},{url:"assets/README.f5b3d582.js",revision:null},{url:"assets/twitter.3371d54b.js",revision:null},{url:"assets/user.4b9759ab.js",revision:null},{url:"assets/vendor.79214656.css",revision:null},{url:"assets/vendor.8a97a59a.js",revision:null},{url:"assets/virtual_pwa-register.76ac74a3.js",revision:null},{url:"assets/WalletConnect.022a38a5.js",revision:null},{url:"index.html",revision:"6c2f8b977b6ab4bcddd381730cf689e5"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
