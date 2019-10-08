webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/customCode.js":
/*!**********************************!*\
  !*** ./components/customCode.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var CustomCodePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomCodePage, _React$Component);

  function CustomCodePage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomCodePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomCodePage).call(this, props));
    _this.state = {
      customCode: ''
    };
    _this.handleCustomCode = _this.handleCustomCode.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomCodePage, [{
    key: "handleCustomCode",
    value: function handleCustomCode(val) {
      console.log(val);
      this.setState(function () {
        return {
          customCode: val
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        onSubmit: function onSubmit(v) {
          return console.log(v);
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
        size: "small"
      }, "Custom code"), __jsx("textarea", {
        rows: "10",
        cols: "80",
        placeholder: "Please put your custom codes here...",
        style: {
          marginLeft: '10px'
        }
      }))));
    }
  }]);

  return CustomCodePage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomCodePage);

/***/ })

})
//# sourceMappingURL=index.js.d061a2203e52378f84a3.hot-update.js.map