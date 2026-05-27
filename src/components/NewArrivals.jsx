import { newArrivals } from '../data'
import { t } from '../i18n'

export default function NewArrivals() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
        <h2 className="heading-serif text-3xl md:text-4xl text-brown-900">
          {t('newArrivals.title')}
        </h2>
        <a href="#" className="text-sm tracking-wider uppercase border-b-2 border-brown-900 pb-1 hover:text-brown-600 hover:border-brown-600 transition-colors hidden md:block">
          {t('newArrivals.viewAll')}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {newArrivals.map(product => (
          <div key={product.id}>
            <div className="relative overflow-hidden mb-3">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full aspect-square object-cover"
              />
              {product.isNew && (
                <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium tracking-wider uppercase bg-cream-dark">
                  {t('newArrivals.newBadge')}
                </span>
              )}
            </div>
            <h3 className="font-serif text-sm md:text-base text-brown-900 leading-relaxed">
              {product.title}
            </h3>
            <p className="text-xs text-brown-600 mt-1">{product.description}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-sm font-medium text-brown-900 line-through opacity-60">
                ${product.price.toFixed(2)} USD
              </span>
              <span className="text-sm font-medium text-brown-900">
                ${product.discountPrice.toFixed(2)} USD
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <a href="#" className="btn-outline">{t('newArrivals.viewAllMobile')}</a>
      </div>
    </section>
  )
}
