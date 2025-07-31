'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Trophy, Sparkles, Search, Filter, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const competitions = [
  {
    id: 1,
    title: "Hackathon Nasional 2024",
    description: "Kompetisi pengembangan aplikasi inovatif untuk solusi masalah sosial dan teknologi",
    category: "Hackathon",
    prize: "Rp 50.000.000",
    participants: 150,
    location: "Jakarta",
    date: "15-17 Desember 2024",
    status: "active",
    difficulty: "Advanced",
    duration: "48 Jam",
    organizer: "Kementerian Komunikasi dan Informatika",
    tags: ["Web Development", "Mobile App", "AI/ML"]
  },
  {
    id: 2,
    title: "Programming Contest Universitas",
    description: "Kompetisi algoritma dan struktur data tingkat nasional untuk mahasiswa",
    category: "Programming",
    prize: "Rp 25.000.000",
    participants: 300,
    location: "Online",
    date: "20 Desember 2024",
    status: "active",
    difficulty: "Intermediate",
    duration: "5 Jam",
    organizer: "Universitas Indonesia",
    tags: ["Algorithm", "Data Structure", "Competitive Programming"]
  },
  {
    id: 3,
    title: "AI Innovation Challenge",
    description: "Kompetisi pengembangan AI untuk industri 4.0 dan smart city",
    category: "AI/ML",
    prize: "Rp 75.000.000",
    participants: 80,
    location: "Bandung",
    date: "10-12 Januari 2025",
    status: "upcoming",
    difficulty: "Expert",
    duration: "72 Jam",
    organizer: "Google Indonesia",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision"]
  },
  {
    id: 4,
    title: "Cybersecurity Capture The Flag",
    description: "Kompetisi keamanan siber untuk menguji kemampuan hacking etis",
    category: "Cybersecurity",
    prize: "Rp 30.000.000",
    participants: 120,
    location: "Surabaya",
    date: "5-6 Januari 2025",
    status: "upcoming",
    difficulty: "Advanced",
    duration: "24 Jam",
    organizer: "Kaspersky Indonesia",
    tags: ["Penetration Testing", "Forensics", "Reverse Engineering"]
  },
  {
    id: 5,
    title: "Game Development Contest",
    description: "Kompetisi pengembangan game indie dengan tema Indonesia",
    category: "Game Development",
    prize: "Rp 40.000.000",
    participants: 95,
    location: "Yogyakarta",
    date: "25-27 Januari 2025",
    status: "upcoming",
    difficulty: "Intermediate",
    duration: "48 Jam",
    organizer: "Unity Indonesia",
    tags: ["Unity", "Game Design", "3D Modeling"]
  },
  {
    id: 6,
    title: "Data Science Competition",
    description: "Kompetisi analisis data untuk prediksi dan optimasi bisnis",
    category: "Data Science",
    prize: "Rp 35.000.000",
    participants: 200,
    location: "Online",
    date: "15-20 Januari 2025",
    status: "upcoming",
    difficulty: "Advanced",
    duration: "7 Hari",
    organizer: "Microsoft Indonesia",
    tags: ["Data Analysis", "Statistics", "Business Intelligence"]
  }
];

const categories = ["Semua", "Hackathon", "Programming", "AI/ML", "Cybersecurity", "Game Development", "Data Science"];

export default function FeaturedCompetitions() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompetitions = competitions.filter(competition => {
    const matchesCategory = selectedCategory === "Semua" || competition.category === selectedCategory;
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="competitions" className="pt-24 sm:pt-28 lg:pt-32 xl:pt-36 pb-16 sm:pb-20 lg:pb-24 xl:pb-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
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
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 left-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"
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
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Kompetisi Teknologi</span>
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            Temukan <span className="text-blue-400">Kompetisi</span> Terbaik
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            Pilih dari ratusan kompetisi teknologi terbaik yang sedang berlangsung dan segera datang
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari kompetisi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {filteredCompetitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
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
                
                <CardHeader className="p-6 lg:p-8 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge 
                        variant={competition.status === 'active' ? 'default' : 'secondary'}
                        className="mb-2 text-xs px-3 py-1"
                      >
                        {competition.status === 'active' ? 'Aktif' : 'Segera'}
                      </Badge>
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Trophy className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500" />
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-white text-xl lg:text-2xl mb-3 font-bold leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {competition.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4">
                    {competition.description}
                  </CardDescription>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {competition.tags.slice(0, 2).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {competition.tags.length > 2 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{competition.tags.length - 2} lagi
                      </span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 lg:p-8 pt-0 relative z-10">
                  <div className="space-y-3 mb-6">
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{competition.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{competition.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Users className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{competition.participants} peserta</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{competition.duration}</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Total Hadiah</p>
                      <motion.p 
                        className="text-lg font-bold text-green-400"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {competition.prize}
                      </motion.p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 mb-1">Tingkat</p>
                      <motion.p 
                        className="text-sm font-semibold text-orange-400"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {competition.difficulty}
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="text-xs text-gray-400">
                      <p>Organizer: {competition.organizer}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                        Daftar Sekarang
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
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
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Lihat Semua Kompetisi
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}