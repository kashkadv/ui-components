import ProductGrid from "../Product/ProductGrid"

function CategoryPage({ products }) {
  if (!products || products.length === 0) return null

  return (
    <div className="px-24 py-12 space-y-24">
      <ProductGrid products={products} />
    </div>
  )
}
export default CategoryPage