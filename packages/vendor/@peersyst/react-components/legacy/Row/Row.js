import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["wrap"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { RowRoot } from "./Row.styles";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var Row = /*#__PURE__*/forwardRef(function (props, _ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("Row", props),
    wrap = _useMergeDefaultProps.wrap,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(RowRoot, _objectSpread(_objectSpread({}, rest), {}, {
    shouldWrap: wrap,
    ref: function ref(r) {
      return setRef(_ref, r);
    }
  }));
});
Row.displayName = "Row";
export default Row;