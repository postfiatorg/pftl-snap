import { ModalAnimation } from "../Modal.types";
import { AnimatedComponentProps, CustomAnimatedComponent } from "../../Animated";
import { SlideProps } from "../../Animated";
export declare function getAnimatedComponent(animation: ModalAnimation): CustomAnimatedComponent<AnimatedComponentProps> | CustomAnimatedComponent<SlideProps>;
