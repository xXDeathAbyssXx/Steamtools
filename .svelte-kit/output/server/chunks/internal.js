import { c as create_ssr_component, h as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => `<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<!-- HTML BASE -->
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

		<!-- CEO -->
		<meta
			name="description"
			content="Descubre STEAMTOOLS, una plataforma educativa comprometida con la innovación en la enseñanza de Ciencias Naturales para niños. Inspirados en la serie de cuentos 'Cuentos del Trópico' de Herminia Peña, creamos herramientas digitales creativas y accesibles de manera gratuita. Nos destacamos por nuestro enfoque inclusivo, demostrando que el aprendizaje puede ser emocionante para todos. Nuestras herramientas, respaldadas por la SENACYT, están diseñadas para apoyar a los docentes en la creación de evaluaciones basadas en los objetivos de pruebas TERCE, fomentando el pensamiento lógico y un aprendizaje duradero en estudiantes de educación primaria. Explora cómics en 2D, estilo manga, cuentacuentos en lenguaje de señas y la serie 'Datitos curiosos'. Únete a nuestra visión de transformar la educación, siendo una referencia para docentes en la creación de evaluaciones de comprensión lectora contextualizadas."
		/>
		<meta property="og:image" content="` + assets2 + '/logo.png" />\n		<meta property="og:type" content="Steamtools" />\n		<meta\n			name="keywords"\n			content="educación, recursos digitales, aprendizaje, Ciencias Naturales, niños, cuentos infantiles, Cuentos del Trópico, Herminia Peña, herramientas gratuitas, creatividad, inclusión social, acceso, estudiantes, capacidades, valores morales, formación integral, docentes, evaluaciones, afianzamiento, comprensión lectora, objetivos de pruebas TERCE, pensamiento lógico, texto, aprendizaje significativo, educación primaria, STEAMTOOLS, SENACYT, concurso, convocatoria pública, dirección de Fortalecimiento del Aprendizaje en la Ciencia y la Tecnología, proyecto, herramientas didácticas, formato digital, conocimientos, cómicas en 2D, cómics estilo manga, videos de cuentacuentos, traducción en lenguaje de señas, serie audiovisual, Datitos curiosos, datos científicos, Panamá, visión, transformación de la educación, método memorístico, plataforma referente, contextos transversales"\n		/>\n		<meta name="subject" content="Plataforma educativa STEAMTOOLS" />\n		<meta name="language" content="ES" />\n		<meta\n			name="topic"\n			content="Innovación en educación, Ciencias Naturales, Herramientas didácticas digitales, Aprendizaje significativo"\n		/>\n		<meta name="Classification" content="Educación y Tecnología" />\n		<meta name="author" content="STEAMTOOLS Inc." />\n		<meta name="designer" content="Equipo de desarrollo de STEAMTOOLS" />\n		<meta name="copyright" content="© 2023 STEAMTOOLS Inc. All rights reserved" />\n		<meta name="owner" content="STEAMTOOLS Inc." />\n		<meta name="directory" content="Educación/Recursos Digitales" />\n		<meta name="category" content="Plataforma educativa, Ciencias Naturales, Comics educativos" />\n		<meta name="msapplication-TileColor" content="#211054" />\n		<meta name="theme-color" content="#211054" />\n\n		<!-- Google Search Console Verify -->\n		<meta name="google-site-verification" content="hhOCjxX88VrFBDXZ3pEqaCjQl50jUpSO8dO-0RYg-NI" />\n\n		<!-- Favicon -->\n		<link\n			rel="apple-touch-icon"\n			sizes="180x180"\n			href="/' + assets2 + '/favicon/apple-touch-icon.png"\n		/>\n		<link\n			rel="icon"\n			type="image/png"\n			sizes="32x32"\n			href="' + assets2 + '/favicon/favicon-32x32.png"\n		/>\n		<link\n			rel="icon"\n			type="image/png"\n			sizes="16x16"\n			href="' + assets2 + '/favicon/favicon-16x16.png"\n		/>\n		<link rel="manifest" href="' + assets2 + '/favicon/site.webmanifest" />\n\n		<link rel="stylesheet" href="' + assets2 + '/css/styles.css" type="text/css" />\n		<!-- SMUI Styles -->\n		<link\n			rel="stylesheet"\n			href="' + assets2 + '/smui/runtime/smui.css"\n			media="(prefers-color-scheme: light)"\n			type="text/css"\n		/>\n		<link\n			rel="stylesheet"\n			href="' + assets2 + '/smui/runtime/smui-dark.css"\n			media="screen and (prefers-color-scheme: dark)"\n			type="text/css"\n		/>\n		<link rel="preconnect" href="https://fonts.googleapis.com" />\n		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n		<!-- Material Icons, Roboto, and Roboto Mono fonts -->\n		<link\n			href="https://fonts.googleapis.com/css2?family=Material+Icons&Roboto+Mono:ital@0;1&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"\n			rel="stylesheet"\n		/>\n		<!-- Bootstrap-->\n		<link\n			rel="stylesheet"\n			href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"\n			integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"\n			crossorigin="anonymous"\n			type="text/css"\n		/>\n		<link\n			rel="stylesheet"\n			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"\n			rel="stylesheet"\n			type="text/css"\n		/>\n		<!-- Google fonts-->\n		<link\n			href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"\n			rel="stylesheet"\n		/>\n		<link\n			href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"\n			rel="stylesheet"\n			type="text/css"\n		/>\n		<!-- SimpleLightbox plugin CSS-->\n		<link\n			href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css"\n			rel="stylesheet"\n		/>\n		' + head + '\n	</head>\n	\n	<body id="page-top" oncontextmenu="return false" data-sveltekit-preload-data>\n		<div id="svelte" style="display: contents">' + body + '</div>\n		<!-- Bootstrap core JS-->\n		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"><\/script>\n		<script\n			src="https://code.jquery.com/jquery-3.2.1.slim.min.js"\n			integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"\n			crossorigin="anonymous"\n		><\/script>\n		<script\n			src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"\n			integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"\n			crossorigin="anonymous"\n		><\/script>\n		<script\n			src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"\n			integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"\n			crossorigin="anonymous"\n		><\/script>\n		<!-- SimpleLightbox plugin JS-->\n		<script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"><\/script>\n		<!-- Core theme JS-->\n		<script src="' + assets2 + `/js/scripts.js"><\/script>
		<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
		<!-- * *                               SB Forms JS                               * *-->
		<!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
		<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
		<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"><\/script>
		<!-- Log Rockert -->
		<script src="https://cdn.intake-lr.com/LogRocket.min.js" crossorigin="anonymous"><\/script>
		<script>
			window.LogRocket && window.LogRocket.init('ylszv5/steamstools');
		<\/script>
		<!-- Navbar Collapse on mobile -->
		<script>
			$(document).ready(function () {
				$(window).scroll(function () {
					$('.navbar-collapse').collapse('hide');
				});
			});
		<\/script>
	</body>
</html>
`,
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1ew41w6"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
