import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransitionWrapper from '@/components/animations/PageTransitionWrapper';
import ScrollToTop from '@/components/layout/ScrollToTop';

export const metadata: Metadata = {
  title: 'Lomba.it - Platform Lomba IT Terlengkap',
  description: 'Temukan lomba IT terbaik di satu tempat. Platform terlengkap untuk kompetisi teknologi, hackathon, dan event IT.',
  keywords: 'lomba IT, kompetisi teknologi, hackathon, programming contest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden font-inter">
        <ScrollToTop />
        <Navbar />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}