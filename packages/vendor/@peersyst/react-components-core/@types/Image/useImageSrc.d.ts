export interface UseImageSrcResult<SrcT, LoadEvent, ErrorEvent> {
    src: SrcT | undefined;
    handleLoad: (e: LoadEvent) => void;
    handleError: (e: ErrorEvent) => void;
    loaded: boolean;
    error: boolean;
    fallbackError: boolean;
}
export default function <SrcT, LoadEvent, ErrorEvent>(src: SrcT, fallback: SrcT, onLoad?: (e: LoadEvent) => void, onError?: (e: ErrorEvent) => void): UseImageSrcResult<SrcT, LoadEvent, ErrorEvent>;
