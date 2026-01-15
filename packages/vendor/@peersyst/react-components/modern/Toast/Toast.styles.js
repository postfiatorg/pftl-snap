import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
import styled, { css } from "styled-components";
import { Alert } from "../Alert";
function getPosition(position) {
  switch (position) {
    case "bottom-center":
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n                bottom: 24px;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
    case "bottom-left":
      return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                bottom: 24px;\n                left: 24px;\n            "])));
    case "bottom-right":
      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                bottom: 24px;\n                right: 24px;\n            "])));
    case "top-center":
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                top: 24px;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
    case "top-left":
      return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n                top: 24px;\n                left: 24px;\n            "])));
    case "top-right":
      return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n                top: 24px;\n                right: 24px;\n            "])));
  }
}
export var ToastContainer = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    position: fixed;\n    ", ";\n    z-index: ", ";\n"])), function (_ref) {
  var position = _ref.position;
  return getPosition(position);
}, function (p) {
  return p.theme.zIndex.toast;
});
export var ToastAlert = styled(Alert)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: fit-content;\n    min-width: 300px;\n    max-width: 360px;\n\n    @media screen and (max-width: 400px) {\n        min-width: calc(100vw - 48px);\n        max-width: calc(100vw - 48px);\n    }\n"])));