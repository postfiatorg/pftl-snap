/* eslint-disable */
/**
 *
 * THIS RPC CLIENT USES THE xrpl.js WebSocket Client
 *
 */
import { Client, type Request as XrplRequest, type SubmittableTransaction, setTransactionFlagsToNumber, ValidationError } from 'xrpl';
import { XrplResponse } from '../Provider';
import {
  calculateFeePerTransactionType,
  checkAccountDeleteBlockers,
  setLatestValidatedLedgerSequence,
  setNextValidSequenceNumber,
  setValidAddresses,
  txNeedsNetworkID,
} from './utils/autofill';
import { areAmountsEqual } from './utils/areAmountsEqual';

const DEFAULT_FEE_CUSHION = 1.2;
const DEFAULT_MAX_FEE_XRP = '2';

export class RPCClient {
  /**
   * Factor to multiply estimated fee by to provide a cushion in case the
   * required fee rises during submission of a transaction. Defaults to 1.2.
   *
   * @category Fee
   */
  public readonly feeCushion: number;

  /**
   * Maximum transaction cost to allow, in decimal XRP. Must be a string-encoded
   * number. Defaults to '2'.
   *
   * @category Fee
   */
  public readonly maxFeeXRP: string;
  /**
   * Network ID of the server this client is connected to
   *
   */
  public networkID: number | undefined;

  /**
   * Rippled Version used by the server this client is connected to
   *
   */
  public buildVersion: string | undefined;
  /**
   * The URL of the node this client is connected to
   */
  public url: string;

  /**
   * The xrpl.js WebSocket client
   */
  private client: Client;

  constructor(url: string) {
    this.url = url;
    this.client = new Client(url);
    this.feeCushion = DEFAULT_FEE_CUSHION;
    this.maxFeeXRP = DEFAULT_MAX_FEE_XRP;
  }

  async connect(): Promise<void> {
    if (!this.client.isConnected()) {
      await this.client.connect();
    }
    await this.getServerInfo();
  }

  async disconnect(): Promise<void> {
    if (this.client.isConnected()) {
      await this.client.disconnect();
    }
  }

  public async getServerInfo(): Promise<void> {
    try {
      const response = await this.request({
        command: 'server_info',
      });
      this.networkID = response.result.info.network_id ?? undefined;
      this.buildVersion = response.result.info.build_version;
    } catch (error) {
      // Silent failure - connection status is tracked via client.isConnected()
    }
  }

  async getLedgerIndex(): Promise<number> {
    const ledgerResponse = await this.request({
      command: 'ledger',
      ledger_index: 'validated',
    });
    return ledgerResponse.result.ledger_index;
  }

  public async request<Request extends XrplRequest>(req: Request): Promise<XrplResponse<Request>> {
    if (!this.client.isConnected()) {
      await this.client.connect();
    }
    const response = await this.client.request(req);
    return response as XrplResponse<Request>;
  }

  /**
   * Change the node URL and reconnect
   */
  public async changeNode(url: string): Promise<void> {
    await this.disconnect();
    this.url = url;
    this.client = new Client(url);
    await this.connect();
  }

  public async autofill<T extends SubmittableTransaction>(transaction: T, signersCount?: number): Promise<T> {
    if (!this.client.isConnected()) await this.connect();

    const tx = { ...transaction };

    setValidAddresses(tx);
    setTransactionFlagsToNumber(tx);

    const promises: Array<Promise<void>> = [];
    if (tx.NetworkID == null) {
      tx.NetworkID = txNeedsNetworkID(this) ? this.networkID : undefined;
    }
    if (tx.Sequence == null) {
      promises.push(setNextValidSequenceNumber(this, tx));
    }
    if (tx.Fee == null) {
      promises.push(calculateFeePerTransactionType(this, tx, signersCount));
    }
    if (tx.LastLedgerSequence == null) {
      promises.push(setLatestValidatedLedgerSequence(this, tx));
    }
    if (tx.TransactionType === 'AccountDelete') {
      promises.push(checkAccountDeleteBlockers(this, tx));
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- ignore type-assertions on the DeliverMax property
    // @ts-expect-error -- DeliverMax property exists only at the RPC level, not at the protocol level
    if (tx.TransactionType === 'Payment' && tx.DeliverMax != null) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- This is a valid null check for Amount
      if (tx.Amount == null) {
        // If only DeliverMax is provided, use it to populate the Amount field
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- ignore type-assertions on the DeliverMax property
        // @ts-expect-error -- DeliverMax property exists only at the RPC level, not at the protocol level
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- DeliverMax is a known RPC-level property
        tx.Amount = tx.DeliverMax;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- ignore type-assertions on the DeliverMax property
      // @ts-expect-error -- DeliverMax property exists only at the RPC level, not at the protocol level
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- This is a valid null check for Amount
      if (tx.Amount != null && !areAmountsEqual(tx.Amount, tx.DeliverMax)) {
        return Promise.reject(
          new ValidationError('PaymentTransaction: Amount and DeliverMax fields must be identical when both are provided'),
        );
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- ignore type-assertions on the DeliverMax property
      // @ts-expect-error -- DeliverMax property exists only at the RPC level, not at the protocol level
      delete tx.DeliverMax;
    }

    return Promise.all(promises).then(() => tx);
  }
}
