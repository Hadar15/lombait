'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone, Zap, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const footerLinks = {
  platform: [
    { name: 'Event Tech', href: '/events' },
    { name: 'Bootcamp', href: '/bootcamp' },
    { name: 'Workshop', href: '/workshop' },
  ],
  company: [
    { name: 'Tim', href: '/team' },
    { name: 'Karir', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Bantuan', href: '/help' },
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
  { name: 'Instagram', href: 'https://www.instagram.com/lomba.it/', icon: Instagram },
  { name: 'Email', href: 'https://wa.me/6282114267381', icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* Infinite Marquee Text */}
      <div className="border-b border-gray-800 py-3 sm:py-4 lg:py-6 overflow-hidden relative z-10">
        <motion.div 
          className="marquee text-2xl sm:text-4xl lg:text-6xl font-montserrat font-black text-gray-900 whitespace-nowrap"
          animate={{
            x: [0, -50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          PLATFORM LOMBA IT TERLENGKAP • KOMPETISI TEKNOLOGI • HACKATHON • PROGRAMMING CONTEST • 
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 group">
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-1.5 sm:p-2 lg:p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg sm:rounded-xl shadow-lg"
              >
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-black" />
              </motion.div>
              <motion.span 
                className="text-lg sm:text-xl lg:text-2xl font-montserrat font-black gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                lomba.it
              </motion.span>
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Sparkles className="h-4 w-4 text-cyan-400" />
              </motion.div>
            </Link>
            <motion.p 
              className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Platform terlengkap untuk menemukan lomba IT, kompetisi teknologi, dan event programming terbaik di Indonesia.
            </motion.p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {section === 'platform' ? 'Platform' : 
                 section === 'company' ? 'Perusahaan' :
                 section === 'support' ? 'Dukungan' : 'Legal'}
              </motion.h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 text-sm sm:text-base transition-colors duration-200 group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Mail, title: 'Email', value: 'haidar.r2005@gmail.com' },
              { icon: Phone, title: 'WhatsApp', value: '+62 821-1426-7381' },
              { icon: MapPin, title: 'Lokasi', value: 'Jakarta, Indonesia' }
            ].map((contact, index) => (
              <motion.div 
                key={contact.title}
                className="flex items-center space-x-3 sm:space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  <contact.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0" />
                </motion.div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">{contact.title}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            © {currentYear} lomba.it. Semua hak dilindungi.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}