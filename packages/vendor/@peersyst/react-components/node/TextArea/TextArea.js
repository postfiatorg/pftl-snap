"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _TextInput = _interopRequireDefault(require("../TextInput/TextInput"));
var _TextArea = require("./TextArea.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["cols", "rows", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextArea = /*#__PURE__*/(0, _react.forwardRef)(function TextArea(props, _ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("TextArea", props),
    cols = _useMergeDefaultProps.cols,
    rows = _useMergeDefaultProps.rows,
    className = _useMergeDefaultProps.className,
    textInputProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput["default"], _objectSpread(_objectSpread({
    className: (0, _reactUtils.cx)("TextArea", className)
  }, textInputProps), {}, {
    children: function children(props) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea.TextAreaInput, _objectSpread(_objectSpread({}, props), {}, {
        cols: cols || 10,
        rows: rows || 3,
        ref: function ref(r) {
          return (0, _reactUtils.setRef)(_ref, r);
        }
      }));
    }
  }));
});
var _default = exports["default"] = TextArea;