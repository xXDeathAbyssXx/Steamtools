import{_ as T}from"../chunks/preload-helper.a4192956.js";import{s as q,q as b,f,a as A,B,g as u,d as c,c as M,h as _,j as p,u as h,i as I,o as O}from"../chunks/scheduler.648f142a.js";import{S as C,i as j,b as P,d as k,m as x,t as D,c as z,a as S,e as L,g as F}from"../chunks/index.ae413033.js";import{g as R}from"../chunks/globals.7f7f1b26.js";let Z;const G=async()=>({props:{PdfViewer:Z}}),W=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));const{document:w}=R;function H(g){let s,l,n,a,r,t,e,v;var d=g[0];function $(o,i){return{props:{url:"/pdf/La mariposa Samira.pdf",showButtons:["navigation","zoom","timeInfo","pageInfo"],showBorder:"false"}}}return d&&(e=b(d,$())),{c(){s=f("meta"),l=A(),n=f("section"),a=f("div"),r=f("div"),t=f("div"),e&&P(e.$$.fragment),this.h()},l(o){const i=B("svelte-xvbk8s",w.head);s=u(i,"META",{name:!0,content:!0}),i.forEach(c),l=M(o),n=u(o,"SECTION",{});var m=_(n);a=u(m,"DIV",{class:!0});var E=_(a);r=u(E,"DIV",{class:!0});var y=_(r);t=u(y,"DIV",{class:!0});var V=_(t);e&&k(e.$$.fragment,V),V.forEach(c),y.forEach(c),E.forEach(c),m.forEach(c),this.h()},h(){w.title="El barrigón",p(s,"name","El barrigón."),p(s,"content","QUIZ 1 | GRADO 4°"),p(t,"class","embed-responsive"),p(r,"class","row row-cols-auto align-items-center text-left"),p(a,"class","container")},m(o,i){h(w.head,s),I(o,l,i),I(o,n,i),h(n,a),h(a,r),h(r,t),e&&x(e,t,null),v=!0},p(o,[i]){if(i&1&&d!==(d=o[0])){if(e){F();const m=e;D(m.$$.fragment,1,0,()=>{L(m,1)}),z()}d?(e=b(d,$()),P(e.$$.fragment),S(e.$$.fragment,1),x(e,t,null)):e=null}},i(o){v||(e&&S(e.$$.fragment,o),v=!0)},o(o){e&&D(e.$$.fragment,o),v=!1},d(o){o&&(c(l),c(n)),c(s),e&&L(e)}}}function N(g,s,l){let n;const a=()=>{const t=document.querySelector(".line.svelte-19h83wp");if(t){const e=document.createElement("div");e.innerHTML=`
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
		`,t.insertBefore(e,t.firstChild)}else requestAnimationFrame(a)},r=async()=>{try{const t=await T(()=>import("../chunks/index.46cdd549.js"),["../chunks/index.46cdd549.js","../chunks/scheduler.648f142a.js","../chunks/index.ae413033.js","../chunks/globals.7f7f1b26.js","../assets/index.c6ee29b9.css"],import.meta.url);l(0,n=t.default)}catch(t){console.error("Error loading PdfViewer:",t)}};return O(()=>{r(),requestAnimationFrame(a)}),[n]}class X extends C{constructor(s){super(),j(this,s,N,H,q,{})}}export{X as component,W as universal};
