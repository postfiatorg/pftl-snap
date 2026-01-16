import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["onExited"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useContext } from "react";
import { ToastContext } from "../ToastContext";
import { jsx as _jsx } from "react/jsx-runtime";
export function useToasterState(Toast) {
  var _useContext = useContext(ToastContext),
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
      rest = _objectWithoutProperties(_ref, _excluded);
    var toastProps = _objectSpread({
      content: content,
      onExited: handleOnExited
    }, rest);
    return /*#__PURE__*/_jsx(Toast, _objectSpread({}, toastProps));
  } else {
    return undefined;
  }
}