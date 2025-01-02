import CartButton from "../Buttons/CartButton"
import { useProductPage } from "../Pages/ProductPage"
import { AddToWishlistButton } from "../Wishlist"
import ProductPrice from "./ProductPrice"
import ProductSizes from "./ProductSize"

function ProductOrderBlock() {
  const { product } = useProductPage()

  return (
    <div className="space-y-8">
      <ProductSizes sizes={product?.sizes} />
      <div className={`flex items-center gap-6`}>
        <AddToWishlistButton />
        <ProductPrice size='xl' data={product?.price} />
        <CartButton />
      </div>
    </div>
  )
}
export default ProductOrderBlock