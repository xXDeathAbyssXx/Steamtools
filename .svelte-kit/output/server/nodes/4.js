import * as universal from '../entries/pages/comicas/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/comicas/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/comicas/+page.ts";
export const imports = ["_app/immutable/nodes/4.753b6a2c.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js","_app/immutable/chunks/ActionIcons.b851d4a0.js","_app/immutable/chunks/SmuiElement.8de96fe0.js","_app/immutable/chunks/Ripple.14da015d.js"];
export const stylesheets = ["_app/immutable/assets/4.7de546a0.css"];
export const fonts = [];
