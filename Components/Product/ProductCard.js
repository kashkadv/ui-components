'use client'

import Image from "next/image"
import Link from "next/link"
import { createContext, useContext } from "react"
import ProductPrice from "./ProductPrice"
import ImagePlaceholder from "../UI/ImagePlaceholder"
import { getLocalizedString } from "@/helpers/localization"
import { useAppContext } from "@/context/AppContext"
import { buildSize } from "@/helpers"

const ProductContext = createContext()

function ProductCard({ product, category = null, type = 'default' }) {
  const { locale } = useAppContext()

  const typeComponents = {
    'default': DefaultCard,
    'defaultShort': DefaultCardShort,
    'list': ListCard
  }
  const Component = typeComponents[type]

  return (
    <ProductContext.Provider value={{ product, category, locale }}>
      <Component />
    </ProductContext.Provider>
  )
}

function DefaultCard() {
  const {product, category, locale} = useContext(ProductContext)
  
  const title = product.title || category.product_title

  return (
    <Link href={`/product/${product.slug}`} className="relative bg-white p-12 pb-6 group h-fit">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <ImagePlaceholder />
        <Image className="scale-[103%] object-cover" fill src={product.image} alt={getLocalizedString(locale, title) || 'alt'} />
      </div>      
      <div className="flex items-end justify-between w-full ">
        <ProductCardSizes />
        <div></div>
        <div className="flex flex-col gap-1 text-right items-end">
          <div className="pt-6 flex-shrink-0 w-max text-right font-semibold text-body">{getLocalizedString(locale, title)}</div>
          <div className="font-semibold text-grey leading-none"><ProductPrice price={product.base_price} /></div>
        </div>
      </div>
    </Link>
  )
}

function DefaultCardShort() {
  const {product} = useContext(ProductContext)

  return (
    <Link href={`/product/${product.sid ? product.sid : product.articul}`} className="relative bg-white p-12 group">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%] object-cover" fill src={product.image} alt="wishlist product" />
      </div>
    </Link>
  )
}

function ListCard() {
  const {product} = useContext(ProductContext)

  return (
    <div className="relative flex w-1/2 max-w-full mx-auto bg-white p-6 gap-6">
      <div className="relative w-48 overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%]" fill src={product.image} alt={product.sid} />
      </div>      
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col gap-1 text-right">
          <Link href={`/product/${product.sid || product.articul}`} className="pt-6 flex-shrink-0 w-max text-right font-semibold text-body">{product.sid}</Link>
          {/* <div className="font-semibold text-grey leading-none"><ProductPrice price={product.sid} /></div> */}
        </div>
      </div>
    </div>
  )
}

function ProductCardSizes() {
  const {product, locale} = useContext(ProductContext)
  let sizes = product.sizes || []

  if (sizes.length > 0) {
    sizes = sizes.map((size) => buildSize(product,size))
  }

  return (
    <div className="flex flex-wrap gap-2 text-right text-small font-bold max-w-[80%]">
      {sizes?.map((size, i) => (
        <div key={`${product.id}-size-${i}`} className={!size.availability ? 'text-greyLight' : ''}>{size.label}</div>
      ))}
    </div>
  )
}

export default ProductCard