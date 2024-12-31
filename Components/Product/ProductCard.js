import Image from "next/image"
import Link from "next/link"

function ProductCard({ product, type = 'default' }) {
  const typeComponents = {
    'default': DefaultCard,
    'defaultShort': DefaultCardShort,
    'list': ListCard
  }

  const Component = typeComponents[type]

  return <Component product={product} />
}

function DefaultCard({ product }) {
  return (
    <Link href={`/product-page`} className="relative bg-white p-12 pb-6 group">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%]" fill src={product.image} alt={product.name} />
      </div>      
      <div className="flex items-end justify-between w-full ">
        <ProductCardSizes />
        <div className="flex flex-col gap-1 text-right">
          <div className="pt-6 flex-shrink-0 w-max text-right font-semibold text-body">{product.name}</div>
          <div className="font-semibold text-grey leading-none">${product.price}</div>
        </div>
      </div>
    </Link>
  )
}

function DefaultCardShort({ product }) {
  return (
    <Link href={`/product-page`} className="relative bg-white p-12 group">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%]" fill src={product.image} alt={product.name} />
      </div>
    </Link>
  )
}

function ListCard({ product }) {
  return (
    <Link href={`/product-page`} className="relative ">
      <div className="relative w-full overflow-hidden aspect-[3/4] shadow-xl group-hover:shadow-none transition-all duration-500">
        <Image className="scale-[103%]" fill src={product.image} alt={product.name} />
      </div>      
      <div className="flex items-end justify-between w-full ">
        <ProductCardSizes />
        <div className="flex flex-col gap-1 text-right">
          <div className="pt-6 flex-shrink-0 w-max text-right font-semibold text-body">{product.name}</div>
          <div className="font-semibold text-grey leading-none">${product.price}</div>
        </div>
      </div>
    </Link>
  )
}

function ProductCardSizes() {
  return (
    <div className="flex flex-wrap gap-2 text-right text-small font-bold max-w-[80%]">
      <div>140cm*200cm</div> 
      <div className="text-greyLight">150cm*200cm</div>
    </div>
  )
}

export default ProductCard