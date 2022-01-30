"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\n//Componente React\n//Função recebe um argumento/propriedade\nfunction Titulo(props) {\n    console.log(props);\n    const Tag = props.tag;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"bbd482378c56d6d0\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bbd482378c56d6d0\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]};\nfont-size:20px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// function HomePage() {\n//     //JSX\n//     return (\n//         <div>\n//             <GlobalStyle /> \n//             <Titulo tag=\"h2\">Bem-vindos de volta!</Titulo>\n//             <h2>Discord Alura - Spider</h2>\n//         </div>\n//     )\n// } \n// export default HomePage\nfunction PaginaInicial() {\n    // const username = 'developer-fernanda';\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const imagemInicial = './img/5.png';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundImage: 'url(https://images.hdqwalls.com/download/spiderman-and-venom-4k-af-1366x768.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.fundo\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '250px',\n                            padding: '16px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                onError: function(event) {\n                                    event.target.src = imagemInicial;\n                                },\n                                src: username.length > 2 ? `https://github.com/${username}.png` : imagemInicial\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    fontSize: '15px',\n                                    padding: '3px 10px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(infosDoEvento) {\n                            infosDoEvento.preventDefault();\n                            console.log('Algu\\xe9m submit o form');\n                            roteamento.push(`/chat?username=${username}`);\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Bem-vindos ao MiranhaVerso!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function(event) {\n                                    console.log('Usuario digitou', event.target.value);\n                                    //Onde está o valor?\n                                    const valor = event.target.value;\n                                    //Trocar o valor da variavel\n                                    //Através do React\n                                    setUsername(valor);\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.buttonRed,\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.fundo\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                                lineNumber: 124,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.buttonRed,\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.buttonBlack\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                                lineNumber: 158,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Projetos Git\\\\aluracord-matrix\\\\pages\\\\index.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ2EsS0FBSztvQ0FDbEQsRUFBb0I7b0NBQ25CLEtBQUksQ0FBQ0UsS0FBSyxHQUFHaEIsS0FBSyxDQUFDQyxNQUFNLENBQUNhLEtBQUs7b0NBQ2hDLEVBQTRCO29DQUM1QixFQUFrQjtvQ0FDakIxQyxXQUFVLENBQUM0QyxLQUFLO2dDQUNsQixDQUFDO2dDQUNIQyxTQUFTO2dDQUNUQyxlQUFlLEVBQUUsQ0FBQztvQ0FDaEJDLE9BQU8sRUFBRSxDQUFDO3dDQUNSQyxTQUFTLEVBQUU3RCxvRUFBb0M7d0NBQy9DOEQsU0FBUyxFQUFFOUQsb0VBQW9DO3dDQUMvQytELGtCQUFrQixFQUFFL0QsNkVBQTZDO3dDQUNqRWtDLGVBQWUsRUFBRWxDLHlFQUF5QztvQ0FDNUQsQ0FBQztnQ0FDSCxDQUFDOzs7Ozs7d0dBZ0JGTix3REFBTTtnQ0FDTHVFLElBQUksRUFBQyxDQUFRO2dDQUNiQyxLQUFLLEVBQUMsQ0FBUTtnQ0FDZFIsU0FBUztnQ0FDVFMsWUFBWSxFQUFFLENBQUM7b0NBQ2JDLGFBQWEsRUFBRXBFLHNFQUFxQztvQ0FDcEQ4RCxTQUFTLEVBQUU5RCw2RUFBNkM7b0NBQ3hEcUUsY0FBYyxFQUFFckUsbUVBQW1DO29DQUNuRHVFLGVBQWUsRUFBRXZFLCtFQUErQztnQ0FDbEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjb3JkLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XHJcblxyXG4vL0NvbXBvbmVudGUgUmVhY3RcclxuLy9GdW7Dp8OjbyByZWNlYmUgdW0gYXJndW1lbnRvL3Byb3ByaWVkYWRlXHJcblxyXG5mdW5jdGlvbiBUaXR1bG8ocHJvcHMpe1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAke1RhZ30ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbi8vICAgICAvL0pTWFxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz4gXHJcbi8vICAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5CZW0tdmluZG9zIGRlIHZvbHRhITwvVGl0dWxvPlxyXG4vLyAgICAgICAgICAgICA8aDI+RGlzY29yZCBBbHVyYSAtIFNwaWRlcjwvaDI+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vIH0gXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gICAgLy8gY29uc3QgdXNlcm5hbWUgPSAnZGV2ZWxvcGVyLWZlcm5hbmRhJztcclxuICAgICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgICAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAgY29uc3QgaW1hZ2VtSW5pY2lhbCA9ICcuL2ltZy81LnBuZyc7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL2ltYWdlcy5oZHF3YWxscy5jb20vZG93bmxvYWQvc3BpZGVybWFuLWFuZC12ZW5vbS00ay1hZi0xMzY2eDc2OC5qcGcpJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4czogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBzbTogJ3JvdycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzcwMHB4JyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMudHJhbnNwYXJlbnRlLmZ1bmRvLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICBcclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyNTBweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17ZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3JjID0gaW1hZ2VtSW5pY2lhbFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17dXNlcm5hbWUubGVuZ3RoID4gMiA/IGBodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYCA6IGltYWdlbUluaWNpYWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG5cclxuICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17ZnVuY3Rpb24oaW5mb3NEb0V2ZW50byl7XHJcbiAgICAgICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsZ3XDqW0gc3VibWl0IG8gZm9ybScpXHJcbiAgICAgICAgICAgICAgICAgIHJvdGVhbWVudG8ucHVzaChgL2NoYXQ/dXNlcm5hbWU9JHt1c2VybmFtZX1gKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogJzUwJScgfSwgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5CZW0tdmluZG9zIGFvIE1pcmFuaGFWZXJzbyE8L1RpdHVsbz5cclxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxyXG4gICAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICBcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgIC8vT25kZSBlc3TDoSBvIHZhbG9yP1xyXG4gICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAvL1Ryb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXHJcbiAgICAgICAgICAgICAgICAgICAvL0F0cmF2w6lzIGRvIFJlYWN0XHJcbiAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XHJcbiAgICAgICAgICAgICAgICAgIH19ICBcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMudHJhbnNwYXJlbnRlLmJ1dHRvblJlZCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMudHJhbnNwYXJlbnRlLmZ1bmRvLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL09uZGUgZXN0w6EgbyB2YWxvcj9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL1Ryb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BdHJhdsOpcyBkbyBSZWFjdFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKTtcclxuICAgICAgICAgICAgICAgIH19ICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy50cmFuc3BhcmVudGUuYnV0dG9uUmVkLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy50cmFuc3BhcmVudGUuYnV0dG9uQmxhY2ssXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gICJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVJvdXRlciIsImFwcENvbmZpZyIsIlRpdHVsbyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJyb3RlYW1lbnRvIiwiaW1hZ2VtSW5pY2lhbCIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc3BhcmVudGUiLCJmdW5kbyIsImZsZXgiLCJtaW5IZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJvbkVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJzcmMiLCJsZW5ndGgiLCJ2YXJpYW50IiwiY29sb3IiLCJmb250U2l6ZSIsImFzIiwib25TdWJtaXQiLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGV4dEFsaWduIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ2YWxvciIsImZ1bGxXaWR0aCIsInRleHRGaWVsZENvbG9ycyIsIm5ldXRyYWwiLCJ0ZXh0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JIaWdobGlnaHQiLCJidXR0b25SZWQiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJwcmltYXJ5IiwibWFpbkNvbG9yU3Ryb25nIiwiYnV0dG9uQmxhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Junte-se a nós!","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#800000","700":"#207227","800":"#0E5814","900":"#8B0000","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"##8B0000","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"},"transparente":{"fundo":"rgba(0, 0, 0, 0.7)","fundoSticker":"rgba(0, 0, 0, 2.0)","buttonRed":"#800000","buttonBlack":"#1C1C1C"}}},"userImageDefault":"./img/5.png","stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://impaktovisual.com.br/6098-large_default/display-homem-aranha.jpg"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();