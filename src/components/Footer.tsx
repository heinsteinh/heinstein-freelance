'use client'

import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  ArrowUp,
  Code,
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Qt/QML Development', href: '#services' },
    { name: 'C++ Consulting', href: '#services' },
    { name: 'System Architecture', href: '#services' },
    { name: 'Team Leadership', href: '#services' }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: '#',
      color: 'hover:bg-slate-700 hover:text-white'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:heinstein.fotso@gmail.com',
      color: 'hover:bg-red-500 hover:text-white'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Website',
      href: '#',
      color: 'hover:bg-purple-600 hover:text-white'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Heinstein Fotso</h3>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Senior C++ and Qt Developer with 15+ years of experience delivering 
                enterprise-grade solutions for Fortune 500 companies.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-slate-400 mb-6">
                <div>📧 heinstein.fotso@gmail.com</div>
                <div>📍 Germany (Remote Available)</div>
                <div>🕐 Mon - Fri, 9:00 - 18:00 CET</div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 ${link.color}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-slate-400 text-sm mb-4 md:mb-0"
            >
              <span>© {currentYear} Heinstein Fotso. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>using Next.js & Tailwind CSS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="flex space-x-4 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 py-4"
        >
          <div className="text-center text-xs text-slate-500">
            <p>
              Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion
            </p>
            <p className="mt-1">
              Deployed on GitHub Pages • Optimized for Performance & Accessibility
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
