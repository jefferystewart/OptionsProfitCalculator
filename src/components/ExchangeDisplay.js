import { useExchange } from '../hooks/useExchange'
import { Spinner } from './Spinner'

export const ExchangeDisplay = ({exchangeCoins}) => {
  
  const {crypto, currency} = exchangeCoins
  const {exchangeResult, isLoading, isError} = useExchange(exchangeCoins)
    
  if (isLoading) return <Spinner />
  if (isError) return <div>Failed to load</div>

  return <input 
    type="text"
    className="exchange__result" 
    value={`${exchangeResult[crypto][currency]} ${currency}`}
    readOnly
    />    
}
