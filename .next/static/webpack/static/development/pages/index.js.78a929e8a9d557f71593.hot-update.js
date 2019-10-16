webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/customCode.js":
/*!**********************************!*\
  !*** ./components/customCode.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var CustomCodePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CustomCodePage, _React$Component);

  function CustomCodePage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CustomCodePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CustomCodePage).call(this, props));
    _this.state = {
      customCode: ''
    };
    _this.handleCustomCode = _this.handleCustomCode.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.parseCssString = _this.parseCssString.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CustomCodePage, [{
    key: "handleCustomCode",
    value: function handleCustomCode(val) {
      var self = this;
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

      ;

      if (this.state.timer) {
        clearTimeout(this.state.timer);
      }

      ;
      this.setState(function () {
        var timerN = setTimeout(function () {
          console.log('codes are sent');
          self.props.handleCustomCode(scriptTxt, styleTxt);
        }, 5000);
        return {
          timer: timerN
        };
      });
    }
  }, {
    key: "parseCssString",
    value: function parseCssString(code) {
      var style = code,
          selectors = [];
      if (!style) return;
      var styleArr = style.split('}');
      var sl_regExp = /(.+)\s*{/;
      styleArr.map(function (i) {
        if (i.trim() !== '') {
          var re = i.match(sl_regExp);

          if (re) {
            var selector = re[1],
                selectorObj = {};
            var propStr = i.slice(selector.length + 1);
            propStr = propStr.split(';');

            if (propStr.length) {
              propStr = propStr.map(function (i) {
                var prop_name,
                    prop_val,
                    reg = /.+/; //handle extra {

                var a = i.indexOf('{');
                a !== -1 ? i = i.slice(a + 1) : i = i; //handle carriage return

                if (!i.match(reg)) return;
                i = i.match(reg)[0]; //handle colons inside property value;

                var notUrl = /:[^\/]/;
                var re_notUrl = i.match(notUrl);
                if (!re_notUrl) return;
                prop_name = i.substring(0, re_notUrl.index);
                prop_val = i.substring(re_notUrl.index + 1);
                selectorObj[prop_name] = prop_val;
              });
              selectors.push(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selector, selectorObj));
            }
          }
        }
      });
      return selectors;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], null, __jsx("div", {
        style: {
          fontSize: '18px',
          padding: '1.5em 0 0 1em'
        }
      }, "Custom Codes"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }), __jsx("textarea", {
        rows: "10",
        cols: "80",
        placeholder: "Please put your custom codes here...",
        style: {
          marginLeft: '1em',
          border: '1px solid #bbb',
          borderRadius: '5px',
          width: 'calc(100% - 2em)',
          marginBottom: '2em'
        },
        onChange: function onChange(evt) {
          evt.persist();

          _this2.setState({
            timer: null
          });

          _this2.handleCustomCode(evt.nativeEvent.target.value);
        }
      }))));
    }
  }]);

  return CustomCodePage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomCodePage);

/***/ })

})
//# sourceMappingURL=index.js.78a929e8a9d557f71593.hot-update.js.map