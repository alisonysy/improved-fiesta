webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/preview.js":
/*!*******************************!*\
  !*** ./components/preview.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _snippets_previewBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../snippets/previewBar */ "./snippets/previewBar.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var PreviewPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PreviewPage, _React$Component);

  function PreviewPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PreviewPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PreviewPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handle", void 0);

    _this.state = {
      scriptCode: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PreviewPage, [{
    key: "render",
    value: function render() {
      var _this$props$contentCo = this.props.contentConfig,
          barTxtConfig = _this$props$contentCo.barTxtConfig,
          barFrShGl = _this$props$contentCo.barFrShGl,
          barLink = _this$props$contentCo.barLink;
      var bgImg = this.props.bgImg;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx("div", {
        style: {
          fontSize: '18px',
          padding: '1.5em 0 0 1em'
        }
      }, "Preview"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"].Section, null, barFrShGl ? __jsx("div", null, __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        barConfig: {
          bgColor: this.props.styleConfig.colorConfig.bgColor,
          ftColor: this.props.styleConfig.colorConfig.txtColor,
          spColor: this.props.styleConfig.colorConfig.specialColor,
          opacity: this.props.styleConfig.colorConfig.bgOpacity,
          inpTxt: barTxtConfig.initialMsg1,
          goal: barFrShGl,
          addedHtml: barTxtConfig.initialMsg2,
          bgImg: bgImg,
          fontFamily: this.props.styleConfig.fontConfig.fontFamily,
          paddingUpDown: this.props.styleConfig.fontConfig.barPadding,
          fontSize: this.props.styleConfig.fontConfig.fontSize
        },
        barLink: barLink,
        codes: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.customCode)
      }), __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        barConfig: {
          bgColor: this.props.styleConfig.colorConfig.bgColor,
          ftColor: this.props.styleConfig.colorConfig.txtColor,
          spColor: this.props.styleConfig.colorConfig.specialColor,
          opacity: this.props.styleConfig.colorConfig.bgOpacity,
          inpTxt: barTxtConfig.prgMsg1,
          goal: barFrShGl - 1,
          addedHtml: barTxtConfig.prgMsg2,
          bgImg: bgImg,
          fontFamily: this.props.styleConfig.fontConfig.fontFamily,
          paddingUpDown: this.props.styleConfig.fontConfig.barPadding,
          fontSize: this.props.styleConfig.fontConfig.fontSize
        },
        barLink: barLink,
        codes: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.customCode)
      })) : null, __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        barConfig: {
          bgColor: this.props.styleConfig.colorConfig.bgColor,
          ftColor: this.props.styleConfig.colorConfig.txtColor,
          spColor: this.props.styleConfig.colorConfig.specialColor,
          opacity: this.props.styleConfig.colorConfig.bgOpacity,
          inpTxt: barTxtConfig.achievedMsg,
          bgImg: bgImg,
          fontFamily: this.props.styleConfig.fontConfig.fontFamily,
          paddingUpDown: this.props.styleConfig.fontConfig.barPadding,
          fontSize: this.props.styleConfig.fontConfig.fontSize
        },
        barLink: barLink,
        codes: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.customCode)
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var scriptC = nextProps.customCode.customCode.script;

      if (scriptC && scriptC !== prevState.scriptCode) {
        PreviewPage.injectScript(scriptC);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
          scriptCode: scriptC
        });
      } else {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
          scriptCode: null
        });
      }
    }
  }, {
    key: "injectScript",
    value: function injectScript(scriptCode) {
      var scriptEl = document.createElement('script');
      scriptEl.setAttribute('data-custom', '');
      var al_script = document.body.querySelector('script[data-custom]');

      if (scriptCode && scriptCode.length !== 0) {
        scriptEl.textContent = "\n        try{\n          ".concat(scriptCode, "\n        }catch(err){\n          console.error(err);\n        }\n      ");
      }

      if (al_script) {
        document.body.removeChild(al_script);
      }

      document.body.appendChild(scriptEl);
    }
  }]);

  return PreviewPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PreviewPage);

/***/ })

})
//# sourceMappingURL=index.js.0e3783985f135e9d0312.hot-update.js.map