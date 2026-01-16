import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["cols", "rows", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import TextInput from "../TextInput/TextInput";
import { TextAreaInput } from "./TextArea.styles";
import { cx, setRef } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { forwardRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
var TextArea = /*#__PURE__*/forwardRef(function TextArea(props, _ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("TextArea", props),
    cols = _useMergeDefaultProps.cols,
    rows = _useMergeDefaultProps.rows,
    className = _useMergeDefaultProps.className,
    textInputProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(TextInput, _objectSpread(_objectSpread({
    className: cx("TextArea", className)
  }, textInputProps), {}, {
    children: function children(props) {
      return /*#__PURE__*/_jsx(TextAreaInput, _objectSpread(_objectSpread({}, props), {}, {
        cols: cols || 10,
        rows: rows || 3,
        ref: function ref(r) {
          return setRef(_ref, r);
        }
      }));
    }
  }));
});
export default TextArea;