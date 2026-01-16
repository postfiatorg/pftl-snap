import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import styled, { css } from "styled-components";
import { Row } from "../Row";
import { IconButton } from "../IconButton";
export var CarouselWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    --arrows-inset: clamp(10px, 3vw, 20px);\n\n    position: relative;\n\n    width: 100%;\n    max-width: 100vw;\n"])));
export var CarouselRoot = styled(Row)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 100vw;\n\n    touch-action: pan-y;\n    overflow-x: scroll;\n    scroll-behavior: smooth;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n\n    > * {\n        flex-shrink: 0;\n    }\n"])));
export var CarouselArrow = styled(IconButton)(function (_ref) {
  var direction = _ref.direction;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        left: ", ";\n        right: ", ";\n    "])), direction === "left" && "var(--arrows-inset)", direction === "right" && "var(--arrows-inset)");
});