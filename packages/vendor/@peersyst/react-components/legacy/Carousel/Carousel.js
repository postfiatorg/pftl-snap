import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _ChevronRightIcon, _ChevronLeftIcon;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { CarouselArrow, CarouselRoot, CarouselWrapper } from "./Carousel.styles";
import { Children, cloneElement, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { cx, setRef } from "@peersyst/react-utils";
import { useForkRef } from "@peersyst/react-hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "../assets/icons";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var Carousel = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("Carousel", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.gap,
    gap = _useMergeDefaultProps2 === void 0 ? 20 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.autoplay,
    autoplay = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.autoplayInterval,
    autoplayIntervalProp = _useMergeDefaultProps4 === void 0 ? 3000 : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.renderArrows,
    renderArrows = _useMergeDefaultProps5 === void 0 ? true : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.rightArrow,
    rightArrow = _useMergeDefaultProps6 === void 0 ? _ChevronRightIcon || (_ChevronRightIcon = /*#__PURE__*/_jsx(ChevronRightIcon, {})) : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.leftArrow,
    leftArrow = _useMergeDefaultProps7 === void 0 ? _ChevronLeftIcon || (_ChevronLeftIcon = /*#__PURE__*/_jsx(ChevronLeftIcon, {})) : _useMergeDefaultProps7,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    canScrollLeft = _useState4[0],
    setCanScrollLeft = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    canScrollRight = _useState6[0],
    setCanScrollRight = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    scrollX = _useState8[0],
    setScrollX = _useState8[1];
  var carouselRef = useRef();
  var handleCarouselRef = useForkRef(carouselRef, ref);
  var indexChildRef = useRef();
  var autoplayInterval = useRef();
  var carouselResizeObserver = useMemo(function () {
    return new ResizeObserver(function () {
      canScrollRefresh();
    });
  }, [scrollX]);
  useEffect(function () {
    if (carouselRef.current) {
      carouselRef.current.onwheel = function (e) {
        if (e.deltaX !== 0) e.preventDefault();
      };
    }
  }, [carouselRef]);
  useEffect(function () {
    var currentCarouselRef = carouselRef.current;
    if (currentCarouselRef) carouselResizeObserver.observe(currentCarouselRef);
    window.addEventListener("resize", canScrollRefresh);
    return function () {
      carouselResizeObserver.disconnect();
      window.removeEventListener("resize", canScrollRefresh);
    };
  }, [scrollX]);
  useEffect(function () {
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
            return i + 1 < Children.count(children) ? direction === "right" ? i + 1 : i - 1 : i;
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
  return /*#__PURE__*/_jsxs(CarouselWrapper, {
    className: cx("Carousel", className),
    style: style,
    children: [/*#__PURE__*/_jsx(CarouselRoot, {
      ref: handleCarouselRef,
      gap: gap,
      className: "CarouselItems",
      children: Children.map(children, function (child, childIndex) {
        return /*#__PURE__*/cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
          ref: function ref(r) {
            return childIndex === index && setRef(indexChildRef, r);
          }
        }));
      })
    }), renderArrows && /*#__PURE__*/_jsxs(_Fragment, {
      children: [canScrollLeft && /*#__PURE__*/_jsx(CarouselArrow, {
        className: "CarouselArrow CarouselLeftArrow",
        direction: "left",
        onClick: function onClick() {
          return handleSlide("left");
        },
        disabled: !canScrollLeft,
        children: leftArrow
      }), canScrollRight && /*#__PURE__*/_jsx(CarouselArrow, {
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
export default Carousel;