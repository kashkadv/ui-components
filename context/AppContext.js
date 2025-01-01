'use client'

import { toggleScrollbar } from "@/helpers"

const { useContext, createContext, useState, use, useEffect } = require("react")

const AppContext = createContext()

function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)

  useEffect(() => {
    (!menuOpen && !cartOpen && !wishlistOpen)
      ? toggleScrollbar(false)
      : toggleScrollbar(true)
  }, [menuOpen, cartOpen, wishlistOpen])

  const handleCartOpen = () => {
    setCartOpen(!cartOpen)
    setMenuOpen(false)
    setWishlistOpen(false)
  }

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
    setCartOpen(false)
    setWishlistOpen(false)
  }

  const handleWishlistOpen = () => {
    setWishlistOpen(!wishlistOpen)
    setMenuOpen(false)
    setCartOpen(false)
  }

  const context = {
    handleCartOpen,
    cartOpen,
    handleMenuOpen,
    menuOpen,
    handleWishlistOpen,
    wishlistOpen
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }

  return context
}

export { AppProvider, useAppContext }