import { UnauthorizedError, UserRejectedRequestError, type Json } from '@metamask/snaps-sdk';

import type { Context } from '../../core/Context';
import { ExtractPrivateKeyDialog } from '../../dialog/account/ExtractPrivateKeyDialog';
import { ExtractPrivateKeyRequestDialog } from '../../dialog/account/ExtractPrivateKeyRequestDialog';
import type { IHandler } from '../IHandler';

export const ExtractPrivateKeyMethod = 'xrpl_extractPrivateKey';

const POSTFIAT_HOSTNAME = 'postfiat.org';
const LOCAL_EXPORT_HOSTNAMES = new Set(['localhost', '127.0.0.1', '[::1]']);

export function isTrustedPrivateKeyExportOrigin(origin: string): boolean {
  let parsedOrigin: URL;
  try {
    parsedOrigin = new URL(origin);
  } catch {
    return false;
  }

  const hostname = parsedOrigin.hostname.toLowerCase();
  if (parsedOrigin.protocol === 'https:' && (hostname === POSTFIAT_HOSTNAME || hostname.endsWith(`.${POSTFIAT_HOSTNAME}`))) {
    return true;
  }

  return (parsedOrigin.protocol === 'http:' || parsedOrigin.protocol === 'https:') && LOCAL_EXPORT_HOSTNAMES.has(hostname);
}

export class ExtractPrivateKeyHandler implements IHandler<typeof ExtractPrivateKeyMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string): Promise<Json> {
    if (!isTrustedPrivateKeyExportOrigin(origin)) {
      throw new UnauthorizedError('Private key export is not available from this origin.');
    }

    const success = await ExtractPrivateKeyRequestDialog.prompt();
    if (!success) {
      throw new UserRejectedRequestError();
    }
    await ExtractPrivateKeyDialog.prompt(this.context.wallet.privateKey);
    return {};
  }
}
