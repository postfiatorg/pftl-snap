import { Animated } from "../../Animated";
export function getAnimation(animation, position) {
  if (animation === "scale") return {
    AnimatedComponent: Animated.FadingScale
  };else if (animation === "slide") {
    var verticalAlignment = position.split("-")[0];
    if (verticalAlignment === "bottom") return {
      AnimatedComponent: Animated.Slide,
      props: {
        direction: "up"
      }
    };else return {
      AnimatedComponent: Animated.Slide,
      props: {
        direction: "down"
      }
    };
  } else if (animation === "fadingSlide") {
    var _verticalAlignment = position.split("-")[0];
    if (_verticalAlignment === "bottom") return {
      AnimatedComponent: Animated.FadingSlide,
      props: {
        direction: "up"
      }
    };else return {
      AnimatedComponent: Animated.FadingSlide,
      props: {
        direction: "down"
      }
    };
  }
  // fade
  else return {
    AnimatedComponent: Animated.Fade
  };
}