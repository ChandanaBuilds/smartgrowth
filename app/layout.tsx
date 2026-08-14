import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Hyderabad | Smart Growth',
  description:
    'Smart Growth is a digital marketing agency in Hyderabad offering SEO, social media marketing, WhatsApp marketing, email marketing, web development and creative design.',
  metadataBase: new URL('https://www.smart-growth.co.in'),
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
        <Analytics />
      </body>
    </html>
  );
}