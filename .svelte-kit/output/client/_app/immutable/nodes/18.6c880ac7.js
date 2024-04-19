import{_ as q}from"../chunks/preload-helper.a4192956.js";import{s as A,q as V,f,a as B,B as L,g as u,d as c,c as M,h as p,j as v,u as h,i as I,o as O}from"../chunks/scheduler.648f142a.js";import{S as C,i as j,b as P,d as k,m as x,t as D,c as z,a as S,e as T,g as F}from"../chunks/index.ae413033.js";import{g as R}from"../chunks/globals.7f7f1b26.js";let Z;const G=async()=>({props:{PdfViewer:Z}}),W=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));const{document:w}=R;function H(g){let n,l,s,a,r,t,e,_;var d=g[0];function $(o,i){return{props:{url:"/pdf/El barrigon.pdf",showButtons:["navigation","zoom","timeInfo","pageInfo"],showBorder:"false"}}}return d&&(e=V(d,$())),{c(){n=f("meta"),l=B(),s=f("section"),a=f("div"),r=f("div"),t=f("div"),e&&P(e.$$.fragment),this.h()},l(o){const i=L("svelte-xvbk8s",w.head);n=u(i,"META",{name:!0,content:!0}),i.forEach(c),l=M(o),s=u(o,"SECTION",{});var m=p(s);a=u(m,"DIV",{class:!0});var E=p(a);r=u(E,"DIV",{class:!0});var y=p(r);t=u(y,"DIV",{class:!0});var b=p(t);e&&k(e.$$.fragment,b),b.forEach(c),y.forEach(c),E.forEach(c),m.forEach(c),this.h()},h(){w.title="El barrigón",v(n,"name","El barrigón."),v(n,"content","QUIZ 1 | GRADO 4°"),v(t,"class","embed-responsive"),v(r,"class","row row-cols-auto align-items-center text-left"),v(a,"class","container")},m(o,i){h(w.head,n),I(o,l,i),I(o,s,i),h(s,a),h(a,r),h(r,t),e&&x(e,t,null),_=!0},p(o,[i]){if(i&1&&d!==(d=o[0])){if(e){F();const m=e;D(m.$$.fragment,1,0,()=>{T(m,1)}),z()}d?(e=V(d,$()),P(e.$$.fragment),S(e.$$.fragment,1),x(e,t,null)):e=null}},i(o){_||(e&&S(e.$$.fragment,o),_=!0)},o(o){e&&D(e.$$.fragment,o),_=!1},d(o){o&&(c(l),c(s)),c(n),e&&T(e)}}}function N(g,n,l){let s;const a=()=>{const t=document.querySelector(".line.svelte-19h83wp");if(t){const e=document.createElement("div");e.innerHTML=`
<div class="activator svelte-10lk5cm">
	<div>
		<a href="/comics">
			<span slot="activator" class="button-control null svelte-19h83wp">
				<svg class="icon svelte-19h83wp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M22,5.724V2c0-.552-.447-1-1-1s-1,.448-1,1v2.366L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.579c-1.379,.931-2.203,2.48-2.203,4.145v9.276c0,2.757,2.243,5,5,5h2c.553,0,1-.448,1-1V14c0-.551,.448-1,1-1h6c.552,0,1,.449,1,1v9c0,.552,.447,1,1,1h2c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-4Z"
					/>
				</svg>
			</span>
		</a>
	</div>
</div>
		`,t.insertBefore(e,t.firstChild)}else requestAnimationFrame(a)},r=async()=>{try{const t=await q(()=>import("../chunks/index.46cdd549.js"),["../chunks/index.46cdd549.js","../chunks/scheduler.648f142a.js","../chunks/index.ae413033.js","../chunks/globals.7f7f1b26.js","../assets/index.c6ee29b9.css"],import.meta.url);l(0,s=t.default)}catch(t){console.error("Error loading PdfViewer:",t)}};return O(()=>{r(),requestAnimationFrame(a)}),[s]}class X extends C{constructor(n){super(),j(this,n,N,H,A,{})}}export{X as component,W as universal};
