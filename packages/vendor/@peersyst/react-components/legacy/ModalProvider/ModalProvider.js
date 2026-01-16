var _ModalManager;
import { ModalManager } from "./ModalManager/ModalManager";
import { ModalProvider as CoreModalProvider } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ModalProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsxs(CoreModalProvider, {
    children: [_ModalManager || (_ModalManager = /*#__PURE__*/_jsx(ModalManager, {})), children]
  });
}