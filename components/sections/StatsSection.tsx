'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Trophy, Users, Calendar, Award, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    number: 500,
    suffix: '+',
    label: 'Lomba Aktif',
    description: 'Kompetisi teknologi dari berbagai kategori',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Users,
    number: 10000,
    suffix: '+',
    label: 'Peserta Aktif',
    description: 'Developer dan tech enthusiast di seluruh Indonesia',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Calendar,
    number: 150,
    suffix: '+',
    label: 'Event Bulanan',
    description: 'Workshop, bootcamp, dan seminar teknologi',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Award,
    number: 50,
    suffix: '+',
    label: 'Universitas Partner',
    description: 'Institusi pendidikan terkemuka di Indonesia',
    color: 'from-purple-400 to-pink-500',
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-400/5 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-0"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Statistik Platform</span>
            <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
          </motion.div>
          
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
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating icon effect */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 relative z-10 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                </motion.div>
                
                <motion.div 
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-black text-cyan-400 mb-2 sm:mb-3 lg:mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <CountUpNumber number={stat.number} suffix={stat.suffix} inView={inView} />
                </motion.div>
                
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {stat.description}
                </p>
                
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "#00ffe0",
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}