'use client'

import { useAppContext } from "@/context/AppContext"
import { useEffect, useState } from "react";
import UseIcon from "../UI/UseIcon";
import Button from "../UI/Button"
import Sidebar from "../UI/Sidebar"
import ProductCard from "../Product/ProductCard";

function getWishlist() {
  try {
    const wishlist = JSON.parse(localStorage?.getItem('wishlist'));
    return wishlist || [];
  } catch {
    return [];
  }
};

function saveWishlist(wishlist) { 
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function removeFromWishlist(product) {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== product.id);
  saveWishlist(updatedWishlist);
}


export function WishlistButton({ product }) {  
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleAddToWishlist() {
    const wishlist = getWishlist();
    if (!isInWishlist) {
      wishlist.push(product);
      saveWishlist(wishlist);
      setIsInWishlist(true);
    }
  };

  function handleRemoveFromWishlist() {
    removeFromWishlist(product);
    setIsInWishlist(false);
  };

  useEffect(() => {
    const wishlist = getWishlist();
    setIsInWishlist(wishlist.some((wishlistItem) => wishlistItem.id === product.id));
    setLoading(false); 
  }, [product.id]);  

  return (
    <div className="w-5 h-5 mb-[7px] relative text-greyDark group">
      {!loading && (
        <>
          <button className="text-grey transition-all hover:text-greyDark" onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist} >
            {isInWishlist ? <UseIcon id="file-heart-selected" w="5.4" /> : <UseIcon id="file-heart" w="5.4" />}
          </button>
          <div className="absolute w-max bg-white py-2 px-4 text-black rounded-xl shadow-xl tracking-widest text-small pointer-events-none opacity-0 group-hover:opacity-100 transition-all">Add product to wishlist</div>
        </>
      )}
    </div>
  );
}

function WishlistTrigger() {
  const { handleWishlistOpen } = useAppContext()

  return (
    <Button onClick={handleWishlistOpen} className="text-greyDark focus:text-greyDark hover:text-greyLight">
      <UseIcon id="heart" w="6" />
    </Button>
  )
}

function Wishlist() {
  const { wishlistOpen, handleWishlistOpen } = useAppContext()

  return (
    <Sidebar  isOpen={wishlistOpen} callback={handleWishlistOpen} direction="left" className="bg-background text-grey">
      {wishlistOpen && <WishlistList />}
    </Sidebar>
  )
}

function WishlistList() {
  const [items, setItems] = useState(getWishlist())

  useEffect(() => {

  }, [])

  if (!items || items.length === 0) return 'Empty Wishlist Message'

  return (
    <div className="w-full px-6 tablet:w-3/4 overflow-y-scroll max-h-dvh py-20 laptop:py-32 no-scrollbar">
      <div className="grid grid-cols-3 gap-12">
        {items.map((item, i) => (
          <div className="relative grid" key={i}>
            <Button onClick={() => removeFromWishlist(item)} className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 text-red-500 z-10 ">
              <UseIcon id="x" w="8" />
            </Button>
            <ProductCard product={item} type="defaultShort" />
          </div>
        ))}
      </div>
    </div>
  )
}

export { WishlistTrigger, Wishlist, WishlistButton }
