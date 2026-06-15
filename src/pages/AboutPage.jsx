import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactCta from '../components/ContactCta'
import { t } from '../i18n'

const ethosImages = [
  'https://img.aldajewelry.com/dulimulu/61520.webp',
  'https://img.aldajewelry.com/dulimulu/61523.webp',
  'https://img.aldajewelry.com/dulimulu/61522.webp',
  'https://img.aldajewelry.com/dulimulu/61521.webp',
]

const productionImages = [
  'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/52030.webp',
  'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51403.webp',
  'https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp',
]

function StandardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % ethosImages.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <div className="mx-auto max-w-xl md:hidden">
        <div className="overflow-hidden rounded-sm bg-brown-100">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {ethosImages.map((src, index) => (
              <div key={src} className="w-full flex-none">
                <img
                  src={src}
                  alt={`Our Standards ${index + 1}`}
                  className="aspect-[700/858] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {ethosImages.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Show standard ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-brown-900' : 'bg-brown-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto hidden max-w-5xl grid-cols-2 gap-5 md:grid">
        {ethosImages.map((src, index) => (
          <div key={src} className="overflow-hidden rounded-sm bg-brown-100">
            <img
              src={src}
              alt={`Our Standards ${index + 1}`}
              className="aspect-[700/858] w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-dark to-cream pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14">
          <div>
            <p className="text-lg md:text-xl text-brown-600 font-light leading-relaxed">
              {t('about.heroText')}
            </p>
          </div>
          <div className="overflow-hidden rounded-sm bg-brown-100">
            <img
              src="https://img.aldajewelry.com/dulimulu/61404.webp"
              alt="Lab-grown diamond jewelry production"
              className="aspect-[4/3] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-b border-brown-200 px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
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
          <div className="mt-12 mx-auto aspect-[4/5] max-w-xl bg-brown-200 rounded-sm overflow-hidden">
            <img 
              src="https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/52013.webp" 
              alt={t('about.craftsmanshipAlt')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-cream-dark px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200">
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

      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-12 text-center">Our Standards</h2>
          <StandardsCarousel />
        </div>
      </section>

      {/* Visit Us / Contact */}
      <section id="visit-us" className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-b border-brown-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-12 text-center">In-House Production</h2>
          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr] md:gap-6">
            <div className="overflow-hidden rounded-sm bg-brown-100">
              <img
                src={productionImages[0]}
                alt="In-House Production 1"
                className="aspect-[4/3] w-full object-cover md:h-full md:min-h-[460px]"
                loading="lazy"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6">
              {productionImages.slice(1).map((src, index) => (
                <div key={src} className="overflow-hidden rounded-sm bg-brown-100">
                  <img
                    src={src}
                    alt={`In-House Production ${index + 2}`}
                    className="aspect-[4/3] w-full object-cover md:aspect-[3/2]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />

      <Footer />
    </div>
  )
}
