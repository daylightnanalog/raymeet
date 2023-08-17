"use strict";
(() => {
var exports = {};
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 522:
/***/ ((module) => {

module.exports = require("livekit-server-sdk");

/***/ }),

/***/ 897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handleServerUrl)
});

// EXTERNAL MODULE: external "livekit-server-sdk"
var external_livekit_server_sdk_ = __webpack_require__(522);
;// CONCATENATED MODULE: ./lib/server-utils.ts

function getRoomClient() {
    checkKeys();
    return new RoomServiceClient(getLiveKitURL());
}
function getLiveKitURL(region) {
    let targetKey = "LIVEKIT_URL";
    if (region && !Array.isArray(region)) {
        targetKey = `LIVEKIT_URL_${region}`.toUpperCase();
    }
    const url = process.env[targetKey];
    if (!url) {
        throw new Error(`${targetKey} is not defined`);
    }
    return url;
}
function checkKeys() {
    if (typeof process.env.LIVEKIT_API_KEY === "undefined") {
        throw new Error("LIVEKIT_API_KEY is not defined");
    }
    if (typeof process.env.LIVEKIT_API_SECRET === "undefined") {
        throw new Error("LIVEKIT_API_SECRET is not defined");
    }
}

;// CONCATENATED MODULE: ./pages/api/url.ts

async function handleServerUrl(req, res) {
    try {
        const { region  } = req.query;
        if (Array.isArray(region)) {
            throw Error("provide max one region string");
        }
        const url = getLiveKitURL(region);
        res.status(200).json({
            url
        });
    } catch (e) {
        res.statusMessage = e.message;
        res.status(500).end();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(897));
module.exports = __webpack_exports__;

})();