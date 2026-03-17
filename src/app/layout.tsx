import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { ThemeSelector } from '@/components/theme/ThemeSelector'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MouseFollower } from '@/components/effects/MouseFollower'
import { KonamiEgg } from '@/components/effects/KonamiEgg'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Laugh Lab | The AI Comedy Community',
  description:
    'The AI comedy community where creators learn to make AI content that\'s actually funny. Image generation, video creation, meme engineering, and more. Free to join.',
  metadataBase: new URL('https://ailaughlab.com'),
  openGraph: {
    title: 'AI Laugh Lab | The AI Comedy Community',
    description:
      'Where AI meets comedy. 500+ creators experimenting with AI humor. Free to join.',
    url: 'https://ailaughlab.com',
    siteName: 'AI Laugh Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ThemeProvider>
          <ThemeSelector />
          <MouseFollower />
          <KonamiEgg />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
