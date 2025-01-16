'use client'

import { useAppContext } from "@/context/AppContext"
import Button from "../UI/Button"
import UseIcon from "../UI/UseIcon"
import Sidebar from "../UI/Sidebar"
import { useCartContext } from "@/context/CartContext"
import NoContent from "../UI/NoContent"
import ProductCard from "../Product/ProductCard"

function CartTrigger() {
  const { handleCartOpen } = useAppContext()
  const { cart } = useCartContext()

  const labelFullClassNames = cart.length !== 0 && "opacity-100"

  return (
    <Button onClick={handleCartOpen} className="relative text-greyDark focus:text-greyDark hover:text-greyLight">
      <UseIcon id="cart" w="6" className="z-10" />
      <div className={`absolute top-0 right-0 opacity-0 transition-all w-3 h-3 bg-green rounded-full translate-x-1 -translate-y-0 ${labelFullClassNames}`}></div>
    </Button>
  )
}

function Cart() {
  const { cartOpen, handleCartOpen } = useAppContext()
  
  return (
    <Sidebar isOpen={cartOpen} callback={handleCartOpen} direction="left" className="bg-background text-grey">
      <CartList />
    </Sidebar>
  )
}

function CartList() {
  const { cart, removeFromCart } = useCartContext()

  // TODO add message when cart is empty
  if (!cart || cart.length === 0) return <NoContent message="Empty Cart Message" />

  return (
    <div className="w-full h-dvh py-12 overflow-y-scroll no-scrollbar bg-green-100 space-y-6 content-center">
      {cart.map((item, i) => (
        <div key={`cart-product-${i}`} className=" w-1/2 max-w-full mx-auto bg-white p-6  relative ">
          <ProductCard  product={item} type='cart-list' />
          <Button onClick={() => removeFromCart(item.sid)} className="p-3 bg-transparent absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 text-red-500 z-10 ">
            <UseIcon id="x" w="8" />
          </Button>
        </div>
      ))}
    </div>
  )
}

export { CartTrigger, Cart }