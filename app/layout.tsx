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
  title: {
    default: 'SuccessInsight',
    template: '%s | SuccessInsight'
  },
  description:
    'SuccessInsight is a digital marketing and web design consultancy delivering growth-focused solutions with modern experiences.',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'SuccessInsight',
    description:
      'Digital marketing and web design consultancy with modern, conversion-driven experiences.',
    url: 'https://successinsight.com',
    siteName: 'SuccessInsight',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@successinsight',
    creator: '@successinsight'
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
