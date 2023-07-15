import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="row"><form class="row justify-content-lg-center g-4"><div class="row g-2 justify-content-lg-center"><div class="col-lg-6"><label for="inputName" class="form-label">Nome</label><input type="text" class="form-control" id="inputName" name="name"></div></div><div class="row g-2 justify-content-lg-center"><div class="col-lg-6"><label for="inputEmail" class="form-label">E-mail</label><input type="email" class="form-control" id="inputEmail" name="email"></div></div><div class="row g-2 justify-content-lg-center"><div class="col-lg-6"><label for="inputPassword" class="form-label">Senha</label><input type="password" class="form-control" id="inputPassword" name="password"></div></div><div class="row g-2 justify-content-lg-center"><div class="col-lg-6"><label for="inputRepeatPassword" class="form-label">Repetir Senha</label><input type="password" class="form-control" id="inputRepeatPassword" name="repeatPassword"></div></div><div class="row g-3 justify-content-lg-center"><div class="col-lg-3 col-md-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/",
    class: "btn btn-secondary btn-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Voltar`);
      } else {
        return [
          createTextVNode("Voltar")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-3 col-md-6"><button type="button" class="btn btn-success btn-lg" style="${ssrRenderStyle({ "float": "right" })}" id="btnConfirmar">Confirmar</button></div></div></form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormRegister.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FormRegister = __nuxt_component_0;
  _push(ssrRenderComponent(_component_FormRegister, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-41848b4c.mjs.map
