var _Toaster;
import { ToastProvider as CoreToastProvider } from "@peersyst/react-components-core";
import Toaster from "./Toaster";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ToastProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsxs(CoreToastProvider, {
    children: [_Toaster || (_Toaster = /*#__PURE__*/_jsx(Toaster, {})), children]
  });
}