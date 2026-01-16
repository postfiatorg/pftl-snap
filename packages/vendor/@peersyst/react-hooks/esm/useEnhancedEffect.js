import { useEffect, useLayoutEffect } from "react";
var useEnhancedEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
export default useEnhancedEffect;