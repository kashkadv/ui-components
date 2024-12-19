import ProductCard from "./ProductCard"

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-4 gap-12">
      {products.map((product, i) => <ProductCard key={`product-grid-${i}`} product={product} />)}
    </div>
  )
}
export default ProductGrid