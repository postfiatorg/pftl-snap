declare global {
  interface Window {
    __PFTL_HOST_CONFIG__?: {
      snapId?: string;
    };
  }
}

const runtimeConfig = typeof window !== 'undefined' ? window.__PFTL_HOST_CONFIG__ || {} : {};

export const config = {
  snapId: runtimeConfig.snapId || import.meta.env.VITE_SNAP_ID || '',
};
