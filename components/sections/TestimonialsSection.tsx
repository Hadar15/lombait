'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Rizki Pratama',
    role: 'Software Engineer',
    company: 'Tech Startup',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Platform lomba.it sangat membantu saya menemukan kompetisi programming yang sesuai dengan skill saya. Interfacenya elegant dan mudah digunakan.',
    rating: 5,
  },
  {
    name: 'Sarah Wijaya',
    role: 'UI/UX Designer',
    company: 'Design Agency',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Fitur filtering yang canggih membuat saya bisa dengan mudah menemukan lomba design yang sesuai dengan minat dan jadwal saya.',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Computer Science Student',
    company: 'Universitas Indonesia',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Berkat lomba.it, saya berhasil mengikuti berbagai hackathon dan memenangkan beberapa kompetisi. Platform ini benar-benar game changer!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
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
            APA KATA <span className="gradient-text">MEREKA</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Dengarkan pengalaman para developer dan designer yang telah menggunakan platform kami
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 p-6 sm:p-8 lg:p-10 h-full card-glow relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-400/10">
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors text-sm sm:text-base lg:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}