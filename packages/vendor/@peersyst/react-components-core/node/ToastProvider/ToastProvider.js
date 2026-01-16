"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToastProvider;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useToasterReducer3 = require("./hooks/useToasterReducer");
var _ToastContext = require("./ToastContext");
var _ToastProvider = require("./ToastProvider.types");
var _jsxRuntime = require("react/jsx-runtime");
function ToastProvider(_ref) {
  var children = _ref.children;
  var _useToasterReducer = (0, _useToasterReducer3.useToasterReducer)(),
    _useToasterReducer2 = (0, _slicedToArray2["default"])(_useToasterReducer, 2),
    state = _useToasterReducer2[0],
    dispatch = _useToasterReducer2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToastContext.ToastContext.Provider, {
    value: {
      showToast: function showToast(content, props) {
        return dispatch({
          type: _ToastProvider.ToasterActionType.SHOW_TOAST,
          payload: {
            content: content,
            props: props
          }
        });
      },
      hideToast: function hideToast() {
        return dispatch({
          type: _ToastProvider.ToasterActionType.HIDE_TOAST
        });
      },
      removeToast: function removeToast() {
        return dispatch({
          type: _ToastProvider.ToasterActionType.REMOVE_TOAST
        });
      },
      toasts: state
    },
    children: children
  });
}