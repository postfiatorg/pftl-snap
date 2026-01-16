"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TableFooter = require("./TableFooter.styles");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
function TableFooter(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableFooter.TableFooterRoot, {
    className: (0, _clsx["default"])("TableFooter", className),
    style: style,
    children: children
  });
}
var _default = exports["default"] = TableFooter;