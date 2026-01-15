import { useToasterState } from "@peersyst/react-components-core";
import { Toast } from "../Toast";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Toaster() {
  var toast = useToasterState(Toast);
  return /*#__PURE__*/_jsx("div", {
    id: "toast-root",
    children: toast
  });
}