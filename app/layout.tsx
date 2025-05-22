import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/organisms/Navbar';
import clsx from 'clsx';
import Footer from '@/components/organisms/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portugal para Imigrantes',
  description:
    'Central de links úteis, serviços e informações para imigrantes em Portugal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          'bg-gray-50 text-gray-900 antialiased'
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
