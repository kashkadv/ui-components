'use client'

import { getScrollBarWidth, toggleScrollbar } from "@/helpers"

const { useContext, createContext, useState, use, useEffect } = require("react")

const AppContext = createContext()

function App({ children }) {
  const [theme, setTheme] = useState('light')

  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [favoriteOpen, setFavoriteOpen] = useState(false)

  useEffect(() => {
    (!menuOpen && !cartOpen && !favoriteOpen)
      ? toggleScrollbar(false)
      : toggleScrollbar(true)
  }, [menuOpen, cartOpen, favoriteOpen])

  const handleCartOpen = () => {
    setCartOpen(!cartOpen)
    setMenuOpen(false)
    setFavoriteOpen(false)
  }

  const handleMenuOpen = () => {
    console.log('handleMenuOpen')

    setMenuOpen(!menuOpen)
    setCartOpen(false)
    setFavoriteOpen(false)
  }

  const handleFavoriteOpen = () => {
    setFavoriteOpen(!favoriteOpen)
    setMenuOpen(false)
    setCartOpen(false)
  }

  const context = {
    handleCartOpen,
    cartOpen,
    handleMenuOpen,
    menuOpen,
    handleFavoriteOpen,
    favoriteOpen
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

export { App, useAppContext }