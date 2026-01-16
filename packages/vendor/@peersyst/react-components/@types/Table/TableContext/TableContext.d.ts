/// <reference types="react" />
import { TableContextType } from "./TableContext.types";
export declare const TableContext: import("react").Context<TableContextType<any>>;
export declare const TableProvider: import("react").Provider<TableContextType<any>>;
export declare const TableConsumer: import("react").Consumer<TableContextType<any>>;
export declare function useTable<TData = any>(): TableContextType<TData>;
