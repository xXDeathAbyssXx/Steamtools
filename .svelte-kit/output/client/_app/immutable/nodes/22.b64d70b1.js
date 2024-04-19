import{s as pe,f as s,a as r,B as ve,g as o,d as u,c as i,h as D,r as g,j as a,u as e,i as le}from"../chunks/scheduler.648f142a.js";import{S as he,i as fe,b as re,d as ie,m as de,a as ce,t as ue,e as me}from"../chunks/index.ae413033.js";import{C as be}from"../chunks/CanvasDraw.319c6dc3.js";import{P as ge}from"../chunks/Palette.ac1d515d.js";const _e=!0,De=Object.freeze(Object.defineProperty({__proto__:null,prerender:_e},Symbol.toStringTag,{value:"Module"}));function xe(T){let m,q,d,p,R="El sueño de un barco llamado Miguel",S,w,I,v,t,_,W="Lee siguiente texto:",P,x,X=`... La hazaña de Miguel fue reconocida por el director del Canal de Panamá, creando un
						nuevo equipo de barcos: Rescate Marino por Barrido (RMB), distinguidos por su color,
						azul y blanco. Sus nuevas herramientas eran como una red especial en forma de cepillo,
						con fibra de cocos secos y se movía en cualquier dirección. Ahora los barcos estaban más
						preparados para las emergencias, y la vida marina podía estar segura...`,k,z,O,y,Y=`Usted pertenece al equipo directivo y creativo del Canal de Panamá y debido a la
						importante hazaña de Miguel desean elogiar al Equipo de barcos de Rescate Marino por
						Barrido (RMB) con una bandera que los identifique de los otros barcos. Dibuje una
						bandera con un logo que reúna las características mencionadas en el texto de arriba y
						describa su diseño:`,A,C,ee="Logo del RMB:",Q,h,f,U,b,F,M,te='<h5 class="font-weight-bold pb-3 px-2">Descripción:</h5> <textarea class="form-control" id="textarea-zds83h" rows="8"></textarea>',G,$,ae='<button type="submit" class="btn btn-primary m-4" id="sendA" value="Submit" onclick="score(6)">Enviar</button>',N,Z,J,L,K,c,ne=`<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">¡Quiz terminado! 🎉</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div> <div class="modal-body">Has completado el quiz exitosamente. ¿Te gustaría ir a la página principal de
								cómics? 🚀</div> <div class="modal-footer"><a data-sveltekit-preload-data="hover" target="_blank" href="/comics"><button type="button" class="btn btn-primary">Ir</button></a></div></div></div>`,V;return f=new be({props:{color:T[0],background:ye}}),b=new ge({}),b.$on("color",T[1]),{c(){m=s("meta"),q=r(),d=s("section"),p=s("h1"),p.textContent=R,S=r(),w=s("div"),I=s("div"),v=s("div"),t=s("form"),_=s("h5"),_.textContent=W,P=r(),x=s("h6"),x.textContent=X,k=r(),z=s("hr"),O=r(),y=s("h6"),y.textContent=Y,A=r(),C=s("h5"),C.textContent=ee,Q=r(),h=s("div"),re(f.$$.fragment),U=r(),re(b.$$.fragment),F=r(),M=s("div"),M.innerHTML=te,G=r(),$=s("div"),$.innerHTML=ae,N=r(),Z=s("br"),J=r(),L=s("div"),K=r(),c=s("div"),c.innerHTML=ne,this.h()},l(l){const E=ve("svelte-12v51r2",document.head);m=o(E,"META",{name:!0,content:!0}),E.forEach(u),q=i(l),d=o(l,"SECTION",{class:!0});var H=D(d);p=o(H,"H1",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-10ylouc"&&(p.textContent=R),S=i(H),w=o(H,"DIV",{class:!0});var se=D(w);I=o(se,"DIV",{class:!0});var oe=D(I);v=o(oe,"DIV",{class:!0});var j=D(v);t=o(j,"FORM",{name:!0,id:!0,onsubmit:!0});var n=D(t);_=o(n,"H5",{class:!0,"data-svelte-h":!0}),g(_)!=="svelte-16l73ld"&&(_.textContent=W),P=i(n),x=o(n,"H6",{class:!0,"data-svelte-h":!0}),g(x)!=="svelte-6olzc6"&&(x.textContent=X),k=i(n),z=o(n,"HR",{class:!0}),O=i(n),y=o(n,"H6",{class:!0,"data-svelte-h":!0}),g(y)!=="svelte-1r5djvw"&&(y.textContent=Y),A=i(n),C=o(n,"H5",{class:!0,"data-svelte-h":!0}),g(C)!=="svelte-881kir"&&(C.textContent=ee),Q=i(n),h=o(n,"DIV",{class:!0});var B=D(h);ie(f.$$.fragment,B),U=i(B),ie(b.$$.fragment,B),B.forEach(u),F=i(n),M=o(n,"DIV",{class:!0,"data-svelte-h":!0}),g(M)!=="svelte-18yq4xp"&&(M.innerHTML=te),G=i(n),$=o(n,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-c05mrc"&&($.innerHTML=ae),N=i(n),Z=o(n,"BR",{}),J=i(n),L=o(n,"DIV",{id:!0}),D(L).forEach(u),n.forEach(u),K=i(j),c=o(j,"DIV",{class:!0,id:!0,tabindex:!0,role:!0,"aria-labelledby":!0,"aria-hidden":!0,"data-svelte-h":!0}),g(c)!=="svelte-1yd6hs4"&&(c.innerHTML=ne),j.forEach(u),oe.forEach(u),se.forEach(u),H.forEach(u),this.h()},h(){document.title="El sueño de un barco llamado Miguel",a(m,"name","El sueño de un barco llamado Miguel."),a(m,"content","QUIZ 1 | GRADO 4°"),a(p,"class","text-primary text-center pb-7"),a(_,"class","font-weight-bold pb-3 px-2"),a(x,"class","py-3 text-justify"),a(z,"class","rounded"),a(y,"class","py-3 text-justify"),a(C,"class","font-weight-bold pb-3 px-2"),a(h,"class","draw-canva-custom"),a(M,"class","form-group"),a($,"class","center"),a(L,"id","form-modal-finished"),a(t,"name","form"),a(t,"id","questions"),a(t,"onsubmit","return false;"),a(c,"class","modal fade"),a(c,"id","exampleModal"),a(c,"tabindex","-1"),a(c,"role","dialog"),a(c,"aria-labelledby","exampleModalLabel"),a(c,"aria-hidden","true"),a(v,"class","col"),a(I,"class","row row-cols-auto align-items-center text-left"),a(w,"class","container"),a(d,"class","page-section py-md-8 pl-md-5 px-md-5")},m(l,E){e(document.head,m),le(l,q,E),le(l,d,E),e(d,p),e(d,S),e(d,w),e(w,I),e(I,v),e(v,t),e(t,_),e(t,P),e(t,x),e(t,k),e(t,z),e(t,O),e(t,y),e(t,A),e(t,C),e(t,Q),e(t,h),de(f,h,null),e(h,U),de(b,h,null),e(t,F),e(t,M),e(t,G),e(t,$),e(t,N),e(t,Z),e(t,J),e(t,L),e(v,K),e(v,c),V=!0},p(l,[E]){const H={};E&1&&(H.color=l[0]),f.$set(H)},i(l){V||(ce(f.$$.fragment,l),ce(b.$$.fragment,l),V=!0)},o(l){ue(f.$$.fragment,l),ue(b.$$.fragment,l),V=!1},d(l){l&&(u(q),u(d)),u(m),me(f),me(b)}}}const ye="#fff";function Ce(T,m,q){let d="#000";return[d,R=>{q(0,d=R.detail.color)}]}class qe extends he{constructor(m){super(),fe(this,m,Ce,xe,pe,{})}}export{qe as component,De as universal};