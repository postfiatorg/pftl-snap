/// <reference types="react" />
import { ThemeOverrideContextType, ThemeOverrideProviderProps } from "./ThemeOverrideContext.types";
export declare const ThemeOverrideContext: import("react").Context<ThemeOverrideContextType>;
export declare const ThemeOverrideProvider: ({ theme: themeProp, overrides, children, }: ThemeOverrideProviderProps) => JSX.Element;
