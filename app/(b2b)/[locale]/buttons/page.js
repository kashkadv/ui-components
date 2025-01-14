'use client'

import CartButton from "@/Components/Buttons/CartButton"

function Page() {
  return (
    <div className="p-6 space-y-6">
      <CartButton direction="rtl" label="أضف إلى السلة" />
      <CartButton label="Add to cart" />
    </div>
  )
}
export default Page