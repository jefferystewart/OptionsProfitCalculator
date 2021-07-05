import SupportedVsCurrencies from '../assets/supported_vs_currencies.json'
import {useTrending} from '../hooks/useTrending'
import {Spinner} from './Spinner'

export const Exchange = () => {
  // https://api.coingecko.com/api/v3/simple/price?ids=melon&vs_currencies=eur
  const {data, isLoading, isError} = useTrending()
  if (isLoading) return <Spinner />

  return (
    <>
      <h1>Exchange ...</h1>
      <select>
        <option value={null}>Choose a value</option>
        {SupportedVsCurrencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <select>
        <option value={null}>Choose a value</option>
        {data.coins.map(coin => (
          <option key={coin.item.id} value={coin.item.id}>{coin.item.name}</option>
        ))}
      </select>

    </>
  )
}
