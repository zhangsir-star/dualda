import Header from '../components/Header'
import Footer from '../components/Footer'
import { t } from '../i18n'

const articleParagraphs = [
  'A few years ago, lab-grown diamonds were still treated by many people in the trade as something secondary — a cheaper option that serious jewelers didn’t want to stand behind. That view has changed quickly.',
  'Today, the conversation is very different. More jewelers are wearing lab-grown diamonds themselves, and more professionals are openly suggesting them to couples who want a beautiful engagement ring without paying the traditional mined-diamond premium.',
  'The market didn’t shift because the industry suddenly decided to be generous. It shifted because customers started asking better questions. They wanted to know what they were really paying for, why two diamonds with the same look and grading could be priced so differently, and whether a mined origin was worth the extra cost.',
  'For some traditional dealers, that change was uncomfortable. Many had built their businesses around mined diamonds for decades. Some were also carrying expensive natural diamond inventory, which made it harder for them to promote a product that offered customers stronger value. Others simply had a hard time letting go of the old belief that a diamond had to come from the earth to be considered truly desirable.',
  'But demand has a way of moving the market forward. Dealers who once avoided lab-grown diamonds are now actively selling them. In some established businesses, lab-grown diamonds have become the majority of their diamond sales.',
  'This shift is also supported by the way diamonds are evaluated today. Leading grading institutions, including GIA, assess lab-grown diamonds using the same core 4Cs — cut, color, clarity, and carat weight — that are used for mined diamonds. That makes the difference clear: lab-grown diamonds are not an imitation. They are real diamonds with a different origin, and more couples are choosing them for exactly that reason.',
]

export default function LabGrownDiamondsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <section className="bg-cream px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.75fr)] lg:items-start lg:gap-16">
          <article>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-gold-600">
              {t('labGrownDiamonds.eyebrow')}
            </p>
            <h1 className="heading-serif mb-8 text-4xl leading-tight text-brown-900 md:text-6xl">
              {t('labGrownDiamonds.title')}
            </h1>
            <div className="space-y-6 text-sm leading-8 text-brown-700 md:text-base">
              {articleParagraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="overflow-hidden rounded-sm bg-brown-100 lg:sticky lg:top-28">
            <img
              src="https://img.aldajewelry.com/dulimulu/51604.webp"
              alt="Lab-grown diamond jewelry"
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
