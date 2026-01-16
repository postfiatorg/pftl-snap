"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayBorder = exports.SelectRoot = exports.SelectDropdown = exports.SelectDisplayWrapper = exports.SelectDisplayTrigger = exports.SelectDisplay = exports.DisplayContent = exports.ClearItem = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _SelectItem = require("./SelectItem");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var SelectRoot = exports.SelectRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    width: 100%;\n"])));
var displayBorder = exports.displayBorder = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    border: 1px solid\n        ", ";\n"])), function (_ref) {
  var theme = _ref.theme,
    open = _ref.open,
    disabled = _ref.disabled;
  if (open) return theme.palette.primary;else if (disabled) return theme.palette.disabled;else return theme.palette.text;
});
var SelectDisplayWrapper = exports.SelectDisplayWrapper = _styledComponents["default"].div(function (_ref2) {
  var disabled = _ref2.disabled,
    readonly = _ref2.readonly;
  var cursor = disabled || readonly ? "default" : "pointer";
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        display: contents;\n        cursor: ", ";\n\n        * {\n            cursor: ", ";\n        }\n    "])), cursor, cursor);
});
var SelectDisplayTrigger = exports.SelectDisplayTrigger = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n"])));
var SelectDisplay = exports.SelectDisplay = _styledComponents["default"].div(function (_ref3) {
  var theme = _ref3.theme;
  var disabledStyles = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n        color: ", ";\n    "])), theme.palette.disabled);
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex: 1;\n\n        min-height: 36px;\n\n        box-sizing: border-box;\n        padding: 0 10px;\n\n        border-radius: ", ";\n        ", ";\n\n        &&.Disabled {\n            ", "\n        }\n    "])), function (props) {
    return props.theme.borderRadius;
  }, displayBorder, disabledStyles);
});
var DisplayContent = exports.DisplayContent = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    margin-right: 10px;\n    max-width: 90%;\n"])));
var SelectDropdown = exports.SelectDropdown = _styledComponents["default"].span(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    font-size: 0.7em;\n    transform: ", ";\n"])), function (_ref4) {
  var open = _ref4.open;
  return open && "scale(-1)";
});
var ClearItem = exports.ClearItem = (0, _styledComponents["default"])(_SelectItem.SelectItem)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    font-style: italic;\n"])));