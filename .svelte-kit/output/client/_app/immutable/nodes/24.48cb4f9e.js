import{_ as T}from"../chunks/preload-helper.a4192956.js";import{s as q,q as b,f,a as A,B,g as u,d as c,c as M,h as p,j as v,u as h,i as I,o as O}from"../chunks/scheduler.648f142a.js";import{S as C,i as j,b as P,d as k,m as x,t as D,c as z,a as L,e as S,g as F}from"../chunks/index.ae413033.js";import{g as R}from"../chunks/globals.7f7f1b26.js";let Z;const G=async()=>({props:{PdfViewer:Z}}),W=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));const{document:w}=R;function H(g){let o,l,a,s,r,t,e,_;var d=g[0];function $(n,i){return{props:{url:"/pdf/La laguna encantada.pdf",showButtons:["navigation","zoom","timeInfo","pageInfo"],showBorder:"false"}}}return d&&(e=b(d,$())),{c(){o=f("meta"),l=A(),a=f("section"),s=f("div"),r=f("div"),t=f("div"),e&&P(e.$$.fragment),this.h()},l(n){const i=B("svelte-xvbk8s",w.head);o=u(i,"META",{name:!0,content:!0}),i.forEach(c),l=M(n),a=u(n,"SECTION",{});var m=p(a);s=u(m,"DIV",{class:!0});var E=p(s);r=u(E,"DIV",{class:!0});var y=p(r);t=u(y,"DIV",{class:!0});var V=p(t);e&&k(e.$$.fragment,V),V.forEach(c),y.forEach(c),E.forEach(c),m.forEach(c),this.h()},h(){w.title="El barrigón",v(o,"name","El barrigón."),v(o,"content","QUIZ 1 | GRADO 4°"),v(t,"class","embed-responsive"),v(r,"class","row row-cols-auto align-items-center text-left"),v(s,"class","container")},m(n,i){h(w.head,o),I(n,l,i),I(n,a,i),h(a,s),h(s,r),h(r,t),e&&x(e,t,null),_=!0},p(n,[i]){if(i&1&&d!==(d=n[0])){if(e){F();const m=e;D(m.$$.fragment,1,0,()=>{S(m,1)}),z()}d?(e=b(d,$()),P(e.$$.fragment),L(e.$$.fragment,1),x(e,t,null)):e=null}},i(n){_||(e&&L(e.$$.fragment,n),_=!0)},o(n){e&&D(e.$$.fragment,n),_=!1},d(n){n&&(c(l),c(a)),c(o),e&&S(e)}}}function N(g,o,l){let a;const s=()=>{const t=document.querySelector(".line.svelte-19h83wp");if(t){const e=document.createElement("div");e.innerHTML=`
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
		`,t.insertBefore(e,t.firstChild)}else requestAnimationFrame(s)},r=async()=>{try{const t=await T(()=>import("../chunks/index.46cdd549.js"),["../chunks/index.46cdd549.js","../chunks/scheduler.648f142a.js","../chunks/index.ae413033.js","../chunks/globals.7f7f1b26.js","../assets/index.c6ee29b9.css"],import.meta.url);l(0,a=t.default)}catch(t){console.error("Error loading PdfViewer:",t)}};return O(()=>{r(),requestAnimationFrame(s)}),[a]}class X extends C{constructor(o){super(),j(this,o,N,H,q,{})}}export{X as component,W as universal};
