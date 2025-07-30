'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Lomba', href: '/competitions' },
  { name: 'Event', href: '/events' },
  { name: 'Tentang', href: '/about' },
  { name: 'Kontak', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-none px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 md:space-x-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 md:p-3 lg:p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl"
            >
              <Zap className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-black" />
            </motion.div>
            <span className="text-xl md:text-2xl lg:text-3xl font-montserrat font-black gradient-text">
              lomba.it
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 lg:ml-14 flex items-baseline space-x-6 lg:space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-base md:text-lg lg:text-xl font-semibold transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/70 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-glow bg-cyan-400 text-black hover:bg-cyan-300 font-semibold px-6 md:px-8 lg:px-12 py-3 md:py-4 text-base md:text-lg lg:text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Dashboard
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800"
          >
            <div className="px-4 sm:px-6 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-3 text-base sm:text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <Button className="btn-glow bg-cyan-400 text-black hover:bg-cyan-300 font-semibold w-full px-6 py-3 text-base rounded-lg transition-all duration-300 transform hover:scale-105">
                  Dashboard
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}