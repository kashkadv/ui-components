'use client'

import { useAppContext } from "@/context/AppContext"
import Button from "../UI/Button"
import UseIcon from "../UI/UseIcon"
import Sidebar from "../UI/Sidebar"
import { useCartContext } from "@/context/CartContext"
import NoContent from "../UI/NoContent"
import ProductCard from "../Product/ProductCard"
import DefaultButton from "../Buttons/DefaultButton"
import { useRouter } from "next/navigation"

function CartTrigger() {
  const { handleCartOpen } = useAppContext()
  const { cart } = useCartContext()

  const labelFullClassNames = cart && cart.length !== 0 && "opacity-100"

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
  const router = useRouter()

  // TODO add message when cart is empty
  if (!cart || cart.length === 0) return <NoContent message="Empty Cart Message" />

  const handleCheckout = () => {
    router.push('/checkout')
  }

  return (
    <div className="w-full laptop:w-1/2 h-dvh py-12 px-12 overflow-y-scroll no-scrollbar bg-green-100 space-y-6 content-center">
      {cart.map((item, i) => (
        <div key={`cart-product-${i}`} className="  max-w-full mx-auto bg-white p-6  relative ">
          <ProductCard  product={item} type='cart-list' />
          <Button onClick={() => removeFromCart(item.sid)} className="p-3 bg-transparent absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 text-red-500 z-10 ">
            <UseIcon id="x" w="8" />
          </Button>
        </div>
      ))}

      <DefaultButton onClick={handleCheckout} type="primary" className="ml-auto">Checkout</DefaultButton>  
    </div>
  )
}

function CartQtyControls({ item }) {
  const { qty, sid } = item
  const { updateCartItem } = useCartContext()

  const handleQtyChange = (e) => {
    const action = e.target.dataset.action
    const newQty = action === 'decrement' ? qty - 1 : qty + 1

    updateCartItem(sid, newQty)
  }

  const buttonClassNames = 'w-6 h-6 flex items-center justify-center rounded-full text-grey [&>*]:pointer-events-none'

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleQtyChange} data-action="decrement" type="button" className={buttonClassNames}>
        <UseIcon id="minus-circle" w="6" />
      </button>
      <span className="text-greyDark min-w-6 text-center">{qty}</span>
      <button onClick={handleQtyChange} data-action="increment" type="button" className={buttonClassNames}>
        <UseIcon id="plus-circle" w="6" />
      </button>
    </div>
  )
}

export { CartTrigger, Cart, CartQtyControls }