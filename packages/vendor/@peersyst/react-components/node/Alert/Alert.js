"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Alert = require("./Alert.styles");
var _useGetAlertIcon = _interopRequireDefault(require("./hook/useGetAlertIcon"));
var _Row = require("../Row");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var Alert = function Alert(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Alert", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.icon,
    iconProp = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2,
    content = _useMergeDefaultProps.content,
    type = _useMergeDefaultProps.type,
    action = _useMergeDefaultProps.action,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps3 = _useMergeDefaultProps.elevation,
    elevation = _useMergeDefaultProps3 === void 0 ? 0 : _useMergeDefaultProps3,
    square = _useMergeDefaultProps.square;
  var defaultIcon = (0, _useGetAlertIcon["default"])(type);
  var icon = iconProp === true ? defaultIcon : iconProp;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.AlertRoot, {
    type: type,
    className: (0, _reactUtils.cx)("Alert", type && (0, _reactUtils.capitalize)(type), className),
    style: style,
    elevation: elevation,
    square: square,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
      flex: 1,
      gap: 10,
      wrap: true,
      wrapGap: 10,
      justifyContent: "space-between",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
        flex: 1,
        alignItems: "flex-start",
        gap: 10,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
          flex: 0.05,
          children: icon
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
          flex: 0.95,
          children: content
        })]
      }), action && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.AlertAction, {
        className: "AlertAction",
        children: action
      })]
    })
  });
};
var _default = exports["default"] = Alert;