import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Prince Kumar';
const description =
  'A self-proclaimed developer who specializes in frontend development (React.js), from kolkata, India.';
const url = 'https://github.com/prince-63';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Frontend Developer',
    'React Developer',
  ],
  creator: 'Prince Kumar',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  // openGraph: {
  //   type: 'website',
  //   url,
  //   title,
  //   description,
  //   siteName: title,
  //   images: [
  //     {
  //       url: '/images/open-graph-sagar.png',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title,
  //   description,
  //   creator: '@shahsagarm',
  //   images: '/images/open-graph-sagar.png',
  // // },
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
