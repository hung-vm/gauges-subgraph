import { Address, BigInt, dataSource } from "@graphprotocol/graph-ts";

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);
export const ZERO_BD = ZERO.toBigDecimal();
export const ONE_BD = ZERO.toBigDecimal();

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export class AddressByNetwork {
  public mainnet: string;
  public goerli: string;
  public defiverse: string;
}

let network: string = dataSource.network();

let controllerAddressByNetwork: AddressByNetwork = {
  mainnet: "0x782896795C815d833D1d25C9cAf418AeE57Aa011",
  goerli: "0xBB1CE49b16d55A1f2c6e88102f32144C7334B116",
  defiverse: "0x782896795C815d833D1d25C9cAf418AeE57Aa011",
};

function forNetwork(
  addressByNetwork: AddressByNetwork,
  network: string,
): Address {
  if (network == "mainnet") {
    return Address.fromString(addressByNetwork.mainnet);
  }
  if (network == "defiverse") {
    return Address.fromString(addressByNetwork.defiverse);
  }
  return Address.fromString(addressByNetwork.goerli);
}

export const CONTROLLER_ADDRESS = forNetwork(
  controllerAddressByNetwork,
  network,
);
export const VAULT_ADDRESS = Address.fromString(
  "0xef570b45a20e9bDe7855BDF5940Be3ac17B4c610",
);

export const ARBITRUM_ROOT_GAUGE_FACTORY = Address.fromString(
  "0xad901309d9e9DbC5Df19c84f729f429F0189a633",
);
export const OPTIMISM_ROOT_GAUGE_FACTORY = Address.fromString(
  "0x3083A1C455ff38d39e58Dbac5040f465cF73C5c8",
);
export const POLYGON_ROOT_GAUGE_FACTORY = Address.fromString(
  "0x4C4287b07d293E361281bCeEe8715c8CDeB64E34",
);

export const MAINNET_GAUGE_V2_FACTORY = Address.fromString(
  "0x8f008aF430d589D9f5F09d5c7f38F45E2EdAb4a9",
);
export const ARBITRUM_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  "0x1c99324EDC771c82A0DCCB780CC7DDA0045E50e7",
);
export const GNOSIS_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  "0x2a18B396829bc29F66a1E59fAdd7a0269A6605E8",
);
export const OPTIMISM_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  "0x866D4B65694c66fbFD15Dd6fa933D0A6b3940A36",
);
export const POLYGON_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  "0xa98Bce70c92aD2ef3288dbcd659bC0d6b62f8F13",
);

export function isArbitrumFactory(factory: Address): boolean {
  return [ARBITRUM_ROOT_GAUGE_FACTORY, ARBITRUM_ROOT_GAUGE_V2_FACTORY].includes(
    factory,
  );
}

export function isOptimismFactory(factory: Address): boolean {
  return [OPTIMISM_ROOT_GAUGE_FACTORY, OPTIMISM_ROOT_GAUGE_V2_FACTORY].includes(
    factory,
  );
}

export function isPolygonFactory(factory: Address): boolean {
  return [POLYGON_ROOT_GAUGE_FACTORY, POLYGON_ROOT_GAUGE_V2_FACTORY].includes(
    factory,
  );
}

export function isGnosisFactory(factory: Address): boolean {
  return factory == GNOSIS_ROOT_GAUGE_V2_FACTORY;
}
