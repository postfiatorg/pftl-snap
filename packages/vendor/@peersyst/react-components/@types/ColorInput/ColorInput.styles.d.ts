/// <reference types="react" />
import { ColorInputDisplayProps, ColorInputRootProps } from "./ColorInput.types";
export declare const ColorInputRoot: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Row").RowProps & import("react").RefAttributes<unknown>>, import("styled-components").DefaultTheme, {
    alignItems: "center";
    gap: 16;
} & ColorInputRootProps, "gap" | "alignItems">;
export declare const ColorInputDisplay: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, ColorInputDisplayProps, never>;
