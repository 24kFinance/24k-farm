import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: '24K-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0a709e01df27ac8aa0e3d32d3577d233ca845c26',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0x8bbcdab057289c9d84d7f36ef45b70276238797a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'V2 24K-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6419e05d103f8a9943ff502317fdf50aa4687e4f',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0x8bbcdab057289c9d84d7f36ef45b70276238797a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'v2 BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'v2 24K-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x3a66dda40e168a67410ad1b034feeb0a8742071b',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0x8bbcdab057289c9d84d7f36ef45b70276238797a',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'V1 24K-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2426f93dd561901e868d224338d91fca8c9b7330',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0x8bbcdab057289c9d84d7f36ef45b70276238797a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
