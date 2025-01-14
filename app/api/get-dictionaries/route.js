// app/api/dictionaries/route.js

import { fetchSanity } from "@/sanity/fetch"
import { cookies } from "next/headers"

// Server Action (API route handler)
export async function GET() {
  const settings = await getDicitionariesFromSanity()
  const newDate = new Date(settings._updatedAt)

  const storedDictionaries = await getDicitionariesFromCookies()
  if (storedDictionaries) {
    const cachedDate = new Date(storedDictionaries.updatedAt)    
    if (newDate.getTime() <= cachedDate.getTime()) {
      console.log('return stored dictionary')
      return new Response(JSON.stringify(storedDictionaries.dictionaries))
    }
  }

  console.log('return new dictionary')
  const dictionaries = buildDictionaries(settings)
  updateCachedDictionaries(dictionaries)

  return new Response(JSON.stringify(dictionaries))
}

async function updateCachedDictionaries(dictionaries) {
  (await cookies()).set('dictionaries', JSON.stringify({ dictionaries: dictionaries, updatedAt: new Date() }))
}

async function getDicitionariesFromCookies() {
  const dictionaries = (await cookies()).get('dictionaries')
  return dictionaries ? JSON.parse(dictionaries.value) : null
}

async function getDicitionariesFromSanity() {
  const settings = await fetchSanity('settings')
  return settings
}

function buildDictionaries(settings) {
  const dictionaries = {}

  settings.dictionaries.forEach((dictionary) => {
    dictionaries[dictionary.name.toLowerCase()] = buildDictionaryValues(dictionary.items)
  })

  return dictionaries
}

function buildDictionaryValues(items) {
  const values = {}

  items?.forEach((item) => {
    const { key, _key, _type, ...value } = item
    values[key] = value
  })

  return values
}
