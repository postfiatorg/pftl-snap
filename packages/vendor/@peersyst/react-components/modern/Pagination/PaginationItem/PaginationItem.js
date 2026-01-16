import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["page", "disabled", "size", "className", "selected"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { PaginationItemRoot } from "./PaginationItem.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var PaginationItem = function PaginationItem(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("PaginationItem", props),
    page = _useMergeDefaultProps.page,
    _useMergeDefaultProps2 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps3 === void 0 ? "md" : _useMergeDefaultProps3,
    className = _useMergeDefaultProps.className,
    selected = _useMergeDefaultProps.selected,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var isEllipsis = page === null;
  return /*#__PURE__*/_jsx(PaginationItemRoot, _objectSpread({
    disabled: disabled,
    size: size,
    selected: selected,
    "aria-current": selected ? true : undefined,
    className: cx("PaginationItem", disabled && "Disabled", selected && "Selected", size == null ? void 0 : size.replace(/^./g, function (x) {
      return x.toUpperCase();
    }), className),
    isEllipsis: isEllipsis,
    as: isEllipsis ? "div" : "button",
    type: "button"
  }, rest));
};
export default PaginationItem;