"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRoot = exports.TableElement = exports.TableContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _reactUtils = require("@peersyst/react-utils");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TableRoot = exports.TableRoot = _styledComponents["default"].div(function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        --table-border-color: ", ";\n        --table-border: 1px solid var(--table-border-color);\n        --table-rows-border: var(--table-border);\n        --table-header-border: var(--table-rows-border);\n        --table-cell-border: var(--table-rows-border);\n\n        position: relative;\n        overflow: hidden;\n\n        display: flex;\n        flex-direction: column;\n\n        border: var(--table-border);\n        border-radius: ", ";\n        background-color: ", ";\n\n        th,\n        td {\n            height: inherit;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            padding: 0 1rem;\n            text-align: left;\n            vertical-align: middle;\n        }\n    "])), (0, _reactUtils.emphasize)(theme.palette.text, 0.75), theme.borderRadius, theme.palette.background);
});
var TableContainer = exports.TableContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: inherit;\n"])));
var TableElement = exports.TableElement = _styledComponents["default"].table(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    border-collapse: separate;\n    border-spacing: 0;\n    table-layout: fixed;\n    width: 100%;\n    background-color: inherit;\n"])));