import "styled-components";
import "@peersyst/react-components-core";
import { ThemeBreakpoints, TypographyVariant } from "./theme.types";
import { JSXElementConstructor } from "react";
import { CreateThemeBreakpointValues } from "./createTheme.types";
import { Theme } from "@peersyst/react-components-core";
declare module "styled-components" {
    interface DefaultTheme extends Theme {
    }
}
declare module "@peersyst/react-components-core" {
    interface CoreThemeTypes {
        TypographyType: TypographyVariant;
        UnitsType: string;
    }
    interface CoreTheme {
        loader: JSXElementConstructor<any>;
        shadows: string[];
        breakpoints: ThemeBreakpoints;
    }
    interface CoreCreateTheme {
        loader: JSXElementConstructor<any>;
        shadows: string[];
        breakpoints: {
            values: CreateThemeBreakpointValues;
        };
    }
}
