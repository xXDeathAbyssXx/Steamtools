import * as universal from '../entries/pages/cuentacuentos/_page.ts.js';

export const index = 38;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cuentacuentos/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/cuentacuentos/+page.ts";
export const imports = ["_app/immutable/nodes/38.631004b9.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js"];
export const stylesheets = ["_app/immutable/assets/38.81eea137.css"];
export const fonts = [];
