import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Smart Growth - Digital Marketing Solutions',
  description: 'Transform your business with expert digital marketing services. Social media, email marketing, SEO, and creative design tailored for education.',
  keywords: 'digital marketing, educational marketing, social media marketing, email marketing, SEO, school marketing',
  openGraph: {
    title: 'Smart Growth - Digital Marketing Solutions',
    description: 'Expert digital marketing services designed specifically for schools and educational institutes.',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.app'
}

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
