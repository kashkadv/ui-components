"use client";

import ProductGallery from "@/Components/Product/ProductGallery";
import ProductInfoAccordion from "@/Components/Product/ProductInfoAccordion";
import ProductInfoNavigation from "@/Components/Product/ProductInfoNavigation";
import ProductOrderBlock from "@/Components/Product/ProductOrderBlock";
import { createContext, useContext, useState } from "react";
import UseIcon from "../UI/UseIcon";
import { WishlistButton } from "../Wishlist";

// TODO remove mockdata
const images = [
  "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
  "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
  "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
];

const product = {
  id: 1,
  name: 'Product Name',
  image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75',
  price: 100
}

const sizes = [
  {
    label: 'S',
    availability: true
  },
  {
    label: 'M',
    availability: false
  },
  {
    label: 'L',
    availability: false
  }
]

const priceData = {
  regularPrice: '$100'
}

const tabs = ['Description', 'Care', 'Materials', 'Shipping & Returns']

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


function ProductPage() {
  const [productInfoActiveIndex, setProductInfoActiveIndex] = useState(null);

  const openAccordionTab = (index, scroll = false) => {
    setProductInfoActiveIndex(index)
    scroll && document.getElementById(`accordion-tab-${index}`)?.scrollIntoView({ behavior: "smooth" })
  };
  
  const context = {
    product,
    images,
    sizes,
    priceData,
    info,
    productInfoActiveIndex,
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
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-3 ">
                <WishlistButton product={product} />
                <h1 className="text-4xl font-bold leading-none">Product Title</h1>
              </div>
              <div className="text-grey font-medium">SKU: 123456789</div>
              <p className="w-3/4 min-w-[300px] opacity-90">Donec eget mi auctor, ultricies eros a, semper magna. Curabitur in semper risus. Proin a auctor dolor. Nunc luctus elit diam, et malesuada ligula faucibus dignissim. Maecenas eu elit eu erat elementum euismod. Nullam leo velit, lacinia ac lacus sit amet, convallis rutrum est.</p>
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
