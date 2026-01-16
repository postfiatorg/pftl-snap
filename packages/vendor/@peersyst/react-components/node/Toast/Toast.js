"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Toast;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Toast = require("./Toast.styles");
var _getAnimation2 = require("./utils/getAnimation");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Toast(props) {
  var _ToastAlert;
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Toast", props),
    content = _useMergeDefaultProps.content,
    icon = _useMergeDefaultProps.icon,
    type = _useMergeDefaultProps.type,
    action = _useMergeDefaultProps.action,
    _useMergeDefaultProps2 = _useMergeDefaultProps.position,
    position = _useMergeDefaultProps2 === void 0 ? "top-right" : _useMergeDefaultProps2,
    openProp = _useMergeDefaultProps.open,
    onClose = _useMergeDefaultProps.onClose,
    onExited = _useMergeDefaultProps.onExited,
    _useMergeDefaultProps3 = _useMergeDefaultProps.animation,
    animation = _useMergeDefaultProps3 === void 0 ? "fadingSlide" : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.duration,
    duration = _useMergeDefaultProps4 === void 0 ? 4000 : _useMergeDefaultProps4,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    elevation = _useMergeDefaultProps.elevation,
    square = _useMergeDefaultProps.square;
  var _getAnimation = (0, _getAnimation2.getAnimation)(animation, position),
    AnimatedComponent = _getAnimation.AnimatedComponent,
    AnimatedComponentProps = _getAnimation.props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.Toast, {
    open: openProp,
    onClose: onClose,
    type: type,
    duration: duration,
    children: function children(open) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toast.ToastContainer, {
        position: position,
        className: "ToastContainer",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedComponent, _objectSpread(_objectSpread({
          "in": open,
          duration: 200,
          onExited: onExited
        }, AnimatedComponentProps), {}, {
          children: _ToastAlert || (_ToastAlert = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toast.ToastAlert, {
            type: type,
            content: content,
            icon: icon,
            action: action,
            className: className,
            style: style,
            elevation: elevation,
            square: square
          }))
        }))
      });
    }
  });
}