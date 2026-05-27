import { t } from '../i18n'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <img
        src="https://imgluodiye.kaytkrelated.ccwu.cc/dulimulu/51401.webp"
        alt={t('hero.imageAlt')}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative max-w-4xl mx-auto text-center pt-36 pb-40 md:pt-48 md:pb-56 px-6 md:px-12 lg:px-24">
        <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-brown-900 leading-tight mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-brown-700 mb-4 font-light">
          {t('hero.subtitle')}
        </p>
        <p className="text-base md:text-lg text-brown-600 mb-8">
          {t('hero.description')}
        </p>
        <div className="flex justify-center">
          <a href="/product" className="btn-primary">{t('hero.cta')}</a>
        </div>
      </div>
    </section>
  )
}
