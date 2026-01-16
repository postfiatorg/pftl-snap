"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpandableContent;
var _ExpandableContent = require("./ExpandableContent.styles");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
function ExpandableContent(_ref) {
  var children = _ref.children,
    style = _ref.style,
    className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableContent.ExpandableContentRoot, {
    className: (0, _reactUtils.cx)("ExpandableContent", className),
    style: style,
    children: children
  });
}