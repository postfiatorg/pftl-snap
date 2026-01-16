import { FormControlErrorRoot } from "./FormControlError.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var FormControlError = function FormControlError(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("FormControlError", props),
    error = _useMergeDefaultProps.error,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  return /*#__PURE__*/_jsx(FormControlErrorRoot, {
    hint: error,
    className: cx("FormControlError", className),
    style: style
  });
};
export default FormControlError;