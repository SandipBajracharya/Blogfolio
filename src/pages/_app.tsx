import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../../public/globals.css';
import Head from 'next/head';
import { SessionProvider, useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Blogfolio - Sandeep Bajracharya</title>
          <meta
            name="description"
            content="Blogfolio by (Sandeep Bajracharya) is a blog about coding, sharing knowledge, and learning new things."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {Component.auth ? (
          <Auth>{getLayout(<Component {...pageProps} className="font-sans" />)}</Auth>
        ) : (
          getLayout(<Component {...pageProps} className="font-sans" />)
        )}
        <ToastContainer autoClose={5000} position="bottom-right" />
      </SessionProvider>
    </>
  );
}

function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}
