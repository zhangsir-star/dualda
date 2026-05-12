export default function ProductCard({ product }) {
  return (
    <a href="#" className="group block">
      <div className="relative overflow-hidden mb-3">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium tracking-wider uppercase bg-cream-dark">
            {product.badge}
          </span>
        )}
      </div>
    </a>
  )
}
