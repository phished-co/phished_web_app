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
              "#E8FBFF",
              "#B5E6FF",
              "#9ED8FF",
              "#88C9FE",
              "#71BAFE",
              "#5AABFE",
              "#449CFE",
              "#2D8EFD",
              "#177FFD",
              "#0070FD"
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