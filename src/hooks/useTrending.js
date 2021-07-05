import useSWR from "swr"

export const useTrending = () => {
  const endPointAPI = 'https://api.coingecko.com/api/v3/search/trending'

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const options = {revalidateOnFocus: false}
  const {data, error} = useSWR(endPointAPI, fetcher, options)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
