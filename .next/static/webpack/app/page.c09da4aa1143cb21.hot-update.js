"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));\nfunction Home() {\n    _s();\n    const images = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imgs = [\n        \"galaxy1.avif\",\n        \"galaxy2.jpg\",\n        \"galaxy3.jpeg\",\n        \"galaxy4.jpeg\",\n        \"galaxy5.jpeg\",\n        \"galaxy6.jpg\",\n        \"galaxy7.avif\",\n        \"galaxy8.jpeg\",\n        \"galaxy9.avif\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const tl = gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n            scrollTrigger: {\n                trigger: \".\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper)),\n                pin: true,\n                scrub: 1,\n                start: \"top top\"\n            }\n        });\n        tl.to(\".\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().img)), {\n            scale: 1\n        }, 0);\n        tl.to(\".\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().items)), {\n            scale: 1,\n            rotate: 0\n        }, 0);\n        tl.to(\".\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay)), {\n            height: \"100%\"\n        }, .2);\n        tl.to(\".\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().h1)), {\n            scale: 1\n        }, 0.6);\n        tl.to(\".\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().items)), {\n            scale: .8,\n            opacity: .2\n        }, 0.6);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: images,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().items),\n                children: imgs.map((img, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().img),\n                            src: img\n                        }, void 0, false, {\n                            fileName: \"/Users/uzielmoralesmedina/Documents/tripIA/src/app/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/uzielmoralesmedina/Documents/tripIA/src/app/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/uzielmoralesmedina/Documents/tripIA/src/app/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().overlay),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().h1),\n                    children: \"AWESOME\"\n                }, void 0, false, {\n                    fileName: \"/Users/uzielmoralesmedina/Documents/tripIA/src/app/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/uzielmoralesmedina/Documents/tripIA/src/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/uzielmoralesmedina/Documents/tripIA/src/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nAKAuGJ3/d6gcXOWUDk8hKRnxBs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDZjtBQUM0QjtBQUNWO0FBRTFDQyw0Q0FBSUEsQ0FBQ0ksY0FBYyxDQUFDSCxnRUFBYUE7QUFFbEIsU0FBU0k7O0lBQ3RCLE1BQU1DLFNBQVNKLDZDQUFNQSxDQUFtQjtJQUN4QyxNQUFNSyxPQUFPO1FBQUM7UUFBZ0I7UUFBZTtRQUFnQjtRQUFnQjtRQUFnQjtRQUFlO1FBQWU7UUFBZTtLQUFlO0lBRXpKSixnREFBU0EsQ0FBQztRQUNSLE1BQU1LLEtBQUtSLDRDQUFJQSxDQUFDUyxRQUFRLENBQUM7WUFDdkJDLGVBQWU7Z0JBQ2JDLFNBQVMsSUFBbUIsT0FBZlosaUVBQWM7Z0JBQzNCYyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQQyxPQUFPO1lBRVQ7UUFDRjtRQUVBUCxHQUFHUSxFQUFFLENBQUMsSUFBZSxPQUFYakIsNkRBQVUsR0FBSTtZQUFFbUIsT0FBTztRQUFFLEdBQUc7UUFDdENWLEdBQUdRLEVBQUUsQ0FBQyxJQUFpQixPQUFiakIsK0RBQVksR0FBSTtZQUFFbUIsT0FBTztZQUFHRSxRQUFRO1FBQUUsR0FBRztRQUNuRFosR0FBR1EsRUFBRSxDQUFDLElBQW1CLE9BQWZqQixpRUFBYyxHQUFJO1lBQUV1QixRQUFRO1FBQU0sR0FBRztRQUMvQ2QsR0FBR1EsRUFBRSxDQUFDLElBQWMsT0FBVmpCLDREQUFTLEdBQUk7WUFBRW1CLE9BQU87UUFBRSxHQUFHO1FBQ3JDVixHQUFHUSxFQUFFLENBQUMsSUFBaUIsT0FBYmpCLCtEQUFZLEdBQUk7WUFBRW1CLE9BQU87WUFBSU0sU0FBUztRQUFHLEdBQUc7SUFDeEQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVczQixpRUFBYzs7MEJBQzVCLDhEQUFDMEI7Z0JBQUlFLEtBQUtyQjtnQkFBUW9CLFdBQVczQiwrREFBWTswQkFDdENRLEtBQUtxQixHQUFHLENBQUMsQ0FBQ1gsS0FBS1ksa0JBQ2QsOERBQUNKO3dCQUFJQyxXQUFXM0IsOERBQVc7a0NBQ3pCLDRFQUFDa0I7NEJBQUlTLFdBQVczQiw2REFBVTs0QkFBRWdDLEtBQUtkOzs7Ozs7dUJBRERZOzs7Ozs7Ozs7OzBCQUt0Qyw4REFBQ0o7Z0JBQUlDLFdBQVczQixpRUFBYzswQkFDNUIsNEVBQUN3QjtvQkFBR0csV0FBVzNCLDREQUFTOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQztHQXBDd0JNO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcyc7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gJ2dzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgaW1hZ2VzID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBpbWdzID0gW1wiZ2FsYXh5MS5hdmlmXCIsIFwiZ2FsYXh5Mi5qcGdcIiwgXCJnYWxheHkzLmpwZWdcIiwgXCJnYWxheHk0LmpwZWdcIiwgXCJnYWxheHk1LmpwZWdcIiwgXCJnYWxheHk2LmpwZ1wiLCBcImdhbGF4eTcuYXZpZlwiLFwiZ2FsYXh5OC5qcGVnXCIsXCJnYWxheHk5LmF2aWZcIl07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBgLiR7c3R5bGVzLndyYXBwZXJ9YCxcbiAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRsLnRvKGAuJHtzdHlsZXMuaW1nfWAsIHsgc2NhbGU6IDEgfSwgMCk7XG4gICAgdGwudG8oYC4ke3N0eWxlcy5pdGVtc31gLCB7IHNjYWxlOiAxLCByb3RhdGU6IDAgfSwgMCk7XG4gICAgdGwudG8oYC4ke3N0eWxlcy5vdmVybGF5fWAsIHsgaGVpZ2h0OiBcIjEwMCVcIn0sIC4yKTtcbiAgICB0bC50byhgLiR7c3R5bGVzLmgxfWAsIHsgc2NhbGU6IDEgfSwgMC42KTtcbiAgICB0bC50byhgLiR7c3R5bGVzLml0ZW1zfWAsIHsgc2NhbGU6IC44LCBvcGFjaXR5OiAuMiB9LCAwLjYpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiByZWY9e2ltYWdlc30gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbXN9PlxuICAgICAgICB7aW1ncy5tYXAoKGltZywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0ga2V5PXtpfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e2ltZ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oMX0+QVdFU09NRTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInVzZVJlZiIsInVzZUVmZmVjdCIsInJlZ2lzdGVyUGx1Z2luIiwiSG9tZSIsImltYWdlcyIsImltZ3MiLCJ0bCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJ3cmFwcGVyIiwicGluIiwic2NydWIiLCJzdGFydCIsInRvIiwiaW1nIiwic2NhbGUiLCJpdGVtcyIsInJvdGF0ZSIsIm92ZXJsYXkiLCJoZWlnaHQiLCJoMSIsIm9wYWNpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJtYXAiLCJpIiwiaXRlbSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});