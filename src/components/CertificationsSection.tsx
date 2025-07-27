'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code, 
  Globe, 
  Calendar,
  ExternalLink,
  CheckCircle,
  Users
} from 'lucide-react'

const CertificationsSection = () => {
  const education = [
    {
      degree: 'M. Sc. Autonomous Systems',
      field: 'Autonomous Systems',
      institution: 'Hochschule Bonn-Rhein-Sieg',
      location: 'Sankt Augustin, Germany',
      period: '2007 - 2010',
      grade: '1.2 (Sehr gut / Very Good)',
      description: 'Advanced studies in autonomous systems, robotics, and intelligent control systems with focus on real-time embedded applications.',
      highlights: [
        'Autonomous Navigation Systems',
        'Real-time Control Algorithms',
        'Machine Learning & AI',
        'Embedded Systems Programming'
      ]
    },
    {
      degree: 'Dipl.-Inform. (FH)',
      field: 'Computer Science',
      institution: 'University of Luxembourg',
      location: 'Luxembourg, Luxembourg',
      period: '2003 - 2007',
      grade: '15/20 (Gut / Good)',
      description: 'Comprehensive computer science education with emphasis on software engineering, system design, and programming fundamentals.',
      highlights: [
        'Software Engineering Principles',
        'Algorithm Design & Analysis',
        'Database Systems',
        'Network Programming'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Linux Foundation',
      date: '2025',
      status: 'Certified',
      description: 'Professional certification for Kubernetes cluster administration and container orchestration.',
      skills: ['Kubernetes', 'Container Orchestration', 'Cluster Management', 'DevOps'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2024',
      status: 'Certified',
      description: 'Infrastructure as Code certification covering Terraform fundamentals and best practices.',
      skills: ['Terraform', 'Infrastructure as Code', 'Cloud Automation', 'DevOps'],
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
      date: '2024',
      status: 'Certified',
      description: 'Azure cloud administration certification covering resource management and security.',
      skills: ['Azure', 'Cloud Administration', 'Resource Management', 'Security'],
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Microsoft Certified: DevOps Engineer Expert',
      issuer: 'Microsoft',
      date: '2024',
      status: 'Expert',
      description: 'Advanced DevOps certification covering CI/CD pipelines and automation strategies.',
      skills: ['DevOps', 'CI/CD', 'Azure DevOps', 'Automation'],
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'ISO 26262 Functional Safety',
      issuer: 'Industry Certification',
      date: '2018',
      status: 'Certified',
      description: 'Automotive functional safety standard certification for safety-critical systems development.',
      skills: ['Functional Safety', 'Automotive Standards', 'Safety-Critical Systems', 'Risk Assessment'],
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-red-500 to-red-600'
    }
  ]

  const continuousLearning = [
    {
      title: 'Qt 6 Migration & Modern C++',
      platform: 'Qt Training',
      date: '2024',
      status: 'Completed'
    },
    {
      title: 'Kubernetes Container Orchestration',
      platform: 'Linux Foundation',
      date: '2024',
      status: 'Completed'
    },
    {
      title: 'Azure Cloud Architecture',
      platform: 'Microsoft Learn',
      date: '2024',
      status: 'Completed'
    },
    {
      title: 'DevOps with GitLab CI/CD',
      platform: 'GitLab',
      date: '2023',
      status: 'Completed'
    },
    {
      title: 'Embedded Linux with Yocto',
      platform: 'Yocto Project',
      date: '2023',
      status: 'Completed'
    },
    {
      title: 'Modern C++20 Features',
      platform: 'CppCon',
      date: '2023',
      status: 'Completed'
    }
  ]

  const skills = [
    { category: 'Programming Languages', items: ['C++', 'Python', 'JavaScript', 'QML'] },
    { category: 'Frameworks & Libraries', items: ['Qt', 'STL', 'Boost', 'Google Test'] },
    { category: 'Development Tools', items: ['Visual Studio', 'Qt Creator', 'Git', 'Jenkins'] },
    { category: 'Methodologies', items: ['Agile', 'Scrum', 'TDD', 'Code Review'] }
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Committed to continuous learning and professional development to stay at the 
            forefront of technology and industry best practices.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
            Education
          </h3>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">{edu.degree}</h4>
                  <h5 className="text-lg font-semibold text-blue-600 mb-2">{edu.field}</h5>
                  <div className="flex items-center text-slate-600 mb-2">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span className="mr-4">{edu.institution}</span>
                    <Globe className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center text-slate-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{edu.period}</span>
                    <Award className="w-4 h-4 mr-2" />
                    <span>Grade: {edu.grade}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 mb-4">{edu.description}</p>
              
              <div>
                <h6 className="font-semibold text-slate-800 mb-2">Key Areas of Study:</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-slate-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-blue-600" />
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                      {cert.icon}
                    </div>
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                  <p className="text-sm opacity-90">{cert.issuer}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-600">Status</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {cert.status}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4">{cert.description}</p>
                  
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-2 text-sm">Skills Covered:</h6>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
            Continuous Learning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {continuousLearning.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-slate-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800">{course.title}</h4>
                  <p className="text-sm text-slate-600">{course.platform} • {course.date}</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {course.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h4 className="font-semibold text-slate-800 mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationsSection
