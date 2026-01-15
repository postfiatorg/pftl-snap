"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _util = require("../util");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var GridRoot = exports.GridRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n    grid-auto-flow: row dense;\n\n    max-width: 100%;\n    overflow-x: auto;\n\n    ", "\n"])), function (_ref) {
  var columns = _ref.columns,
    rowSize = _ref.rowSize,
    colGap = _ref.colGap,
    rowGap = _ref.rowGap,
    alignItems = _ref.alignItems,
    justifyItems = _ref.justifyItems,
    justifyContent = _ref.justifyContent;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        grid-template-columns: repeat(", ", minmax(0, 1fr));\n        grid-auto-rows: ", ";\n        column-gap: ", ";\n        row-gap: ", ";\n        align-items: ", ";\n        justify-items: ", ";\n        justify-content: ", ";\n    "])), columns, rowSize || "auto", (0, _util.parseGapUnits)(colGap), (0, _util.parseGapUnits)(rowGap), alignItems, justifyItems, justifyContent);
});