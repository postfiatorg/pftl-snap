import type { SnapConfig } from '@metamask/snaps-cli';
import { resolve } from 'path';

const config: SnapConfig = {
  input: resolve(__dirname, 'src/index.ts'),
  server: {
    port: 8080,
  },
  polyfills: true,
  stats: {
    verbose: false,
  },
  evaluate: false,
};

export default config;
