'use client'

import { useEffect, useState } from "react";
import UseIcon from "../UI/UseIcon";

/* item = {
  id: 1,
  name: 'Product Name',
  image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75',
  price: 100
} */

  export function WishlistButton({ product }) {
    const getWishlist = () => {
      try {
        const wishlist = JSON.parse(localStorage?.getItem('wishlist'));
        return wishlist || [];
      } catch {
        return [];
      }
    };
  
    const saveWishlist = (wishlist) => {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    };
  
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [loading, setLoading] = useState(true); // New state to manage loading
  
    useEffect(() => {
      const wishlist = getWishlist();
      setIsInWishlist(wishlist.some((wishlistItem) => wishlistItem.id === product.id));
      setLoading(false); // Mark loading as complete
    }, [product.id]);
  
    const handleAddToWishlist = () => {
      const wishlist = getWishlist();
      if (!isInWishlist) {
        wishlist.push(product);
        saveWishlist(wishlist);
        setIsInWishlist(true);
      }
    };
  
    const handleRemoveFromWishlist = () => {
      const wishlist = getWishlist();
      const updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== product.id);
      saveWishlist(updatedWishlist);
      setIsInWishlist(false);
    };
  
    return (
      <div className="w-5 h-5 mb-[7px] relative text-greyDark group">
        {!loading && (
          <>
            <button onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist} >
              {isInWishlist ? <UseIcon id="file-heart-selected" w="5.4" /> : <UseIcon id="file-heart" w="5.4" />}
            </button>
            <div className="absolute w-max bg-white py-2 px-4 text-black rounded-xl shadow-xl tracking-widest text-small pointer-events-none opacity-0 group-hover:opacity-100 transition-all">Add product to wishlist</div>
          </>
        )}
      </div>
    );
  }

export function WishlistList() {
  return (
    <div>index</div>
  )
}

export {WishlistButton, WishlistList}