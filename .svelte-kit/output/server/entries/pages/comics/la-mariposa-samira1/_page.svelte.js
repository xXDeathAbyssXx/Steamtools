import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CanvasDraw } from "../../../../chunks/CanvasDraw.js";
import { P as Palette } from "../../../../chunks/Palette.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".draw-canva-custom{display:flex;flex-direction:column;align-items:center;justify-content:center;align-content:center;padding-left:5%;padding-right:5%}@media(min-width: 1025px){.img-size-custom{max-width:50% !important}}@media(max-width: 768px){.py-md-8{padding-top:9rem !important;padding-bottom:9rem !important}}@media(min-width: 768px){.py-md-8{padding-top:6rem !important;padding-bottom:6rem !important}}@media(min-width: 768px){.pl-md-5, .px-md-5{padding-left:3rem !important}}.container{max-width:1200px;margin:0 auto;color:#000000 !important}.col{display:flex;flex-wrap:wrap;justify-content:center}.row{justify-content:center}",
  map: null
};
const background = "#fff";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color = "#000";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-lw045k_START -->${$$result.title = `<title>La mariposa Samira</title>`, ""}<meta name="La mariposa Samira." content="QUIZ 1 | GRADO 4°"><!-- HEAD_svelte-lw045k_END -->`, ""} <section class="page-section py-md-8 pl-md-5 px-md-5"><h1 class="text-primary text-center pb-7" data-svelte-h="svelte-tfasqq">La mariposa Samira</h1> <div class="container"><div class="row row-cols-auto align-items-center text-left"><div class="col"><form name="form" id="questions" onsubmit="return false;"><h5 class="font-weight-bold pb-3 px-2" data-svelte-h="svelte-10v3q9a">Contexto:</h5> <h6 class="py-3 text-justify" data-svelte-h="svelte-l3hq2g">Una tarde ocurrió algo inesperado: la familia de Samira fue atrapada por humanos; las
						encerraron en un frasco y las llevaron hasta una empresa que luego las vendería como
						cuadros decorativos.</h6> <hr class="rounded"> <h6 class="py-3 text-justify" data-svelte-h="svelte-1feal3z">Observa la secuencia de escenas, y dibuja un final diferente para esta historia en donde
						se demuestre que la intervención del hombre debe ser una relación benéfica para el
						ambiente.</h6> <img src="/images/imagen_samira_quiz_1.png" class="img-fluid pb-3" alt=""> <h5 class="font-weight-bold pb-3 px-2" data-svelte-h="svelte-1dc1ig4">Final</h5> <div class="draw-canva-custom">${validate_component(CanvasDraw, "Canvas").$$render($$result, { color, background }, {}, {})} ${validate_component(Palette, "Palette").$$render($$result, {}, {}, {})}</div> <div class="form-group" data-svelte-h="svelte-qinl00"><h5 class="font-weight-bold pb-3 px-2">Redacta un párrafo que explique tu idea:</h5> <textarea class="form-control" id="textarea-zds83h" rows="8"></textarea></div> <div class="center" data-svelte-h="svelte-qbbs0p"><button type="submit" class="btn btn-primary m-4" id="sendA" value="Submit" onclick="score(14)">Enviar</button></div> <br> <div id="form-modal-finished"></div></form> <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-svelte-h="svelte-1yd6hs4"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">¡Quiz terminado! 🎉</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div> <div class="modal-body">Has completado el quiz exitosamente. ¿Te gustaría ir a la página principal de
								cómics? 🚀</div> <div class="modal-footer"><a data-sveltekit-preload-data="hover" target="_blank" href="/comics"><button type="button" class="btn btn-primary">Ir</button></a></div></div></div></div></div></div></div> </section>`;
});
export {
  Page as default
};
