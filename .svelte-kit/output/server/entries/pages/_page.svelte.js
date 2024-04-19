import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { B as Button, C as CommonLabel } from "../../chunks/Button.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".masthead{background:url('/images/header.png')}.btn-homepage-1{background-color:#ce8a61 !important}.btn-homepage-2{background-color:#61ce70 !important}.btn-homepage-3{background-color:#ce6193 !important}.btn-homepage-4{background-color:#6d61ce !important}@media only screen and (max-width: 768px){.responsive-header{padding-top:30rem !important}}@media screen and (max-width: 480px){.responsive-header{margin-top:15%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1mh4mlu_START -->${$$result.title = `<title>Steamtools | Inicio</title>`, ""}<!-- HEAD_svelte-1mh4mlu_END -->`, ""} <header class="masthead responsive-header"></header> <section class="page-section" id="about"><div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center"><div data-sveltekit-preload-data="tap" class="col-lg-8 text-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "m-2 btn-homepage-3",
      href: "/comics",
      variant: "raised"
    },
    {},
    {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Cómics`;
          }
        })}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "m-2 btn-homepage-4",
      href: "/comicas",
      variant: "raised"
    },
    {},
    {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Cómicas`;
          }
        })}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "m-2 btn-homepage-1",
      variant: "raised",
      href: "https://www.instagram.com/datitoscuriosospty/?igshid=YTQwZjQ0NmI0OA%3D%3D",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `datitos curiosos`;
          }
        })}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "m-2 btn-homepage-2",
      href: "/cuentacuentos",
      variant: "raised"
    },
    {},
    {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Cuentacuentos`;
          }
        })}`;
      }
    }
  )}</div></div></div> </section>`;
});
export {
  Page as default
};
