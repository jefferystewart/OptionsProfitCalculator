import { SWRConfig } from 'swr'
import { TrendingDisplay } from './TrendingDisplay'

export const Trending = () => {
  const endPointAPI = 'https://api.coingecko.com/api/v3/search/trending'
  
  return (
    <SWRConfig 
      value={{
        revalidateOnFocus: false,
        fetcher: (...args) => fetch(...args).then(res => res.json())
      }}
    >
      <TrendingDisplay endPointAPI={endPointAPI} />
    </SWRConfig>
  )
}
