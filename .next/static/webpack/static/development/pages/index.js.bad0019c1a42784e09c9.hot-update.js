webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/templateStyle.js":
/*!*************************************!*\
  !*** ./components/templateStyle.js ***!
  \*************************************/
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


function TemplateStyleItem(props) {
  var bgColor = props.bg;
  var ftColor = props.ft;
  var marginRt = props.mgRt ? '1em' : '0';
  var wid = props.mgRt ? '48%' : '50%';
  return __jsx("li", {
    style: {
      listStyleType: 'none',
      width: wid,
      textAlign: 'center',
      padding: '8px 0',
      marginTop: '5px',
      marginRight: marginRt,
      backgroundColor: bgColor,
      color: ftColor
    }
  }, props.styleT);
}

var TemplateStyle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TemplateStyle, _React$Component);

  function TemplateStyle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemplateStyle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TemplateStyle).call(this, props));
    _this.state = {};
    _this.handleClicking = _this.handleClicking.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.tpItem = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TemplateStyle, [{
    key: "handleClicking",
    value: function handleClicking() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var tpUl = this.tpItem.current;
      var tpItems = tpUl.querySelectorAll('li');
      console.log(tpItems);
      tpItems.map(function (i) {
        i.addEventListener('click', function (e) {
          console.log(e);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], null, __jsx("ul", {
        style: {
          display: 'flex',
          flexFlow: 'row wrap',
          padding: '0 2em',
          marginTop: '5px'
        },
        ref: this.tpItem
      }, __jsx(TemplateStyleItem, {
        styleT: "Basic",
        bg: "#000",
        ft: "#fff",
        mgRt: "y"
      }), __jsx(TemplateStyleItem, {
        styleT: "Havest Good",
        bg: "rgb(255, 240, 165)",
        ft: "rgb(182, 73, 38)"
      }), __jsx(TemplateStyleItem, {
        styleT: "Fairy Tale",
        bg: "rgb(255, 217, 210)",
        ft: "rgb(127, 77, 67)",
        mgRt: "y"
      }), __jsx(TemplateStyleItem, {
        styleT: "Shades of Grey",
        bg: "rgb(76, 76, 76)",
        ft: "rgb(204, 204, 204)"
      })));
    }
  }]);

  return TemplateStyle;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TemplateStyle);

/***/ })

})
//# sourceMappingURL=index.js.bad0019c1a42784e09c9.hot-update.js.map