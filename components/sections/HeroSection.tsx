'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, Users, Calendar, ArrowDown } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fungsi scroll ke section berikutnya
  function scrollToNext() {
    const nextSection = document.getElementById('after-hero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffe0';
        ctx.shadowColor = '#00ffe0';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // Responsiveness
    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden px-4 md:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      {/* Particle Canvas Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Animated Background Circles */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="w-full max-w-none relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)]">
        <div className="text-center w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12 lg:mb-16 mt-4 sm:mt-6 md:mt-8 lg:mt-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 leading-tight drop-shadow-lg">
              Platform Lomba IT
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-400 mt-3 sm:mt-4 lg:mt-6 drop-shadow">
                Terlengkap
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-10 lg:mb-14 w-full max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8 font-medium drop-shadow">
              Temukan dan ikuti kompetisi teknologi terbaik. Dari hackathon hingga programming contest, 
              semua ada di satu tempat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center mb-10 sm:mb-14 lg:mb-20 px-4 sm:px-6 md:px-8"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Mulai Kompetisi
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-200 hover:bg-gray-800 px-8 sm:px-12 lg:px-16 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Lihat Semua Lomba
            </Button>
          </motion.div>

          {/* Hapus grid info bawah */}
        </div>
      </div>
      {/* Scroll Down Indicator - only on desktop */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
        data-cursor-hover
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-8 h-8 text-cyan-400 drop-shadow-lg animate-pulse" />
      </motion.div>
    </section>
  );
}