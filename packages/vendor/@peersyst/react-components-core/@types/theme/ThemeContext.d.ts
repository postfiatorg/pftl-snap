/// <reference types="react" />
import { ThemeContextType, CoreThemeProviderProps } from "./ThemeContext.types";
export declare const ThemeContext: import("react").Context<ThemeContextType>;
export declare const ThemeProvider: ({ storeTheme, systemColorScheme, storageTheme, setStorageTheme, onThemeChange, children, }: CoreThemeProviderProps) => JSX.Element;
export declare const ThemeConsumer: import("react").Consumer<ThemeContextType>;
