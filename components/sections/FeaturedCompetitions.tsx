'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Trophy, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const competitions = [
  {
    id: 1,
    title: "Hackathon Nasional 2024",
    description: "Kompetisi pengembangan aplikasi inovatif untuk solusi masalah sosial",
    category: "Hackathon",
    prize: "Rp 50.000.000",
    participants: 150,
    location: "Jakarta",
    date: "15-17 Desember 2024",
    status: "active"
  },
  {
    id: 2,
    title: "Programming Contest Universitas",
    description: "Kompetisi algoritma dan struktur data tingkat nasional",
    category: "Programming",
    prize: "Rp 25.000.000",
    participants: 300,
    location: "Online",
    date: "20 Desember 2024",
    status: "active"
  },
  {
    id: 3,
    title: "AI Innovation Challenge",
    description: "Kompetisi pengembangan AI untuk industri 4.0",
    category: "AI/ML",
    prize: "Rp 75.000.000",
    participants: 80,
    location: "Bandung",
    date: "10-12 Januari 2025",
    status: "upcoming"
  }
];

export default function FeaturedCompetitions() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Kompetisi Terpilih</span>
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            Kompetisi <span className="text-blue-400">Terpopuler</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Pilih dari ratusan kompetisi teknologi terbaik yang sedang berlangsung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-blue-500 transition-all duration-500 h-full group hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating particles effect */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                />
                
                <CardHeader className="p-4 sm:p-6 lg:p-8 relative z-10">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge 
                        variant={competition.status === 'active' ? 'default' : 'secondary'}
                        className="mb-2 text-xs sm:text-sm px-2 sm:px-3 py-1"
                      >
                        {competition.status === 'active' ? 'Aktif' : 'Segera'}
                      </Badge>
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-500" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 font-bold leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {competition.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {competition.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 lg:p-8 pt-0 relative z-10">
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-base">{competition.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-base">{competition.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-base">{competition.participants} peserta</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">Total Hadiah</p>
                      <motion.p 
                        className="text-base sm:text-lg lg:text-xl font-bold text-green-400"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {competition.prize}
                      </motion.p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                        Daftar Sekarang
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Lihat Semua Kompetisi
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}