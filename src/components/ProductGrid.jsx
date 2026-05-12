import ProductCard from './ProductCard'
import { bestSellers } from '../data'

export default function ProductGrid({ title = 'New Arrivals', products = bestSellers }) {
  return (
    <section className="bg-cream pt-4 md:pt-8 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
      <h2 className="heading-serif text-4xl md:text-6xl text-center text-brown-900 mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
