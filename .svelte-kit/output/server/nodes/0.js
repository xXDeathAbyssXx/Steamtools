

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.3b95e041.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js","_app/immutable/chunks/stores.4266d116.js","_app/immutable/chunks/singletons.eff3c856.js"];
export const stylesheets = ["_app/immutable/assets/0.3df49acf.css"];
export const fonts = [];
