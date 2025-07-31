'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Bell, Sparkles, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function NewsletterSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-r from-blue-900 to-purple-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Newsletter</span>
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
          </motion.div>
          
          <motion.div 
            className="flex justify-center mb-6 sm:mb-8 lg:mb-10"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="p-3 sm:p-4 bg-blue-500/20 rounded-full"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Bell className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-blue-400" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Jangan Lewatkan <span className="text-blue-400">Kompetisi</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Dapatkan notifikasi langsung untuk kompetisi terbaru dan peluang karir di dunia teknologi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
          >
            <motion.div 
              className="relative flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </motion.div>
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="pl-10 sm:pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 h-12 sm:h-14 text-base sm:text-lg rounded-lg transition-all duration-300 hover:bg-white/15"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 h-12 sm:h-14 flex items-center gap-2">
                <span>Berlangganan</span>
                <motion.div
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Send className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-xs sm:text-sm lg:text-base text-gray-400 mt-4 sm:mt-6 max-w-md mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Kami tidak akan mengirim spam. Hanya update kompetisi terbaru.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}