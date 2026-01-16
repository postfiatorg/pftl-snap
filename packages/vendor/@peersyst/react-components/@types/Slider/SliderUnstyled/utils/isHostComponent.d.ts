import { ElementType } from "react";
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
declare function isHostComponent(element: ElementType): boolean;
export default isHostComponent;
