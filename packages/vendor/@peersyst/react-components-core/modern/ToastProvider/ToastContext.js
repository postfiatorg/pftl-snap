import { createContext } from "react";
export var ToastContext = /*#__PURE__*/createContext({
  showToast: function showToast() {
    return undefined;
  },
  hideToast: function hideToast() {
    return undefined;
  },
  removeToast: function removeToast() {
    return undefined;
  },
  toasts: []
});
export var ToastConsumer = ToastContext.Consumer;