
import { getLocale, getMessages } from "next-intl/server"
import {getTranslations} from "next-intl/server"


export default async function Home() {
  const locale = await getLocale()
  const t = await getTranslations()

  console.log('t', t('name'))

  return <div>{locale}</div>
}
