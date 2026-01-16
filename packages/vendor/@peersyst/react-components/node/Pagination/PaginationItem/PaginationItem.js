"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _PaginationItem = require("./PaginationItem.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["page", "disabled", "size", "className", "selected"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PaginationItem = function PaginationItem(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("PaginationItem", props),
    page = _useMergeDefaultProps.page,
    _useMergeDefaultProps2 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps3 === void 0 ? "md" : _useMergeDefaultProps3,
    className = _useMergeDefaultProps.className,
    selected = _useMergeDefaultProps.selected,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var isEllipsis = page === null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaginationItem.PaginationItemRoot, _objectSpread({
    disabled: disabled,
    size: size,
    selected: selected,
    "aria-current": selected ? true : undefined,
    className: (0, _reactUtils.cx)("PaginationItem", disabled && "Disabled", selected && "Selected", size == null ? void 0 : size.replace(/^./g, function (x) {
      return x.toUpperCase();
    }), className),
    isEllipsis: isEllipsis,
    as: isEllipsis ? "div" : "button",
    type: "button"
  }, rest));
};
var _default = exports["default"] = PaginationItem;