import { useAppContext } from "@/context/AppContext"
import { useProductPage } from "../Pages/ProductPage"

import Button from "../UI/Button"
import UseIcon from "../UI/UseIcon"
import { useCartContext } from "@/context/CartContext"

function CartButton({ label = 'Add to cart' }) { // TODO remove label and direction
  const { product, activeSize } = useProductPage()
  const { handleProductCartState, cart } = useCartContext()
  
  const handleButtonClick = () => {
    handleProductCartState(product, activeSize)
  }
  
  return (
    <Button onClick={handleButtonClick} type='primary' className={`group relative [&>*]:transition-all [&>*]:duration-500 gap-4 px-4 py-2 h-8 items-center flex text-greyDark z-0`}>
      <div className="leading-none tracking-wide font-bold flex items-center group relative group-hover:text-white z-10">{label}</div>
      <UseIcon w='5' id="cart" className={`mb-[2px] text-green group-hover:text-white ltr:-ml-1 ltr:mr-1 group-hover:ltr:ml-1 group-hover:ltr:mr-0 rtl:ml-0 rtl:-mr-1 group-hover:rtl:-ml-1 group-hover:rtl:mr-1 rtl:transform rtl:rotate-y-180 z-10`} />
      <div className={`h-[2px] w-1/2 bg-green absolute -bottom-1 transform group-hover:w-full group-hover:h-11 -z-0 ltr:right-5 group-hover:ltr:right-0 rtl:left-4 group-hover:rtl:left-0`}></div> 
    </Button>
  )
}

export default CartButton