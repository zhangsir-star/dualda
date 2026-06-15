import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactCta from '../components/ContactCta'
import { bracelets, earrings, necklaces, rings } from '../data'
import { t } from '../i18n'

const productTabs = [
  { id: 'rough', label: t('product.tabs.rough') },
  { id: 'loose', label: t('product.tabs.loose') },
  { id: 'rings', label: t('product.tabs.rings') },
  { id: 'earrings', label: t('product.tabs.earrings') },
  { id: 'necklace', label: t('product.tabs.necklace') },
  { id: 'bracelets', label: t('product.tabs.bracelets') },
]

const llbColumns = [t('product.rough.gradeCarats'), '1-1.5', '1.5-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-10', '10-12', '12-15']
const llbRows = [
  ['A+', true, true, true, true, true, true, true, true, true, true, true],
  ['A', true, true, true, true, true, true, true, true, true, true, true],
  ['A-', false, true, true, true, true, true, true, true, true, true, true],
  ['B', false, true, true, true, true, true, true, true, true, true, true],
  ['C', false, true, false, false, true, false, false, true, false, false, true],
]

const llsColumns = [t('product.rough.gradeSize'), '1.0-2.0', '2.0-2.5', '2.5-3.0', '3.0-4.0', '4.0-4.5']
const llsRows = [
  ['A', true, true, true, true, true],
  ['B', true, false, true, true, true],
  ['C', true, false, true, true, true],
]

function RoughTable({ title, columns, rows }) {
  return (
    <div className="mb-12">
      <h3 className="mb-6 text-2xl md:text-3xl font-semibold text-brown-900">
        {title}
      </h3>
      <div className="w-full overflow-hidden">
        <table className="w-full table-fixed border-collapse text-center text-brown-700">
          <thead>
            <tr className="bg-[#F1F1F1]">
              {columns.map(column => (
                <th key={column} className="border border-brown-200 px-1.5 py-3 text-[10px] font-normal leading-tight sm:text-xs md:px-2 md:text-sm lg:px-3 lg:text-base xl:text-lg">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row[0]} className={rowIndex % 2 === 1 ? 'bg-[#F4F4F4]' : 'bg-white'}>
                <td className="border border-brown-200 px-1.5 py-3 text-xs md:px-2 md:text-base lg:px-3 lg:text-lg">
                  {row[0]}
                </td>
                {row.slice(1).map((hasStar, index) => (
                  <td key={`${row[0]}-${index}`} className="border border-brown-200 px-1.5 py-3 text-base text-brown-700 md:px-2 md:text-xl lg:px-3 lg:text-2xl">
                    {hasStar ? '★' : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function LooseDiamondVideo() {
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVideoReady(true), 1800)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden bg-white">
      {!videoReady && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-cream-dark via-white to-cream-dark" />
      )}
      <video
        src="https://img.aldajewelry.com/dulimulu/compressed-527lossdiamond.mp4"
        className={`h-full w-full object-contain transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        onLoadedData={() => setVideoReady(true)}
        onCanPlay={() => setVideoReady(true)}
      />
    </div>
  )
}

function ProductImageGrid({ products }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {products.map(product => (
        <div key={product.id} className="bg-white overflow-hidden">
          <img
            src={product.image}
            alt=""
            className="w-full aspect-square object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState(productTabs[0].id)
  const activeTabLabel = productTabs.find(tab => tab.id === activeTab)?.label

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <section className="bg-cream px-6 pt-14 pb-12 md:px-12 md:pt-20 md:pb-20 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
          <nav className="border-b border-brown-200 pb-8 lg:sticky lg:top-28 lg:self-start lg:border-b-0 lg:border-r lg:border-brown-200 lg:pb-0 lg:pr-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {productTabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-sm px-5 py-4 text-left text-sm font-medium uppercase tracking-wide transition-colors duration-300 md:text-base ${
                  activeTab === tab.id
                    ? 'bg-[#EEF1EA] text-brown-900'
                    : 'text-brown-600 hover:bg-brown-100 hover:text-brown-900'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] leading-none">
                    {activeTab === tab.id ? '▼' : '▶'}
                  </span>
                  <span>{tab.label}</span>
                </span>
              </button>
            ))}
            </div>
          </nav>

          <div className="min-h-[320px]">
            <h1 className="heading-serif mb-8 text-4xl leading-tight text-brown-900 md:text-5xl">
              {activeTabLabel}
            </h1>

            {activeTab === 'rough' && (
              <div className="text-brown-700">
                <RoughTable title={t('product.rough.llbTitle')} columns={llbColumns} rows={llbRows} />
                <RoughTable title={t('product.rough.llsTitle')} columns={llsColumns} rows={llsRows} />
              </div>
            )}
            {activeTab === 'loose' && <LooseDiamondVideo />}
            {activeTab === 'earrings' && <ProductImageGrid products={earrings} />}
            {activeTab === 'rings' && <ProductImageGrid products={rings} />}
            {activeTab === 'necklace' && <ProductImageGrid products={necklaces} />}
            {activeTab === 'bracelets' && <ProductImageGrid products={bracelets} />}
          </div>
        </div>
      </section>

      <ContactCta />

      <Footer />
    </div>
  )
}
