import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: '24K',
    stakingTokenName: QuoteToken.x24k,
    stakingTokenAddress: '0x53a16A336fda001d5560348466C8773e0B18c1c7',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xe4238DA8873DeB16107e70661Cb61B55492B1103',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://24kswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
