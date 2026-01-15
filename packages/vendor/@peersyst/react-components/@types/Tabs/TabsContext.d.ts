/// <reference types="react" />
export interface TabsContextInterface {
    activeIndex: number;
    onTabChange: (index: number) => void;
    activeRef: HTMLDivElement | null;
    setActiveRef: (ref: HTMLDivElement | null) => void;
}
export declare const TabsContext: import("react").Context<TabsContextInterface>;
export declare const TabsProvider: import("react").Provider<TabsContextInterface>;
export declare const TabsConsumer: import("react").Consumer<TabsContextInterface>;
