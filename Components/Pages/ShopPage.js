import CategoryCard from "../Category/CategoryCard"
import { isLastInArray } from "@/helpers"

function ShopPage({ categories }) {
  const filteredCategories = categories.filter((category) => category.published)

  return (
    <div className="py-12">
      {filteredCategories.map((category, i) => <CategoryCard baseUrl="/shop" category={category} key={category.slug} last={isLastInArray(filteredCategories, i)} />)}
    </div>
  )
}

export default ShopPage