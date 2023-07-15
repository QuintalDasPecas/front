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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="row justify-content-lg-center"><form class="row justify-content-lg-center g-4 col-lg-8"><div class="row g-2 justify-content-lg-center"><div class="col-lg-2 col-md-12 col-sm-12 col-12"><label for="inputCPF" class="form-label">CPF</label><input autocomplete="off" type="text" class="form-control" id="inputCPF" name="cpf"></div><div class="col-lg-8 col-md-12 col-sm-12 col-12"><label for="inputNome" class="form-label">Nome</label><input autocomplete="off" type="text" class="form-control" id="inputNome" name="name"></div><div class="col-lg-2 col-md-12 col-sm-12 col-12"><label for="inputBirthDate" class="form-label">Data Nasc.</label><input autocomplete="off" type="text" class="form-control" id="inputBirthDate" name="birthdate"></div></div><div class="row g-2 justify-content-lg-center"><div class="col-lg-2 col-md-12 col-sm-12 col-12"><label for="inputCEP" class="form-label">CEP</label><input autocomplete="off" type="text" class="form-control" id="inputCEP" name="cep"></div><div class="col-lg-8 col-md-12 col-sm-12 col-12"><label for="inputAddress" class="form-label">Endere\xE7o</label><input autocomplete="off" type="text" class="form-control" id="inputAddress" name="address"></div><div class="col-lg-2 col-md-12 col-sm-12 col-12"><label for="inputNumber" class="form-label">N\xFAmero</label><input autocomplete="off" type="text" class="form-control" id="inputNumber" name="number"></div></div><div class="row g-2 justify-content-lg-center"><div class="col-lg-6 col-md-12 col-sm-12 col-12"><label for="inputComplement" class="form-label">Complemento</label><input autocomplete="off" type="text" class="form-control" id="inputComplement"></div><div class="col-lg-6 col-md-12 col-sm-12 col-12"><label for="inputNeighborhood" class="form-label">Bairro</label><input autocomplete="off" type="text" class="form-control" id="inputNeighborhood" name="neighborhood"></div></div><div class="row g-2 justify-content-lg-center"><div class="col-lg-10 col-md-12 col-sm-12 col-12"><label for="inputCity" class="form-label">Cidade</label><input autocomplete="off" type="text" class="form-control" id="inputCity" name="city"></div><div class="col-lg-2 col-md-12 col-sm-12 col-12"><label for="inputUf" class="form-label">Estado</label><select class="form-select" aria-label="Default select example" id="selectUf" name="uf"><option selected></option><option value="1">SP</option><option value="2">MT</option><option value="3">SC</option></select></div></div><div class="row g-2 justify-content-lg-center"><div class="col-lg-6 col-6">`);
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
  _push(`</div><div class="col-lg-6 col-6"><button type="button" class="btn btn-success btn-lg" id="btnCofnirm" name="confirm" style="${ssrRenderStyle({ "float": "right" })}">Confirmar</button></div></div></form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormRegisterPf.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FormRegisterPf = __nuxt_component_0;
  _push(ssrRenderComponent(_component_FormRegisterPf, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/pf/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-fcbd8809.mjs.map
