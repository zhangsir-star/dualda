import ProductCard from './ProductCard'
import { bestSellers } from '../data'
import { t } from '../i18n'

export default function ProductGrid({ title = t('home.styledOnModel'), products = bestSellers }) {
  return (
    <section className="bg-cream pt-16 md:pt-24 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-serif text-4xl md:text-5xl text-center text-brown-900 mb-12">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 max-w-6xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
