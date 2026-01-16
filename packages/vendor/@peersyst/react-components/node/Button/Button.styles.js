"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonRoot = exports.ButtonLoader = exports.ButtonContent = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ButtonLoader = exports.ButtonLoader = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n\n    display: flex;\n"])));
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
  return (0, _styledComponents.css)(function (_ref) {
    var theme = _ref.theme,
      colorProp = _ref.color;
    var color = colorProp || theme.palette.primary;
    switch (variant) {
      case "filled":
        return {
          backgroundColor: color,
          color: (0, _reactUtils.getLuminance)(color) > 0.5 ? "#000" : "#FFF",
          "&:hover": {
            backgroundColor: (0, _reactUtils.emphasize)(color, 0.2)
          },
          "&:active": {
            backgroundColor: (0, _reactUtils.emphasize)(color, 0.4)
          },
          "&:disabled": {
            backgroundColor: theme.palette.disabled,
            color: (0, _reactUtils.getLuminance)(theme.palette.disabled) > 0.5 ? "#000" : "#FFF"
          }
        };
      case "outlined":
        return {
          backgroundColor: "transparent",
          color: color,
          border: "1px solid currentColor",
          "&:hover": {
            color: (0, _reactUtils.emphasize)(color, 0.2)
          },
          "&:active": {
            color: (0, _reactUtils.emphasize)(color, 0.4)
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
            color: (0, _reactUtils.emphasize)(color, 0.2)
          },
          "&:active": {
            color: (0, _reactUtils.emphasize)(color, 0.4)
          },
          "&:disabled": {
            color: theme.palette.disabled
          }
        };
    }
  });
}
var ButtonContent = exports.ButtonContent = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: contents;\n"])));
var ButtonRoot = exports.ButtonRoot = _styledComponents["default"].button(function (_ref2) {
  var theme = _ref2.theme,
    size = _ref2.size,
    variant = _ref2.variant,
    fullWidth = _ref2.fullWidth,
    isLoading = _ref2.isLoading;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        position: relative;\n        isolation: isolate;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        column-gap: 10px;\n\n        box-sizing: border-box;\n        outline: none;\n        border: none;\n        border-radius: ", ";\n        cursor: pointer;\n        user-select: none;\n        min-width: 64px;\n\n        transition: all 200ms;\n\n        ", ";\n        ", ";\n        ", ";\n        ", ";\n\n        &:focus {\n            outline: 0;\n        }\n\n        &:disabled {\n            pointer-events: none;\n            * {\n                pointer-events: none;\n            }\n        }\n\n        ", "\n    "])), theme.borderRadius, theme.typography.button.style, sizeStyles[size], getVariantStyles(variant), fullWidth && "width: 100%", isLoading && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n            > *:not(", ") {\n                opacity: 0;\n                color: transparent !important;\n            }\n        "])), ButtonLoader));
});