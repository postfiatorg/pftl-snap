import { FormControlHintRoot } from "./FormControlHint.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var FormControlHint = function FormControlHint(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("FormControlHint", props),
    hint = _useMergeDefaultProps.hint,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps2 = _useMergeDefaultProps.light,
    light = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2;
  return /*#__PURE__*/_jsx(FormControlHintRoot, {
    className: cx("FormControlHint", className),
    style: style,
    light: light,
    children: hint
  });
};
export default FormControlHint;