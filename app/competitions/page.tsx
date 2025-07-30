'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, Trophy, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const competitions = [
  {
    id: 1,
    title: 'Hackathon Nasional 2024',
    organizer: 'Tech University',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Hackathon',
    deadline: '2024-02-15',
    participants: 1200,
    prize: 'Rp 50.000.000',
    location: 'Jakarta',
    description: 'Kompetisi pemrograman terbesar di Indonesia dengan tema AI dan Machine Learning',
    status: 'open',
  },
  {
    id: 2,
    title: 'UI/UX Design Challenge',
    organizer: 'Design Corp',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Design',
    deadline: '2024-02-20',
    participants: 800,
    prize: 'Rp 25.000.000',
    location: 'Bandung',
    description: 'Tantangan desain untuk menciptakan aplikasi mobile yang inovatif',
    status: 'open',
  },
  {
    id: 3,
    title: 'Cybersecurity Contest',
    organizer: 'Security Lab',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Security',
    deadline: '2024-02-25',
    participants: 600,
    prize: 'Rp 30.000.000',
    location: 'Surabaya',
    description: 'Kompetisi keamanan siber untuk menguji kemampuan ethical hacking',
    status: 'open',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    organizer: 'Mobile Dev Community',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Mobile',
    deadline: '2024-03-01',
    participants: 950,
    prize: 'Rp 40.000.000',
    location: 'Yogyakarta',
    description: 'Lomba pengembangan aplikasi mobile dengan teknologi terbaru',
    status: 'open',
  },
  {
    id: 5,
    title: 'Data Science Competition',
    organizer: 'Data Institute',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Data Science',
    deadline: '2024-03-10',
    participants: 750,
    prize: 'Rp 35.000.000',
    location: 'Medan',
    description: 'Kompetisi analisis data dan machine learning untuk pemula hingga expert',
    status: 'open',
  },
  {
    id: 6,
    title: 'Web Development Contest',
    organizer: 'Web Dev Guild',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Development',
    deadline: '2024-03-15',
    participants: 1100,
    prize: 'Rp 45.000.000',
    location: 'Semarang',
    description: 'Lomba pengembangan website dengan fokus pada performa dan UX',
    status: 'open',
  },
];

const categories = ['Semua', 'Hackathon', 'Design', 'Security', 'Mobile', 'Data Science', 'Web Development'];
const locations = ['Semua', 'Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Medan', 'Semarang'];

export default function CompetitionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedLocation, setSelectedLocation] = useState('Semua');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCompetitions = competitions.filter(competition => {
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competition.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || competition.category === selectedCategory;
    const matchesLocation = selectedLocation === 'Semua' || competition.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-black mb-6">
              DAFTAR <span className="gradient-text">LOMBA</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Temukan kompetisi teknologi yang sesuai dengan passion dan skill Anda
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Cari lomba atau penyelenggara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-900/50 border-gray-700 focus:border-cyan-400 text-white placeholder-gray-400 h-14 pl-12 pr-4 text-lg"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-between items-center mb-6">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <div className="text-gray-400 text-sm">
                Menampilkan {filteredCompetitions.length} dari {competitions.length} lomba
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-6 bg-gray-900/30 rounded-lg border border-gray-800"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Kategori</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Lokasi</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Competitions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompetitions.map((competition, index) => (
              <motion.div
                key={competition.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="group bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden card-glow h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={competition.image}
                      alt={competition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {competition.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        OPEN
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {competition.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {competition.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                        Deadline: {competition.deadline}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                        {competition.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-2 text-cyan-400" />
                        {competition.participants} peserta
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Trophy className="h-4 w-4 mr-2 text-cyan-400" />
                        {competition.prize}
                      </div>
                    </div>

                    <Button className="w-full btn-glow bg-cyan-400 text-black hover:bg-cyan-300 font-semibold">
                      Lihat Detail
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCompetitions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">
                Tidak ada lomba yang sesuai dengan filter Anda
              </div>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                  setSelectedLocation('Semua');
                }}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
              >
                Reset Filter
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}