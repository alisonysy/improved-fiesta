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
      customCode: '',
      sectionActive: true
    };
    _this.handleCustomCode = _this.handleCustomCode.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomCodePage, [{
    key: "handleCustomCode",
    value: function handleCustomCode(val, type) {
      var self = this;
      var scriptTxt, styleTxt;

      switch (type) {
        case 'style':
          styleTxt = val;
          break;

        case 'script':
          scriptTxt = va;
          break;
      }

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
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["FormLayout"], null, __jsx("div", null, __jsx("div", {
        style: {
          fontSize: '18px',
          padding: '1.5em 0 0 1em'
        }
      }, "Custom Codes"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: function onClick() {
          return _this2.setState(function () {
            return {
              sectionActive: !_this2.state.sectionActive
            };
          });
        },
        ariaExpanded: this.state.sectionActive,
        ariaControls: "basic-collapsible"
      }, "f077")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Collapsible"], {
        open: this.state.sectionActive
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"].Section, null, __jsx("div", {
        style: {
          fontSize: '16px',
          padding: '0 0 7px 1em'
        }
      }, "Style"), __jsx("div", {
        style: {
          fontSize: '14px',
          padding: '0 0 4px 1em'
        }
      }, "<style>"), __jsx("textarea", {
        rows: "10",
        cols: "80",
        placeholder: "Please put your custom codes here...",
        style: {
          marginLeft: '1em',
          border: '1px solid #bbb',
          borderRadius: '5px',
          width: 'calc(100% - 2em)',
          marginBottom: '5px'
        },
        onChange: function onChange(evt) {
          evt.persist();

          _this2.setState({
            timer: null
          });

          _this2.handleCustomCode(evt.nativeEvent.target.value, 'style');
        }
      }), __jsx("div", {
        style: {
          fontSize: '14px',
          padding: '0 0 0 1em'
        }
      }, "</style>")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"].Section, null, __jsx("div", {
        style: {
          fontSize: '16px',
          padding: '0 0 7px 1em'
        }
      }, "Script"), __jsx("div", {
        style: {
          fontSize: '14px',
          padding: '0 0 4px 1em'
        }
      }, "<script>"), __jsx("textarea", {
        rows: "10",
        cols: "80",
        placeholder: "Please put your custom codes here...",
        style: {
          marginLeft: '1em',
          border: '1px solid #bbb',
          borderRadius: '5px',
          width: 'calc(100% - 2em)',
          marginBottom: '5px'
        },
        onChange: function onChange(evt) {
          evt.persist();

          _this2.setState({
            timer: null
          });

          _this2.handleCustomCode(evt.nativeEvent.target.value, 'script');
        }
      }), __jsx("div", {
        style: {
          fontSize: '14px',
          padding: '0 0 0 1em'
        }
      }, "</script>"))))));
    }
  }]);

  return CustomCodePage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomCodePage);

/***/ })

})
//# sourceMappingURL=index.js.5342c8da417f1e21cb8d.hot-update.js.map