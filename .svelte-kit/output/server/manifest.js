export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/styles.css","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/site.webmanifest","images/bomberos.jpeg","images/cangrejo_web-2.png","images/comica_agua.jpg","images/comica_ardilla.jpg","images/comica_festival.jpg","images/comica_ita.jpg","images/comica_pipe.jpg","images/comica_samira.jpg","images/fondo1.jpg","images/fondo2.png","images/fondo3.jpg","images/fondo3.png","images/fondo4.png","images/fondo5.jpg","images/header-transformed.jpeg","images/header.png","images/imagen_ardilla_1.jpg","images/imagen_ardilla_2.jpg","images/imagen_ardilla_3.jpg","images/imagen_ardilla_4.jpg","images/imagen_ardilla_5.jpg","images/imagen_ardilla_6.jpg","images/imagen_cangrejos_quiz_1.png","images/imagen_festival_comcia_2.png","images/imagen_laguna_1.jpg","images/imagen_laguna_2.jpg","images/imagen_laguna_3.jpg","images/imagen_laguna_quiz_1.png","images/imagen_leo_quiz_1.png","images/imagen_leo_quiz_2.png","images/imagen_leo_quiz_4.png","images/imagen_miguel_qiuz_1.png","images/imagen_pipe_1.jpg","images/imagen_pipe_2.jpg","images/imagen_pipe_3.jpg","images/imagen_pipe_4.jpg","images/imagen_pipe_comica_2.png","images/imagen_quiz_barrigon.jpg","images/imagen_ranas_1.jpg","images/imagen_ranas_2.jpg","images/imagen_ranas_3.jpg","images/imagen_ranas_4.jpg","images/imagen_samira_1.jpg","images/imagen_samira_2.jpg","images/imagen_samira_3.jpg","images/imagen_samira_4.jpg","images/imagen_samira_comica_2.png","images/imagen_samira_quiz_1.png","images/imagen_yeyo_quiz_1.jpeg","images/imagen_yeyo_quiz_2.png","images/laguna_web-1.png","images/leo-1.png","images/main.jpg","images/miguel_web-1.webp","images/play-btn.png","images/portada_web-3.png","images/portada_web-4.png","images/reciclar-amarillo.jpeg","images/reciclar-blanco.jpeg","images/reciclar-verde.jpeg","images/samira_web-1.png","images/youtube.png","js/scripts.js","logo.png","pdf/Agua para el bosque | QUIZ 1 | GRADO 2.pdf","pdf/Cangrejos al rescate | QUIZ 1 | GRADO 4.pdf","pdf/Cangrejos al rescate.pdf","pdf/Deisy, la ardilla valiente | QUIZ 1 | GRADO 1.pdf","pdf/El barrigon | QUIZ 1 | GRADO 4.pdf","pdf/El barrigon.pdf","pdf/El sueno de un barco llamado Miguel | QUIZ 1 | GRADO 6.pdf","pdf/El sueno de un barco llamado Miguel | QUIZ 2 | GRADO 6.pdf","pdf/El sueno de un barco llamado Miguel | QUIZ 3 | GRADO 6.pdf","pdf/El sueño de un barco llamado Miguel.pdf","pdf/Festival de las Charcas | QUIZ 1 | GRADO 1.pdf","pdf/Festival de las Charcas | QUIZ 2 | GRADO 3.pdf","pdf/Ita, la latita | QUIZ 1 | GRADO 2 y GRADO 3.pdf","pdf/La laguna encantada | QUIZ 1 | GRADO 4.pdf","pdf/La laguna encantada | QUIZ 2 | GRADO 4.pdf","pdf/La laguna encantada.pdf","pdf/La mariposa Samira | QUIZ 1 | GRADO 2 y GRADO 3.pdf","pdf/La mariposa Samira | QUIZ 1 | GRADO 6.pdf","pdf/La mariposa Samira | QUIZ 2 | GRADO 4.pdf","pdf/La mariposa Samira.pdf","pdf/Leo, el tiburon gato | QUIZ 1 | GRADO 3.pdf","pdf/Leo, el tiburon gato | QUIZ 2 | GRADO 5.pdf","pdf/Leo, el tiburon gato | QUIZ 3 | GRADO 5.pdf","pdf/Leo, el tiburon gato | QUIZ 4 | GRADO 6.pdf","pdf/Leo, el tiburón gato.pdf","pdf/Pipe y la Luna | QUIZ 1 | GRADO 2.pdf","pdf/Pipe y la Luna | QUIZ 2 | GRADO 3.pdf","pdf/Pipe y la Luna | QUIZ 3 | GRADO 3.pdf","pdf/Yeyo, el guarumo | QUIZ 1 | GRADO 4.pdf","pdf/Yeyo, el guarumo | QUIZ 2 | GRADO 5.pdf","pdf/Yeyo, el guarumo.pdf","pdf/sample.pdf","robots.txt","sitemap.xml","smui/runtime/smui-dark.css","smui/runtime/smui.css"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".webmanifest":"application/manifest+json",".jpeg":"image/jpeg",".jpg":"image/jpeg",".webp":"image/webp",".js":"application/javascript",".pdf":"application/pdf",".txt":"text/plain",".xml":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.fd930e89.js","app":"_app/immutable/entry/app.0d8a9ddf.js","imports":["_app/immutable/entry/start.fd930e89.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/singletons.eff3c856.js","_app/immutable/entry/app.0d8a9ddf.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/34.js'))
		],
		routes: [
			{
				id: "/comicas/festival-de-las-charcas1",
				pattern: /^\/comicas\/festival-de-las-charcas1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/comics/cangrejos-al-rescate",
				pattern: /^\/comics\/cangrejos-al-rescate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/comics/el-arbol-barrigon",
				pattern: /^\/comics\/el-arbol-barrigon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/comics/el-sueno-de-un-barco-llamado-miguel",
				pattern: /^\/comics\/el-sueno-de-un-barco-llamado-miguel\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/comics/la-laguna-encantada",
				pattern: /^\/comics\/la-laguna-encantada\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/comics/la-mariposa-samira",
				pattern: /^\/comics\/la-mariposa-samira\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/comics/leo-el-tiburon-gato",
				pattern: /^\/comics\/leo-el-tiburon-gato\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/comics/yeyo-el-guarumo",
				pattern: /^\/comics\/yeyo-el-guarumo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
