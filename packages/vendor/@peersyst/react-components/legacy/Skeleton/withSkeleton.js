import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["loading"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import Skeleton from "./Skeleton";
import { jsx as _jsx } from "react/jsx-runtime";
export function withSkeleton(WrappedComponent, skeletonProps) {
  return function (_ref) {
    var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      componentProps = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/_jsx(Skeleton, _objectSpread(_objectSpread({
      loading: loading
    }, skeletonProps), {}, {
      children: /*#__PURE__*/_jsx(WrappedComponent, _objectSpread({
        loading: loading
      }, componentProps))
    }));
  };
}