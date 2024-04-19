import { c as create_ssr_component, d as compute_rest_props, f as get_current_component, g as getContext, v as validate_component, m as missing_component, j as spread, k as escape_object, a as add_attribute, l as createEventDispatcher, b as add_styles } from "./ssr.js";
import { B as Button, C as CommonLabel } from "./Button.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement } from "./SmuiElement.js";
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "i" : void 0 } = $$props;
  const svg = component === Svg;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__icon": context === "button",
            "mdc-fab__icon": context === "fab",
            "mdc-icon-button__icon": context === "icon-button",
            "mdc-icon-button__icon--on": context === "icon-button" && on,
            "mdc-tab__icon": context === "tab",
            "mdc-banner__icon": context === "banner",
            "mdc-segmented-button__icon": context === "segmented-button"
          })
        },
        { "aria-hidden": "true" },
        svg ? { focusable: "false", tabindex: "-1" } : {},
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  if (console && console.warn) {
    console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  }
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const ColorPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let selectedColor = "#000000";
  return `  <input type="color"${add_attribute("value", selectedColor, 0)}>`;
});
const Palette_svelte_svelte_type_style_lang = "";
const css = {
  code: ".palett-icon-clear{overflow:visible !important}section.svelte-ybyaou.svelte-ybyaou{--size:2rem;display:flex;align-items:center;gap:0 1rem}section.svelte-ybyaou>div.svelte-ybyaou{flex-grow:1}section.svelte-ybyaou>svg.svelte-ybyaou{flex-shrink:0}div.svelte-ybyaou.svelte-ybyaou{display:flex;gap:0 0.5rem;align-items:center;overflow-x:auto}div.svelte-ybyaou.svelte-ybyaou::-webkit-scrollbar{height:0.25rem}div.svelte-ybyaou.svelte-ybyaou::-webkit-scrollbar-track{background:hsl(0, 0%, 100%)}div.svelte-ybyaou.svelte-ybyaou::-webkit-scrollbar-thumb{background:currentColor}button.svelte-ybyaou.svelte-ybyaou,section.svelte-ybyaou>svg.svelte-ybyaou{width:var(--size);height:var(--size)}.btn-palett{cursor:pointer;border-radius:50%;margin:0}section.svelte-ybyaou>svg.svelte-ybyaou{display:block}",
  map: null
};
let background = "#fff";
const Palette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { color } = $$props;
  let currentColor;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<section class="p-4 svelte-ybyaou"><div class="svelte-ybyaou">${validate_component(ColorPicker, "ColorPicker").$$render($$result, {}, {}, {})}</div> <button class="btn-palett svelte-ybyaou"${add_styles({ background })}></button> <svg class="palett-icon-clear svelte-ybyaou" viewBox="-50 -50 100 100"${add_styles({ "color": currentColor })}><g${add_attribute("fill", currentColor, 0)} stroke="#000" stroke-width="8" stroke-linecap="round"><path d="M -38 12 a 38 38 0 0 0 76 0 q 0 -28 -38 -62 -38 34 -38 62"></path></g></svg> ${validate_component(Button, "Button").$$render($$result, { variant: "raised" }, {}, {
    default: () => {
      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
        default: () => {
          return `download`;
        }
      })} ${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
        default: () => {
          return `Descargar`;
        }
      })}`;
    }
  })} </section>`;
});
export {
  Palette as P
};
