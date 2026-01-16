"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundImageRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var BackgroundImageRoot = exports.BackgroundImageRoot = _styledComponents["default"].div.attrs(function (_ref) {
  var className = _ref.className;
  return {
    className: (0, _reactUtils.cx)("BackgroundImage", className)
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    isolation: isolate;\n    width: 100%;\n    height: 100%;\n\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n\n    ", "\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        width: 100%;\n        height: 100%;\n        background: ", ";\n    }\n"])), function (_ref2) {
  var src = _ref2.src;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        background-image: ", ";\n        background-color: ", ";\n    "])), src ? "url(" + src + ")" : undefined, !src ? "#979797" : undefined);
}, function (_ref3) {
  var filter = _ref3.filter;
  return filter;
});