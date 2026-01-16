"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Col = require("./Col.styles");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _react = require("react");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Col = /*#__PURE__*/(0, _react.forwardRef)(function (props, _ref) {
  var mergedProps = (0, _reactComponentsCore.useMergeDefaultProps)("Col", props);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.ColRoot, _objectSpread(_objectSpread({}, mergedProps), {}, {
    ref: function ref(r) {
      return (0, _reactUtils.setRef)(_ref, r);
    }
  }));
});
var _default = exports["default"] = Col;