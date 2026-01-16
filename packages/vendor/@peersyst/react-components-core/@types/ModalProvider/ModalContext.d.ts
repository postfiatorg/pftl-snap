/// <reference types="react" />
import { ModalWithId, ModalState, CommonModalComponentProps } from "./ModalProvider.types";
export interface ModalContextType {
    showModal: <T extends CommonModalComponentProps>(Modal: ModalWithId<T>, props?: T) => void;
    hideModal: (modal: ModalWithId | string) => void;
    removeModal: (id: string) => void;
    overrideModal: <T extends CommonModalComponentProps>(Modal: ModalWithId<T>, props?: T) => void;
    isModalActive: (modal: ModalWithId | string) => boolean;
    modals: ModalState;
}
export declare const ModalContext: import("react").Context<ModalContextType>;
export declare const ModalConsumer: import("react").Consumer<ModalContextType>;
