'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Cpu, Zap } from 'lucide-react'

const HeroSection = () => {
  const techStackItems = [
    { icon: <Code size={20} />, text: 'C++17/20' },
    { icon: <Cpu size={20} />, text: 'Qt/QML' },
    { icon: <Zap size={20} />, text: 'Embedded Systems' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Expert{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              C++/Qt
            </span>
            <br />
            Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            15+ years of experience building enterprise-grade applications, 
            embedded systems, and cross-platform solutions for industry leaders
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {techStackItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-200"
              >
                <span className="text-blue-600">{item.icon}</span>
                <span className="font-medium text-slate-700">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-slate-700 border-2 border-slate-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-all duration-300"
            >
              View Experience
            </motion.a>
          </motion.div>

          {/* Key Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">5</div>
              <div className="text-slate-600 font-medium">Major Enterprises</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">100+</div>
              <div className="text-slate-600 font-medium">Projects Delivered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
