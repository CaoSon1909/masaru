"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);


const Theme = ()=>{
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "dark-light-wrapper",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: "dark-light-checkbox",
                className: "dark-light-label",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "checkbox",
                        className: "dark-light-checkbox",
                        id: "dark-light-checkbox"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "switcher swith-to-light",
                        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                        children: "S\xe1ng"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "switcher swith-to-dark",
                        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                        children: "Tối"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dark-light-ball",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "dark-light-ball-inner",
                            onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "sun-icon ri-sun-fill",
                                    onClick: ()=>setTheme("dark")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "moon-icon ri-moon-fill",
                                    onClick: ()=>setTheme("light")
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);


/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2917);
/* harmony import */ var _components_common_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7271);
/* harmony import */ var _contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6275);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7569);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_6__]);
_redux_store__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






if (false) {}





function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        sal_js__WEBPACK_IMPORTED_MODULE_4___default()({
            threshold: 0.1,
            once: true
        });
    }, [
        router.asPath
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        sal_js__WEBPACK_IMPORTED_MODULE_4___default()();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                font: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
                store: _redux_store__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                    defaultTheme: "light",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_8__/* .MouseMoveProvider */ .u9, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QA": () => (/* binding */ sign_out),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bT": () => (/* binding */ user_info),
/* harmony export */   "jb": () => (/* binding */ add_user)
/* harmony export */ });
/* unused harmony exports authSlice, get_user */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(677);


const initialState = {
    allUsers: [],
    user: {}
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        add_user: (state, { payload  })=>{
            state.allUsers.push(payload);
            state.user = payload;
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        user_info: (state, { payload  })=>{
            state.user = payload;
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        sign_out: (state, { payload  })=>{
            state.user = {};
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        get_user: (state, { payload  })=>{
            state.user = (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$)("user");
        }
    }
});
const { user_info , add_user , sign_out , get_user  } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 5398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports courseSlice, single_product, selectCourses */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1036);


const initialState = {
    courses: _data__WEBPACK_IMPORTED_MODULE_1__/* .course_data */ .sG,
    course: {}
};
const courseSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "course",
    initialState,
    reducers: {
        single_product: (state, { payload  })=>{}
    }
});
const { single_product  } = courseSlice.actions;
const selectCourses = (state)=>state.courses.courses;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (courseSlice.reducer);


/***/ }),

/***/ 9014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k9": () => (/* binding */ add_category)
/* harmony export */ });
/* unused harmony export eventSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const eventSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "event",
    initialState: {
        categories: []
    },
    reducers: {
        add_category: (state, { payload  })=>{
            if (payload.changeType === "remove") {
                state.categories = state.categories.filter((category)=>category !== payload.item);
            } else if (payload.changeType === "added") {
                state.categories.push(payload.item);
            }
        }
    }
});
const { add_category  } = eventSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventSlice.reducer);


/***/ }),

/***/ 2917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_course_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5398);
/* harmony import */ var _features_cart_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8958);
/* harmony import */ var _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7891);
/* harmony import */ var _features_event_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9014);
/* harmony import */ var _features_filter_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1768);
/* harmony import */ var _features_auth_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4249);
/* harmony import */ var _features_search_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_cart_slice__WEBPACK_IMPORTED_MODULE_2__, _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_3__]);
([_features_cart_slice__WEBPACK_IMPORTED_MODULE_2__, _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    auth: _features_auth_slice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
    courses: _features_course_slice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    cart: _features_cart_slice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    wishlist: _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
    event: _features_event_slice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    filter: _features_filter_slice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
    search: _features_search_slice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("sal.js");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6275,9173,1768], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();