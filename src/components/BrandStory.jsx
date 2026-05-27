import { t } from '../i18n'

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-6 leading-tight">
          {t('brandStory.title')}
        </h2>
        <p className="text-brown-700 leading-relaxed mb-8 text-base md:text-lg">
          {t('brandStory.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="text-sm tracking-wider uppercase border-b-2 border-brown-900 pb-1 hover:text-brown-600 hover:border-brown-600 transition-colors">
            {t('brandStory.styledOnModel')}
          </a>
          <a href="#" className="text-sm tracking-wider uppercase border-b-2 border-brown-900 pb-1 hover:text-brown-600 hover:border-brown-600 transition-colors">
            {t('brandStory.gifts')}
          </a>
        </div>
        <div className="mt-12">
          <a href="#" className="btn-outline">{t('brandStory.learnMore')}</a>
        </div>
      </div>
    </section>
  )
}
