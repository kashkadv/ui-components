import Image from "next/image"
import Link from "next/link"
import UseIcon from "../UI/UseIcon"
import ImagePlaceholder from "../UI/ImagePlaceholder"
import { getLocalizedString } from "@/helpers/localization"
import { getLocale } from "next-intl/server"
import { translate } from "@/helpers/localization/server"

const imageClassNames = `order-1 laptop:order-2 laptop:col-span-1`
const infoClassNames = `order-2 laptop:order-1 laptop:grid laptop:gap-6 desktop:grid-cols-3 laptop:col-span-1 flex-col gap-6 flex items-start h-fit` 

async function CategoryCard({category, last, baseUrl }) {
  const locale = await getLocale()

  const { title, slug, poster } = category
  const {blurDataURL, src} = poster

  const href = `${baseUrl}/${slug}`

  return (
    <div className={`grid grid-col-1 gap-12 items-center laptop:grid-cols-2 w-full ${last ? '' : 'mb-12 pb-12 laptop:border-b-[1px] border-b-greyLight'}`}>
      <div className={infoClassNames}>
        <Link href={href} className="text-h4 font-semibold text-greyDark leading-none font-secondary">{getLocalizedString(locale, category?.title)}</Link>
        <div className="desktop:col-span-2 h-full flex flex-col justify-between gap-6 laptop:gap-12">
          <div className="font-normal font-primary text-grey">
            {getLocalizedString(locale, category?.description)}
          </div>
          <Link href={href} className="py-2 text-body font-normal !underline tracking-wider leading-none text-green group hover:text-grey transition-all duration-500 inline-flex gap-2 items-center">
            {/* <span>{translate('buttons.buyBtnLabel')}</span> */}
            <span>Перейти до категорії</span>
            <UseIcon id="arrow-right" w="4" className="group-hover:ml-2 group-hover:rtl:mr-2 transition-all" />
          </Link>
        </div>
      </div>
      <div className={imageClassNames}>
        <Link href={href} className="h-full block relative aspect-square max-h-[calc(100dvh_*_0.6)] ltr:ml-auto rtl:mr-auto p-12 bg-white">
          <div className="relative w-full h-full shadow-xl hover:shadow-none transition-all duration-500 overflow-hidden">
            <ImagePlaceholder />
            <Image src={src} blurDataURL={blurDataURL} alt={title} fill className="scale-[100.5%] hover:scale-[105%] w-full h-full object-cover transition-all duration-1000" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CategoryCard




