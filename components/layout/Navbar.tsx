'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

export default function Navbar() {
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
          ? 'bg-black/20 backdrop-blur-sm border-b border-gray-800/30' 
          : 'bg-transparent'
      }`}
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/3 w-20 h-20 bg-cyan-400/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-1/3 w-16 h-16 bg-blue-400/5 rounded-full blur-xl"
        />
      </div>

      <div className="w-full max-w-none px-4 md:px-8 relative z-10">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Centered Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <motion.div
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
              className="p-1.5 md:p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg"
            >
              <img src='https://drive.google.com/drive/folders/1QxDK8LjQstRBWpruwzzlxnIOjVcu1bVl' alt='logo' className="h-4 w-4 md:h-5 md:w-5 text-black" />
            </motion.div>
            <motion.span 
              className="text-lg md:text-xl font-montserrat font-black gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              lomba.it
            </motion.span>
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-cyan-400" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
} 