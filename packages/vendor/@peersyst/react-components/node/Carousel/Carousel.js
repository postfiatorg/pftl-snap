"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _Carousel = require("./Carousel.styles");
var _react = require("react");
var _reactUtils = require("@peersyst/react-utils");
var _reactHooks = require("@peersyst/react-hooks");
var _icons = require("../assets/icons");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _ChevronRightIcon, _ChevronLeftIcon;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Carousel = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Carousel", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.gap,
    gap = _useMergeDefaultProps2 === void 0 ? 20 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.autoplay,
    autoplay = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.autoplayInterval,
    autoplayIntervalProp = _useMergeDefaultProps4 === void 0 ? 3000 : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.renderArrows,
    renderArrows = _useMergeDefaultProps5 === void 0 ? true : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.rightArrow,
    rightArrow = _useMergeDefaultProps6 === void 0 ? _ChevronRightIcon || (_ChevronRightIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronRightIcon, {})) : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.leftArrow,
    leftArrow = _useMergeDefaultProps7 === void 0 ? _ChevronLeftIcon || (_ChevronLeftIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronLeftIcon, {})) : _useMergeDefaultProps7,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    canScrollLeft = _useState4[0],
    setCanScrollLeft = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    canScrollRight = _useState6[0],
    setCanScrollRight = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    scrollX = _useState8[0],
    setScrollX = _useState8[1];
  var carouselRef = (0, _react.useRef)();
  var handleCarouselRef = (0, _reactHooks.useForkRef)(carouselRef, ref);
  var indexChildRef = (0, _react.useRef)();
  var autoplayInterval = (0, _react.useRef)();
  var carouselResizeObserver = (0, _react.useMemo)(function () {
    return new ResizeObserver(function () {
      canScrollRefresh();
    });
  }, [scrollX]);
  (0, _react.useEffect)(function () {
    if (carouselRef.current) {
      carouselRef.current.onwheel = function (e) {
        if (e.deltaX !== 0) e.preventDefault();
      };
    }
  }, [carouselRef]);
  (0, _react.useEffect)(function () {
    var currentCarouselRef = carouselRef.current;
    if (currentCarouselRef) carouselResizeObserver.observe(currentCarouselRef);
    window.addEventListener("resize", canScrollRefresh);
    return function () {
      carouselResizeObserver.disconnect();
      window.removeEventListener("resize", canScrollRefresh);
    };
  }, [scrollX]);
  (0, _react.useEffect)(function () {
    if (autoplay) autoplayInterval.current = setInterval(function () {
      return handleSlide("right");
    }, autoplayIntervalProp);
    return function () {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [autoplay, scrollX]);
  var canScroll = function canScroll(direction) {
    if (!carouselRef.current) return false;
    return direction === "right" ? carouselRef.current.clientWidth + scrollX < carouselRef.current.scrollWidth : scrollX > 0;
  };
  var canScrollRefresh = function canScrollRefresh() {
    setCanScrollLeft(canScroll("left"));
    setCanScrollRight(canScroll("right"));
  };
  var handleSlide = function handleSlide(direction) {
    if (carouselRef.current && indexChildRef.current) {
      if (carouselRef.current.clientWidth < carouselRef.current.scrollWidth) {
        if (canScroll(direction)) {
          setIndex(function (i) {
            return i + 1 < _react.Children.count(children) ? direction === "right" ? i + 1 : i - 1 : i;
          });
          setScrollX(function (sx) {
            var newSx = sx + (direction === "right" ? Math.min(indexChildRef.current.clientWidth + gap, carouselRef.current.scrollWidth - (carouselRef.current.clientWidth + sx)) : -indexChildRef.current.clientWidth - gap);
            carouselRef.current.scrollTo(newSx, 0);
            return newSx;
          });
        } else {
          carouselRef.current.scrollTo(0, 0);
          setScrollX(0);
          setIndex(0);
        }
      }
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Carousel.CarouselWrapper, {
    className: (0, _reactUtils.cx)("Carousel", className),
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Carousel.CarouselRoot, {
      ref: handleCarouselRef,
      gap: gap,
      className: "CarouselItems",
      children: _react.Children.map(children, function (child, childIndex) {
        return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
          ref: function ref(r) {
            return childIndex === index && (0, _reactUtils.setRef)(indexChildRef, r);
          }
        }));
      })
    }), renderArrows && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [canScrollLeft && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Carousel.CarouselArrow, {
        className: "CarouselArrow CarouselLeftArrow",
        direction: "left",
        onClick: function onClick() {
          return handleSlide("left");
        },
        disabled: !canScrollLeft,
        children: leftArrow
      }), canScrollRight && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Carousel.CarouselArrow, {
        className: "CarouselArrow CarouselRightArrow",
        direction: "right",
        onClick: function onClick() {
          return handleSlide("right");
        },
        disabled: !canScrollRight,
        children: rightArrow
      })]
    })]
  });
});
Carousel.displayName = "Carousel";
var _default = exports["default"] = Carousel;