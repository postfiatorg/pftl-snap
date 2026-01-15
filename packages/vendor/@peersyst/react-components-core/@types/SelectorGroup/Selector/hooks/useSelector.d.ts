import { SelectorChildrenContext } from "../Selector.types";
export interface UseSelectorProps<T> {
    value: T;
}
export declare function useSelector<T>({ value }: UseSelectorProps<T>): SelectorChildrenContext<T>;
