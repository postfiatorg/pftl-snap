import { ModalContextType } from "../ModalContext";
export interface UseModalResult {
    showModal: ModalContextType["showModal"];
    hideModal: ModalContextType["hideModal"];
    isModalActive: ModalContextType["isModalActive"];
}
export declare function useModal(): UseModalResult;
