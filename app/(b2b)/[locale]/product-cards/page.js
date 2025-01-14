import CategoryPage from "@/Components/Pages/CategoryPage"
import { products } from "@/helpers/mockData"

function page() {
  return <CategoryPage products={products} />
}
export default page