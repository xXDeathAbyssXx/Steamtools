

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4be01fdb.js","_app/immutable/chunks/scheduler.648f142a.js","_app/immutable/chunks/index.ae413033.js","_app/immutable/chunks/stores.4266d116.js","_app/immutable/chunks/singletons.eff3c856.js"];
export const stylesheets = [];
export const fonts = [];
