/// <reference types="react" />
import { Property } from "csstype";
import { DividerProps } from "./Divider.types";
export declare const DividerRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    height: Property.Height;
    width: NonNullable<DividerProps["width"]>;
    color?: string | undefined;
}, never>;
export declare const DividerWithChildren: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Row").RowProps & import("react").RefAttributes<unknown>>, import("styled-components").DefaultTheme, {
    width: NonNullable<DividerProps["width"]>;
}, never>;
