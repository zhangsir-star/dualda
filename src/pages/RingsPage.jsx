import ProductCard from '../components/ProductCard'
import { bestSellers } from '../data'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const rings = bestSellers.filter((_, i) => [1, 3, 4, 5].includes(i))

const sidebarItems = [
  { group: 'OUR BEST SELLERS', items: [] },
  { group: 'NEW IN', items: [] },
  { group: 'SHOP FINE JEWELRY', items: ['Yellow gold jewelry', 'White gold jewelry', 'Rose gold jewelry'], current: true },
  { group: 'EARRINGS', items: [] },
  { group: 'RINGS', items: [], active: true },
  { group: 'NECKLACES', items: [] },
  { group: 'BRACELETS', items: [] },
  { group: 'SHOP ENGAGEMENT', items: [] }
]

export default function RingsPage() {
  const [openGroups, setOpenGroups] = useState({})

  const toggleGroup = (group) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }))
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 pb-6 border-b border-brown-200">
          <h1 className="heading-serif text-4xl md:text-5xl text-brown-900 mb-4 md:mb-0">
            Rings
          </h1>
          <p className="text-sm text-brown-600 md:text-right md:mt-2">
            Lab-grown diamond jewelry made with 18k recycled gold
          </p>
        </div>

        {/* Filter & Sort */}
        <div className="flex items-center justify-between mb-6">
          <div className="hidden md:block"></div>
          <div className="flex items-center gap-8 text-sm tracking-wider text-brown-700">
            <button className="flex items-center gap-1 hover:text-brown-900 transition-colors">
              FILTERS <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 hover:text-brown-900 transition-colors">
              SORT BY: All <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Content Layout: Sidebar + Product Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar - Mobile Accordion */}
          <aside className="md:hidden mb-6">
            {sidebarItems.map(item => (
              <div key={item.group} className="border-b border-brown-200 py-3">
                <button
                  onClick={() => toggleGroup(item.group)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className={`text-sm font-medium tracking-wider ${item.active ? 'text-brown-900' : 'text-brown-600'}`}>
                    {item.group}
                  </span>
                  {item.items.length > 0 && (
                    openGroups[item.group]
                      ? <ChevronUp size={16} className="text-brown-600" />
                      : <ChevronDown size={16} className="text-brown-600" />
                  )}
                </button>
                {item.items.length > 0 && openGroups[item.group] && (
                  <div className="mt-3 pl-4 space-y-2">
                    {item.items.map(sub => (
                      <a key={sub} href="#" className="block text-xs text-brown-500 hover:text-brown-700 transition-colors">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </aside>

          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <nav className="space-y-6">
              {sidebarItems.map(item => (
                <div key={item.group}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-medium tracking-wider ${item.active ? 'text-brown-900' : 'text-brown-600'}`}>
                      {item.group}
                    </span>
                    {item.items.length > 0 && (
                      <button
                        onClick={() => toggleGroup(item.group)}
                        className="text-brown-500 hover:text-brown-700 transition-colors"
                      >
                        {openGroups[item.group]
                          ? <ChevronUp size={14} />
                          : <ChevronDown size={14} />
                        }
                      </button>
                    )}
                  </div>
                  {item.items.length > 0 && openGroups[item.group] && (
                    <div className="ml-2 mt-2 space-y-2">
                      {item.items.map(sub => (
                        <a key={sub} href="#" className="block text-xs text-brown-500 hover:text-brown-700 transition-colors">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {rings.map(product => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
