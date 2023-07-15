import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({
    role: "banner",
    "data-siteid": "MLB",
    class: "nav-header nav-header-plus ui-navigation-v2"
  }, _attrs))}><div class="nav-bounds nav-bounds-with-cart nav-bounds-with-cp"><div class="nav-header-plus-logo nav-area nav-top-area nav-left-area"></div><div class="nav-area nav-top-area nav-center-area"><form class="nav-search" action="/search" method="GET" role="search" style="${ssrRenderStyle({ "display": "inherit" })}"><label class="nav-header-visually-hidden" for="nav-search-input"> Digite o que voc\xEA quer encontrar </label><input type="text" class="nav-search-input" id="cb1-edit" aria-label="Digite o que voc\xEA quer encontrar" name="as_word" placeholder="Buscar produtos, marcas e muito mais\u2026" maxlength="120" autofocus="" autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" value="" aria-activedescendant="" aria-controls="cb1-list" aria-autocomplete="list" aria-expanded="false" role="combobox"><button type="submit" class="nav-search-btn"><div role="img" aria-label="Buscar" class="nav-icon-search"></div></button><div class="sb-suggestions" id="sb-suggestions-1" aria-hidden="true" style="${ssrRenderStyle({ "display": "none", "top": "40px", "width": "580px", "position": "absolute" })}"><ul class="sb-suggestions__list" role="listbox" id="cb1-list"></ul><div class="sb-suggestions__wrapper--additional"><ul class="sb-suggestions__list--additional"></ul></div></div></form></div><div class="nav-area nav-top-area nav-right-area"><nav id="nav-header-menu">`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span style="${ssrRenderStyle({ "font-size": "1.0rem" })}"${_scopeId}>Entre</span>`);
      } else {
        return [
          createVNode("span", { style: { "font-size": "1.0rem" } }, "Entre")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({
    role: "contentinfo",
    class: "nav-footer footer-custom"
  }, _attrs))}><div class="nav-footer-user-info nav-bounds"><div class="nav-footer-info-wrapper"><div class="nav-footer-primaryinfo"><small class="nav-footer-copyright"> Copyright \xA9 1999-2023 Quintal das pe\xE7as LTDA. </small><nav class="nav-footer-navigation"><ul class="nav-footer-navigation__menu"><li class="nav-footer-navigation__item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/termandconditions",
    class: "nav-footer-navigation__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Termos e condi\xE7\xF5es `);
      } else {
        return [
          createTextVNode(" Termos e condi\xE7\xF5es ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-footer-navigation__item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/privacy",
    class: "nav-footer-navigation__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Como cuidamos da sua privacidade `);
      } else {
        return [
          createTextVNode(" Como cuidamos da sua privacidade ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-footer-navigation__item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/contact",
    class: "nav-footer-navigation__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contato `);
      } else {
        return [
          createTextVNode(" Contato ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div><p class="nav-footer-secondaryinfo"> CNPJ n.\xBA 99.999.999/0001-99 / Av. das Avenidas, n\xBA 1.000, Bairro, Cidade/UF - CEP 99999-999. </p></div></div><a class="nav-footer-hp" href="#"> Quintal das pe\xE7as </a></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavHeader = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NavHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-50a4fbf4.mjs.map
