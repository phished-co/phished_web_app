import '../styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import '@tremor/react/dist/esm/tremor.css';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';


// Our imports
import { FooterSimple } from '../components/mantine/footer/Footer';
import { HeaderResponsive } from '../components/mantine/header/Header.tsx';
import { links } from '../data/fake_data';
import NextNProgress from '../components/LoadingBar/LoadingBar';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [colorScheme, setColorScheme] = useState('light');

  function toggleColorScheme(value) {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  }

  return (
    <>
      <SessionProvider session={session}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colors: {
                blue: [
                  '#E8FBFF',
                  '#B5E6FF',
                  '#9ED8FF',
                  '#88C9FE',
                  '#71BAFE',
                  '#5AABFE',
                  '#449CFE',
                  '#2D8EFD',
                  '#177FFD',
                  '#0070FD',
                ],
              },
              colorScheme,
            }}
          >
            <NotificationsProvider>
            <Head>
              <title>Phished | Protect Friends & Family by Phishing Them</title>
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
              />
            </Head>
            <HeaderResponsive links={links} />
            <NextNProgress />
            <Component {...pageProps} />
            <FooterSimple />
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </SessionProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
