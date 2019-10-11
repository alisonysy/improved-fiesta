webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./snippets/displaySchedule.js":
/*!*************************************!*\
  !*** ./snippets/displaySchedule.js ***!
  \*************************************/
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






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



function Choose(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(['always']),
      selected = _useState[0],
      setSelected = _useState[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    return setSelected(value);
  }, []);
  var renderDatePicker = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (isSelected) {
    return isSelected && __jsx(Schedule, null);
  });
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["ChoiceList"], {
    choices: [{
      label: 'Always display',
      value: 'always'
    }, {
      label: 'Only display within the giving period of time',
      value: 'scheduled',
      renderChildren: renderDatePicker
    }],
    selected: selected,
    onChange: handleChange
  });
}

;

function Schedule(props) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    month: 9,
    year: 2019
  }),
      _useState2$ = _useState2[0],
      month = _useState2$.month,
      year = _useState2$.year,
      setDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    start: new Date(),
    end: new Date()
  }),
      selectedDates = _useState3[0],
      setSelectedDates = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    leftMon: month + 1,
    rightMon: month + 2
  }),
      _useState4$ = _useState4[0],
      leftMon = _useState4$.leftMon,
      rightMon = _useState4$.rightMon,
      setMonth = _useState4[1];

  var handleMonthChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (month, year) {
    setDate({
      month: month,
      year: year
    });
    setMonth({
      leftMon: month + 1,
      rightMon: month + 2
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    console.log('selected dates are', selectedDates);
  }, [selectedDates]);
  return __jsx("div", null, __jsx("div", {
    style: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'stretch'
    }
  }, __jsx("div", {
    style: {
      width: '50%'
    }
  }, leftMon), __jsx("div", null, rightMon)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
    month: month,
    year: year,
    onChange: setSelectedDates,
    onMonthChange: handleMonthChange,
    selected: selectedDates,
    multiMonth: true,
    allowRange: true
  }));
}

var DisplaySchedule =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DisplaySchedule, _React$Component);

  function DisplaySchedule(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DisplaySchedule);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DisplaySchedule).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DisplaySchedule, [{
    key: "render",
    value: function render() {
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Card"].Section, null, __jsx("div", {
        style: {
          marginBottom: '1em',
          fontSize: '1.1em'
        }
      }, "Display schedule:"), __jsx(Choose, null));
    }
  }]);

  return DisplaySchedule;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DisplaySchedule);

/***/ })

})
//# sourceMappingURL=index.js.437fa15738a51bcaca14.hot-update.js.map