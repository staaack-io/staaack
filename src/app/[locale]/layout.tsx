import './globals.scss';
import { Inter } from 'next/font/google';
import React from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '../../../navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
                                     children,
                                     params: { locale },
                                   }: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  if (!locales.includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <title>Welcome to staaack</title>
    </head>
    <body className={inter.className + ' font-sans'}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
