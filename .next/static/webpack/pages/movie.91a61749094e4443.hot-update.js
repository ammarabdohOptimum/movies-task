"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie",{

/***/ "./src/pages/movie.tsx":
/*!*****************************!*\
  !*** ./src/pages/movie.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Pages/Movies/Movies.module.css */ \"./src/styles/Pages/Movies/Movies.module.css\");\n/* harmony import */ var _styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Movies_MoviesFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Movies/MoviesFilters */ \"./src/components/Movies/MoviesFilters.tsx\");\n/* harmony import */ var _components_Movies_MovieCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Movies/MovieCard */ \"./src/components/Movies/MovieCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Movies = (param)=>{\n    let { popularMovies = {\n        results: []\n    }, countries = [] } = param;\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [currentURL, setCurrentURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _popularMovies_results;\n        if (popularMovies === null || popularMovies === void 0 ? void 0 : (_popularMovies_results = popularMovies.results) === null || _popularMovies_results === void 0 ? void 0 : _popularMovies_results.length) {\n            setMovies(popularMovies.results);\n            setLoading(false);\n        }\n    }, [\n        popularMovies\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().filter_section),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_header),\n                            children: \"Popular Movies\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movies_MoviesFilters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            countries: countries,\n                            setMovies: setMovies\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().popular_movies),\n                    children: [\n                        loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Loading movies...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined) : movies ? movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movies_MovieCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                movie: movie\n                            }, movie.id, false, {\n                                fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 35\n                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No movies available\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button \".concat((_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().load_more_button)),\n                            children: \"Load More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movies, \"nYRynGPq/7SUb/lY9REi5UcsTb4=\");\n_c = Movies;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW92aWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1U7QUFDQztBQUVSO0FBZXRELE1BQU1NLFNBQW9DO1FBQUMsRUFDekNDLGdCQUFnQjtRQUFFQyxTQUFTLEVBQUU7SUFBQyxDQUFDLEVBQy9CQyxZQUFZLEVBQUUsRUFDZjs7SUFDQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVUsRUFBRTtJQUNoRCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFTO0lBQ3JEQyxnREFBU0EsQ0FBQztZQUNKSztRQUFKLElBQUlBLDBCQUFBQSxxQ0FBQUEseUJBQUFBLGNBQWVDLE9BQU8sY0FBdEJELDZDQUFBQSx1QkFBd0JTLE1BQU0sRUFBRTtZQUNsQ0wsVUFBVUosY0FBY0MsT0FBTztZQUMvQkssV0FBVztRQUNiO0lBQ0YsR0FBRztRQUFDTjtLQUFjO0lBRWxCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFXZiwyRkFBa0I7a0JBQ2hDLDRFQUFDYztZQUFJQyxXQUFXZiw4RkFBcUI7OzhCQUNuQyw4REFBQ2tCO29CQUFRSCxXQUFXZiw4RkFBcUI7O3NDQUN2Qyw4REFBQ29COzRCQUFHTCxXQUFXZiw2RkFBb0I7c0NBQUU7Ozs7OztzQ0FDckMsOERBQUNDLHdFQUFhQTs0QkFBQ0ssV0FBV0E7NEJBQVdFLFdBQVdBOzs7Ozs7Ozs7Ozs7OEJBRWxELDhEQUFDVTtvQkFBUUgsV0FBV2YsOEZBQXFCOzt3QkFDdENTLHdCQUNDLDhEQUFDYztzQ0FBRTs7Ozs7d0NBQ0RoQixTQUNGQSxPQUFPaUIsR0FBRyxDQUFDLENBQUNDLHNCQUFVLDhEQUFDdkIsb0VBQVNBO2dDQUFnQnVCLE9BQU9BOytCQUFqQkEsTUFBTUMsRUFBRTs7OzsyREFFOUMsOERBQUNIO3NDQUFFOzs7Ozs7c0NBRUwsOERBQUNJOzRCQUFPWixXQUFXLFVBQWtDLE9BQXhCZixnR0FBdUI7c0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xFO0dBbENNRztLQUFBQTs7QUEyRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21vdmllLnRzeD8zYmRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9QYWdlcy9Nb3ZpZXMvTW92aWVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBNb3ZpZXNGaWx0ZXJzIGZyb20gXCJAL2NvbXBvbmVudHMvTW92aWVzL01vdmllc0ZpbHRlcnNcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTW92aWVDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvTW92aWVzL01vdmllQ2FyZFwiO1xuXG5pbnRlcmZhY2UgTW92aWUge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBvdmVydmlldzogc3RyaW5nO1xuICBwb3N0ZXJfcGF0aDogc3RyaW5nO1xuICByZWxlYXNlX2RhdGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE1vdmllc1BhZ2VQcm9wcyB7XG4gIHBvcHVsYXJNb3ZpZXM6IHsgcmVzdWx0czogTW92aWVbXSB9O1xuICBjb3VudHJpZXM6IHsgaXNvXzMxNjZfMTogc3RyaW5nOyBlbmdsaXNoX25hbWU6IHN0cmluZyB9W107XG59XG5cbmNvbnN0IE1vdmllczogUmVhY3QuRkM8TW92aWVzUGFnZVByb3BzPiA9ICh7XG4gIHBvcHVsYXJNb3ZpZXMgPSB7IHJlc3VsdHM6IFtdIH0sXG4gIGNvdW50cmllcyA9IFtdLFxufSkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8TW92aWVbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gdXNlU3RhdGU8U3RyaW5nPihcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9sYW5ndWFnZT1lbi1VUyZwYWdlPTFcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBvcHVsYXJNb3ZpZXM/LnJlc3VsdHM/Lmxlbmd0aCkge1xuICAgICAgc2V0TW92aWVzKHBvcHVsYXJNb3ZpZXMucmVzdWx0cyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtwb3B1bGFyTW92aWVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllc19wYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVzX3dyYXBwZXJ9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJfc2VjdGlvbn0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllc19oZWFkZXJ9PlBvcHVsYXIgTW92aWVzPC9oMj5cbiAgICAgICAgICA8TW92aWVzRmlsdGVycyBjb3VudHJpZXM9e2NvdW50cmllc30gc2V0TW92aWVzPXtzZXRNb3ZpZXN9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucG9wdWxhcl9tb3ZpZXN9PlxuICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPHA+TG9hZGluZyBtb3ZpZXMuLi48L3A+XG4gICAgICAgICAgKSA6IG1vdmllcyA/IChcbiAgICAgICAgICAgIG1vdmllcy5tYXAoKG1vdmllKSA9PiA8TW92aWVDYXJkIGtleT17bW92aWUuaWR9IG1vdmllPXttb3ZpZX0gLz4pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwPk5vIG1vdmllcyBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ1dHRvbiAke3N0eWxlcy5sb2FkX21vcmVfYnV0dG9ufWB9PkxvYWQgTW9yZTwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UTURCX0FQSV9LRVl9YCxcbiAgICB9LFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2xhbmd1YWdlPWVuLVVTJnBhZ2U9MVwiLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgY29uc3QgcG9wdWxhck1vdmllcyA9IGF3YWl0IG1vdmllc1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGNvdW50cmllc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvY29uZmlndXJhdGlvbi9jb3VudHJpZXM/bGFuZ3VhZ2U9ZW4tVVNcIixcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IGNvdW50cmllc1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3B1bGFyTW92aWVzLFxuICAgICAgICBjb3VudHJpZXMsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcG9wdWxhck1vdmllczogeyByZXN1bHRzOiBbXSB9LFxuICAgICAgICBjb3VudHJpZXM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIk1vdmllc0ZpbHRlcnMiLCJNb3ZpZUNhcmQiLCJNb3ZpZXMiLCJwb3B1bGFyTW92aWVzIiwicmVzdWx0cyIsImNvdW50cmllcyIsIm1vdmllcyIsInNldE1vdmllcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY3VycmVudFVSTCIsInNldEN1cnJlbnRVUkwiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJtb3ZpZXNfcGFnZSIsIm1vdmllc193cmFwcGVyIiwic2VjdGlvbiIsImZpbHRlcl9zZWN0aW9uIiwiaDIiLCJtb3ZpZXNfaGVhZGVyIiwicG9wdWxhcl9tb3ZpZXMiLCJwIiwibWFwIiwibW92aWUiLCJpZCIsImJ1dHRvbiIsImxvYWRfbW9yZV9idXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/movie.tsx\n"));

/***/ })

});