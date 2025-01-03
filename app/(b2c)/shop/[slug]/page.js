import CategoryPage from "@/Components/Pages/CategoryPage"
import { categories, products } from "@/helpers/mockData"

function Page({ params }) {
  const { slug } = params

  const category = categories.find((category) => category.slug === slug)

  return <CategoryPage category={ category } />
}
export default Page