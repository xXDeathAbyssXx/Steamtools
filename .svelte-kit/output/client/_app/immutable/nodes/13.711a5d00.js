import{s as h,f as d,a as p,B as b,g as r,d as i,c as v,r as f,j as c,u as x,i as m,v as o}from"../chunks/scheduler.648f142a.js";import{S as g,i as k}from"../chunks/index.ae413033.js";const _=!0,q=Object.freeze(Object.defineProperty({__proto__:null,prerender:_},Symbol.toStringTag,{value:"Module"}));function y(u){let e,l,a,n=`<h1 class="text-primary text-center pb-7">Pipe y la Luna</h1> <div class="container"><div class="row row-cols-auto align-items-center text-left"><div class="col"><div class="short-title-fix"><div class="text-left"><h5 class="font-weight-bold pb-3 px-2">Lee el siguiente gráfico:</h5></div> <img src="/images/imagen_pipe_comica_2.png" class="img-fluid img-size-custom" alt=""/></div> <form name="form" id="questions" onsubmit="return false;"><h5 class="p-4">¿Cuál es el tema que mejor corresponde a todas las ideas del gráfico?</h5> <div class="form-check mx-4 mb-3"><input class="form-check-input quizes-checkbox" type="checkbox" name="q1[]" value="a" onchange="limitCheckboxes(this, 1)"/> <label class="form-check-label" for="defaultCheck1">A. Las funciones de la Luna.</label></div> <div class="form-check mx-4 mb-3"><input class="form-check-input quizes-checkbox" type="checkbox" name="q1[]" value="b" onchange="limitCheckboxes(this, 1)"/> <label class="form-check-label" for="defaultCheck1">B. Características de la Luna.</label></div> <div class="form-check mx-4 mb-3"><input class="form-check-input quizes-checkbox" type="checkbox" name="q1[]" value="c" onchange="limitCheckboxes(this, 1)"/> <label class="form-check-label" for="defaultCheck1">C. Efectos de la Luna.</label></div> <div class="form-check mx-4 mb-3"><input class="form-check-input quizes-checkbox" type="checkbox" name="q1[]" value="d" onchange="limitCheckboxes(this, 1)"/> <label class="form-check-label" for="defaultCheck1">D. Importancia de la Luna sobre las mareas.</label></div> <div class="center"><button type="submit" class="btn btn-primary m-4" id="sendA" value="Submit" onclick="score(23)">Enviar</button></div> <br/> <div id="form-modal-finished"></div></form> <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">¡Quiz terminado! 🎉</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div> <div class="modal-body">Has completado el quiz exitosamente. ¿Te gustaría ir a la página principal de las
								cómicas? 🚀</div> <div class="modal-footer"><a data-sveltekit-preload-data="hover" target="_blank" href="/comicas"><button type="button" class="btn btn-primary">Ir</button></a></div></div></div></div></div></div></div>`;return{c(){e=d("meta"),l=p(),a=d("section"),a.innerHTML=n,this.h()},l(t){const s=b("svelte-1gt4u34",document.head);e=r(s,"META",{name:!0,content:!0}),s.forEach(i),l=v(t),a=r(t,"SECTION",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-1wlpn0g"&&(a.innerHTML=n),this.h()},h(){document.title="Pipe y la Luna",c(e,"name","Pipe y la Luna."),c(e,"content","QUIZ 1 | GRADO 4°"),c(a,"class","page-section py-md-8 pl-md-5 px-md-5")},m(t,s){x(document.head,e),m(t,l,s),m(t,a,s)},p:o,i:o,o,d(t){t&&(i(l),i(a)),i(e)}}}class z extends g{constructor(e){super(),k(this,e,null,y,h,{})}}export{z as component,q as universal};