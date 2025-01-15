import { getLocalizedString } from "@/helpers/localization"
import { getLocale } from "next-intl/server"

async function CategoryBanner({ category }) {
  const locale = await getLocale()
  const { title, description } = category

  return (
    <div className="w-full py-12 grid grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-h1 font-black text-greyDark font-secondary">{getLocalizedString(locale, title)}</h1>
        <div className="font-primary text-grey">{getLocalizedString(locale, description)}</div>
      </div>
    </div>
  )
}

export default CategoryBanner