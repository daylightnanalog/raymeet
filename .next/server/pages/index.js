(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"tabContainer": "Home_tabContainer__3WHKZ",
	"tabSelect": "Home_tabSelect__HqI3i",
	"tabContent": "Home_tabContent__RLkmC"
};


/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);




function Tabs(props) {
    const activeIndex = props.selectedIndex ?? 0;
    if (!props.children) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    let tabs = react__WEBPACK_IMPORTED_MODULE_2___default().Children.map(props.children, (child, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "lk-button",
            onClick: ()=>{
                if (props.onTabSelected) props.onTabSelected(index);
            },
            "aria-pressed": activeIndex === index,
            children: child?.props.label
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabSelect),
                children: tabs
            }),
            props.children[activeIndex]
        ]
    });
}
function DemoMeetingTab({ label  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const startMeeting = ()=>{
        router.push(`/rooms/${generateRoomId()}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabContent),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    marginTop: 0
                },
                children: "Try LiveKit Meet for free with our live demo project."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "lk-button",
                onClick: startMeeting,
                children: "Start Meeting"
            })
        ]
    });
}
function CustomConnectionTab({ label  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const onSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const serverUrl = formData.get("serverUrl");
        const token = formData.get("token");
        router.push(`/custom/?liveKitUrl=${serverUrl}&token=${token}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabContent),
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    marginTop: 0
                },
                children: "Connect LiveKit Meet with a custom server using LiveKit Cloud or LiveKit Server."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "serverUrl",
                name: "serverUrl",
                type: "url",
                placeholder: "LiveKit Server URL: wss://*.livekit.cloud",
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: "token",
                name: "token",
                placeholder: "Token",
                required: true,
                rows: 9,
                style: {
                    padding: "1px 2px",
                    fontSize: "inherit",
                    lineHeight: "inherit"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                style: {
                    width: "100%",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    marginBlock: "1rem"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                style: {
                    paddingInline: "1.25rem",
                    width: "100%"
                },
                className: "lk-button",
                type: "submit",
                children: "Connect"
            })
        ]
    });
}
const getServerSideProps = async ({ query , res ,  })=>{
    res.setHeader("Cache-Control", "public, max-age=7200");
    const tabIndex = query.tab === "custom" ? 1 : 0;
    return {
        props: {
            tabIndex
        }
    };
};
const Home = ({ tabIndex  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    function onTabSelected(index) {
        const tab = index === 1 ? "custom" : "demo";
        router.push({
            query: {
                tab
            }
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
                "data-lk-theme": "default",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/images/livekit-meet-home.svg",
                                alt: "LiveKit Meet",
                                width: "360",
                                height: "45"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    "Open source video conferencing app built on",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://github.com/livekit/components-js?ref=meet",
                                        rel: "noopener",
                                        children: "LiveKit\xa0Components"
                                    }),
                                    ",",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://livekit.io/cloud?ref=meet",
                                        rel: "noopener",
                                        children: "LiveKit\xa0Cloud"
                                    }),
                                    " ",
                                    "and Next.js."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
                        selectedIndex: tabIndex,
                        onTabSelected: onTabSelected,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DemoMeetingTab, {
                                label: "Demo"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomConnectionTab, {
                                label: "Custom"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                "data-lk-theme": "default",
                children: [
                    "Hosted on",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://livekit.io/cloud?ref=meet",
                        rel: "noopener",
                        children: "LiveKit Cloud"
                    }),
                    ". Source code on",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://github.com/livekit/meet?ref=meet",
                        rel: "noopener",
                        children: "GitHub"
                    }),
                    "."
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
function generateRoomId() {
    return `${randomString(4)}-${randomString(4)}`;
}
function randomString(length) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(75));
module.exports = __webpack_exports__;

})();