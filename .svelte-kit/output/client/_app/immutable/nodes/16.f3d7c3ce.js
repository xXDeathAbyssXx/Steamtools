import{_ as q}from"../chunks/preload-helper.a4192956.js";import{s as B,q as b,f,a as C,B as L,g as u,d as c,c as M,h as _,j as v,u as h,i as P,o as j}from"../chunks/scheduler.648f142a.js";import{S as A,i as O,b as I,d as z,m as x,t as D,c as k,a as S,e as T,g as F}from"../chunks/index.ae413033.js";import{g as H}from"../chunks/globals.7f7f1b26.js";let N;const R=async()=>({props:{PdfViewer:N}}),W=Object.freeze(Object.defineProperty({__proto__:null,load:R},Symbol.toStringTag,{value:"Module"}));const{document:w}=H;function Z(g){let n,l,o,a,r,t,e,p;var d=g[0];function $(s,i){return{props:{url:"/pdf/Cangrejos al rescate.pdf",showButtons:["navigation","zoom","timeInfo","pageInfo"],showBorder:"false"}}}return d&&(e=b(d,$())),{c(){n=f("meta"),l=C(),o=f("section"),a=f("div"),r=f("div"),t=f("div"),e&&I(e.$$.fragment),this.h()},l(s){const i=L("svelte-11zy0pr",w.head);n=u(i,"META",{name:!0}),i.forEach(c),l=M(s),o=u(s,"SECTION",{});var m=_(o);a=u(m,"DIV",{class:!0});var y=_(a);r=u(y,"DIV",{class:!0});var E=_(r);t=u(E,"DIV",{class:!0});var V=_(t);e&&z(e.$$.fragment,V),V.forEach(c),E.forEach(c),y.forEach(c),m.forEach(c),this.h()},h(){w.title="El barrigón",v(n,"name","El barrigón."),v(t,"class","embed-responsive"),v(r,"class","row row-cols-auto align-items-center text-left"),v(a,"class","container")},m(s,i){h(w.head,n),P(s,l,i),P(s,o,i),h(o,a),h(a,r),h(r,t),e&&x(e,t,null),p=!0},p(s,[i]){if(i&1&&d!==(d=s[0])){if(e){F();const m=e;D(m.$$.fragment,1,0,()=>{T(m,1)}),k()}d?(e=b(d,$()),I(e.$$.fragment),S(e.$$.fragment,1),x(e,t,null)):e=null}},i(s){p||(e&&S(e.$$.fragment,s),p=!0)},o(s){e&&D(e.$$.fragment,s),p=!1},d(s){s&&(c(l),c(o)),c(n),e&&T(e)}}}function G(g,n,l){let o;const a=()=>{const t=document.querySelector(".line.svelte-19h83wp");if(t){const e=document.createElement("div");e.innerHTML=`
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
		`,t.insertBefore(e,t.firstChild)}else requestAnimationFrame(a)},r=async()=>{try{const t=await q(()=>import("../chunks/index.46cdd549.js"),["../chunks/index.46cdd549.js","../chunks/scheduler.648f142a.js","../chunks/index.ae413033.js","../chunks/globals.7f7f1b26.js","../assets/index.c6ee29b9.css"],import.meta.url);l(0,o=t.default)}catch(t){console.error("Error loading PdfViewer:",t)}};return j(()=>{r(),requestAnimationFrame(a)}),[o]}class X extends A{constructor(n){super(),O(this,n,G,Z,B,{})}}export{X as component,W as universal};
