"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelText = exports.LabelRowRoot = exports.LabelColRoot = exports.LabelChildren = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Col = require("../Col");
var _Row = require("../Row");
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var labelFlexAlignemnts = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "flex-start"
};
var labelFlexJustification = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "space-between"
};
var LabelColRoot = exports.LabelColRoot = (0, _styledComponents["default"])(_Col.Col)(function (_ref) {
  var alignment = _ref.alignment;
  return {
    alignItems: labelFlexAlignemnts[alignment]
  };
});
var LabelRowRoot = exports.LabelRowRoot = (0, _styledComponents["default"])(_Row.Row)(function (_ref2) {
  var alignment = _ref2.alignment;
  return {
    justifyContent: labelFlexJustification[alignment]
  };
});
var LabelText = exports.LabelText = _styledComponents["default"].label(function (_ref3) {
  var placement = _ref3.placement,
    alignment = _ref3.alignment,
    variant = _ref3.variant,
    theme = _ref3.theme;
  var textAlign = function () {
    if (alignment === "end") return "right";else if (alignment === "center") return "center";else return "left";
  }();
  var variantStyle = variant ? theme.typography[variant].style : {};
  return (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
    cursor: "text",
    alignSelf: placement === "left" || placement === "right" ? "center" : undefined,
    textAlign: textAlign
  }, "&&", _objectSpread({}, variantStyle)), "&.SingleLine", {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  });
});
var LabelChildren = exports.LabelChildren = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: contents;\n"])));