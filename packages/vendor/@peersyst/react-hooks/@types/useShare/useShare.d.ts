import { UseShareParams, UseShareReturn } from "./useShare.types";
/**
 * Share the ShareData with the native share dialog
 * only works on mobile/tablet
 * @returns
 * - canShare: if the device can share the data (ShareData) provided
 * - share: function to share the data (ShareData)
 * - isSharing: if the device is currently sharing
 */
export default function useShare({ onShare, onShareFailed }?: UseShareParams): UseShareReturn;
