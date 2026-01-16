"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimation = getAnimation;
var _Animated = require("../../Animated");
function getAnimation(animation, position) {
  if (animation === "scale") return {
    AnimatedComponent: _Animated.Animated.FadingScale
  };else if (animation === "slide") {
    var verticalAlignment = position.split("-")[0];
    if (verticalAlignment === "bottom") return {
      AnimatedComponent: _Animated.Animated.Slide,
      props: {
        direction: "up"
      }
    };else return {
      AnimatedComponent: _Animated.Animated.Slide,
      props: {
        direction: "down"
      }
    };
  } else if (animation === "fadingSlide") {
    var _verticalAlignment = position.split("-")[0];
    if (_verticalAlignment === "bottom") return {
      AnimatedComponent: _Animated.Animated.FadingSlide,
      props: {
        direction: "up"
      }
    };else return {
      AnimatedComponent: _Animated.Animated.FadingSlide,
      props: {
        direction: "down"
      }
    };
  }
  // fade
  else return {
    AnimatedComponent: _Animated.Animated.Fade
  };
}