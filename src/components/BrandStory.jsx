export default function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-serif text-3xl md:text-4xl text-brown-900 mb-6 leading-tight">
          Designed for thoughtful individuals—people who curate their lives and the objects they own
        </h2>
        <p className="text-brown-700 leading-relaxed mb-8 text-base md:text-lg">
          We craft our products using the most sustainable materials available to us, like recycled 14k gold & 925 silver and cultivated diamonds. Our gold vermeil pieces use an ultra thick layer of gold over a silver base that lasts many times longer than gold-plated jewelry. Our hope is that you'll enjoy these pieces for many years—even generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="text-sm tracking-wider uppercase border-b-2 border-brown-900 pb-1 hover:text-brown-600 hover:border-brown-600 transition-colors">
            New Arrivals
          </a>
          <a href="#" className="text-sm tracking-wider uppercase border-b-2 border-brown-900 pb-1 hover:text-brown-600 hover:border-brown-600 transition-colors">
            Our Fave Gifts for Her
          </a>
        </div>
        <div className="mt-12">
          <a href="#" className="btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  )
}
