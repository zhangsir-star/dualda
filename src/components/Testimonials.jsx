import { Star } from 'lucide-react'
import { testimonials } from '../data'
import { t } from '../i18n'

export default function Testimonials() {
  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 mb-12 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" className="text-gold-500" />
          ))}
        </div>
        <h2 className="heading-serif text-3xl md:text-4xl text-brown-900">
          {t('home.testimonialsTitle')}
        </h2>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative">
        <div className="animate-scroll flex gap-6">
          {allTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`}
              className="min-w-[320px] md:min-w-[400px] bg-white p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-gold-500" />
                ))}
              </div>
              <h3 className="font-serif text-lg text-brown-900 mb-3">
                {testimonial.title}
              </h3>
              <p className="text-brown-700 text-sm leading-relaxed mb-4">
                {testimonial.content}
              </p>
              {testimonial.author && (
                <p className="text-xs text-brown-600 tracking-wide">
                  — {testimonial.author}{testimonial.location && ` (${testimonial.location})`}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
