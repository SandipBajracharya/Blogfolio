import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../../public/globals.css';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <Head>
        <title>Blogfolio - Sandeep Bajracharya</title>
        <meta
          name="description"
          content="Blogfolio by (Sandeep Bajracharya) is a blog about coding, sharing knowledge, and learning new things."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} className="font-sans" />)}
    </>
  );
}
