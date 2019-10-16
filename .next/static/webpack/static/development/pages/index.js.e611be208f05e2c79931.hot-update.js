webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/targetConfig.js":
/*!************************************!*\
  !*** ./components/targetConfig.js ***!
  \************************************/
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
/* harmony import */ var _snippets_selectCountries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snippets/selectCountries */ "./snippets/selectCountries.js");
/* harmony import */ var _snippets_displaySchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../snippets/displaySchedule */ "./snippets/displaySchedule.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





function IncludePage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(['all']),
      selected = _useState[0],
      setSelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      urlInp = _useState2[0],
      setUrlInp = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      urlExc = _useState3[0],
      setUrlExc = _useState3[1];

  var handleUrlInp = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    setUrlInp(value);
  }, []);
  var handleUrlExc = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (val) {
    setUrlExc(val);
  }, []);
  var renderUrlInp = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (isSelected) {
    return isSelected && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      label: "",
      labelHidden: true,
      onChange: handleUrlInp,
      value: urlInp
    });
  }, [handleUrlInp, urlInp]);
  var renderPageToExc = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (isSelected) {
    return isSelected && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      labelHidden: true,
      onChange: handleUrlExc,
      value: urlExc
    });
  }, [handleUrlExc, urlExc]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var sl = selected[0];

    switch (sl) {
      case 'all':
        props.handleDisplayOnPage('all', undefined);
        break;

      case 'homepage':
        props.handleDisplayOnPage('home', undefined);
        break;

      case 'url':
        props.handleDisplayOnPage('url', urlInp);
        break;

      case 'exclude':
        props.handleDisplayOnPage('exclude', urlExc);
        break;
    }
  }, [urlInp, urlExc, selected]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["ChoiceList"], {
    title: "Display on page:",
    choices: [{
      label: 'All pages',
      value: 'all'
    }, {
      label: 'Homepage only',
      value: 'homepage'
    }, {
      label: 'Only on page with URL',
      value: 'url',
      renderChildren: renderUrlInp
    }, {
      label: 'Pages to exclude',
      value: 'exclude',
      renderChildren: renderPageToExc
    }],
    selected: selected,
    onChange: function onChange(nw) {
      return setSelected(nw);
    }
  }));
}

var TargetConfigPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TargetConfigPage, _React$Component);

  function TargetConfigPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TargetConfigPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TargetConfigPage).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TargetConfigPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["FormLayout"], null, __jsx("div", {
        style: {
          fontSize: '18px',
          padding: '1.5em 0 0 1em'
        }
      }, "Target Configuration"), __jsx(IncludePage, {
        handleDisplayOnPage: function handleDisplayOnPage(sec, url) {
          return _this2.props.handleDisplayOnPage(sec, url);
        }
      }), __jsx(_snippets_selectCountries__WEBPACK_IMPORTED_MODULE_7__["default"], {
        shipsToCountries: this.props.shipsToCountries,
        handleSelectedTargets: this.props.handleSelectedTargets
      }), __jsx(_snippets_displaySchedule__WEBPACK_IMPORTED_MODULE_8__["default"], {
        handleTimeSetting: this.props.handleTimeSetting
      }))));
    }
  }]);

  return TargetConfigPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TargetConfigPage);

/***/ })

})
//# sourceMappingURL=index.js.e611be208f05e2c79931.hot-update.js.map