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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Pages/Movies/Movies.module.css */ \"./src/styles/Pages/Movies/Movies.module.css\");\n/* harmony import */ var _styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Movies_MoviesFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Movies/MoviesFilters */ \"./src/components/Movies/MoviesFilters.tsx\");\n/* harmony import */ var _components_Movies_MovieCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Movies/MovieCard */ \"./src/components/Movies/MovieCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Movies = (param)=>{\n    let { popularMovies = {\n        results: []\n    }, countries = [] } = param;\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // Track the current page\n    const [currentURL, setCurrentURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1\");\n    const [isLoadMore, setIsLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const loadMoreTriggerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Ref for the load more trigger\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _popularMovies_results;\n        // Set initial movies from server-side props\n        if (popularMovies === null || popularMovies === void 0 ? void 0 : (_popularMovies_results = popularMovies.results) === null || _popularMovies_results === void 0 ? void 0 : _popularMovies_results.length) {\n            setMovies(popularMovies.results);\n        }\n    }, [\n        popularMovies\n    ]);\n    const loadMoreMovies = async ()=>{\n        setLoading(true);\n        try {\n            var _data_results;\n            // Increment the page number\n            const newPage = page + 1;\n            setPage(newPage);\n            const newURL = \"\".concat(currentURL, \"&page=\").concat(newPage);\n            setCurrentURL(newURL);\n            const options = {\n                method: \"GET\",\n                headers: {\n                    accept: \"application/json\",\n                    Authorization: \"Bearer \".concat(\"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzIwZmNiZjMwMDhjNTU0ZjM0MjVkYTg0YWUxOTVlZiIsIm5iZiI6MTcyNTUyMDcxOC43ODkxNzYsInN1YiI6IjY2ZDZjZDg1MDcxZjk2ZTY4ZmY4YjQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9hldU1P9qzCYbyPGdAZma6Iu6UivBOgCs4npzB2Zpw\")\n                }\n            };\n            const response = await fetch(newURL, options);\n            const data = await response.json();\n            // Append new results to the current list of movies\n            if (data === null || data === void 0 ? void 0 : (_data_results = data.results) === null || _data_results === void 0 ? void 0 : _data_results.length) {\n                setMovies((prevMovies)=>[\n                        ...prevMovies,\n                        ...data.results\n                    ]);\n            }\n        } catch (error) {\n            console.error(\"Error fetching more movies:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    // IntersectionObserver to trigger load more when scrolling to the bottom\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            if (entries[0].isIntersecting && isLoadMore && !loading) {\n                loadMoreMovies();\n            }\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 1.0\n        });\n        if (loadMoreTriggerRef.current) {\n            observer.observe(loadMoreTriggerRef.current);\n        }\n        return ()=>{\n            if (loadMoreTriggerRef.current) {\n                observer.unobserve(loadMoreTriggerRef.current);\n            }\n        };\n    }, [\n        isLoadMore,\n        loading\n    ]); // Re-run the effect when `isLoadMore` or `loading` changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().filter_section),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().movies_header),\n                            children: \"Popular Movies\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movies_MoviesFilters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            countries: countries,\n                            setMovies: setMovies,\n                            currentURL: currentURL,\n                            setCurrentURL: setCurrentURL\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().popular_movies),\n                    children: [\n                        movies.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No movies available\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined) : movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movies_MovieCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                movie: movie\n                            }, movie.id, false, {\n                                fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 35\n                            }, undefined)),\n                        !isLoadMore && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button \".concat((_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().load_more_button)),\n                            disabled: loading,\n                            onClick: ()=>setIsLoadMore(true),\n                            children: loading ? \"Loading...\" : \"Load More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: loadMoreTriggerRef,\n                            className: (_styles_Pages_Movies_Movies_module_css__WEBPACK_IMPORTED_MODULE_2___default().load_more_trigger)\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined),\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Loading more movies...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 23\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ammar-abode/Desktop/untitled folder 2/movies-task/src/pages/movie.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movies, \"CFJR9vgcQKD9MVb1GiBzgKMKFj8=\");\n_c = Movies;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1hLLFlBQVlBOzRCQUNaQyxlQUFlQTs7Ozs7Ozs7Ozs7OzhCQUduQiw4REFBQ3FDO29CQUFRSCxXQUFXaEQsOEZBQXFCOzt3QkFDdENPLE9BQU9XLE1BQU0sS0FBSyxrQkFDakIsOERBQUNzQztzQ0FBRTs7Ozs7d0NBRUhqRCxPQUFPa0QsR0FBRyxDQUFDLENBQUNDLHNCQUFVLDhEQUFDeEQsb0VBQVNBO2dDQUFnQndELE9BQU9BOytCQUFqQkEsTUFBTUMsRUFBRTs7Ozs7d0JBRy9DLENBQUM1Qyw0QkFDQSw4REFBQzZDOzRCQUNDWixXQUFXLFVBQWtDLE9BQXhCaEQsZ0dBQXVCOzRCQUM1QzhELFVBQVVyRDs0QkFDVnNELFNBQVMsSUFBTS9DLGNBQWM7c0NBRTVCUCxVQUFVLGVBQWU7Ozs7OztzQ0FLOUIsOERBQUNzQzs0QkFBSWlCLEtBQUsvQzs0QkFBb0IrQixXQUFXaEQsaUdBQXdCOzs7Ozs7d0JBRWhFUyx5QkFBVyw4REFBQytDO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQXBITXJEO0tBQUFBOztBQTZKTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbW92aWUudHN4PzNiZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvUGFnZXMvTW92aWVzL01vdmllcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTW92aWVzRmlsdGVycyBmcm9tIFwiQC9jb21wb25lbnRzL01vdmllcy9Nb3ZpZXNGaWx0ZXJzXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IE1vdmllQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL01vdmllcy9Nb3ZpZUNhcmRcIjtcblxuaW50ZXJmYWNlIE1vdmllIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgb3ZlcnZpZXc6IHN0cmluZztcbiAgcG9zdGVyX3BhdGg6IHN0cmluZztcbiAgcmVsZWFzZV9kYXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBNb3ZpZXNQYWdlUHJvcHMge1xuICBwb3B1bGFyTW92aWVzOiB7IHJlc3VsdHM6IE1vdmllW10gfTtcbiAgY291bnRyaWVzOiB7IGlzb18zMTY2XzE6IHN0cmluZzsgZW5nbGlzaF9uYW1lOiBzdHJpbmcgfVtdO1xufVxuXG5jb25zdCBNb3ZpZXM6IFJlYWN0LkZDPE1vdmllc1BhZ2VQcm9wcz4gPSAoe1xuICBwb3B1bGFyTW92aWVzID0geyByZXN1bHRzOiBbXSB9LFxuICBjb3VudHJpZXMgPSBbXSxcbn0pID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpOyAvLyBUcmFjayB0aGUgY3VycmVudCBwYWdlXG4gIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xXCJcbiAgKTtcbiAgY29uc3QgW2lzTG9hZE1vcmUsIHNldElzTG9hZE1vcmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpOyBcbiAgY29uc3QgbG9hZE1vcmVUcmlnZ2VyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7IC8vIFJlZiBmb3IgdGhlIGxvYWQgbW9yZSB0cmlnZ2VyXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZXQgaW5pdGlhbCBtb3ZpZXMgZnJvbSBzZXJ2ZXItc2lkZSBwcm9wc1xuICAgIGlmIChwb3B1bGFyTW92aWVzPy5yZXN1bHRzPy5sZW5ndGgpIHtcbiAgICAgIHNldE1vdmllcyhwb3B1bGFyTW92aWVzLnJlc3VsdHMpO1xuICAgIH1cbiAgfSwgW3BvcHVsYXJNb3ZpZXNdKTtcblxuICBjb25zdCBsb2FkTW9yZU1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEluY3JlbWVudCB0aGUgcGFnZSBudW1iZXJcbiAgICAgIGNvbnN0IG5ld1BhZ2UgPSBwYWdlICsgMTtcbiAgICAgIHNldFBhZ2UobmV3UGFnZSk7XG5cbiAgICAgIGNvbnN0IG5ld1VSTCA9IGAke2N1cnJlbnRVUkx9JnBhZ2U9JHtuZXdQYWdlfWA7XG4gICAgICBzZXRDdXJyZW50VVJMKG5ld1VSTCk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RNREJfQVBJX0tFWX1gLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXdVUkwsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgLy8gQXBwZW5kIG5ldyByZXN1bHRzIHRvIHRoZSBjdXJyZW50IGxpc3Qgb2YgbW92aWVzXG4gICAgICBpZiAoZGF0YT8ucmVzdWx0cz8ubGVuZ3RoKSB7XG4gICAgICAgIHNldE1vdmllcygocHJldk1vdmllcykgPT4gWy4uLnByZXZNb3ZpZXMsIC4uLmRhdGEucmVzdWx0c10pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW9yZSBtb3ZpZXM6XCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEludGVyc2VjdGlvbk9ic2VydmVyIHRvIHRyaWdnZXIgbG9hZCBtb3JlIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSBib3R0b21cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nICYmIGlzTG9hZE1vcmUgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgICBsb2FkTW9yZU1vdmllcygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb290OiBudWxsLCAvLyBVc2UgdGhlIHZpZXdwb3J0XG4gICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIHRocmVzaG9sZDogMS4wLCAvLyBUcmlnZ2VyIHdoZW4gdGhlIGVsZW1lbnQgaXMgZnVsbHkgdmlzaWJsZVxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAobG9hZE1vcmVUcmlnZ2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobG9hZE1vcmVUcmlnZ2VyUmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAobG9hZE1vcmVUcmlnZ2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGxvYWRNb3JlVHJpZ2dlclJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbaXNMb2FkTW9yZSwgbG9hZGluZ10pOyAvLyBSZS1ydW4gdGhlIGVmZmVjdCB3aGVuIGBpc0xvYWRNb3JlYCBvciBgbG9hZGluZ2AgY2hhbmdlc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZXNfcGFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllc193cmFwcGVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyX3NlY3Rpb259PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZXNfaGVhZGVyfT5Qb3B1bGFyIE1vdmllczwvaDI+XG4gICAgICAgICAgPE1vdmllc0ZpbHRlcnNcbiAgICAgICAgICAgIGNvdW50cmllcz17Y291bnRyaWVzfVxuICAgICAgICAgICAgc2V0TW92aWVzPXtzZXRNb3ZpZXN9XG4gICAgICAgICAgICBjdXJyZW50VVJMPXtjdXJyZW50VVJMfVxuICAgICAgICAgICAgc2V0Q3VycmVudFVSTD17c2V0Q3VycmVudFVSTH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnBvcHVsYXJfbW92aWVzfT5cbiAgICAgICAgICB7bW92aWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwPk5vIG1vdmllcyBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIG1vdmllcy5tYXAoKG1vdmllKSA9PiA8TW92aWVDYXJkIGtleT17bW92aWUuaWR9IG1vdmllPXttb3ZpZX0gLz4pXG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshaXNMb2FkTW9yZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiAke3N0eWxlcy5sb2FkX21vcmVfYnV0dG9ufWB9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvYWRNb3JlKHRydWUpfSAvLyBPbmNlIGNsaWNrZWQsIGFsbG93IGF1dG8tbG9hZGluZ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCJMb2FkIE1vcmVcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogTG9hZCBtb3JlIHRyaWdnZXIgZm9yIGF1dG9tYXRpYyBsb2FkaW5nICovfVxuICAgICAgICAgIDxkaXYgcmVmPXtsb2FkTW9yZVRyaWdnZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRfbW9yZV90cmlnZ2VyfT48L2Rpdj5cblxuICAgICAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcgbW9yZSBtb3ZpZXMuLi48L3A+fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UTURCX0FQSV9LRVl9YCxcbiAgICB9LFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbW92aWVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2xhbmd1YWdlPWVuLVVTJnBhZ2U9MVwiLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgY29uc3QgcG9wdWxhck1vdmllcyA9IGF3YWl0IG1vdmllc1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGNvdW50cmllc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvY29uZmlndXJhdGlvbi9jb3VudHJpZXM/bGFuZ3VhZ2U9ZW4tVVNcIixcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IGNvdW50cmllc1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3B1bGFyTW92aWVzLFxuICAgICAgICBjb3VudHJpZXMsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcG9wdWxhck1vdmllczogeyByZXN1bHRzOiBbXSB9LFxuICAgICAgICBjb3VudHJpZXM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIk1vdmllc0ZpbHRlcnMiLCJNb3ZpZUNhcmQiLCJNb3ZpZXMiLCJwb3B1bGFyTW92aWVzIiwicmVzdWx0cyIsImNvdW50cmllcyIsIm1vdmllcyIsInNldE1vdmllcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFnZSIsInNldFBhZ2UiLCJjdXJyZW50VVJMIiwic2V0Q3VycmVudFVSTCIsImlzTG9hZE1vcmUiLCJzZXRJc0xvYWRNb3JlIiwibG9hZE1vcmVUcmlnZ2VyUmVmIiwibGVuZ3RoIiwibG9hZE1vcmVNb3ZpZXMiLCJkYXRhIiwibmV3UGFnZSIsIm5ld1VSTCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19UTURCX0FQSV9LRVkiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInByZXZNb3ZpZXMiLCJlcnJvciIsImNvbnNvbGUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1vdmllc19wYWdlIiwibW92aWVzX3dyYXBwZXIiLCJzZWN0aW9uIiwiZmlsdGVyX3NlY3Rpb24iLCJoMiIsIm1vdmllc19oZWFkZXIiLCJwb3B1bGFyX21vdmllcyIsInAiLCJtYXAiLCJtb3ZpZSIsImlkIiwiYnV0dG9uIiwibG9hZF9tb3JlX2J1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsInJlZiIsImxvYWRfbW9yZV90cmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/movie.tsx\n"));

/***/ })

});