'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Trophy, Sparkles, Search } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback } from 'react';
import RefreshButton from '@/components/ui/refresh-button';

interface Competition {
  id: string;
  title: string;
  description: string;
  participants: string;
  prize: string;
  location: string;
  registrationDeadline: string;
  organizer: string;
  image: string;
  status: 'Active' | 'Upcoming' | 'Completed';
  category: string;
  tags: string[];
  website?: string;
  requirements?: string;
  eventDate?: string;
  ig?: string;
}

export default function FeaturedCompetitions() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCompetitions = useCallback(async () => {
    try {
      console.log('🔍 Fetching competitions from API...');
      
      // Add multiple cache-busting parameters
      const timestamp = new Date().getTime();
      const random = Math.random();
      const response = await fetch(`/api/competitions?t=${timestamp}&r=${random}&v=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        },
        next: { revalidate: 0 }
      });
      
      if (!response.ok) {
        console.error('❌ HTTP error:', response.status, response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ API Response:', data);
      console.log('📊 Number of competitions:', data.competitions?.length || 0);
      
      if (data.error) {
        console.error('❌ API returned error:', data.error);
        throw new Error(data.error);
      }
      
      // Check if data has competitions array
      if (data.competitions && Array.isArray(data.competitions)) {
        console.log('✅ Valid competitions data received');
        console.log('📋 Competition IDs:', data.competitions.map((c: any) => c.id));
        setCompetitions(data.competitions);
        console.log('✅ Set competitions:', data.competitions.length, 'items');
      } else {
        console.error('❌ Invalid API response format:', data);
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.error('❌ Error fetching competitions:', error);
      console.error('🔍 Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      
      // Set empty array instead of fallback data
      setCompetitions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCompetitions();
  }, [fetchCompetitions]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('🔄 Auto-refreshing competitions data...');
      fetchCompetitions();
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchCompetitions]);

  const sortedCompetitions = [...competitions].sort((a, b) => {
    const order = { Active: 0, Upcoming: 1, Completed: 2 };
    return order[a.status] - order[b.status];
  });

  const filteredCompetitions = sortedCompetitions.filter(competition => {
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (loading) {
    return (
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto text-center">
          <div className="text-white text-xl">Loading competitions...</div>
        </div>
      </section>
    );
  }

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
            {/* Refresh Button */}
            <RefreshButton 
              onRefresh={fetchCompetitions}
              className="shrink-0"
            />
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
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Badge overlay */}
                  <div className="absolute top-4 left-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge 
                        variant="default"
                        className="text-xs px-3 py-1"
                      >
                        {competition.status === 'Active' ? 'Aktif' : competition.status === 'Upcoming' ? 'Segera' : 'Selesai'}
                      </Badge>
                    </motion.div>
                  </div>
                  {/* Trophy icon overlay */}
                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Trophy className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500 drop-shadow-lg" />
                  </motion.div>
                </div>
                
                <CardHeader className="p-6 lg:p-8 relative z-10">
                  <CardTitle className="text-white text-xl lg:text-2xl mb-3 font-bold leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {competition.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4">
                    {competition.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6 lg:p-8 pt-0 relative z-10">
                  <div className="space-y-3 mb-6">
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">Deadline: {competition.registrationDeadline}</span>
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
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="text-xs text-gray-400">
                      <p>Organizer: {competition.organizer}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={() => window.open(competition.ig, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
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