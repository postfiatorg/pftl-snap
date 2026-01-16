import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import styled from "styled-components";
export var CollapseRoot = styled.div(function (_ref) {
  var orientation = _ref.orientation;
  return _objectSpread({
    height: 0,
    overflow: "hidden"
  }, orientation === "horizontal" && {
    height: "auto",
    width: 0
  });
});
export var CollapseWrapper = styled.div(function (_ref2) {
  var orientation = _ref2.orientation;
  return _objectSpread({
    display: "flex",
    width: "100%"
  }, orientation === "horizontal" && {
    width: "auto",
    height: "100%"
  });
});
export var CollapseWrapperInner = styled.div(function (_ref3) {
  var orientation = _ref3.orientation;
  return _objectSpread({
    width: "100%"
  }, orientation === "horizontal" && {
    width: "auto",
    height: "100%"
  });
});