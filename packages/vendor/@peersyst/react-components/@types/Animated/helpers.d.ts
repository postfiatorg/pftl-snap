import { TransitionDelay, TransitionDuration, TransitionTimingFunction } from "./Animated.types";
import { TransitionStatus } from "react-transition-group";
import { Property } from "csstype";
export declare function getDuration(duration: TransitionDuration, status: TransitionStatus): number;
export declare function getDelay(delay: TransitionDelay, status: TransitionStatus): number;
export declare function getTimingFunction(timingFunction: TransitionTimingFunction | undefined, status: TransitionStatus): Property.TransitionTimingFunction | undefined;
export declare function reflow(node: HTMLElement): void;
