import * as React from 'react';
import type { Metadata } from 'next';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import SimpleNavbar from '../component/SimpleNavbar';

export const metadata: Metadata = {
  title: 'Blogfolio - Sandeep Bajracharya',
  description:
    'Blogfolio by (Sandeep Bajracharya) is a blog about coding, sharing knowledge, and learning new things.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <div className="dark:text-white text-dark-grey dark:bg-black">
        <SimpleNavbar />
        <main className="bg-fade-grey dark:bg-transparent">{children}</main>
      </div>
    </NextThemesProvider>
  );
}
