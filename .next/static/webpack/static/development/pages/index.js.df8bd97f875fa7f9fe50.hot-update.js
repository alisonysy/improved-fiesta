webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./snippets/imageDropZone.js":
/*!***********************************!*\
  !*** ./snippets/imageDropZone.js ***!
  \***********************************/
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
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var ImageDropZone =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageDropZone, _React$Component);

  function ImageDropZone(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageDropZone);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageDropZone).call(this, props));
    _this.state = {};
    _this.inputRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.handleInpImg = _this.handleInpImg.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageDropZone, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var inputBtn = this.inputRef.current;
      var self = this;
      inputBtn.addEventListener('change', function (e) {
        self.handleInpImg(inputBtn);
      });
    }
  }, {
    key: "handleInpImg",
    value: function handleInpImg(tg) {
      var img = tg.files[0],
          imgs,
          al;
      var imgWrapper = document.createElement('img');
      var delBtn = document.createElement('button');
      var self = this;
      imgs = tg.parentNode.querySelector('.imgs'); // delete button handling

      delBtn.textContent = 'Delete Image';
      delBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var uploadedImg = imgs.querySelector('img');
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
  }, {
    key: "render",
    value: function render() {
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"].Section, null, __jsx("label", {
        htmlFor: "backgroundImg",
        style: {
          marginBottom: '5px'
        }
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
  }]);

  return ImageDropZone;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ImageDropZone);

/***/ })

})
//# sourceMappingURL=index.js.df8bd97f875fa7f9fe50.hot-update.js.map