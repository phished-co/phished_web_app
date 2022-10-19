import '../styles/globals.css'
import '@tremor/react/dist/esm/tremor.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

// I don't think this is needed anymore with Mantine.

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Phished | Protect Friends & Family by Phishing Them</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}