'use client'

const { createContext, useState, useContext } = require("react")

const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const isInCart = (product) => {
    return false
  }

  const handleProductCartState = (product) => {
    isInCart(product)
      ? removeFromCart(product)
      : addToCart(product)
  }

  const addToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id)
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

function useCartContext() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }

  return context
}

export { CartProvider, useCartContext }