"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashText = exports.HashRoot = exports.HashLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Row = require("../Row");
var _Typography = require("../Typography");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var HashRoot = exports.HashRoot = (0, _styledComponents["default"])(_Row.Row).attrs({
  alignItems: "center"
})(function (_ref) {
  var autoLength = _ref.autoLength;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        ", "\n    "])), autoLength && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n            width: 100%;\n            max-width: 100%;\n            overflow: hidden;\n        "]))));
});
var HashText = exports.HashText = (0, _styledComponents["default"])(_Typography.Typography)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    word-break: ", ";\n"])), function (p) {
  return p["break"] && "break-word";
});
var HashLink = exports.HashLink = _styledComponents["default"].a(function () {
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n        text-decoration: none;\n        &:hover {\n            text-decoration: underline;\n        }\n    "])));
});