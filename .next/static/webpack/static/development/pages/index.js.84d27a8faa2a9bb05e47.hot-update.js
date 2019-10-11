webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_barList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/barList */ "./components/barList.js");
/* harmony import */ var _components_templateStyle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/templateStyle */ "./components/templateStyle.js");
/* harmony import */ var _components_contentConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/contentConfig */ "./components/contentConfig.js");
/* harmony import */ var _components_styleConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/styleConfig */ "./components/styleConfig.js");
/* harmony import */ var _components_targetConfig__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/targetConfig */ "./components/targetConfig.js");
/* harmony import */ var _components_customCode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/customCode */ "./components/customCode.js");
/* harmony import */ var _components_preview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/preview */ "./components/preview.js");











var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  mutation scriptTagCreate($input: ScriptTagInput!) {\n    scriptTagCreate(input: $input) {\n      scriptTag {\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var INJECT_SCRIPT = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());

function SaveUserPreference(props) {
  var _useMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(INJECT_SCRIPT),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useMutation, 2),
      injectScriptTag = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      error = _useMutation2$.error;

  var handleInjectionSuccess = function handleInjectionSuccess(data, b) {
    console.log(data);
    setTimeout(function (b) {
      b = 'dismiss';
    }, 2500);
    return b === 'success' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Toast"], {
      content: "Saved successfully.",
      onDismiss: function onDismiss() {}
    }) : b === 'error' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Toast"], {
      content: "Something went wrong.",
      onDismiss: function onDismiss() {}
    }) : null;
  };

  return __jsx("div", {
    style: {
      marginTop: '50px',
      height: '100px'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    onClick: function onClick() {
      props.handleEdit();
    }
  }, "Cancel"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    primary: true,
    onClick: function onClick(e) {
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
  }, "Save")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Frame"], null, data && handleInjectionSuccess(data, 'success'), error && handleInjectionSuccess(error, 'error')));
}

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.state = {
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
    _this.baseState = _this.state;
    _this.finalBars = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.handleEditId = _this.handleEditId.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "handleEditId",
    value: function handleEditId(id) {
      console.log(id);
      this.setState({
        onEdit: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_14___default.a.get('ids');
      var _this$state = this.state,
          barTxtConfig = _this$state.barTxtConfig,
          barFrShGl = _this$state.barFrShGl,
          barLink = _this$state.barLink,
          styleConfig = _this$state.styleConfig,
          bgImg = _this$state.bgImg,
          savedName = _this$state.savedName,
          barPosition = _this$state.barPosition,
          dspOnPage = _this$state.dspOnPage,
          selectedTargets = _this$state.selectedTargets;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, null, __jsx(_components_barList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handleEditId: function handleEditId(id) {
          return _this2.handleEditId(id);
        },
        handleTargetCountries: function handleTargetCountries(arr) {
          return _this2.setState({
            shipsToCountries: arr
          }, function () {
            console.log(this.state.shipsToCountries);
          });
        }
      }), this.state.onEdit ? __jsx("div", {
        style: {
          marginTop: '3em'
        }
      }, __jsx(_components_templateStyle__WEBPACK_IMPORTED_MODULE_16__["default"], {
        handleClickedLi: function handleClickedLi(bg, ftColor) {
          return _this2.setState({
            styleConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this2.state.styleConfig, {
              colorConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this2.state.styleConfig.colorConfig, {
                bgColor: bg,
                txtColor: ftColor
              })
            })
          });
        }
      }), __jsx(_components_preview__WEBPACK_IMPORTED_MODULE_21__["default"], {
        others: {
          savedName: savedName,
          barPosition: barPosition,
          dspOnPage: dspOnPage,
          selectedTargets: selectedTargets
        },
        contentConfig: {
          barTxtConfig: barTxtConfig,
          barFrShGl: barFrShGl,
          barLink: barLink
        },
        styleConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styleConfig),
        bgImg: bgImg,
        ref: this.finalBars
      }), __jsx(_components_contentConfig__WEBPACK_IMPORTED_MODULE_17__["default"], {
        handleContentConfig_msg: function handleContentConfig_msg(msg) {
          return _this2.setState({
            barTxtConfig: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this2.barTxtConfig, msg)
          });
        },
        handleContentConfig_goal: function handleContentConfig_goal(gl) {
          return _this2.setState({
            barFrShGl: gl
          });
        },
        handleContentConfig_link: function handleContentConfig_link(val) {
          return _this2.setState({
            barLink: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this2.state.barLink, val)
          });
        },
        handleName: function handleName(name) {
          return _this2.setState({
            savedName: name
          });
        },
        handleBarPosition: function handleBarPosition(p) {
          return _this2.setState({
            barPosition: p
          });
        }
      }), __jsx(_components_styleConfig__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        handleStyleConfig: function handleStyleConfig(colorCf, fontCf) {
          _this2.setState({
            styleConfig: {
              colorConfig: colorCf,
              fontConfig: fontCf
            }
          });
        },
        uploadBgImg: function uploadBgImg(bgFile) {
          return _this2.setState({
            bgImg: bgFile
          });
        }
      }, this.state)), __jsx(_components_targetConfig__WEBPACK_IMPORTED_MODULE_19__["default"], {
        handleDisplayOnPage: function handleDisplayOnPage(sec, url) {
          return _this2.setState({
            dspOnPage: {
              selected: sec,
              url: url
            }
          });
        },
        shipsToCountries: this.state.shipsToCountries,
        handleSelectedTargets: function handleSelectedTargets(val) {
          return _this2.setState({
            selectedTargets: val
          }, function () {
            console.log('selected targets are', this.state.selectedTargets);
          });
        }
      }), __jsx(_components_customCode__WEBPACK_IMPORTED_MODULE_20__["default"], {
        handleCustomCode: function handleCustomCode(script, style) {
          _this2.setState({
            customCode: {
              script: script,
              style: style
            }
          });
        }
      }), __jsx(SaveUserPreference, {
        handleEdit: function handleEdit() {
          _this2.setState(_this2.baseState);
        },
        handleSaving: function handleSaving() {
          console.log(_this2.finalBars.current);
        }
      })) : null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.84d27a8faa2a9bb05e47.hot-update.js.map