"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _InfiniteScroll = require("./InfiniteScroll.styles");
var _OnScreenObserver = require("../OnScreenObserver");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _div;
var InfiniteScroll = function InfiniteScroll(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("InfiniteScroll", props),
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [children, !end && /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfiniteScroll.InfiniteScrollLoader, {
      className: "InfiniteScrollLoader",
      visible: loading,
      children: loaderElement
    }), end && endElement, !end && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OnScreenObserver.OnScreenObserver, {
      offset: observerOffset,
      container: container,
      children: function children(onScreen) {
        onScreen && !loading && callback();
        return _div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}));
      }
    })]
  });
};
var _default = exports["default"] = InfiniteScroll;