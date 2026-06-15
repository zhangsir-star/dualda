import { Mail } from 'lucide-react'

const appointmentEmail = 'consultant@jewelry.com'

export default function AppointmentSection() {
  const mailto = `mailto:${appointmentEmail}`

  return (
    <section className="bg-cream px-6 pt-20 pb-0 md:px-12 md:pt-32 lg:px-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.24em] text-gold-600 md:text-base">
          Make an Appointment
        </h2>
        <a
          href={mailto}
          onClick={(event) => {
            event.preventDefault()
            window.location.href = mailto
          }}
          className="inline-flex items-center gap-2 border-b border-brown-900 pb-1 text-sm font-medium text-brown-900 md:text-base"
        >
          <Mail size={18} strokeWidth={1.8} />
          {appointmentEmail}
        </a>
        <div className="-mx-6 mt-40 overflow-hidden border border-brown-100 bg-brown-100 shadow-[0_18px_45px_rgba(46,36,26,0.14)] md:mx-0 md:rounded-sm">
          <img
            src="https://img.aldajewelry.com/dulimulu/61606.webp"
            alt="Alda appointment jewelry consultation"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
