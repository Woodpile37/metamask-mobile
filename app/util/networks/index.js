import URL from 'url-parse';
import { utils } from 'ethers';
import EthContract from 'ethjs-contract';
import { getContractFactory } from '@eth-optimism/contracts/dist/contract-defs';
import { predeploys } from '@eth-optimism/contracts/dist/predeploys';
import networksWithImages from 'images/image-icons';
import AppConstants from '../../core/AppConstants';
import {
  GOERLI,
  MAINNET,
  NETWORKS_CHAIN_ID,
  SEPOLIA,
  RPC,
  LINEA_GOERLI,
  LINEA_MAINNET,
} from '../../../app/constants/network';
import { NetworkSwitchErrorType } from '../../../app/constants/error';
import { NetworksChainId, NetworkType } from '@metamask/controller-utils';
import Engine from '../../core/Engine';
import { toLowerCaseEquals } from '../general';
import { fastSplit } from '../number';
import { buildUnserializedTransaction } from '../transactions/optimismTransaction';
import handleNetworkSwitch from './handleNetworkSwitch';
<<<<<<< HEAD
import { regex } from '../../../app/util/regex';
=======
import {
  GOERLI_TEST_NETWORK_OPTION,
  KOVAN_NETWORK_OPTION,
  RINKEBY_NETWORK_OPTION,
  ROPSTEN_NETWORK_OPTION,
} from '../../../wdio/screen-objects/testIDs/Components/NetworkListModal.TestIds';
>>>>>>> upstream/testflight/4754-permission-system

export { handleNetworkSwitch };

/* eslint-disable */
const ethLogo = require('../../images/eth-logo-new.png');
<<<<<<< HEAD
const goerliLogo = require('../../images/goerli-logo-dark.png');
const sepoliaLogo = require('../../images/sepolia-logo-dark.png');
const lineaGoerliLogo = require('../../images/linea-testnet-logo.png');
const lineaMainnetLogo = require('../../images/linea-mainnet-logo.png');

/* eslint-enable */
import PopularList from './customNetworks';
import { strings } from '../../../locales/i18n';
import {
  getEtherscanAddressUrl,
  getEtherscanBaseUrl,
  getEtherscanTransactionUrl,
} from '../etherscan';
import { LINEA_FAUCET, SEPOLIA_FAUCET } from '../../constants/urls';
=======
const ropstenLogo = require('../../images/ropsten-logo-dark.png');
const kovanLogo = require('../../images/kovan-logo-dark.png');
const rinkebyLogo = require('../../images/rinkeby-logo-dark.png');
const goerliLogo = require('../../images/goerli-logo-dark.png');
/* eslint-enable */
import PopularList from './customNetworks';
>>>>>>> upstream/testflight/4754-permission-system

/**
 * List of the supported networks
 * including name, id, and color
 *
 * This values are used in certain places like
 * navbar and the network switcher.
 */
const NetworkList = {
  [MAINNET]: {
    name: 'Ethereum Main Network',
    shortName: 'Ethereum',
    networkId: 1,
    chainId: 1,
    hexChainId: '0x1',
    color: '#3cc29e',
    networkType: 'mainnet',
    imageSource: ethLogo,
  },
<<<<<<< HEAD
  [LINEA_MAINNET]: {
    name: 'Linea Main Network',
    shortName: 'Linea',
    networkId: 59144,
    chainId: 59144,
    hexChainId: '0xe708',
    color: '#121212',
    networkType: 'linea-mainnet',
    imageSource: lineaMainnetLogo,
=======
  [ROPSTEN]: {
    name: 'Ropsten Test Network',
    shortName: 'Ropsten',
    networkId: 3,
    chainId: 3,
    hexChainId: '0x3',
    color: '#ff4a8d',
    networkType: 'ropsten',
    imageSource: ropstenLogo,
    testId: ROPSTEN_NETWORK_OPTION,
  },
  [KOVAN]: {
    name: 'Kovan Test Network',
    shortName: 'Kovan',
    networkId: 42,
    chainId: 42,
    hexChainId: '0x2a',
    color: '#7057ff',
    networkType: 'kovan',
    imageSource: kovanLogo,
    testId: KOVAN_NETWORK_OPTION,
  },
  [RINKEBY]: {
    name: 'Rinkeby Test Network',
    shortName: 'Rinkeby',
    networkId: 4,
    chainId: 4,
    hexChainId: '0x4',
    color: '#f6c343',
    networkType: 'rinkeby',
    imageSource: rinkebyLogo,
    testId: RINKEBY_NETWORK_OPTION,
>>>>>>> upstream/testflight/4754-permission-system
  },
  [GOERLI]: {
    name: 'Goerli Test Network',
    shortName: 'Goerli',
    networkId: 5,
    chainId: 5,
    hexChainId: '0x5',
    color: '#3099f2',
    networkType: 'goerli',
    imageSource: goerliLogo,
<<<<<<< HEAD
  },
  [SEPOLIA]: {
    name: 'Sepolia Test Network',
    shortName: 'Sepolia',
    networkId: 11155111,
    chainId: 11155111,
    hexChainId: '0xaa36a7',
    color: '#cfb5f0',
    networkType: 'sepolia',
    imageSource: sepoliaLogo,
  },
  [LINEA_GOERLI]: {
    name: 'Linea Goerli Test Network',
    shortName: 'Linea Goerli',
    networkId: 59140,
    chainId: 59140,
    hexChainId: '0xe704',
    color: '#61dfff',
    networkType: 'linea-goerli',
    imageSource: lineaGoerliLogo,
=======
    testId: GOERLI_TEST_NETWORK_OPTION,
>>>>>>> upstream/testflight/4754-permission-system
  },
  [RPC]: {
    name: 'Private Network',
    shortName: 'Private',
    color: '#f2f3f4',
    networkType: 'rpc',
  },
};

const NetworkListKeys = Object.keys(NetworkList);

export default NetworkList;

export const getAllNetworks = () =>
  NetworkListKeys.filter((name) => name !== RPC);

/**
 * Checks if network is default mainnet.
 *
 * @param {string} networkType - Type of network.
 * @returns If the network is default mainnet.
 */
export const isDefaultMainnet = (networkType) => networkType === MAINNET;

<<<<<<< HEAD
/**
 * Check whether the given chain ID is Ethereum Mainnet.
 *
 * @param {string} chainId - The chain ID to check.
 * @returns True if the chain ID is Ethereum Mainnet, false otherwise.
 */
export const isMainNet = (chainId) => chainId === String(1);

export const isLineaMainnet = (networkType) => networkType === LINEA_MAINNET;
=======
export const isMainNet = (network) =>
  isDefaultMainnet(network?.provider?.type) || network === String(1);
>>>>>>> upstream/testflight/4754-permission-system

export const getDecimalChainId = (chainId) => {
  if (!chainId || typeof chainId !== 'string' || !chainId.startsWith('0x')) {
    return chainId;
  }
  return parseInt(chainId, 16).toString(10);
};

export const isMainnetByChainId = (chainId) =>
  getDecimalChainId(String(chainId)) === String(1);

export const isLineaMainnetByChainId = (chainId) =>
  getDecimalChainId(String(chainId)) === String(59144);

export const isMultiLayerFeeNetwork = (chainId) =>
  chainId === NETWORKS_CHAIN_ID.OPTIMISM;

<<<<<<< HEAD
=======
export const getNetworkName = (id) =>
  NetworkListKeys.find((key) => NetworkList[key].networkId === Number(id));

>>>>>>> upstream/testflight/4754-permission-system
/**
 * Gets the test network image icon.
 *
 * @param {string} networkType - Type of network.
 * @returns - Image of test network or undefined.
 */
export const getTestNetImage = (networkType) => {
  if (
<<<<<<< HEAD
    networkType === GOERLI ||
    networkType === SEPOLIA ||
    networkType === LINEA_GOERLI
  ) {
    return networksWithImages?.[networkType.toUpperCase()];
  }
=======
    networkType === ROPSTEN ||
    networkType === GOERLI ||
    networkType === KOVAN ||
    networkType === RINKEBY
  ) {
    return networksWithImages?.[networkType.toUpperCase()];
  }
};

export const isTestNet = (networkId) => {
  const networkName = getNetworkName(networkId);

  return (
    networkName === ROPSTEN ||
    networkName === GOERLI ||
    networkName === KOVAN ||
    networkName === RINKEBY
  );
>>>>>>> upstream/testflight/4754-permission-system
};

export const getTestNetImageByChainId = (chainId) => {
  if (NETWORKS_CHAIN_ID.GOERLI === chainId) {
    return networksWithImages?.GOERLI;
  }
  if (NETWORKS_CHAIN_ID.SEPOLIA === chainId) {
    return networksWithImages?.SEPOLIA;
  }
  if (NETWORKS_CHAIN_ID.LINEA_GOERLI === chainId) {
    return networksWithImages?.['LINEA-GOERLI'];
  }
};

/**
 * A list of chain IDs for known testnets
 */
const TESTNET_CHAIN_IDS = [
  NetworksChainId[NetworkType.goerli],
  NetworksChainId[NetworkType.sepolia],
  NetworksChainId[NetworkType['linea-goerli']],
];

/**
 * A map of testnet chainId and its faucet link
 */
export const TESTNET_FAUCETS = {
  [NetworksChainId[NetworkType.sepolia]]: SEPOLIA_FAUCET,
  [NetworksChainId[NetworkType['linea-goerli']]]: LINEA_FAUCET,
};

export const isTestNetworkWithFaucet = (chainId) =>
  TESTNET_FAUCETS[chainId] !== undefined;

/**
 * Determine whether the given chain ID is for a known testnet.
 *
 * @param {string} chainId - The chain ID of the network to check
 * @returns {boolean} `true` if the given chain ID is for a known testnet, `false` otherwise
 */
export const isTestNet = (chainId) => TESTNET_CHAIN_IDS.includes(chainId);

export function getNetworkTypeById(id) {
  if (!id) {
    throw new Error(NetworkSwitchErrorType.missingNetworkId);
  }
  const filteredNetworkTypes = NetworkListKeys.filter(
    (key) => NetworkList[key].networkId === parseInt(id, 10),
  );
  if (filteredNetworkTypes.length > 0) {
    return filteredNetworkTypes[0];
  }

  throw new Error(`${NetworkSwitchErrorType.unknownNetworkId} ${id}`);
}

export function getDefaultNetworkByChainId(chainId) {
  if (!chainId) {
    throw new Error(NetworkSwitchErrorType.missingChainId);
  }

  let returnNetwork;

  getAllNetworks().forEach((type) => {
    if (toLowerCaseEquals(String(NetworkList[type].chainId), chainId)) {
      returnNetwork = NetworkList[type];
    }
  });

  return returnNetwork;
}

export function hasBlockExplorer(key) {
  return key.toLowerCase() !== RPC;
}

export function isprivateConnection(hostname) {
  return hostname === 'localhost' || regex.localNetwork.test(hostname);
}

/**
 * Returns custom block explorer for specific rpcTarget
 *
 * @param {string} rpcTargetUrl
 * @param {object} networkConfigurations
 */
export function findBlockExplorerForRpc(
  rpcTargetUrl = undefined,
  networkConfigurations,
) {
  const networkConfiguration = Object.values(networkConfigurations).find(
    ({ rpcUrl }) => compareRpcUrls(rpcUrl, rpcTargetUrl),
  );
  if (networkConfiguration) {
    return (
      networkConfiguration.rpcPrefs &&
      networkConfiguration.rpcPrefs.blockExplorerUrl
    );
  }
  return undefined;
}

/**
 * Returns a boolean indicating if both URLs have the same host
 *
 * @param {string} rpcOne
 * @param {string} rpcTwo
 */
export function compareRpcUrls(rpcOne, rpcTwo) {
  // First check that both objects are of the type string
  if (typeof rpcOne === 'string' && typeof rpcTwo === 'string') {
    const rpcUrlOne = new URL(rpcOne);
    const rpcUrlTwo = new URL(rpcTwo);
    return rpcUrlOne.host === rpcUrlTwo.host;
  }
  return false;
}

/**
 * From block explorer url, get rendereable name or undefined
 *
 * @param {string} blockExplorerUrl - block explorer url
 */
export function getBlockExplorerName(blockExplorerUrl) {
  if (!blockExplorerUrl) return undefined;
  const hostname = new URL(blockExplorerUrl).hostname;
  if (!hostname) return undefined;
  const tempBlockExplorerName = fastSplit(hostname);
  if (!tempBlockExplorerName || !tempBlockExplorerName[0]) return undefined;
  return (
    tempBlockExplorerName[0].toUpperCase() + tempBlockExplorerName.slice(1)
  );
}

/**
 * Checks whether the given number primitive chain ID is safe.
 * Because some cryptographic libraries we use expect the chain ID to be a
 * number primitive, it must not exceed a certain size.
 *
 * @param {number} chainId - The chain ID to check for safety.
 * @returns {boolean} Whether the given chain ID is safe.
 */
export function isSafeChainId(chainId) {
  return (
    Number.isSafeInteger(chainId) &&
    chainId > 0 &&
    chainId <= AppConstants.MAX_SAFE_CHAIN_ID
  );
}

/**
 * Checks whether the given value is a 0x-prefixed, non-zero, non-zero-padded,
 * hexadecimal string.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a correctly formatted hex string,
 * false otherwise.
 */
export function isPrefixedFormattedHexString(value) {
  if (typeof value !== 'string') {
    return false;
  }
  return regex.prefixedFormattedHexString.test(value);
}

export const getNetworkNonce = async ({ from }) => {
  const { TransactionController } = Engine.context;

  const { nextNonce, releaseLock } = await TransactionController.getNonceLock(
    from,
  );

  releaseLock();

  return nextNonce;
};

export function blockTagParamIndex(payload) {
  switch (payload.method) {
    // blockTag is at index 2
    case 'eth_getStorageAt':
      return 2;
    // blockTag is at index 1
    case 'eth_getBalance':
    case 'eth_getCode':
    case 'eth_getTransactionCount':
    case 'eth_call':
      return 1;
    // blockTag is at index 0
    case 'eth_getBlockByNumber':
      return 0;
    // there is no blockTag
    default:
      return undefined;
  }
}

/**
 * Gets the current network name given the network provider.
 *
<<<<<<< HEAD
 * @param {Object} providerConfig - The provider configuration for the current selected network.
 * @returns {string} Name of the network.
 */
export const getNetworkNameFromProviderConfig = (providerConfig) => {
  let name = strings('network_information.unknown_network');
  if (providerConfig.nickname) {
    name = providerConfig.nickname;
  } else {
    const networkType = providerConfig.type;
=======
 * @param {Object} provider - Network provider state from the NetworkController.
 * @returns {string} Name of the network.
 */
export const getNetworkNameFromProvider = (provider) => {
  let name = '';
  if (provider.nickname) {
    name = provider.nickname;
  } else {
    const networkType = provider.type;
>>>>>>> upstream/testflight/4754-permission-system
    name = NetworkList?.[networkType]?.name || NetworkList.rpc.name;
  }
  return name;
};

/**
 * Gets the image source given both the network type and the chain ID.
 *
 * @param {object} params - Params that contains information about the network.
 * @param {string} params.networkType - Type of network from the provider.
 * @param {string} params.chainId - ChainID of the network.
 * @returns {Object} - Image source of the network.
 */
export const getNetworkImageSource = ({ networkType, chainId }) => {
  const defaultNetwork = getDefaultNetworkByChainId(chainId);
  const isDefaultEthMainnet = isDefaultMainnet(networkType);
<<<<<<< HEAD
  const isLineaMainnetNetwork = isLineaMainnet(networkType);

  if (defaultNetwork && isDefaultEthMainnet) {
    return defaultNetwork.imageSource;
  }

  if (defaultNetwork && isLineaMainnetNetwork) {
    return defaultNetwork.imageSource;
  }

  const popularNetwork = PopularList.find(
    (networkConfig) => networkConfig.chainId === chainId,
=======
  if (defaultNetwork && isDefaultEthMainnet) {
    return defaultNetwork.imageSource;
  }
  const popularNetwork = PopularList.find(
    (network) => network.chainId === chainId,
>>>>>>> upstream/testflight/4754-permission-system
  );
  if (popularNetwork) {
    return popularNetwork.rpcPrefs.imageSource;
  }
  return getTestNetImage(networkType);
};

// The code in this file is largely drawn from https://community.optimism.io/docs/developers/l2/new-fees.html#for-frontend-and-wallet-developers
const buildOVMGasPriceOracleContract = (eth) => {
  const OVMGasPriceOracle = getContractFactory('OVM_GasPriceOracle').attach(
    predeploys.OVM_GasPriceOracle,
  );
  const abi = JSON.parse(
    OVMGasPriceOracle.interface.format(utils.FormatTypes.json),
  );
  const contract = new EthContract(eth);
  return contract(abi).at(OVMGasPriceOracle.address);
};

/**
 * It returns an estimated L1 fee for a multi layer network.
 * Currently only for the Optimism network, but can be extended to other networks.
 *
 * @param {Object} eth
 * @param {Object} txMeta
 * @returns {String}
 */
export const fetchEstimatedMultiLayerL1Fee = async (eth, txMeta) => {
  const contract = buildOVMGasPriceOracleContract(eth);
  const serializedTransaction =
    buildUnserializedTransaction(txMeta).serialize();
  const result = await contract.getL1Fee(serializedTransaction);
  return result?.[0]?.toString(16);
};

/**
 * Returns block explorer address url and title by network
 *
 * @param {string} networkType Network type
 * @param {string} address Ethereum address to be used on the link
 * @param {string} rpcBlockExplorer rpc block explorer base url
 */
export const getBlockExplorerAddressUrl = (
  networkType,
  address,
  rpcBlockExplorer = null,
) => {
  const isCustomRpcBlockExplorerNetwork = networkType === RPC;

  if (isCustomRpcBlockExplorerNetwork) {
    if (!rpcBlockExplorer) return { url: null, title: null };

    const url = `${rpcBlockExplorer}/address/${address}`;
    const title = new URL(rpcBlockExplorer).hostname;
    return { url, title };
  }

  const url = getEtherscanAddressUrl(networkType, address);
  const title = getEtherscanBaseUrl(networkType).replace('https://', '');
  return { url, title };
};

/**
 * Returns block explorer transaction url and title by network
 *
 * @param {string} networkType Network type
 * @param {string} transactionHash hash of the transaction to be used on the link
 * @param {string} rpcBlockExplorer rpc block explorer base url
 */
export const getBlockExplorerTxUrl = (
  networkType,
  transactionHash,
  rpcBlockExplorer = null,
) => {
  const isCustomRpcBlockExplorerNetwork = networkType === RPC;

  if (isCustomRpcBlockExplorerNetwork) {
    if (!rpcBlockExplorer) return { url: null, title: null };

    const url = `${rpcBlockExplorer}/tx/${transactionHash}`;
    const title = new URL(rpcBlockExplorer).hostname;
    return { url, title };
  }

  const url = getEtherscanTransactionUrl(networkType, transactionHash);
  const title = getEtherscanBaseUrl(networkType).replace('https://', '');
  return { url, title };
};

/**
 * Returns if the chainId network provided is already onboarded or not
 * @param {string} chainId - network chain Id
 * @param {obj} networkOnboardedState - Object with onboarded networks
 * @returns
 */
export const getIsNetworkOnboarded = (chainId, networkOnboardedState) =>
  networkOnboardedState[chainId];
