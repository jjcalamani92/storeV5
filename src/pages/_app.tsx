import '../styles/globals.css'
// import '../styles/antd.minify.css'

import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import request from 'graphql-request'
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ConfigProvider.config({
  theme: {
    primaryColor: '#db2777',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }))
  return (
    // <QueryClientProvider client={queryClient}>
    // </QueryClientProvider>
    <QueryClientProvider client={queryClient}>

      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
