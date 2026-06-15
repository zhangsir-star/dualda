import { Gem, Handshake, Leaf, ShieldCheck } from 'lucide-react'
import { t } from '../i18n'

const highlights = [
  {
    icon: Handshake,
    title: t('home.confidence.guidance'),
  },
  {
    icon: Gem,
    title: t('home.confidence.customCraft'),
  },
  {
    icon: ShieldCheck,
    title: t('home.confidence.qualityCare'),
  },
  {
    icon: Leaf,
    title: t('home.confidence.responsibleProduction'),
  },
]

export default function ConfidenceHighlights() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-serif mb-14 text-center text-4xl leading-tight text-brown-900 md:text-5xl">
          {t('home.confidence.title')}
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-12">
          {highlights.map(({ icon: Icon, title }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-brown-200 text-brown-900 md:mb-7 md:h-28 md:w-28">
                <Icon className="h-9 w-9 md:h-[46px] md:w-[46px]" strokeWidth={1.35} />
              </div>
              <p className="mx-auto max-w-[180px] text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-brown-900 md:max-w-[230px] md:text-base md:leading-7 md:tracking-[0.18em]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
