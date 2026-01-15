import { useContext } from "react";
import { TabsContext } from "../TabsContext";
export default function useTabs() {
  var _useContext = useContext(TabsContext),
    activeIndex = _useContext.activeIndex,
    onTabChange = _useContext.onTabChange;
  return [activeIndex, onTabChange];
}