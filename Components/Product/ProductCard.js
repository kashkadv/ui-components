'use client'

import Image from "next/image"
import Link from "next/link"
import { createContext, useContext } from "react"
import ProductPrice from "./ProductPrice"

const ProductContext = createContext()

function ProductCard({ product, type = 'default' }) {
  const typeComponents = {
    'default': DefaultCard,
    'defaultShort': DefaultCardShort,
    'list': ListCard
  }
  const Component = typeComponents[type]

  return (
    <ProductContext.Provider value={{ product }}>
      <Component />
    </ProductContext.Provider>
  )
}

function DefaultCard() {
  const {product} = useContext(ProductContext)

  return (
    <Link href={`/product/${product.id}`} className="relative bg-white p-12 pb-6 group">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%]" fill src={product.images[0]} alt={product.name} />
      </div>      
      <div className="flex items-end justify-between w-full ">
        <ProductCardSizes />
        <div className="flex flex-col gap-1 text-right">
          <div className="pt-6 flex-shrink-0 w-max text-right font-semibold text-body">{product.name}</div>
          <div className="font-semibold text-grey leading-none"><ProductPrice data={product.price} /></div>
        </div>
      </div>
    </Link>
  )
}

function DefaultCardShort() {
  const {product} = useContext(ProductContext)

  return (
    <Link href={`/product/${product.sid ? product.sid : product.id}`} className="relative bg-white p-12 group">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%]" fill src={product.images[0]} alt={product.name} />
      </div>
    </Link>
  )
}

function ListCard() {
  const {product} = useContext(ProductContext)

  return (
    <Link href={`/product/${product.id}`} className="relative ">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%]" fill src={product.images[0]} alt={product.name} />
      </div>      
      <div className="flex items-end justify-between w-full ">
        <ProductCardSizes />
        <div className="flex flex-col gap-1 text-right">
          <div className="pt-6 flex-shrink-0 w-max text-right font-semibold text-body">{product.name}</div>
          <div className="font-semibold text-grey leading-none"><ProductPrice data={product.price} /></div>
        </div>
      </div>
    </Link>
  )
}

function ProductCardSizes() {
  const {product} = useContext(ProductContext)
  const sizes = product.sizes || []

  return (
    <div className="flex flex-wrap gap-2 text-right text-small font-bold max-w-[80%]">
      {sizes?.map((size, i) => (
        <div key={`${product.id}-size-${i}`} className={!size.availability ? 'text-greyLight' : ''}>{size.label}</div>
      ))}
    </div>
  )
}

export default ProductCard