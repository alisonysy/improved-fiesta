webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./snippets/sectionHead.js":
/*!*********************************!*\
  !*** ./snippets/sectionHead.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SectionHead(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.sectionActive),
      active = _useState[0],
      setActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.handleToggle(active);
  }, [active]);
  return __jsx("div", {
    style: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5em 1em 1 1em'
    }
  }, __jsx("div", {
    style: {
      fontSize: '20px'
    }
  }, props.headerTxt), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return setActive(!active);
    },
    ariaExpanded: active,
    ariaControls: "basic-collapsible"
  }, __jsx("span", {
    style: {
      transition: 'all .3s ease-in'
    }
  }, active ? __jsx("svg", {
    viewBox: "0 0 448 512",
    "aria-hidden": "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    style: {
      height: '1.5em',
      width: '1.5em'
    }
  }, __jsx("path", {
    d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z",
    fill: "#000"
  })) : __jsx("svg", {
    viewBox: "0 0 448 512",
    "aria-hidden": "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    style: {
      height: '1.5em',
      width: '1.5em'
    }
  }, __jsx("path", {
    d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
    fill: "#000"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SectionHead);

/***/ })

})
//# sourceMappingURL=index.js.98c0fb9fe4fedd27963f.hot-update.js.map