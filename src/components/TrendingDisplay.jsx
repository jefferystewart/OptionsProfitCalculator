import useSWR from 'swr'
import { Spinner } from './Spinner'

export const TrendingDisplay = ({endPointAPI}) => {
  const { data, error } = useSWR(endPointAPI)
  
  if (error) return <div>Failed to load</div>
  if (!data) return <Spinner />
  
  const coins = data.coins.filter((coin, idx) => idx < 6)
  
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {coins.map(({item}) => (
          <div key={item.coin_id} className="col">
            <div 
              className="card h-100 border border-2 border-white rounded-3 bg-transparent fw-bolder"
            >
              <div class="card-header">
                <img 
                    src={item.thumb} 
                    className="d-inline-block align-text-top" 
                    width="24" 
                    height="24" 
                    alt={item.name} 
                  />
                  {' '}
                  {item.name}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent text-white">Symbol: {item.symbol}</li>
                <li class="list-group-item bg-transparent text-white">Price BTC: {item.price_btc}</li>
                <li class="list-group-item bg-transparent text-white">Score: {item.score}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
