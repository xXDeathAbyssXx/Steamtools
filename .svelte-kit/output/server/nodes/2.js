import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.e73d2a53.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js","_app/immutable/chunks/Button.a18ca28e.js","_app/immutable/chunks/SmuiElement.8de96fe0.js","_app/immutable/chunks/Ripple.14da015d.js"];
export const stylesheets = ["_app/immutable/assets/2.6a96ecf4.css"];
export const fonts = [];
