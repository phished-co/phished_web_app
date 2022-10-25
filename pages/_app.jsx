import '../styles/globals.css'
import Head from 'next/head';
import { useState } from "react";
import '@tremor/react/dist/esm/tremor.css';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';

// Our imports
import { FooterSimple } from "../components/mantine/footer/Footer"
import { HeaderResponsive } from "../components/mantine/header/Header.tsx"
import { links } from "../data/fake_data"

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState('light')

  function toggleColorScheme(value) {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  }

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
          colors: {
            'blue': [
              "#F7FAFE",
              "#CFE1F8",
              "#A8CBF6",
              "#82B5F6",
              "#5DA2F9",
              "#3890FF",
              "#2180F7",
              "#1171EB",
              "#1667CD",
              "#1A5DB2",
              "#1C549C",
              "#1D4C88"
            ]
          }, colorScheme
        }}>
          <Head>
            <title>Phished | Protect Friends & Family by Phishing Them</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <HeaderResponsive links={links} />
          <Component {...pageProps} />
          <FooterSimple />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}