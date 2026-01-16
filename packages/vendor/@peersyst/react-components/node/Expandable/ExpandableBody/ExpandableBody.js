"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpandableBody;
var _ExpandableContext = require("../ExpandableContext");
var _ExpandableFooter = require("./ExpandableFooter");
var _ExpandableHeader = require("./ExpandableHeader");
var _ExpandableContent = require("./ExpandableContent");
var _reactUtils = require("@peersyst/react-utils");
var _ExpandableBody = require("./ExpandableBody.styles");
var _Animated = require("../../Animated");
var _jsxRuntime = require("react/jsx-runtime");
function ExpandableBody(_ref) {
  var className = _ref.className,
    style = _ref.style,
    children = _ref.children;
  var header = (0, _reactUtils.findSlot)(children, _ExpandableHeader.ExpandableHeader);
  var content = (0, _reactUtils.findSlot)(children, _ExpandableContent.ExpandableContent);
  var footer = (0, _reactUtils.findSlot)(children, _ExpandableFooter.ExpandableFooter);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableContext.ExpandableConsumer, {
    children: function children(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated.Animated.Collapse, {
        "in": open,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ExpandableBody.ExpandableBodyRoot, {
          className: (0, _reactUtils.cx)("ExpandableBody", className),
          style: style,
          children: [header, content, footer]
        })
      });
    }
  });
}