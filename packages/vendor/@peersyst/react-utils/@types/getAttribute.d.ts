import { DeepPick, NestedKeys } from "@peersyst/react-types";
export default function <T extends object, K extends NestedKeys<T>>(obj: T, key: K): DeepPick<T, K>;
