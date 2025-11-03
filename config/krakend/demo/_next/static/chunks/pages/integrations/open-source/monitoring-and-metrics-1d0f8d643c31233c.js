(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[555],{

/***/ 749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4232);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgChevronLeft);

/***/ }),

/***/ 1026:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useMergedRef", ({
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
}));
const _react = __webpack_require__(4232);
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map


/***/ }),

/***/ 1464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var _data_integrations_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9951);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4587);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9099);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Cta_CtaRouteBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6385);
/* harmony import */ var _Cta_DemoCta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4353);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1513);
/* harmony import */ var _SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8235);








const IntegrationHeader = (param)=>{
    let { name, title, iconUrl } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-3 mb-2",
                children: [
                    iconUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: iconUrl,
                        alt: "".concat(name, " logo"),
                        width: 30,
                        height: 30,
                        className: "object-contain"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "uppercase tracking-wider text-sm text-brand-neutral-300",
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "heading--h2 mb-10 text-white",
                children: title
            })
        ]
    });
};
const IntegrationContent = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "prose--mdx",
        style: {
            maxWidth: "none"
        },
        children: children
    });
};
/**
 * IntegrationLayout component wraps content with integration-specific data.
 *
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - The content to be displayed.
 * @returns {JSX.Element} The IntegrationLayout component.
 */ const IntegrationLayout = (param)=>{
    let { children } = param;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const pathname = router.asPath.replace(/\/$/, "");
    // Extract the slug from the pathname
    const slug = pathname.split("/").pop();
    // Find the integration data based on the slug
    const integration = _data_integrations_json__WEBPACK_IMPORTED_MODULE_1__/* .integrations */ .G.find((integration)=>integration.slug === slug);
    if (!integration) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: "Integration not found"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SEO__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                title: "".concat(integration.title, " | KrakenD Playground"),
                description: integration.description[0]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                className: "section--sm",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container--boxed",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cta_CtaRouteBack__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IntegrationHeader, {
                            name: integration.name,
                            title: integration.title,
                            iconUrl: integration.iconUrl
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IntegrationContent, {
                            children: children
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cta_DemoCta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegrationLayout);


/***/ }),

/***/ 1513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
;// ./public/demo/images/icons/social/github.svg
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
/* harmony default export */ const github = (SvgGithub);
;// ./public/demo/images/icons/social/linkedin.svg
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
/* harmony default export */ const linkedin = (SvgLinkedin);
;// ./public/demo/images/icons/social/medium.svg
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
/* harmony default export */ const medium = (SvgMedium);
;// ./public/demo/images/icons/social/x.svg
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
/* harmony default export */ const x = (SvgX);
;// ./src/components/Footer/index.tsx





const SocialLink = (param)=>{
    let { href, Icon } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
        href: href,
        className: "text-brand-neutral-300 hover:text-white transition-colors",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
            className: "size-4"
        })
    });
};
/**
 * Footer component with copyright information and social links.
 */ const Footer = ()=>{
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialLink, {
                                href: "https://twitter.com/krakend_io",
                                Icon: x
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialLink, {
                                href: "https://www.linkedin.com/company/krakend/",
                                Icon: linkedin
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialLink, {
                                href: "https://github.com/krakend/",
                                Icon: github
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SocialLink, {
                                href: "https://medium.com/krakend",
                                Icon: medium
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// ./public/demo/images/icons/icon-external.svg
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
/* harmony default export */ const icon_external = (SvgIconExternal);
;// ./public/demo/images/logos/logo-krakend-bw.svg
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
/* harmony default export */ const logo_krakend_bw = (SvgLogoKrakendBw);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(8230);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// ./src/components/Header/index.tsx




const NavLink = (param)=>{
    let { href, label, external } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
            href: href,
            className: "font-medium text-base hover:underline flex items-end gap-2.5",
            ...external ? {
                target: "_blank",
                rel: "noopener"
            } : {},
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "leading-none",
                    children: label
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_external, {
                    width: 24,
                    height: 24
                })
            ]
        })
    });
};
const Navigation = ()=>{
    const docsUrl =  false ? 0 : "https://www.krakend.io/docs/enterprise/";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        className: "flex items-center justify-end",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
            className: "flex gap-3 md:gap-6 items-center justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NavLink, {
                    href: docsUrl,
                    label: "Docs",
                    external: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NavLink, {
                    href: "https://www.krakend.io",
                    label: "Website"
                })
            ]
        })
    });
};
/**
 * Header component with navigation links.
 * Includes external links to the KrakenD docs and website.
 */ const Header = ()=>// skipcq: JS-0415
    /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigation, {})
                    ]
                })
            })
        })
    });
/* harmony default export */ const components_Header = (Header);

;// ./src/components/Layout.tsx



/**
 * Layout component that wraps the application with a header and footer.
 *
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - The content to be displayed between the header and footer.
 * @returns {JSX.Element} The Layout component.
 */ const Layout = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Header, {}),
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 1639:
/***/ ((module, exports, __webpack_require__) => {

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
const _interop_require_default = __webpack_require__(4252);
const _jsxruntime = __webpack_require__(7876);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4232));
const _resolvehref = __webpack_require__(6658);
const _islocalurl = __webpack_require__(1851);
const _formaturl = __webpack_require__(6225);
const _utils = __webpack_require__(8407);
const _addlocale = __webpack_require__(2696);
const _routercontextsharedruntime = __webpack_require__(8265);
const _useintersection = __webpack_require__(2343);
const _getdomainlocale = __webpack_require__(8940);
const _addbasepath = __webpack_require__(7469);
const _usemergedref = __webpack_require__(1026);
const prefetched = new Set();
function prefetch(router, href, as, options) {
    if (false) {}
    if (!(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== 'undefined' ? options.locale : 'locale' in router ? router.locale : undefined;
        const prefetchedKey = href + '%' + as + '%' + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    router.prefetch(href, as, options).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ('beforePopState' in router) {
            router[replace ? 'replace' : 'push'](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? 'replace' : 'push'](as || href, {
                scroll: routerScroll
            });
        }
    };
    navigate();
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
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
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    const prefetchEnabled = prefetchProp !== false;
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!router) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
        };
    }, [
        router,
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
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: '200px'
    });
    const setIntersectionWithResetRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
    }, [
        as,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
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
        });
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        router == null ? void 0 : router.locale,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            });
        },
        onTouchStart:  false ? 0 : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        const curLocale = typeof locale !== 'undefined' ? locale : router == null ? void 0 : router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children: children
    });
});
const _default = Link;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2343:
/***/ ((module, exports, __webpack_require__) => {

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
const _react = __webpack_require__(4232);
const _requestidlecallback = __webpack_require__(4754);
const hasIntersectionObserver = typeof IntersectionObserver === 'function';
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ''
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
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 2439:
/***/ ((module, exports, __webpack_require__) => {

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
const _interop_require_default = __webpack_require__(4252);
const _interop_require_wildcard = __webpack_require__(8365);
const _jsxruntime = __webpack_require__(7876);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(4232));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8477));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9836));
const _getimgprops = __webpack_require__(4915);
const _imageconfig = __webpack_require__(6904);
const _imageconfigcontextsharedruntime = __webpack_require__(72);
const _warnonce = __webpack_require__(546);
const _routercontextsharedruntime = __webpack_require__(8265);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(3829));
const _usemergedref = __webpack_require__(1026);
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/demo/_next/image/","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};
if (false) {}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img == null ? void 0 : img.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
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
    const ownRef = (0, _react.useCallback)((img)=>{
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
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
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
        "data-nimg": fill ? 'fill' : '1',
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
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
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
        as: 'image',
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
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        var _c_qualities;
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities
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
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 3380:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/integrations/open-source/monitoring-and-metrics",
      function () {
        return __webpack_require__(7292);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 3657:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
const _interop_require_default = __webpack_require__(4252);
const _getimgprops = __webpack_require__(4915);
const _imagecomponent = __webpack_require__(2439);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(3829));
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

/***/ 3829:
/***/ ((__unused_webpack_module, exports) => {

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
const DEFAULT_Q = 75;
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    var _config_qualities;
    if (false) {}
    const q = quality || ((_config_qualities = config.qualities) == null ? void 0 : _config_qualities.reduce((prev, cur)=>Math.abs(cur - DEFAULT_Q) < Math.abs(prev - DEFAULT_Q) ? cur : prev)) || DEFAULT_Q;
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + q + (src.startsWith('/_next/static/media/') && false ? 0 : '');
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 3923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var _image_icons_copy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4232);



/**
 * A wrapper component for rendering preformatted code blocks with a copy button to copy the code content to the clipboard.
 *
 * @param children The code block content to be displayed inside `<pre>`.
 * @param props Additional properties passed to the `<pre>` element.
 * @returns A styled `<pre>` element with a copy button.
 */ const Pre = (param)=>{
    let { children, ...props } = param;
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    /**
   * Copies the text content of a child component to the clipboard.
   * Sets a temporary copied state for user feedback.
   */ const copyCodeHandler = ()=>{
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
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_image_icons_copy_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
                    width: 20,
                    height: 20
                })
            })
        ]
    });
};
/**
 * Customizes the default MDX components by providing a custom component.
 * This function allows for extending or overriding MDX components dynamically.
 *
 * @param components The existing MDX components to extend.
 * @returns A new object with the custom `<pre>` component and any provided components.
 */ function useMDXComponents(components) {
    return {
        pre: Pre,
        ...components
    };
}


/***/ }),

/***/ 4353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Cta_DemoCta)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
;// ./public/demo/images/background/illustration-top.png
/* harmony default export */ const illustration_top = ({"src":"/demo/_next/static/media/illustration-top.b94e0ea1.png","height":1029,"width":1380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAACVBMVEX///////////+OSuX+AAAAA3RSTlMKARWDJ5SiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nCWIwREAAAxDIvsP3at4IRVIIy9tgKVi7ygHBUoAK69A5HIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4587);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(8230);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// ./src/components/Cta/DemoCta.tsx




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
/* harmony default export */ const Cta_DemoCta = (DemoCta);


/***/ }),

/***/ 4587:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3657)


/***/ }),

/***/ 4915:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
const _warnonce = __webpack_require__(546);
const _imageblursvg = __webpack_require__(5284);
const _imageconfig = __webpack_require__(6904);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    'lazy',
    'eager',
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
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
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
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
        kind: 'x'
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
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === 'w' ? w : i + 1) + kind).join(', '),
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
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        var _c_qualities;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
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
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
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
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
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
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || 'cover',
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
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
        loading: isLazy ? 'lazy' : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
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

/***/ 5284:
/***/ ((__unused_webpack_module, exports) => {

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
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 5403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4232);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCopy);

/***/ }),

/***/ 6385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var _image_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(749);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9099);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4232);




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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_image_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CtaRouteBack);


/***/ }),

/***/ 7292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3923);
/* harmony import */ var _components_IntegrationLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1464);



const MDXLayout = function MDXPage(param) {
    let { children } = param;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IntegrationLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        children: children
    });
};
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        p: "p",
        pre: "pre",
        ...(0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
        ...props.components
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
                children: "About this demo"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Grafana Monitoring shows the usage of KrakenD and reveals low-level metrics.\nUse ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: "admin"
                    }),
                    " as temporary user and password. And then go to ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: "Dashboards"
                    }),
                    " > ",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                        children: "Manage"
                    }),
                    " to see the KrakenD dashboard."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
                children: "Endpoint"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "http://localhost:4000\n"
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

/***/ 7328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9836)


/***/ }),

/***/ 8230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1639)


/***/ }),

/***/ 8235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7328);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4232);



const siteConfig = {
    siteTitle: "KrakenD Playground",
    siteDescription: "This is a demonstration environment that puts together the necessary pieces to get you started with our API Gateway, using example use-cases.",
    siteLanguage: "en"
};
/**
 * SEO component to manage the document's title and meta tags.
 *
 * @param title The page title, defaults to `siteConfig.siteTitle` if not provided.
 * @param description The meta description of the page.
 * @returns A `<Head>` component with dynamic title and meta description.
 */ const SEO = (param)=>{
    let { title, description } = param;
    const meta = {
        title: title || siteConfig.siteTitle,
        description
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                children: meta.title
            }, "title"),
            meta.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                name: "description",
                content: meta.description
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 8940:
/***/ ((module, exports, __webpack_require__) => {

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
const _normalizetrailingslash = __webpack_require__(7810);
const basePath = (/* unused pure expression or super */ null && ("/demo" || 0));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 9099:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8253)


/***/ }),

/***/ 9951:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"G":[{"name":"Jaeger","title":"Tracing Dashboard","description":["Jaeger collects traces and shows the complete funnel from user request to the impact in the backend"],"iconUrl":"/demo/demo/images/icons/jaegertracingio.svg","slug":"tracing-dashboard","license":["enterprise","open-source"]},{"name":"Kibana","title":"Logging","description":["Kibana stores KrakenD logs and allows analysis"],"iconUrl":"/demo/demo/images/icons/kibana.svg","slug":"logging","license":["open-source","enterprise"]},{"name":"Grafana","title":"Monitoring & metrics","description":["Grafana Monitoring shows the usage of KrakenD and reveals low-level metrics."],"iconUrl":"/demo/demo/images/icons/grafana.svg","slug":"monitoring-and-metrics","license":["open-source","enterprise"]},{"name":"OpenAPI","title":"Documentation","description":["Create automatically OpenAPI documentation with <code>krakend openapi export</code>, or create the gateway configuration from an existing OpenAPI file with <code>krakend openapi import</code>."],"command":"docker-compose exec krakend_ee krakend openapi export -c /etc/krakend/krakend.json -o /etc/krakend/demo/swagger.json","iconUrl":"/demo/demo/images/icons/openapis.svg","slug":"documentation","license":["enterprise"]},{"name":"Postman","title":"Postman","description":["Generate Postman collections to use the gateway endpoints with <code>krakend generate postman</code>"],"command":"docker-compose exec krakend_ee krakend generate postman -c /etc/krakend/krakend.json -o /etc/krakend/demo/postman.json","iconUrl":"/demo/demo/images/icons/postman.svg","slug":"postman","license":["enterprise"]},{"name":"Keycloak","title":"Keycloak","description":["Keycloak and many other identity providers can be integrated with KrakenD."],"iconUrl":"/demo/demo/images/icons/keyclock.svg","slug":"identity-providers","license":["open-source","enterprise"]}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [636], () => (__webpack_exec__(3380)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);