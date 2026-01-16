import { ModalManagerRoot } from "./ModalManager.styles";
import { useModalState } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export function ModalManager() {
  var modals = useModalState();
  return /*#__PURE__*/_jsx(ModalManagerRoot, {
    id: "modal-root",
    children: modals
  });
}