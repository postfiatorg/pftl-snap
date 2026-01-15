import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled, { css } from "styled-components";
import { alpha } from "@peersyst/react-utils";
var sm = {
  size: "26px",
  px: "4px"
};
var md = {
  size: "32px",
  px: "6px"
};
var lg = {
  size: "40px",
  px: "10px"
};
var itemSizes = {
  sm: sm,
  md: md,
  lg: lg
};
export var PaginationItemRoot = styled.button(function (_ref) {
  var theme = _ref.theme,
    selected = _ref.selected,
    disabled = _ref.disabled,
    sizeProp = _ref.size,
    isEllipsis = _ref.isEllipsis;
  var _itemSizes$sizeProp = itemSizes[sizeProp],
    size = _itemSizes$sizeProp.size,
    px = _itemSizes$sizeProp.px;
  var enabled = !isEllipsis && !disabled;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            position: relative;\n\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n\n            cursor: ", ";\n            outline: 0;\n            border: 0;\n            user-select: none;\n            vertical-align: middle;\n            appearance: none;\n            text-decoration: none;\n            border-radius: 50%;\n\n            min-width: ", ";\n            height: ", ";\n            padding: 0 ", ";\n            box-sizing: border-box;\n            font-size: 0.875rem;\n\n            color: inherit;\n            background-color: ", ";\n            opacity: ", ";\n\n            transition: background-color 200ms;\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n            }\n        "])), enabled && "pointer", size, size, px, selected ? alpha(theme.palette.primary, 0.6) : "transparent", disabled && 0.6, enabled && alpha(theme.palette.primary, 0.3), enabled && alpha(theme.palette.primary, 0.4));
});