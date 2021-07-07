import SupportedVsCurrencies from '../assets/supported_vs_currencies.json'
import { useTrending } from '../hooks/useTrending'
import { Spinner } from './Spinner'

export const Exchange = () => {
  // https://api.coingecko.com/api/v3/simple/price?ids=melon&vs_currencies=eur
  const {data, isLoading, isError} = useTrending()
  if (isLoading) return <Spinner />

  return (
    <div className="exchange">
      <select className="exchange__crypto">
        <option className="exchange__crypto-option" value={null}>Choose a value</option>
        {data.coins.map(coin => (
          <option key={coin.item.id} className="exchange__crypto-option" value={coin.item.id}>{coin.item.name}</option>
        ))}
      </select>
      <select className="exchange__currency">
        <option className="exchange__currency-option" value={null}>Choose a value</option>
        {SupportedVsCurrencies.map(currency => (
          <option key={currency} className="exchange__currency-option" value={currency}>{currency}</option>
        ))}
      </select>
      <label>Lol</label>
      <button className="exchange__button" ></button>
    </div>
  )
}
