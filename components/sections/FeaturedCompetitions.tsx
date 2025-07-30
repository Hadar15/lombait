'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

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
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full group hover:shadow-2xl hover:shadow-blue-500/10">
                <CardHeader className="p-4 sm:p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <Badge 
                      variant={competition.status === 'active' ? 'default' : 'secondary'}
                      className="mb-2 text-xs sm:text-sm px-2 sm:px-3 py-1"
                    >
                      {competition.status === 'active' ? 'Aktif' : 'Segera'}
                    </Badge>
                    <Trophy className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 font-bold leading-tight">
                    {competition.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {competition.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 lg:p-8 pt-0">
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-base">{competition.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-base">{competition.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-base">{competition.participants} peserta</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">Total Hadiah</p>
                      <p className="text-base sm:text-lg lg:text-xl font-bold text-green-400">{competition.prize}</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                      Daftar Sekarang
                    </Button>
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
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Lihat Semua Kompetisi
          </Button>
        </motion.div>
      </div>
    </section>
  );
}