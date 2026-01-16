import { Animated } from "../../Animated";
export function getAnimatedComponent(animation) {
  if (animation === "fade") return {
    AnimatedComponent: Animated.Fade
  };else if (animation === "from-bottom") return {
    AnimatedComponent: Animated.Slide,
    props: {
      direction: "up"
    }
  };else return animation;
}