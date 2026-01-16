import { ComponentType } from "react";
import { CommonModalComponentProps, ModalWithId } from "../ModalProvider.types";
export default function createModal<P extends CommonModalComponentProps>(Component: ComponentType<P & {
    id: string;
    close: () => void;
}>): ModalWithId<P>;
