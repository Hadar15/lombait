import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransitionWrapper from '@/components/animations/PageTransitionWrapper';
import ScrollToTop from '@/components/layout/ScrollToTop';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

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
    <html lang="id" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
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