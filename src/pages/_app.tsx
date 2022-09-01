import '../styles/globals.css'
// import '../styles/antd.minify.css'

import type { AppProps, NextWebVitalsMetric } from 'next/app'
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getSession, SessionProvider } from "next-auth/react"
import { AuthProvider } from '../context';
import { GetServerSideProps } from 'next';

ConfigProvider.config({
  theme: {
    primaryColor: '#db2777',
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }))
  return (
    // <SessionProvider session={session}>

      // <AuthProvider>
        <QueryClientProvider client={queryClient}>

          <Hydrate state={pageProps.dehydratedState}>

            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      // </AuthProvider>
    // </SessionProvider>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    // console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const session = await getSession(context)
//     console.log(session);
    
//     return {
//       props: {
//         session
//       }
//     }
//   }

export default MyApp
