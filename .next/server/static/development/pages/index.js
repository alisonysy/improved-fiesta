module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/barList.js":
/*!*******************************!*\
  !*** ./components/barList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const GET_CLIENT_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query {
    shop{
      id
      name
      shipsToCountries
    }
  }
`;

class BarList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingCountries: []
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleTargetCountries = this.handleTargetCountries.bind(this);
  }

  handleEdit(e, id) {
    console.log(id);
  }

  handleTargetCountries(c) {
    this.setState({
      shippingCountries: c
    }, function () {
      this.props.handleTargetCountries(c);
    });
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_CLIENT_ID
    }, ({
      data,
      loading,
      error
    }) => {
      if (loading) return __jsx("div", null, "Loading...");
      if (error) return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
        status: "critical"
      }, error.message);
      console.log(data);

      if (!this.state.shippingCountries[0]) {
        this.handleTargetCountries(data.shop.shipsToCountries);
      } // #toUpdate: to fetch from database


      const arrs = [{
        'name': 'ijji',
        'geo': 'china',
        'achievements': 253,
        'id': 2
      }, {
        'name': 'fe',
        'geo': 'nz',
        'achievements': 76,
        'id': 3
      }];
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx("table", {
        style: {
          width: '100%',
          padding: '2%'
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Name"), __jsx("th", null, "Geo target"), __jsx("th", null, "Actions"), __jsx("th", null, "Achievements"))), __jsx("tbody", null, arrs.map((item, idx) => {
        return __jsx("tr", {
          style: {
            textAlign: 'center',
            lineHeight: 3
          },
          key: idx
        }, __jsx("td", null, item.name), __jsx("td", null, item.geo), __jsx("td", null, __jsx("button", {
          onClick: e => this.props.handleEditId(item.id),
          style: {
            borderColor: 'transparent',
            background: '#000',
            color: '#fff',
            borderRadius: 5
          }
        }, "Edit")), __jsx("td", null, item.achievements));
      }))));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BarList);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function NameField(props) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.handleName(name);
  }, [name]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Name: ",
    value: name,
    onChange: nw => setName(nw)
  }));
}

function FreeShippingGoal(props) {
  const {
    0: goal,
    1: setGoal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(30);

  const _handleGoalChange = function (newGoal) {
    setGoal(newGoal);
    props.handleGoalChange(newGoal);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Free Shipping Goal: ",
    type: "number",
    value: goal,
    onChange: nw => _handleGoalChange(nw)
  }));
}

function InitialMsg(props) {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Free Shipping on All Orders Over ');
  const {
    0: added,
    1: setAdded
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.handleMsgChange({
      initialMsg1: msg,
      initialMsg2: added
    });
  }, [msg, added]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    alignment: "center",
    distribution: "fill"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Initial message: ",
    type: "text",
    value: msg,
    onChange: nw => setMsg(nw),
    helpText: "Display when cart is empty"
  }), __jsx("div", {
    style: {
      fontSize: '18px'
    }
  }, props.currency, " ", props.goal), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: " ",
    type: "text",
    value: added,
    onChange: nw => setAdded(nw)
  })));
}

function ProgressMsg(props) {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Only ');
  const {
    0: added,
    1: setAdded
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(' away from free shipping');
  const gl = props.goal;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.handleMsgChange({
      prgMsg1: msg,
      prgMsg2: added
    });
  }, [msg, added]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, {
    condensed: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    alignment: "center",
    distribution: "fill"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Progress message: ",
    type: "text",
    value: msg,
    onChange: nw => setMsg(nw),
    helpText: "Displays when cart value is less than the goal"
  }), __jsx("div", {
    style: {
      fontSize: '18px'
    }
  }, props.currency, " ", gl - 1), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: " ",
    type: "text",
    value: added,
    onChange: nw => setAdded(nw)
  })));
}

function GoalAchieved(props) {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Free Shipping Worldwide');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.handleMsgChange({
      achievedMsg: msg
    });
  }, [msg]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Goal Achieved Message: ",
    type: "text",
    value: msg,
    onChange: nw => setMsg(nw),
    helpText: "Displays when cart value is greater than goal"
  }));
}

function AddLinkToBar(props) {
  const {
    0: havLink,
    1: setHavLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: url,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: checkbox,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const opts = [{
    label: 'Off',
    value: false
  }, {
    label: 'On',
    value: true
  }];

  const handleSwitch = val => {
    val = val === 'true' ? true : false;
    setHavLink(val);

    if (!val) {
      props.handleBarLinkChange('');
    }
  };

  const handleCheckbox = val => {
    setChecked(val);
    props.handleBarLinkChange(val);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    label: "Add Link to the Bar: ",
    options: opts,
    onChange: handleSwitch,
    value: havLink
  }), havLink ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Link URL: ",
    type: "url",
    value: url,
    onChange: nw => {
      setUrl(nw);
      props.handleBarLinkChange(nw);
    },
    helpText: "This address will be visited after clicking the bar"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    label: "Open the link in a NEW tab when clicked",
    checked: checkbox,
    onChange: nw => handleCheckbox(nw)
  })) : null);
}

function SetPosition(props) {
  const {
    0: isSelected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(['push-down']);
  const choices = [{
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
    renderChildren: isSelected => {
      return isSelected && __jsx("div", null, "Place the code");
    }
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.handleBarPosition(isSelected);
  }, [isSelected]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ChoiceList"], {
    title: 'Select a Display Position: ',
    choices: choices,
    selected: isSelected,
    onChange: nw => setSelected(nw)
  }));
}

class ContentConfigPage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      frShGl: 30,
      msgText: {
        initialMsg1: 'Free Shipping on All Orders Over ',
        initialMsg2: '',
        prgMsg1: 'Only ',
        prgMsg2: ' away from free shipping',
        achievedMsg: 'Free Shipping Worldwide'
      }
    };
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handleBarLinkChange = this.handleBarLinkChange.bind(this);
  }

  handleGoalChange(newGoal) {
    if (_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(newGoal) !== 0) {
      this.setState(state => {
        return {
          frShGl: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(newGoal)
        };
      }, function () {
        this.props.handleContentConfig_goal(this.state.frShGl);
      });
    }
  }

  handleMsgChange(msg) {
    this.setState(state => {
      msg = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.msgText, msg);
      return {
        msgText: msg
      };
    }, function () {
      this.props.handleContentConfig_msg(this.state.msgText);
    });
  }

  handleBarLinkChange(val) {
    let barLinkConfig = {};

    if (typeof val === 'boolean') {
      barLinkConfig.openNew = val;
    } else if (typeof val === 'string') {
      barLinkConfig.url = val;
    }

    this.props.handleContentConfig_link(barLinkConfig);
  }

  render() {
    const {
      frShGl
    } = this.state;
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      onSubmit: () => {}
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"], null, __jsx(NameField, {
      handleName: name => this.props.handleName(name)
    }), __jsx(FreeShippingGoal, {
      handleGoalChange: this.handleGoalChange
    }), frShGl ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"], null, __jsx(InitialMsg, {
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
      handleBarPosition: val => this.props.handleBarPosition(val)
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContentConfigPage);

/***/ }),

/***/ "./components/customCode.js":
/*!**********************************!*\
  !*** ./components/customCode.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class CustomCodePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      customCode: ''
    };
    this.handleCustomCode = this.handleCustomCode.bind(this);
  }

  handleCustomCode(val) {
    let scriptStart = val.indexOf('<script>'),
        scriptEnd = val.indexOf('</script>'),
        styleStart = val.indexOf('<style>'),
        styleEnd = val.indexOf('</style>');
    let scriptTxt, styleTxt;

    if (scriptStart !== -1 && scriptEnd !== -1) {
      scriptTxt = val.slice(scriptStart + 8, scriptEnd).trim();
    }

    if (styleStart !== -1 && styleEnd !== -1) {
      styleTxt = val.slice(styleStart + 7, styleEnd).trim();
    }

    this.props.handleCustomCode(scriptTxt, styleTxt);
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: v => console.log(v)
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx("div", {
      style: {
        fontSize: '18px',
        padding: '1.5em 0 0 1em'
      }
    }, "Custom Codes"), __jsx("textarea", {
      rows: "10",
      cols: "80",
      placeholder: "Please put your custom codes here...",
      style: {
        marginLeft: '1em'
      },
      onChange: evt => {
        evt.persist();
        this.handleCustomCode(evt.nativeEvent.target.value);
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomCodePage);

/***/ }),

/***/ "./components/preview.js":
/*!*******************************!*\
  !*** ./components/preview.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snippets_previewBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snippets/previewBar */ "./snippets/previewBar.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PreviewPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      barTxtConfig,
      barFrShGl,
      barLink
    } = this.props.contentConfig;
    const bgImg = this.props.bgImg;
    console.log(this.props.styleConfig);
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      barConfig: {
        bgColor: this.props.styleConfig.colorConfig.bgColor,
        ftColor: this.props.styleConfig.colorConfig.txtColor,
        spColor: this.props.styleConfig.colorConfig.specialColor,
        opacity: this.props.styleConfig.colorConfig.bgOpacity,
        inpTxt: barTxtConfig.initialMsg1,
        goal: barFrShGl,
        addedHtml: barTxtConfig.initialMsg2,
        bgImg: bgImg,
        fontFamily: this.props.styleConfig.fontConfig.fontFamily,
        paddingUpDown: this.props.styleConfig.fontConfig.barPadding,
        fontSize: this.props.styleConfig.fontConfig.fontSize
      },
      barLink: barLink
    }), __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      barConfig: {
        bgColor: this.props.styleConfig.colorConfig.bgColor,
        ftColor: this.props.styleConfig.colorConfig.txtColor,
        spColor: this.props.styleConfig.colorConfig.specialColor,
        opacity: this.props.styleConfig.colorConfig.bgOpacity,
        inpTxt: barTxtConfig.prgMsg1,
        goal: barFrShGl - 1,
        addedHtml: barTxtConfig.prgMsg2,
        bgImg: bgImg,
        fontFamily: this.props.styleConfig.fontConfig.fontFamily,
        paddingUpDown: this.props.styleConfig.fontConfig.barPadding,
        fontSize: this.props.styleConfig.fontConfig.fontSize
      },
      barLink: barLink
    }), __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      barConfig: {
        bgColor: this.props.styleConfig.colorConfig.bgColor,
        ftColor: this.props.styleConfig.colorConfig.txtColor,
        spColor: this.props.styleConfig.colorConfig.specialColor,
        opacity: this.props.styleConfig.colorConfig.bgOpacity,
        inpTxt: barTxtConfig.achievedMsg,
        addedHtml: barTxtConfig.initialMsg2,
        bgImg: bgImg,
        fontFamily: this.props.styleConfig.fontConfig.fontFamily,
        paddingUpDown: this.props.styleConfig.fontConfig.barPadding,
        fontSize: this.props.styleConfig.fontConfig.fontSize
      },
      barLink: barLink
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PreviewPage);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../snippets/imageDropZone */ "./snippets/imageDropZone.js");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/fonts.css */ "./css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_6__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





function ColorPickers(props) {
  const {
    0: color,
    1: setColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    hue: 0,
    brightness: 0,
    saturation: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    props.handleColorChange(color);
  }, [color]);
  return __jsx("div", {
    style: {
      height: '100px',
      width: 'auto',
      position: 'absolute',
      top: '25px',
      left: '0',
      zIndex: '99'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"], {
    onChange: setColor,
    color: color
  }));
}

function BackgroundSetting(props) {
  const rgbToHex = rgb => {
    if (rgb.includes('#')) return rgb;
    let regExp = /\(\s*(\d+),\s*(\d+),\s*(\d+)\)/;
    let re = rgb.match(regExp);

    if (re) {
      let r = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(re[1]).toString(16),
          g = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(re[2]).toString(16),
          b = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(re[3]).toString(16);

      if (r.length == 1) r = "0" + r;
      if (g.length == 1) g = "0" + g;
      if (b.length == 1) b = "0" + b;
      return "#" + r + g + b;
    }
  };

  const hslToRgb = (h, s, l) => {
    // s, l must be fractions of 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(h / 60 % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const {
    0: showBgPicker,
    1: setBgPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: showTxtPicker,
    1: setTxtPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: showSpTxtPicker,
    1: setSpTxtPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: bgColor,
    1: setBgColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('#000');
  const {
    0: bgOpacity,
    1: setBgOpacity
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('100');
  const {
    0: txtColor,
    1: setTxtColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('#b31219');
  const {
    0: specialColor,
    1: setSpecialColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('#fff');
  let bgColorFrmProps = props.colorConfig.bgColor,
      txtColorFrmProps = props.colorConfig.txtColor;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    props.handleStyleConfig({
      bgColor: bgColor,
      bgOpacity: bgOpacity,
      txtColor: txtColor,
      specialColor: specialColor
    }, undefined);
  }, [bgColor, bgOpacity, txtColor, specialColor]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setBgColor(rgbToHex(bgColorFrmProps));
  }, [bgColorFrmProps]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setTxtColor(rgbToHex(txtColorFrmProps));
  }, [txtColorFrmProps]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Background color:"), __jsx("div", {
    style: {
      position: 'relative'
    }
  }, __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: bgColor,
      cursor: 'pointer'
    },
    onClick: () => setBgPicker(!showBgPicker)
  }), showBgPicker ? __jsx(ColorPickers, {
    handleColorChange: hslCl => {
      let cRgb = hslToRgb(hslCl.hue, hslCl.saturation, hslCl.brightness);
      setBgColor(cRgb);
    }
  }) : null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    value: bgColor,
    onChange: nw => setBgColor(nw)
  })), __jsx("div", null, __jsx("h3", null, "Background opacity:"), __jsx("div", {
    style: {
      display: 'inline-block'
    }
  }, bgOpacity), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    value: bgOpacity,
    onChange: nw => setBgOpacity(nw),
    type: "number",
    helpText: "0 is transparent, 100 is opaque."
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Text color:"), __jsx("div", {
    style: {
      position: 'relative'
    }
  }, __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: txtColor,
      cursor: 'pointer'
    },
    onClick: () => setTxtPicker(!showTxtPicker)
  }), showTxtPicker ? __jsx(ColorPickers, {
    handleColorChange: hslCl => {
      let cRgb = hslToRgb(hslCl.hue, hslCl.saturation, hslCl.brightness);
      setTxtColor(cRgb);
    }
  }) : null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    value: txtColor,
    onChange: nw => setTxtColor(nw)
  })), __jsx("div", null, __jsx("h3", null, "Special text color:"), __jsx("div", {
    style: {
      position: 'relative'
    }
  }, __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: specialColor,
      cursor: 'pointer'
    },
    onClick: () => setSpTxtPicker(!showSpTxtPicker)
  }), showSpTxtPicker ? __jsx(ColorPickers, {
    handleColorChange: hslCl => {
      let cRgb = hslToRgb(hslCl.hue, hslCl.saturation, hslCl.brightness);
      setSpecialColor(cRgb);
    }
  }) : null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    value: rgbToHex(specialColor),
    onChange: nw => setSpecialColor(nw)
  }))));
}

function Fonts(props) {
  const {
    0: fontSize,
    1: setFontSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(18);
  const {
    0: padding,
    1: setPadding
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(10);
  const {
    0: fontFam,
    1: setFontFam
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('sans-serif');
  const handleFontFam = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(val => {
    setFontFam(val);
  }, [fontFam]);
  const handleFontSize = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(val => {
    setFontSize(val);
  }, [fontSize]);
  const handlePadding = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(val => {
    setPadding(val);
  }, [padding]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    props.handleStyleConfig(undefined, {
      fontFamily: fontFam,
      fontSize: fontSize,
      barPadding: padding
    });
  }, [fontFam, fontSize, padding]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"].Section, null, __jsx("div", null, "Font family:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: () => handleFontFam('Montserrat')
  }, "Montserrat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: () => handleFontFam('sans-serif')
  }, "Sans serif"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: "Font size:",
    suffix: "px",
    type: "number",
    value: fontSize,
    onChange: handleFontSize
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: "Bar padding:",
    suffix: "px",
    type: "number",
    value: padding,
    onChange: handlePadding
  }));
}

class StyleConfigPage extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorConfig: {},
      fontConfig: {},
      bgImg: {}
    };
    this.handleStyleConfig = this.handleStyleConfig.bind(this);
    this.uploadBgImg = this.uploadBgImg.bind(this);
  }

  handleStyleConfig(colorCf, fontCf) {
    this.setState(state => {
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

  uploadBgImg(bgFile) {
    this.setState({
      bgImg: bgFile
    }, function () {
      this.props.uploadBgImg(this.state.bgImg);
    });
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["FormLayout"], null, __jsx("div", {
      style: {
        fontSize: '18px',
        padding: '1.5em 0 0 1em'
      }
    }, "Style Configuration"), __jsx(BackgroundSetting, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      handleStyleConfig: this.handleStyleConfig
    }, this.props.styleConfig)), __jsx(_snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_5__["default"], {
      uploadBgImg: this.uploadBgImg
    }), __jsx(Fonts, {
      handleStyleConfig: this.handleStyleConfig
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StyleConfigPage);

/***/ }),

/***/ "./components/targetConfig.js":
/*!************************************!*\
  !*** ./components/targetConfig.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snippets_selectCountries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snippets/selectCountries */ "./snippets/selectCountries.js");
/* harmony import */ var _snippets_displaySchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snippets/displaySchedule */ "./snippets/displaySchedule.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function IncludePage(props) {
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['all']);
  const {
    0: urlInp,
    1: setUrlInp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: urlExc,
    1: setUrlExc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const handleUrlInp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setUrlInp(value);
  }, []);
  const handleUrlExc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(val => {
    setUrlExc(val);
  }, []);
  const renderUrlInp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(isSelected => isSelected && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "",
    labelHidden: true,
    onChange: handleUrlInp,
    value: urlInp
  }), [handleUrlInp, urlInp]);
  const renderPageToExc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(isSelected => isSelected && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    labelHidden: true,
    onChange: handleUrlExc,
    value: urlExc
  }), [handleUrlExc, urlExc]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let sl = selected[0];

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
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
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
    onChange: nw => setSelected(nw)
  }));
}

class TargetConfigPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx("div", {
      style: {
        fontSize: '18px',
        padding: '1.5em 0 0 1em'
      }
    }, "Target Configuration"), __jsx(IncludePage, {
      handleDisplayOnPage: (sec, url) => this.props.handleDisplayOnPage(sec, url)
    }), __jsx(_snippets_selectCountries__WEBPACK_IMPORTED_MODULE_2__["default"], {
      shipsToCountries: this.props.shipsToCountries,
      handleSelectedTargets: this.props.handleSelectedTargets
    }), __jsx(_snippets_displaySchedule__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TargetConfigPage);

/***/ }),

/***/ "./components/templateStyle.js":
/*!*************************************!*\
  !*** ./components/templateStyle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TemplateStyleItem(props) {
  const bgColor = props.bg;
  const ftColor = props.ft;
  const marginRt = props.mgRt ? '1em' : '0';
  const wid = props.mgRt ? '48%' : '50%';
  return __jsx("li", {
    style: {
      listStyleType: 'none',
      width: wid,
      textAlign: 'center',
      padding: '8px 0',
      marginTop: '5px',
      marginRight: marginRt,
      backgroundColor: bgColor,
      color: ftColor,
      cursor: 'pointer'
    }
  }, props.styleT);
}

class TemplateStyle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClicking = this.handleClicking.bind(this);
    this.tpItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  handleClicking(bg, ftColor) {
    this.props.handleClickedLi(bg, ftColor);
  }

  componentDidMount() {
    let tpUl = this.tpItem.current;
    let tpItems = tpUl.querySelectorAll('li');
    const self = this;

    for (let n = 0; n < tpItems.length; n++) {
      tpItems[n].addEventListener('click', function (e) {
        let li = e.target;
        let bg = li.style.backgroundColor,
            ftColor = li.style.color;
        self.handleClicking(bg, ftColor);
      });
    }
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("ul", {
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
      ft: "#b31219",
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

}

/* harmony default export */ __webpack_exports__["default"] = (TemplateStyle);

/***/ }),

/***/ "./css/fonts.css":
/*!***********************!*\
  !*** ./css/fonts.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_barList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/barList */ "./components/barList.js");
/* harmony import */ var _components_templateStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/templateStyle */ "./components/templateStyle.js");
/* harmony import */ var _components_contentConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contentConfig */ "./components/contentConfig.js");
/* harmony import */ var _components_styleConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styleConfig */ "./components/styleConfig.js");
/* harmony import */ var _components_targetConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/targetConfig */ "./components/targetConfig.js");
/* harmony import */ var _components_customCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/customCode */ "./components/customCode.js");
/* harmony import */ var _components_preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/preview */ "./components/preview.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












const INJECT_SCRIPT = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

function SaveUserPreference(props) {
  const [injectScriptTag, {
    data,
    error
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(INJECT_SCRIPT);

  const handleInjectionSuccess = (data, b) => {
    console.log(data);
    setTimeout(b => {
      b = 'dismiss';
    }, 2500);
    return b === 'success' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Toast"], {
      content: "Saved successfully.",
      onDismiss: () => {}
    }) : b === 'error' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Toast"], {
      content: "Something went wrong.",
      onDismiss: () => {}
    }) : null;
  };

  return __jsx("div", {
    style: {
      marginTop: '50px',
      height: '100px'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => {
      props.handleEdit();
    }
  }, "Cancel"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    primary: true,
    onClick: e => {
      e.preventDefault();
      console.log('calling useMutation hooks'); // injectScriptTag({
      //   variables:{
      //     input:{
      //       displayScope:'ONLINE_STORE',
      //       src:'https://ec9baf76.ngrok.io/_next/static/chunks/topBarInjection.js'
      //     }
      //   }
      // })

      props.handleSaving();
    }
  }, "Save")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Frame"], null, data && handleInjectionSuccess(data, 'success'), error && handleInjectionSuccess(error, 'error')));
}

class Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      onEdit: false,
      savedName: '',
      barTxtConfig: {
        initialMsg1: '',
        prgMsg1: '',
        achievedMsg: ''
      },
      barFrShGl: 30,
      barLink: {
        url: '',
        openNew: false
      },
      barPosition: '',
      bgImg: {},
      styleConfig: {
        colorConfig: {
          bgColor: '#000',
          txtColor: '#b31219',
          bgOpacity: 100,
          specialColor: '#fff'
        },
        fontConfig: {
          fontFamily: 'sans-serif'
        }
      },
      customCode: {
        script: '',
        style: ''
      },
      dspOnPage: {
        selected: '',
        url: ''
      },
      shipsToCountries: [],
      selectedTargets: []
    };
    this.baseState = this.state;
    this.finalBars = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.handleEditId = this.handleEditId.bind(this);
  }

  handleEditId(id) {
    console.log(id);
    this.setState({
      onEdit: true
    });
  }

  render() {
    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_6___default.a.get('ids');
    const {
      barTxtConfig,
      barFrShGl,
      barLink,
      styleConfig,
      bgImg,
      savedName,
      barPosition,
      dspOnPage,
      selectedTargets
    } = this.state;
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, null, __jsx(_components_barList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      handleEditId: id => this.handleEditId(id),
      handleTargetCountries: arr => this.setState({
        shipsToCountries: arr
      }, function () {
        console.log(this.state.shipsToCountries);
      })
    }), this.state.onEdit ? __jsx("div", {
      style: {
        marginTop: '3em'
      }
    }, __jsx(_components_templateStyle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      handleClickedLi: (bg, ftColor) => this.setState({
        styleConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state.styleConfig, {
          colorConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state.styleConfig.colorConfig, {
            bgColor: bg,
            txtColor: ftColor
          })
        })
      })
    }), __jsx(_components_preview__WEBPACK_IMPORTED_MODULE_13__["default"], {
      others: {
        savedName,
        barPosition,
        dspOnPage,
        selectedTargets
      },
      contentConfig: {
        barTxtConfig,
        barFrShGl,
        barLink
      },
      styleConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styleConfig),
      bgImg: bgImg,
      ref: this.finalBars
    }), __jsx(_components_contentConfig__WEBPACK_IMPORTED_MODULE_9__["default"], {
      handleContentConfig_msg: msg => this.setState({
        barTxtConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.barTxtConfig, msg)
      }),
      handleContentConfig_goal: gl => this.setState({
        barFrShGl: gl
      }),
      handleContentConfig_link: val => this.setState({
        barLink: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state.barLink, val)
      }),
      handleName: name => this.setState({
        savedName: name
      }),
      handleBarPosition: p => this.setState({
        barPosition: p
      })
    }), __jsx(_components_styleConfig__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      handleStyleConfig: (colorCf, fontCf) => {
        this.setState({
          styleConfig: {
            colorConfig: colorCf,
            fontConfig: fontCf
          }
        });
      },
      uploadBgImg: bgFile => this.setState({
        bgImg: bgFile
      })
    }, this.state)), __jsx(_components_targetConfig__WEBPACK_IMPORTED_MODULE_11__["default"], {
      handleDisplayOnPage: (sec, url) => this.setState({
        dspOnPage: {
          selected: sec,
          url: url
        }
      }),
      shipsToCountries: this.state.shipsToCountries,
      handleSelectedTargets: val => this.setState({
        selectedTargets: val
      }, function () {
        console.log('selected targets are', this.state.selectedTargets);
      })
    }), __jsx(_components_customCode__WEBPACK_IMPORTED_MODULE_12__["default"], {
      handleCustomCode: (script, style) => {
        this.setState({
          customCode: {
            script: script,
            style: style
          }
        });
      }
    }), __jsx(SaveUserPreference, {
      handleEdit: () => {
        this.setState(this.baseState);
      },
      handleSaving: () => {
        console.log(this.finalBars.current);
      }
    })) : null));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./snippets/displaySchedule.js":
/*!*************************************!*\
  !*** ./snippets/displaySchedule.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Choose(props) {
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['always']);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setSelected(value), []);
  const renderDatePicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(isSelected => isSelected && __jsx(Schedule, null));
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
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

function SelectTime(props) {
  return __jsx("div", {
    style: {
      margin: '1em 0'
    }
  }, __jsx("div", null, "Please enter the hour (from 0 to 23) and minute (from 0 to 59) that the display ", __jsx("strong", null, "starts"), ":"), __jsx("div", {
    style: {
      marginTop: '.5em'
    }
  }, __jsx("span", {
    style: {
      marginRight: '.3em'
    }
  }, "Hour:"), __jsx("input", {
    id: "start_hour",
    type: "number",
    min: 0,
    max: 23,
    style: {
      marginRight: '1em'
    }
  }), __jsx("span", {
    style: {
      marginRight: '.3em'
    }
  }, "Minute:"), __jsx("input", {
    id: "start_min",
    type: "number",
    min: 0,
    max: 59
  })), __jsx("div", {
    style: {
      marginTop: '.5em'
    }
  }, "Please enter the hour (from 0 to 23) and minute (from 0 to 59) that the display ", __jsx("strong", null, "ends"), ":"), __jsx("div", {
    style: {
      marginTop: '.5em'
    }
  }, __jsx("span", {
    style: {
      marginRight: '.3em'
    }
  }, "Hour:"), __jsx("input", {
    id: "end_hour",
    type: "number",
    min: 0,
    max: 23,
    style: {
      marginRight: '1em'
    }
  }), __jsx("span", {
    style: {
      marginRight: '.3em'
    }
  }, "Minute:"), __jsx("input", {
    id: "end_min",
    type: "number",
    min: 0,
    max: 59
  })));
}

function Schedule(props) {
  const {
    0: {
      month,
      year
    },
    1: setDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    month: 9,
    year: 2019
  });
  const {
    0: selectedDates,
    1: setSelectedDates
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    start: new Date(),
    end: new Date()
  });
  const {
    0: {
      leftMon,
      rightMon
    },
    1: setMonth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    leftMon: month + 1,
    rightMon: month + 2
  });
  const handleMonthChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((month, year) => {
    setDate({
      month,
      year
    });
    setMonth({
      leftMon: month + 1,
      rightMon: month + 2
    });
  }, []);

  const transpileMonth = month => {
    month = '' + month;

    switch (month) {
      case '1':
        return 'January';
        break;

      case '2':
        return 'Feburary';
        break;

      case '3':
        return 'March';
        break;

      case '4':
        return 'April';

      case '5':
        return 'May';

      case '6':
        return 'June';

      case '7':
        return 'July';

      case '8':
        return 'August';

      case '9':
        return 'September';

      case '10':
        return 'October';

      case '11':
        return 'November';

      case '12':
        return 'December';

      case '13':
        return 'January';
    }
  };

  const handleTimeSelection = () => {
    const startH = document.getElementById('start_hour'),
          startM = document.getElementById('start_min'),
          endH = document.getElementById('end_hour'),
          endM = document.getElementById('end_min');
    let startT = {},
        endT = {};
    startH.addEventListener('input', function (e) {
      let num = e.target.valueAsNumber;
      num > 23 ? startT.hour = 23 : num < 0 ? startT.hour = 0 : startT.hour = num;
    });
    startM.addEventListener('input', function (e) {
      let num = e.target.valueAsNumber;
      num > 59 ? startT.min = 59 : num < 0 ? startT.min = 0 : startT.min = num;
    });
    endH.addEventListener('input', function (e) {
      let num = e.target.valueAsNumber;
      num > 23 ? endT.hour = 23 : num < 0 ? endT.hour = 0 : endT.hour = num;
    });
    endM.addEventListener('input', function (e) {
      let num = e.target.valueAsNumber;
      num > 59 ? endT.min = 59 : num < 0 ? endT.min = 0 : endT.min = num;
    });
    return {
      startT,
      endT
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('selected dates are', selectedDates);
    let startD = new Date(selectedDates.start);
    let endD = new Date(selectedDates.end);
    let time = handleTimeSelection();
    startD = startD.getFullYear() + '/';
    console.log(time);
  }, [selectedDates]);
  return __jsx("div", null, __jsx("div", {
    style: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'stretch'
    }
  }, __jsx("div", {
    style: {
      width: '50%',
      textAlign: 'center'
    }
  }, transpileMonth(leftMon)), __jsx("div", {
    style: {
      width: '50%',
      textAlign: 'center'
    }
  }, transpileMonth(rightMon))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    month: month,
    year: year,
    onChange: setSelectedDates,
    onMonthChange: handleMonthChange,
    selected: selectedDates,
    multiMonth: true,
    allowRange: true
  }), __jsx(SelectTime, null));
}

class DisplaySchedule extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("div", {
      style: {
        marginBottom: '1em',
        fontSize: '1.1em'
      }
    }, "Display schedule:"), __jsx(Choose, null), __jsx("div", null, "Define the Start Time and End Time of the display period. Must select at least two days."));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DisplaySchedule);

/***/ }),

/***/ "./snippets/imageDropZone.js":
/*!***********************************!*\
  !*** ./snippets/imageDropZone.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class ImageDropZone extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.handleInpImg = this.handleInpImg.bind(this);
  }

  componentDidUpdate() {
    const inputBtn = this.inputRef.current;
    const self = this;
    inputBtn.addEventListener('change', function (e) {
      self.handleInpImg(inputBtn);
    });
  }

  handleInpImg(tg) {
    let img = tg.files[0],
        imgs,
        al;
    let imgWrapper = document.createElement('img');
    let delBtn = document.createElement('button');
    const self = this;
    imgs = tg.parentNode.querySelector('.imgs'); // delete button handling

    delBtn.textContent = 'Delete Image';
    delBtn.addEventListener('click', function (e) {
      e.preventDefault();
      let uploadedImg = imgs.querySelector('img');
      imgs.removeChild(uploadedImg);
      imgs.removeChild(delBtn);
      self.props.uploadBgImg({});
    });
    imgWrapper.src = window.URL.createObjectURL(img);
    al = imgs.querySelector('img');

    if (al) {
      imgs.removeChild(al);
      imgs.insertAdjacentElement('afterbegin', imgWrapper);
    } else {
      imgs.insertAdjacentElement('afterbegin', imgWrapper);
      imgs.insertAdjacentElement('beforeend', delBtn);
    }

    this.props.uploadBgImg(img);
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("label", {
      htmlFor: "backgroundImg"
    }, "Click the drop zone to continue uploading more images:"), __jsx("div", null, __jsx("input", {
      id: "backgroundImg",
      type: "file",
      accept: "image/*",
      name: "bgImg",
      ref: this.inputRef
    }), __jsx("div", {
      className: "imgs"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropZone);

/***/ }),

/***/ "./snippets/previewBar.js":
/*!********************************!*\
  !*** ./snippets/previewBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/fonts.css */ "./css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class PreviewBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      animReq: null
    };
    this.htmlRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.closeBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.topBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.injectHtml = this.injectHtml.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
    this.renderBarFirstLine = this.renderBarFirstLine.bind(this);
    this.renderInnerBar = this.renderInnerBar.bind(this);
    this._hexToRgba = this._hexToRgba.bind(this);
  }

  setAnimation(el, childToQuery) {
    let keyframeEl = document.createElement('style');
    keyframeEl.textContent = `
      @keyframes infiniteSlide{
          from {
            margin-top:0
          }
          to {
            margin-top: -22px
          }
      }
    `;
    el.insertAdjacentElement('afterbegin', keyframeEl);
    el.setAttribute('style', "padding:0;margin:0;list-style:none;transition:all 2.5s;animation:infiniteSlide 2.5s;");
    el.addEventListener('animationend', function () {
      el.style.animation = '';
      void el.offsetWidth;
      let elNode = el.children[0].parentNode;
      let firstChild = elNode.querySelector(childToQuery);
      let clonedFirstChild = firstChild.cloneNode(true);
      elNode.insertAdjacentElement('beforeend', clonedFirstChild);
      elNode.removeChild(firstChild);
      el.style.animation = 'infiniteSlide 2.5s';
    });
  }

  componentDidMount() {
    // handle injected html
    if (this.htmlRef.current) {
      let injectedHtmlElCollection = this.htmlRef.current.children; // object

      for (let n = 0; n < injectedHtmlElCollection.length; n++) {
        let el = injectedHtmlElCollection[n];

        if (el.classList.contains('link-container')) {
          el.setAttribute("style", "height:22px;overflow:hidden;line-height:22px;");

          if (el.children[0].tagName === 'UL') {
            let ul = el.children[0];
            this.setAnimation(ul, 'li');
          }
        }
      }
    } // handle closing action


    let closeBtn = this.closeBtn.current;
    closeBtn.addEventListener('click', e => {// #todo add script when appending to page to hide the bar element
    });
  }

  componentDidUpdate() {
    // handle injected html
    if (this.htmlRef.current) {
      let injectedHtmlElCollection = this.htmlRef.current.children; // object

      for (let n = 0; n < injectedHtmlElCollection.length; n++) {
        let el = injectedHtmlElCollection[n];

        if (el.classList.contains('link-container')) {
          el.setAttribute("style", "height:22px;overflow:hidden;line-height:22px;");

          if (el.children[0].tagName === 'UL') {
            let ul = el.children[0];
            this.setAnimation(ul, 'li');
          }
        }
      }
    }

    console.log('finished top bar', this.topBar.current);
  }

  injectHtml(html) {
    let contExp = /link\-container/;
    let havCont = contExp.test(html);

    if (havCont) {}

    return __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: html
      },
      ref: this.htmlRef,
      style: {
        textAlign: 'center'
      }
    });
  }

  renderBarFirstLine(barConfig) {
    const {
      goal,
      inpTxt,
      spColor
    } = barConfig;
    return __jsx("span", null, inpTxt, __jsx("span", {
      style: {
        color: spColor,
        fontWeight: 400
      }
    }, "$", goal));
  }

  renderInnerBar(barConfig) {
    const {
      inpTxt,
      addedHtml,
      ftColor,
      goal,
      opacity,
      bgImg,
      fontFamily,
      paddingUpDown,
      fontSize
    } = barConfig;
    let {
      bgColor
    } = barConfig,
        imgSize = bgImg.size,
        imgUrl;
    let padding = paddingUpDown ? `${paddingUpDown}px 5px` : '8px 5px';

    if (opacity.toString() !== '100') {
      bgColor = this._hexToRgba(bgColor, opacity);
    }

    if (imgSize) {
      imgUrl = 'url("' + window.URL.createObjectURL(bgImg) + '")';
    }

    return __jsx("div", {
      style: {
        padding: padding,
        fontSize: fontSize ? fontSize + 'px' : '18px',
        lineHeight: '22.5px',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: bgColor,
        color: ftColor,
        backgroundImage: imgUrl,
        fontFamily: fontFamily
      }
    }, goal ? this.renderBarFirstLine(barConfig) : inpTxt, addedHtml ? this.injectHtml(addedHtml) : null, __jsx("div", {
      style: {
        position: 'absolute',
        top: '8px',
        right: '8px',
        cursor: 'pointer'
      },
      ref: this.closeBtn
    }, "X"));
  }

  _hexToRgba(h, op) {
    let r = 0,
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

  render() {
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

}

/* harmony default export */ __webpack_exports__["default"] = (PreviewBar);

/***/ }),

/***/ "./snippets/selectCountries.js":
/*!*************************************!*\
  !*** ./snippets/selectCountries.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const countryName = {
  'AF': 'Afghanistan',
  'AX': 'Aland Islands',
  'AL': 'Albania',
  'DZ': 'Algeria',
  'AS': 'American Samoa',
  'AD': 'Andorra',
  'AO': 'Angola',
  'AI': 'Anguilla',
  'AQ': 'Antarctica',
  'AG': 'Antigua And Barbuda',
  'AR': 'Argentina',
  'AM': 'Armenia',
  'AW': 'Aruba',
  'AU': 'Australia',
  'AT': 'Austria',
  'AZ': 'Azerbaijan',
  'BS': 'Bahamas',
  'BH': 'Bahrain',
  'BD': 'Bangladesh',
  'BB': 'Barbados',
  'BY': 'Belarus',
  'BE': 'Belgium',
  'BZ': 'Belize',
  'BJ': 'Benin',
  'BM': 'Bermuda',
  'BT': 'Bhutan',
  'BO': 'Bolivia',
  'BQ': 'Bonaire, Sint Eustatius and Saba',
  'BA': 'Bosnia And Herzegovina',
  'BW': 'Botswana',
  'BV': 'Bouvet Island',
  'BR': 'Brazil',
  'IO': 'British Indian Ocean Territory',
  'BN': 'Brunei Darussalam',
  'BG': 'Bulgaria',
  'BF': 'Burkina Faso',
  'BI': 'Burundi',
  'KH': 'Cambodia',
  'CM': 'Cameroon',
  'CA': 'Canada',
  'CV': 'Cape Verde',
  'CW': 'Curaçao',
  'KY': 'Cayman Islands',
  'CF': 'Central African Republic',
  'TD': 'Chad',
  'CL': 'Chile',
  'CN': 'China',
  'CX': 'Christmas Island',
  'CC': 'Cocos (Keeling) Islands',
  'CO': 'Colombia',
  'KM': 'Comoros',
  'CG': 'Congo',
  'CD': 'Congo, Democratic Republic',
  'CK': 'Cook Islands',
  'CR': 'Costa Rica',
  'CI': 'Cote D\'Ivoire',
  'HR': 'Croatia',
  'CU': 'Cuba',
  'CY': 'Cyprus',
  'CZ': 'Czech Republic',
  'DK': 'Denmark',
  'DJ': 'Djibouti',
  'DM': 'Dominica',
  'DO': 'Dominican Republic',
  'EC': 'Ecuador',
  'EG': 'Egypt',
  'SV': 'El Salvador',
  'GQ': 'Equatorial Guinea',
  'ER': 'Eritrea',
  'EE': 'Estonia',
  'ET': 'Ethiopia',
  'FK': 'Falkland Islands (Malvinas)',
  'FO': 'Faroe Islands',
  'FJ': 'Fiji',
  'FI': 'Finland',
  'FR': 'France',
  'GF': 'French Guiana',
  'PF': 'French Polynesia',
  'TF': 'French Southern Territories',
  'GA': 'Gabon',
  'GM': 'Gambia',
  'GE': 'Georgia',
  'DE': 'Germany',
  'GH': 'Ghana',
  'GI': 'Gibraltar',
  'GR': 'Greece',
  'GL': 'Greenland',
  'GD': 'Grenada',
  'GP': 'Guadeloupe',
  'GU': 'Guam',
  'GT': 'Guatemala',
  'GG': 'Guernsey',
  'GN': 'Guinea',
  'GW': 'Guinea-Bissau',
  'GY': 'Guyana',
  'HT': 'Haiti',
  'HM': 'Heard Island & Mcdonald Islands',
  'VA': 'Holy See (Vatican City State)',
  'HN': 'Honduras',
  'HK': 'Hong Kong (China)',
  'HU': 'Hungary',
  'IS': 'Iceland',
  'IN': 'India',
  'ID': 'Indonesia',
  'IR': 'Iran, Islamic Republic Of',
  'IQ': 'Iraq',
  'IE': 'Ireland',
  'IM': 'Isle Of Man',
  'IL': 'Israel',
  'IT': 'Italy',
  'JM': 'Jamaica',
  'JP': 'Japan',
  'JE': 'Jersey',
  'JO': 'Jordan',
  'KZ': 'Kazakhstan',
  'KE': 'Kenya',
  'KI': 'Kiribati',
  'KR': 'Korea',
  'KP': 'Korea, Democratic People\'s Republic Of',
  'KW': 'Kuwait',
  'KG': 'Kyrgyzstan',
  'LA': 'Lao People\'s Democratic Republic',
  'LV': 'Latvia',
  'LB': 'Lebanon',
  'LS': 'Lesotho',
  'LR': 'Liberia',
  'LY': 'Libyan Arab Jamahiriya',
  'LI': 'Liechtenstein',
  'LT': 'Lithuania',
  'LU': 'Luxembourg',
  'MO': 'Macao (China)',
  'MK': 'Macedonia',
  'MG': 'Madagascar',
  'MW': 'Malawi',
  'MY': 'Malaysia',
  'MV': 'Maldives',
  'ML': 'Mali',
  'MT': 'Malta',
  'MH': 'Marshall Islands',
  'MQ': 'Martinique',
  'MR': 'Mauritania',
  'MU': 'Mauritius',
  'YT': 'Mayotte',
  'MX': 'Mexico',
  'FM': 'Micronesia, Federated States Of',
  'MD': 'Moldova',
  'MC': 'Monaco',
  'MN': 'Mongolia',
  'ME': 'Montenegro',
  'MS': 'Montserrat',
  'MA': 'Morocco',
  'MZ': 'Mozambique',
  'MM': 'Myanmar',
  'NA': 'Namibia',
  'NR': 'Nauru',
  'NP': 'Nepal',
  'NL': 'Netherlands',
  'AN': 'Netherlands Antilles',
  'NC': 'New Caledonia',
  'NZ': 'New Zealand',
  'NI': 'Nicaragua',
  'NE': 'Niger',
  'NG': 'Nigeria',
  'NU': 'Niue',
  'NF': 'Norfolk Island',
  'MP': 'Northern Mariana Islands',
  'NO': 'Norway',
  'OM': 'Oman',
  'PK': 'Pakistan',
  'PW': 'Palau',
  'PS': 'Palestinian Territory, Occupied',
  'PA': 'Panama',
  'PG': 'Papua New Guinea',
  'PY': 'Paraguay',
  'PE': 'Peru',
  'PH': 'Philippines',
  'PN': 'Pitcairn',
  'PL': 'Poland',
  'PT': 'Portugal',
  'PR': 'Puerto Rico',
  'QA': 'Qatar',
  'RE': 'Reunion',
  'RO': 'Romania',
  'RU': 'Russian Federation',
  'RW': 'Rwanda',
  'BL': 'Saint Barthelemy',
  'SH': 'Saint Helena',
  'KN': 'Saint Kitts And Nevis',
  'LC': 'Saint Lucia',
  'MF': 'Saint Martin',
  'PM': 'Saint Pierre And Miquelon',
  'VC': 'Saint Vincent And Grenadines',
  'WS': 'Samoa',
  'SM': 'San Marino',
  'ST': 'Sao Tome And Principe',
  'SA': 'Saudi Arabia',
  'SN': 'Senegal',
  'RS': 'Serbia',
  'SC': 'Seychelles',
  'SL': 'Sierra Leone',
  'SG': 'Singapore',
  'SK': 'Slovakia',
  'SI': 'Slovenia',
  'SB': 'Solomon Islands',
  'SO': 'Somalia',
  'ZA': 'South Africa',
  'GS': 'South Georgia And Sandwich Isl.',
  'ES': 'Spain',
  'LK': 'Sri Lanka',
  'SD': 'Sudan',
  'SS': 'South Sudan',
  'SR': 'Suriname',
  'SJ': 'Svalbard And Jan Mayen',
  'SZ': 'Swaziland',
  'SE': 'Sweden',
  'SX': 'Sint Maarten',
  'CH': 'Switzerland',
  'SY': 'Syrian Arab Republic',
  'TW': 'Taiwan (China)',
  'TJ': 'Tajikistan',
  'TZ': 'Tanzania',
  'TH': 'Thailand',
  'TL': 'Timor-Leste',
  'TG': 'Togo',
  'TK': 'Tokelau',
  'TO': 'Tonga',
  'TT': 'Trinidad And Tobago',
  'TN': 'Tunisia',
  'TR': 'Turkey',
  'TM': 'Turkmenistan',
  'TC': 'Turks And Caicos Islands',
  'TV': 'Tuvalu',
  'UG': 'Uganda',
  'UA': 'Ukraine',
  'AE': 'United Arab Emirates',
  'GB': 'United Kingdom',
  'US': 'United States',
  'UM': 'United States Outlying Islands',
  'UY': 'Uruguay',
  'UZ': 'Uzbekistan',
  'VU': 'Vanuatu',
  'VE': 'Venezuela',
  'VN': 'Viet Nam',
  'VG': 'Virgin Islands, British',
  'VI': 'Virgin Islands, U.S.',
  'WF': 'Wallis And Futuna',
  'EH': 'Western Sahara',
  'XK': 'Kosovo',
  'YE': 'Yemen',
  'ZM': 'Zambia',
  'ZW': 'Zimbabwe'
};

class SelectCountries extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.selectEl = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.showSelected = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.handleShipsToCountries = this.handleShipsToCountries.bind(this);
    this.handleSelectEvt = this.handleSelectEvt.bind(this);
    this.handleClearAllSelected = this.handleClearAllSelected.bind(this);
  }

  componentDidMount() {
    let selectEl = this.selectEl.current;
    let cnArr = this.props.shipsToCountries;
    this.handleShipsToCountries(selectEl, cnArr);
    this.handleSelectEvt(selectEl);
  }

  handleShipsToCountries(select, arr) {
    let c = arr.map(i => {
      if (countryName.hasOwnProperty(i)) {
        let el = document.createElement('option');
        el.style.padding = '5px 0';
        el.setAttribute('value', i);
        el.textContent = countryName[i];
        select.insertAdjacentElement('afterbegin', el);
        return countryName[i];
      }
    });
  }

  handleSelectEvt(el) {
    const self = this;
    const sp = this.showSelected.current;
    el.addEventListener('change', function (evt) {
      let selectedOpts = [];
      let selectedArr = evt.target.selectedOptions;
      sp.innerHTML = '';

      for (let n = 0; n < selectedArr.length; n++) {
        if (!selectedOpts.includes(selectedArr[n].value)) {
          selectedOpts.push(selectedArr[n].value);
          let selectedTxt = document.createElement('span');
          selectedTxt.textContent = selectedArr[n].textContent + ', ';
          sp.appendChild(selectedTxt);
        }
      }

      ;
      self.handleClearAllSelected(sp);
      self.props.handleSelectedTargets(selectedOpts);
    });
  }

  handleClearAllSelected(el) {
    const self = this;
    let ch = el.querySelectorAll('span');

    if (ch.length > 0) {
      let del = document.createElement('span');
      del.textContent = 'Clear all selected locations';
      del.setAttribute('style', "cursor:pointer;border:1px solid black;border-radius:5px;margin-left:3em;padding:2px 4px;");
      el.appendChild(del);
      del.addEventListener('click', function () {
        el.innerHTML = '';
        self.props.handleSelectedTargets([]);
      });
    }
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("div", {
      style: {
        marginBottom: '1em',
        fontSize: '1.1em'
      }
    }, "Target locations:"), __jsx("div", {
      style: {
        lineHeight: '2em'
      }
    }, "You have selected: ", __jsx("span", {
      ref: this.showSelected,
      style: {
        fontWeight: '700'
      }
    })), __jsx("select", {
      name: "targetCountries",
      id: "targetCountries",
      multiple: true,
      ref: this.selectEl,
      style: {
        height: '100px',
        width: '50%',
        paddingLeft: '.6em',
        marginTop: '.8em'
      }
    }), __jsx("div", {
      style: {
        marginTop: '5px'
      }
    }, "Please hold ", __jsx("span", {
      style: {
        backgroundColor: '#ddd',
        borderRadius: '5px'
      }
    }, "Ctrl"), " to select multiple locations. Leave it blank if you want to target ALL countires."));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SelectCountries);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator.SC-201903211547\projects\0919\sample-embedded-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map