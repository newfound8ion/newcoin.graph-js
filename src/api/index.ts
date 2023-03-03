import {
  GetCurrencyStats,
  GetCurrencyBalance,
  GetTableRowsPayload,
  CollectionPayload
} from "../interfaces";

export class ChainApi {
  readonly nodeosUrl: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeosUrl: string, contract: string, fetch: any) {
    this.nodeosUrl = nodeosUrl;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getCurrencyStats(payload: GetCurrencyStats): Promise<any> {
    return await this.fetch(`${this.nodeosUrl}/v1/chain/get_currency_stats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getCurrencyBalance(payload: GetCurrencyBalance): Promise<any> {
    return await this.fetch(`${this.nodeosUrl}/v1/chain/get_currency_balance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeosUrl}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getCollection(opts: CollectionPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "collections",
      table_key: opts.collection,
      lower_bound: opts.collection,
      upper_bound: opts.collection,
      key_type: "i64",
      index_position: "1",
    });
  }
}
