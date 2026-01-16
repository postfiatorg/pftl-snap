import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useToasterReducer } from "./hooks/useToasterReducer";
import { ToastContext } from "./ToastContext";
import { ToasterActionType } from "./ToastProvider.types";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ToastProvider(_ref) {
  var children = _ref.children;
  var _useToasterReducer = useToasterReducer(),
    _useToasterReducer2 = _slicedToArray(_useToasterReducer, 2),
    state = _useToasterReducer2[0],
    dispatch = _useToasterReducer2[1];
  return /*#__PURE__*/_jsx(ToastContext.Provider, {
    value: {
      showToast: function showToast(content, props) {
        return dispatch({
          type: ToasterActionType.SHOW_TOAST,
          payload: {
            content: content,
            props: props
          }
        });
      },
      hideToast: function hideToast() {
        return dispatch({
          type: ToasterActionType.HIDE_TOAST
        });
      },
      removeToast: function removeToast() {
        return dispatch({
          type: ToasterActionType.REMOVE_TOAST
        });
      },
      toasts: state
    },
    children: children
  });
}