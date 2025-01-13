import Image from "next/image"
import Link from "next/link"
import UseIcon from "../UI/UseIcon"

const imageClassNames = `order-1 laptop:order-2 laptop:col-span-1`
const infoClassNames = `order-2 laptop:order-1 laptop:grid laptop:gap-6 desktop:grid-cols-3 laptop:col-span-1 flex-col gap-6 flex items-start h-fit` 

function CategoryCard({category, last, baseUrl }) {
  
  const { title, slug, poster } = category
  const {blurDataURL, src} = poster

  const href = `${baseUrl}/${slug}`

  return (
    <div className={`grid grid-col-1 gap-12 items-center laptop:grid-cols-2 w-full ${last ? '' : 'mb-12 pb-12 laptop:border-b-[1px] border-b-greyLight'}`}>
      <div className={infoClassNames}>
        <Link href={href} className="font-bold text-greyDark font-primary tracking-widest">Category Name</Link>
        <div className="desktop:col-span-2 h-full flex flex-col justify-between gap-6 laptop:gap-12">
          <p className="font-normal font-secondary text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tortor ex, ut maximus eros mattis vitae. Vivamus at ex convallis, mattis quam ac, convallis lorem. Duis consequat rhoncus ipsum, ac fringilla odio condimentum vel.</p>
          <Link href={href} className="py-2 text-body font-medium leading-none tracking-widest text-greyDark group hover:text-grey transition-all duration-500 flex gap-2 items-center">
            <span>Learn more</span>
            <UseIcon id="arrow-right" w="4" className="group-hover:ml-2 group-hover:rtl:mr-2 transition-all" />
          </Link>
        </div>
      </div>
      <div className={imageClassNames}>
        <Link href={href} className="h-full block relative aspect-square max-h-[calc(100dvh_*_0.6)] ml-auto">
          <Image src={src} blurDataURL={blurDataURL} alt={title} fill className="w-full h-full object-cover" />
        </Link>
      </div>
    </div>
  )
}

export default CategoryCard




