import { MutableRefObject } from "react";
export interface TriggerOptions {
    disableHysteresis?: boolean;
    target?: Window | HTMLElement;
    threshold?: number;
}
export interface UseScrollTriggerOptions extends TriggerOptions {
    getTrigger?: typeof defaultTrigger;
}
declare function defaultTrigger(store: MutableRefObject<number | undefined>, options: TriggerOptions): boolean;
export default function useScrollTrigger(options?: UseScrollTriggerOptions): boolean;
export {};
