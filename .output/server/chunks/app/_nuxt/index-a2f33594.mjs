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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><section data-testid="recommendations" class="recommendations" type="recommendations"><div class="container"><div class="row"><form class="row"><div class="row g-2 justify-content-md-center"><div class="col-lg-4 col-md-6 col-sm-8 col-4"><label for="inputEmail" class="form-label">E-mail</label><input type="text" class="form-control" id="inputEmail" name="email"></div></div><div class="row g-2 justify-content-md-center"><div class="col-lg-4 col-md-6 col-sm-8 col-4"><label for="inputPassword" class="form-label">Senha</label><input type="password" class="form-control" id="inputPassword" name="password" autocomplete="off"></div></div><div class="row g-2 justify-content-md-center"><div class="col-lg-2 col-md-3 col-sm-4 col-2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/",
    class: "btn btn-secondary btn-lg",
    id: "btnToGoBack",
    name: "togoback"
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
  _push(`</div><div class="col-lg-2 col-md-3 col-sm-4 col-2"><button type="submit" class="btn btn-success btn-lg" style="${ssrRenderStyle({ "float": "right" })}" id="btnConform" name="confirm">Confirmar</button></div></div><div class="row g-2 justify-content-md-center"><div class="col-lg-4 col-md-6 col-sm-8 col-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/recoverpassword",
    style: { "width": "100%" },
    class: "btn btn-warning btn-lg",
    id: "btnRecoverPassword",
    name: "recoverpassword"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Recuperar Senha`);
      } else {
        return [
          createTextVNode("Recuperar Senha")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="row g-2 justify-content-md-center"><div class="col-lg-4 col-md-6 col-sm-8 col-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/register",
    style: { "width": "100%" },
    class: "btn btn-primary btn-lg",
    id: "btnCreateAccount",
    name: "createaccounts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Criar conta`);
      } else {
        return [
          createTextVNode("Criar conta")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div></div></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FormLogin = __nuxt_component_0;
  _push(ssrRenderComponent(_component_FormLogin, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-a2f33594.mjs.map
