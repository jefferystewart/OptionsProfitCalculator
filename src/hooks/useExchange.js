import useSWR from "swr"

export const useExchange = ({crypto, currency}) => {
  const endPointAPI = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const options = {revalidateOnFocus: false}
  const {data, error} = useSWR(endPointAPI, fetcher, options)

  return {
    exchangeResult: data,
    isLoading: !error && !data,
    isError: error
  }
}
