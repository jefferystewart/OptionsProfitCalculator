import useSWR from 'swr'
import { Spinner } from './Spinner'

export const TrendingDisplay = ({endPointAPI}) => {
  const { data, error } = useSWR(endPointAPI)
  
  if (error) return <div>Failed to load</div>
  if (!data) return <Spinner />
  
  const coins = data.coins.filter((coin, idx) => idx < 6)
  
  return (
    <h1>TrendingDisplay ...</h1>
  )
}
