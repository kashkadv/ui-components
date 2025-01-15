import ProductPage from "@/Components/Pages/ProductPage"
import { products } from "@/helpers/mockData"
import { fetchSanity } from "@/sanity/fetch"
import { notFound } from "next/navigation"

async function page({ params }) {
  const {articul} = await params

  const [id, size] = String(articul).split('_')

  if (!id) notFound()

  const product = await fetchSanity('product-by-slug', { slug: id })

  if (!product) notFound()

  return <ProductPage product={product} size={size || null} />
}
export default page