import { doesNotMatch } from "assert";
import { expect } from "chai";
import fetch from "node-fetch";
import { ChainApi } from "../../src/api";

// tslint:disable-next-line:no-var-requires

describe("Chain API", () => {
  const api = new ChainApi("https://testnet.newcoin.org", "graph.nco", fetch);
});