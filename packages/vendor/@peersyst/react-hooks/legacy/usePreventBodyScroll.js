import { useEffect } from "react";
export default function usePreventBodyScroll(prevent) {
  useEffect(function () {
    if (prevent) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
    return function () {
      if (prevent) {
        document.documentElement.style.removeProperty("overflow");
      }
    };
  }, [prevent]);
}