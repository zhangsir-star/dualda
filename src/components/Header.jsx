import { ChevronDown, Globe2, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { getCurrentLanguage, languageOptions, setLanguage as setAppLanguage, t } from '../i18n'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState(getCurrentLanguage())
  const [languageOpen, setLanguageOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const isHomePage = window.location.pathname === '/'

  useEffect(() => {
    if (!menuOpen) return

    const closeMenuFromOutside = (event) => {
      if (!mobileMenuRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', closeMenuFromOutside)
    return () => document.removeEventListener('mousedown', closeMenuFromOutside)
  }, [menuOpen])

  const selectLanguage = (nextLanguageCode) => {
    setLanguage(nextLanguageCode)
    setLanguageOpen(false)
    setAppLanguage(nextLanguageCode)
  }

  const languageSelector = (buttonClassName, iconSize = 14, chevronSize = 12) => (
    <div className="relative">
      <button
        type="button"
        onClick={() => setLanguageOpen(!languageOpen)}
        className={`flex items-center gap-1.5 rounded-md border border-brown-200 bg-cream shadow-sm hover:text-brown-600 transition-colors ${buttonClassName}`}
      >
        <Globe2 size={iconSize} />
        <span>{languageOptions.find(option => option.code === language)?.label}</span>
        <ChevronDown size={chevronSize} />
      </button>
      {languageOpen && (
        <div className="absolute right-0 top-full z-[80] mt-2 w-40 bg-cream border border-brown-200 shadow-lg">
          {languageOptions.map(option => (
            <button
              key={option.code}
              type="button"
              onClick={() => selectLanguage(option.code)}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-cream-dark ${
                language === option.code ? 'text-[#BABD8A]' : 'text-brown-900'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-cream border-b border-brown-200">
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between px-12 py-4">
            {/* Left: Navigation */}
            <nav className="flex items-center gap-8 text-sm tracking-wider">
              <a href="/necklaces" className="hover:underline">{t('nav.necklaces')}</a>
              <a href="/rings" className="hover:underline">{t('nav.rings')}</a>
              <a href="/earrings" className="hover:underline">{t('nav.earrings')}</a>
              <a href="/bracelets" className="hover:underline">{t('nav.bracelets')}</a>
            </nav>

            <a href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif tracking-wider text-brown-900">
              {t('site.brand')}
            </a>

            <div className="flex items-center gap-6">
              {languageSelector('px-2 py-1 text-xs tracking-wider')}
              <a href="/about" className="text-sm tracking-wider hover:underline">{t('nav.about')}</a>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div ref={mobileMenuRef} className="md:hidden">
          <div className="relative flex items-center justify-between px-6 py-4">
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a href="/" className="absolute left-1/2 -translate-x-1/2 text-xl font-serif tracking-wider text-brown-900">
              {t('site.brand')}
            </a>

            {isHomePage ? (
              languageSelector('px-1.5 py-1 text-[10px] tracking-wide', 12, 10)
            ) : (
              <a
                href="/about"
                className="text-sm tracking-wider text-brown-900 underline underline-offset-1 decoration-1"
              >
                {t('nav.about')}
              </a>
            )}
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="bg-cream border-t border-brown-200 px-6 py-4 space-y-3">
              <a href="/necklaces" className="block py-2 text-sm tracking-wider">{t('nav.necklaces')}</a>
              <a href="/rings" className="block py-2 text-sm tracking-wider">{t('nav.rings')}</a>
              <a href="/earrings" className="block py-2 text-sm tracking-wider">{t('nav.earrings')}</a>
              <a href="/bracelets" className="block py-2 text-sm tracking-wider">{t('nav.bracelets')}</a>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
