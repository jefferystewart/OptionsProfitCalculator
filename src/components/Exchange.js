import { useState, useEffect } from 'react'
import SupportedVsCurrencies from '../assets/supported_vs_currencies.json'
import { useTrending } from '../hooks/useTrending'
import { ExchangeDisplay } from './ExchangeDisplay'
import { Spinner } from './Spinner'

export const Exchange = () => {
  const {data, isLoading, isError} = useTrending()
  const [coinCryptoValue, setCoinCryptoValue] = useState()
  const [coinCurrencyValue, setCoinCurrencyValue] = useState()
  const [exchangeCoins, setExchangeCoins] = useState()
  const [isDisabledExchange, setIsDisabledExchange] = useState(true)
  
  useEffect(() => {
    setIsDisabledExchange(!(coinCryptoValue && coinCurrencyValue))
  }, [coinCryptoValue, coinCurrencyValue])
  
  const handleCalcExchange = () => {
    setExchangeCoins({
      crypto: coinCryptoValue,
      currency: coinCurrencyValue
    })
  }
  
  if (isLoading) return <Spinner />
  
  return (
    <div className="exchange">
      <select 
        className="exchange__crypto"
        defaultValue=""
        onChange={(evt) => setCoinCryptoValue(evt.target.value)}
      >
        <option 
          className="exchange__crypto-option" 
          value=""
        >
          Choose a coin
        </option>
        {data.coins.map(coin => (
          <option 
            key={coin.item.id} 
            className="exchange__crypto-option" 
            value={coin.item.id}
          >
            {coin.item.name}
          </option>
        ))}
      </select>
      <select 
        className="exchange__currency"
        defaultValue=""
        onChange={(evt) => setCoinCurrencyValue(evt.target.value)}
      >
        <option 
          className="exchange__currency-option" 
          value=""
        >
          Choose a coin
        </option>
        {SupportedVsCurrencies.map(currency => (
          <option 
            key={currency} 
            className="exchange__currency-option" 
            value={currency}
          >
            {currency}
          </option>
        ))}
      </select>
      <button 
        className="exchange__button" 
        onClick={handleCalcExchange}
        disabled={isDisabledExchange}
      >
        Exchange
      </button>
      {exchangeCoins && (<ExchangeDisplay exchangeCoins={exchangeCoins}/>)}
    </div>
  )
}
