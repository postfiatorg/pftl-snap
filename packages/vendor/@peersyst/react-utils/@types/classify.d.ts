import { ComponentClass, ComponentType } from "react";
export default function classify<P>(Component: ComponentType<P>): ComponentClass<P>;
