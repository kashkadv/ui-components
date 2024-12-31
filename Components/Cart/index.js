'use client'

import { useAppContext } from "@/context/AppContext"
import Button from "../UI/Button"
import UseIcon from "../UI/UseIcon"
import Sidebar from "../UI/Sidebar"

function CartTrigger() {
  const { handleCartOpen } = useAppContext()

  return (
    <Button onClick={handleCartOpen} className="text-greyDark focus:text-greyDark hover:text-greyLight">
      <UseIcon id="cart" w="6" />
    </Button>
  )
}

function Cart() {
  const { cartOpen, handleCartOpen } = useAppContext()

  return (
    <Sidebar  isOpen={cartOpen} callback={handleCartOpen} direction="left" className="bg-background text-grey">
      Cart
    </Sidebar>
  )
}

export { CartTrigger, Cart }