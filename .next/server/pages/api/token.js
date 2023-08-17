"use strict";
(() => {
var exports = {};
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 522:
/***/ ((module) => {

module.exports = require("livekit-server-sdk");

/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleToken)
/* harmony export */ });
/* harmony import */ var livekit_server_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(522);
/* harmony import */ var livekit_server_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(livekit_server_sdk__WEBPACK_IMPORTED_MODULE_0__);

const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;
const createToken = (userInfo, grant)=>{
    const at = new livekit_server_sdk__WEBPACK_IMPORTED_MODULE_0__.AccessToken(apiKey, apiSecret, userInfo);
    at.ttl = "5m";
    at.addGrant(grant);
    return at.toJwt();
};
const roomPattern = /\w{4}\-\w{4}/;
async function handleToken(req, res) {
    try {
        const { roomName , identity , name , metadata  } = req.query;
        if (typeof identity !== "string" || typeof roomName !== "string") {
            res.status(403).end();
            return;
        }
        if (Array.isArray(name)) {
            throw Error("provide max one name");
        }
        if (Array.isArray(metadata)) {
            throw Error("provide max one metadata string");
        }
        // enforce room name to be xxxx-xxxx
        // this is simple & naive way to prevent user from guessing room names
        // please use your own authentication mechanisms in your own app
        if (!roomName.match(roomPattern)) {
            res.status(400).end();
            return;
        }
        // if (!userSession.isAuthenticated) {
        //   res.status(403).end();
        //   return;
        // }
        const grant = {
            room: roomName,
            roomJoin: true,
            canPublish: true,
            canPublishData: true,
            canSubscribe: true
        };
        const token = createToken({
            identity,
            name,
            metadata
        }, grant);
        const result = {
            identity,
            accessToken: token
        };
        res.status(200).json(result);
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
var __webpack_exports__ = (__webpack_exec__(156));
module.exports = __webpack_exports__;

})();