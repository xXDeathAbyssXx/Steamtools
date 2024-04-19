import * as universal from '../entries/pages/resultados/_page.ts.js';

export const index = 42;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resultados/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/resultados/+page.ts";
export const imports = ["_app/immutable/nodes/42.beaaf7b2.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js"];
export const stylesheets = ["_app/immutable/assets/42.7258d150.css"];
export const fonts = [];
