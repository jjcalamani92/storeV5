import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import request from 'graphql-request'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={
      {
        fetcher: (query: string, variables) =>
          request(`${process.env.APIS_URL}/graphql`, query, variables),
          revalidateOnFocus: false,
      }
      }>
      <Component {...pageProps} />
     </SWRConfig>
  )
}

export default MyApp
