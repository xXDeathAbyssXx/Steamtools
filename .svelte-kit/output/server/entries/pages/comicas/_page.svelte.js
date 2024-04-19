import { c as create_ssr_component, d as compute_rest_props, f as get_current_component, j as spread, n as escape_attribute_value, k as escape_object, a as add_attribute, v as validate_component, e as escape, i as each } from "../../../chunks/ssr.js";
import { f as forwardEventsBuilder, c as classMap } from "../../../chunks/SmuiElement.js";
import { C as Content } from "../../../chunks/ActionIcons.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "padded", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card": true,
          "mdc-card--outlined": variant === "outlined",
          "smui-card--padded": padded
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const PrimaryAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "ripple", "color", "padded", "tabindex", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { padded = false } = $$props;
  let { tabindex = 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card__primary-action": true,
          "smui-card__primary-action--padded": padded,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      { role: "button" },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-card__ripple"></div> ${slots.default ? slots.default({}) : ``} </div>`;
});
const CardComicas_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".video-link img{opacity:1;transition:opacity 0.3s ease-in-out}.video-link:hover img{opacity:0.8}.miniatura{border-radius:20px;transition:border-radius 10s ease-in-out}.miniatura:hover{border-radius:0%}.card-media-comicas{background-size:70% !important}.mb-card{margin-bottom:6rem !important}@media(max-width: 768px){.mb-card{margin-bottom:4rem !important}}.card-media-16x9{background-size:40% !important}.mdc-card{box-shadow:none;background:unset}.icons{color:#000000 !important}",
  map: null
};
const CardComicas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardData } = $$props;
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  $$result.css.add(css$1);
  return `<div class="card-display mb-card"><div class="card-container">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
        default: () => {
          return `<a${add_attribute("href", cardData.youtube_url, 0)} class="video-link" target="_blank" style="position: relative; display: inline-block;"><img${add_attribute("src", cardData.image, 0)} style="width: 70%; border-radius: 20px;" alt=""> <img class="hover-youtube-icon" src="/images/youtube.png" alt="Reproducir" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></a> ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
            default: () => {
              return `<h2 class="mdc-typography--headline6 px-4 text-primary" style="margin: 0;">${escape(cardData.title)}</h2>`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="btn-group" role="group"><button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-svelte-h="svelte-17zctqx">Quiz en línea</button> <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">${each(cardData.buttons, (button) => {
    return `<a class="dropdown-item"${add_attribute("href", button.path, 0)}>${escape(button.label)}</a>`;
  })}</div></div> <div class="btn-group" role="group"><button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-svelte-h="svelte-x9g7v2">Descargar Quiz</button> <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">${each(cardData.buttons, (button) => {
    return `<a class="dropdown-item"${add_attribute("href", button.download_path, 0)}${add_attribute("download", button.download_name, 0)}>${escape(button.label)}</a>`;
  })}</div></div></div> </div>`;
});
const jsonData = [
  {
    image: "/images/comica_festival.jpg",
    title: "Festival de las Charcas",
    youtube_url: "https://www.youtube.com/watch?v=b_VcgI_uvOI",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 1°",
        path: "/comicas/festival-de-las-charcas1"
      },
      {
        label: "QUIZ 2 | GRADO 3°",
        path: "/comicas/festival-de-las-charcas2"
      }
    ]
  },
  {
    image: "/images/comica_agua.jpg",
    title: "Agua para el bosque",
    youtube_url: "https://www.youtube.com/watch?v=slIkIOuKzBQ",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 2°",
        path: "/comicas/agua-para-el-bosque1"
      }
    ]
  },
  {
    image: "/images/comica_ardilla.jpg",
    title: "Deisy, la ardilla valiente",
    youtube_url: "https://www.youtube.com/watch?v=AqF2AcuHK98",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 1°",
        path: "/comicas/deisy-la-ardilla-valiente1"
      }
    ]
  },
  {
    image: "/images/comica_pipe.jpg",
    title: "Pipe y la Luna",
    youtube_url: "https://www.youtube.com/watch?v=xPCl-m3YV4Y",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 2°",
        path: "/comicas/pipe-y-la-luna1"
      },
      {
        label: "QUIZ 2 | GRADO 3°",
        path: "/comicas/pipe-y-la-luna2"
      },
      {
        label: "QUIZ 3 | GRADO 3°",
        path: "/comicas/pipe-y-la-luna3"
      }
    ]
  },
  {
    image: "/images/comica_ita.jpg",
    title: "Ita, la latita",
    youtube_url: "https://www.youtube.com/watch?v=rBSNoucl1gU",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 2° y GRADO 3°",
        path: "/comicas/ita-la-latita1"
      }
    ]
  },
  {
    image: "/images/comica_samira.jpg",
    title: "La mariposa Samira",
    youtube_url: "https://www.youtube.com/watch?v=5AMer6A5x5c",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 2° y GRADO 3°",
        path: "/comicas/la-mariposa-samira1"
      },
      {
        label: "QUIZ 2 | GRADO 4°",
        path: "/comicas/la-mariposa-samira2"
      }
    ]
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title-div{background-color:#4310e8;border-radius:15px}.title-font{font-family:'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n			'Segoe UI Symbol', 'Noto Color Emoji';font-weight:700;color:#16a7a6 !important}.comicas-background{background-image:url('/images/fondo2.png');background-repeat:no-repeat;background-attachment:fixed;background-size:cover}@media(max-width: 768px){.py-md-8{padding-top:9rem !important;padding-bottom:9rem !important}}@media(min-width: 768px){.py-md-8{padding-top:6rem !important;padding-bottom:6rem !important}}@media(min-width: 768px){.pl-md-5, .px-md-5{padding-left:3rem !important}}.container{max-width:1200px;margin:0 auto;color:#000000 !important}.col{display:flex;flex-wrap:wrap;justify-content:center}@media(min-width: 320px) and (max-width: 480px){.card-display{min-width:375px !important}}.card-display{max-width:500px;min-width:500px;margin-right:30%;margin-left:30%}.card-media-16x9{background-size:cover;background-position:center}.mdc-typography--headline6,.mdc-typography--subtitle2,.mdc-typography--body2{margin:0}.mdc-button__label{white-space:nowrap}.mdc-card__actions{flex-direction:column !important}.mdc-card__action-buttons{flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-n7x6gm_START -->${$$result.title = `<title>Steamtools | Cómicas</title>`, ""}<!-- HEAD_svelte-n7x6gm_END -->`, ""} <section class="page-section py-md-8 pl-md-5 px-md-5 comicas-background"><div class="title-div mb-5" data-svelte-h="svelte-172sstf"><h1 class="text-primary text-center title-font p-1">Cómicas</h1></div> <div class="container"><div class="row row-cols-auto align-items-center text-center"><div class="col">${each(jsonData, (cardData) => {
    return `${validate_component(CardComicas, "Card").$$render($$result, { cardData }, {}, {})}`;
  })}</div></div></div> </section>`;
});
export {
  Page as default
};
