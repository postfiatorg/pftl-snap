/// <reference types="react" />
declare const Chip: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLDivElement>, "prefix"> & import("@peersyst/react-components-core").CoreChipProps & {
    clickable?: boolean | undefined;
    onDelete?: ((e: import("react").MouseEvent<Element, MouseEvent>) => any) | undefined;
    deleteIcon?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
} & import("react").RefAttributes<unknown>>;
export default Chip;
