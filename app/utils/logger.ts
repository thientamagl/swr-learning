export function logger(useSWRNext: any) {
  return (key: any, fetcher: any, config: any) => {
    function extendedFetcher(...args: any[]) {
      console.log("SWR Request: ", key)
      return fetcher(...args)
    }
    return useSWRNext(key, extendedFetcher, config)
  }
}
