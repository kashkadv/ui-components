'use client'

import { useAppContext } from "@/context/AppContext"
import UseIcon from "../UI/UseIcon";
import Button from "../UI/Button"
import Sidebar from "../UI/Sidebar"
import ProductCard from "../Product/ProductCard";
import { useWishlistContext } from "@/context/WishlistContext";
import NoContent from "../UI/NoContent";

export function AddToWishlistButton({ product }) {
  const { isInWishlist, handleProductWishlistState } = useWishlistContext()

  // TODO tooltip message when product is already in wishlist + transition
  return (
    <div className="w-5 h-5 mb-[7px] relative text-greyDark group">
      <Button onClick={() => handleProductWishlistState(product)} >
        <UseIcon id={`${isInWishlist(product) ? 'file-heart-selected' : 'file-heart'}`} w="5.4" />
      </Button>
      <div className="absolute w-max bg-white py-2 px-4 text-black rounded-xl shadow-xl tracking-widest text-small pointer-events-none opacity-0 group-hover:opacity-100 transition-all">\
        Add product to wishlist
      </div>
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
  const { wishlist : items, handleProductWishlistState } = useWishlistContext()

  // TODO add message when wishlist is empty
  if (!items || items.length === 0) return <NoContent message="Empty Wishlist Message" />

  return (
    <div className="w-full px-6 tablet:w-3/4 overflow-y-scroll max-h-dvh py-20 laptop:py-32 no-scrollbar">
      <div className="grid grid-cols-3 gap-12">
        {items.map((item, i) => (
          <div className="relative grid" key={i}>
            <Button onClick={() => handleProductWishlistState(item)} className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 text-red-500 z-10 ">
              <UseIcon id="x" w="8" />
            </Button>
            <ProductCard product={item} type="defaultShort" />
          </div>
        ))}
      </div>
    </div>
  )
}

export { WishlistTrigger, Wishlist, AddToWishlistButton }
