(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("react"), require("styled-components"), require("styled-utils"), require("styled-theme"));
	else if(typeof define === 'function' && define.amd)
		define("coderbox-atoms", ["classnames", "react", "styled-components", "styled-utils", "styled-theme"], factory);
	else if(typeof exports === 'object')
		exports["coderbox-atoms"] = factory(require("classnames"), require("react"), require("styled-components"), require("styled-utils"), require("styled-theme"));
	else
		root["coderbox-atoms"] = factory(root["classnames"], root["react"], root["styled-components"], root["styled-utils"], root["styled-theme"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _styledUtils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonElement = _styledComponents2.default.div.withConfig({
  displayName: 'Button__ButtonElement'
})(['font-family:', ';font-size:inherit;display:inline-flex;align-items:center;justify-content:center;padding:0px 1.2em;font-weight:400;cursor:pointer;outline:none;height:2.25em;border:1px solid;border-color:transparent;border-radius:3px;margin:0 0.25em 0 0;'], (0, _styledTheme.font)('primary'));

var ButtonGroup = _styledComponents2.default.div.withConfig({
  displayName: 'Button__ButtonGroup'
})(['& > .button{margin:0 -1px 0 0;border-radius:0;}& > .button:first-child{border-radius:3px 0px 0px 3px;}& > .button:last-child{border-radius:0px 3px 3px 0px;margin-right:0px}']);

var Button = function Button(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === undefined ? 'a' : _ref$as,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['as', 'children']);

  var className = (0, _classnames2.default)('button', props.className);
  var Element = ButtonElement.withComponent(as);

  return _react2.default.createElement(
    Element,
    _extends({}, props, { className: className }),
    children
  );
};

Button.defaultProps = {
  isColor: 'link'
};

var Export = (0, _styledUtils.combine)(Button, [_styledUtils.withColors, _styledUtils.withHelpers]);

Export.Group = (0, _styledUtils.withHelpers)(ButtonGroup);
Export.displayName = Button;

exports.default = Export;

/***/ }),

/***/ "./src/Icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledUtils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconElement = _styledComponents2.default.div.withConfig({
  displayName: 'Icon__IconElement'
})(['']);

var IconGroup = _styledComponents2.default.div.withConfig({
  displayName: 'Icon__IconGroup'
})(['']);

var Button = function Button(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === undefined ? 'i' : _ref$as,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ['as', 'name']);

  var className = (0, _classnames2.default)('icon fa fa-' + name, props.className);
  var Element = IconElement.withComponent(as);

  return _react2.default.createElement(Element, _extends({}, props, { className: className }));
};

Button.defaultProps = {
  isColor: 'gray',
  isInverted: true
};

var Export = (0, _styledUtils.combine)(Button, [_styledUtils.withColors, _styledUtils.withHelpers]);

Export.Group = (0, _styledUtils.withHelpers)(IconGroup);
Export.displayName = 'Icon';

exports.default = Export;

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.Icon = exports.Button = undefined;

var _Button = __webpack_require__("./src/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Icon = __webpack_require__("./src/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _theme = __webpack_require__("./src/theme.js");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.Icon = _Icon2.default;
exports.theme = _theme2.default;

/***/ }),

/***/ "./src/theme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = {};

theme.palettes = {
  primary: ['#1b8ceb'],
  success: ['#4caf50'],
  danger: ['#e91e63'],
  light: ['#eee'],
  white: ['#fff'],
  black: ['#000']
};

theme.fonts = {
  primary: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
};

theme.sizes = {
  maxWidth: '960px',
  font: { tiny: '0.55rem', small: '0.75rem', medium: '1rem', large: '1.25rem', big: '1.5rem', huge: '2rem' }
};

theme.shadows = {
  light: '0 1px 1px rgba(0,0,0,0.08)',
  normal: '0 1px 2px rgba(0, 0, 0, 0.12)',
  heavy: '0 2px 2px rgba(0, 0, 0, 0.15)'
};

exports.default = theme;

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("styled-utils");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ })

/******/ });
});
//# sourceMappingURL=coderbox-atoms.js.map