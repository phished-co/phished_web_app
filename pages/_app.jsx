import '../styles/globals.css'
import '@tremor/react/dist/esm/tremor.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export function App(props) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'light',
    }}
  >
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
        <Component {...pageProps} />
      </MantineProvider>
  );
}