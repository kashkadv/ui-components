import ShopPage from "@/Components/Pages/ShopPage"
import { fetchSanity } from "@/sanity/fetch"

async function Page() {
  const categories = await fetchSanity('categories')
  
  if (!categories || categories.length === 0) return null

  return <ShopPage categories={categories} />
}
export default Page