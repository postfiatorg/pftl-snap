import { useContext } from "react";
import { ToastContext } from "../ToastContext";
export function useToast() {
  var _useContext = useContext(ToastContext),
    showToast = _useContext.showToast,
    hideToast = _useContext.hideToast,
    toasts = _useContext.toasts;
  return {
    showToast: showToast,
    hideToast: hideToast,
    toastActive: toasts.length > 0
  };
}