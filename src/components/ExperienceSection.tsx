'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Code, Award } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'DEUTA-WERKE',
      logo: '/logos/deuta.jpg',
      position: 'Senior C++/Qt Developer',
      period: '2025 - Present',
      location: 'Bergisch Gladbach, Germany',
      type: 'Freelance',
            description: "Led a team of 4 engineers developing next-generation automotive HMI using Qt/QML. Implemented modern C++17 standards and improved system performance by 40%. Architected scalable solutions following automotive industry standards (ISO 26262).",
      achievements: [
        'Architected scalable transportation control systems',
        'Implemented real-time data processing modules',
        'Optimized performance for embedded systems',
        'Mentored junior developers on Qt best practices'
      ],
      technologies: ['C++20', 'Qt 6', 'QML', 'Linux', 'Real-time Systems'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      company: 'Vorwerk',
      logo: '/logos/Vorwerk_Logo_BIMI_Square.jpeg',
      position: 'Lead Software Engineer',
      period: '2024 - 2025',
      location: 'Wuppertal, Germany',
      type: 'Contract',
      description: 'Spearheaded IoT and consumer product software development, focusing on connected home appliances.',
      achievements: [
        'Led cross-functional team of 8 developers',
        'Delivered IoT connectivity platform ahead of schedule',
        'Reduced memory footprint by 40% through optimization',
        'Established CI/CD pipelines for embedded systems'
      ],
      technologies: ['C++17', 'Qt', 'IoT', 'Embedded Systems', 'Docker'],
      color: 'from-red-600 to-red-700'
    },
    {
      company: 'Baker Hughes',
      logo: '/logos/Baker-Hughes-Logo.png',
      position: 'Principal Software Engineer',
      period: '2017 - 2023',
      location: 'Florence, Italy',
      type: 'Full-time',
      description: 'Technical lead for industrial automation and energy sector applications, managing enterprise-scale C++ projects.',
      achievements: [
        'Architected microservices platform serving 1000+ users',
        'Reduced system downtime by 60% through proactive monitoring',
        'Led digital transformation initiative for legacy systems',
        'Mentored 15+ engineers across multiple teams'
      ],
      technologies: ['C++14/17', 'Qt 5', 'Python', 'Docker', 'Jenkins', 'PostgreSQL'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      company: 'General Electric',
      logo: '/logos/General_Electric_logo.svg.png',
      position: 'Senior Software Developer',
      period: '2008 - 2017',
      location: 'Florence, Italy',
      type: 'Full-time',
      description: 'Core contributor to GE\'s industrial software portfolio, developing mission-critical applications for global markets.',
      achievements: [
        'Developed real-time monitoring systems for power plants',
        'Improved application performance by 250%',
        'Designed fault-tolerant distributed systems',
        'Contributed to open-source Qt community projects'
      ],
      technologies: ['C++98/11', 'Qt 4/5', 'Visual Studio', 'Oracle', 'SVN'],
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      company: 'BusinessCode',
      logo: '/logos/businesscode-logo.svg',
      position: 'Software Developer',
      period: '2007 - 2009',
      location: 'Düsseldorf, Germany',
      type: 'Full-time',
      description: 'Junior developer role focusing on desktop application development and gaining expertise in C++ and Qt frameworks.',
      achievements: [
        'Developed desktop applications for financial sector',
        'Implemented automated testing frameworks',
        'Contributed to internal development tools',
        'Achieved Qt certification'
      ],
      technologies: ['C++98', 'Qt 4', 'MySQL', 'Windows APIs'],
      color: 'from-purple-600 to-purple-700'
    }
  ]

  const stats = [
    { label: 'Years of Experience', value: '15+', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Companies Worked', value: '5', icon: <Users className="w-6 h-6" /> },
    { label: 'Projects Delivered', value: '50+', icon: <Code className="w-6 h-6" /> },
    { label: 'Team Members Led', value: '25+', icon: <Award className="w-6 h-6" /> }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven track record of delivering exceptional results across Fortune 500 companies 
            and innovative startups in the technology sector.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className="ml-16 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex items-center mb-4 lg:mb-0">
                      {/* Company Logo */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4 shadow-md`}>
                        {exp.company.split(' ')[0].substring(0, 3)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{exp.position}</h3>
                        <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                        <div className="flex items-center text-sm text-slate-500 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="mr-4">{exp.period}</span>
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'Freelance' ? 'bg-green-100 text-green-700' :
                      exp.type === 'Contract' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-slate-800 mb-2">Key Achievements:</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Add Value to Your Team?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              With 15+ years of experience across industry leaders, I'm ready to bring 
              the same level of excellence to your next project.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all">
              Let's Work Together
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
