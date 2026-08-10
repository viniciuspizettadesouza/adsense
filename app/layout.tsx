import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { getSiteUrl, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-stone-950 antialiased dark:bg-stone-950 dark:text-stone-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 pt-8 sm:pt-12">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
