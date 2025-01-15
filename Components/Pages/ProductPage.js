"use client";

import ProductGallery from "@/Components/Product/ProductGallery";
import ProductInfoAccordion from "@/Components/Product/ProductInfoAccordion";
import ProductInfoNavigation from "@/Components/Product/ProductInfoNavigation";
import ProductOrderBlock from "@/Components/Product/ProductOrderBlock";
import { createContext, useContext, useEffect, useState } from "react";
import { AddToWishlistButton } from "../Wishlist";

const info = [
  {
    label: 'Description',
    content: '1'
  },
  {
    label: 'Care',
    content: '2'
  },
  {
    label: 'Materials',
    content: '3'
  },
  {
    label: 'Shipping & Returns',
    content: '4'
  }
]

const ProductPageContext = createContext()

function ProductPage({ product, size = null }) {
  const [productInfoActiveIndex, setProductInfoActiveIndex] = useState(null)
  const [activeSize, setActiveSize] = useState(product?.sizes?.length > 0 ? product?.sizes[0] : null)

  useEffect(() => {
    if (size) setActiveSize(product?.sizes?.find((productSize) => productSize.label == size))
  }, [])

  const openAccordionTab = (index, scroll = false) => {
    setProductInfoActiveIndex(index)
    scroll && document.getElementById(`accordion-tab-${index}`)?.scrollIntoView({ behavior: "smooth" })
  }
  
  const context = {
    product,
    info,
    productInfoActiveIndex,
    setActiveSize,
    activeSize,
    openAccordionTab,
  }

  return (
    <ProductPageContext.Provider value={context}>
      <div className="flex flex-col gap-24">
        <div className="grid grid-cols-2 gap-24">        
          <div className="w-full min-h-[800px] h-[calc(80dvh)] flex justify-start">
            <ProductGallery />
          </div>
          <div className="flex-1 flex flex-col items-stretch justify-between py-24">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 ">
                <AddToWishlistButton />
                <h1 className="text-4xl font-bold leading-none font-secondary">Product Title</h1>
                <div className="text-grey text-small self-end ml-auto">SKU - 123456789</div>
              </div>
              <p className="w-full min-w-[300px] opacity-90 text-grey">Donec eget mi auctor, ultricies eros a, semper magna. Curabitur in semper risus. Proin a auctor dolor. Nunc luctus elit diam, et malesuada ligula faucibus dignissim. Maecenas eu elit eu erat elementum euismod. Nullam leo velit, lacinia ac lacus sit amet, convallis rutrum est.</p>
            </div>
            <ProductOrderBlock />
            <ProductInfoNavigation />
          </div>
        </div>
        <ProductInfoAccordion />
      </div>
    </ProductPageContext.Provider>
  );
}

export const useProductPage = () => useContext(ProductPageContext)

export default ProductPage;
