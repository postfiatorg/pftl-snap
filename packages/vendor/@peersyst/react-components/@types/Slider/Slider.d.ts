/// <reference types="react" />
declare const Slider: import("react").ForwardRefExoticComponent<import("@peersyst/react-components-core").CoreSliderProps<import("..").LabelProps> & {
    className?: string | undefined;
    style?: import("react").CSSProperties | undefined;
} & Omit<import("./SliderUnstyled").SliderUnstyledOwnProps, "components" | "onChange" | "componentsProps" | "classes" | "onChangeCommitted"> & {
    size?: import("./Slider.types").SliderSize | undefined;
} & import("react").RefAttributes<unknown>>;
export default Slider;
