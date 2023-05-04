"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CarRace/index.js":
/*!*************************************!*\
  !*** ./components/CarRace/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarRace; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Winner */ \"./components/Winner/index.js\");\n/* harmony import */ var _CarRace_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarRace.styled */ \"./components/CarRace/CarRace.styled.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst finishLine = 200;\nfunction CarRace() {\n    _s();\n    const [cars, setCars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars);\n    function moveCar(clickedCar) {\n        const coveredDistance = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getRandomDistance)();\n        console.log(\"clickedCar\", clickedCar);\n        console.log(\"coveredDistance\", coveredDistance);\n        console.log(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars);\n    }\n    const winner = cars.find((car)=>car.position.x >= finishLine);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Winner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            winner: winner,\n            onRestart: ()=>setCars(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars)\n        }, void 0, false, {\n            fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.AllCarRoutes, {\n            finishLine: finishLine,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.DistanceHeadline, {\n                    children: \"Last Distance\"\n                }, void 0, false, {\n                    fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this),\n                cars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.Track, {\n                                finishLine: finishLine,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.CarButton, {\n                                    onClick: ()=>moveCar(car),\n                                    positionX: car.position.x,\n                                    lastDistance: car.position.lastDistance,\n                                    \"aria-label\": \"Move clicked car forward\",\n                                    children: car.emoji\n                                }, void 0, false, {\n                                    fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.Distance, {\n                                children: car.position.lastDistance\n                            }, void 0, false, {\n                                fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, car.emoji, true, {\n                        fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CarRace, \"KWUW6QF5k6PgVRuMkWJiqDuVI3k=\");\n_c = CarRace;\nvar _c;\n$RefreshReg$(_c, \"CarRace\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhclJhY2UvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDWjtBQU9MO0FBQ3lDO0FBRW5FLE1BQU1VLGFBQWE7QUFFSixTQUFTQyxVQUFVOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUNPLHFEQUFXQTtJQUU1QyxTQUFTTSxRQUFRQyxVQUFVLEVBQUU7UUFDM0IsTUFBTUMsa0JBQWtCUCwrREFBaUJBO1FBQ3pDUSxRQUFRQyxHQUFHLENBQUMsY0FBY0g7UUFDMUJFLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO1FBRS9CQyxRQUFRQyxHQUFHLENBQUNWLHFEQUFXQTtJQUN6QjtJQUVBLE1BQU1XLFNBQVNQLEtBQUtRLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxRQUFRLENBQUNDLENBQUMsSUFBSWI7SUFFcEQscUJBQ0U7a0JBQ0dTLHVCQUNDLDhEQUFDakIsK0NBQU1BO1lBQUNpQixRQUFRQTtZQUFRSyxXQUFXLElBQU1YLFFBQVFMLHFEQUFXQTs7Ozs7aUNBRTVELDhEQUFDSix5REFBWUE7WUFBQ00sWUFBWUE7OzhCQUN4Qiw4REFBQ0wsNkRBQWdCQTs4QkFBQzs7Ozs7O2dCQUNqQk8sS0FBS2EsR0FBRyxDQUFDLENBQUNKLG9CQUNULDhEQUFDckIsMkNBQVFBOzswQ0FDUCw4REFBQ08sa0RBQUtBO2dDQUFDRyxZQUFZQTswQ0FDakIsNEVBQUNQLHNEQUFTQTtvQ0FDUnVCLFNBQVMsSUFBTVosUUFBUU87b0NBQ3ZCTSxXQUFXTixJQUFJQyxRQUFRLENBQUNDLENBQUM7b0NBQ3pCSyxjQUFjUCxJQUFJQyxRQUFRLENBQUNNLFlBQVk7b0NBQ3ZDQyxjQUFhOzhDQUVaUixJQUFJUyxLQUFLOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ3hCLHFEQUFRQTswQ0FBRWUsSUFBSUMsUUFBUSxDQUFDTSxZQUFZOzs7Ozs7O3VCQVh2QlAsSUFBSVMsS0FBSzs7Ozs7Ozs7OztnQkFlN0I7O0FBR1AsQ0FBQztHQXZDdUJuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhclJhY2UvaW5kZXguanM/NTQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXaW5uZXIgZnJvbSBcIi4uL1dpbm5lclwiO1xuaW1wb3J0IHtcbiAgQ2FyQnV0dG9uLFxuICBBbGxDYXJSb3V0ZXMsXG4gIERpc3RhbmNlSGVhZGxpbmUsXG4gIERpc3RhbmNlLFxuICBUcmFjayxcbn0gZnJvbSBcIi4vQ2FyUmFjZS5zdHlsZWRcIjtcbmltcG9ydCB7IGluaXRpYWxDYXJzLCBnZXRSYW5kb21EaXN0YW5jZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xuXG5jb25zdCBmaW5pc2hMaW5lID0gMjAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJSYWNlKCkge1xuICBjb25zdCBbY2Fycywgc2V0Q2Fyc10gPSB1c2VTdGF0ZShpbml0aWFsQ2Fycyk7XG5cbiAgZnVuY3Rpb24gbW92ZUNhcihjbGlja2VkQ2FyKSB7XG4gICAgY29uc3QgY292ZXJlZERpc3RhbmNlID0gZ2V0UmFuZG9tRGlzdGFuY2UoKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRDYXJcIiwgY2xpY2tlZENhcik7XG4gICAgY29uc29sZS5sb2coXCJjb3ZlcmVkRGlzdGFuY2VcIiwgY292ZXJlZERpc3RhbmNlKTtcblxuICAgIGNvbnNvbGUubG9nKGluaXRpYWxDYXJzKTtcbiAgfVxuXG4gIGNvbnN0IHdpbm5lciA9IGNhcnMuZmluZCgoY2FyKSA9PiBjYXIucG9zaXRpb24ueCA+PSBmaW5pc2hMaW5lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7d2lubmVyID8gKFxuICAgICAgICA8V2lubmVyIHdpbm5lcj17d2lubmVyfSBvblJlc3RhcnQ9eygpID0+IHNldENhcnMoaW5pdGlhbENhcnMpfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEFsbENhclJvdXRlcyBmaW5pc2hMaW5lPXtmaW5pc2hMaW5lfT5cbiAgICAgICAgICA8RGlzdGFuY2VIZWFkbGluZT5MYXN0IERpc3RhbmNlPC9EaXN0YW5jZUhlYWRsaW5lPlxuICAgICAgICAgIHtjYXJzLm1hcCgoY2FyKSA9PiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtjYXIuZW1vaml9PlxuICAgICAgICAgICAgICA8VHJhY2sgZmluaXNoTGluZT17ZmluaXNoTGluZX0+XG4gICAgICAgICAgICAgICAgPENhckJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW92ZUNhcihjYXIpfVxuICAgICAgICAgICAgICAgICAgcG9zaXRpb25YPXtjYXIucG9zaXRpb24ueH1cbiAgICAgICAgICAgICAgICAgIGxhc3REaXN0YW5jZT17Y2FyLnBvc2l0aW9uLmxhc3REaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BNb3ZlIGNsaWNrZWQgY2FyIGZvcndhcmRgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXIuZW1vaml9XG4gICAgICAgICAgICAgICAgPC9DYXJCdXR0b24+XG4gICAgICAgICAgICAgIDwvVHJhY2s+XG4gICAgICAgICAgICAgIDxEaXN0YW5jZT57Y2FyLnBvc2l0aW9uLmxhc3REaXN0YW5jZX08L0Rpc3RhbmNlPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BbGxDYXJSb3V0ZXM+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlU3RhdGUiLCJXaW5uZXIiLCJDYXJCdXR0b24iLCJBbGxDYXJSb3V0ZXMiLCJEaXN0YW5jZUhlYWRsaW5lIiwiRGlzdGFuY2UiLCJUcmFjayIsImluaXRpYWxDYXJzIiwiZ2V0UmFuZG9tRGlzdGFuY2UiLCJmaW5pc2hMaW5lIiwiQ2FyUmFjZSIsImNhcnMiLCJzZXRDYXJzIiwibW92ZUNhciIsImNsaWNrZWRDYXIiLCJjb3ZlcmVkRGlzdGFuY2UiLCJjb25zb2xlIiwibG9nIiwid2lubmVyIiwiZmluZCIsImNhciIsInBvc2l0aW9uIiwieCIsIm9uUmVzdGFydCIsIm1hcCIsIm9uQ2xpY2siLCJwb3NpdGlvblgiLCJsYXN0RGlzdGFuY2UiLCJhcmlhLWxhYmVsIiwiZW1vamkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CarRace/index.js\n"));

/***/ })

});