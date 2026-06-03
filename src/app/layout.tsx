import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const outfit = localFont({
  src: [
    { path: '../../public/brand/fonts/Outfit-VariableFont_wght.ttf', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-outfit',
  display: 'swap',
})

const instrumentSerif = localFont({
  src: [
    { path: '../../public/brand/fonts/InstrumentSerif-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/brand/fonts/InstrumentSerif-Italic.otf', weight: '400', style: 'italic' },
  ],
  variable: '--font-instrument',
  display: 'swap',
})

const bandit = localFont({
  src: '../../public/brand/fonts/Bandit-Regular.otf',
  variable: '--font-bandit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Downtone HQ',
  description: 'Vision, Operating Principles & Institutional Thesis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${instrumentSerif.variable} ${bandit.variable}`}>
        {children}
      </body>
    </html>
  )
}
