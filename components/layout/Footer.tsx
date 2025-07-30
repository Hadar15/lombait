'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone, Zap } from 'lucide-react';

const footerLinks = {
  platform: [
    { name: 'Lomba IT', href: '/competitions' },
    { name: 'Event Tech', href: '/events' },
    { name: 'Bootcamp', href: '/bootcamp' },
    { name: 'Workshop', href: '/workshop' },
  ],
  company: [
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Tim', href: '/team' },
    { name: 'Karir', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Bantuan', href: '/help' },
    { name: 'Kontak', href: '/contact' },
    { name: 'Status', href: '/status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Email', href: 'mailto:hello@lomba.it', icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Infinite Marquee Text */}
      <div className="border-b border-gray-800 py-3 sm:py-4 lg:py-6 overflow-hidden">
        <div className="marquee text-2xl sm:text-4xl lg:text-6xl font-montserrat font-black text-gray-900 whitespace-nowrap">
          PLATFORM LOMBA IT TERLENGKAP • KOMPETISI TEKNOLOGI • HACKATHON • PROGRAMMING CONTEST • 
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-1.5 sm:p-2 lg:p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg sm:rounded-xl"
              >
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-black" />
              </motion.div>
              <span className="text-lg sm:text-xl lg:text-2xl font-montserrat font-black gradient-text">
                lomba.it
              </span>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Platform terlengkap untuk menemukan lomba IT, kompetisi teknologi, dan event programming terbaik di Indonesia.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Platform</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Perusahaan</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Dukungan</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Email</p>
                <p className="text-gray-400 text-sm sm:text-base">hello@lomba.it</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">WhatsApp</p>
                <p className="text-gray-400 text-sm sm:text-base">+62 812-3456-7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 sm:col-span-2 lg:col-span-1">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Lokasi</p>
                <p className="text-gray-400 text-sm sm:text-base">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {currentYear} lomba.it. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}