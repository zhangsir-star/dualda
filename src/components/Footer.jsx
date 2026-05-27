import { useState } from 'react'
import { t } from '../i18n'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setMessage(isValidEmail ? t('footer.popupSuccess') : t('footer.popupInvalid'))
    window.setTimeout(() => setMessage(''), 1000)
  }

  return (
    <footer className="bg-brown-900 text-cream py-16 px-6 md:px-12 lg:px-24">
      {message && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/20 px-6">
          <div className="bg-cream/90 px-8 py-5 text-center text-brown-900 shadow-lg">
            {message}
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Newsletter */}
        <div id="join-community" className="col-span-2 md:col-span-2 scroll-mt-24">
          <h3 className="font-serif text-xl md:text-2xl mb-4">{t('footer.communityTitle')}</h3>
          <p className="text-cream/70 text-sm mb-4">
            {t('footer.communityDescription')}
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t('footer.emailPlaceholder')}
              className="flex-1 px-4 py-3 bg-brown-800 border border-brown-700 text-cream text-sm placeholder:text-brown-500 focus:outline-none focus:border-gold-400"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="px-6 py-3 bg-gold-500 text-white text-sm tracking-wider uppercase hover:bg-gold-600 transition-colors"
            >
              {t('footer.subscribe')}
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm tracking-wider uppercase mb-4 text-gold-400">{t('footer.catalog')}</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><a href="/necklaces" className="hover:text-cream transition-colors">{t('nav.necklaces')}</a></li>
            <li><a href="/rings" className="hover:text-cream transition-colors">{t('nav.rings')}</a></li>
            <li><a href="/earrings" className="hover:text-cream transition-colors">{t('nav.earrings')}</a></li>
            <li><a href="/bracelets" className="hover:text-cream transition-colors">{t('nav.bracelets')}</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm tracking-wider uppercase mb-4 text-gold-400">{t('footer.company')}</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><a href="/about" className="hover:text-cream transition-colors">{t('footer.ourStory')}</a></li>
            <li><a href="/about#visit-us" className="hover:text-cream transition-colors">{t('about.visitTitle')}</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-brown-800 text-xs text-cream/50">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
