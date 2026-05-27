import ProductCard from '../components/ProductCard'
import { necklaces } from '../data'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactCta from '../components/ContactCta'
import { t } from '../i18n'

export default function NecklacesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <section className="bg-gradient-to-b from-cream-dark to-cream pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-brown-900 leading-tight mb-4">
            {t('collection.necklaces.title')}
          </h1>
          <p className="text-lg md:text-xl text-brown-600 font-light max-w-2xl mx-auto">
            {t('collection.necklaces.description')}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {necklaces.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <ContactCta />

      <Footer />
    </div>
  )
}
