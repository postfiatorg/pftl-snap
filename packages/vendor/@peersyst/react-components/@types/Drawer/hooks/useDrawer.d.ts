import { ModalContextType } from "../../ModalProvider";
export interface UseDrawerResult {
    showDrawer: ModalContextType["showModal"];
    hideDrawer: ModalContextType["hideModal"];
    isDrawerActive: ModalContextType["isModalActive"];
}
export declare function useDrawer(): UseDrawerResult;
