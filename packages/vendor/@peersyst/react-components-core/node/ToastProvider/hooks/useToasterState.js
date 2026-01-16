"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToasterState = useToasterState;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _ToastContext = require("../ToastContext");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onExited"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useToasterState(Toast) {
  var _useContext = (0, _react.useContext)(_ToastContext.ToastContext),
    toasts = _useContext.toasts,
    removeToast = _useContext.removeToast;
  var toast = toasts[0];
  if (toast) {
    var handleOnExited = function handleOnExited() {
      onExited == null || onExited();
      removeToast();
    };
    var content = toast.content,
      _toast$props = toast.props,
      props = _toast$props === void 0 ? {} : _toast$props;
    var _ref = props || {},
      onExited = _ref.onExited,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    var toastProps = _objectSpread({
      content: content,
      onExited: handleOnExited
    }, rest);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Toast, _objectSpread({}, toastProps));
  } else {
    return undefined;
  }
}