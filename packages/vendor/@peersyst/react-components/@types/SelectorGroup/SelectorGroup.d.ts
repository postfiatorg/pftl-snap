/// <reference types="react" />
import { SelectorDirection } from "@peersyst/react-components-core";
import { SelectorGroupProps } from "./SelectorGroup.types";
declare function SelectorGroup<T, Multiple extends boolean = false, D extends SelectorDirection = "column">(props: SelectorGroupProps<T, Multiple, D>): JSX.Element;
export default SelectorGroup;
