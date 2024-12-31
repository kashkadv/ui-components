import ProductGrid from "../Product/ProductGrid"

function CategoryPage({ products }) {
  if (!products || products.length === 0) return null

  return (
    <div className="space-y-24">
      <ProductGrid products={products} />
    </div>
  )
}
export default CategoryPage