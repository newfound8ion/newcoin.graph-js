export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly token_contract: string) {}

  async addCollection(
    authorization: EosioAuthorizationObject[],
    collection: string,
    token: string,
    isRepeatable: boolean
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addcol", {
        collection,
        token,
        isRepeatable
    });
  }

  async removeCollection(
    authorization: EosioAuthorizationObject[],
    collection: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvcol", {
        collection
    });
  }

  async open(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string,
    ram_payer: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "open", {
      owner,
      symbol,
      ram_payer,
    });
  }

  async close(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "close", {
      owner,
      symbol,
    });
  }

  async create(
    authorization: EosioAuthorizationObject[],
    issuer: string,
    maximum_supply: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "create", {
      issuer,
      maximum_supply,
    });
  }

  async issue(
    authorization: EosioAuthorizationObject[],
    to: string,
    quantity: string,
    memo: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "issue", {
      to,
      quantity,
      memo,
    });
  }

  async retire(
    authorization: EosioAuthorizationObject[],
    from: string,
    quantity: string,
    memo: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "retire", {
      from,
      quantity,
      memo,
    });
  }

  async createNewTemplate(
    authorization: EosioAuthorizationObject[],
    requestor: string,
    collection: string,
    schema_name: string,
    max_supply: number,
    immutable_data: any
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtnewtempl", {
        requestor,
        collection,
        schema_name,
        max_supply,
        immutable_data
    });
  }

  async mintNewAsset(
    authorization: EosioAuthorizationObject[],
    requestor: string,
    collection: string,
    schema_name: string,
    template_id: number,
    immutable_data: any,
    mutable_data: any
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "mintnewasset", {
        requestor,
        collection,
        schema_name,
        template_id,
        immutable_data,
        mutable_data
    });
  }
  
  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}