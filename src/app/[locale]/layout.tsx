import {getDirection, getIntl} from "../../lib/intl";
import './globals.scss'
import {Metadata, ResolvingMetadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";

const inter = Inter({subsets: ['latin']})

type RouteProps = {
    params: { locale: string };
};

export async function generateMetadata(
    props: RouteProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const intl = await getIntl(props.params.locale);

    return {
        title: intl.formatMessage({id: "page.home.head.title"}),
        description: intl.formatMessage({
            id: "page.home.head.meta.description",
        }),
        alternates: {
            canonical: "https://example.com",
            languages: {
                ar: "http://example.com/ar",
                en: "http://example.com",
                fr: "http://example.com/fr",
                "nl-NL": "http://example.com/nl-NL",
                "x-default": "http://example.com",
            },
        },
    };
}

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;

  const dir = getDirection(locale);

  return (
      <html lang={locale} dir={dir}>
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <title>Welcome to staaack</title>
      </head>
      <body className={inter.className + " debug-screens font-sans"}>{children}</body>
      </html>
  );
}