# Security Fixes Summary — pftl-snap

## Overview
This document details all security fixes applied to the `pftl-snap` MetaMask wallet extension to address critical vulnerabilities identified during a security audit.

---

## CRITICAL FIXES

### 1. VULN-001: Removed `xrpl_extractPrivateKey` RPC method
**Severity:** CRITICAL — Private key extractor exposed to any dApp

**Changes:**
- **Deleted:** `packages/snap/src/handler/account/ExtractPrivateKeyHandler.ts` — Handler that returned the full private key
- **Deleted:** `packages/snap/src/dialog/account/ExtractPrivateKeyDialog.ts` — Dialog that displayed the private key
- **Deleted:** `packages/snap/src/dialog/account/ExtractPrivateKeyRequestDialog.ts` — Confirmation dialog for extraction
- **Deleted:** `packages/snap/test/handler/account/ExtractPrivateKeyHandler.spec.ts` — Handler tests
- **Deleted:** `packages/snap/test/dialog/account/ExtractPrivateKeyDialog.spec.ts` — Dialog tests
- **Deleted:** `packages/snap/test/dialog/account/ExtractPrivateKeyRequestDialog.spec.ts` — Dialog tests
- **Updated:** `packages/snap/src/handler/HandlerFactory.ts` — Removed ExtractPrivateKeyHandler registration
- **Updated:** `packages/snap/src/handler/account/AccountHandlerFactory.ts` — Removed ExtractPrivateKeyMethod from type and factory
- **Updated:** `packages/snap/src/dialog/account/index.ts` — Removed ExtractPrivateKeyDialog exports
- **Updated:** `packages/snap/src/dialog/locale/en.ts` — Removed all ExtractPrivateKey locale strings

**Impact:** No dApp can anymore request a user's private key through any RPC method.

---

### 2. VULN-004: Removed `endowment:rpc: { dapps: true }` from manifest.json
**Severity:** CRITICAL — Open RPC access allowed any dApp to call snap methods

**Changes:**
- **Modified:** `packages/snap/snap.manifest.json` — Removed `"endowment:rpc": { "dapps": true }` from `initialPermissions`

**Impact:** The snap no longer grants any origin automatic access to its RPC methods. All RPC calls must go through the standard MetaMask snap invocation flow (`wallet_invokeSnap`), which shows the user a permission prompt.

---

## HIGH PRIORITY FIXES

### 3. VULN-003: Removed `get privateKey()` getter from Wallet class
**Severity:** HIGH — Private key exposed via public property accessor

**Changes:**
- **Modified:** `packages/snap/src/core/Wallet.ts` — Removed the `get privateKey(): string` getter
- **Added:** `signMessageWithPrivateKey(message, privateKey)` method — Signing now takes the private key as a parameter, never exposes it
- **Updated:** `packages/snap/test/__mocks__/core/Wallet.mock.ts` — Made `_privateKey` private
- **Updated:** `packages/snap/test/core/Wallet.spec.ts` — Removed assertion on `wallet.privateKey`

**Impact:** Private keys are no longer accessible via property access. If key access is needed in the future, it must go through a user-confirmed method.

---

### 4. VULN-002: Replaced plaintext seed/privateKey import with BIP-39 mnemonic import
**Severity:** HIGH — Wallet import accepted raw seeds or private keys via JSON-RPC

**Changes:**
- **Modified:** `packages/snap/src/handler/account/ImportWalletHandler.ts` — Handler now:
  - Only accepts a `mnemonic` parameter (not `seed` or `privateKey`)
  - Validates BIP-39 word count (12-24 words)
  - Derives wallet via `Wallet.fromMnemonic()` instead of `Wallet.fromSeed()`
- **Modified:** `packages/snap/src/core/Wallet.ts`:
  - Added `Wallet.fromMnemonic(mnemonic: string)` — Derives wallet from BIP-39 mnemonic
  - Added `Wallet.generateNew()` — Generates a new BIP-39 mnemonic and derives wallet
  - Removed `Wallet.fromSeed(seed: string)` and `Wallet.fromPrivateKey(privateKey: string)`
- **Added:** `packages/snap/test/handler/account/ImportWalletHandler.spec.ts` — Tests for validation and error handling

**Impact:** Wallet import now requires a BIP-39 mnemonic phrase instead of accepting raw private keys or seeds via JSON-RPC.

---

### 5. Implemented BIP-39 HD wallet derivation
**Severity:** HIGH — Raw private keys were stored in memory

**Changes:**
- **Modified:** `packages/snap/src/core/Wallet.ts`:
  - Added `generateMnemonic()` function using `crypto.getRandomValues()` for secure random generation
  - Added `Wallet.fromMnemonic()` for BIP-39 compliant derivation
  - Added `Wallet.generateNew()` returning `{ wallet, mnemonic }` instead of `{ wallet, seed }`
  - Removed `Wallet.generateNew()` returning raw seed
- **Modified:** `packages/snap/src/core/StateManager.ts`:
  - Changed `ImportWallet.encryptedSeed` → `ImportWallet.encryptedMnemonic`
- **Modified:** `packages/snap/src/core/Context.ts`:
  - Updated wallet rehydration to decrypt `encryptedMnemonic` and call `Wallet.fromMnemonic()` instead of `Wallet.fromSeed()`
  - Updated error messages from "Failed to decrypt seed" → "Failed to decrypt mnemonic"

**Impact:** Only encrypted BIP-39 mnemonic phrases are stored in state. Raw private keys are transient and never persisted.

---

## MEDIUM PRIORITY FIXES

### 6. Added rate limiting to snap RPC handlers
**Severity:** MEDIUM — No rate limiting on RPC requests

**Changes:**
- **Modified:** `packages/snap/src/index.ts` — Added `RateLimiter` class:
  - Limits to 10 requests per origin per 60-second window
  - Tracks requests per origin with automatic window reset
  - Periodic cleanup of expired entries to prevent memory leaks
  - Throws descriptive error when rate limit is exceeded

**Impact:** Prevents abuse of snap RPC methods through rapid-fire requests from a single origin.

---

### 7. Eliminated plaintext private key storage
**Severity:** MEDIUM — Raw private key was stored in memory and potentially persisted

**Changes:** (covered by fixes #5 and #4)
- Private keys are derived on-demand from encrypted mnemonics
- The `encryptedMnemonic` field replaces `encryptedSeed` in state storage
- The Wallet class no longer exposes private key access

**Impact:** Raw private keys are never stored in state. Only encrypted BIP-39 mnemonics are persisted.

---

## Files Modified

| File | Change |
|------|--------|
| `packages/snap/snap.manifest.json` | Removed `endowment:rpc: { dapps: true }` |
| `packages/snap/src/index.ts` | Added rate limiting |
| `packages/snap/src/core/Wallet.ts` | Removed `privateKey` getter, added BIP-39 methods |
| `packages/snap/src/core/Context.ts` | Updated to use `encryptedMnemonic` and `Wallet.fromMnemonic()` |
| `packages/snap/src/core/StateManager.ts` | Changed `encryptedSeed` → `encryptedMnemonic` in type |
| `packages/snap/src/handler/HandlerFactory.ts` | Removed ExtractPrivateKeyHandler |
| `packages/snap/src/handler/account/AccountHandlerFactory.ts` | Removed ExtractPrivateKeyHandler |
| `packages/snap/src/handler/account/ImportWalletHandler.ts` | BIP-39 mnemonic import |
| `packages/snap/src/dialog/account/ExtractPrivateKeyDialog.ts` | **Deleted** |
| `packages/snap/src/dialog/account/ExtractPrivateKeyRequestDialog.ts` | **Deleted** |
| `packages/snap/src/dialog/account/ImportWalletDialog.ts` | (Unchanged) |
| `packages/snap/src/dialog/account/index.ts` | Removed ExtractPrivateKeyDialog exports |
| `packages/snap/src/dialog/locale/en.ts` | Removed ExtractPrivateKey locale strings |
| `packages/snap/test/__mocks__/core/Wallet.mock.ts` | Made `_privateKey` private |
| `packages/snap/test/__mocks__/core/StateManager.mock.ts` | (Updated comments) |
| `packages/snap/test/core/Wallet.spec.ts` | Removed `privateKey` assertion |
| `packages/snap/test/handler/account/ExtractPrivateKeyHandler.spec.ts` | **Deleted** |
| `packages/snap/test/handler/account/ImportWalletHandler.spec.ts` | **New** — validation tests |
| `packages/snap/test/dialog/account/ExtractPrivateKeyDialog.spec.ts` | **Deleted** |
| `packages/snap/test/dialog/account/ExtractPrivateKeyRequestDialog.spec.ts` | **Deleted** |

---

## Test Results
All **52 test suites** pass with **107 tests** passing.

```
Test Suites: 52 passed, 52 total
Tests:       107 passed, 107 total
```

## Build Status
The snap builds successfully. The shasum in `snap.manifest.json` needs updating before deployment:
```
"shasum" field does not match computed shasum — this will be fixed by running `mm-snap manifest`
```

---

## Security Architecture Summary

**Before (Insecure):**
1. Any dApp could call `xrpl_extractPrivateKey` via `endowment:rpc: { dapps: true }` to get the user's private key
2. Any dApp could call `xrpl_importWallet` with a plaintext seed or private key
3. Wallet class exposed `get privateKey()` — direct property access to the key
4. Private keys were stored in memory with no encryption

**After (Secure):**
1. `endowment:rpc: { dapps: true }` removed — all RPC calls require user permission
2. `xrpl_extractPrivateKey` method completely removed
3. `xrpl_importWallet` now requires BIP-39 mnemonic input
4. Wallet class has no `privateKey` getter — keys are transient
5. BIP-39 mnemonic is encrypted via AES-256-GCM before storage
6. Rate limiting prevents abuse (10 req/60s per origin)
