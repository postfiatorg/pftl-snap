import { BaseBreakpoint, GridState } from "../Grids.types";
export default function <B extends BaseBreakpoint = BaseBreakpoint>(setPatterns: (reset?: boolean) => void, sortedBreakpoints: B[], gridState: GridState): void;
