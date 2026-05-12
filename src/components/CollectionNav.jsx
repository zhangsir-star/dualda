import { collections } from '../data'

export default function CollectionNav() {
  return (
    <section className="section-padding bg-cream-dark">
      <h2 className="heading-serif text-2xl md:text-3xl text-center text-brown-900 mb-12">
        Our Collection
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
        {collections.map(collection => (
          <a 
            key={collection.id} 
            href="#" 
            className="group block text-center"
          >
            <div className="aspect-square overflow-hidden mb-3 bg-cream">
              <img 
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23F5F0EB' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23A68B6B' font-family='serif' font-size='48'%3E${collection.title.charAt(0)}%3C/text%3E%3C/svg%3E`
                }}
              />
            </div>
            <h3 className="text-sm md:text-base font-medium tracking-wide text-brown-900 group-hover:underline">
              {collection.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}
