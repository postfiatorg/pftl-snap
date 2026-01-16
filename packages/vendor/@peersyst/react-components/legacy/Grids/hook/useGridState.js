import { useState } from "react";
export default function () {
  return useState({
    rowSize: undefined,
    colGap: undefined,
    rowGap: undefined,
    activeBreakpoint: Infinity,
    columns: 0,
    alignItems: undefined,
    justifyItems: undefined,
    justifyContent: undefined
  });
}