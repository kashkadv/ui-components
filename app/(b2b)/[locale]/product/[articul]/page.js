import ProductPage from "@/Components/Pages/ProductPage"
import { products } from "@/helpers/mockData"
import { notFound } from "next/navigation"

async function page({ params }) {
  const {articul} = await params

  const [id, size] = String(articul).split('_')

  if (!id) notFound()

  const product = products.find((product) => product.id == id)

  if (!product) notFound()

  return <ProductPage product={product} size={size || null} />
}
export default page