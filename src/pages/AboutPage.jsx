import Header from '../components/Header'
import Footer from '../components/Footer'
import { Clock, Mail, Phone } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-dark to-cream pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-brown-900 leading-tight mb-4">
            About Alda
          </h1>
          <p className="text-lg md:text-xl text-brown-600 font-light max-w-2xl mx-auto">
            Lab-grown diamond jewelry, crafted with intention. Designed to be worn, loved, and passed down.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-brown-600 text-sm md:text-base leading-relaxed">
              <p>
                Alda was founded on a simple belief: luxury jewelry should be beautiful, responsibly made, and accessible. We create pieces that honor tradition while embracing innovation.
              </p>
              <p>
                Every piece is handcrafted in our workshop using ethically sourced lab-grown diamonds and recycled precious metals. Our artisans bring decades of experience to each creation, ensuring impeccable quality in every detail.
              </p>
              <p>
                From the first sketch to the final polish, we take pride in making jewelry that tells a story — your story.
              </p>
            </div>
          </div>
          <div className="aspect-[4/5] bg-brown-200 rounded-sm overflow-hidden">
            <img 
              src="https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/52013.webp" 
              alt="Alda craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="heading-serif text-xl text-brown-900 mb-3">Sustainability</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Lab-grown diamonds use 95% less water and produce 80% less carbon emissions than mined diamonds.
              </p>
            </div>
            <div className="text-center">
              <h3 className="heading-serif text-xl text-brown-900 mb-3">Craftsmanship</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Each piece is handcrafted by skilled artisans with decades of experience in fine jewelry making.
              </p>
            </div>
            <div className="text-center">
              <h3 className="heading-serif text-xl text-brown-900 mb-3">Transparency</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                We believe in honest pricing and full disclosure of materials and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us / Contact */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-12 text-center">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Location & Hours + Auto-scroll images */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-wider uppercase text-gold-500 mb-3 font-medium">Location</h3>
                <p className="text-brown-800 text-lg">
                  Henan High-Tech Industrial Development Zone<br />
                  Zhengzhou, China
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider uppercase text-gold-500 mb-3 font-medium">Opening Hours</h3>
                <p className="text-brown-800 text-lg">
                  Monday – Friday<br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
              <div className="overflow-hidden mt-8">
                <div className="flex gap-4 animate-scroll">
                  {[
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51403.webp',
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp',
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp',
                  ].concat([
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51403.webp',
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp',
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp',
                  ]).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Gallery ${index}`}
                      className="w-48 h-36 object-cover rounded-sm shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Booking CTA - Image */}
            <div>
              <img 
                src="https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/52030.webp" 
                alt="Alda Store" 
                className="w-full object-cover rounded-sm"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
