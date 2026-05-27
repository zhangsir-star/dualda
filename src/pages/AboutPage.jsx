import Header from '../components/Header'
import Footer from '../components/Footer'
import { Clock, Mail, Phone } from 'lucide-react'
import { t } from '../i18n'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-dark to-cream pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-brown-600 font-light leading-relaxed max-w-4xl mx-auto text-center">
            {t('about.heroText')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-6">{t('about.storyTitle')}</h2>
            <div className="space-y-4 text-brown-600 text-sm md:text-base leading-relaxed">
              <p>
                {t('about.story1')}
              </p>
              <p>
                {t('about.story2')}
              </p>
              <p>
                {t('about.story3')}
              </p>
            </div>
          </div>
          <div className="aspect-[4/5] bg-brown-200 rounded-sm overflow-hidden">
            <img 
              src="https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/52013.webp" 
              alt={t('about.craftsmanshipAlt')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="visit-us" className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-12 text-center">{t('about.valuesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="heading-serif text-xl text-brown-900 mb-3">{t('about.sustainabilityTitle')}</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                {t('about.sustainabilityDescription')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="heading-serif text-xl text-brown-900 mb-3">{t('about.craftsmanshipTitle')}</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                {t('about.craftsmanshipDescription')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="heading-serif text-xl text-brown-900 mb-3">{t('about.transparencyTitle')}</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                {t('about.transparencyDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us / Contact */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-12 text-center">{t('about.visitTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Location & Hours + Auto-scroll images */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-wider uppercase text-gold-500 mb-3 font-medium">{t('about.locationTitle')}</h3>
                <p className="text-brown-800 text-lg">
                  {t('about.locationLine1')}<br />
                  {t('about.locationLine2')}
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider uppercase text-gold-500 mb-3 font-medium">{t('about.hoursTitle')}</h3>
                <p className="text-brown-800 text-lg">
                  {t('about.hoursLine1')}<br />
                  {t('about.hoursLine2')}
                </p>
              </div>
              <div className="overflow-x-auto mt-8">
                <div className="flex gap-4">
                  {[
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51403.webp',
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp',
                    'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp',
                  ].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${t('about.galleryAlt')} ${index}`}
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
                alt={t('about.storeAlt')}
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
