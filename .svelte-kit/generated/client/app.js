export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/comicas": [4],
		"/comicas/agua-para-el-bosque1": [5],
		"/comicas/deisy-la-ardilla-valiente1": [6],
		"/comicas/festival-de-las-charcas1": [7],
		"/comicas/festival-de-las-charcas2": [8],
		"/comicas/ita-la-latita1": [9],
		"/comicas/la-mariposa-samira1": [10],
		"/comicas/la-mariposa-samira2": [11],
		"/comicas/pipe-y-la-luna1": [12],
		"/comicas/pipe-y-la-luna2": [13],
		"/comicas/pipe-y-la-luna3": [14],
		"/comics": [15],
		"/comics/cangrejos-al-rescate1": [17],
		"/comics/cangrejos-al-rescate": [16],
		"/comics/el-arbol-barrigon1": [19],
		"/comics/el-arbol-barrigon": [18],
		"/comics/el-sueno-de-un-barco-llamado-miguel1": [21],
		"/comics/el-sueno-de-un-barco-llamado-miguel2": [22],
		"/comics/el-sueno-de-un-barco-llamado-miguel3": [23],
		"/comics/el-sueno-de-un-barco-llamado-miguel": [20],
		"/comics/la-laguna-encantada1": [25],
		"/comics/la-laguna-encantada2": [26],
		"/comics/la-laguna-encantada": [24],
		"/comics/la-mariposa-samira1": [28],
		"/comics/la-mariposa-samira": [27],
		"/comics/leo-el-tiburon-gato1": [30],
		"/comics/leo-el-tiburon-gato2": [31],
		"/comics/leo-el-tiburon-gato3": [32],
		"/comics/leo-el-tiburon-gato4": [33],
		"/comics/leo-el-tiburon-gato": [29],
		"/comics/yeyo-el-guarumo1": [35],
		"/comics/yeyo-el-guarumo2": [36],
		"/comics/yeyo-el-guarumo": [34],
		"/contactenos": [37],
		"/cuentacuentos": [38],
		"/mision-vision": [39],
		"/objetivos": [40],
		"/quienes-somos": [41],
		"/resultados": [42]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';