import { c as create_ssr_component, a as add_attribute, b as add_styles } from "./ssr.js";
const CanvasDraw_svelte_svelte_type_style_lang = "";
const css = {
  code: ".canva-custom{border:1px solid #ced4da;border-radius:0.375rem;touch-action:none}",
  map: null
};
const CanvasDraw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 350 } = $$props;
  let { height = 300 } = $$props;
  let { color = "#333" } = $$props;
  let { background = "#fff" } = $$props;
  let canvas;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  $$result.css.add(css);
  return ` <canvas class="canva-custom"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_styles({ background })}${add_attribute("this", canvas, 0)}></canvas>`;
});
export {
  CanvasDraw as C
};
