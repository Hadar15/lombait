'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    number: 500,
    suffix: '+',
    label: 'Lomba Aktif',
    description: 'Kompetisi teknologi dari berbagai kategori',
  },
  {
    icon: Users,
    number: 10000,
    suffix: '+',
    label: 'Peserta Aktif',
    description: 'Developer dan tech enthusiast di seluruh Indonesia',
  },
  {
    icon: Calendar,
    number: 150,
    suffix: '+',
    label: 'Event Bulanan',
    description: 'Workshop, bootcamp, dan seminar teknologi',
  },
  {
    icon: Award,
    number: 50,
    suffix: '+',
    label: 'Universitas Partner',
    description: 'Institusi pendidikan terkemuka di Indonesia',
  },
];

function CountUpNumber({ number, suffix = '', inView }: { number: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = number / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [inView, number]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-black mb-4 sm:mb-6 lg:mb-8 leading-tight">
            STATISTIK <span className="gradient-text">PLATFORM</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Bergabunglah dengan komunitas developer terbesar di Indonesia dan raih kesempatan terbaik
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8"
                >
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black" />
                </motion.div>
                
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-black text-cyan-400 mb-2 sm:mb-3 lg:mb-4">
                  <CountUpNumber number={stat.number} suffix={stat.suffix} inView={inView} />
                </div>
                
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-4">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}