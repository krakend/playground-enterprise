(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[634],{

/***/ 1079:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgChevronLeft = function SvgChevronLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m14.998 17.998-5.8-5.528a.667.667 0 0 1 0-.944l5.8-5.528"
  })));
};
/* harmony default export */ __webpack_exports__.Z = (SvgChevronLeft);

/***/ }),

/***/ 7384:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var _g;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "copy_svg__h-6 copy_svg__w-6 copy_svg__inline",
    viewBox: "0 0 24 24"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 .13h24v24H0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16.2 7.538v-.91a1.2 1.2 0 0 0-.351-.849L13.55 3.482a1.2 1.2 0 0 0-.848-.352H6.2A1.2 1.2 0 0 0 5 4.33v11.2a1.2 1.2 0 0 0 1.2 1.2h2.397",
    opacity: 0.7
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M19.8 19.93a1.2 1.2 0 0 1-1.2 1.2H9.8a1.2 1.2 0 0 1-1.2-1.2V8.73a1.2 1.2 0 0 1 1.2-1.2h6.504a1.2 1.2 0 0 1 .848.352l2.297 2.297a1.2 1.2 0 0 1 .351.848z"
  })))));
};
/* harmony default export */ __webpack_exports__.Z = (SvgCopy);

/***/ }),

/***/ 6973:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/use-cases/user-creditcard",
      function () {
        return __webpack_require__(8689);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 8689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1644);
/* harmony import */ var _components_MdxLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6654);



const MDXLayout = function MDXPage(param) {
    let { children } = param;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MdxLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: children
    });
};
function _createMdxContent(props) {
    const _components = {
        a: "a",
        code: "code",
        h2: "h2",
        p: "p",
        pre: "pre",
        ...(0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(),
        ...props.components
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
                children: "Endpoint"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "/user/creditcard\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
                children: "Content manipulation with regular expressions"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "This endpoint calls a backend that returns user information, from which we want to retrieve only the ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: "credit_card"
                    }),
                    " field. Instead of returning the credit card number, the plugin replaces the numbers to show only the last 4 digits."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The regexp used in this example is ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: '"find": "^.*(\\\\d{4})"'
                    }),
                    " and we replace the captured group with ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: "XXXX-${1}"
                    }),
                    ", so a string like ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: "1234-56789-1234-5678"
                    }),
                    " becomes ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: "XXXX-5678"
                    }),
                    ".\nThis is a ridiculous, non-real-life example to illustrate the replacement."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "See the replaced credit card here:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "http://localhost:8080/user/creditcard",
                    children: "http://localhost:8080/user/creditcard"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "See the original credit card number here:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "http://localhost:8080/fake-api/user/1.json",
                    children: "http://localhost:8080/fake-api/user/1.json"
                })
            })
        ]
    });
}
function MDXContent() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
        ...props,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
            ...props
        })
    });
}


/***/ }),

/***/ 6691:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    },
    isThenable: function() {
        return isThenable;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function isThenable(value) {
    // TODO: We don't gain anything from this abstraction. It's unsound, and only
    // makes sense in the specific places where we use it. So it's better to keep
    // the type coercion inline, instead of leaking this to other places in
    // the codebase.
    return value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 4318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(8364);
const basePath = (/* unused pure expression or super */ null && ("/demo" || 0));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 6541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _interop_require_wildcard = __webpack_require__(1757);
const _jsxruntime = __webpack_require__(5893);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(7294));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(3935));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7828));
const _getimgprops = __webpack_require__(7367);
const _imageconfig = __webpack_require__(7903);
const _imageconfigcontextsharedruntime = __webpack_require__(4938);
const _warnonce = __webpack_require__(1997);
const _routercontextsharedruntime = __webpack_require__(9953);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6663));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/demo/_next/image/","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};
if (false) {}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            sizesInput,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        // See https://github.com/facebook/react/pull/26940
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.priority ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 9577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _jsxruntime = __webpack_require__(5893);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7294));
const _resolvehref = __webpack_require__(1401);
const _islocalurl = __webpack_require__(2045);
const _formaturl = __webpack_require__(7420);
const _utils = __webpack_require__(7201);
const _addlocale = __webpack_require__(1443);
const _routercontextsharedruntime = __webpack_require__(9953);
const _approutercontextsharedruntime = __webpack_require__(5320);
const _useintersection = __webpack_require__(2905);
const _getdomainlocale = __webpack_require__(4318);
const _addbasepath = __webpack_require__(953);
const _routerreducertypes = __webpack_require__(6691);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (false) {}
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const doPrefetch = async ()=>{
        if (isAppRouter) {
            // note that `appRouter.prefetch()` is currently sync,
            // so we have to wrap this call in an async function to be able to catch() errors below.
            return router.prefetch(href, appOptions);
        } else {
            return router.prefetch(href, as, options);
        }
    };
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    doPrefetch().catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * A React component that extends the HTML `<a>` element to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation between routes.
 *
 * It is the primary way to navigate between routes in Next.js.
 *
 * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const pagesRouter = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    const appRouter = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart:  false ? 0 : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children: children
    });
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(7294);
const _requestidlecallback = __webpack_require__(3815);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 7367:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(1997);
const _imageblursvg = __webpack_require__(9919);
const _imageconfig = __webpack_require__(7903);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    if (typeof defaultLoader === "undefined") {
        throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 9919:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 5666:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _getimgprops = __webpack_require__(7367);
const _imagecomponent = __webpack_require__(6541);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6663));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/demo/_next/image/","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 6663:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 343:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _image_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1079);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7294);




/**
 * CtaRouteBack component that displays a button to navigate back to the previous page.
 *
 * @param {string} [wrapperClassname] - Optional additional class names for the wrapper div.
 * @returns {JSX.Element} The rendered CtaRouteBack component.
 */ function CtaRouteBack(param) {
    let { wrapperClassname = "" } = param;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    /**
   * Handles the click event on the back button.
   * Navigates back to the previous page.
   */ const handleBack = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        router.back();
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex".concat(wrapperClassname ? " ".concat(wrapperClassname) : ""),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: handleBack,
            className: "button--primary flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_image_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: "size-6"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: "text-base",
                    children: "Go back"
                })
            ]
        })
    });
}
/* harmony default export */ __webpack_exports__.Z = (CtaRouteBack);


/***/ }),

/***/ 5022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Cta_DemoCta; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./public/demo/images/background/illustration-top.png
/* harmony default export */ var illustration_top = ({"src":"/demo/_next/static/media/illustration-top.b94e0ea1.png","height":1029,"width":1380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAR0lEQVR42jWJQQqAMBADoxa11orQg3j2/18czFK6YQmTEc35eHncSRI3F5VCdg5m0Vy2xsQSw8rOGc44SaLYboTrR6b6B+oHOzQoZf7uIr4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Cta/DemoCta.tsx




/**
 * DemoCta component that displays a call-to-action section with a background image,
 * heading, description, and a link to the support page.
 *
 * @returns {JSX.Element} The rendered DemoCta component.
 */ function DemoCta() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "section--xl",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container--boxed",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative px-5 md:px-10 py-16 overflow-hidden bg-gradient--lavender text-center rounded-xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute hidden md:block left-0 top-0 pointer-events-none",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                            src: illustration_top,
                            alt: "",
                            width: 459,
                            height: 331
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-center heading--h2 text-white",
                        children: "Questions?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-white/65 heading--h3 mt-3 mb-8",
                        children: "If you have any questions, contact us"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "https://www.krakend.io/support/",
                        className: "button--primary",
                        children: "Ask Support"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ var Cta_DemoCta = (DemoCta);


/***/ }),

/***/ 6340:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./public/demo/images/icons/social/github.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgGithub = function SvgGithub(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "currentcolor",
    d: "M12 0c6.628 0 12 5.508 12 12.304 0 5.434-3.434 10.045-8.2 11.673-.608.121-.824-.263-.824-.59 0-.406.014-1.73.014-3.377 0-1.147-.384-1.896-.814-2.278 2.672-.304 5.48-1.345 5.48-6.07 0-1.344-.466-2.441-1.236-3.303.125-.31.536-1.562-.118-3.257 0 0-1.005-.33-3.296 1.262A11.3 11.3 0 0 0 12 5.95a11.3 11.3 0 0 0-3.004.414c-2.293-1.592-3.3-1.262-3.3-1.262-.652 1.695-.24 2.946-.117 3.257-.767.862-1.236 1.959-1.236 3.303 0 4.713 2.802 5.77 5.467 6.08-.343.307-.654.85-.762 1.645-.684.315-2.422.858-3.492-1.022 0 0-.635-1.182-1.84-1.269 0 0-1.17-.015-.081.748 0 0 .786.378 1.332 1.8 0 0 .704 2.196 4.043 1.452.006 1.028.016 1.998.016 2.29 0 .326-.22.706-.82.592C3.439 22.352 0 17.74 0 12.304 0 5.508 5.374 0 12 0"
  })));
};
/* harmony default export */ var github = (SvgGithub);
;// CONCATENATED MODULE: ./public/demo/images/icons/social/linkedin.svg
var linkedin_path;
function linkedin_extends() { return linkedin_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, linkedin_extends.apply(null, arguments); }

var SvgLinkedin = function SvgLinkedin(props) {
  return /*#__PURE__*/react.createElement("svg", linkedin_extends({
    viewBox: "0 0 16 16"
  }, props), linkedin_path || (linkedin_path = /*#__PURE__*/react.createElement("path", {
    fill: "currentcolor",
    d: "M14.222 0H1.778C.796 0 0 .796 0 1.778v12.444C0 15.204.796 16 1.778 16h12.444c.982 0 1.778-.796 1.778-1.778V1.778C16 .796 15.204 0 14.222 0M5.333 12.444H3.091V6.222h2.242zm-1.16-7.362c-.686 0-1.144-.457-1.144-1.067s.457-1.067 1.219-1.067c.685 0 1.143.457 1.143 1.067s-.457 1.067-1.219 1.067zm9.16 7.362h-2.17v-3.4c0-.94-.579-1.158-.796-1.158s-.94.145-.94 1.158v3.4H7.184V6.222h2.243v.869c.289-.507.867-.869 1.953-.869 1.085 0 1.953.869 1.953 2.822z"
  })));
};
/* harmony default export */ var linkedin = (SvgLinkedin);
;// CONCATENATED MODULE: ./public/demo/images/icons/social/medium.svg
var medium_path;
function medium_extends() { return medium_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, medium_extends.apply(null, arguments); }

var SvgMedium = function SvgMedium(props) {
  return /*#__PURE__*/react.createElement("svg", medium_extends({
    viewBox: "0 0 22 13"
  }, props), medium_path || (medium_path = /*#__PURE__*/react.createElement("path", {
    fill: "currentcolor",
    d: "M6.417 0A6.4 6.4 0 0 0 .86 3.25a6.57 6.57 0 0 0 0 6.5A6.4 6.4 0 0 0 6.417 13a6.4 6.4 0 0 0 5.557-3.25 6.57 6.57 0 0 0 0-6.5A6.4 6.4 0 0 0 6.417 0M16.5.464c-1.519 0-2.75 2.703-2.75 6.036s1.231 6.036 2.75 6.036 2.75-2.703 2.75-6.036S18.019.464 16.5.464m4.583 1.393c-.506 0-.916 2.079-.916 4.643s.41 4.643.916 4.643c.507 0 .917-2.079.917-4.643s-.41-4.643-.917-4.643"
  })));
};
/* harmony default export */ var medium = (SvgMedium);
;// CONCATENATED MODULE: ./public/demo/images/icons/social/x.svg
var x_path;
function x_extends() { return x_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, x_extends.apply(null, arguments); }

var SvgX = function SvgX(props) {
  return /*#__PURE__*/react.createElement("svg", x_extends({
    viewBox: "0 0 17 16"
  }, props), x_path || (x_path = /*#__PURE__*/react.createElement("path", {
    fill: "currentcolor",
    d: "m.121 0 6.266 8.727L0 16h2.414l5.053-5.77L11.609 16H17l-6.565-9.158L16.428 0h-2.377l-4.69 5.342L5.53 0z"
  })));
};
/* harmony default export */ var x = (SvgX);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container--boxed",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "border-t border-solid border-brand-neutral-500 border-opacity-40 py-10 md:py-4 flex items-center justify-between flex-col md:flex-row gap-6 md:gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-brand-neutral-300 text-sm",
                        children: [
                            "Copyright \xa9 2017 - ",
                            new Date().getFullYear(),
                            " KRAKEND S.L."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-row items-center gap-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://twitter.com/krakend_io",
                                className: "text-brand-neutral-300 hover:text-white transition-colors",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x, {
                                    className: "size-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://www.linkedin.com/company/krakend/",
                                className: "text-brand-neutral-300 hover:text-white transition-colors",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(linkedin, {
                                    className: "size-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://github.com/krakend/",
                                className: "text-brand-neutral-300 hover:text-white transition-colors",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(github, {
                                    className: "size-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://medium.com/krakend",
                                className: "text-brand-neutral-300 hover:text-white transition-colors",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(medium, {
                                    className: "size-4"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ var components_Footer = (Footer);

;// CONCATENATED MODULE: ./public/demo/images/icons/icon-external.svg
var _g;
function icon_external_extends() { return icon_external_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, icon_external_extends.apply(null, arguments); }

var SvgIconExternal = function SvgIconExternal(props) {
  return /*#__PURE__*/react.createElement("svg", icon_external_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 26"
  }, props), _g || (_g = /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 2h24v24H0z"
  }), /*#__PURE__*/react.createElement("g", {
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/react.createElement("path", {
    d: "m18.75 4.38-6.719 9.596m.995-8.496 5.724-1.1.924 5.754M17.622 15.301v7.417c0 1.26-.999 2.282-2.231 2.282H4.23C3 25 2 23.978 2 22.718v-11.41c0-1.26 1-2.282 2.232-2.282h6.137"
  })))));
};
/* harmony default export */ var icon_external = (SvgIconExternal);
;// CONCATENATED MODULE: ./public/demo/images/logos/logo-krakend-bw.svg
var logo_krakend_bw_g, _defs;
function logo_krakend_bw_extends() { return logo_krakend_bw_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, logo_krakend_bw_extends.apply(null, arguments); }

var SvgLogoKrakendBw = function SvgLogoKrakendBw(props) {
  return /*#__PURE__*/react.createElement("svg", logo_krakend_bw_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 157,
    height: 31,
    fill: "none",
    "aria-label": "KrakenD"
  }, props), logo_krakend_bw_g || (logo_krakend_bw_g = /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    clipPath: "url(#logo-krakend-bw_svg__a)"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M15.024.928c4.024 0 7.796 1.531 10.619 4.31 2.84 2.797 4.405 6.555 4.405 10.58 0 8.332-6.74 15.11-15.024 15.11-6.178 0-11.497-3.77-13.803-9.143l-.059-.13A15.2 15.2 0 0 1 0 15.818c0-4.025 1.565-7.783 4.405-10.58C7.23 2.46 11 .929 15.024.929zm1.051 4.44-.201.029-.017.002.01-.001.007-.001.203-.023-.21.024-.014.002-.02.003.244-.029c-4.6.48-6.644 3.863-6.628 7.002q.004.536.088 1.05a7.77 7.77 0 0 1 4.854-1.682c4.308 0 7.77 3.474 7.88 7.91.053 2.12-.676 4.023-2.108 5.5-1.628 1.68-3.992 2.644-6.694 2.743-.262.018-.52.023-.772.023-2.542 0-4.568-.502-6.168-1.221a13.64 13.64 0 0 0 8.495 2.96c7.588 0 13.762-6.21 13.762-13.841.001-1.26-.17-2.516-.51-3.73l-.132-.441-.161-.28c-3.09-5.176-8.104-6.501-11.908-5.999m-1.051-3.17c-3.692 0-7.15 1.402-9.736 3.948-2.596 2.556-4.025 5.991-4.025 9.672 0 1.941.4 3.79 1.12 5.469.42.855 3.04 5.482 10.624 5.36v-.012c2.551 0 4.772-.84 6.252-2.368 1.19-1.226 1.795-2.81 1.75-4.582a7 7 0 0 0-.102-1.05 7.77 7.77 0 0 1-4.84 1.67c-4.323 0-7.858-3.554-7.88-7.923-.022-4.318 3.063-7.678 7.531-8.245l-.076.011c2.636-.408 5.84-.023 8.722 1.727l.329.207-.204-.195c-2.554-2.382-5.9-3.689-9.465-3.689m-4.598 17.829a2.6 2.6 0 0 1 2.59 2.604 2.6 2.6 0 0 1-2.59 2.604 2.6 2.6 0 0 1-2.59-2.604 2.6 2.6 0 0 1 2.59-2.604m0 1.27c-.732 0-1.327.598-1.327 1.334 0 .735.596 1.334 1.327 1.334.732 0 1.327-.599 1.327-1.334s-.595-1.335-1.327-1.335zm-4.945-6.668a3.01 3.01 0 0 1 2.997 3.014 3.01 3.01 0 0 1-2.997 3.014 3.01 3.01 0 0 1-2.996-3.014 3.01 3.01 0 0 1 2.996-3.014m20.023.057a2.6 2.6 0 0 1 2.589 2.605 2.6 2.6 0 0 1-2.59 2.604 2.6 2.6 0 0 1-2.589-2.604 2.6 2.6 0 0 1 2.59-2.605M5.48 15.9a1.74 1.74 0 0 0-1.734 1.744c0 .961.778 1.744 1.734 1.744.957 0 1.735-.783 1.735-1.744 0-.962-.778-1.744-1.735-1.744m8.91-2.886a6.54 6.54 0 0 0-4.487 1.764c.968 2.49 3.37 4.258 6.163 4.258a6.53 6.53 0 0 0 4.469-1.746c-.977-2.525-3.349-4.276-6.145-4.276m11.113 2.943c-.732 0-1.327.598-1.327 1.334s.595 1.335 1.327 1.335c.731 0 1.327-.599 1.327-1.335s-.596-1.334-1.327-1.334m-3.276-8.049a3.01 3.01 0 0 1 2.997 3.014 3.01 3.01 0 0 1-2.997 3.014 3.01 3.01 0 0 1-2.997-3.014 3.01 3.01 0 0 1 2.997-3.014M5.445 8.67a2.285 2.285 0 0 1 2.276 2.29 2.285 2.285 0 0 1-2.276 2.287 2.285 2.285 0 0 1-2.276-2.288A2.285 2.285 0 0 1 5.445 8.67m16.783.508c-.956 0-1.734.783-1.734 1.744 0 .962.778 1.745 1.734 1.745s1.734-.783 1.734-1.745a1.74 1.74 0 0 0-1.734-1.744M5.445 9.94c-.559 0-1.013.457-1.013 1.02 0 .561.454 1.018 1.013 1.018s1.013-.457 1.013-1.019S6.004 9.94 5.445 9.94m10.293-3.424a2.285 2.285 0 0 1 2.275 2.289 2.285 2.285 0 0 1-2.275 2.288 2.285 2.285 0 0 1-2.276-2.288 2.285 2.285 0 0 1 2.276-2.289m0 1.27c-.56 0-1.014.456-1.014 1.018s.455 1.019 1.014 1.019 1.013-.457 1.013-1.019-.455-1.018-1.013-1.018m24.326.877 4.742-2.735v9.76l5.554-6.21h5.68l-6.366 6.719 6.583 10.35h-5.429l-4.368-6.975-1.654 1.784v5.19h-4.742zm17.221.814h4.743v3.44c.967-2.357 2.527-3.885 5.335-3.758v5.063h-.25c-3.15 0-5.085 1.943-5.085 6.019v6.305h-4.743zM67.3 21.642v-.064c0-3.726 2.777-5.445 6.74-5.445 1.685 0 2.901.286 4.087.7v-.286c0-2.006-1.217-3.12-3.588-3.12-1.81 0-3.09.35-4.618.923l-1.185-3.694c1.84-.828 3.65-1.37 6.49-1.37 2.589 0 4.461.701 5.647 1.911 1.248 1.274 1.81 3.153 1.81 5.445v9.904h-4.587V24.7c-1.155 1.306-2.746 2.166-5.055 2.166-3.15 0-5.74-1.848-5.74-5.223zm10.89-1.115v-.86c-.811-.382-1.873-.636-3.027-.636-2.028 0-3.276.828-3.276 2.356v.064c0 1.306 1.06 2.07 2.59 2.07 2.215 0 3.713-1.242 3.713-2.994m6.858-11.864 4.743-2.735v9.76l5.554-6.21h5.678l-6.365 6.719 6.584 10.35h-5.43l-4.368-6.975-1.653 1.784v5.19h-4.743z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M100.68 18.107v-.064c0-4.872 3.4-8.884 8.267-8.884 5.585 0 8.144 4.426 8.144 9.267 0 .382-.031.828-.063 1.273H105.39c.468 2.198 1.966 3.344 4.088 3.344 1.59 0 2.746-.51 4.056-1.75l2.714 2.45c-1.56 1.975-3.806 3.185-6.832 3.185-5.024 0-8.737-3.598-8.737-8.82zm11.793-1.432c-.28-2.166-1.529-3.63-3.526-3.63-1.966 0-3.244 1.432-3.619 3.63zm6.422-7.198h4.742v2.421c1.092-1.433 2.496-2.739 4.899-2.739 3.588 0 5.679 2.42 5.679 6.337v11.05h-4.743v-9.521c0-2.293-1.06-3.471-2.87-3.471s-2.965 1.178-2.965 3.47v9.522h-4.742zm22.868-3.549h3.511c6.491 0 10.976 4.315 10.976 9.943v.057c0 5.629-4.485 10-10.976 10h-8.054V9.899zm3.511 16.029c3.718 0 6.226-2.429 6.226-5.972v-.057c0-3.543-2.508-6.029-6.226-6.029h-3.51v12.058z"
  }))), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
    id: "logo-krakend-bw_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h157v31H0z"
  })))));
};
/* harmony default export */ var logo_krakend_bw = (SvgLogoKrakendBw);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx




const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container--boxed",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "relative py-4 lg:py-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-white flex items-center justify-between h-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "relative z-10",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(logo_krakend_bw, {})
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                            className: "flex items-center justify-end",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex gap-3 md:gap-6 items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "https://www.krakend.io/docs/",
                                            className: "font-medium text-base hover:underline flex items-end gap-2.5",
                                            target: "_blank",
                                            rel: "noopener",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "leading-none",
                                                    children: "Docs"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_external, {
                                                    width: 24,
                                                    height: 24
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "https://www.krakend.io",
                                            className: "font-medium text-base hover:underline flex items-end gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "leading-none",
                                                    children: "Website"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_external, {
                                                    width: 24,
                                                    height: 24
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ var components_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Layout.tsx



const Layout = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Header, {}),
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Footer, {})
        ]
    });
};
/* harmony default export */ var components_Layout = (Layout);


/***/ }),

/***/ 6654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ MdxLayout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/SEO.tsx
var SEO = __webpack_require__(5030);
;// CONCATENATED MODULE: ./public/demo/data/krakend.json
var krakend_namespaceObject = /*#__PURE__*/JSON.parse('{"Hv":[{"@comment":"Feature: Aggregation and basic transformation","endpoint":"/git/{user}","backend":[{"host":["https://api.github.com"],"url_pattern":"/users/{user}","allow":["avatar_url","name","company","blog","location","mail","hireable","followers","public_repos","public_gists"],"mapping":{"blog":"website"},"group":"user"},{"host":["https://api.github.com"],"url_pattern":"/users/{user}/repos","mapping":{"collection":"repos"},"is_collection":true}],"extra_config":{"documentation/openapi":{"summary":"Merges two calls from github and serves under a single endpoint","description":"This endpoint fetches in parallel the user information and the repository information from Githuib and returns it together. Non interesting fields are removed.","tags":["API composition"]}}},{"@comment":"EE only feature: Advanced transformation with query language","endpoint":"/cryptos/{currency}","output_encoding":"json-collection","backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency={currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson"}],"extra_config":{"modifier/jmespath":{"@comment":"Get first 5 crypto by market capitalization, then reverse sort them by name, finally filter and rename some fields","expr":"reverse(sort_by(collection[:5], &name))[*].{name: name, token: symbol,price: current_price, price_change: price_change_percentage_24h, market_cap: market_cap}"},"documentation/openapi":{"summary":"Get TOP 5 crypto capitalization & price data for a given currency","description":"This endpoint fetches some crypto capitalization data from Coingecko for a given currency.","tags":["Content Manipulation"]}}},{"@comment":"Feature: Regular expression manipulation","endpoint":"/user/creditcard","backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json","allow":["credit_card"],"extra_config":{"modifier/response-body":{"modifiers":[{"regexp":{"field":"credit_card.number","@comment":"Ridiculous card masking. Show last 4 digits and remove the rest. Credit card number is nested.","find":"^.*(\\\\d{4})","replace":"XXXX-${1}"}}]}}}],"extra_config":{"documentation/openapi":{"summary":"Mask the credit card number","description":"This endpoint fetches the user information and masks the credit card number","tags":["Content Manipulation"]}}},{"@comment":"Feature: Security policy engine for requests, responses and claim checking","endpoint":"/track-user","@test_with":"curl -iG -H\'Cookie: GDPR=yes\' \'http://localhost:8080/track-user\'","input_headers":["Cookie"],"backend":[{"host":["http://localhost:8080"],"url_pattern":"/__debug/cookie"}],"extra_config":{"security/policies":{"req":{"policies":["getCookie(\'GDPR\') == \'yes\'"],"error":{"body":"User did not accept the cookie and tracking is not allowed","status":403}}},"documentation/openapi":{"summary":"Tracks user activity when the GDPR cookie is accepted","description":"Example on how to abort a request based on a security policy. If the user does not have the GDPR cookie set to \'yes\', the request will be aborted.","tags":["Security Policies"]}}},{"@comment":"Feature: Two types of rate limiting on aggregated content","endpoint":"/shop","backend":[{"host":["http://fake_api"],"url_pattern":"/shop/campaigns.json","allow":["campaigns"]},{"host":["http://fake_api"],"url_pattern":"/shop/products.json","allow":["products"],"extra_config":{"qos/ratelimit/proxy":{"max_rate":1,"capacity":1}}}],"extra_config":{"qos/ratelimit/router":{"max_rate":2},"documentation/openapi":{"summary":"Aggregates campaigns and products from the shop using different ratelimits","description":"This endpoint fetches the campaigns and products from the shop. The campaigns are fetched without ratelimit, but the products are fetched with a rate limit of 1 request per second. The endpoint itself has a rate limit of 2 requests per second.","tags":["Throttling and Acceleration"]}}},{"@comment":"Feature: Backend cache","endpoint":"/market/cached","extra_config":{"documentation/openapi":{"summary":"Local cache for the crypto market information","description":"This endpoint caches the responses from the Coingecko API for the time returned in the Cache-Control header.","tags":["Throttling and Acceleration"]}},"backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson","mapping":{"collection":"coins"},"extra_config":{"qos/http-cache":{"shared":true}}}]},{"@comment":"Feature: GraphQL to REST","endpoint":"/starwars_films/{movie_id}","extra_config":{"documentation/openapi":{"summary":"Connect to a GraphQL server and fetch the film information","description":"This endpoint connects to a GraphQL server and offers the interaction as a regular REST endpoint.","tags":["Non-REST Connectivity"]}},"backend":[{"host":["https://swapi-graphql.netlify.app/"],"url_pattern":"/.netlify/functions/index","target":"data.film","extra_config":{"backend/graphql":{"type":"query","query":"query Query ($movie_id: ID!) {\\nfilm (filmID: $movie_id) {\\nid\\nepisodeID\\ntitle\\ndirector\\nreleaseDate\\nspeciesConnection {\\nspecies {\\nname\\nclassification\\nhomeworld {\\nname\\n}\\n}\\n}\\n}\\n}","variables":{"movie_id":"{movie_id}"}}}}]},{"@comment":"Feature: Concurrent calls - Initial example with no concurrent calls enabled (normal)","endpoint":"/market/simple","backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson","mapping":{"collection":"coins"}}],"extra_config":{"documentation/openapi":{"summary":"Simple fetch of external data without concurrent calls enabled","description":"This endpoint fetches crypto market information from Coingecko using a single non-concurrent call.","tags":["Throttling and Acceleration"]}}},{"@comment":"Feature: Concurrent calls - Example with concurrent calls enabled (more speed, less errors)","endpoint":"/market/concurrent","concurrent_calls":3,"backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson","mapping":{"collection":"coins"}}],"extra_config":{"documentation/openapi":{"summary":"Get crypto market information with 3 concurrent calls","description":"This endpoint fetches crypto market information from Coingecko using 3 concurrent calls. Returns the fastest successful response and discards the rest","tags":["Throttling and Acceleration"]}}},{"@comment":"Feature: Sequential calls, using values from 1st call response into 2nd call request","endpoint":"/sequential","extra_config":{"proxy":{"sequential":true},"documentation/openapi":{"summary":"Get crypto market information with 3 concurrent calls","description":"This endpoint fetches crypto market information from Coingecko using 3 concurrent calls. Returns the fastest successful response and discards the rest","tags":["API composition"]}},"backend":[{"host":["http://fake_api"],"url_pattern":"/hotels/1.json","allow":["destination_id"]},{"host":["http://fake_api"],"url_pattern":"/destinations/{resp0_destination_id}.json"}]},{"@comment":"Feature: A failing request from a non-existent backend","endpoint":"/fail","extra_config":{"documentation/openapi":{"summary":"Example of response with a failing backend","description":"This endpoint attempts to fetch data from a non-existent backend and returns the standard 500 status code","tags":["Error Handling"]}},"backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json","group":"user"},{"host":["http://fake_url_that_should_not_resolve.tld"],"url_pattern":"/","group":"none"}]},{"@comment":"Feature: Expose a GET REST endpoint from POST to SOAP service","endpoint":"/capital-of/{country}","extra_config":{"documentation/openapi":{"summary":"Interact with a SOAP server as a regular REST API","description":"This endpoint interacts with a SOAP server but offers a pure REST interface to the consumer","tags":["Non-REST Connectivity"]}},"backend":[{"host":["http://webservices.oorsprong.org"],"url_pattern":"/websamples.countryinfo/CountryInfoService.wso","encoding":"xml","method":"POST","target":"Envelope.Body.CapitalCityResponse","mapping":{"CapitalCityResult":"capital"},"deny":["-m"],"extra_config":{"backend/soap":{"@comment":"The XML template with variables is in the following path:","path":"./extended/templates/soap_request_capital_city.tmpl.xml"}}}]},{"@comment":"EE only feature: Wildcard to our fake API, open","endpoint":"/fake-api/*","backend":[{"host":["http://fake_api"],"url_pattern":"/"}],"extra_config":{"documentation/openapi":{"summary":"Calls to internal service with wildcard","description":"This endpoint will send all requests to a designed backend including everything after the /fake-api path","tags":["Routing"]}}},{"@comment":"EE only feature: Wildcard to our fake API, protected with Basic Auth","endpoint":"/fake-api-auth/*","@test_with":"curl -iG \'http://admin:admin@localhost:8080/fake-api-auth/articles.json\'","output_encoding":"no-op","backend":[{"host":["http://fake_api"],"url_pattern":"/"}],"extra_config":{"@comment":"The simple inclusion of the Auth Basic component enables it for this endpoint","auth/basic":{},"documentation/openapi":{"summary":"Calls to internal service with wildcard, adding auth","description":"This endpoint will send all requests to a designed backend including everything after the /fake-api-auth path, adding Basic Authentication","tags":["Routing"]}}},{"@comment":"EE only feature: Wildcard with geofencing - Allow visits only from Spain","endpoint":"/fake-api-geofence/*","input_headers":["X-Geoip"],"backend":[{"host":["http://fake_api"],"url_pattern":"/"}],"extra_config":{"validation/cel":[{"check_expr":"req_headers[\'X-Geoip\'][0].matches(\'\\"IsoCode\\":\\"ES\\"\')"}],"documentation/openapi":{"summary":"Calls to internal service with wildcard, using geofencing","description":"This endpoint will send all requests to a designed backend including everything after the /fake-api-geofence path, adding geofencing (allowing calls only from Spain)","tags":["Routing"]}}},{"@comment":"EE only feature: Dynamic routing based on headers (token claim and cookie also available)","endpoint":"/dynamic/header","extra_config":{"documentation/openapi":{"summary":"Calls to internal service with wildcard, using geofencing","description":"This endpoint will send all requests to a designed backend including everything after the /fake-api-geofence path, adding geofencing (allowing calls only from Spain)","tags":["Routing"]}},"backend":[{"@comment":"We will route to the backend using the content of the \'X-Route\' header","@test_with":"curl -iG -H \'X-Route: hello\' \'http://localhost:8080/dynamic/header\'","url_pattern":"/__debug/{input_headers.x-route}"}]},{"@comment":"EE only feature: Dynamic routing based on query strings","endpoint":"/dynamic/qs","extra_config":{"documentation/openapi":{"summary":"Route to the backend using the content of the \'X-Route\' header","description":"You can test this routing with the command curl -iG \'http://localhost:8080/dynamic/qs?route=hello\'","tags":["Routing"]}},"backend":[{"url_pattern":"/__debug/{input_query_strings.route}"}]},{"@comment":"Feature: A public endpoint that requires no authentication","endpoint":"/public","extra_config":{"documentation/openapi":{"summary":"Public endpoint","description":"This endpoint is public and requires no authentication","tags":["Authentication"]}},"backend":[{"host":["http://fake_api"],"url_pattern":"/hotels/1.json"}]},{"@comment":"Feature: Authorization based on JWT (using Auth0)","endpoint":"/private/auth0","backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json"}],"extra_config":{"auth/validator":{"alg":"RS256","audience":["http://api.example.com"],"roles_key":"http://api.example.com/custom/roles","roles":["user","admin"],"jwk_url":"https://albert-test.auth0.com/.well-known/jwks.json"},"documentation/openapi":{"summary":"Some information behind JWT authentication protection (Auth0)","description":"This endpoint uses JWT authentication with Auth0","tags":["Authentication"]}}},{"@comment":"Feature: Authorization based on JWT (using KrakenD JOSE signer)","endpoint":"/private/custom","backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json"}],"extra_config":{"auth/validator":{"alg":"HS256","audience":["http://api.example.com"],"roles_key":"roles","issuer":"https://krakend.io","roles":["role_a","role_c"],"jwk_local_path":"/opt/krakend/jwk-symmetric.json","disable_jwk_security":true},"documentation/openapi":{"summary":"Sign a token cryptographically (KrakenD JOSE signer)","description":"This endpoint uses the KrakenD JOSE signer to sign plain tokens coming from the backend and helpiong you to adopt cryptography easily","tags":["Authentication"]}}},{"@comment":"Feature: JWT signing, as described at https://www.krakend.io/docs/authorization/jwt-signing/","endpoint":"/token","backend":[{"host":["http://fake_api"],"url_pattern":"/token.json"}],"extra_config":{"documentation/openapi":{"description":"This endpoint uses JWT signing","summary":"Some information behind JWT signing","tags":["Authentication"]},"auth/signer":{"alg":"HS256","kid":"sim2","keys_to_sign":["access_token","refresh_token"],"jwk_local_path":"/opt/krakend/jwk-symmetric.json","disable_jwk_security":true}}},{"@comment":"EE only feature: Authorization based on API Keys","endpoint":"/api-key","backend":[{"url_pattern":"/__debug/admin","host":["http://localhost:8080"]}],"extra_config":{"auth/api-keys":{"roles":["admin"]},"documentation/openapi":{"summary":"Some information behind API-Keys authentication protection","description":"This endpoint uses API-Key authentication","tags":["Authentication"]}}},{"@comment":"Feature: Only POST method allowed","endpoint":"/post","method":"POST","backend":[{"url_pattern":"/__debug/post"}],"extra_config":{"documentation/openapi":{"summary":"Only POST method allowed","description":"This endpoint only allows POST requests","tags":["Routing"]}}},{"@comment":"Feature: Mocked response","endpoint":"/mocked-response","method":"GET","output_encoding":"json","backend":[{"host":["http://unexistent_backend"],"url_pattern":"/"}],"extra_config":{"proxy":{"static":{"data":{"an_integer":123,"an_array":["arr1","arr2"],"an_object":{"obj":"obj1"}},"strategy":"always"}},"documentation/openapi":{"summary":"Mocked response","description":"This endpoint returns a mocked response when the backend is not available","tags":["Content Manipulation"]}}},{"@comment":"EE only feature: GRPC","endpoint":"/travel","extra_config":{"documentation/openapi":{"summary":"Find flights, trains and hotels","description":"This endpoint fetches flights, trains and hotels information from different backends","tags":["Non-REST Connectivity"]}},"input_query_strings":["lat","lon"],"backend":[{"host":["grpc_flights:4242"],"group":"flights","url_pattern":"/flight_finder.Flights/FindFlight","extra_config":{"backend/grpc":{"input_mapping":{"lat":"where.latitude","lon":"where.longitude"}}}},{"host":["grpc_trains:4243"],"group":"trains","url_pattern":"/train_finder.Trains/FindTrains","extra_config":{"backend/grpc":{"input_mapping":{"lat":"origin.position.latitude","lon":"origin.position.longitude"},"response_naming_convention":"camelCase","output_enum_as_string":true,"output_timestamp_as_string":true,"output_duration_as_string":true,"client_tls":{"allow_insecure_connections":true}}}},{"group":"hotels","url_pattern":"/hotels/1.json"},{"host":["grpc_trains:4243"],"group":"trains_classes","url_pattern":"/train_finder.Trains/GetTrainClasses","extra_config":{"backend/grpc":{"response_naming_convention":"camelCase","output_remove_unset_values":true,"client_tls":{"allow_insecure_connections":true}}}}]},{"@comment":"EE only feature: GRPC Payload in Body","endpoint":"/travel_book_flight/{id_flight}/{main_passenger}","extra_config":{"documentation/openapi":{"summary":"Book a flight","description":"This endpoint books a flight using a GRPC backend","tags":["Non-REST Connectivity"]}},"method":"POST","backend":[{"host":["grpc_flights:4242"],"group":"flights","url_pattern":"/flight_finder.Flights/BookFlight","extra_config":{"backend/grpc":{"input_mapping":{"Id_flight":"flight_id","Main_passenger":"main_passenger.full_name"},"use_request_body":true}}}]},{"@comment":"EE only feature: WebSockets (chat example)","endpoint":"/chat/ws/{room}","input_query_strings":["*"],"input_headers":["*"],"backend":[{"url_pattern":"/ws/{room}","disable_host_sanitize":true,"host":["ws://chat:8888"]}],"extra_config":{"websocket":{"input_headers":["Cookie","Authorization"],"connect_event":true,"disconnect_event":true,"read_buffer_size":4096,"write_buffer_size":4096,"message_buffer_size":4096,"max_message_size":3200000,"write_wait":"10s","pong_wait":"60s","ping_period":"54s","max_retries":0,"backoff_strategy":"exponential"},"documentation/openapi":{"summary":"Chat room using WebSockets","description":"This endpoint connects to a chat server using WebSockets","tags":["Non-REST Connectivity"]}}},{"@comment":"EE only feature: WebSockets (chat example web interface)","endpoint":"/chat","extra_config":{"documentation/openapi":{"summary":"Chat room User Interface","description":"This endpoint offers a web interface to present a chat room","tags":["Non-REST Connectivity"]}},"output_encoding":"no-op","backend":[{"url_pattern":"/","host":["http://chat:8888"],"encoding":"no-op"}]},{"@comment":"EE only feature: Web Server - Static content","endpoint":"/demo/*","output_encoding":"no-op","backend":[{"url_pattern":"/","extra_config":{"backend/static-filesystem":{"directory_listing":false,"path":"./demo/"}},"host":["http://localhost:8080"],"encoding":"no-op"}],"extra_config":{"documentation/openapi":{"summary":"Serve static content","description":"This endpoint serves static content from the demo folder","tags":["Non-REST Connectivity"]}}}]}');
// EXTERNAL MODULE: ./public/demo/images/icons/copy.svg
var copy = __webpack_require__(7384);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/prismjs/prism.js
var prism = __webpack_require__(5660);
var prism_default = /*#__PURE__*/__webpack_require__.n(prism);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Cta/CtaRouteBack.tsx
var CtaRouteBack = __webpack_require__(343);
// EXTERNAL MODULE: ./src/components/Cta/DemoCta.tsx + 1 modules
var DemoCta = __webpack_require__(5022);
// EXTERNAL MODULE: ./src/components/Layout.tsx + 8 modules
var Layout = __webpack_require__(6340);
;// CONCATENATED MODULE: ./src/components/MdxLayout.tsx










__webpack_require__(4277);
function MdxLayout(param) {
    let { children } = param;
    var _currentUseCase_extra_config_documentationopenapi, _currentUseCase_extra_config, _currentUseCase_extra_config_documentationopenapi1, _currentUseCase_extra_config1;
    const router = (0,next_router.useRouter)();
    let pathname = router.asPath.replace(/\/$/, "");
    const useCaseSlug = pathname.replace("/use-cases/", "");
    const [isCopied, setIsCopied] = (0,react.useState)(false);
    const useCases = krakend_namespaceObject.Hv;
    const currentUseCase = useCases.find((useCase)=>{
        let [tag, name] = useCase["@comment"].split(":");
        let endpoint = useCase.endpoint;
        name = name.trim();
        tag = tag.trim();
        let slug = endpoint.toLowerCase().replace(/ /g, "-").replace(/_/g, "-").replace(/[^a-z0-9/-]/g, "").replace(/(?!^)\//g, "-").replace(/--+/g, "-").replace(/-$/g, "").replace("/", "");
        return slug === useCaseSlug;
    });
    const tag = currentUseCase === null || currentUseCase === void 0 ? void 0 : currentUseCase["@comment"].split(":")[0].trim();
    const name = currentUseCase === null || currentUseCase === void 0 ? void 0 : currentUseCase["@comment"].split(":")[1].trim();
    (0,react.useEffect)(()=>{
        prism_default().highlightAll();
    }, []);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(JSON.stringify(currentUseCase, null, 2)).then(()=>{
            setIsCopied(true);
            setTimeout(()=>setIsCopied(false), 1000);
        }).catch((err)=>console.error("Failed to copy!", err));
    };
    if (!currentUseCase) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
            children: "Use-Case not found"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SEO/* default */.Z, {
                title: "".concat(name, " | KrakenD Playground"),
                description: (currentUseCase === null || currentUseCase === void 0 ? void 0 : (_currentUseCase_extra_config = currentUseCase.extra_config) === null || _currentUseCase_extra_config === void 0 ? void 0 : (_currentUseCase_extra_config_documentationopenapi = _currentUseCase_extra_config["documentation/openapi"]) === null || _currentUseCase_extra_config_documentationopenapi === void 0 ? void 0 : _currentUseCase_extra_config_documentationopenapi.summary) || (currentUseCase === null || currentUseCase === void 0 ? void 0 : (_currentUseCase_extra_config1 = currentUseCase.extra_config) === null || _currentUseCase_extra_config1 === void 0 ? void 0 : (_currentUseCase_extra_config_documentationopenapi1 = _currentUseCase_extra_config1["documentation/openapi"]) === null || _currentUseCase_extra_config_documentationopenapi1 === void 0 ? void 0 : _currentUseCase_extra_config_documentationopenapi1.description)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: "section--sm",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container--boxed",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CtaRouteBack/* default */.Z, {
                            wrapperClassname: "mb-7"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text--lg text-brand-neutral-300 mb-2",
                                    children: tag
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "heading--h3 mb-5 text-white",
                                    children: name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row gap-12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "lg:w-1/2 overflow-auto",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text--lg text-white font-semibold mb-5",
                                                    children: "Endpoint Configuration"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("pre", {
                                                    className: "text-sm relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                            className: "absolute right-2 top-3 sm:right-6 sm:top-4 icon ".concat(isCopied ? "text-green-500" : "text-brand-neutral-200"),
                                                            onClick: handleCopy,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(copy/* default */.Z, {
                                                                width: 20,
                                                                height: 20
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                                            className: "language-json",
                                                            children: JSON.stringify(currentUseCase, null, 2)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "lg:w-1/2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "prose--mdx",
                                                children: children
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DemoCta/* default */.Z, {})
        ]
    });
}


/***/ }),

/***/ 5030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7294);




const siteConfig = {
    siteTitle: "KrakenD Playground",
    siteDescription: "This is a demonstration environment that puts together the necessary pieces to get you started with our API Gateway, using example use-cases.",
    siteLanguage: "en"
};
const SEO = (param)=>{
    let { title, description } = param;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const meta = {
        title: title || siteConfig.siteTitle,
        description: description
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                    children: meta.title
                }, "title"),
                meta.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                    name: "description",
                    content: meta.description
                })
            ]
        })
    });
};
/* harmony default export */ __webpack_exports__.Z = (SEO);


/***/ }),

/***/ 1644:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ useMDXComponents; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _image_icons_copy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7384);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);



const Pre = (param)=>{
    let { children, ...props } = param;
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const copyCodeHandler = ()=>{
        navigator.clipboard.writeText(children.props.children).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 1000);
        }).catch((err)=>console.error("Failed to copy!", err));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", {
                ...props,
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: copyCodeHandler,
                className: "absolute right-2 top-2 ".concat(copied ? "text-green-500" : "text-brand-neutral-200"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_image_icons_copy_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    width: 20,
                    height: 20
                })
            })
        ]
    });
};
function useMDXComponents(components) {
    return {
        pre: Pre,
        ...components
    };
}


/***/ }),

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(7828)


/***/ }),

/***/ 5675:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5666)


/***/ }),

/***/ 1664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(9577)


/***/ }),

/***/ 1163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(9090)


/***/ }),

/***/ 4277:
/***/ (function() {

// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:false|true)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};

Prism.languages.webmanifest = Prism.languages.json;


/***/ }),

/***/ 5660:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			if (!env.grammar) {
				throw new Error('The language "' + env.language + '" has no grammar.');
			}
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	/**
	 * Loads the given file.
	 *
	 * @param {string} src The URL or path of the source file to load.
	 * @param {(result: string) => void} success
	 * @param {(reason: string) => void} error
	 */
	function loadFile(src, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', src, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status < 400 && xhr.responseText) {
					success(xhr.responseText);
				} else {
					if (xhr.status >= 400) {
						error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
					} else {
						error(FAILURE_EMPTY_MESSAGE);
					}
				}
			}
		};
		xhr.send(null);
	}

	/**
	 * Parses the given range.
	 *
	 * This returns a range with inclusive ends.
	 *
	 * @param {string | null | undefined} range
	 * @returns {[number, number | undefined] | undefined}
	 */
	function parseRange(range) {
		var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
		if (m) {
			var start = Number(m[1]);
			var comma = m[2];
			var end = m[3];

			if (!comma) {
				return [start, start];
			}
			if (!end) {
				return [start, undefined];
			}
			return [start, Number(end)];
		}
		return undefined;
	}

	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			Prism.util.setLanguage(code, language);
			Prism.util.setLanguage(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			loadFile(
				src,
				function (text) {
					// mark as loaded
					pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

					// handle data-range
					var range = parseRange(pre.getAttribute('data-range'));
					if (range) {
						var lines = text.split(/\r\n?|\n/g);

						// the range is one-based and inclusive on both ends
						var start = range[0];
						var end = range[1] == null ? lines.length : range[1];

						if (start < 0) { start += lines.length; }
						start = Math.max(0, Math.min(start - 1, lines.length));
						if (end < 0) { end += lines.length; }
						end = Math.max(0, Math.min(end, lines.length));

						text = lines.slice(start, end).join('\n');

						// add data-start for line numbers
						if (!pre.hasAttribute('data-start')) {
							pre.setAttribute('data-start', String(start + 1));
						}
					}

					// highlight code
					code.textContent = text;
					Prism.highlightElement(code);
				},
				function (error) {
					// mark as failed
					pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

					code.textContent = error;
				}
			);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(6973); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);