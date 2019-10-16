webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./snippets/previewBar.js":
/*!********************************!*\
  !*** ./snippets/previewBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/fonts.css */ "./css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_10__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;
 // import '../snippets/demo.css';

var PreviewBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PreviewBar, _React$Component);

  function PreviewBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PreviewBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(PreviewBar).call(this, props));
    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.barConfig, {
      styleCode: ''
    });
    _this.htmlRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.firstLineRefwG = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.firstLineRefGA = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.closeBtn = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.topBar = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.injectHtml = _this.injectHtml.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.setAnimation = _this.setAnimation.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.renderBarFirstLine = _this.renderBarFirstLine.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.renderInnerBar = _this.renderInnerBar.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleLinkContainer = _this.handleLinkContainer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PreviewBar, [{
    key: "setAnimation",
    value: function setAnimation(el, childToQuery) {
      var keyframeEl = document.createElement('style');
      keyframeEl.textContent = "\n      @keyframes infiniteSlide{\n          from {\n            margin-top:0\n          }\n          to {\n            margin-top: -22px\n          }\n      }\n    ";
      el.insertAdjacentElement('afterbegin', keyframeEl);
      el.setAttribute('style', "padding:0;margin:0;list-style:none;transition:all 2.5s;animation:infiniteSlide 2.5s;");
      el.addEventListener('animationend', function () {
        el.style.animation = '';
        void el.offsetWidth;
        var elNode = el.children[0].parentNode;
        var firstChild = elNode.querySelector(childToQuery);
        var clonedFirstChild = firstChild.cloneNode(true);
        elNode.insertAdjacentElement('beforeend', clonedFirstChild);
        elNode.removeChild(firstChild);
        el.style.animation = 'infiniteSlide 2.5s';
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // handle injected html
      this.handleLinkContainer(this.htmlRef);
      this.handleLinkContainer(this.firstLineRefwG);
      this.handleLinkContainer(this.firstLineRefGA); // handle closing action

      var closeBtn = this.closeBtn.current;
      closeBtn.addEventListener('click', function (e) {// #todo add script when appending to page to hide the bar element
      });
    }
  }, {
    key: "handleLinkContainer",
    value: function handleLinkContainer(sp) {
      if (sp.current) {
        var injectedHtmlElCollection = sp.current.children; // object

        for (var n = 0; n < injectedHtmlElCollection.length; n++) {
          var el = injectedHtmlElCollection[n];

          if (el.classList.contains('link-container')) {
            el.setAttribute("style", "height:22px;overflow:hidden;line-height:22px;");

            if (el.children[0] && el.children[0].tagName === 'UL') {
              var ul = el.children[0];
              ul.setAttribute('style', "margin:0;");

              if (ul.children[1]) {
                this.setAnimation(ul, 'li');
              }
            }
          }
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleLinkContainer(this.htmlRef);
      this.handleLinkContainer(this.firstLineRefwG);
      this.handleLinkContainer(this.firstLineRefGA);
      console.log('finished top bar', this.topBar.current);
    }
  }, {
    key: "injectHtml",
    value: function injectHtml(html) {
      var style_basic = {
        textAlign: 'center'
      };
      return __jsx("span", {
        dangerouslySetInnerHTML: {
          __html: html
        },
        ref: this.htmlRef,
        style: style_basic
      });
    }
  }, {
    key: "renderBarFirstLine",
    value: function renderBarFirstLine(barConfig) {
      var goal = barConfig.goal,
          inpTxt = barConfig.inpTxt,
          spColor = barConfig.spColor;
      return __jsx("span", null, __jsx("span", {
        dangerouslySetInnerHTML: {
          __html: inpTxt
        },
        ref: this.firstLineRefwG
      }), __jsx("span", {
        style: {
          color: spColor,
          fontWeight: 400
        }
      }, "$", goal));
    }
  }, {
    key: "renderInnerBar",
    value: function renderInnerBar(barConfig) {
      var inpTxt = barConfig.inpTxt,
          addedHtml = barConfig.addedHtml,
          goal = barConfig.goal;
      return __jsx("div", {
        id: "ptk_bar",
        className: "ptkBar"
      }, goal && Math.abs(goal) > -1 ? this.renderBarFirstLine(barConfig) : __jsx("span", {
        dangerouslySetInnerHTML: {
          __html: inpTxt
        },
        ref: this.firstLineRefGA
      }), addedHtml ? this.injectHtml(addedHtml) : null, __jsx("div", {
        style: {
          position: 'absolute',
          top: '8px',
          right: '8px',
          cursor: 'pointer'
        },
        ref: this.closeBtn
      }, "X"));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          margin: '20px 0'
        }
      }, __jsx("div", {
        ref: this.topBar
      }, this.props.barLink.url.length !== 0 ? __jsx("a", {
        href: this.props.barLink.url,
        target: this.props.barLink.openNew ? "_blank" : "_self",
        style: {
          textDecoration: 'none',
          color: 'initial'
        }
      }, this.renderInnerBar(this.props.barConfig)) : this.renderInnerBar(this.props.barConfig)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var ifChange = false;
      console.log(nextProps.barConfig.goal);

      for (var _i = 0, _Object$entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(nextProps.barConfig); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            val = _Object$entries$_i[1];

        if (nextProps.barConfig[key] !== prevState[key]) {
          console.log('-----------------------', nextProps.barConfig[key]);
          ifChange = true;
        }
      }

      if (nextProps.codes.customCode.style && nextProps.codes.customCode.style !== prevState.styleCode) {
        PreviewBar.injectStylesheet(nextProps.barConfig, nextProps.codes.customCode.style);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState, {
          styleCode: nextProps.codes.customCode.style
        });
      }

      if (ifChange) {
        PreviewBar.injectStylesheet(nextProps.barConfig, nextProps.codes.customCode.style);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState, nextProps.barConfig);
      } else {
        return null;
      }
    }
  }, {
    key: "injectStylesheet",
    value: function injectStylesheet(barConfig, styleCode) {
      var ftColor = barConfig.ftColor,
          opacity = barConfig.opacity,
          bgImg = barConfig.bgImg,
          fontFamily = barConfig.fontFamily,
          paddingUpDown = barConfig.paddingUpDown,
          fontSize = barConfig.fontSize;
      var bar = document.getElementById('ptk_bar');
      var bars = document.querySe;
      console.log('inject stylesheet executed', bar);
      var bgColor = barConfig.bgColor,
          imgSize = bgImg.size,
          imgUrl;
      var padding = paddingUpDown ? "".concat(paddingUpDown, "px 5px") : '8px 5px';

      if (opacity.toString() !== '100') {
        bgColor = PreviewBar._hexToRgba(bgColor, opacity);
      }

      if (imgSize) {
        imgUrl = 'url("' + window.URL.createObjectURL(bgImg) + '")';
      }

      var styleSheet = document.createElement('style');
      var al_stylesheet = bar.parentElement.querySelector('style');
      styleSheet.textContent = "\n      #ptk_bar{\n        padding:".concat(padding, ";\n        font-size:").concat(fontSize ? fontSize + 'px' : '18px', ";\n        line-height:22.5px;\n        text-align:center;\n        position:relative;\n        background-color:").concat(bgColor, ";\n        color:").concat(ftColor, ";\n        background-image:").concat(imgUrl, ";\n        font-family:").concat(fontFamily, ";\n      }\n    ");

      if (styleCode && styleCode.length !== 0) {
        styleSheet.textContent += styleCode;
      }

      if (!al_stylesheet) {
        console.log('no existing stylesheet');
        console.log(bar);
        bar.parentNode.insertBefore(styleSheet, bar);
      } else {
        console.log('there is existing stylesheet');
        console.log(bar);
        bar.parentNode.replaceChild(styleSheet, al_stylesheet);
      }
    }
  }, {
    key: "_hexToRgba",
    value: function _hexToRgba(h, op) {
      var r = 0,
          g = 0,
          b = 0; // 3 digits

      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3]; // 6 digits
      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }

      return "rgba(" + +r + "," + +g + "," + +b + "," + op / 100 + ")";
    }
  }]);

  return PreviewBar;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PreviewBar);

/***/ })

})
//# sourceMappingURL=index.js.698e1b3a07913d8735ca.hot-update.js.map