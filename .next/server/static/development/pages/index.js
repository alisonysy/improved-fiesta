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
    }
  }
`;

class BarList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e, id) {
    console.log(id);
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
      console.log(data); // #toUpdate: to fetch from database

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



function NameField() {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
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
    alignment: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Initial message: ",
    type: "text",
    value: msg,
    onChange: nw => setMsg(nw),
    helpText: "Display when cart is empty"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], null, props.currency), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], null, props.goal), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
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
    alignment: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Progress message: ",
    type: "text",
    value: msg,
    onChange: nw => setMsg(nw),
    helpText: "Displays when cart value is less than the goal"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], null, props.currency), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], null, gl - 1), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
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
      return isSelected && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
        size: "small"
      }, "Place the code");
    }
  }];

  const handleSelected = val => {
    setSelected(val);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ChoiceList"], {
    title: 'Select a Display Position: ',
    choices: choices,
    selected: isSelected,
    onChange: handleSelected
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
        prgMsg2: '',
        achievedMsg: 'Free Shipping Worldwide'
      }
    };
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  handleSave(evt) {
    evt.persist();
    setTimeout(() => {
      console.log(evt);
    }, 0);
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
      onSubmit: this.handleSave
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"], null, __jsx(NameField, null), __jsx(FreeShippingGoal, {
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
    }), __jsx(SetPosition, null))));
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
    console.log(val);
    this.setState(() => {
      return {
        customCode: val
      };
    });
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: v => console.log(v)
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DisplayText"], {
      size: "small"
    }, "Custom code"), __jsx("textarea", {
      rows: "10",
      cols: "80",
      placeholder: "The code here can only modify the bar style",
      style: {
        marginLeft: '10px'
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snippets/imageDropZone */ "./snippets/imageDropZone.js");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/fonts.css */ "./css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function BackgroundSetting(props) {
  const {
    0: bgColor,
    1: setBgColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('#000');
  const {
    0: bgOpacity,
    1: setBgOpacity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('100');
  const {
    0: txtColor,
    1: setTxtColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('#b31219');
  const {
    0: specialColor,
    1: setSpecialColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('#fff');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    props.handleStyleConfig({
      bgColor: bgColor,
      bgOpacity: bgOpacity,
      txtColor: txtColor,
      specialColor: specialColor
    }, undefined);
  }, [bgColor, bgOpacity, txtColor, specialColor]);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Background color:"), __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: bgColor
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    value: bgColor,
    onChange: nw => setBgColor(nw)
  })), __jsx("div", null, __jsx("h3", null, "Background opacity:"), __jsx("div", {
    style: {
      display: 'inline-block'
    }
  }, bgOpacity), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    value: bgOpacity,
    onChange: nw => setBgOpacity(nw),
    type: "number",
    helpText: "0 is transparent, 100 is opaque."
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Text color:"), __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: txtColor
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    value: txtColor,
    onChange: nw => setTxtColor(nw)
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
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    value: specialColor,
    onChange: nw => setSpecialColor(nw)
  }))));
}

function Fonts(props) {
  const {
    0: fontSize,
    1: setFontSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(18);
  const {
    0: padding,
    1: setPadding
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);
  const {
    0: fontFam,
    1: setFontFam
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('sans-serif');
  const handleFontFam = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(val => {
    setFontFam(val);
    props.handleStyleConfig(undefined, {
      fontFamily: val
    });
  }, [fontFam]);
  const handleFontSize = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(val => {
    setFontSize(val);
    props.handleStyleConfig(undefined, {
      fontSize: val
    });
  }, []);
  const handlePadding = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(val => {
    setPadding(val);
    props.handleStyleConfig(undefined, {
      barPadding: val
    });
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, null, __jsx("div", null, "Font family:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => handleFontFam('Montserrat')
  }, "Montserrat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => handleFontFam('sans-serif')
  }, "Sans serif"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: "Font size:",
    suffix: "px",
    type: "number",
    value: fontSize,
    onChange: handleFontSize
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: "Bar padding:",
    suffix: "px",
    type: "number",
    value: padding,
    onChange: handlePadding
  }));
}

class StyleConfigPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
        fontCf = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fontConfig, fontCf);
        return {
          colorConfig: state.colorConfig,
          fontConfig: fontCf
        };
      } else if (fontCf === undefined) {
        colorCf = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.colorConfig, colorCf);
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
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], null, "Style Configuration"), __jsx(BackgroundSetting, {
      handleStyleConfig: this.handleStyleConfig
    }), __jsx(_snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function IncludePage() {
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
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    console.log('choose display on which page', value);
    setSelected(value);
  }, []);
  const handleUrlInp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    console.log('url provided', value);
    setUrlInp(value);
  }, []);
  const handleUrlExc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(val => console.log(val), []);
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
    onChange: handleChange
  }));
}

class TargetConfigPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DisplayText"], {
      size: "small"
    }, "Target Configuration"), __jsx(IncludePage, null))));
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
      color: ftColor
    }
  }, props.styleT);
}

class TemplateStyle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("ul", {
      style: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '0 2em',
        marginTop: '5px'
      }
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_barList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/barList */ "./components/barList.js");
/* harmony import */ var _components_templateStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/templateStyle */ "./components/templateStyle.js");
/* harmony import */ var _components_contentConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contentConfig */ "./components/contentConfig.js");
/* harmony import */ var _components_styleConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styleConfig */ "./components/styleConfig.js");
/* harmony import */ var _components_targetConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/targetConfig */ "./components/targetConfig.js");
/* harmony import */ var _components_customCode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/customCode */ "./components/customCode.js");
/* harmony import */ var _components_preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/preview */ "./components/preview.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const INJECT_SCRIPT = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
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
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(INJECT_SCRIPT);

  const handleInjectionSuccess = (data, b) => {
    console.log(data);
    setTimeout(b => {
      b = 'dismiss';
    }, 2500);
    return b === 'success' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Toast"], {
      content: "Saved successfully.",
      onDismiss: () => {}
    }) : b === 'error' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Toast"], {
      content: "Something went wrong.",
      onDismiss: () => {}
    }) : null;
  };

  return __jsx("div", {
    style: {
      marginTop: '50px',
      height: '100px'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => {
      props.handleEdit();
    }
  }, "Cancel"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true,
    onClick: e => {
      e.preventDefault();
      console.log('calling useMutation hooks');
      injectScriptTag({
        variables: {
          input: {
            displayScope: 'ONLINE_STORE',
            src: 'https://5be47b78.ngrok.io/_next/static/chunks/topBarInjection.js'
          }
        }
      });
    }
  }, "Save")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Frame"], null, data && handleInjectionSuccess(data, 'success'), error && handleInjectionSuccess(error, 'error')));
}

class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      onEdit: false,
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
      }
    };
    this.baseState = this.state;
    this.handleEditId = this.handleEditId.bind(this);
  }

  handleEditId(id) {
    console.log(id);
    this.setState({
      onEdit: true
    });
  }

  render() {
    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids');
    const {
      barTxtConfig,
      barFrShGl,
      barLink,
      styleConfig,
      bgImg
    } = this.state;
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, null, __jsx(_components_barList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      handleEditId: id => this.handleEditId(id)
    }), this.state.onEdit ? __jsx("div", {
      style: {
        marginTop: '3em'
      }
    }, __jsx(_components_templateStyle__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_preview__WEBPACK_IMPORTED_MODULE_12__["default"], {
      contentConfig: {
        barTxtConfig,
        barFrShGl,
        barLink
      },
      styleConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styleConfig),
      bgImg: bgImg
    }), __jsx(_components_contentConfig__WEBPACK_IMPORTED_MODULE_8__["default"], {
      handleContentConfig_msg: msg => this.setState({
        barTxtConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.barTxtConfig, msg)
      }),
      handleContentConfig_goal: gl => this.setState({
        barFrShGl: gl
      }),
      handleContentConfig_link: val => this.setState({
        barLink: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.barLink, val)
      })
    }), __jsx(_components_styleConfig__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    }), __jsx(_components_targetConfig__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_customCode__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(SaveUserPreference, {
      handleEdit: () => {
        this.setState(this.baseState);
      }
    })) : null));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

    if (opacity !== 100) {
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