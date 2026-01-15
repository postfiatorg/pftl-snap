import { ComponentType } from "react";
interface WithTheme {
    theme: object;
}
export declare function withTheme<TProps>(WrappedComponent: ComponentType<TProps>): ComponentType<TProps & WithTheme>;
export {};
