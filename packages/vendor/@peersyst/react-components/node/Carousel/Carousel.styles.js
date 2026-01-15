"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselWrapper = exports.CarouselRoot = exports.CarouselArrow = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Row = require("../Row");
var _IconButton = require("../IconButton");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var CarouselWrapper = exports.CarouselWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    --arrows-inset: clamp(10px, 3vw, 20px);\n\n    position: relative;\n\n    width: 100%;\n    max-width: 100vw;\n"])));
var CarouselRoot = exports.CarouselRoot = (0, _styledComponents["default"])(_Row.Row)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    max-width: 100vw;\n\n    touch-action: pan-y;\n    overflow-x: scroll;\n    scroll-behavior: smooth;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n\n    > * {\n        flex-shrink: 0;\n    }\n"])));
var CarouselArrow = exports.CarouselArrow = (0, _styledComponents["default"])(_IconButton.IconButton)(function (_ref) {
  var direction = _ref.direction;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        left: ", ";\n        right: ", ";\n    "])), direction === "left" && "var(--arrows-inset)", direction === "right" && "var(--arrows-inset)");
});