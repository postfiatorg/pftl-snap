import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import styled from "styled-components";
import { Col } from "../Col";
import { Row } from "../Row";
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
export var LabelColRoot = styled(Col)(function (_ref) {
  var alignment = _ref.alignment;
  return {
    alignItems: labelFlexAlignemnts[alignment]
  };
});
export var LabelRowRoot = styled(Row)(function (_ref2) {
  var alignment = _ref2.alignment;
  return {
    justifyContent: labelFlexJustification[alignment]
  };
});
export var LabelText = styled.label(function (_ref3) {
  var placement = _ref3.placement,
    alignment = _ref3.alignment,
    variant = _ref3.variant,
    theme = _ref3.theme;
  var textAlign = function () {
    if (alignment === "end") return "right";else if (alignment === "center") return "center";else return "left";
  }();
  var variantStyle = variant ? theme.typography[variant].style : {};
  return _defineProperty(_defineProperty({
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
export var LabelChildren = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: contents;\n"])));