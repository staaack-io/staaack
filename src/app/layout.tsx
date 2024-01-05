import './globals.scss'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'staaack',
    description: 'It builder',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
            {/*<script src="https://cdn.lordicon.com/lordicon.js"></script>*/}
            <link rel="manifest" href="/site.webmanifest"></link>
            <title>Welcome to staaack</title>
        </head>
        <body className={inter.className + " debug-screens"}>{children}</body>
        </html>
    )
}
