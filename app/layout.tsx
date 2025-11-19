import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { UnifrakturCook, Momo_Trust_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const inter = localFont({
  src: [
    {
      path: './fonts/InterDisplay-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

const interDisplay = localFont({
  src: [
    {
      path: './fonts/InterDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter-display',
  display: 'swap',
})

const unifrakturCook = UnifrakturCook({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-unifraktur',
  display: 'swap',
})

const momoTrustDisplay = Momo_Trust_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-momo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clarent - Web & Software Development',
  description: 'Premium software development at rapid speed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} ${unifrakturCook.variable} ${momoTrustDisplay.variable}`}>
      <body className={`${inter.className} cursor-none`}>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
