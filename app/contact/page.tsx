'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    info: 'hello@lomba.it',
    description: 'Kirim email untuk pertanyaan umum',
    action: 'mailto:hello@lomba.it',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    info: '+62 812-3456-7890',
    description: 'Chat langsung untuk bantuan cepat',
    action: 'https://wa.me/6281234567890',
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    info: 'Jakarta, Indonesia',
    description: 'Kantor pusat dan tim support',
    action: '#',
  },
];

const faqs = [
  {
    question: 'Bagaimana cara mendaftar lomba?',
    answer: 'Klik tombol "Lihat Detail" pada lomba yang diinginkan, lalu ikuti link pendaftaran yang tersedia. Setiap lomba memiliki prosedur pendaftaran yang berbeda sesuai penyelenggara.',
  },
  {
    question: 'Apakah gratis menggunakan platform ini?',
    answer: 'Ya, lomba.it 100% gratis untuk semua pengguna. Kami tidak mengenakan biaya untuk pencarian dan akses informasi lomba.',
  },
  {
    question: 'Bagaimana cara menambahkan lomba baru?',
    answer: 'Penyelenggara dapat menghubungi tim kami melalui email atau WhatsApp untuk proses verifikasi dan penambahan lomba ke platform.',
  },
  {
    question: 'Apakah ada garansi keamanan data?',
    answer: 'Kami sangat menjaga privasi dan keamanan data pengguna sesuai dengan standar keamanan internasional dan regulasi yang berlaku.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-black mb-6">
              HUBUNGI <span className="gradient-text">KAMI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ada pertanyaan, saran, atau ingin berkolaborasi? Kami siap membantu Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 p-8 text-center card-glow group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <info.icon className="h-8 w-8 text-black" />
                  </motion.div>
                  <h3 className="text-xl font-montserrat font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-2">{info.info}</p>
                  <p className="text-gray-400 text-sm mb-4">{info.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                    onClick={() => window.open(info.action, '_blank')}
                  >
                    Hubungi
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 p-8">
                <h2 className="text-3xl font-montserrat font-black mb-6">
                  Kirim <span className="gradient-text">Pesan</span>
                </h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Nama Lengkap
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-700 focus:border-cyan-400"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-700 focus:border-cyan-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subjek
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-700 focus:border-cyan-400"
                        placeholder="Pertanyaan tentang lomba"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Pesan
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-gray-800 border-gray-700 focus:border-cyan-400 resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-glow bg-cyan-400 text-black hover:bg-cyan-300 font-semibold py-3 text-lg group"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      )}
                      {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-green-400 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Terima kasih atas pesan Anda. Tim kami akan merespons dalam 24 jam.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                    >
                      Kirim Pesan Lain
                    </Button>
                  </motion.div>
                )}
              </Card>
            </motion.div>

            {/* FAQ & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Response Time */}
              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-montserrat font-bold">Waktu Respons</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p>• Email: 24 jam (hari kerja)</p>
                  <p>• WhatsApp: 2-4 jam (09:00 - 18:00 WIB)</p>
                  <p>• Pertanyaan umum: Respons otomatis tersedia</p>
                </div>
              </Card>

              {/* FAQ */}
              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-montserrat font-bold">FAQ</h3>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-800 pb-4 last:border-b-0"
                    >
                      <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}