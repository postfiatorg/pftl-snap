import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _Typography;
var _excluded = ["noRowsElement", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import clsx from "clsx";
import { TableOverlay } from "../TableOverlay";
import { Typography } from "../../Typography";
import { jsx as _jsx } from "react/jsx-runtime";
var TableNoRowsOverlay = function TableNoRowsOverlay(_ref) {
  var noRowsElement = _ref.noRowsElement,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(TableOverlay, _objectSpread(_objectSpread({
    className: clsx("TableNoRowsOverlay", className)
  }, rest), {}, {
    children: noRowsElement || _Typography || (_Typography = /*#__PURE__*/_jsx(Typography, {
      variant: "body1",
      light: true,
      children: "No rows"
    }))
  }));
};
export default TableNoRowsOverlay;