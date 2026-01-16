import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useControlled } from "@peersyst/react-hooks";

// usePagination hook from @mui
export default function usePagination(props) {
  var _props$boundaryCount = props.boundaryCount,
    boundaryCount = _props$boundaryCount === void 0 ? 1 : _props$boundaryCount,
    _props$count = props.count,
    count = _props$count === void 0 ? 1 : _props$count,
    _props$defaultPage = props.defaultPage,
    defaultPage = _props$defaultPage === void 0 ? 1 : _props$defaultPage,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$hideNextButton = props.hideNextButton,
    hideNextButton = _props$hideNextButton === void 0 ? false : _props$hideNextButton,
    _props$hidePrevButton = props.hidePrevButton,
    hidePrevButton = _props$hidePrevButton === void 0 ? false : _props$hidePrevButton,
    handleChange = props.onChange,
    pageProp = props.page,
    _props$showFirstButto = props.showFirstButton,
    showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
    _props$showLastButton = props.showLastButton,
    showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
    _props$siblingCount = props.siblingCount,
    siblingCount = _props$siblingCount === void 0 ? 1 : _props$siblingCount;
  var _useControlled = useControlled(defaultPage, pageProp, handleChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    page = _useControlled2[0],
    setPage = _useControlled2[1];

  // https://dev.to/namirsab/comment/2050
  var range = function range(start, end) {
    var length = end - start + 1;
    return Array.from({
      length: length
    }, function (_, i) {
      return start + i;
    });
  };
  var startPages = range(1, Math.min(boundaryCount, count));
  var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  var siblingsStart = Math.max(Math.min(
  // Natural start
  page - siblingCount,
  // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1),
  // Greater than startPages
  boundaryCount + 2);
  var siblingsEnd = Math.min(Math.max(
  // Natural end
  page + siblingCount,
  // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2),
  // Less than endPages
  endPages.length > 0 ? endPages[0] - 2 : count - 1);

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  var itemList = [].concat(_toConsumableArray(showFirstButton ? ["first"] : []), _toConsumableArray(hidePrevButton ? [] : ["previous"]), _toConsumableArray(startPages), _toConsumableArray(siblingsStart > boundaryCount + 2 ? ["start-ellipsis"] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []), _toConsumableArray(range(siblingsStart, siblingsEnd)), _toConsumableArray(siblingsEnd < count - boundaryCount - 1 ? ["end-ellipsis"] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), _toConsumableArray(endPages), _toConsumableArray(hideNextButton ? [] : ["next"]), _toConsumableArray(showLastButton ? ["last"] : []));

  // Map the button type to its page number
  var buttonPage = function buttonPage(type) {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page - 1;
      case "next":
        return page + 1;
      case "last":
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  return itemList.map(function (item) {
    return typeof item === "number" ? {
      onClick: function onClick() {
        setPage(item);
      },
      type: "page",
      page: item,
      selected: item === page,
      disabled: disabled,
      "aria-current": item === page ? "true" : undefined
    } : {
      onClick: function onClick() {
        var newPage = buttonPage(item);
        if (newPage) setPage(newPage);
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf("ellipsis") === -1 && (item === "next" || item === "last" ? page >= count : page <= 1)
    };
  });
}