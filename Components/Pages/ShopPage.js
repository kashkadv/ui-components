import CategoryCard from "../Category/CategoryCard"

function ShopPage({ categories }) {
  return (
    <div className="py-12">
      {categories.map((category, i) => <CategoryCard baseUrl="/shop" category={category} key={category.slug} last={categories.length - 1 == i} />)}
    </div>
  )
}
export default ShopPage