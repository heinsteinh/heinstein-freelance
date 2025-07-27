'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Users, Award, Globe, Mail, Github, Linkedin } from 'lucide-react'

const AboutSection = () => {
  const skills = [
    { name: 'C++', level: 95, color: 'bg-blue-600' },
    { name: 'Qt/QML', level: 90, color: 'bg-green-600' },
    { name: 'Python', level: 85, color: 'bg-yellow-600' },
    { name: 'System Architecture', level: 88, color: 'bg-purple-600' },
    { name: 'DevOps', level: 80, color: 'bg-red-600' },
    { name: 'Team Leadership', level: 85, color: 'bg-indigo-600' }
  ]

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Excellence',
      description: 'Deep expertise in C++, Qt, and modern development practices with 15+ years of experience.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Specialized in high-performance applications and system optimization for enterprise environments.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Leadership & Mentoring',
      description: 'Led cross-functional teams and mentored developers across multiple Fortune 500 companies.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Track Record',
      description: 'Successfully delivered critical projects for industry leaders like GE, Baker Hughes, and Vorwerk.'
    }
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:heinstein.fotso@gmail.com' },
    { icon: <Globe className="w-5 h-5" />, label: 'Website', href: '#' }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              About <span className="text-blue-600">Heinstein</span>
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                With over 15 years of professional experience in C++ development and Qt frameworks, 
                I specialize in creating robust, high-performance applications for enterprise environments.
              </p>
              <p className="mb-4">
                My journey spans across leading technology companies where I've architected and delivered 
                mission-critical software solutions, led development teams, and established best practices 
                for modern C++ development.
              </p>
              <p>
                I'm passionate about clean code, performance optimization, and mentoring the next generation 
                of developers. Whether you need a technical consultant, a senior developer, or a team lead, 
                I bring the expertise and leadership to drive your projects to success.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{highlight.title}</h3>
                    <p className="text-sm text-slate-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Core Expertise</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full ${skill.color} shadow-sm`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-slate-800 mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-slate-600">Fortune 500 Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-slate-600">Countries Worked</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
