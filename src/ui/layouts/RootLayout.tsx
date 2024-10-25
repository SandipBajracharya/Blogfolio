import * as React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/ui/component/Navbar';
import Footer from '@/ui/component/Footer';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Rootlayout - Sandeep Bajracharya',
  description:
    'Blogfolio by (Sandeep Bajracharya) is a blog about coding, sharing knowledge, and learning new things.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <div className="dark:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </NextThemesProvider>
  );
}
