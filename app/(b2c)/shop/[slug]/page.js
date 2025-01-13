import CategoryPage from "@/Components/Pages/CategoryPage"
import { fetchSanity } from "@/sanity/fetch"

async function Page({ params }) {
  const { slug } = params

  const category = await fetchSanity('category-by-slug', { slug })

  if (!category) return null

  const products = await fetchSanity('category-products', { category: category._id })

  console.log('category', category)
  console.log('products', products)

  return <CategoryPage category={ category } products={products} />
}
export default Page