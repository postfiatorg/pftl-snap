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
  // Skip SES evaluation in CI - evaluation is for dev validation only
  evaluate: false,
};

export default config;
