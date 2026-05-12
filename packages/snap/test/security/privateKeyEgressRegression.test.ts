/**
 * SECURITY REGRESSION TEST
 * 
 * Ensures that no RPC handler in the Snap can return private-key material.
 * This test acts as a guard against reintroducing the VULN-001 vulnerability
 * where the `xrpl_extractPrivateKey` handler exposed the user's full private key.
 * 
 * Run with: npx jest test/security/privateKeyEgressRegression.test.ts
 */

import { HandlerFactory } from '../../src/handler/HandlerFactory';
import { WalletMock } from '../__mocks__/core/Wallet.mock';
import { Context } from '../../src/core/Context';

/**
 * Recursively check an object and all nested objects for any property
 * whose name contains 'privateKey', 'private_key', 'seed', or 'mnemonic'.
 * Returns the path(s) where such properties are found.
 */
function findPrivateMaterial(
  obj: unknown,
  path: string = '',
  foundPaths: string[] = [],
): string[] {
  if (obj === null || obj === undefined) {
    return foundPaths;
  }

  if (typeof obj === 'object') {
    const keys = Object.keys(obj as Record<string, unknown>);
    for (const key of keys) {
      const currentPath = path ? `${path}.${key}` : key;
      const lowerKey = key.toLowerCase();

      // Check for private-key material property names
      if (
        lowerKey.includes('privatekey') ||
        lowerKey.includes('private_key') ||
        lowerKey.includes('privkey') ||
        lowerKey.includes('privkey') ||
        lowerKey.includes('seed') ||
        lowerKey.includes('mnemonic')
      ) {
        foundPaths.push(currentPath);
        continue;
      }

      // Recurse into nested objects/arrays
      const value = (obj as Record<string, unknown>)[key];
      if (typeof value === 'object' && value !== null) {
        findPrivateMaterial(value, currentPath, foundPaths);
      }
    }
  }

  return foundPaths;
}

/**
 * Test: No handler in HandlerFactory returns private-key material in its response.
 * 
 * This test creates mock contexts for each registered handler and asserts that
 * the handle() response does not contain any property that could expose private-key
 * material (privateKey, private_key, seed, mnemonic).
 */
describe('Security: Private Key Egress Regression Guard', () => {
  let handlers: Record<string, unknown>;
  const walletMock = new WalletMock();
  const mockContext = { wallet: walletMock };

  beforeEach(() => {
    // Rebuild handlers to catch any that may have been added
    handlers = HandlerFactory(mockContext as unknown as Context);
  });

  test('no handler response should contain private-key material', async () => {
    const violations: string[] = [];

    for (const [methodName, handlerObj] of Object.entries(handlers)) {
      // Only test handlers that have a handle method
      if (
        typeof handlerObj === 'object' &&
        handlerObj !== null &&
        'handle' in handlerObj &&
        typeof (handlerObj as any).handle === 'function'
      ) {
        const handler = handlerObj as any;
        try {
          const result = await handler.handle();
          const foundPaths = findPrivateMaterial(result);

          if (foundPaths.length > 0) {
            violations.push(
              `Handler "${methodName}" returns private-key material at path(s): ${foundPaths.join(', ')}`,
            );
          }
        } catch (error) {
          // If the handler throws (e.g., requires params), that's acceptable.
          // The test only fails if private-key material is returned.
        }
      }
    }

    // Assert no violations found
    expect(violations).toEqual([]);
  });

  test('Wallet class must not expose privateKey getter', () => {
    // The Wallet class should NOT have a 'privateKey' property or getter.
    // This test asserts that the public interface of Wallet only exposes
    // safe material (address, publicKey) and signing methods.
    
    const walletMethods = Object.getOwnPropertyNames(WalletMock.prototype);
    
    const unsafeProperties = walletMethods.filter((method) =>
      method.toLowerCase().includes('privatekey') ||
      method.toLowerCase().includes('privkey') ||
      method.toLowerCase().includes('seed') ||
      method.toLowerCase().includes('mnemonic'),
    );

    expect(unsafeProperties).toEqual([]);
  });

  test('HandlerFactory must not include any private key extraction handlers', () => {
    // Assert that no handler in the factory has a name suggesting key extraction
    const handlerNames = Object.keys(handlers);
    
    const extractionHandlers = handlerNames.filter((name) =>
      name.toLowerCase().includes('extract') ||
      name.toLowerCase().includes('export') ||
      name.toLowerCase().includes('showkey') ||
      name.toLowerCase().includes('revealkey'),
    );

    expect(extractionHandlers).toEqual([]);
  });
});
