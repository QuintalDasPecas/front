(function (w, r) {
    w[r] = w[r] || function () {
        (w[r].q = w[r].q || []).push(arguments)
    }
})(window, 'melidata');
(function (d, u) {
if (!document.getElementById("MelidataIframe")) {
    var i = d.createElement('iframe');
    (i.frameElement || i).style.cssText = "width: 0; height: 0; border: 0; position: absolute";
    i.src = "about:srcdoc";
    i.srcdoc = "\<script\  src='" + u + "'>\</script\>";
i.id = "MelidataIframe";
var t = d.getElementsByTagName('script')[0];
t.parentNode.insertBefore(i, t);
var doc = i.contentWindow.document;
var script = doc.createElement('script');
script.type = 'text/javascript';
script.text ='window.inDapIF = true;';
doc.documentElement.appendChild(script);
} else {
// This page is charged async via AJAX and inserted into another one who has
// already download melidata js lib => Just clean the track
melidata("clean");
}
})(document,'https://http2.mlstatic.com/storage/melidata-js-sdk/js/3/0.3.48/melidata.min.js');

melidata("add", "id", "ba2efd59-2be6-4f56-a6dc-f27055f8174f");
melidata("add", "server_id", "ba2efd59-2be6-4f56-a6dc-f27055f8174f" );
melidata("add", "application", {"version":"1.60.0","server_hostname":"","server_poolname":"","app_name":"","sdk_version":{"node_version":"4.7.5"},"business":"mercadolibre","site_id":"MLB","secured":{"encrypted":"a1f5e5f72918885a98c868e47ef450d4:660f4677d8f72edb615601da9ee93fa482d38a8483877745a25facd93beeabeaa8a5dda8c00fd6e16ff21a234b6deaf6cc458008938bc389eb86f0beb2a255a0361a3f9cd3d94828b72762c22b82ac18cc00b23b196662cbd534bddf1938f826b36a085c61ae258fb8c09b0d0618c5acc682919f63b30944a741c6430f219487f37b852498530da09980","signature":"eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzOTE1NGY0ZC0zYzdkLTRiN2QtOGY2Mi00YWVjMjgyYjZiYjIiLCJzaXRlX2lkIjoiTUxCIiwicGxhdGZvcm0iOiIvd2ViL2Rlc2t0b3AifQ.uI27ChyBSXl6_95vl-g-AIjhdHoBASq-i6vEKeeJKvc"}});
melidata("add", "user", {"uid":"39154f4d-3c7d-4b7d-8f62-4aec282b6bb2","user_tags":[],"privacy_consents":{"advertising":true,"traceability":true}});
melidata("add", "device", {"platform":"/web/desktop","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"});
melidata("add", "platform", {"http":{"cookies":{"LAST_SEARCH":"retrovisor f800","_d2id":"39154f4d-3c7d-4b7d-8f62-4aec282b6bb2","_fbp":"fb.2.1678829606445.1232900881"},"headers":{"host":"www.mercadolivre.com.br","x-request-id":"e4bd34b6-6dea-4502-8d07-d72e207b2653","x-platform":"ml","x-d2id":"39154f4d-3c7d-4b7d-8f62-4aec282b6bb2","x-device-js":"true"},"http_url":"/"}});
melidata("add", "experiments", {"melidata/homesDummyWeb":2487,"frontend/assetsCdnDomainMLB":"DEFAULT","display/third-party-script":"20977","advertising/mainslider-switch-on-viewability":"15729","homes/new-widgets":"16030","advertising/homeAdsProvider":"12818","advertising/homePlacementContentProvider":"12046","search/no-interest-experiment":"15656"});
melidata("add", "experiments_timestamp", "2023-05-16T18:25:39.47GMT");
melidata("add", "event_data", {"realestates":[{"main_slider":[{"audience":"all","bu":"3","bu_line":"26","component_id":"main_slider_web_ml_0","content_id":"MS_O_MELHOR_DO_ELETRO_15_05","flow":"-1","logic":"user_journey","position":0},{"audience":"all","bu":"9","bu_line":"36","component_id":"main_slider_web_ml_1","content_id":"MS_LOYALTY_SORETEIO_16_05","flow":"-1","logic":"user_journey","position":1},{"audience":"all","bu":"3","bu_line":"26","component_id":"main_slider_web_ml_2","content_id":"MS_FESTIVAL_DE_CASA_CONSTRUCAO_16_05","flow":"-1","logic":"user_journey","position":2},{"audience":"all","bu":"3","bu_line":"26","component_id":"main_slider_web_ml_3","content_id":"MS_B_E_H__BELEZA_1_16_05","flow":"-1","logic":"user_journey","position":3},{"audience":"all","bu":"3","bu_line":"26","component_id":"main_slider_web_ml_4","content_id":"MS_LOJAS_OFICIAIS_3_16_05","flow":"-1","logic":"user_journey","position":4},{"audience":"all","bu":"3","bu_line":"26","component_id":"main_slider_web_ml_5","content_id":"MS_CE_SUPER_CONECTADO_16_05","flow":"-1","logic":"user_journey","position":5},{"audience":"all","bu":"3","bu_line":"26","component_id":"main_slider_web_ml_6","content_id":"MS_OFERTAS_AO_TECH_ELETRO_16_05","flow":"-1","logic":"user_journey","position":6}]},{"collections":[{"audience":"all","bu":"3","bu_line":"26","component_id":"collections_web_ml_0","content_id":"CL_APPAREL_CBT_16_05","flow":"-1","logic":"user_journey","position":0}]},{"discovery":[{"audience":"all","bu":"3","bu_line":"26","component_id":"discovery_web_ml_0","content_id":"DS_OFERTAS_TECH_E_ELETRO_16_05","flow":"-1","logic":"user_journey","position":0},{"audience":"all","bu":"3","bu_line":"26","component_id":"discovery_web_ml_1","content_id":"DS_CE_TUDO_DE_INFO_16_05","flow":"-1","logic":"user_journey","position":1},{"audience":"all","bu":"3","bu_line":"26","component_id":"discovery_web_ml_2","content_id":"DS_VIS_GM_CHEVROLET_15_05","flow":"-1","logic":"user_journey","position":2},{"audience":"all","bu":"3","bu_line":"26","component_id":"discovery_web_ml_3","content_id":"DS_B_E_H_SUPLEMENTOS_16_05","flow":"-1","logic":"user_journey","position":3}]}]});
melidata("send", "view", {
path: "/home",
data: {}
}, "melidata");