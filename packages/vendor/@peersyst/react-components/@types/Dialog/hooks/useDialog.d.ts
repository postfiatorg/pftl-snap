import { DialogProps } from "../Dialog.types";
export interface UseDialogResult {
    showDialog: (props: DialogProps) => void;
    hideDialog: () => void;
    isDialogOpen: () => void;
}
export default function (): {
    showDialog: (props: DialogProps) => void;
    hideDialog: () => void;
    isDialogOpen: () => boolean;
};
