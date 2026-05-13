import { Menu, X, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-cream py-8 px-6 md:px-12">
          <div className="flex items-center gap-4 max-w-2xl mx-auto">
            <button 
              onClick={() => setSearchOpen(false)}
              className="p-2 shrink-0"
            >
              <X size={20} className="text-brown-900" />
            </button>
            <input 
              type="text" 
              placeholder="Search our store"
              className="flex-1 bg-transparent text-sm font-sans tracking-wide text-brown-900 placeholder:text-brown-400 border-b border-brown-300 pb-2 focus:outline-none focus:border-brown-900 transition-colors"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-cream border-b border-brown-200">
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between px-12 py-4">
            {/* Left: Navigation */}
            <nav className="flex items-center gap-8 text-sm tracking-wider">
              <a href="#" className="hover:underline">Necklaces</a>
              <Link to="/rings" className="hover:underline">Rings</Link>
              <a href="#" className="hover:underline">Earrings</a>
              <a href="#" className="hover:underline">Bracelets</a>
            </nav>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif tracking-wider text-brown-900">
              ALDA
            </Link>

            {/* Right: Search + About */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 p-2 hover:text-brown-600 transition-colors"
              >
                <Search size={18} />
                <span className="text-sm tracking-wider">Search</span>
              </button>
              <a href="#" className="text-sm tracking-wider hover:underline">About</a>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/" className="text-xl font-serif tracking-wider text-brown-900">
              ALDA
            </Link>

            <button 
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 p-2 hover:text-brown-600 transition-colors"
            >
              <Search size={18} />
              <span className="text-xs tracking-wider">Search</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-cream border-t border-brown-200 px-6 py-4 space-y-3">
            <a href="#" className="block py-2 text-sm tracking-wider">Necklaces</a>
            <Link to="/rings" className="block py-2 text-sm tracking-wider">Rings</Link>
            <a href="#" className="block py-2 text-sm tracking-wider">Earrings</a>
            <a href="#" className="block py-2 text-sm tracking-wider">Bracelets</a>
            <a href="#" className="block py-2 text-sm tracking-wider">About</a>
          </nav>
        )}
      </header>
    </>
  )
}
