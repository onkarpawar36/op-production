import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://opproductions.studio'),
  title: 'OP Productions | Cinematic Video Editing Agency',
  description: 'Cinematic Video Editing For Creators, Brands & Businesses. Premium video editing, motion graphics, wedding films and commercial production.',
  openGraph: {
    title: 'OP Productions',
    description: 'Premium video editing and content production for global brands and creators.',
    url: 'https://opproductions.studio',
    siteName: 'OP Productions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OP Productions',
    description: 'Cinematic Video Editing For Creators, Brands & Businesses',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
