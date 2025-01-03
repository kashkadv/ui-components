import { categories } from "@/helpers/mockData"
import CategoryBanner from "../Category/CategoryBanner"
import ProductGrid from "../Product/ProductGrid"

function CategoryPage({ category }) {

  const products = category?.products || []

  if (!products || products.length === 0) return null

  return (
    <div className="space-y-12">
      <CategoryBanner category={category} />
      <ProductGrid products={products} />
    </div>
  )
}
export default CategoryPage