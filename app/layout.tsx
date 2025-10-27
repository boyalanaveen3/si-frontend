import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../styles/globals.css';
import { ReactNode } from 'react';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  // metadataBase: new URL('https://sriadds.com'),
  title: {
    default: 'NP Hub',
    template: '%s | NP Hub'
  },
  description:
    'NP Hub is a digital marketing and web design consultancy delivering growth-focused solutions with modern experiences.',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'NP Hub',
    description:
      'Digital marketing and web design consultancy with modern, conversion-driven experiences.',
    url: 'https://sriadds.com',
    siteName: 'NP Hub',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nphub',
    creator: '@nphub'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
