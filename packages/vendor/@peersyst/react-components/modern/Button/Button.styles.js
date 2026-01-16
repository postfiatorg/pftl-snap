import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import styled, { css } from "styled-components";
import { emphasize, getLuminance } from "@peersyst/react-utils";
export var ButtonLoader = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n\n    display: flex;\n"])));
var sizeStyles = {
  sm: {
    fontSize: "0.8125rem",
    padding: "0 5px",
    height: "32px"
  },
  md: {
    fontSize: "0.875rem",
    padding: "0 8px",
    height: "36px"
  },
  lg: {
    fontSize: "0.9375rem",
    padding: "0 11px",
    height: "42px"
  }
};
function getVariantStyles(variant) {
  return css(function (_ref) {
    var theme = _ref.theme,
      colorProp = _ref.color;
    var color = colorProp || theme.palette.primary;
    switch (variant) {
      case "filled":
        return {
          backgroundColor: color,
          color: getLuminance(color) > 0.5 ? "#000" : "#FFF",
          "&:hover": {
            backgroundColor: emphasize(color, 0.2)
          },
          "&:active": {
            backgroundColor: emphasize(color, 0.4)
          },
          "&:disabled": {
            backgroundColor: theme.palette.disabled,
            color: getLuminance(theme.palette.disabled) > 0.5 ? "#000" : "#FFF"
          }
        };
      case "outlined":
        return {
          backgroundColor: "transparent",
          color: color,
          border: "1px solid currentColor",
          "&:hover": {
            color: emphasize(color, 0.2)
          },
          "&:active": {
            color: emphasize(color, 0.4)
          },
          "&:disabled": {
            color: theme.palette.disabled
          }
        };
      case "text":
        return {
          backgroundColor: "transparent",
          color: color,
          border: "none",
          "&:hover": {
            color: emphasize(color, 0.2)
          },
          "&:active": {
            color: emphasize(color, 0.4)
          },
          "&:disabled": {
            color: theme.palette.disabled
          }
        };
    }
  });
}
export var ButtonContent = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: contents;\n"])));
export var ButtonRoot = styled.button(function (_ref2) {
  var theme = _ref2.theme,
    size = _ref2.size,
    variant = _ref2.variant,
    fullWidth = _ref2.fullWidth,
    isLoading = _ref2.isLoading;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        position: relative;\n        isolation: isolate;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        column-gap: 10px;\n\n        box-sizing: border-box;\n        outline: none;\n        border: none;\n        border-radius: ", ";\n        cursor: pointer;\n        user-select: none;\n        min-width: 64px;\n\n        transition: all 200ms;\n\n        ", ";\n        ", ";\n        ", ";\n        ", ";\n\n        &:focus {\n            outline: 0;\n        }\n\n        &:disabled {\n            pointer-events: none;\n            * {\n                pointer-events: none;\n            }\n        }\n\n        ", "\n    "])), theme.borderRadius, theme.typography.button.style, sizeStyles[size], getVariantStyles(variant), fullWidth && "width: 100%", isLoading && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            > *:not(", ") {\n                opacity: 0;\n                color: transparent !important;\n            }\n        "])), ButtonLoader));
});