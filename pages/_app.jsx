import '../styles/globals.css'
import '@tremor/react/dist/esm/tremor.css';
import Head from 'next/head';
import { ColorSchemeProvider, ColorScheme, MantineProvider } from '@mantine/core';
import { useState } from "react";

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState('dark')

  function toggleColorScheme(value) {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <Head>
            <title>Phished | Protect Friends & Family by Phishing Them</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>

          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}