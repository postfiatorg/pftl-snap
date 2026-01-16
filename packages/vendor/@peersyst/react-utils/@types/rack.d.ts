import { ForwardRefExoticComponent, ForwardedRef, ComponentType, PropsWithoutRef, ReactNode, RefAttributes } from "react";
import { SlotsResult, SlotType } from "./extractSlots";
export type SlotParams<T extends SlotType = SlotType, C extends ComponentType<any> = ComponentType<any>> = {
    component: C;
    type: T;
};
export type SlotsOptions = Record<string, ComponentType<any> | SlotParams>;
export type Slots<S extends SlotsOptions> = {
    [K in keyof S]: S[K] extends SlotParams ? S[K]["component"] : S[K];
};
export type PickSlotsType<S extends SlotsOptions> = {
    [K in keyof S]: S[K] extends SlotParams<infer T> ? T : SlotType.SLOT;
};
export type RackSlots<S extends SlotsOptions> = SlotsResult<PickSlotsType<S>>;
export declare function Slot<C extends ComponentType<any>>(component: C): SlotParams<SlotType.SLOT, C>;
export declare function ArraySlot<C extends ComponentType<any>>(component: C): SlotParams<SlotType.ARRAY, C>;
/**
 * Utility that creates racks and its slots.
 *
 * @param factory
 * @param slots
 * @param extensions
 */
export default function rack<S extends SlotsOptions, P extends {
    children?: ReactNode;
}, T>(slotsOptions: S, factory: (props: P, slots: RackSlots<S>, ref: ForwardedRef<T>) => JSX.Element): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> & Slots<S>;
