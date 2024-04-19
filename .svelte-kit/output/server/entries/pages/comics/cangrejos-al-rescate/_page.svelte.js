import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".icon.svelte-19h83wp{height:2rem !important;width:2rem !important;color:#1009ff !important}#topBtn.svelte-19h83wp{visibility:hidden}@media(max-width: 768px){.py-md-8{padding-top:9rem !important;padding-bottom:9rem !important}}@media(min-width: 768px){.py-md-8{padding-top:6rem !important;padding-bottom:6rem !important}}@media(min-width: 768px){.pl-md-5, .px-md-5{padding-left:3rem !important}}.container{max-width:1200px;margin:0 auto;color:#000000 !important}.col{display:flex;flex-wrap:wrap;justify-content:center}.row{justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-11zy0pr_START -->${$$result.title = `<title>El barrigón</title>`, ""}<meta name="El barrigón."><!-- HEAD_svelte-11zy0pr_END -->`, ""} <section><div class="container"><div class="row row-cols-auto align-items-center text-left"><div class="embed-responsive">${validate_component(missing_component, "svelte:component").$$render(
    $$result,
    {
      url: "/pdf/Cangrejos al rescate.pdf",
      showButtons: ["navigation", "zoom", "timeInfo", "pageInfo"],
      showBorder: "false"
    },
    {},
    {}
  )}</div></div></div> </section>`;
});
export {
  Page as default
};
