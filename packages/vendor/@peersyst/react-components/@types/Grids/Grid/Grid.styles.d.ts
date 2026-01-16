import { Property } from "csstype";
interface GridStyles {
    columns: number;
    rowSize: string | number | undefined;
    colGap: number | string | undefined;
    rowGap: number | string | undefined;
    alignItems: Property.AlignItems | undefined;
    justifyItems: Property.JustifyItems | undefined;
    justifyContent: Property.AlignItems | undefined;
}
export declare const GridRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, GridStyles, never>;
export {};
