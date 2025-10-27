import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://seudominio.com'),
  title: {
    default: 'pedro3pv\'s projects',
    template: '%s | pedro3pv',
  },
  description: 'Portfólio de desenvolvimento full-stack',
  keywords: ['nextjs', 'react', 'typescript', 'portfolio'],
  authors: [{ name: 'pedro', url: 'https://pedro3pv.xyz' }],
  creator: 'pedro',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pedro3pv.xyz',
    siteName: 'pedro3pv',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@pedro3pv',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
