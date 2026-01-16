import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { cx } from "@peersyst/react-utils";
export var BackgroundImageRoot = styled.div.attrs(function (_ref) {
  var className = _ref.className;
  return {
    className: cx("BackgroundImage", className)
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    isolation: isolate;\n    width: 100%;\n    height: 100%;\n\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n\n    ", "\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        width: 100%;\n        height: 100%;\n        background: ", ";\n    }\n"])), function (_ref2) {
  var src = _ref2.src;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        background-image: ", ";\n        background-color: ", ";\n    "])), src ? "url(" + src + ")" : undefined, !src ? "#979797" : undefined);
}, function (_ref3) {
  var filter = _ref3.filter;
  return filter;
});