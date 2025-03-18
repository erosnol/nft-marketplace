export const FRAXTAL_CONFIG = {
  chainId: '0x5',  // This will need to be updated with the actual Fraxtal chain ID
  chainName: 'Fraxtal',
  nativeCurrency: {
    name: 'FRAX',
    symbol: 'FRAX',
    decimals: 18
  },
  rpcUrls: ['https://rpc.frax.com'],  // Placeholder - will need actual Fraxtal RPC URL
  blockExplorerUrls: ['https://explorer.frax.com']  // Placeholder - will need actual Fraxtal explorer URL
};

export const NFT_MARKETPLACE_CONFIG = {
  contractAddress: '',  // To be deployed
  supportedNFTStandards: ['ERC721', 'ERC1155'],
  ipfsGateway: 'https://ipfs.io/ipfs/',
  defaultCollectionImage: '/images/default-collection.png',
  defaultNFTImage: '/images/default-nft.png'
};

export const SUPPORTED_CHAINS = [FRAXTAL_CONFIG];
