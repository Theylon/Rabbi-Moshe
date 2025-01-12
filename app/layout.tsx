import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rabbi Moshe - AI Rabbi for the Digital Age',
  description: 'Explore ancient wisdom through modern tech with Rabbi Moshe, your AI Rabbi blending tradition with innovation.',
  openGraph: {
    title: 'Rabbi Moshe - AI Rabbi for the Digital Age',
    description: 'Explore ancient wisdom through modern tech with Rabbi Moshe, your AI Rabbi blending tradition with innovation.',
    url: 'https://rabbimoshe.ai',
    siteName: 'Rabbi Moshe',
    images: [
      {
        url: 'https://rabbimoshe.ai/opengraph-image.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabbi Moshe - AI Rabbi for the Digital Age',
    description: 'Explore ancient wisdom through modern tech with Rabbi Moshe, your AI Rabbi blending tradition with innovation.',
    images: ['https://rabbimoshe.ai/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

