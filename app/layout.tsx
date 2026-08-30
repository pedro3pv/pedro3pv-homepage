import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pedro3pv.fun'),
  title: {
    default: 'pedro3pv — full-stack & devops',
    template: '%s | pedro3pv',
  },
  description: 'Portfólio de desenvolvimento full-stack',
  keywords: ['nextjs', 'react', 'typescript', 'portfolio'],
  authors: [{ name: 'pedro', url: 'https://pedro3pv.fun' }],
  creator: 'pedro',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pedro3pv.fun',
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
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
