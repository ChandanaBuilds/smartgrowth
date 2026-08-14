import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import FloatingContact from '@/components/FloatingContact';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Hyderabad | Smart Growth',
  description:
    'Smart Growth is a digital marketing agency in Hyderabad offering SEO, social media marketing, WhatsApp marketing, email marketing, web development and creative design.',
  metadataBase: new URL('https://www.smart-growth.co.in'),

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingContact />

        <Analytics />
      </body>
    </html>
  );
}