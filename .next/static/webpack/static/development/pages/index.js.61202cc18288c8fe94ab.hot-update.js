webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/preview.js":
/*!*******************************!*\
  !*** ./components/preview.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _snippets_previewBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snippets/previewBar */ "./snippets/previewBar.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var PreviewPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PreviewPage, _React$Component);

  function PreviewPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PreviewPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PreviewPage).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PreviewPage, [{
    key: "render",
    value: function render() {
      console.log(this.props.contentConfig);
      var _this$props$contentCo = this.props.contentConfig,
          barTxtConfig = _this$props$contentCo.barTxtConfig,
          barFrShGl = _this$props$contentCo.barFrShGl;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["FormLayout"], null, __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        barConfig: {
          bgColor: '#000',
          ftColor: '#fff',
          inpTxt: barTxtConfig.initialMsg1,
          goal: barFrShGl,
          addedHtml: '<div><a>Hello</a></div>'
        }
      }), __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        barConfig: {
          bgColor: '#000',
          ftColor: '#fff',
          inpTxt: barTxtConfig.prgMsg1,
          goal: barFrShGl - 1,
          addedHtml: '<div class="link-container styudy" data-opt="thisOption is artificial" style="height:45px;"><ul><li><a href="https://www.baidu.com">Hello</a></li><li></ul></div>'
        }
      }), __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        barConfig: {
          bgColor: '#ab4e3d',
          ftColor: '#fff',
          inpTxt: barTxtConfig.achievedMsg,
          addedHtml: '<a>Hello</a>'
        }
      }))));
    }
  }]);

  return PreviewPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PreviewPage);

/***/ })

})
//# sourceMappingURL=index.js.61202cc18288c8fe94ab.hot-update.js.map