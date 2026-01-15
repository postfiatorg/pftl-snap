import { RefObject } from "react";
interface TabGroupSize {
    tabGroupWidth: number;
    tabGroupScrollLeft: number;
    tabGroupScrollWidth: number;
}
interface UseTabGroupSizeResult extends TabGroupSize {
    update: (newScroll: number) => unknown;
}
export declare function useTabGroupSize(tabGroupRef: RefObject<HTMLDivElement>): UseTabGroupSizeResult;
export {};
