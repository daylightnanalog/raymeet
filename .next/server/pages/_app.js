"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                title: "LiveKit Meet | Conference app build with LiveKit Open Source",
                titleTemplate: "%s",
                defaultTitle: "LiveKit Meet | Conference app build with LiveKit open source",
                description: "LiveKit is an open source WebRTC project that gives you everything needed to build scalable and real-time audio and/or video experiences in your applications.",
                twitter: {
                    handle: "@livekitted",
                    site: "@livekitted",
                    cardType: "summary_large_image"
                },
                openGraph: {
                    url: "https://meet.livekit.io",
                    images: [
                        {
                            url: "https://meet.livekit.io/images/livekit-meet-open-graph.png",
                            width: 2000,
                            height: 1000,
                            type: "image/png"
                        }, 
                    ],
                    site_name: "LiveKit Meet"
                },
                additionalMetaTags: [
                    {
                        property: "theme-color",
                        content: "#070707"
                    }, 
                ],
                additionalLinkTags: [
                    {
                        rel: "icon",
                        href: "/favicon.ico"
                    },
                    {
                        rel: "apple-touch-icon",
                        href: "/images/livekit-apple-touch.png",
                        sizes: "180x180"
                    },
                    {
                        rel: "mask-icon",
                        href: "/images/livekit-safari-pinned-tab.svg",
                        color: "#070707"
                    }, 
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(759));
module.exports = __webpack_exports__;

})();