<p align="center">
  <a href="https://postfiat.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo512.png">
      <img src=".github/assets/logo512.png" height="150">
    </picture>
  </a>
</p>
<p align="center">
  If you have a MetaMask wallet now you have an PFTL one.<br>
  Securely manage your PFT and interact with PFTL-based DApps directly from MetaMask.<br>
  The Post Fiat SNAP expands on PFT Ledger for MetaMask by enabling support for multiple wallets which may be imported using Family Seeds.<br>
</p>
</div>

## Overview

The PFT Ledger for MetaMask is an extension that allows users to interact with the PFT Ledger (PFTL) directly from their MetaMask wallet. This Snap introduces support for PFTL, enabling users to manage PFT and other tokens on the PFTL, perform transactions, and interact with PFTL-based decentralized applications (DApps).

## PFTL for MetaMask Original Features

- **PFTL Integration**: Manage PFT and PFTL tokens within MetaMask.
- **Transaction Support**: Send and receive PFT and other PFTL tokens.
- **DApp Interaction**: Use PFTL-based DApps seamlessly.
- **Account Management**: View account balances, transaction history, and other details.
- **Secure and User-Controlled**: Full control over your PFTL keys and permissions.

- ## The Post Fiat SNAP Expanded Features

- **Multiple PFTL Wallet Support**: Import and manage mutltiple PFTL wallets from family seeds.

- **Site Feature Expansion**: Memo transactions, Import Wallet, Switch Wallet, Trust Lines.

## Usage

To use the PFT Ledger, first install it by following these steps:

1. **Open MetaMask**: Ensure you have the latest version of the MetaMask extension installed in your browser.
2. **Navigate to Settings**: Click on the MetaMask icon, go to settings, and look for the Snaps section.
3. **Add PFT Ledger**: In the Snaps section, add the PFT Ledger by providing its URL or selecting it from the Snap store.
4. **Install Snap**: Click on the PFT Ledger and follow the prompts to add it to your MetaMask wallet.
5. **Enable Snap**: Once installed, enable the Snap and grant necessary permissions.

## Development

Here’s a basic guide to get started:

### Prerequisites

- Node.js
- [MetaMask](https://metamask.io/)

### Installation

```bash
yarn
```

### Running

```bash
yarn start
```

- To only start the UI, navigate to `packages/site` and start from there. The same applies to the snap in `packages/snap`.
- If you make changes to the snap, first remove the previously installed version to see the changes.
- Enable the [MetaMask](https://metamask.io/) in your extensions.

## API

### Installation

Use the following request to install the Snap:

```javascript
provider.request({
  method: 'wallet_requestSnaps',
  params: {
    ['npm:PFTL-snap']: {},
  },
});
```

For developing the snap, change the request to:

```javascript
params: {
    ["local:http://localhost:8080"]: {},
},
```

### Interact with the Snap

To make requests using the RPC, use the following code:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:PFTL-snap',
    request: {
      method: 'PFTL_request',
      params: { command: 'account_info', account: 'rBg...' },
    },
  },
});
```

### Account

Get current account:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:PFTL-snap',
    request: {
      method: 'PFTL_getAccount',
    },
  },
});
```

### Network

- Get supported networks:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:PFTL-snap',
    request: {
      method: 'PFTL_getStoredNetworks',
    },
  },
});
```

- Get current network:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:PFTL-snap',
    request: {
      method: 'PFTL_getActiveNetwork',
    },
  },
});
```

- Change the selected network:

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:PFTL-snap',
    request: {
      method: 'PFTL_changeNetwork',
      params: { chainId: 1 }, // Example chainId
    },
  },
});
```

### Signing and submitting transactions

To sign and submit transactions

```javascript
provider.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:PFTL-snap',
    request: {
      method: 'PFTL_signAndSubmit',
      params: {
        TransactionType: 'Payment',
        Account: 'rBg...',
        Destination: 'rPT...',
        Amount: '1000000', // Amount in drops
      },
    },
  },
});
```

- If you only want to sign the transaction use `PFTL_sign`.

## Support

For support and further information, refer to the following resources:

- **Documentation**: [https://docs.PFTLsnap.com/](https://postfiat.org/)
- **MetaMask Snaps Documentation**: [MetaMask Snaps](https://docs.metamask.io/snaps/)

## Contributing

We welcome contributions to the PFT Ledger project. To contribute, please follow these steps:

1. **Fork the Repository**: Fork the PFT Ledger repository on GitHub.
2. **Create a Branch**: Create a new branch for your feature or bugfix.
3. **Submit a Pull Request**: Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
