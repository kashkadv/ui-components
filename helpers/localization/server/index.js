import { getLocale } from "next-intl/server";
import { cookies } from "next/headers";

export async function translate(data) {
  if (!data) return 'Key is not defined'

  const locale = await getLocale()
  const {dictionaries} = await getDicitionariesFromCookies()
  const [dictionaryName, key] = data.split('.')
  
  return dictionaries?.[dictionaryName]?.[key]?.[locale] || 'Translation is not defined'
}

export async function getDicitionariesFromCookies() {
  const dictionaries = (await cookies()).get('dictionaries')
  return dictionaries ? JSON.parse(dictionaries.value) : null
}