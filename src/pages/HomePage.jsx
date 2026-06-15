import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import ConfidenceHighlights from '../components/ConfidenceHighlights'
import LabDiamondStory from '../components/LabDiamondStory'
import AppointmentSection from '../components/AppointmentSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <Testimonials />
        <ConfidenceHighlights />
        <LabDiamondStory />
        <AppointmentSection />
      </main>
      <Footer />
    </>
  )
}
