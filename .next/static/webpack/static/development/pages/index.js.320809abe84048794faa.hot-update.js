webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/contentConfig.js":
/*!*************************************!*\
  !*** ./components/contentConfig.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



function NameField(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    props.handleName(name);
  }, [name]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: "Name: ",
    value: name,
    onChange: function onChange(nw) {
      return setName(nw);
    }
  }));
}

function FreeShippingGoal(props) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(30),
      goal = _useState2[0],
      setGoal = _useState2[1];

  var _handleGoalChange = function _handleGoalChange(newGoal) {
    setGoal(newGoal);
    props.handleGoalChange(newGoal);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: "Free Shipping Goal: ",
    type: "number",
    value: goal,
    onChange: function onChange(nw) {
      return _handleGoalChange(nw);
    }
  }));
}

function InitialMsg(props) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('Free Shipping on All Orders Over '),
      msg = _useState3[0],
      setMsg = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      added = _useState4[0],
      setAdded = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    props.handleMsgChange({
      initialMsg1: msg,
      initialMsg2: added
    });
  }, [msg, added]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
    alignment: "center",
    distribution: "fill"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: "Initial message: ",
    type: "text",
    value: msg,
    onChange: function onChange(nw) {
      return setMsg(nw);
    },
    helpText: "Display when cart is empty"
  }), __jsx("div", {
    style: {
      fontSize: '18px'
    }
  }, props.currency, " ", props.goal), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: " ",
    type: "text",
    value: added,
    onChange: function onChange(nw) {
      return setAdded(nw);
    }
  })));
}

function ProgressMsg(props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('Only '),
      msg = _useState5[0],
      setMsg = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(' away from free shipping'),
      added = _useState6[0],
      setAdded = _useState6[1];

  var gl = props.goal;
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    props.handleMsgChange({
      prgMsg1: msg,
      prgMsg2: added
    });
  }, [msg, added]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, {
    condensed: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
    alignment: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: "Progress message: ",
    type: "text",
    value: msg,
    onChange: function onChange(nw) {
      return setMsg(nw);
    },
    helpText: "Displays when cart value is less than the goal"
  }), __jsx("div", null, props.currency, " ", gl - 1), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: " ",
    type: "text",
    value: added,
    onChange: function onChange(nw) {
      return setAdded(nw);
    }
  })));
}

function GoalAchieved(props) {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('Free Shipping Worldwide'),
      msg = _useState7[0],
      setMsg = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    props.handleMsgChange({
      achievedMsg: msg
    });
  }, [msg]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: "Goal Achieved Message: ",
    type: "text",
    value: msg,
    onChange: function onChange(nw) {
      return setMsg(nw);
    },
    helpText: "Displays when cart value is greater than goal"
  }));
}

function AddLinkToBar(props) {
  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      havLink = _useState8[0],
      setHavLink = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      url = _useState9[0],
      setUrl = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      checkbox = _useState10[0],
      setChecked = _useState10[1];

  var opts = [{
    label: 'Off',
    value: false
  }, {
    label: 'On',
    value: true
  }];

  var handleSwitch = function handleSwitch(val) {
    val = val === 'true' ? true : false;
    setHavLink(val);

    if (!val) {
      props.handleBarLinkChange('');
    }
  };

  var handleCheckbox = function handleCheckbox(val) {
    setChecked(val);
    props.handleBarLinkChange(val);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Select"], {
    label: "Add Link to the Bar: ",
    options: opts,
    onChange: handleSwitch,
    value: havLink
  }), havLink ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    label: "Link URL: ",
    type: "url",
    value: url,
    onChange: function onChange(nw) {
      setUrl(nw);
      props.handleBarLinkChange(nw);
    },
    helpText: "This address will be visited after clicking the bar"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], {
    label: "Open the link in a NEW tab when clicked",
    checked: checkbox,
    onChange: function onChange(nw) {
      return handleCheckbox(nw);
    }
  })) : null);
}

function SetPosition(props) {
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(['push-down']),
      isSelected = _useState11[0],
      setSelected = _useState11[1];

  var choices = [{
    label: 'Top bar pushes down the rest of the page',
    value: 'push-down'
  }, //body padding-top equals to the height of the bar, position: absolute
  {
    label: 'Top bar pushes down the rest of the page (always visible while scrolling)',
    value: 'push-down-visible'
  }, // body padding-top, and position: -webkit-sticky
  {
    label: 'Top bar overlaps top of the page',
    value: 'overlap'
  }, //no padding-top for body
  {
    label: 'Top bar overlaps top of the page (always visible while scrolling)',
    value: 'overlap-visible'
  }, //no padding-top for body, and position:sticky
  {
    label: 'Manual placement',
    value: 'manual',
    renderChildren: function renderChildren(isSelected) {
      return isSelected && __jsx("div", null, "Place the code");
    }
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    props.handleBarPosition(isSelected);
  }, [isSelected]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ChoiceList"], {
    title: 'Select a Display Position: ',
    choices: choices,
    selected: isSelected,
    onChange: function onChange(nw) {
      return setSelected(nw);
    }
  }));
}

var ContentConfigPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ContentConfigPage, _React$Component);

  function ContentConfigPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContentConfigPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ContentConfigPage).call(this, props));
    _this.state = {
      frShGl: 30,
      msgText: {
        initialMsg1: 'Free Shipping on All Orders Over ',
        initialMsg2: '',
        prgMsg1: 'Only ',
        prgMsg2: ' away from free shipping',
        achievedMsg: 'Free Shipping Worldwide'
      }
    };
    _this.handleGoalChange = _this.handleGoalChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleMsgChange = _this.handleMsgChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleBarLinkChange = _this.handleBarLinkChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ContentConfigPage, [{
    key: "handleGoalChange",
    value: function handleGoalChange(newGoal) {
      if (_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(newGoal) !== 0) {
        this.setState(function (state) {
          return {
            frShGl: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(newGoal)
          };
        }, function () {
          this.props.handleContentConfig_goal(this.state.frShGl);
        });
      }
    }
  }, {
    key: "handleMsgChange",
    value: function handleMsgChange(msg) {
      this.setState(function (state) {
        msg = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.msgText, msg);
        return {
          msgText: msg
        };
      }, function () {
        this.props.handleContentConfig_msg(this.state.msgText);
      });
    }
  }, {
    key: "handleBarLinkChange",
    value: function handleBarLinkChange(val) {
      var barLinkConfig = {};

      if (typeof val === 'boolean') {
        barLinkConfig.openNew = val;
      } else if (typeof val === 'string') {
        barLinkConfig.url = val;
      }

      this.props.handleContentConfig_link(barLinkConfig);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var frShGl = this.state.frShGl;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: function onSubmit() {}
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx(NameField, {
        handleName: function handleName(name) {
          return _this2.props.handleName(name);
        }
      }), __jsx(FreeShippingGoal, {
        handleGoalChange: this.handleGoalChange
      }), frShGl ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx(InitialMsg, {
        goal: frShGl,
        currency: "$",
        handleMsgChange: this.handleMsgChange
      }), __jsx(ProgressMsg, {
        goal: frShGl,
        currency: "$",
        handleMsgChange: this.handleMsgChange
      })) : null, __jsx(GoalAchieved, {
        handleMsgChange: this.handleMsgChange
      }), __jsx(AddLinkToBar, {
        handleBarLinkChange: this.handleBarLinkChange
      }), __jsx(SetPosition, {
        handleBarPosition: function handleBarPosition(val) {
          return _this2.props.handleBarPosition(val);
        }
      }))));
    }
  }]);

  return ContentConfigPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContentConfigPage);

/***/ })

})
//# sourceMappingURL=index.js.320809abe84048794faa.hot-update.js.map