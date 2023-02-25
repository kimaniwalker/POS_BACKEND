import { GlobalStyle } from '@/styles/layout'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <GlobalStyle />
    <UserProvider>
    <Component {...pageProps} />
    </UserProvider>
  </>)

}
