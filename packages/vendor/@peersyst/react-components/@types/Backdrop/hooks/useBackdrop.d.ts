import { ModalContextType } from "../../ModalProvider";
export interface UseBackdropResult {
    showBackdrop: ModalContextType["showModal"];
    hideBackdrop: ModalContextType["hideModal"];
    isBackdropActive: ModalContextType["isModalActive"];
}
export declare function useBackdrop(): UseBackdropResult;
