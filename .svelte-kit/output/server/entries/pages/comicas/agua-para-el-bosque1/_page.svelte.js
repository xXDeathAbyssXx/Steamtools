import { c as create_ssr_component, a as add_attribute, b as add_styles, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Palette } from "../../../../chunks/Palette.js";
const CanvasDrawAguaBosque_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".canva-agua-bosque-custom{border:1px solid #ced4da;border-radius:0.375rem;touch-action:none;background-image:url('/images/bomberos.jpeg') !important;background-size:contain !important;background-repeat:no-repeat !important;background-position:center center !important}",
  map: null
};
const CanvasDrawAguaBosque = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 350 } = $$props;
  let { height = 300 } = $$props;
  let { color = "#333" } = $$props;
  let { background: background2 = "#fff" } = $$props;
  let canvas;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.background === void 0 && $$bindings.background && background2 !== void 0)
    $$bindings.background(background2);
  $$result.css.add(css$1);
  return ` <canvas class="canva-agua-bosque-custom"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_styles({ background: background2 })}${add_attribute("this", canvas, 0)}></canvas>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".draw-canva-custom{display:flex;flex-direction:column;align-items:center;justify-content:center;align-content:center;padding-left:5%;padding-right:5%}@media(min-width: 1025px){.img-size-custom{max-width:50% !important}}@media(max-width: 768px){.py-md-8{padding-top:9rem !important;padding-bottom:9rem !important}}@media(min-width: 768px){.py-md-8{padding-top:6rem !important;padding-bottom:6rem !important}}@media(min-width: 768px){.pl-md-5, .px-md-5{padding-left:3rem !important}}.container{max-width:1200px;margin:0 auto;color:#000000 !important}.col{display:flex;flex-wrap:wrap;justify-content:center}.row{justify-content:center}",
  map: null
};
const background = "#fff";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color = "#000";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-qya9o6_START -->${$$result.title = `<title>Agua para el bosque</title>`, ""}<meta name="Agua para el bosque." content="QUIZ 1 | GRADO 4°"><!-- HEAD_svelte-qya9o6_END -->`, ""} <section class="page-section py-md-8 pl-md-5 px-md-5"><h1 class="text-primary text-center pb-7" data-svelte-h="svelte-18tw0p0">Festival de las Charcas</h1> <div class="container"><div class="row row-cols-auto align-items-center text-left"><div class="col"><div class="short-title-fix" data-svelte-h="svelte-z080d"><div class="text-left"><h5 class="font-weight-bold pb-3 px-2">Observa este dibujo: ¿Qué falta?</h5></div></div> <form name="form" id="questions" onsubmit="return false;"><div class="draw-canva-custom">${validate_component(CanvasDrawAguaBosque, "Canvas").$$render($$result, { color, background }, {}, {})} ${validate_component(Palette, "Palette").$$render($$result, {}, {}, {})} <h5 class="font-weight-bold pb-3 px-2" data-svelte-h="svelte-o8cnv8">Dibuja los elementos que faltan.</h5></div> <div class="center" data-svelte-h="svelte-sgzhw2"><button type="submit" class="btn btn-primary m-4" id="sendA" value="Submit" onclick="score(17)">Enviar</button></div> <br> <div id="form-modal-finished"></div></form> <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-svelte-h="svelte-142pyns"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">¡Quiz terminado! 🎉</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div> <div class="modal-body">Has completado el quiz exitosamente. ¿Te gustaría ir a la página principal de las
								cómicas? 🚀</div> <div class="modal-footer"><a data-sveltekit-preload-data="hover" target="_blank" href="/comicas"><button type="button" class="btn btn-primary">Ir</button></a></div></div></div></div></div></div></div> </section>`;
});
export {
  Page as default
};
