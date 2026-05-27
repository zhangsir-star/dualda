import { instagramPosts } from '../data'
import { t } from '../i18n'

export default function InstagramShowcase() {
  return (
    <section className="section-padding bg-cream-dark">
      <h2 className="heading-serif text-2xl md:text-3xl text-center text-brown-900 mb-12">
        {t('instagram.title')}
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-6 overflow-x-auto pb-6 max-w-7xl mx-auto snap-x snap-mandatory">
        {instagramPosts.map(post => (
          <div 
            key={post.id} 
            className="min-w-[300px] md:min-w-[400px] snap-start bg-white p-4"
          >
            {/* User Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-xs">
                {post.username.charAt(1).toUpperCase()}
              </div>
              <span className="text-sm font-medium">{post.username}</span>
            </div>

            {/* Image */}
            <div className="aspect-square bg-cream mb-4 overflow-hidden">
              <img 
                src={post.image}
                alt={`${t('instagram.postAlt')} ${post.username}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Products */}
            <div className="space-y-2 mb-4">
              {post.products.map((product, idx) => (
                <div key={idx} className="flex justify-between items-start text-sm">
                  <span className="text-brown-900">{product.name}</span>
                </div>
              ))}
            </div>

            {/* Shop the Look Button */}
            <button className="w-full py-2 border border-brown-900 text-sm tracking-wider uppercase hover:bg-brown-900 hover:text-white transition-colors">
              {t('instagram.shopTheLook')}
            </button>

            {/* Instagram Link */}
            <div className="mt-3 text-center">
              <a href="#" className="text-xs tracking-wider text-brown-600 hover:text-brown-900">
                {t('instagram.link')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
