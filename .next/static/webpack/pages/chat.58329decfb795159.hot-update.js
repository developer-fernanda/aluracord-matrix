"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/ButtonSendSticker.js":
/*!*********************************************!*\
  !*** ./src/components/ButtonSendSticker.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    minWidth: '42px',\n                    minHeight: '42px',\n                    fontSize: '20px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    marginLeft: '5px',\n                    marginBottom: '7px',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.background.fundoBlack,\n                    filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',\n                    focus: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.background.fundoRed\n                    }\n                },\n                label: \"🕸\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.background.fundoBlack,\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '0px',\n                    bottom: '50px',\n                    padding: '20px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n                        },\n                        children: \"Stickers 🕸\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '10px',\n                            overflowY: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '30%',\n                                    borderRadius: '3px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.background.fundoBlack\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.button.buttonRed\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxTQUFTTSxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUN4QyxHQUFLLENBQTBCUCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBRSxRQUF6Q1MsTUFBTSxHQUFrQlQsR0FBa0IsS0FBbENVLFlBQVksR0FBSVYsR0FBa0I7SUFFakQsTUFBTSw2RUFDSEMscURBQUc7UUFDRlUsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQVU7UUFDdEIsQ0FBQzs7d0ZBRUFWLHdEQUFNO2dCQUNMUyxVQUFVLEVBQUUsQ0FBQztvQkFDWEUsUUFBUSxFQUFFLENBQU07b0JBQ2hCQyxTQUFTLEVBQUUsQ0FBTTtvQkFDakJDLFFBQVEsRUFBRSxDQUFNO29CQUNoQkMsVUFBVSxFQUFFLENBQUc7b0JBQ2ZDLE9BQU8sRUFBRSxDQUFNO29CQUNmQyxVQUFVLEVBQUUsQ0FBUTtvQkFDcEJDLGNBQWMsRUFBRSxDQUFRO29CQUN4QkMsVUFBVSxFQUFFLENBQUs7b0JBQ2pCQyxZQUFZLEVBQUUsQ0FBSztvQkFDbkJDLGVBQWUsRUFBRWpCLDRFQUE0QztvQkFDN0RzQixNQUFNLEVBQUVsQixNQUFNLEdBQUcsQ0FBYyxnQkFBRyxDQUFjO29CQUNoRG1CLEtBQUssRUFBRSxDQUFDO3dCQUNOTixlQUFlLEVBQUVqQiwwRUFBMEM7b0JBQzdELENBQUM7Z0JBRUgsQ0FBQztnQkFDRHlCLEtBQUssRUFBQyxDQUFHO2dCQUNOQyxPQUFJLEVBQUUsUUFBUTtvQkFBRnJCLE1BQU0sQ0FBTkEsWUFBWSxFQUFFRCxNQUFNOzs7Ozs7O1lBRXBDQSxNQUFNLGdGQUNKUixxREFBRztnQkFDRlUsVUFBVSxFQUFFLENBQUM7b0JBQ1hNLE9BQU8sRUFBRSxDQUFNO29CQUNmZSxhQUFhLEVBQUUsQ0FBUTtvQkFDdkJDLFlBQVksRUFBRSxDQUFLO29CQUNuQnJCLFFBQVEsRUFBRSxDQUFVO29CQUNwQlUsZUFBZSxFQUFFakIsNEVBQTRDO29CQUM3RDZCLEtBQUssRUFBRSxDQUFDO3dCQUNOQyxFQUFFLEVBQUUsQ0FBTzt3QkFDWEMsRUFBRSxFQUFFLENBQU87b0JBQ2IsQ0FBQztvQkFDREMsTUFBTSxFQUFFLENBQU87b0JBQ2ZDLEtBQUssRUFBRSxDQUFLO29CQUNaQyxNQUFNLEVBQUUsQ0FBTTtvQkFDZEMsT0FBTyxFQUFFLENBQU07b0JBQ2ZDLFNBQVMsRUFBRSxDQUEyRTtnQkFDeEYsQ0FBQztnQkFDRFYsT0FBTyxFQUFFLFFBQVE7b0JBQUZyQixNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzs7Z0dBRWhDUCxzREFBSTt3QkFDSFEsVUFBVSxFQUFFLENBQUM7NEJBQ1grQixLQUFLLEVBQUVyQyxzRUFBcUM7d0JBRTlDLENBQUM7a0NBQ0YsQ0FFRDs7Ozs7O2dHQUNDSixxREFBRzt3QkFDRjJDLEdBQUcsRUFBQyxDQUFJO3dCQUNSakMsVUFBVSxFQUFFLENBQUM7NEJBQ1hNLE9BQU8sRUFBRSxDQUFNOzRCQUNmNEIsUUFBUSxFQUFFLENBQU07NEJBQ2hCMUIsY0FBYyxFQUFFLENBQWU7NEJBQy9CMkIsSUFBSSxFQUFFLENBQUM7NEJBQ1BDLFVBQVUsRUFBRSxDQUFNOzRCQUNsQkMsU0FBUyxFQUFFLENBQVE7d0JBQ3JCLENBQUM7a0NBRUEzQyxzREFBc0IsQ0FBQyxRQUFRLENBQVA4QyxPQUFPOzBDQUM5QixNQUFNLCtEQUFMaEQsc0RBQUk7Z0NBQ0g0QixPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7b0NBQ2QsRUFBcUU7b0NBQ3JFLEVBQUUsRUFBRXFCLE9BQU8sQ0FBQzdDLEtBQUssQ0FBQzhDLGNBQWMsR0FBRyxDQUFDO3dDQUNsQzlDLEtBQUssQ0FBQzhDLGNBQWMsQ0FBQ0YsT0FBTztvQ0FDOUIsQ0FBQztnQ0FDSCxDQUFDO2dDQUNEUCxHQUFHLEVBQUMsQ0FBSTtnQ0FDUmpDLFVBQVUsRUFBRSxDQUFDO29DQUNYdUIsS0FBSyxFQUFFLENBQUs7b0NBQ1pELFlBQVksRUFBRSxDQUFLO29DQUNuQk8sT0FBTyxFQUFFLENBQU07b0NBQ2ZaLEtBQUssRUFBRSxDQUFDO3dDQUNOTixlQUFlLEVBQUVqQiw0RUFBNEM7b0NBQy9ELENBQUM7b0NBQ0RpRCxLQUFLLEVBQUUsQ0FBQzt3Q0FDTmhDLGVBQWUsRUFBRWpCLHVFQUF1QztvQ0FDMUQsQ0FBQztnQ0FDSCxDQUFDO3NIQUVBRCx1REFBSztvQ0FBQ3FELEdBQUcsRUFBRU4sT0FBTzs7Ozs7OytCQWJMQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCckMsQ0FBQztHQWxHZTdDLGlCQUFpQjtLQUFqQkEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbmRTdGlja2VyLmpzP2U4NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qc29uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25TZW5kU3RpY2tlcihwcm9wcykge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIG1pbldpZHRoOiAnNDJweCcsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc0MnB4JyxcclxuICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMCcsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnN3B4JyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmZ1bmRvQmxhY2ssXHJcbiAgICAgICAgICBmaWx0ZXI6IGlzT3BlbiA/ICdncmF5c2NhbGUoMCknIDogJ2dyYXlzY2FsZSgxKScsXHJcbiAgICAgICAgICBmb2N1czoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5mdW5kb1JlZCxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGFiZWw9XCLwn5W4XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoIWlzT3Blbil9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmZ1bmRvQmxhY2ssXHJcbiAgICAgICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgeHM6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgc206ICcyOTBweCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlaWdodDogJzMwMHB4JyxcclxuICAgICAgICAgICAgcmlnaHQ6ICcwcHgnLFxyXG4gICAgICAgICAgICBib3R0b206ICc1MHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDQsIDQsIDUsIDAuMTUpIDBweCAwcHggMHB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggOHB4IDE2cHggMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgLy8gICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0aWNrZXJzIPCflbhcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdGFnPVwidWxcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxMHB4JyxcclxuICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXBwQ29uZmlnLnN0aWNrZXJzLm1hcCgoc3RpY2tlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbREVOVFJPIERPIENPTVBPTkVOVEVdIENsaWNvdSBubyBzdGlja2VyOicsIHN0aWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbihwcm9wcy5vblN0aWNrZXJDbGljaykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblN0aWNrZXJDbGljayhzdGlja2VyKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhZz1cImxpXCIga2V5PXtzdGlja2VyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgZm9jdXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5mdW5kb0JsYWNrLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5idXR0b24uYnV0dG9uUmVkLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N0aWNrZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiQnV0dG9uU2VuZFN0aWNrZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlblN0YXRlIiwic3R5bGVTaGVldCIsInBvc2l0aW9uIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsImZ1bmRvQmxhY2siLCJmaWx0ZXIiLCJmb2N1cyIsImZ1bmRvUmVkIiwibGFiZWwiLCJvbkNsaWNrIiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwieHMiLCJzbSIsImhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwicGFkZGluZyIsImJveFNoYWRvdyIsImNvbG9yIiwibmV1dHJhbHMiLCJ0YWciLCJmbGV4V3JhcCIsImZsZXgiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3dZIiwic3RpY2tlcnMiLCJtYXAiLCJzdGlja2VyIiwiQm9vbGVhbiIsIm9uU3RpY2tlckNsaWNrIiwiaG92ZXIiLCJidXR0b24iLCJidXR0b25SZWQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});