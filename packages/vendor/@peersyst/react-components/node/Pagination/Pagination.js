"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Pagination = require("./Pagination.styles");
var _reactUtils = require("@peersyst/react-utils");
var _PaginationItem = require("./PaginationItem");
var _usePagination = _interopRequireDefault(require("./hooks/usePagination/usePagination"));
var _icons = require("../assets/icons");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["type"];
var _ChevronLeftIcon, _ChevronRightIcon, _StartIcon, _EndIcon;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Pagination = function Pagination(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Pagination", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultPage,
    defaultPage = _useMergeDefaultProps2 === void 0 ? 1 : _useMergeDefaultProps2,
    page = _useMergeDefaultProps.page,
    onChange = _useMergeDefaultProps.onChange,
    count = _useMergeDefaultProps.count,
    siblingCount = _useMergeDefaultProps.siblingCount,
    _useMergeDefaultProps3 = _useMergeDefaultProps.boundaryCount,
    boundaryCount = _useMergeDefaultProps3 === void 0 ? 1 : _useMergeDefaultProps3,
    disabled = _useMergeDefaultProps.disabled,
    _useMergeDefaultProps4 = _useMergeDefaultProps.previousIcon,
    previousIcon = _useMergeDefaultProps4 === void 0 ? _ChevronLeftIcon || (_ChevronLeftIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronLeftIcon, {})) : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.nextIcon,
    nextIcon = _useMergeDefaultProps5 === void 0 ? _ChevronRightIcon || (_ChevronRightIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronRightIcon, {})) : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.startIcon,
    startIconProp = _useMergeDefaultProps6 === void 0 ? false : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.endIcon,
    endIconProp = _useMergeDefaultProps7 === void 0 ? false : _useMergeDefaultProps7,
    _useMergeDefaultProps8 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps8 === void 0 ? "md" : _useMergeDefaultProps8,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  var items = (0, _usePagination["default"])({
    boundaryCount: boundaryCount,
    count: count,
    defaultPage: defaultPage,
    disabled: disabled,
    hidePrevButton: !previousIcon,
    hideNextButton: !nextIcon,
    onChange: onChange,
    page: page,
    showFirstButton: !!startIconProp,
    showLastButton: !!endIconProp,
    siblingCount: siblingCount
  });
  var startIcon = typeof startIconProp === "boolean" ? startIconProp && (_StartIcon || (_StartIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.StartIcon, {}))) : startIconProp;
  var endIcon = typeof endIconProp === "boolean" ? endIconProp && (_EndIcon || (_EndIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.EndIcon, {}))) : endIconProp;
  var renderItem = function renderItem(type, page) {
    switch (type) {
      case "first":
        return startIcon;
      case "previous":
        return previousIcon;
      case "start-ellipsis":
      case "end-ellipsis":
        return "…";
      case "next":
        return nextIcon;
      case "last":
        return endIcon;
      case "page":
        return page;
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.PaginationRoot, {
    className: (0, _reactUtils.cx)("Pagination", className),
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.PagesList, {
      size: size,
      className: (0, _reactUtils.cx)("PagesList", size == null ? void 0 : size.replace(/^./g, function (x) {
        return x.toUpperCase();
      })),
      children: items.map(function (_ref, key) {
        var type = _ref.type,
          itemProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaginationItem.PaginationItem, _objectSpread(_objectSpread({
            className: type
          }, itemProps), {}, {
            size: size,
            children: renderItem(type, itemProps.page)
          }))
        }, key);
      })
    })
  });
};
var _default = exports["default"] = Pagination;