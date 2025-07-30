'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Bell } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-r from-blue-900 to-purple-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
            <div className="p-3 sm:p-4 bg-blue-500/20 rounded-full">
              <Bell className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-blue-400" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Jangan Lewatkan <span className="text-blue-400">Kompetisi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Dapatkan notifikasi langsung untuk kompetisi terbaru dan peluang karir di dunia teknologi
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="pl-10 sm:pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 h-12 sm:h-14 text-base sm:text-lg rounded-lg"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 h-12 sm:h-14">
              Berlangganan
            </Button>
          </motion.div>

          <p className="text-xs sm:text-sm lg:text-base text-gray-400 mt-4 sm:mt-6 max-w-md mx-auto">
            Kami tidak akan mengirim spam. Hanya update kompetisi terbaru.
          </p>
        </motion.div>
      </div>
    </section>
  );
}