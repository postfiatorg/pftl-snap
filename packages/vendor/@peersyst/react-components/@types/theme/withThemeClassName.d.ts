import { ComponentType } from "react";
export type AddClassName<T> = Omit<T, "className"> & WithClassName;
export interface WithClassName {
    className?: string;
}
export declare function withThemeClassName<TProps>(WrappedComponent: ComponentType<TProps>): ComponentType<AddClassName<TProps>>;
