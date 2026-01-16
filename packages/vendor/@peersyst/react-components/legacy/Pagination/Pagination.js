import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type"];
var _ChevronLeftIcon, _ChevronRightIcon, _StartIcon, _EndIcon;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { PagesList, PaginationRoot } from "./Pagination.styles";
import { cx } from "@peersyst/react-utils";
import { PaginationItem } from "./PaginationItem";
import usePagination from "./hooks/usePagination/usePagination";
import { ChevronLeftIcon, ChevronRightIcon, EndIcon, StartIcon } from "../assets/icons";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var Pagination = function Pagination(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Pagination", props),
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
    previousIcon = _useMergeDefaultProps4 === void 0 ? _ChevronLeftIcon || (_ChevronLeftIcon = /*#__PURE__*/_jsx(ChevronLeftIcon, {})) : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.nextIcon,
    nextIcon = _useMergeDefaultProps5 === void 0 ? _ChevronRightIcon || (_ChevronRightIcon = /*#__PURE__*/_jsx(ChevronRightIcon, {})) : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.startIcon,
    startIconProp = _useMergeDefaultProps6 === void 0 ? false : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.endIcon,
    endIconProp = _useMergeDefaultProps7 === void 0 ? false : _useMergeDefaultProps7,
    _useMergeDefaultProps8 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps8 === void 0 ? "md" : _useMergeDefaultProps8,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  var items = usePagination({
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
  var startIcon = typeof startIconProp === "boolean" ? startIconProp && (_StartIcon || (_StartIcon = /*#__PURE__*/_jsx(StartIcon, {}))) : startIconProp;
  var endIcon = typeof endIconProp === "boolean" ? endIconProp && (_EndIcon || (_EndIcon = /*#__PURE__*/_jsx(EndIcon, {}))) : endIconProp;
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
  return /*#__PURE__*/_jsx(PaginationRoot, {
    className: cx("Pagination", className),
    style: style,
    children: /*#__PURE__*/_jsx(PagesList, {
      size: size,
      className: cx("PagesList", size == null ? void 0 : size.replace(/^./g, function (x) {
        return x.toUpperCase();
      })),
      children: items.map(function (_ref, key) {
        var type = _ref.type,
          itemProps = _objectWithoutProperties(_ref, _excluded);
        return /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx(PaginationItem, _objectSpread(_objectSpread({
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
export default Pagination;