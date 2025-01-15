'use client'

import { toggleScrollbar } from "@/helpers"
import { buildDictionaries } from "@/helpers/dictionaries"
import { usePathname, useRouter } from "next/navigation"

const { useContext, createContext, useState, use, useEffect, useMemo } = require("react")

const AppContext = createContext()

function AppProvider({ initialSettings, scenario, locale, children }) {
  const [theme, setTheme] = useState('light')

  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)

  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    let storedCurrency = localStorage.getItem('currency')
    if (storedCurrency) setCurrency(storedCurrency)

    if (!storedCurrency) {
      const localCurrency = {
        symbol: '₴',
        position: 'before',
        rate: 1,
        multiplier: 1
      }

      const worldCurrency = {
        symbol: '$',
        position: 'before',
        rate: 1,
        multiplier: 2
      }
      
      setCurrency(scenario === 'world' ? worldCurrency : localCurrency)
    }
  }, [locale])

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
    wishlistOpen,
    locale,
    scenario,
    currency
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

function useAppContext() {
  const context = useContext(AppContext)

  if (!context) throw new Error('useAppContext must be used within a AppContextProvider')

  return context
}

export { AppProvider, useAppContext }