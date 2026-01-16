import { DialogProps } from "../Dialog.types";
import { ModalWithId } from "../../ModalProvider/ModalProvider.types";
export interface UseDialogResult {
    showDialog: (Dialog: ModalWithId<DialogProps>, props: DialogProps) => void;
    hideDialog: (Dialog: ModalWithId | string) => void;
    isDialogOpen: (Dialog: ModalWithId | string) => boolean;
}
export default function (): UseDialogResult;
