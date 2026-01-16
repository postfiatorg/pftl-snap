/// <reference types="react" />
import { TableSortButtonProps, TableHeaderProps, TableHeaderSortButtonContainerProps, TableHeaderTitleProps, TableHeaderContentProps } from "./TableHead.types";
export declare const TableHeadRoot: import("styled-components").StyledComponent<"thead", import("styled-components").DefaultTheme, {}, never>;
export declare const TableHeader: import("styled-components").StyledComponent<"th", import("styled-components").DefaultTheme, TableHeaderProps, never>;
export declare const TableHeaderContent: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../../Row").RowProps & import("react").RefAttributes<unknown>>, import("styled-components").DefaultTheme, {
    gap: "0.25rem";
    alginItems: string;
} & TableHeaderContentProps, "gap" | "alginItems">;
export declare const TableHeaderTitle: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TableHeaderTitleProps, never>;
export declare const TableHeaderSortButtonContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TableHeaderSortButtonContainerProps, never>;
export declare const TableSortButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../../IconButton").IconButtonProps & import("react").RefAttributes<unknown>>, import("styled-components").DefaultTheme, TableSortButtonProps, never>;
