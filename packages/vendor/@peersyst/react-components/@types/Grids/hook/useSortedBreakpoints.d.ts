import { BaseBreakpoint } from "../Grids.types";
export default function <B extends BaseBreakpoint = BaseBreakpoint>(breakpoints: B[] | undefined, maxBreakpoint: Omit<B, "maxWidth">): B[];
