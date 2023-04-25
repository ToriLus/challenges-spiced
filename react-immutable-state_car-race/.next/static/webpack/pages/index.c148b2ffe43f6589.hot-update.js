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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarRace; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Winner */ \"./components/Winner/index.js\");\n/* harmony import */ var _CarRace_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarRace.styled */ \"./components/CarRace/CarRace.styled.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst finishLine = 200;\nfunction CarRace() {\n    _s();\n    const [cars, setCars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars);\n    function moveCar(clickedCar) {\n        const coveredDistance = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getRandomDistance)();\n        console.log(\"clickedCar\", clickedCar);\n        console.log(\"coveredDistance\", coveredDistance);\n        console.log(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars);\n        updateCars((event)=>{\n            const cars = event.find((car1)=>car1.emoji === clickedCar.emoji);\n            car.position.x = coveredDistance;\n        });\n    }\n    const winner = cars.find((car1)=>car1.position.x >= finishLine);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Winner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            winner: winner,\n            onRestart: ()=>setCars(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars)\n        }, void 0, false, {\n            fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.AllCarRoutes, {\n            finishLine: finishLine,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.DistanceHeadline, {\n                    children: \"Last Distance\"\n                }, void 0, false, {\n                    fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this),\n                cars.map((car1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.Track, {\n                                finishLine: finishLine,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.CarButton, {\n                                    onClick: ()=>moveCar(car1),\n                                    positionX: car1.position.x,\n                                    lastDistance: car1.position.lastDistance,\n                                    \"aria-label\": \"Move clicked car forward\",\n                                    children: car1.emoji\n                                }, void 0, false, {\n                                    fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.Distance, {\n                                children: car1.position.lastDistance\n                            }, void 0, false, {\n                                fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, car1.emoji, true, {\n                        fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tori/savory-folder/challenges/react-immutable-state_car-race/components/CarRace/index.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CarRace, \"KWUW6QF5k6PgVRuMkWJiqDuVI3k=\");\n_c = CarRace;\nvar _c;\n$RefreshReg$(_c, \"CarRace\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhclJhY2UvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDWjtBQU9MO0FBQ3lDO0FBQzlCO0FBRXJDLE1BQU1XLGFBQWE7QUFFSixTQUFTQyxVQUFVOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUNPLHFEQUFXQTtJQUU1QyxTQUFTTyxRQUFRQyxVQUFVLEVBQUU7UUFDM0IsTUFBTUMsa0JBQWtCUiwrREFBaUJBO1FBQ3pDUyxRQUFRQyxHQUFHLENBQUMsY0FBY0g7UUFDMUJFLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO1FBRS9CQyxRQUFRQyxHQUFHLENBQUNYLHFEQUFXQTtRQUV2QlksV0FBVyxDQUFDQyxRQUFVO1lBQ3BCLE1BQU1SLE9BQU9RLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxPQUFRQSxLQUFJQyxLQUFLLEtBQUtSLFdBQVdRLEtBQUs7WUFDL0RELElBQUlFLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHVDtRQUNuQjtJQUNGO0lBRUEsTUFBTVUsU0FBU2QsS0FBS1MsSUFBSSxDQUFDLENBQUNDLE9BQVFBLEtBQUlFLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJZjtJQUVwRCxxQkFDRTtrQkFDR2dCLHVCQUNDLDhEQUFDekIsK0NBQU1BO1lBQUN5QixRQUFRQTtZQUFRQyxXQUFXLElBQU1kLFFBQVFOLHFEQUFXQTs7Ozs7aUNBRTVELDhEQUFDSix5REFBWUE7WUFBQ08sWUFBWUE7OzhCQUN4Qiw4REFBQ04sNkRBQWdCQTs4QkFBQzs7Ozs7O2dCQUNqQlEsS0FBS2dCLEdBQUcsQ0FBQyxDQUFDTixxQkFDVCw4REFBQ3ZCLDJDQUFRQTs7MENBQ1AsOERBQUNPLGtEQUFLQTtnQ0FBQ0ksWUFBWUE7MENBQ2pCLDRFQUFDUixzREFBU0E7b0NBQ1IyQixTQUFTLElBQU1mLFFBQVFRO29DQUN2QlEsV0FBV1IsS0FBSUUsUUFBUSxDQUFDQyxDQUFDO29DQUN6Qk0sY0FBY1QsS0FBSUUsUUFBUSxDQUFDTyxZQUFZO29DQUN2Q0MsY0FBYTs4Q0FFWlYsS0FBSUMsS0FBSzs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNsQixxREFBUUE7MENBQUVpQixLQUFJRSxRQUFRLENBQUNPLFlBQVk7Ozs7Ozs7dUJBWHZCVCxLQUFJQyxLQUFLOzs7Ozs7Ozs7O2dCQWU3Qjs7QUFHUCxDQUFDO0dBNUN1Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJSYWNlL2luZGV4LmpzPzU0MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2lubmVyIGZyb20gXCIuLi9XaW5uZXJcIjtcbmltcG9ydCB7XG4gIENhckJ1dHRvbixcbiAgQWxsQ2FyUm91dGVzLFxuICBEaXN0YW5jZUhlYWRsaW5lLFxuICBEaXN0YW5jZSxcbiAgVHJhY2ssXG59IGZyb20gXCIuL0NhclJhY2Uuc3R5bGVkXCI7XG5pbXBvcnQgeyBpbml0aWFsQ2FycywgZ2V0UmFuZG9tRGlzdGFuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZUltbWVyIH0gZnJvbSBcInVzZS1pbW1lclwiO1xuXG5jb25zdCBmaW5pc2hMaW5lID0gMjAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJSYWNlKCkge1xuICBjb25zdCBbY2Fycywgc2V0Q2Fyc10gPSB1c2VTdGF0ZShpbml0aWFsQ2Fycyk7XG5cbiAgZnVuY3Rpb24gbW92ZUNhcihjbGlja2VkQ2FyKSB7XG4gICAgY29uc3QgY292ZXJlZERpc3RhbmNlID0gZ2V0UmFuZG9tRGlzdGFuY2UoKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRDYXJcIiwgY2xpY2tlZENhcik7XG4gICAgY29uc29sZS5sb2coXCJjb3ZlcmVkRGlzdGFuY2VcIiwgY292ZXJlZERpc3RhbmNlKTtcblxuICAgIGNvbnNvbGUubG9nKGluaXRpYWxDYXJzKTtcblxuICAgIHVwZGF0ZUNhcnMoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjYXJzID0gZXZlbnQuZmluZCgoY2FyKSA9PiBjYXIuZW1vamkgPT09IGNsaWNrZWRDYXIuZW1vamkpO1xuICAgICAgY2FyLnBvc2l0aW9uLnggPSBjb3ZlcmVkRGlzdGFuY2U7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB3aW5uZXIgPSBjYXJzLmZpbmQoKGNhcikgPT4gY2FyLnBvc2l0aW9uLnggPj0gZmluaXNoTGluZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3dpbm5lciA/IChcbiAgICAgICAgPFdpbm5lciB3aW5uZXI9e3dpbm5lcn0gb25SZXN0YXJ0PXsoKSA9PiBzZXRDYXJzKGluaXRpYWxDYXJzKX0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBbGxDYXJSb3V0ZXMgZmluaXNoTGluZT17ZmluaXNoTGluZX0+XG4gICAgICAgICAgPERpc3RhbmNlSGVhZGxpbmU+TGFzdCBEaXN0YW5jZTwvRGlzdGFuY2VIZWFkbGluZT5cbiAgICAgICAgICB7Y2Fycy5tYXAoKGNhcikgPT4gKFxuICAgICAgICAgICAgPEZyYWdtZW50IGtleT17Y2FyLmVtb2ppfT5cbiAgICAgICAgICAgICAgPFRyYWNrIGZpbmlzaExpbmU9e2ZpbmlzaExpbmV9PlxuICAgICAgICAgICAgICAgIDxDYXJCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vdmVDYXIoY2FyKX1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWD17Y2FyLnBvc2l0aW9uLnh9XG4gICAgICAgICAgICAgICAgICBsYXN0RGlzdGFuY2U9e2Nhci5wb3NpdGlvbi5sYXN0RGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgTW92ZSBjbGlja2VkIGNhciBmb3J3YXJkYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2FyLmVtb2ppfVxuICAgICAgICAgICAgICAgIDwvQ2FyQnV0dG9uPlxuICAgICAgICAgICAgICA8L1RyYWNrPlxuICAgICAgICAgICAgICA8RGlzdGFuY2U+e2Nhci5wb3NpdGlvbi5sYXN0RGlzdGFuY2V9PC9EaXN0YW5jZT5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQWxsQ2FyUm91dGVzPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwiV2lubmVyIiwiQ2FyQnV0dG9uIiwiQWxsQ2FyUm91dGVzIiwiRGlzdGFuY2VIZWFkbGluZSIsIkRpc3RhbmNlIiwiVHJhY2siLCJpbml0aWFsQ2FycyIsImdldFJhbmRvbURpc3RhbmNlIiwidXNlSW1tZXIiLCJmaW5pc2hMaW5lIiwiQ2FyUmFjZSIsImNhcnMiLCJzZXRDYXJzIiwibW92ZUNhciIsImNsaWNrZWRDYXIiLCJjb3ZlcmVkRGlzdGFuY2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlQ2FycyIsImV2ZW50IiwiZmluZCIsImNhciIsImVtb2ppIiwicG9zaXRpb24iLCJ4Iiwid2lubmVyIiwib25SZXN0YXJ0IiwibWFwIiwib25DbGljayIsInBvc2l0aW9uWCIsImxhc3REaXN0YW5jZSIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CarRace/index.js\n"));

/***/ })

});