import { useState } from "react"
import SizeButton from "../Buttons/SizeButton"
import { useProductPage } from "../Pages/ProductPage"

function ProductSizes({ sizes }) {
  const { setActiveSize, activeSize } = useProductPage()

  const handleSizeClick = (size, i) => {
    setActiveSize(size)
  }

  return (
    <div className={`flex gap-3`}>
      {sizes?.map((size, i) => <SizeButton onClick={() => handleSizeClick(size, i)} key={`size-${i}`} selected={size.label === activeSize.label} data={size} />)}
    </div>
  )
}
export default ProductSizes