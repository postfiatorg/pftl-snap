"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimatedComponent = getAnimatedComponent;
var _Animated = require("../../Animated");
function getAnimatedComponent(animation) {
  if (animation === "fade") return {
    AnimatedComponent: _Animated.Animated.Fade
  };else if (animation === "from-bottom") return {
    AnimatedComponent: _Animated.Animated.Slide,
    props: {
      direction: "up"
    }
  };else return animation;
}