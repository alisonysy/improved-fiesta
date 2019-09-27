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

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_8__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

class ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const app = this.context;

    const redirectToProduct = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_7__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_7__["Redirect"].Action.APP, '/edit-products');
    };

    const twoWeeksFromNow = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + 12096e5).toDateString();
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
      query: GET_PRODUCTS_BY_ID,
      variables: {
        ids: store_js__WEBPACK_IMPORTED_MODULE_6___default.a.get('ids')
      }
    }, ({
      data,
      loading,
      error
    }) => {
      if (loading) return __jsx("div", null, "Loading\u2026");
      if (error) return __jsx("div", null, error.message);
      console.log(data);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["ResourceList"], {
        showHeader: true,
        resourceName: {
          singular: 'Product',
          plural: 'Products'
        },
        items: data.nodes,
        renderItem: item => {
          const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Thumbnail"], {
            source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
            alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''
          });

          const price = item.variants.edges[0].node.price;
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["ResourceList"].Item, {
            id: item.id,
            media: media,
            accessibilityLabel: `View details for ${item.title}`,
            onClick: () => {
              store_js__WEBPACK_IMPORTED_MODULE_6___default.a.set('item', item);
              redirectToProduct();
            }
          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, {
            fill: true
          }, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["TextStyle"], {
            variation: "strong"
          }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, null, __jsx("p", null, "$", price)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, null, __jsx("p", null, "Expires on ", twoWeeksFromNow, " "))));
        }
      }));
    });
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_8__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ }),

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
  }, {
    label: 'Top bar pushes down the rest of the page (always visible while scrolling)',
    value: 'push-down-visible'
  }, {
    label: 'Top bar overlaps top of the page',
    value: 'overlap'
  }, {
    label: 'Top bar overlaps top of the page (always visible while scrolling)',
    value: 'overlap-visible'
  }, {
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
    console.log(this.props.contentConfig);
    const {
      barTxtConfig,
      barFrShGl
    } = this.props.contentConfig;
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      barConfig: {
        bgColor: '#000',
        ftColor: '#fff',
        inpTxt: barTxtConfig.initialMsg1,
        goal: barFrShGl,
        addedHtml: barTxtConfig.initialMsg2
      }
    }), __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      barConfig: {
        bgColor: '#000',
        ftColor: '#fff',
        inpTxt: barTxtConfig.prgMsg1,
        goal: barFrShGl - 1,
        addedHtml: barTxtConfig.prgMsg2
      }
    }), __jsx(_snippets_previewBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      barConfig: {
        bgColor: '#ab4e3d',
        ftColor: '#fff',
        inpTxt: barTxtConfig.achievedMsg,
        addedHtml: barTxtConfig.initialMsg2
      }
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snippets/imageDropZone */ "./snippets/imageDropZone.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function BackgroundSetting(props) {
  const {
    0: bgColor,
    1: setBgColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: bgOpacity,
    1: setBgOpacity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: txtColor,
    1: setTxtColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: specialColor,
    1: setSpecialColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleBgColorChange = val => {
    setBgColor(val);
  };

  const handleBgOpacity = val => {
    setBgOpacity(val);
  };

  const handleTxtColorChange = val => {
    setTxtColor(val);
  };

  const handleSpecialTxtColorChange = val => {
    setSpecialColor(val);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Background color:"), __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: bgColor
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: bgColor,
    onChange: handleBgColorChange
  })), __jsx("div", null, __jsx("h3", null, "Background opacity:"), __jsx("div", {
    style: {
      display: 'inline-block'
    }
  }, bgOpacity), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: bgOpacity,
    onChange: handleBgOpacity,
    type: "number",
    helpText: "0 is transparent, 100 is opaque."
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx("div", null, __jsx("h3", null, "Text color:"), __jsx("div", {
    style: {
      height: '25px',
      width: '25px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#ddd',
      display: 'inline-block',
      backgroundColor: txtColor
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: txtColor,
    onChange: handleTxtColorChange
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
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: specialColor,
    onChange: handleSpecialTxtColorChange
  }))));
}

function Fonts(props) {
  const {
    0: fontSize,
    1: setFontSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(16);
  const {
    0: padding,
    1: setPadding
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);

  const handleFontFam = val => {};

  const handleFontSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(val => {
    console.log(val);
    setFontSize(val);
  }, []);
  const handlePadding = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(val => {
    console.log(val);
    setPadding(val);
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("div", null, "Font family:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleFontFam('Montserrat')
  }, "Montserrat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Font size:",
    suffix: "px",
    type: "number",
    value: fontSize,
    onChange: handleFontSize
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Bar padding:",
    suffix: "px",
    type: "number",
    value: padding,
    onChange: handlePadding
  }));
}

class StyleConfigPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DisplayText"], null, "Style Configuration"), __jsx(BackgroundSetting, null), __jsx(_snippets_imageDropZone__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(Fonts, null))));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");
/* harmony import */ var _components_barList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/barList */ "./components/barList.js");
/* harmony import */ var _components_templateStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/templateStyle */ "./components/templateStyle.js");
/* harmony import */ var _components_contentConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contentConfig */ "./components/contentConfig.js");
/* harmony import */ var _components_styleConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styleConfig */ "./components/styleConfig.js");
/* harmony import */ var _components_targetConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/targetConfig */ "./components/targetConfig.js");
/* harmony import */ var _components_customCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/customCode */ "./components/customCode.js");
/* harmony import */ var _components_preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/preview */ "./components/preview.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleSelection", src => {
      const idsFromSrc = src.selection.map(prod => prod.id);
      this.setState({
        open: false
      });
      console.log(src);
      store_js__WEBPACK_IMPORTED_MODULE_5___default.a.set('ids', idsFromSrc);
    });

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
      barPosition: ''
    };
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
      barLink
    } = this.state;
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__["TitleBar"], {
      primaryAction: {
        content: 'Select prod',
        onAction: () => this.setState({
          open: true
        })
      }
    }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__["ResourcePicker"], {
      resourceType: "Product",
      showVariants: true,
      open: this.state.open,
      onSelection: src => this.handleSelection(src),
      onCancel: () => this.setState({
        open: false
      })
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, null, __jsx(_components_barList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      handleEditId: id => this.handleEditId(id)
    }), this.state.onEdit ? __jsx("div", {
      style: {
        marginTop: '3em'
      }
    }, __jsx(_components_templateStyle__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_preview__WEBPACK_IMPORTED_MODULE_13__["default"], {
      contentConfig: {
        barTxtConfig,
        barFrShGl,
        barLink
      }
    }), __jsx(_components_contentConfig__WEBPACK_IMPORTED_MODULE_9__["default"], {
      handleContentConfig_msg: msg => this.setState({
        barTxtConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.barTxtConfig, msg)
      }),
      handleContentConfig_goal: gl => this.setState({
        barFrShGl: gl
      }),
      handleContentConfig_link: val => this.setState({
        barLink: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.barLink, val)
      })
    }), __jsx(_components_styleConfig__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_targetConfig__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_customCode__WEBPACK_IMPORTED_MODULE_12__["default"], null)) : null));
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
    this.state = {
      files: [],
      rejectedFiles: [],
      hasError: false
    };
  }

  render() {
    const {
      files,
      hasError,
      rejectedFiles
    } = this.state;

    const fileUpload = !files.length && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DropZone"].FileUpload, null);

    const uploadedFiles = files.length > 0 && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      vertical: true
    }, files.map((file, index) => __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      key: index
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Thumbnail"], {
      size: "small",
      alt: file.name,
      source: window.URL.createObjectURL(file)
    }), __jsx("div", null, file.name, " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Caption"], null, file.size, " bytes")))));

    const errorMessage = hasError && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
      title: "The following images couldn\u2019t be uploaded:",
      status: "critical"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["List"], {
      type: "bullet"
    }, rejectedFiles.map((file, index) => __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      key: index
    }, `"${file.name}" is not supported. File type must be .gif, .jpg, .png or .svg.`))));

    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      vertical: true
    }, errorMessage, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DropZone"], {
      accept: "image/*",
      type: "image",
      onDrop: (files, acceptedFiles, rejectedFiles) => {
        this.setState({
          files: [...this.state.files, ...acceptedFiles],
          rejectedFiles: rejectedFiles,
          hasError: rejectedFiles.length > 0
        });
      },
      label: "Click the drop zone to continue uploading more images: "
    }, uploadedFiles, fileUpload));
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class PreviewBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      animReq: null
    };
    this.htmlRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.closeBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.injectHtml = this.injectHtml.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
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

  render() {
    const {
      bgColor,
      ftColor
    } = this.props.barConfig;
    return __jsx("div", {
      style: {
        margin: '20px 0'
      }
    }, __jsx("div", {
      style: {
        padding: '8px 5px',
        fontSize: '18px',
        lineHeight: '22.5px',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: bgColor,
        color: ftColor
      }
    }, this.props.barConfig.goal ? this.props.barConfig.inpTxt + '$' + this.props.barConfig.goal : this.props.barConfig.inpTxt, this.props.barConfig.addedHtml ? this.injectHtml(this.props.barConfig.addedHtml) : null, __jsx("div", {
      style: {
        position: 'absolute',
        top: '8px',
        right: '8px',
        cursor: 'pointer'
      },
      ref: this.closeBtn
    }, "X")));
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

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

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