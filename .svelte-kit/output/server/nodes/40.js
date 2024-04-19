import * as universal from '../entries/pages/objetivos/_page.ts.js';

export const index = 40;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/objetivos/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/objetivos/+page.ts";
export const imports = ["_app/immutable/nodes/40.f16d3e14.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js"];
export const stylesheets = ["_app/immutable/assets/40.f002d1c3.css"];
export const fonts = [];
