import useSWR from 'swr'
import { Spinner } from './Spinner'

export const TrendingDisplay = ({endPointAPI}) => {
  const { data, error } = useSWR(endPointAPI)
  
  if (error) return <div>Failed to load</div>
  if (!data) return <Spinner />
  
  const coins = data.coins.filter((coin, idx) => idx < 6)
  
  return (
    <div className="card-group">
    {coins.map(({item}) => (
      <div key={item.coin_id} className="card">
        <div className="card__header">
          <img src={item.small} className="card__image" alt={item.name} />
          <h1 className="card__title">{item.name}</h1>
        </div>
        <ul className="card__items">
          <li className="card__item"><b>Symbol:</b> {item.symbol}</li>
          <li className="card__item"><b>Price BTC:</b> {item.price_btc}</li>
          <li className="card__item"><b>Score:</b> {item.score}</li>
        </ul>
      </div>
    ))}
    </div>
  )
}
