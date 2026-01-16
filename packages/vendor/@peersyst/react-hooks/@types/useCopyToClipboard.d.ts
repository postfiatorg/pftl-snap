export interface UseCopyToClipboardParams {
    onCopy?: () => unknown;
}
export interface UseCopyToClipboardReturn {
    isLoading: boolean;
    copyToClipboard: (messsage: string) => Promise<void>;
}
export default function useCopyToClipboard({ onCopy, }?: UseCopyToClipboardParams): UseCopyToClipboardReturn;
