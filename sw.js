if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),a={module:{uri:l},exports:o,require:t};s[l]=Promise.all(r.map((e=>a[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.260e12fd.js",revision:null},{url:"assets/app.44c1acec.css",revision:null},{url:"assets/app.c3bab19d.js",revision:null},{url:"assets/faq.8ab434d2.js",revision:null},{url:"assets/home.04c2eb08.css",revision:null},{url:"assets/home.82525bee.js",revision:null},{url:"assets/myNumber.d48baecd.js",revision:null},{url:"assets/README.74b04ca7.js",revision:null},{url:"assets/vendor.8c796126.css",revision:null},{url:"assets/vendor.aca40889.js",revision:null},{url:"assets/virtual_pwa-register.bbb77b58.js",revision:null},{url:"index.html",revision:"cd9445b012823207536b8cf774f808da"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
