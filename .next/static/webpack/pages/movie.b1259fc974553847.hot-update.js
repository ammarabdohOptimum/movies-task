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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Pages/Movies/Movies.module.css */ \"./src/styles/Pages/Movies/Movies.module.css\");\n/* harmony import */ var _styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Movies_MoviesFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Movies/MoviesFilters */ \"./src/components/Movies/MoviesFilters.tsx\");\n/* harmony import */ var _components_Movies_MovieCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Movies/MovieCard */ \"./src/components/Movies/MovieCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Movies = (param)=>{\n    let { popularMovies = {\n        results: []\n    }, countries = [] } = param;\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentURL, setCurrentURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1\");\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isLoadMore, setIsLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _popularMovies_results;\n        if (popularMovies === null || popularMovies === void 0 ? void 0 : (_popularMovies_results = popularMovies.results) === null || _popularMovies_results === void 0 ? void 0 : _popularMovies_results.length) {\n            setMovies(popularMovies.results);\n        }\n    }, [\n        popularMovies\n    ]);\n    const loadMoreMovies = async ()=>{\n        setLoading(true);\n        setIsLoadMore(true);\n        try {\n            var _data_results;\n            const newPage = page + 1;\n            setPage(newPage);\n            const newURL = \"\".concat(currentURL, \"&page=\").concat(newPage);\n            setCurrentURL(newURL);\n            const options = {\n                method: \"GET\",\n                headers: {\n                    accept: \"application/json\",\n                    Authorization: \"Bearer \".concat(\"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzIwZmNiZjMwMDhjNTU0ZjM0MjVkYTg0YWUxOTVlZiIsIm5iZiI6MTcyNTUyMDcxOC43ODkxNzYsInN1YiI6IjY2ZDZjZDg1MDcxZjk2ZTY4ZmY4YjQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9hldU1P9qzCYbyPGdAZma6Iu6UivBOgCs4npzB2Zpw\")\n                }\n            };\n            const response = await fetch(newURL, options);\n            const data = await response.json();\n            if (data === null || data === void 0 ? void 0 : (_data_results = data.results) === null || _data_results === void 0 ? void 0 : _data_results.length) {\n                setMovies((prevMovies)=>[\n                        ...prevMovies,\n                        ...data.results\n                    ]);\n            }\n        } catch (error) {\n            console.error(\"Error fetching more movies:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().filter_section),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_header),\n                            children: \"Popular Movies\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movies_MoviesFilters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            countries: countries,\n                            setMovies: setMovies,\n                            currentURL: currentURL,\n                            setCurrentURL: setCurrentURL\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().popular_movies),\n                    children: [\n                        movies.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No movies available\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined) : movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movies_MovieCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                movie: movie\n                            }, movie.id, false, {\n                                fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 35\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button \".concat((_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().load_more_button)),\n                            disabled: loading,\n                            onClick: loadMoreMovies,\n                            children: loading ? \"Loading...\" : \"Load More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movies, \"u/uVlf3FdoIzwmej6m1UX9m/ngE=\");\n_c = Movies;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW92aWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1U7QUFDQztBQUVSO0FBZXRELE1BQU1NLFNBQW9DO1FBQUMsRUFDekNDLGdCQUFnQjtRQUFFQyxTQUFTLEVBQUU7SUFBQyxDQUFDLEVBQy9CQyxZQUFZLEVBQUUsRUFDZjs7SUFDQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVUsRUFBRTtJQUNoRCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUMxQztJQUVGLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDaUIsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQVU7SUFFdERDLGdEQUFTQSxDQUFDO1lBQ0pLO1FBQUosSUFBSUEsMEJBQUFBLHFDQUFBQSx5QkFBQUEsY0FBZUMsT0FBTyxjQUF0QkQsNkNBQUFBLHVCQUF3QmEsTUFBTSxFQUFFO1lBQ2xDVCxVQUFVSixjQUFjQyxPQUFPO1FBQ2pDO0lBQ0YsR0FBRztRQUFDRDtLQUFjO0lBRWxCLE1BQU1jLGlCQUFpQjtRQUNyQlIsV0FBVztRQUNYTSxjQUFjO1FBQ2QsSUFBSTtnQkFrQkVHO1lBakJKLE1BQU1DLFVBQVVQLE9BQU87WUFDdkJDLFFBQVFNO1lBRVIsTUFBTUMsU0FBUyxHQUFzQkQsT0FBbkJULFlBQVcsVUFBZ0IsT0FBUlM7WUFDckNSLGNBQWNTO1lBRWQsTUFBTUMsVUFBVTtnQkFDZEMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUEMsUUFBUTtvQkFDUkMsZUFBZSxVQUErQyxPQUFyQ0MscVBBQW9DO2dCQUMvRDtZQUNGO1lBRUEsTUFBTUcsV0FBVyxNQUFNQyxNQUFNVixRQUFRQztZQUNyQyxNQUFNSCxPQUFPLE1BQU1XLFNBQVNFLElBQUk7WUFFaEMsSUFBSWIsaUJBQUFBLDRCQUFBQSxnQkFBQUEsS0FBTWQsT0FBTyxjQUFiYyxvQ0FBQUEsY0FBZUYsTUFBTSxFQUFFO2dCQUN6QlQsVUFBVSxDQUFDeUIsYUFBZTsyQkFBSUE7MkJBQWVkLEtBQUtkLE9BQU87cUJBQUM7WUFDNUQ7UUFDRixFQUFFLE9BQU82QixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQy9DLFNBQVU7WUFDUnhCLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFXckMsMkZBQWtCO2tCQUNoQyw0RUFBQ29DO1lBQUlDLFdBQVdyQyw4RkFBcUI7OzhCQUNuQyw4REFBQ3dDO29CQUFRSCxXQUFXckMsOEZBQXFCOztzQ0FDdkMsOERBQUMwQzs0QkFBR0wsV0FBV3JDLDZGQUFvQjtzQ0FBRTs7Ozs7O3NDQUNyQyw4REFBQ0Msd0VBQWFBOzRCQUNaSyxXQUFXQTs0QkFDWEUsV0FBV0E7NEJBQ1hHLFlBQVlBOzRCQUNaQyxlQUFlQTs7Ozs7Ozs7Ozs7OzhCQUduQiw4REFBQzRCO29CQUFRSCxXQUFXckMsOEZBQXFCOzt3QkFDdENPLE9BQU9VLE1BQU0sS0FBSyxrQkFDakIsOERBQUM0QjtzQ0FBRTs7Ozs7d0NBRUh0QyxPQUFPdUMsR0FBRyxDQUFDLENBQUNDLHNCQUFVLDhEQUFDN0Msb0VBQVNBO2dDQUFnQjZDLE9BQU9BOytCQUFqQkEsTUFBTUMsRUFBRTs7Ozs7c0NBR2hELDhEQUFDQzs0QkFDQ1osV0FBVyxVQUFrQyxPQUF4QnJDLGdHQUF1Qjs0QkFDNUNtRCxVQUFVMUM7NEJBQ1YyQyxTQUFTbEM7c0NBRVJULFVBQVUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7R0EvRU1OO0tBQUFBOztBQXdITiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbW92aWUudHN4PzNiZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1BhZ2VzL01vdmllcy9Nb3ZpZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE1vdmllc0ZpbHRlcnMgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3ZpZXMvTW92aWVzRmlsdGVyc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3ZpZXMvTW92aWVDYXJkXCI7XG5cbmludGVyZmFjZSBNb3ZpZSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG92ZXJ2aWV3OiBzdHJpbmc7XG4gIHBvc3Rlcl9wYXRoOiBzdHJpbmc7XG4gIHJlbGVhc2VfZGF0ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTW92aWVzUGFnZVByb3BzIHtcbiAgcG9wdWxhck1vdmllczogeyByZXN1bHRzOiBNb3ZpZVtdIH07XG4gIGNvdW50cmllczogeyBpc29fMzE2Nl8xOiBzdHJpbmc7IGVuZ2xpc2hfbmFtZTogc3RyaW5nIH1bXTtcbn1cblxuY29uc3QgTW92aWVzOiBSZWFjdC5GQzxNb3ZpZXNQYWdlUHJvcHM+ID0gKHtcbiAgcG9wdWxhck1vdmllcyA9IHsgcmVzdWx0czogW10gfSxcbiAgY291bnRyaWVzID0gW10sXG59KSA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxNb3ZpZVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRVUkwsIHNldEN1cnJlbnRVUkxdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9sYW5ndWFnZT1lbi1VUyZwYWdlPTFcIlxuICApO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpOyBcbiAgY29uc3QgW2lzTG9hZE1vcmUsIHNldElzTG9hZE1vcmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBvcHVsYXJNb3ZpZXM/LnJlc3VsdHM/Lmxlbmd0aCkge1xuICAgICAgc2V0TW92aWVzKHBvcHVsYXJNb3ZpZXMucmVzdWx0cyk7XG4gICAgfVxuICB9LCBbcG9wdWxhck1vdmllc10pO1xuXG4gIGNvbnN0IGxvYWRNb3JlTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0SXNMb2FkTW9yZSh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV3UGFnZSA9IHBhZ2UgKyAxO1xuICAgICAgc2V0UGFnZShuZXdQYWdlKTtcblxuICAgICAgY29uc3QgbmV3VVJMID0gYCR7Y3VycmVudFVSTH0mcGFnZT0ke25ld1BhZ2V9YDtcbiAgICAgIHNldEN1cnJlbnRVUkwobmV3VVJMKTtcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVE1EQl9BUElfS0VZfWAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ld1VSTCwgb3B0aW9ucyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YT8ucmVzdWx0cz8ubGVuZ3RoKSB7XG4gICAgICAgIHNldE1vdmllcygocHJldk1vdmllcykgPT4gWy4uLnByZXZNb3ZpZXMsIC4uLmRhdGEucmVzdWx0c10pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW9yZSBtb3ZpZXM6XCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZXNfcGFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllc193cmFwcGVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyX3NlY3Rpb259PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZXNfaGVhZGVyfT5Qb3B1bGFyIE1vdmllczwvaDI+XG4gICAgICAgICAgPE1vdmllc0ZpbHRlcnNcbiAgICAgICAgICAgIGNvdW50cmllcz17Y291bnRyaWVzfVxuICAgICAgICAgICAgc2V0TW92aWVzPXtzZXRNb3ZpZXN9XG4gICAgICAgICAgICBjdXJyZW50VVJMPXtjdXJyZW50VVJMfVxuICAgICAgICAgICAgc2V0Q3VycmVudFVSTD17c2V0Q3VycmVudFVSTH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnBvcHVsYXJfbW92aWVzfT5cbiAgICAgICAgICB7bW92aWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwPk5vIG1vdmllcyBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIG1vdmllcy5tYXAoKG1vdmllKSA9PiA8TW92aWVDYXJkIGtleT17bW92aWUuaWR9IG1vdmllPXttb3ZpZX0gLz4pXG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiAke3N0eWxlcy5sb2FkX21vcmVfYnV0dG9ufWB9XG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRNb3JlTW92aWVzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcIkxvYWQgTW9yZVwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UTURCX0FQSV9LRVl9YCxcbiAgICB9LFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2xhbmd1YWdlPWVuLVVTJnBhZ2U9MVwiLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgY29uc3QgcG9wdWxhck1vdmllcyA9IGF3YWl0IG1vdmllc1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGNvdW50cmllc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvY29uZmlndXJhdGlvbi9jb3VudHJpZXM/bGFuZ3VhZ2U9ZW4tVVNcIixcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IGNvdW50cmllc1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3B1bGFyTW92aWVzLFxuICAgICAgICBjb3VudHJpZXMsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcG9wdWxhck1vdmllczogeyByZXN1bHRzOiBbXSB9LFxuICAgICAgICBjb3VudHJpZXM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIk1vdmllc0ZpbHRlcnMiLCJNb3ZpZUNhcmQiLCJNb3ZpZXMiLCJwb3B1bGFyTW92aWVzIiwicmVzdWx0cyIsImNvdW50cmllcyIsIm1vdmllcyIsInNldE1vdmllcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY3VycmVudFVSTCIsInNldEN1cnJlbnRVUkwiLCJwYWdlIiwic2V0UGFnZSIsImlzTG9hZE1vcmUiLCJzZXRJc0xvYWRNb3JlIiwibGVuZ3RoIiwibG9hZE1vcmVNb3ZpZXMiLCJkYXRhIiwibmV3UGFnZSIsIm5ld1VSTCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19UTURCX0FQSV9LRVkiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInByZXZNb3ZpZXMiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtb3ZpZXNfcGFnZSIsIm1vdmllc193cmFwcGVyIiwic2VjdGlvbiIsImZpbHRlcl9zZWN0aW9uIiwiaDIiLCJtb3ZpZXNfaGVhZGVyIiwicG9wdWxhcl9tb3ZpZXMiLCJwIiwibWFwIiwibW92aWUiLCJpZCIsImJ1dHRvbiIsImxvYWRfbW9yZV9idXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/movie.tsx\n"));

/***/ })

});