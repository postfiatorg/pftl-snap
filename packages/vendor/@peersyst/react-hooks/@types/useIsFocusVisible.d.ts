import { MutableRefObject, FocusEvent, Ref } from "react";
export declare function teardown(doc: Document): void;
export interface UseIsFocusVisibleResult {
    isFocusVisibleRef: MutableRefObject<boolean>;
    onBlur: (event: FocusEvent<any>) => void;
    onFocus: (event: FocusEvent<any>) => void;
    ref: Ref<unknown>;
}
export default function useIsFocusVisible(): UseIsFocusVisibleResult;
