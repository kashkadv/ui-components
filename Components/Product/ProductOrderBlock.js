import CartButton from "../Buttons/CartButton"
import { useProductPage } from "../Pages/ProductPage"
import ProductPrice from "./ProductPrice"
import ProductSizes from "./ProductSize"

function ProductOrderBlock() {
  const { product } = useProductPage()

  return (
    <div className="space-y-8">
      <ProductSizes sizes={product?.sizes} />
      <div className={`flex items-center gap-6`}>
        <ProductPrice size='xl' data={product?.price} />
        <CartButton />
      </div>
    </div>
  )
}
export default ProductOrderBlock