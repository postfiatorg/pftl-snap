"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OnScreenObserver;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _OnScreenObserver = require("./OnScreenObserver.styles");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function OnScreenObserver(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("OnScreenObserver", props),
    children = _useMergeDefaultProps.children,
    _useMergeDefaultProps2 = _useMergeDefaultProps.offset,
    offset = _useMergeDefaultProps2 === void 0 ? "0" : _useMergeDefaultProps2,
    container = _useMergeDefaultProps.container,
    onScreenProp = _useMergeDefaultProps.onScreen;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    onScreen = _useState2[0],
    setOnScreen = _useState2[1];
  var handleOnScreen = function handleOnScreen(isOnScreen) {
    onScreenProp == null || onScreenProp(isOnScreen);
    setOnScreen(isOnScreen);
  };
  var ref = /*#__PURE__*/(0, _react.createRef)();
  (0, _react.useEffect)(function () {
    var _ref$current;
    var observer = new IntersectionObserver(handleObserver, {
      root: container == null ? void 0 : container.current,
      rootMargin: "0px",
      threshold: 0.01
    });
    ((_ref$current = ref.current) == null ? void 0 : _ref$current.children[0]) && observer.observe(ref.current.children[0]);
    return function () {
      observer.disconnect();
    };
  }, [ref, children]);
  var handleObserver = (0, _react.useCallback)(function (entries, _ref) {
    var root = _ref.root;
    var child = entries[0];
    var _ref2 = root ? root.getBoundingClientRect() : {
        top: 0,
        bottom: window.innerHeight
      },
      top = _ref2.top,
      bottom = _ref2.bottom;
    if (!onScreen && child.boundingClientRect.y <= bottom && child.boundingClientRect.y >= top) handleOnScreen(true);else if (onScreen && child.boundingClientRect.y > bottom) handleOnScreen(false);
  }, [onScreen, setOnScreen, children]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OnScreenObserver.OnScreenObserverWrapper, {
    ref: ref,
    offset: offset,
    children: typeof children === "function" ? children(onScreen) : children
  });
}