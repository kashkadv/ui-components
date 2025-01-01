import ProductPage from "@/Components/Pages/ProductPage"
import { products } from "@/helpers/mockData"

function page({ params }) {
  const {articul} = params
  const [id, size] = articul.split('_')

  const product = products.find((product) => product.id === Number(id))

  return <ProductPage product={product} size={size || null} />
}
export default page