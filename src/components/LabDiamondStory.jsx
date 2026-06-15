import { t } from '../i18n'

export default function LabDiamondStory() {
  return (
    <section className="bg-cream">
      <div>
        <div className="grid md:grid-cols-2">
          <div className="overflow-hidden bg-brown-100">
            <img
              src="https://img.aldajewelry.com/dulimulu/61610.webp"
              alt="Lab-grown diamond setting"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex items-center bg-cream-dark px-6 py-14 text-center md:px-12 md:py-16 lg:px-20">
            <div className="mx-auto max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-gold-600">
                {t('home.labStory.eyebrow')}
              </p>
              <h2 className="heading-serif mb-6 text-4xl leading-tight text-brown-900 md:text-5xl">
                {t('home.labStory.craftTitle')}
              </h2>
              <p className="mx-auto mb-9 text-sm leading-7 text-brown-700 md:text-base">
                {t('home.labStory.craftDescription')}
              </p>
              <a href="/about" className="btn-outline">
                {t('home.labStory.craftCta')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="overflow-hidden bg-brown-100 md:order-2">
            <img
              src="https://img.aldajewelry.com/dulimulu/61602.webp"
              alt="Alda jewelry craftsmanship"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex items-center bg-[#EFE7DA] px-6 py-14 text-center md:order-1 md:px-12 md:py-16 lg:px-20">
            <div className="mx-auto max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-gold-700">
                {t('home.labStory.sourceEyebrow')}
              </p>
              <h2 className="heading-serif mb-6 text-4xl leading-tight text-brown-900 md:text-5xl">
                {t('home.labStory.sourceTitle')}
              </h2>
              <p className="mx-auto mb-9 text-sm leading-7 text-brown-700 md:text-base">
                {t('home.labStory.sourceDescription')}
              </p>
              <a href="/lab-grown-diamonds" className="inline-flex border border-brown-900 px-8 py-3 text-sm font-medium uppercase tracking-wider text-brown-900 transition-colors hover:bg-brown-900 hover:text-cream">
                {t('home.labStory.sourceCta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
