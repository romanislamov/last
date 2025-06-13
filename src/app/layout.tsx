import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "CyberMoon Games - Discover Our Collection",
  description: "Explore our collection of unique and engaging games. From puzzle adventures to action-packed experiences, find your next favorite game.",
  keywords: "indie games, game development, gaming studio, CyberMoon, game developers, puzzle games, adventure games, mobile games, PC games",
  authors: [{ name: "CyberMoon Games" }],
  robots: "index, follow",
  openGraph: {
    title: "CyberMoon Games - Discover Our Collection",
    description: "Explore our collection of unique and engaging games. From puzzle adventures to action-packed experiences, find your next favorite game.",
    images: [
      {
        url: '/game3.png',
        width: 1200,
        height: 630,
        alt: 'CyberMoon Games Collection',
      },
    ],
    siteName: 'CyberMoon Games',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberMoon Games - Discover Our Collection',
    description: 'Explore our collection of unique and engaging games.',
    images: ['/game3.png'],
  },
  metadataBase: new URL('https://cybermoon.site'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}