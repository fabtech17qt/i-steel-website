import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/motion/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

/* Montserrat — wide geometric caps for the light/bold mixed headlines */
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://i-steelgroup.com'),
  title: {
    default: 'iSteel Engineering Trading & Contracting W.L.L | Doha, Qatar',
    template: '%s | iSteel Engineering',
  },
  description:
    'Qatar\'s integrated structural steel and turnkey construction specialist. 5+ years of service, 52+ projects delivered. ISO 9001, ISO 45001, ICV certified.',
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
      'We build the bones of every building. Structural steel and turnkey construction in Qatar. 5+ years. 52+ projects.',
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
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
