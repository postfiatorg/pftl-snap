"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _useSelector = require("./hooks/useSelector");
var _jsxRuntime = require("react/jsx-runtime");
function Selector(_ref) {
  var value = _ref.value,
    children = _ref.children;
  var context = (0, _useSelector.useSelector)({
    value: value
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: children(context)
  });
}
var _default = exports["default"] = Selector;