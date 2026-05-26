import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import SmoothScrollProvider from '@/components/motion/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

/* Using Inter Tight as heading font — close to the Satoshi/General Sans aesthetic */
const interTight = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://i-steelgroup.com'),
  title: {
    default: 'iSteel Engineering Trading & Contracting W.L.L | Doha, Qatar',
    template: '%s | iSteel Engineering',
  },
  description:
    'Structural steel design, fabrication, and turnkey civil & MEP projects across Qatar. ISO certified. Serving industrial, commercial, and oil & gas sectors since 2013.',
  keywords: [
    'structural steel Qatar',
    'steel fabrication Doha',
    'MEP contracting Qatar',
    'civil construction Qatar',
    'oil gas steel Qatar',
    'iSteel Engineering',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://i-steelgroup.com',
    siteName: 'iSteel Engineering Trading & Contracting',
    title: 'iSteel Engineering Trading & Contracting W.L.L',
    description:
      'Engineered steel. Delivered turnkey. Structural steel and civil construction in Qatar since 2013.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iSteel Engineering Trading & Contracting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iSteel Engineering Trading & Contracting',
    description: 'Engineered steel. Delivered turnkey.',
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
