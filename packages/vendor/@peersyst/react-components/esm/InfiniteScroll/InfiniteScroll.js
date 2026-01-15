var _div;
import { InfiniteScrollLoader } from "./InfiniteScroll.styles";
import { OnScreenObserver } from "../OnScreenObserver";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var InfiniteScroll = function InfiniteScroll(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("InfiniteScroll", props),
    children = _useMergeDefaultProps.children,
    endElement = _useMergeDefaultProps.endElement,
    endProp = _useMergeDefaultProps.end,
    loading = _useMergeDefaultProps.loading,
    loaderElement = _useMergeDefaultProps.loaderElement,
    callback = _useMergeDefaultProps.callback,
    _useMergeDefaultProps2 = _useMergeDefaultProps.observerOffset,
    observerOffset = _useMergeDefaultProps2 === void 0 ? "10vh" : _useMergeDefaultProps2,
    container = _useMergeDefaultProps.container;
  var end = !loading && endProp;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [children, !end && /*#__PURE__*/_jsx(InfiniteScrollLoader, {
      className: "InfiniteScrollLoader",
      visible: loading,
      children: loaderElement
    }), end && endElement, !end && /*#__PURE__*/_jsx(OnScreenObserver, {
      offset: observerOffset,
      container: container,
      children: function children(onScreen) {
        onScreen && !loading && callback();
        return _div || (_div = /*#__PURE__*/_jsx("div", {}));
      }
    })]
  });
};
export default InfiniteScroll;