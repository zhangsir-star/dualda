import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-serif text-xl md:text-2xl mb-4">Join the Alda Community</h3>
          <p className="text-cream/70 text-sm mb-4">
            Sign up for early access to new collections, exclusive offers, and styling inspiration.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-brown-800 border border-brown-700 text-cream text-sm placeholder:text-brown-500 focus:outline-none focus:border-gold-400"
            />
            <button className="px-6 py-3 bg-gold-500 text-white text-sm tracking-wider uppercase hover:bg-gold-600 transition-colors">
              Subscribe
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2 6.34 6.34 0 0 0 9.49 21.5a6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z"/>
              </svg>
            </a>
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm tracking-wider uppercase mb-4 text-gold-400">Shop</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><a href="#" className="hover:text-cream transition-colors">Necklaces</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Rings</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Earrings</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Bracelets</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm tracking-wider uppercase mb-4 text-gold-400">Company</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><a href="#" className="hover:text-cream transition-colors">Our Story</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-brown-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
        <p>© 2024 Alda. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream/70">Privacy Policy</a>
          <a href="#" className="hover:text-cream/70">Terms of Service</a>
          <a href="#" className="hover:text-cream/70">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
