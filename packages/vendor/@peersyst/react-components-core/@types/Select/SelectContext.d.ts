/// <reference types="react" />
export interface SelectContextType<T> {
    value: T | T[];
    multiple: boolean;
    readonly: boolean;
    setValue: (value: T | T[]) => void;
    setOpen: (value: boolean) => void;
    compare?: (a: T, b: T) => boolean;
}
export declare const SelectContext: import("react").Context<any>;
export declare const SelectProvider: import("react").Provider<any>;
export declare const SelectConsumer: import("react").Consumer<any>;
