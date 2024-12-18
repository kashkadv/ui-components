import CartButton from "../Buttons/CartButton"
import { useProductPage } from "../Pages/ProductPage"
import ProductPrice from "./ProductPrice"
import ProductSizes from "./ProductSize"

function ProductOrderBlock() {
  const { sizes, priceData } = useProductPage()

  return (
    <div className="space-y-8">
      <ProductSizes sizes={sizes} />
      <div className={`flex items-center gap-6`}>
        <ProductPrice size='xl' data={priceData} />
        <CartButton />
      </div>
    </div>
  )
}
export default ProductOrderBlock