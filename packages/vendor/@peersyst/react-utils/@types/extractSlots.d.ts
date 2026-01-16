import { ReactElement, ReactNode } from "react";
export declare enum SlotType {
    SLOT = "SLOT",
    ARRAY = "ARRAY"
}
export type SlotsResult<S extends Record<string, SlotType> = Record<string, SlotType.SLOT>> = {
    [K in keyof S]: S[K] extends SlotType.SLOT ? ReactElement : ReactElement[];
};
/**
 * Extracts all slots from children and other remaining children
 * @param children
 */
export default function extractSlots<S extends Record<string, SlotType> = Record<string, SlotType.SLOT>>(slotsDef: S, children: ReactNode): [SlotsResult<S>, ReactNode];
