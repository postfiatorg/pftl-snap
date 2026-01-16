"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _Typography = require("../../../Typography");
var _jsxRuntime = require("react/jsx-runtime");
var TableCount = function TableCount(_ref) {
  var range = _ref.range,
    total = _ref.total,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.Typography, {
    className: (0, _clsx["default"])("TableCount", className),
    variant: "body2",
    style: style,
    children: [range[0], " - ", range[1], " of ", total]
  });
};
var _default = exports["default"] = TableCount;