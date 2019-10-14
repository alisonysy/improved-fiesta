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
    _this.parseCssString = _this.parseCssString.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomCodePage, [{
    key: "handleCustomCode",
    value: function handleCustomCode(val) {
      var scriptStart = val.indexOf('<script>'),
          scriptEnd = val.indexOf('</script>'),
          styleStart = val.indexOf('<style>'),
          styleEnd = val.indexOf('</style>');
      var scriptTxt, styleTxt;

      if (scriptStart !== -1 && scriptEnd !== -1) {
        scriptTxt = val.slice(scriptStart + 8, scriptEnd).trim();
      }

      if (styleStart !== -1 && styleEnd !== -1) {
        styleTxt = val.slice(styleStart + 7, styleEnd).trim();
      }

      this.parseCssString(styleTxt);
      this.props.handleCustomCode(scriptTxt, styleTxt);
    }
  }, {
    key: "parseCssString",
    value: function parseCssString(code) {
      var style = code,
          selectors = [];
      var styleArr = style.split('}');
      var sl_regExp = /(.+)\s*{/;
      styleArr.map(function (i) {
        if (i.trim() !== '') {
          var re = i.match(sl_regExp);

          if (re) {
            var selector = re[1];
            var propStr = i.slice(selector.length + 1);
            propStr = propStr.split(';');
            console.log('property string', propStr);
          } // let prop_name = re[1], prop_val=re[2];
          // selectors.push({[prop_name]:prop_val})  

        }
      }); // console.log(selectors);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        onSubmit: function onSubmit(v) {
          return console.log(v);
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["FormLayout"], null, __jsx("div", {
        style: {
          fontSize: '18px',
          padding: '1.5em 0 0 1em'
        }
      }, "Custom Codes"), __jsx("textarea", {
        rows: "10",
        cols: "80",
        placeholder: "Please put your custom codes here...",
        style: {
          marginLeft: '1em'
        },
        onChange: function onChange(evt) {
          evt.persist();

          _this2.handleCustomCode(evt.nativeEvent.target.value);
        }
      }))));
    }
  }]);

  return CustomCodePage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomCodePage);

/***/ })

})
//# sourceMappingURL=index.js.6c763940a333ecbf0a98.hot-update.js.map