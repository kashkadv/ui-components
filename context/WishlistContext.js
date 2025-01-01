'use client'

const { createContext, useState, useContext, use, useEffect } = require("react")

const WishlistContext = createContext()

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    try {
      const wishlist = JSON.parse(localStorage?.getItem('wishlist'));
      setWishlist(wishlist || []);
    } catch {
      setWishlist([]);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist])

  const isInWishlist = (product) => {
    if (!wishlist || wishlist.length === 0) return false
    return wishlist.some((wishlistItem) => wishlistItem.id === product.id)
  }

  const handleProductWishlistState = (product) => {
    isInWishlist(product)
      ? removeFromWishlist(product)
      : addToWishlist(product)
  }

  const addToWishlist = (product) => {
    const newWishlist = [...wishlist, product]
    setWishlist(newWishlist)
  }

  const removeFromWishlist = (product) => {
    const newWishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== product.id)
    setWishlist(newWishlist)
  }

  const context = {
    wishlist, 
    isInWishlist,
    handleProductWishlistState
  }

  return (
    <WishlistContext.Provider value={context}>
      {children}
    </WishlistContext.Provider>
  )
}

function useWishlistContext() {
  const context = useContext(WishlistContext)

  if (!context) {
    throw new Error('useWishlistContext must be used within a WishlistContextProvider')
  }

  return context
}

export { WishlistProvider, useWishlistContext }