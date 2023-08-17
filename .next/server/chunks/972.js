exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 815:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "Debug_overlay__6m2KJ",
	"detailsSection": "Debug_detailsSection__L267_"
};


/***/ }),

/***/ 972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ DebugMode)
/* harmony export */ });
/* unused harmony export useDebugMode */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _livekit_components_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(402);
/* harmony import */ var livekit_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(694);
/* harmony import */ var tinykeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var tinykeys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinykeys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Debug_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(815);
/* harmony import */ var _styles_Debug_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Debug_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_livekit_components_react__WEBPACK_IMPORTED_MODULE_2__, livekit_client__WEBPACK_IMPORTED_MODULE_3__]);
([_livekit_components_react__WEBPACK_IMPORTED_MODULE_2__, livekit_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useDebugMode = ({ logLevel  })=>{
    (0,livekit_client__WEBPACK_IMPORTED_MODULE_3__.setLogLevel)(logLevel ?? "debug");
    const room = (0,_livekit_components_react__WEBPACK_IMPORTED_MODULE_2__.useRoomContext)();
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        // @ts-expect-error
        window.__lk_room = room;
        return ()=>{
            // @ts-expect-error
            window.__lk_room = undefined;
        };
    }, []);
};
const DebugMode = ({ logLevel  })=>{
    const room = (0,_livekit_components_react__WEBPACK_IMPORTED_MODULE_2__.useRoomContext)();
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [, setRender] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
    useDebugMode({
        logLevel
    });
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (window) {
            const unsubscribe = (0,tinykeys__WEBPACK_IMPORTED_MODULE_4__.tinykeys)(window, {
                "Shift+D": ()=>{
                    console.log("setting open");
                    setIsOpen((open)=>!open);
                }
            });
            // timer to re-render
            const interval = setInterval(()=>{
                setRender({});
            }, 1000);
            return ()=>{
                unsubscribe();
                clearInterval(interval);
            };
        }
    }, [
        isOpen
    ]);
    if (true) {
        return null;
    }
    const handleSimulate = (event)=>{
        const { value  } = event.target;
        if (value == "") {
            return;
        }
        event.target.value = "";
        let isReconnect = false;
        switch(value){
            case "signal-reconnect":
                isReconnect = true;
            // fall through
            default:
                // @ts-expect-error
                room.simulateScenario(value);
        }
    };
    const lp = room.localParticipant;
    if (!isOpen) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Debug_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    id: "room-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        children: [
                            "Room Info ",
                            room.name,
                            ": ",
                            room.sid
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                    open: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                children: [
                                    "Local Participant: ",
                                    lp.identity
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                            open: true,
                            className: (_styles_Debug_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailsSection),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Published tracks"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: Array.from(lp.tracks.values()).map((t)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                                                        children: [
                                                            t.source.toString(),
                                                            "\xa0",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: t.trackSid
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Kind"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                        children: [
                                                                            t.kind,
                                                                            "\xa0",
                                                                            t.kind === "video" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                children: [
                                                                                    t.track?.dimensions?.width,
                                                                                    "x",
                                                                                    t.track?.dimensions?.height
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Bitrate"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                        children: [
                                                                            Math.ceil(t.track.currentBitrate / 1000),
                                                                            " kbps"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                            open: true,
                            className: (_styles_Debug_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailsSection),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Permissions"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: lp.permissions && Object.entries(lp.permissions).map(([key, val])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: key
                                                            }),
                                                            key !== "canPublishSources" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: val.toString()
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                children: [
                                                                    " ",
                                                                    val.join(", "),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }))
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "Remote Participants"
                            })
                        }),
                        Array.from(room.participants.values()).map((p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                                className: (_styles_Debug_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailsSection),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                            children: [
                                                p.identity,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: Array.from(p.tracks.values()).map((t)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                                                            children: [
                                                                t.source.toString(),
                                                                "\xa0",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: t.trackSid
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: "Kind"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                            children: [
                                                                                t.kind,
                                                                                "\xa0",
                                                                                t.kind === "video" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    children: [
                                                                                        t.dimensions?.width,
                                                                                        "x",
                                                                                        t.dimensions?.height
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: "Status"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: trackStatus(t)
                                                                        })
                                                                    ]
                                                                }),
                                                                t.track && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: "Bitrate"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                            children: [
                                                                                Math.ceil(t.track.currentBitrate / 1000),
                                                                                " kbps"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            }, p.sid))
                    ]
                })
            ]
        });
    }
};
function trackStatus(t) {
    if (t.isSubscribed) {
        return t.isEnabled ? "enabled" : "disabled";
    } else {
        return "unsubscribed";
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;