import useSWR from 'swr'
import { Spinner } from './Spinner'

export const TrendingDisplay = ({endPointAPI}) => {
  const { data, error } = useSWR(endPointAPI)
  
  if (error) return <div>Failed to load</div>
  if (!data) return <Spinner />
  
  const coins = data.coins.filter((coin, idx) => idx < 6)
  
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {coins.map(({item}) => (
          <div key={item.coin_id} className="col">
            <div className="card h-100 bg-info">
              <img src={item.large} className="card-img-top" style={{filter: 'grayscale(100%)'}} alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">The price is {item.price_btc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
