import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { ColRoot } from "./Col.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
var Col = /*#__PURE__*/forwardRef(function (props, _ref) {
  var mergedProps = useMergeDefaultProps("Col", props);
  return /*#__PURE__*/_jsx(ColRoot, _objectSpread(_objectSpread({}, mergedProps), {}, {
    ref: function ref(r) {
      return setRef(_ref, r);
    }
  }));
});
export default Col;