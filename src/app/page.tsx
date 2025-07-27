import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CompaniesSection from '@/components/CompaniesSection'
import ServicesSection from '@/components/ServicesSection'
import ExperienceSection from '@/components/ExperienceSection'
import CertificationsSection from '@/components/CertificationsSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main>
        <HeroSection />
        <CompaniesSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
