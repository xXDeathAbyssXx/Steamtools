import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contactenos-background{background-image:url('/images/fondo1.jpg');background-repeat:no-repeat;background-attachment:fixed;background-size:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-728khu_START -->${$$result.title = `<title>Steamtools | Contactenos</title>`, ""}<!-- HEAD_svelte-728khu_END -->`, ""} <section class="page-section contactenos-background" id="contact"><div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center" data-svelte-h="svelte-1e79po2"><div class="col-lg-8 col-xl-6"><h2 class="mt-4">Contactenos</h2> <hr class="divider"> <p class="mb-5 text-white">Estamos aquí para hacer que tu experiencia educativa sea aún mejor. Valoramos tu opinión.
					Por favor, escríbenos con cualquier comentario, sugerencia o inquietud.</p></div></div> <div class="row gx-4 gx-lg-5 justify-content-center mb-5"><div class="col-lg-6"><form> <div class="form-floating mb-3" data-svelte-h="svelte-12xhlji"><input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" name="name"> <label for="name">Nombre completo</label> <div class="invalid-feedback" data-sb-feedback="name:required">Se requiere un nombre.</div></div>  <div class="form-floating mb-3" data-svelte-h="svelte-9zvars"><input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" name="email"> <label for="email">Dirección de correo electrónico</label> <div class="invalid-feedback" data-sb-feedback="email:required">Se requiere un correo electrónico.</div> <div class="invalid-feedback" data-sb-feedback="email:email">El correo electrónico no es válido.</div></div>  <div class="form-floating mb-3" data-svelte-h="svelte-1i66hhr"><textarea class="form-control" id="message" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required" name="message"></textarea> <label for="message">Mensaje</label> <div class="invalid-feedback" data-sb-feedback="message:required">Se requiere un mensaje.</div></div>  <div class="d-none" id="submitSuccessMessage" data-svelte-h="svelte-q255uv"><div class="text-center mb-3"><div class="text-success"><div class="fw-bolder">¡Envío exitoso!</div>
								Gracias por ponerte en contacto con nosotros.</div></div></div>  <div class="d-none" id="submitErrorMessage" data-svelte-h="svelte-1kkjo1p"><div class="text-center text-danger mb-3">¡Error al enviar el mensaje!</div></div>  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-svelte-h="svelte-mwhn0"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Error en el formulario</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div> <div class="modal-body"></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button></div></div></div></div> <div class="d-grid"><button class="btn btn-primary btn-xl" type="submit" ${""}>Enviar</button></div></form></div></div></div> </section>`;
});
export {
  Page as default
};
