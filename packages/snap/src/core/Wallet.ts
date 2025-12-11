/* eslint-disable lines-between-class-members */
/* eslint-disable no-restricted-syntax */
import { getBIP44AddressKeyDeriver } from '@metamask/key-tree';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { sign, deriveAddress, generateSeed, deriveKeypair } from 'ripple-keypairs';
import { type Transaction, Wallet as XrplWallet } from 'xrpl';

import { bip44CompressedPublicKeyToXRPPublicKey, bip44PrivateKeyToXRPPrivateKey } from './utils/wallet-utils';

export class Wallet {
  private readonly _wallet: XrplWallet;

  constructor(private readonly _address: string, private readonly _publicKey: string, private readonly _privateKey: string) {
    this._wallet = new XrplWallet(_publicKey, _privateKey);
  }

  get address(): string {
    return this._address;
  }

  get publicKey(): string {
    return this._publicKey;
  }

  get privateKey(): string {
    return this._privateKey;
  }

  public sign(transaction: Transaction): { tx_blob: string; hash: string } {
    return this._wallet.sign(transaction);
  }

  public signMessage(message: string): string {
    return sign(message, this._privateKey);
  }

  public static async derive(addressIndex = 0): Promise<Wallet> {
    const xrplNode = await snap.request({
      method: 'snap_getBip44Entropy',
      params: {
        coinType: 144, // XRP coin_type
      },
    });

    const bip44AddressKeyDeriver = await getBIP44AddressKeyDeriver(xrplNode);

    /**
     * Derive the BIP44 node for the XRP account. BIB44 levels structure:
     * m / 44' / coin_type' / account' / change / address_index
     * m / 44' / 144' / 0' / 0 / `addressIndex`
     */
    const bip44Node = await bip44AddressKeyDeriver(addressIndex);

    const xrpPrivateKey = bip44PrivateKeyToXRPPrivateKey(bip44Node.privateKey as string);
    /**
     * Use the compressed public key
     * @see https://xrpl.org/docs/concepts/accounts/cryptographic-keys/#secp256k1-key-derivation
     */
    const xrpPublicKey = bip44CompressedPublicKeyToXRPPublicKey(bip44Node.compressedPublicKey);

    const classicAddress = deriveAddress(xrpPublicKey);

    return new Wallet(classicAddress, xrpPublicKey, xrpPrivateKey);
  }

  /**
   * Create a Wallet from a raw 32-byte hex private key using secp256k1 curve math.
   * This correctly derives the compressed public key with proper 02/03 prefix based on y-parity.
   * @param hexPrivateKey
   */
  public static fromRawHex(hexPrivateKey: string): Wallet {
    // Normalize the hex key (remove 0x prefix if present, ensure lowercase for conversion)
    const cleanHex = hexPrivateKey.replace(/^0x/, '').toLowerCase();

    if (!/^[0-9a-f]{64}$/.test(cleanHex)) {
      throw new Error('Invalid hex private key: must be exactly 64 hex characters');
    }

    // Convert to Uint8Array for secp256k1
    const privateKeyBytes = Uint8Array.from(Buffer.from(cleanHex, 'hex'));

    // Use secp256k1 to compute the COMPRESSED public key (33 bytes)
    // This correctly determines 02 (even y) or 03 (odd y) based on actual curve math
    const compressedPubKeyBytes = secp256k1.getPublicKey(privateKeyBytes, true);

    // Convert to uppercase hex for XRPL format
    const xrplPublicKey = Buffer.from(compressedPubKeyBytes).toString('hex').toUpperCase();

    // XRPL private key format: '00' + raw hex (uppercase)
    const xrplPrivateKey = `00${cleanHex.toUpperCase()}`;

    // Derive address from compressed public key
    const address = deriveAddress(xrplPublicKey);

    return new Wallet(address, xrplPublicKey, xrplPrivateKey);
  }

  public static fromPrivateKey(privateKey: string): Wallet {
    try {
      // If it starts with 's', treat it as a family seed
      if (privateKey.startsWith('s')) {
        return this.fromSeed(privateKey);
      }

      // Check if it's a raw 64-char hex key (Nostr format)
      const cleanHex = privateKey.replace(/^(0x|00)/, '').toLowerCase();
      if (/^[0-9a-f]{64}$/.test(cleanHex)) {
        // Use proper secp256k1 curve math to derive the correct public key
        return this.fromRawHex(cleanHex);
      }

      // Try as XRPL formatted key (00 + 64 hex = 66 chars)
      if (/^00[0-9a-fA-F]{64}$/.test(privateKey)) {
        const rawHex = privateKey.slice(2);
        return this.fromRawHex(rawHex);
      }

      // Last resort: try as seed without 's' prefix
      try {
        const keypair = deriveKeypair(`s${privateKey}`);
        const address = deriveAddress(keypair.publicKey);
        return new Wallet(address, keypair.publicKey, keypair.privateKey);
      } catch {
        throw new Error('Invalid private key or seed format');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Invalid private key format: ${error.message}`);
      } else {
        throw new Error('Invalid private key format: Unknown error');
      }
    }
  }

  public static fromSeed(seed: string): Wallet {
    try {
      // Validate and clean the seed
      let cleanSeed = seed;
      if (!cleanSeed.startsWith('s')) {
        cleanSeed = `s${cleanSeed}`;
      }

      // Generate keypair from seed
      const keypair = deriveKeypair(cleanSeed);
      const address = deriveAddress(keypair.publicKey);

      return new Wallet(address, keypair.publicKey, keypair.privateKey);
    } catch (error) {
      throw new Error('Invalid seed format');
    }
  }

  /**
   * Create a Wallet from a Nostr hex key using the stored address and public key.
   * This is used when re-activating a Nostr-imported wallet where the address/publicKey
   * were already derived and stored at import time.
   */
  public static fromNostrKey(hexKey: string, address: string, publicKey: string): Wallet {
    // Normalize the hex key
    const cleanHex = hexKey.replace(/^0x/, '').toLowerCase();
    
    if (!/^[0-9a-f]{64}$/i.test(cleanHex)) {
      throw new Error('Invalid Nostr key: must be 64 hex characters');
    }
    
    // XRPL private key format: '00' + raw hex (uppercase)
    const xrplPrivateKey = `00${cleanHex.toUpperCase()}`;
    
    return new Wallet(address, publicKey, xrplPrivateKey);
  }

  public static generateNew(): { wallet: Wallet; seed: string } {
    const seed = generateSeed();
    const wallet = this.fromSeed(seed);
    return { wallet, seed };
  }
}
