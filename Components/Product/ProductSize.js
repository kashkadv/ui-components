import { useState } from "react"
import SizeButton from "../Buttons/SizeButton"

function ProductSizes({ sizes }) {
  const [selectedSize, setSelectedSize] = useState(0)

  return (
    <div className={`flex gap-3`}>
      {sizes?.map((size, i) => <SizeButton onClick={() => setSelectedSize(i)} key={`size-${i}`} selected={i === selectedSize} data={size} />)}
    </div>
  )
}
export default ProductSizes