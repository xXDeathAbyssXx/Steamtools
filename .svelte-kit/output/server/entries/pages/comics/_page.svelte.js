import { c as create_ssr_component, a as add_attribute, e as escape, i as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/ActionIcons.js";
const CardComics_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn-play{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.comic-icon{position:relative}.comic-icon .btn-play{opacity:0;transition:opacity 0.3s ease}.comic-icon:hover .btn-play{opacity:1}.card-btn-custom{display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:flex-end}.pr-1{padding-bottom:10px}.card-custom{width:82% !important;border-radius:20px}.img-card{width:200px !important;height:282px !important;cursor:pointer;opacity:1;transition:opacity 0.3s ease-in-out;border-radius:20px}.img-card:hover{opacity:0.8}.mb-card{margin-bottom:6rem !important}@media(max-width: 768px){.mb-card{margin-bottom:4rem !important}}.card-media-16x9{background-size:40% !important}.mdc-card{background-color:unset !important;box-shadow:none !important}.icons{color:#000000 !important}",
  map: null
};
const CardComics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardData } = $$props;
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  $$result.css.add(css$1);
  return `<div class="card card-custom"><a${add_attribute("href", cardData.comic_url, 0)} rel="noopener noreferrer"><div class="pt-4 comic-icon"><img class="card-img-top img-card"${add_attribute("src", cardData.image, 0)} alt=""> <img class="btn-play" src="/images/play-btn.png" alt="Reproducir"></div></a> <div class="card-body"><h5 class="card-title">${escape(cardData.title)}</h5> <div class="card-btn-custom"><div class="btn-group pr-1" role="group"><button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-svelte-h="svelte-valrtl">Quiz en línea</button> <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">${each(cardData.buttons, (button) => {
    return `<a class="dropdown-item"${add_attribute("href", button.path, 0)}>${escape(button.label)}</a>`;
  })}</div></div> <div class="btn-group" role="group"><button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-svelte-h="svelte-1u41zkr">Descargar Quiz</button> <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">${each(cardData.buttons, (button) => {
    return `<a class="dropdown-item"${add_attribute("href", button.download_path, 0)}${add_attribute("download", button.download_name, 0)}>${escape(button.label)}</a>`;
  })}</div></div></div></div> </div>`;
});
const jsonData = [
  {
    image: "/images/portada_web-3.png",
    title: "El barrigón",
    comic_url: "/comics/el-arbol-barrigon",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 4°",
        path: "/comics/el-arbol-barrigon1"
      }
    ]
  },
  {
    image: "/images/miguel_web-1.webp",
    title: "El sueño de un barco llamado Miguel",
    comic_url: "/comics/el-sueno-de-un-barco-llamado-miguel",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 6°",
        path: "/comics/el-sueno-de-un-barco-llamado-miguel1"
      },
      {
        label: "QUIZ 2 | GRADO 6°",
        path: "/comics/el-sueno-de-un-barco-llamado-miguel2"
      },
      {
        label: "QUIZ 3 | GRADO 6°",
        path: "/comics/el-sueno-de-un-barco-llamado-miguel3"
      }
    ]
  },
  {
    image: "/images/laguna_web-1.png",
    title: "La laguna encantada",
    comic_url: "/comics/la-laguna-encantada",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 4°",
        path: "/comics/la-laguna-encantada1"
      },
      {
        label: "QUIZ 2 | GRADO 4°",
        path: "/comics/la-laguna-encantada2"
      }
    ]
  },
  {
    image: "/images/leo-1.png",
    title: "Leo, el tiburón gato",
    comic_url: "/comics/leo-el-tiburon-gato",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 3°",
        path: "/comics/leo-el-tiburon-gato1"
      },
      {
        label: "QUIZ 2 | GRADO 5°",
        path: "/comics/leo-el-tiburon-gato2"
      },
      {
        label: "QUIZ 3 | GRADO 5°",
        path: "/comics/leo-el-tiburon-gato3"
      },
      {
        label: "QUIZ 4 | GRADO 6°",
        path: "/comics/leo-el-tiburon-gato4"
      }
    ]
  },
  {
    image: "/images/cangrejo_web-2.png",
    title: "Cangrejos al rescate",
    comic_url: "/comics/cangrejos-al-rescate",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 4°",
        path: "/comics/cangrejos-al-rescate1"
      }
    ]
  },
  {
    image: "/images/portada_web-4.png",
    title: "Yeyo, el guarumo",
    comic_url: "/comics/yeyo-el-guarumo",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 4°",
        path: "/comics/yeyo-el-guarumo1"
      },
      {
        label: "QUIZ 2 | GRADO 5°",
        path: "/comics/yeyo-el-guarumo2"
      }
    ]
  },
  {
    image: "/images/samira_web-1.png",
    title: "La mariposa Samira",
    comic_url: "/comics/la-mariposa-samira",
    buttons: [
      {
        label: "QUIZ 1 | GRADO 6°",
        path: "/comics/la-mariposa-samira1"
      }
    ]
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cards-section-custom{display:flex;flex-direction:column;align-items:center}.title-div{background-color:#4310e8;border-radius:15px}.title-font{font-family:'Merriweather Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n			'Segoe UI Symbol', 'Noto Color Emoji';font-weight:700;color:#16a7a6 !important}.comics-background{background-image:url('/images/fondo4.png');background-repeat:no-repeat;background-attachment:fixed;background-size:cover}@media(max-width: 768px){.py-md-8{padding-top:9rem !important;padding-bottom:9rem !important}}@media(min-width: 768px){.py-md-8{padding-top:6rem !important;padding-bottom:6rem !important}}@media(min-width: 768px){.pl-md-5, .px-md-5{padding-left:3rem !important}}.container{max-width:1200px;margin:0 auto;color:#000000 !important}.col{display:flex;flex-wrap:wrap;justify-content:center}@media(min-width: 320px) and (max-width: 480px){.card-display{min-width:375px !important}}.card-display{max-width:500px;min-width:500px;margin-right:30%;margin-left:30%}.card-media-16x9{background-size:cover;background-position:center}.mdc-typography--headline6,.mdc-typography--subtitle2,.mdc-typography--body2{margin:0}.mdc-button__label{white-space:nowrap}.mdc-card__actions{flex-direction:column !important}.mdc-card__action-buttons{flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1cl50oh_START -->${$$result.title = `<title>Steamtools | Cómics</title>`, ""}<!-- HEAD_svelte-1cl50oh_END -->`, ""} <section class="page-section py-md-8 pl-md-5 px-md-5 comics-background"><div class="title-div mb-5" data-svelte-h="svelte-38alc"><h1 class="text-primary text-center title-font p-1">Cómics</h1></div> <div class="container"><div class="row row-cols-auto align-items-center text-center"><div class="col"><div class="card-columns cards-section-custom">${each(jsonData, (cardData) => {
    return `${validate_component(CardComics, "Card").$$render($$result, { cardData }, {}, {})}`;
  })}</div></div></div></div> </section>`;
});
export {
  Page as default
};
