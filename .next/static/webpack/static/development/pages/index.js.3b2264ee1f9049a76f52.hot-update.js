webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./snippets/previewBar.js":
/*!********************************!*\
  !*** ./snippets/previewBar.js ***!
  \********************************/
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







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

var PreviewBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PreviewBar, _React$Component);

  function PreviewBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PreviewBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PreviewBar).call(this, props));
    _this.state = {
      animReq: null
    };
    _this.htmlRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.injectHtml = _this.injectHtml.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PreviewBar, [{
    key: "setAnimation",
    value: function setAnimation(el) {
      var keyframeEl = document.createElement('style');
      keyframeEl.textContent = "\n      @keyframes infiniteSlide{\n          from {\n            margin-top:0\n          }\n          to {\n            margin-top: -22px\n          }\n      }\n    ";
      el.insertAdjacentElement('afterbegin', keyframeEl);
      el.setAttribute('style', "padding:0;margin:0;list-style:none;transition:all 2.5s;animation:infiniteSlide 2.5s;");
      el.addEventListener('animationend', function () {
        el.style.animation = '';
        void el.offsetWidth;
        var elNode = el.children[0].parentNode;
        var firstLi = elNode.querySelector(childToQuery);
        var clonedFirstEl;
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var injectedHtmlElCollection = this.htmlRef.current.children; // object

      for (var n = 0; n < injectedHtmlElCollection.length; n++) {
        var el = injectedHtmlElCollection[n];

        if (el.classList.contains('link-container')) {
          el.setAttribute("style", "height:22px;overflow:hidden;line-height:22px;");

          if (el.children[0].tagName === 'UL') {
            (function () {
              var ul = el.children[0];
              var keyframeEl = document.createElement('style');
              keyframeEl.textContent = "\n            @keyframes infiniteSlide{\n                from {\n                  margin-top:0\n                }\n                to {\n                  margin-top: -22px\n                }\n            }\n          ";
              ul.insertAdjacentElement('afterbegin', keyframeEl);
              ul.setAttribute("style", "padding:0;margin:0;list-style:none;transition:all 2.5s;animation:infiniteSlide 2.5s;");
              ul.addEventListener('animationend', function () {
                ul.style.animation = '';
                void ul.offsetWidth;
                var ulNode = ul.children[0].parentNode;
                var firstLi = ulNode.querySelector('li');
                var clonedFirstLi = firstLi.cloneNode(true);
                ulNode.insertAdjacentElement('beforeend', clonedFirstLi);
                ulNode.removeChild(firstLi);
                ul.style.animation = 'infiniteSlide 2.5s';
              });
            })();
          }
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('component updated');
    }
  }, {
    key: "injectHtml",
    value: function injectHtml(html) {
      var contExp = /link\-container/;
      var havCont = contExp.test(html);

      if (havCont) {}

      console.log('injected');
      return __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: html
        },
        ref: this.htmlRef
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$barConfig = this.props.barConfig,
          bgColor = _this$props$barConfig.bgColor,
          ftColor = _this$props$barConfig.ftColor;
      return __jsx("div", {
        style: {
          margin: '20px 0'
        }
      }, __jsx("div", {
        style: {
          padding: '8px 0',
          position: 'relative',
          backgroundColor: bgColor,
          color: ftColor
        }
      }, this.props.barConfig.goal ? this.props.barConfig.inpTxt + '$' + this.props.barConfig.goal : this.props.barConfig.inpTxt, this.props.barConfig.addedHtml ? this.injectHtml(this.props.barConfig.addedHtml) : null, __jsx("div", {
        style: {
          position: 'absolute',
          top: '8px',
          right: '8px'
        }
      }, "X")));
    }
  }]);

  return PreviewBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PreviewBar);

/***/ })

})
//# sourceMappingURL=index.js.3b2264ee1f9049a76f52.hot-update.js.map