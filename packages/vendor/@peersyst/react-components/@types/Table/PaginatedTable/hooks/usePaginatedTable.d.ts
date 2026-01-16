import { Table } from "@tanstack/react-table";
export interface UsePaginatedTableResult<TData = any> {
    table: Table<TData>;
    data: TData[];
    totalRows: number;
    totalPages: number;
    currentPage: number;
    currentRange: [number, number];
}
export default function usePaginatedTableFooter<TData = any>(): UsePaginatedTableResult<TData>;
