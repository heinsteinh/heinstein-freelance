'use client'

import { motion } from 'framer-motion'

const CompaniesSection = () => {
  const companies = [
    {
      name: 'DEUTA-WERKE',
      logo: '/logos/deuta-logo.svg',
      website: 'https://www.deuta.com',
      description: 'Transportation Technology',
      period: '2025',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Vorwerk',
      logo: '/logos/vorwerk-logo.svg', 
      website: 'https://www.vorwerk.com',
      description: 'Consumer Products & IoT',
      period: '2024-2025',
      color: 'from-red-600 to-red-700'
    },
    {
      name: 'Baker Hughes',
      logo: '/logos/baker-hughes-logo.svg',
      website: 'https://www.bakerhughes.com',
      description: 'Industrial Technology',
      period: '2017-2023',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'General Electric',
      logo: '/logos/ge-logo.svg',
      website: 'https://www.ge.com',
      description: 'Industrial Conglomerate',
      period: '2008-2017',
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      name: 'BusinessCode',
      logo: '/logos/businesscode-logo.svg',
      website: 'https://www.businesscode.de',
      description: 'Software Development',
      period: '2007-2009',
      color: 'from-purple-600 to-purple-700'
    }
  ]

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I've had the privilege of working with some of the world's leading companies, 
            delivering enterprise-grade C++ and Qt solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:shadow-lg"
              >
                {/* Company Logo */}
                <div className="flex items-center justify-center h-16 mb-3">
                  <div className={`w-24 h-8 bg-gradient-to-r ${company.color} rounded flex items-center justify-center text-white font-bold text-xs shadow-md`}>
                    {company.name.split(' ')[0]}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">
                    {company.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-1">
                    {company.description}
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    {company.period}
                  </p>
                </div>

                {/* Hover tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  View Website
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-slate-700 font-medium">Fortune 500 Companies</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-slate-700 font-medium">Years Partnership</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-slate-700 font-medium">Project Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompaniesSection
