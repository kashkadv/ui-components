import Image from "next/image"
import Link from "next/link"

function ProductCard({ product, type = 'default' }) {
  const typeComponents = {
    'default': DefaultCard,
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
      <div className="pt-6 text-right font-semibold text-body">{product.name}</div>
      <div className="flex items-center justify-between w-full ">
        <ProductCardSizes />
        <div className="text-right text-greyDark tracking-wider group-hover:text-grey transition-all duration-500 space-y-2">
          <div className="font-semibold text-grey">${product.price}</div>
        </div>
      </div>
    </Link>
  )
}

function ListCard({ product }) {

}

function ProductCardSizes() {
  return (
    <div className="flex gap-2 text-right text-small font-bold">
      <div>S</div>
      <div className="text-greyLight">M</div>
      <div>L</div>
      <div>XL</div>
    </div>
  )
}

export default ProductCard