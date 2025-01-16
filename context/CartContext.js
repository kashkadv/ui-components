'use client'

import { useAppContext } from "./AppContext"

const { createContext, useState, useContext, useEffect } = require("react")

const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const {handleCartOpen, cartOpen} = useAppContext()
  
  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    setCart(JSON.parse(storedCart) || [])
  }, [])

  const isInCart = (sid) => {
    return cart.find((cartItem) => cartItem.sid === sid)
  }

  const handleProductCartState = (product, size = null) => {
    const sid = size ? `${product.articul}_${size._key}` : product.articul

    if (isInCart(sid)) {
      const cartItem = cart.find((cartItem) => cartItem.sid === sid)
      cartItem.qty++

      updateCart(cart, true)
    } else {
      addToCart({ ...product, sid, selectedSize: size, qty: 1 })
    }
  }

  const updateCart = (newCart, open = false) => {
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))

    if (open) handleCartOpen()
  }

  const addToCart = (product) => {
    const newCart = [...cart, product]
    updateCart(newCart, true)
  }

  const removeFromCart = (sid) => {
    const newCart = cart.filter((cartItem) => cartItem.sid !== sid)
    updateCart(newCart)

    if (newCart.length === 0) {
      setTimeout(() => {
        if (cartOpen) handleCartOpen()
      }, 1000)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, handleProductCartState }}>
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