import { JSXElementConstructor, PropsWithChildren, ReactNode } from "react";
export default function <S extends string = string, P extends PropsWithChildren = {
    children: ReactNode;
}>(slot: S, Component?: JSXElementConstructor<P>): JSXElementConstructor<P>;
