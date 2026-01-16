"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpandableFooter;
var _ExpandableFooter = require("./ExpandableFooter.styles");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
function ExpandableFooter(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableFooter.ExpandableFooterRoot, {
    className: (0, _reactUtils.cx)("ExpandableFooter", className),
    style: style,
    children: children
  });
}