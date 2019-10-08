webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/styleConfig.js":
/*!***********************************!*\
  !*** ./components/styleConfig.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../snippets/imageDropZone */ "./snippets/imageDropZone.js");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/fonts.css */ "./css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_12__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





function BackgroundSetting(props) {
  var rgbToHex = function rgbToHex(rgb) {
    if (rgb.includes('#')) return rgb;
    var regExp = /\(\s*(\d+),\s*(\d+),\s*(\d+)\)/;
    var re = rgb.match(regExp);

    var r = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8___default()(re[1]).toString(16),
        g = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8___default()(re[2]).toString(16),
        b = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8___default()(re[3]).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('#000'),
      bgColor = _useState[0],
      setBgColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('100'),
      bgOpacity = _useState2[0],
      setBgOpacity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('#b31219'),
      txtColor = _useState3[0],
      setTxtColor = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('#fff'),
      specialColor = _useState4[0],
      setSpecialColor = _useState4[1];

  var bgColorFrmProps = props.colorConfig.bgColor,
      txtColorFrmProps = props.colorConfig.txtColor;
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    setTxtColor(rgbToHex(txtColorFrmProps));
    props.handleStyleConfig({
      bgColor: bgColor,
      bgOpacity: bgOpacity,
      txtColor: txtColor,
      specialColor: specialColor
    }, undefined);
  }, [bgColor, bgOpacity, txtColor, specialColor]);
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    setBgColor(rgbToHex(bgColorFrmProps));
  }, [bgColorFrmProps]);
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {}, [, txtColorFrmProps]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Background color:", bgColor), __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: bgColor
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
    value: bgColor,
    onChange: function onChange(nw) {
      return setBgColor(nw);
    }
  })), __jsx("div", null, __jsx("h3", null, "Background opacity:"), __jsx("div", {
    style: {
      display: 'inline-block'
    }
  }, bgOpacity), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
    value: bgOpacity,
    onChange: function onChange(nw) {
      return setBgOpacity(nw);
    },
    type: "number",
    helpText: "0 is transparent, 100 is opaque."
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Text color:", txtColor), __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: txtColor
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
    value: txtColor,
    onChange: function onChange(nw) {
      return setTxtColor(nw);
    }
  })), __jsx("div", null, __jsx("h3", null, "Special text color:"), __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: specialColor
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
    value: specialColor,
    onChange: function onChange(nw) {
      return setSpecialColor(nw);
    }
  }))));
}

function Fonts(props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(18),
      fontSize = _useState5[0],
      setFontSize = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(10),
      padding = _useState6[0],
      setPadding = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('sans-serif'),
      fontFam = _useState7[0],
      setFontFam = _useState7[1];

  var handleFontFam = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (val) {
    setFontFam(val);
    props.handleStyleConfig(undefined, {
      fontFamily: val
    });
  }, [fontFam]);
  var handleFontSize = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (val) {
    setFontSize(val);
    props.handleStyleConfig(undefined, {
      fontSize: val
    });
  }, []);
  var handlePadding = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (val) {
    setPadding(val);
    props.handleStyleConfig(undefined, {
      barPadding: val
    });
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"].Section, null, __jsx("div", null, "Font family:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return handleFontFam('Montserrat');
    }
  }, "Montserrat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    onClick: function onClick() {
      return handleFontFam('sans-serif');
    }
  }, "Sans serif"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
    label: "Font size:",
    suffix: "px",
    type: "number",
    value: fontSize,
    onChange: handleFontSize
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
    label: "Bar padding:",
    suffix: "px",
    type: "number",
    value: padding,
    onChange: handlePadding
  }));
}

var StyleConfigPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(StyleConfigPage, _React$Component);

  function StyleConfigPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StyleConfigPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(StyleConfigPage).call(this, props));
    _this.state = {
      colorConfig: {},
      fontConfig: {},
      bgImg: {}
    };
    _this.handleStyleConfig = _this.handleStyleConfig.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.uploadBgImg = _this.uploadBgImg.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StyleConfigPage, [{
    key: "handleStyleConfig",
    value: function handleStyleConfig(colorCf, fontCf) {
      this.setState(function (state) {
        if (colorCf === undefined) {
          fontCf = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.fontConfig, fontCf);
          return {
            colorConfig: state.colorConfig,
            fontConfig: fontCf
          };
        } else if (fontCf === undefined) {
          colorCf = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.colorConfig, colorCf);
          return {
            colorConfig: colorCf,
            fontConfig: state.fontConfig
          };
        }
      }, function () {
        this.props.handleStyleConfig(this.state.colorConfig, this.state.fontConfig);
      });
    }
  }, {
    key: "uploadBgImg",
    value: function uploadBgImg(bgFile) {
      this.setState({
        bgImg: bgFile
      }, function () {
        this.props.uploadBgImg(this.state.bgImg);
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('passed from index', this.props.styleConfig);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["DisplayText"], null, "Style Configuration"), __jsx(BackgroundSetting, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        handleStyleConfig: this.handleStyleConfig
      }, this.props.styleConfig)), __jsx(_snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_11__["default"], {
        uploadBgImg: this.uploadBgImg
      }), __jsx(Fonts, {
        handleStyleConfig: this.handleStyleConfig
      }))));
    }
  }]);

  return StyleConfigPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StyleConfigPage);

/***/ })

})
//# sourceMappingURL=index.js.d15878ad5fbaca244400.hot-update.js.map