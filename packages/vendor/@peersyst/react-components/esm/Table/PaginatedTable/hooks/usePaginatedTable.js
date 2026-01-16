import { useTable } from "../../TableContext";
export default function usePaginatedTableFooter() {
  var _useTable = useTable(),
    table = _useTable.table,
    data = _useTable.data,
    rowCount = _useTable.rowCount;
  var totalRows = rowCount != null ? rowCount : data.length;
  var totalPages = table.getPageCount();
  var paginationState = table.getState().pagination;
  var currentPage = paginationState.pageIndex + 1;
  var currentRange = [paginationState.pageIndex * paginationState.pageSize + 1, Math.min((paginationState.pageIndex + 1) * paginationState.pageSize, totalRows)];
  return {
    table: table,
    data: data,
    totalRows: totalRows,
    totalPages: totalPages,
    currentPage: currentPage,
    currentRange: currentRange
  };
}