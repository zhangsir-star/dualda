export default function ProductCard({ product }) {
  return (
    <div>
      <div className="relative overflow-hidden mb-3">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full aspect-square object-cover"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium tracking-wider uppercase bg-cream-dark">
            {product.badge}
          </span>
        )}
      </div>
    </div>
  )
}
