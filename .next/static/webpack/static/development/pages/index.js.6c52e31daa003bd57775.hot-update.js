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
    _this.state = {};
    _this.handleAddedHtml = _this.handleAddedHtml.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.injectHtml = _this.injectHtml.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PreviewBar, [{
    key: "handleAddedHtml",
    value: function handleAddedHtml(userInp) {
      // if 'link-container' class exists, have a fixed height, hide overflows and alternate the inner content;
      var tagExp = /<\/(\w+)>/g;
      var tagNProps = /<(\w+['"=\s(\w)\:\;\{\}\/\.\-]*)>/g;
      var re, tagWhole;
      var tagArr = [],
          tagWhArr = [];
      var classes = userInp.match(/class="([-\w\s]+)"/);
      var containerLinkStyle = {};

      while (re = tagExp.exec(userInp)) {
        tagArr.push(re[1]);
        if (!re) break;
      }

      while (tagWhole = tagNProps.exec(userInp)) {
        tagWhArr.push(tagWhole[1]);
        if (!tagWhole) break;
      } // to parse tagWhArr, make it an array of objects containing tag, prop and children


      tagWhArr.map(function (item, idx, arr) {
        var result = {},
            propArr = [],
            props,
            propExp = /([-\w]+)="(['"\s\w\:\;\/\.\-]*)"/g,
            tagExp = /(\w+)[\s]+/; // if item.match(tagExp) is null, then tag is item, otherwise, tag is item.match(tagExp)[1]

        result.tag = !item.match(tagExp) ? item : item.match(tagExp)[1];

        while (props = propExp.exec(item)) {
          propArr.push({
            propertyName: props[1],
            propertyValue: props[2]
          });
          if (!props) break;
        }

        ;
        result.properties = propArr;
        arr[idx] = result;
      });

      if (classes) {
        classes = classes[1].split(' ');

        if (classes.includes('container-link')) {
          containerLinkStyle = {
            height: '22px',
            overflow: 'hidden'
          };
        }
      }

      if (userInp) {
        var prop = {};

        for (var n = 0; n < tagArr.length; n++) {
          switch (tagArr[n]) {
            case 'a':
              prop['href'] = '';
              break;
          }

          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(tagArr[n], prop, 'any text');
        }
      }
    }
  }, {
    key: "injectHtml",
    value: function injectHtml(html) {
      var contExp = /link-container/;
      return __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: html
        }
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
//# sourceMappingURL=index.js.6c52e31daa003bd57775.hot-update.js.map