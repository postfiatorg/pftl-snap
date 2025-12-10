import { getPublicKey } from 'nostr-tools';

import type { Context } from '../../core/Context';
import type { IHandler } from '../IHandler';

export const GetNostrPublicKeyMethod = 'nostr_getPublicKey';

export class GetNostrPublicKeyHandler implements IHandler<typeof GetNostrPublicKeyMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: void): Promise<string> {
    const wallet = this.context.wallet;
    
    const hexKey = wallet.privateKey;
    const sk = Buffer.from(hexKey, 'hex');
    
    // Derive Nostr public key (Schnorr)
    return getPublicKey(sk);
  }
}

