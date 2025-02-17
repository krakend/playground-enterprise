(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[888],{

/***/ 6840:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(3893);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 1167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ useGeneralContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


const initialState = {
    currentTab: "use-cases",
    updateCurrentTabHandler: ()=>{}
};
const GeneralContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
const useGeneralContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GeneralContext);
const GeneralContextProvider = (param)=>{
    let { children } = param;
    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("use-cases");
    const updateCurrentTabHandler = (tab)=>{
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
/* harmony default export */ __webpack_exports__.Z = (GeneralContextProvider);


/***/ }),

/***/ 3893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4450);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GeneralContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1167);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9871);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);




function App(param) {
    let { Component, pageProps } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_GeneralContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 9871:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4450:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"style":{"fontFamily":"'__Inter_5e8dbd', '__Inter_Fallback_5e8dbd'","fontStyle":"normal"},"className":"__className_5e8dbd"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(6840), __webpack_exec__(9090));
/******/ _N_E = __webpack_exports__;
/******/ }
]);