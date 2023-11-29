import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextUIProvider from '@/providers/nextui-provider';
import { Providers } from '@/providers/providers';
import NavbarComponent from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rick and Morty App',
  description:
    'Rick and Morty App built with Next.js and NextUI using Rick and Morty API',
  keywords: ['nextjs', 'nextui', 'rick and morty', 'api'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <NavbarComponent />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
