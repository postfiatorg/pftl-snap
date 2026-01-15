"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpandableHeader;
var _ExpandableHeader = require("./ExpandableHeader.styles");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
function ExpandableHeader(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableHeader.ExpandableHeaderRoot, {
    className: (0, _reactUtils.cx)("ExpandableHeader", className),
    style: style,
    children: children
  });
}