import '../styles/globals.css'
import '@tremor/react/dist/esm/tremor.css';
import Head from 'next/head';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from "react";
import { getCookie, setCookie } from 'cookies-next';
import { links } from "../components/chart/fake_data"
import { HeaderResponsive } from "../components/mantine/header/Header.tsx"

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState('light')

  function toggleColorScheme(value) {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  }

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <Head>
            <title>Phished | Protect Friends & Family by Phishing Them</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <HeaderResponsive links={links} />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

// Saving color scheme in cookie?
// I don't even this this works
// Warning: "next should not be imported directly" 
// known issue add this to .eslintrc.json
//"rules": {
//"@next/next/no-document-import-in-page": "off"
//}

App.getInitialProps = ({ ctx }) => ({
  // get color scheme from cookie
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});