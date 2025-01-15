import ProductCard from "./ProductCard"

function ProductGrid({ products, category }) {
  return (
    <div className="grid grid-cols-3 gap-12">
      {products.map((product, i) => <ProductCard key={`product-grid-${i}`} product={product} category={category} />)}
    </div>
  )
}
export default ProductGrid