"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividerWithChildren = exports.DividerRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Row = require("../Row");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var DividerRoot = exports.DividerRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n"])), function (_ref) {
  var height = _ref.height,
    width = _ref.width,
    color = _ref.color;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        height: ", ";\n        background-color: ", ";\n\n        width: ", ";\n    "])), height, color || "currentColor", function () {
    switch (width) {
      case "sm":
        return "100px";
      case "md":
        return "250px";
      case "lg":
        return "500px";
      case "full-width":
        return "100%";
    }
  });
});
var DividerWithChildren = exports.DividerWithChildren = (0, _styledComponents["default"])(_Row.Row)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 20px;\n\n    width: ", ";\n"])), function (_ref2) {
  var width = _ref2.width;
  switch (width) {
    case "sm":
      return "100px";
    case "md":
      return "250px";
    case "lg":
      return "500px";
    case "full-width":
      return "100%";
  }
});