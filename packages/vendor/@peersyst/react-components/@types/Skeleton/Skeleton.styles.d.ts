import { SkeletonProps } from "./Skeleton.types";
interface SkeletonStyles {
    height: string | undefined;
    width: string | undefined;
    shape: NonNullable<SkeletonProps["shape"]>;
    animation: NonNullable<SkeletonProps["animation"]>;
    appearance?: "light" | "dark";
    isLoading: boolean;
}
export declare const SkeletonRoot: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, SkeletonStyles, never>;
export {};
