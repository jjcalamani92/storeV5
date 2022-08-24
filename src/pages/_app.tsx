import '../styles/globals.css'
// import '../styles/antd.minify.css'

import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import request from 'graphql-request'
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#db2777',
  },
});

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
