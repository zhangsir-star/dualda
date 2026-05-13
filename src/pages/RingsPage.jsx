import ProductCard from '../components/ProductCard'
import { bestSellers } from '../data'
import Header from '../components/Header'
import Footer from '../components/Footer'

const rings = bestSellers.filter((_, i) => [1, 3, 4, 5].includes(i))

const ringCategories = [
  { id: 'all', name: 'All Rings' },
  { id: 'engagement', name: 'Engagement' },
  { id: 'wedding', name: 'Wedding Bands' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'gemstone', name: 'Gemstone' }
]

export default function RingsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      {/* Page Banner */}
      <section className="bg-gradient-to-b from-cream-dark to-cream pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-brown-900 leading-tight mb-4">
            Rings
          </h1>
          <p className="text-lg md:text-xl text-brown-600 font-light max-w-2xl mx-auto">
            Discover our curated collection of lab-grown diamond rings — designed to celebrate life's most meaningful moments.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-brown-200 px-6 md:px-12 lg:px-24 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-6 overflow-x-auto">
          {ringCategories.map(cat => (
            <button
              key={cat.id}
              className="text-sm tracking-wider whitespace-nowrap text-brown-600 hover:text-brown-900 transition-colors"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {rings.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
