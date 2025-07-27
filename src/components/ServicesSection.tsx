'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Cpu, 
  Layers, 
  Users, 
  Settings, 
  BookOpen, 
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Qt/QML Development',
      description: 'Custom desktop and mobile applications using Qt framework with modern QML interfaces.',
      features: [
        'Cross-platform applications',
        'Modern QML UI design',
        'Qt Quick Controls',
        'Performance optimization'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'C++ Consulting',
      description: 'Expert C++ development, code reviews, and performance optimization for enterprise applications.',
      features: [
        'Modern C++ (11/14/17/20)',
        'Performance profiling',
        'Memory management',
        'Code architecture review'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'System Architecture',
      description: 'Design and implementation of scalable, maintainable software architectures.',
      features: [
        'Microservices design',
        'Design patterns',
        'System integration',
        'Technology selection'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Leadership',
      description: 'Technical leadership, team management, and agile development process implementation.',
      features: [
        'Agile/Scrum methodology',
        'Technical mentoring',
        'Code review processes',
        'Team coordination'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'DevOps & CI/CD',
      description: 'Implementation of modern development workflows, testing, and deployment pipelines.',
      features: [
        'Jenkins/GitLab CI',
        'Docker containerization',
        'Automated testing',
        'Deployment automation'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Training & Mentoring',
      description: 'Technical training sessions, workshops, and one-on-one mentoring for development teams.',
      features: [
        'C++ best practices',
        'Qt framework training',
        'Code quality workshops',
        'Career mentoring'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Understanding your requirements, current challenges, and project goals.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Developing a comprehensive technical strategy and implementation roadmap.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Executing the plan with regular updates, code reviews, and quality assurance.'
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'Final delivery with documentation, training, and ongoing support options.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Professional <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive C++ and Qt development services designed to accelerate your projects 
            and elevate your team's capabilities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden"
            >
              <div className={`${service.bgColor} p-6`}>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className={`w-4 h-4 ${service.textColor} mr-2 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`inline-flex items-center ${service.textColor} hover:opacity-80 transition-opacity font-medium`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">How I Work</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A proven process that ensures successful project delivery and exceeds client expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600">{step.description}</p>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-slate-300 transform -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your technical goals with professional C++ and Qt development.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
