/// <reference types="react" />
import { HashRootProps, HashTextProps } from "./Hash.types";
import { Typography } from "../Typography";
export declare const HashRoot: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Row").RowProps & import("react").RefAttributes<unknown>>, import("styled-components").DefaultTheme, {
    alignItems: "center";
} & HashRootProps, "alignItems">;
export declare const HashText: import("styled-components").StyledComponent<typeof Typography, import("styled-components").DefaultTheme, HashTextProps, never>;
export declare const HashLink: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, {}, never>;
