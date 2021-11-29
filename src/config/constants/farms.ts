import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'CBC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0a709e01df27ac8aa0e3d32d3577d233ca845c26',
    },
    tokenSymbol: 'CBC',
    tokenAddresses: {
      97: '',
      56: '0x8bbcdab057289c9d84d7f36ef45b70276238797a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
