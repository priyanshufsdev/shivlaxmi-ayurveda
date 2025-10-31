import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shivlaxmi Ayurveda - Pure & Natural Ayurvedic Products',
  description: 'Experience the ancient wisdom of Ayurveda with Shivlaxmi Ayurveda. Pure, natural, and authentic ayurvedic products for holistic wellness.',
  keywords: 'ayurveda, natural products, herbal remedies, wellness, holistic health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}

