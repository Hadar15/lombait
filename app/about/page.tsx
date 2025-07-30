'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Heart, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const values = [
  {
    icon: Target,
    title: 'Misi Kami',
    description: 'Menghubungkan developer dan tech enthusiast dengan kompetisi teknologi terbaik di Indonesia untuk mengembangkan skill dan karir mereka.',
  },
  {
    icon: Users,
    title: 'Komunitas',
    description: 'Membangun ekosistem yang mendukung pertumbuhan talenta teknologi melalui kompetisi yang berkualitas dan networking yang kuat.',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi',
    description: 'Mendorong kreativitas dan inovasi teknologi melalui platform yang mudah digunakan dan fitur-fitur yang memudahkan peserta.',
  },
  {
    icon: Award,
    title: 'Kualitas',
    description: 'Menghadirkan kompetisi berkualitas tinggi dari penyelenggara terpercaya dengan hadiah dan kesempatan karir yang menarik.',
  },
];

const team = [
  {
    name: 'Budi Santoso',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Former Software Engineer dengan 10+ tahun pengalaman di industri teknologi.',
  },
  {
    name: 'Sarah Wijaya',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Expert dalam pengembangan platform dan sistem scalable untuk komunitas tech.',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Head of Community',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Passionate dalam membangun komunitas dan menghubungkan talenta dengan opportunity.',
  },
];

const stats = [
  { number: '2019', label: 'Tahun Didirikan', description: 'Dimulai sebagai project side untuk membantu mahasiswa IT' },
  { number: '500+', label: 'Lomba Terfasilitasi', description: 'Kompetisi dari berbagai kategori dan tingkat kesulitan' },
  { number: '10K+', label: 'Peserta Aktif', description: 'Developer dan designer dari seluruh Indonesia' },
  { number: '50+', label: 'Partner Resmi', description: 'Universitas dan perusahaan teknologi terkemuka' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-montserrat font-black mb-8">
              TENTANG <span className="gradient-text">LOMBA.IT</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Platform yang lahir dari passion untuk mengembangkan ekosistem teknologi Indonesia 
              melalui kompetisi berkualitas dan komunitas yang solid.
            </p>
          </motion.div>

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center"
              >
                <Zap className="h-16 w-16 text-black" />
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-montserrat font-black mb-6">
                CERITA <span className="gradient-text">KAMI</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Lomba.it lahir dari frustrasi sederhana: sulitnya menemukan informasi kompetisi teknologi 
                  yang tersebar di berbagai platform dan social media. Sebagai mahasiswa IT di tahun 2019, 
                  founder kami sering melewatkan deadline lomba karena informasi yang tidak terorganisir.
                </p>
                <p>
                  Dari masalah pribadi ini, terbentuklah visi untuk menciptakan satu platform terpusat 
                  yang memudahkan developer, designer, dan tech enthusiast menemukan kompetisi yang 
                  sesuai dengan passion dan skill mereka.
                </p>
                <p>
                  Hari ini, lomba.it telah menjadi platform terdepan untuk kompetisi teknologi di Indonesia, 
                  menghubungkan ribuan peserta dengan ratusan kompetisi berkualitas setiap tahunnya.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-center"
                  >
                    <div className="text-2xl font-montserrat font-black text-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold mb-2">{stat.label}</div>
                    <div className="text-gray-400 text-sm">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-black mb-6">
              NILAI-NILAI <span className="gradient-text">KAMI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap keputusan dan inovasi yang kami lakukan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 p-8 h-full card-glow group">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <value.icon className="h-6 w-6 text-black" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-montserrat font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-montserrat font-black mb-6">
              TIM <span className="gradient-text">KAMI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Orang-orang passionate yang berdedikasi untuk mengembangkan ekosistem tech Indonesia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden card-glow group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-montserrat font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl mb-8">
              <Heart className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-black mb-6">
              Bergabunglah dengan <span className="gradient-text">Misi Kami</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Bersama-sama kita bangun ekosistem teknologi Indonesia yang lebih kuat dan inklusif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-glow bg-cyan-400 text-black hover:bg-cyan-300 font-semibold px-8 py-4 rounded-lg text-lg">
                Mulai Sekarang
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-4 rounded-lg text-lg">
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}