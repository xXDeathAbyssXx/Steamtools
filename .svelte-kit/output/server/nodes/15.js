import * as universal from '../entries/pages/comics/_page.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/comics/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/comics/+page.ts";
export const imports = ["_app/immutable/nodes/15.c34767ba.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js","_app/immutable/chunks/ActionIcons.b851d4a0.js","_app/immutable/chunks/SmuiElement.8de96fe0.js"];
export const stylesheets = ["_app/immutable/assets/15.6bafbe8c.css"];
export const fonts = [];
