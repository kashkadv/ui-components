import { useState } from "react"
import SizeButton from "../Buttons/SizeButton"
import { useProductPage } from "../Pages/ProductPage"
import { buildSize } from "@/helpers"

function ProductSizes({ sizes }) {
  const { product, setActiveSize, activeSize } = useProductPage()

  const handleSizeClick = (size, i) => {
    setActiveSize(size)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className={`flex flex-wrap gap-3`}>
        {sizes?.map((size, i) => <SizeButton onClick={() => handleSizeClick(size, i)} key={`size-${i}`} selected={size.name === activeSize.name} data={buildSize(product, size)} />)}
      </div>
      <div className="text-red-500">
        Size Guide | Custom size form (if needed)
      </div>
    </div>
  )
}
export default ProductSizes