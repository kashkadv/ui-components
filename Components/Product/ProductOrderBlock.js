import CartButton from "../Buttons/CartButton"
import { useProductPage } from "../Pages/ProductPage"
import { AddToWishlistButton } from "../Wishlist"
import ProductPrice from "./ProductPrice"
import ProductSizes from "./ProductSize"

function ProductOrderBlock() {
  const { product, activeSize } = useProductPage()

  return (
    <div className="space-y-12">
      <div className={`flex items-center gap-4`}>
        <ProductPrice size='xl' price={Number(product?.base_price) + Number(activeSize?.additional_price || 0)} />
        <CartButton />
      </div>
      <ProductSizes sizes={product?.sizes} />
    </div>
  )
}
export default ProductOrderBlock