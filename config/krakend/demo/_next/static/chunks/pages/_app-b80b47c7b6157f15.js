(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[636],{

/***/ 92:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(5890);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 3876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   n: () => (/* binding */ useGeneralContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4232);


const initialState = {
    currentTab: "use-cases",
    updateCurrentTabHandler: ()=>{}
};
const GeneralContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
/**
 * Custom hook to access the GeneralContext.
 * @returns The context value containing the current tab and update function.
 */ const useGeneralContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GeneralContext);
/**
 * Provides the GeneralContext details children.
 *
 * @param children The components wrapped by this provider.
 * @returns A context provider component.
 */ const GeneralContextProvider = (param)=>{
    let { children } = param;
    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("use-cases");
    /**
   * Updates the currently active tab.
   * @param tab The new tab to set as active.
   */ const updateCurrentTabHandler = (tab)=>{
        setCurrentTab(tab);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GeneralContext.Provider, {
        value: {
            currentTab,
            updateCurrentTabHandler
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralContextProvider);


/***/ }),

/***/ 5686:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"style":{"fontFamily":"'Inter', 'Inter Fallback'","fontStyle":"normal"},"className":"__className_a9fbeb"};

/***/ }),

/***/ 5890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* harmony import */ var _context_GeneralContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3876);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7384);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5686);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);




function App(param) {
    let { Component, pageProps } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_GeneralContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 7384:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(92), __webpack_exec__(8253));
/******/ _N_E = __webpack_exports__;
/******/ }
]);