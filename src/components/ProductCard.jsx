export default function ProductCard({ product }) {
  return (
    <div>
      <div className="relative overflow-hidden mb-3">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full aspect-square object-cover"
        />
      </div>
    </div>
  )
}
