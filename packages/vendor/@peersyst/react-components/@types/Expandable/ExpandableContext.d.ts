/// <reference types="react" />
export interface IExpandableContext {
    open: boolean;
    toggle: (open?: boolean) => void;
}
export declare const ExpandableContext: import("react").Context<IExpandableContext>;
export declare const ExpandableProvider: import("react").Provider<IExpandableContext>;
export declare const ExpandableConsumer: import("react").Consumer<IExpandableContext>;
