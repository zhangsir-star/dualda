import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
