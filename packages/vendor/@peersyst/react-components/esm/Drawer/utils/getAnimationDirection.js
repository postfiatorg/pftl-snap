export function getAnimationDirection(position) {
  if (position === "left") return "right";else if (position === "right") return "left";else if (position === "bottom") return "up";else return "down";
}