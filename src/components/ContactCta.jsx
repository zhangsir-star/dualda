import { Mail } from 'lucide-react'
import { t } from '../i18n'

export default function ContactCta() {
  const email = t('cta.email')
  const mailto = `mailto:${email}`

  return (
    <section className="bg-cream-dark border-t border-brown-200 px-6 md:px-12 lg:px-24 py-10 md:py-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-brown-600 text-sm md:text-base mb-6">
          {t('cta.emailDescription')}
        </p>
        <a
          href={mailto}
          onClick={(event) => {
            event.preventDefault()
            window.location.href = mailto
          }}
          className="inline-flex items-center gap-2 border-b border-brown-900 pb-1 text-brown-900 text-sm md:text-base font-medium"
        >
          <Mail size={18} strokeWidth={1.8} />
          {email}
        </a>
      </div>
    </section>
  )
}
